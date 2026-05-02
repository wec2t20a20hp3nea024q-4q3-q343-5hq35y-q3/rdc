// planning.js - Interactive Grid View with Persistent Subject Selection

(function() {
    if (!isLoggedIn()) {
        window.location.href = '../login.html';
        return;
    }

    // ── Topbar & Session ────────────────────
    const currentUser = getCurrentUser();
    document.getElementById('currentUsername').textContent = currentUser.displayName;

    // Clock
    function updateClock() {
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const gmt8 = new Date(utc + (8 * 3600000));
        const timeStr = [gmt8.getHours(), gmt8.getMinutes(), gmt8.getSeconds()]
            .map(v => String(v).padStart(2, '0')).join(':');
        document.getElementById('clockTime').textContent = timeStr;
    }
    updateClock();
    setInterval(updateClock, 500);

    // User menu & logout
    const userMenu = document.getElementById('userMenu');
    const logoutBtn = document.getElementById('logoutBtn');
    userMenu.addEventListener('click', e => {
        e.stopPropagation();
        userMenu.classList.toggle('open');
    });
    document.addEventListener('click', e => {
        if (!userMenu.contains(e.target)) userMenu.classList.remove('open');
    });
    logoutBtn.addEventListener('click', () => {
        logout();
        window.location.href = '../login.html';
    });

    // Original sidebar toggle (mobile)
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

    // ── State ───────────────────────────────
    let currentSubjectId = null;
    let highlightedTopics = new Set();
    let allExercisesHidden = false;
    const SUBJECT_STORAGE_KEY = 'plan_current_subject';

    // Load highlights
    function loadHighlights() {
        const stored = localStorage.getItem('plan_highlighted');
        if (stored) {
            try { highlightedTopics = new Set(JSON.parse(stored)); } catch(e) {}
        }
    }
    loadHighlights();

    function saveHighlights() {
        localStorage.setItem('plan_highlighted', JSON.stringify([...highlightedTopics]));
    }

    // ── Data helpers ─────────────────────────
    function getExerciseInfo(exerciseId) {
        for (let subj of PLANNING_DATA) {
            for (let topic of subj.topics) {
                const ex = topic.exercises.find(e => e.id === exerciseId);
                if (ex) return { exercise: ex, topicId: topic.id, subjectId: subj.id };
            }
        }
        return null;
    }

    function getStoredScore(exId) {
        const val = localStorage.getItem(`plan_score_${exId}`);
        return val !== null ? Number(val) : null;
    }
    function setStoredScore(exId, score) {
        if (score === null || isNaN(score)) localStorage.removeItem(`plan_score_${exId}`);
        else localStorage.setItem(`plan_score_${exId}`, score);
    }
    function getFinished(exId) {
        return localStorage.getItem(`plan_finished_${exId}`) === 'true';
    }
    function setFinished(exId, finished) {
        localStorage.setItem(`plan_finished_${exId}`, finished);
    }

    // ── Subject Sidebar ─────────────────────
    const subjectNav = document.getElementById('subjectNav');
    function renderSubjectSidebar() {
        subjectNav.innerHTML = '';
        PLANNING_DATA.forEach(subject => {
            const link = document.createElement('a');
            link.className = 'subject-link';
            link.textContent = subject.code;
            link.dataset.subjectId = subject.id;
            if (subject.id === currentSubjectId) link.classList.add('active');
            link.addEventListener('click', () => selectSubject(subject.id));
            subjectNav.appendChild(link);
        });
    }

    function selectSubject(subjectId) {
        currentSubjectId = subjectId;
        // Save to localStorage
        localStorage.setItem(SUBJECT_STORAGE_KEY, subjectId);
        renderSubjectSidebar();
        renderTopicsGrid();
    }

    // ── Topics Grid & Percentage ──────────────
    const topicsGrid = document.getElementById('topicsGrid');
    const toggleBtn = document.getElementById('toggleAllExercisesBtn');

    function calculateTopicPercentage(topicId) {
        const subject = PLANNING_DATA.find(s => s.id === currentSubjectId);
        if (!subject) return 0;
        const topic = subject.topics.find(t => t.id === topicId);
        if (!topic) return 0;
        let total = 0, achieved = 0;
        topic.exercises.forEach(ex => {
            total += ex.fullMark;
            const score = getStoredScore(ex.id);
            if (score !== null && !isNaN(score)) {
                achieved += Math.min(score, ex.fullMark);
            }
        });
        return total > 0 ? (achieved / total) * 100 : 0;
    }

    function updateTopicPercentage(topicId) {
        const column = document.querySelector(`.topic-column[data-topic-id="${topicId}"]`);
        if (!column) return;
        const percent = calculateTopicPercentage(topicId);
        const percentEl = column.querySelector('.topic-percent');
        if (percentEl) {
            percentEl.textContent = Math.round(percent) + '%';
        }
        column.classList.remove('topic-bg-red', 'topic-bg-yellow', 'topic-bg-green');
        if (percent < 70) {
            column.classList.add('topic-bg-red');
        } else if (percent <= 85) {
            column.classList.add('topic-bg-yellow');
        } else {
            column.classList.add('topic-bg-green');
        }
    }

    function renderTopicsGrid() {
        const subject = PLANNING_DATA.find(s => s.id === currentSubjectId);
        if (!subject) {
            topicsGrid.innerHTML = '<p>Select a subject.</p>';
            return;
        }
        let html = '';
        subject.topics.forEach(topic => {
            const isHighlighted = highlightedTopics.has(topic.id);
            const allFinished = topic.exercises.every(ex => getFinished(ex.id));
            const percentage = calculateTopicPercentage(topic.id);
            let headerClasses = 'topic-header';
            if (isHighlighted) {
                headerClasses += ' highlighted';
                if (allFinished) headerClasses += ' highlighted-finished';
            }

            let colBgClass = '';
            if (percentage < 70) colBgClass = 'topic-bg-red';
            else if (percentage <= 85) colBgClass = 'topic-bg-yellow';
            else colBgClass = 'topic-bg-green';

            html += `
                <div class="topic-column ${colBgClass}" data-topic-id="${topic.id}">
                    <div class="${headerClasses}">
                        <span class="topic-name">${topic.code}</span>
                        <span class="topic-percent">${Math.round(percentage)}%</span>
                    </div>
                    <div class="topic-exercises${allExercisesHidden ? ' collapsed' : ''}">
                        ${topic.exercises.map(ex => renderExerciseBlock(ex, topic.id)).join('')}
                    </div>
                </div>
            `;
        });
        topicsGrid.innerHTML = html;

        // Attach events
        document.querySelectorAll('.exercise-block').forEach(block => {
            const header = block.querySelector('.exercise-header');
            const scoreInput = block.querySelector('.score-input');
            const toggleFinishBtn = block.querySelector('.toggle-btn');
            const exerciseId = block.dataset.exerciseId;
            const info = getExerciseInfo(exerciseId);
            if (!info) return;
            const fullMark = info.exercise.fullMark;

            header.addEventListener('click', (e) => {
                e.stopPropagation();
                block.classList.toggle('expanded');
            });

            scoreInput.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (!isNaN(val) && val >= 0) {
                    setStoredScore(exerciseId, val);
                } else if (e.target.value === '') {
                    setStoredScore(exerciseId, null);
                } else {
                    e.target.value = getStoredScore(exerciseId) || '';
                }
                updateExerciseVisual(block, exerciseId, fullMark, getFinished(exerciseId));
                updateTopicHighlight(exerciseId);
                updateTopicPercentage(info.topicId);
            });

            toggleFinishBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const currentState = getFinished(exerciseId);
                const newState = !currentState;
                setFinished(exerciseId, newState);

                if (newState) {
                    const currentScore = getStoredScore(exerciseId);
                    if (currentScore === null || currentScore === 0) {
                        setStoredScore(exerciseId, fullMark);
                        scoreInput.value = fullMark;
                    }
                }

                toggleFinishBtn.textContent = newState ? '✓ Done' : '⏺ Pending';
                toggleFinishBtn.classList.toggle('on', newState);
                toggleFinishBtn.classList.toggle('off', !newState);
                updateExerciseVisual(block, exerciseId, fullMark, newState);
                updateTopicHighlight(exerciseId);
                updateTopicPercentage(info.topicId);
            });
        });
    }

    function renderExerciseBlock(ex, topicId) {
        const storedScore = getStoredScore(ex.id);
        const finished = getFinished(ex.id);
        const fullMark = ex.fullMark;
        const scorePercent = (storedScore !== null && fullMark > 0) ? (storedScore / fullMark) * 100 : null;
        let colorClass = '';
        if (scorePercent !== null) {
            if (scorePercent < 70) colorClass = 'score-red';
            else if (scorePercent > 85) colorClass = 'score-green';
            else colorClass = 'score-yellow';
        }
        const finishedClass = finished ? 'finished-outline' : '';
        return `
            <div class="exercise-block ${colorClass} ${finishedClass}" data-exercise-id="${ex.id}">
                <div class="exercise-header">
                    <span class="exercise-code">${ex.code}</span>
                    <span class="expand-icon">▾</span>
                </div>
                <div class="exercise-details">
                    <div class="exercise-code-display">Code: ${ex.code}</div>
                    <div class="score-row">
                        <label>Score:</label>
                        <input type="number" class="score-input" value="${storedScore !== null ? storedScore : ''}" placeholder="0" min="0">
                        <span class="score-divider">/ ${fullMark}</span>
                    </div>
                    <div class="finished-toggle">
                        <span>Finished:</span>
                        <button class="toggle-btn ${finished ? 'on' : 'off'}">${finished ? '✓ Done' : '⏺ Pending'}</button>
                    </div>
                </div>
            </div>
        `;
    }

    function updateExerciseVisual(block, exId, fullMark, finished) {
        const storedScore = getStoredScore(exId);
        const scorePercent = (storedScore !== null && fullMark > 0) ? (storedScore / fullMark) * 100 : null;
        block.classList.remove('score-red', 'score-yellow', 'score-green');
        if (scorePercent !== null) {
            if (scorePercent < 70) block.classList.add('score-red');
            else if (scorePercent > 85) block.classList.add('score-green');
            else block.classList.add('score-yellow');
        }
        if (finished) block.classList.add('finished-outline');
        else block.classList.remove('finished-outline');
    }

    function updateTopicHighlight(exerciseId) {
        const info = getExerciseInfo(exerciseId);
        if (!info) return;
        const topicColumn = document.querySelector(`.topic-column[data-topic-id="${info.topicId}"]`);
        if (!topicColumn) return;
        const subject = PLANNING_DATA.find(s => s.id === currentSubjectId);
        if (!subject) return;
        const topic = subject.topics.find(t => t.id === info.topicId);
        if (!topic) return;
        const allFinished = topic.exercises.every(ex => getFinished(ex.id));
        const header = topicColumn.querySelector('.topic-header');
        if (highlightedTopics.has(info.topicId)) {
            header.classList.add('highlighted');
            if (allFinished) {
                header.classList.add('highlighted-finished');
            } else {
                header.classList.remove('highlighted-finished');
            }
        } else {
            header.classList.remove('highlighted', 'highlighted-finished');
        }
    }

    // ── Toggle All Exercises ──────────────────
    toggleBtn.addEventListener('click', () => {
        allExercisesHidden = !allExercisesHidden;
        document.querySelectorAll('.topic-exercises').forEach(el => {
            el.classList.toggle('collapsed', allExercisesHidden);
        });
        toggleBtn.textContent = allExercisesHidden ? '📂 Show All Exercises' : '📦 Hide All Exercises';
        toggleBtn.classList.toggle('showing', allExercisesHidden);
    });

    // ── Highlight Topics (in‑page input) ──────
    const highlightInput = document.getElementById('highlightInput');
    const highlightApplyBtn = document.getElementById('highlightApplyBtn');

    highlightApplyBtn.addEventListener('click', () => {
        const raw = highlightInput.value.trim();
        if (!raw) return;

        const entries = raw.split(',').map(s => s.trim()).filter(Boolean);
        entries.forEach(entry => {
            const deleteMatch = entry.match(/^DELETE\s+(.*)/i);
            if (deleteMatch) {
                const rest = deleteMatch[1].trim();
                const parts = rest.split(/\s+/);
                if (parts.length >= 2) {
                    const subjCode = parts[0].toUpperCase();
                    const topicCode = parts[1].toUpperCase();
                    const subject = PLANNING_DATA.find(s => s.code.toUpperCase() === subjCode);
                    if (subject) {
                        const topic = subject.topics.find(t => t.code.toUpperCase() === topicCode);
                        if (topic) highlightedTopics.delete(topic.id);
                    }
                }
            } else {
                const colonIdx = entry.indexOf(':');
                if (colonIdx === -1) return;
                const subjCode = entry.substring(0, colonIdx).trim().toUpperCase();
                const topicCode = entry.substring(colonIdx + 1).trim().toUpperCase();
                if (!subjCode || !topicCode) return;
                const subject = PLANNING_DATA.find(s => s.code.toUpperCase() === subjCode);
                if (!subject) return;
                const topic = subject.topics.find(t => t.code.toUpperCase() === topicCode);
                if (topic) highlightedTopics.add(topic.id);
            }
        });

        saveHighlights();
        renderTopicsGrid();
        if (allExercisesHidden) {
            document.querySelectorAll('.topic-exercises').forEach(el => el.classList.add('collapsed'));
        }
    });

    // ── Initialize ────────────────────────────
    function initializeSubject() {
        // Try to load stored subject ID, otherwise default to first subject
        const storedSubjectId = localStorage.getItem(SUBJECT_STORAGE_KEY);
        const validSubject = PLANNING_DATA.find(s => s.id === storedSubjectId);
        if (validSubject) {
            selectSubject(validSubject.id);
        } else if (PLANNING_DATA.length > 0) {
            selectSubject(PLANNING_DATA[0].id);
        }
    }

    renderSubjectSidebar();
    initializeSubject();   // uses stored subject if available
})();