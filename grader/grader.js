// grader.js – Paper preview with PDF embed

(function() {
    if (!isLoggedIn()) {
        window.location.href = '../login.html';
        return;
    }

    // ── Topbar & Session ────────────────────
    const currentUser = getCurrentUser();
    document.getElementById('currentUsername').textContent = currentUser.displayName;

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

    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

    // ── Dropdowns & Preview ──────────────────
    const typeSelect = document.getElementById('typeSelect');
    const yearSelect = document.getElementById('yearSelect');
    const previewContainer = document.getElementById('previewContainer');

    const STORAGE_TYPE = 'grader_type';
    const STORAGE_YEAR = 'grader_year';

    // Populate type dropdown
    Object.keys(GRADE_DATA).forEach(type => {
        const opt = document.createElement('option');
        opt.value = type;
        opt.textContent = type;
        typeSelect.appendChild(opt);
    });

    // When type changes, populate year
    typeSelect.addEventListener('change', () => {
        const type = typeSelect.value;
        yearSelect.innerHTML = '<option value="">-- Choose --</option>';
        if (type && GRADE_DATA[type]) {
            GRADE_DATA[type].years.forEach(y => {
                const opt = document.createElement('option');
                opt.value = y;
                opt.textContent = y;
                yearSelect.appendChild(opt);
            });
        }
        // Clear preview if type changes
        previewContainer.innerHTML = '';
        // If a year was previously stored for this type, select it
        const savedType = localStorage.getItem(STORAGE_TYPE);
        if (savedType === type) {
            const savedYear = localStorage.getItem(STORAGE_YEAR);
            if (savedYear && GRADE_DATA[type].years.includes(Number(savedYear))) {
                yearSelect.value = savedYear;
                showPreview(type, savedYear);
            }
        } else {
            localStorage.removeItem(STORAGE_YEAR);
        }
    });

    yearSelect.addEventListener('change', () => {
        const type = typeSelect.value;
        const year = yearSelect.value;
        if (type && year) {
            localStorage.setItem(STORAGE_TYPE, type);
            localStorage.setItem(STORAGE_YEAR, year);
            showPreview(type, year);
        } else {
            previewContainer.innerHTML = '';
        }
    });

    function showPreview(type, year) {
        const subject = GRADE_DATA[type];
        if (!subject) return;
        const code = subject.code; // 'pho' or 'imo'
        const qPath = `./data/${code}/q/${year}.pdf`;
        const aPath = `./data/${code}/a/${year}.pdf`;

        previewContainer.innerHTML = `
            <div class="preview-column">
                <div class="preview-header">
                    <span>📄 ${type} ${year} – Questions</span>
                    <a href="${qPath}" target="_blank" title="Open in new tab">🔗 Open</a>
                </div>
                <iframe src="${qPath}#view=FitH" class="preview-frame" allowfullscreen></iframe>
            </div>
            <div class="preview-column">
                <div class="preview-header">
                    <span>✅ ${type} ${year} – Solutions</span>
                    <a href="${aPath}" target="_blank" title="Open in new tab">🔗 Open</a>
                </div>
                <iframe src="${aPath}#view=FitH" class="preview-frame" allowfullscreen></iframe>
            </div>
        `;
    }

    // ── Restore saved selection on page load ──
    function restoreSelections() {
        const savedType = localStorage.getItem(STORAGE_TYPE);
        if (!savedType || !GRADE_DATA[savedType]) return;

        typeSelect.value = savedType;
        // Trigger year population
        typeSelect.dispatchEvent(new Event('change'));

        const savedYear = localStorage.getItem(STORAGE_YEAR);
        if (savedYear && GRADE_DATA[savedType].years.includes(Number(savedYear))) {
            // The change event already triggered, but we need to set year after population
            setTimeout(() => {
                yearSelect.value = savedYear;
                showPreview(savedType, savedYear);
            }, 10);
        }
    }

    restoreSelections();
})();
