// app.js - Universal top bar, sidebar toggle, clock, user menu

(function() {
    // ── Require Authentication ──────────────
    if (typeof isLoggedIn === 'function' && !isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }

    // ── Get Current User ────────────────────
    let displayName = 'User';
    if (typeof getCurrentUser === 'function') {
        const user = getCurrentUser();
        if (user && user.displayName) displayName = user.displayName;
    }

    // ── DOM Elements (safe query) ──────────
    function safeId(id) { return document.getElementById(id); }

    const usernameEl = safeId('currentUsername');
    const clockEl = safeId('clockTime');
    const userMenu = safeId('userMenu');
    const logoutBtn = safeId('logoutBtn');
    const sidebar = safeId('sidebar');
    const topbarLeft = document.querySelector('.topbar-left');

    // ── Set Username ────────────────────────
    if (usernameEl) usernameEl.textContent = displayName;

    // ── GMT+8 Clock ─────────────────────────
    function getGMT8Date(date) {
        const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        return new Date(utc + (8 * 3600000));
    }

    function updateClock() {
        if (!clockEl) return;
        const gmt8 = getGMT8Date(new Date());
        const time = [gmt8.getHours(), gmt8.getMinutes(), gmt8.getSeconds()]
            .map(v => String(v).padStart(2, '0')).join(':');
        clockEl.textContent = time;
    }
    updateClock();
    setInterval(updateClock, 500);

    // ── User Menu Dropdown ──────────────────
    if (userMenu) {
        userMenu.addEventListener('click', e => {
            e.stopPropagation();
            userMenu.classList.toggle('open');
        });
        document.addEventListener('click', e => {
            if (!userMenu.contains(e.target)) userMenu.classList.remove('open');
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') userMenu.classList.remove('open');
        });
    }

    // ── Logout ──────────────────────────────
    if (logoutBtn) {
        logoutBtn.addEventListener('click', e => {
            e.stopPropagation();
            if (typeof logout === 'function') logout();
            window.location.href = '../login.html';
        });
    }

    // ── Sidebar Toggle (universal) ──────────
    if (topbarLeft && sidebar) {
        // Insert toggle button if not already present
        let toggleBtn = document.getElementById('sidebarToggleTop');
        if (!toggleBtn) {
            toggleBtn = document.createElement('button');
            toggleBtn.id = 'sidebarToggleTop';
            toggleBtn.className = 'topbar-sidebar-toggle';
            toggleBtn.title = 'Toggle Sidebar';
            topbarLeft.insertBefore(toggleBtn, topbarLeft.firstChild);
        }

        const body = document.body;

        const setSidebarState = (open) => {
            if (open) {
                sidebar.classList.add('open');
                toggleBtn.innerHTML = '✕';
                if (window.innerWidth > 768) body.classList.remove('sidebar-closed');
            } else {
                sidebar.classList.remove('open');
                toggleBtn.innerHTML = '☰';
                if (window.innerWidth > 768) body.classList.add('sidebar-closed');
            }
        };

        toggleBtn.addEventListener('click', () => {
            const isOpen = sidebar.classList.contains('open');
            setSidebarState(!isOpen);
        });

        // Initial state
        if (window.innerWidth > 768) {
            setSidebarState(true);   // desktop: open
        } else {
            setSidebarState(false);  // mobile: closed
        }

        // Resize handler
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                if (sidebar.classList.contains('open')) {
                    body.classList.remove('sidebar-closed');
                } else {
                    body.classList.add('sidebar-closed');
                }
            } else {
                body.classList.remove('sidebar-closed');
            }
        });

        // Keyboard shortcut
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && e.key === 'b') {
                e.preventDefault();
                setSidebarState(!sidebar.classList.contains('open'));
            }
        });
    }

    // ── Index-page specific (only if elements exist) ──
    const currentDateEl = safeId('currentDate');
    if (currentDateEl) {
        function updateDate() {
            const now = new Date();
            const gmt8 = getGMT8Date(now);
            currentDateEl.textContent = gmt8.toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });
        }
        updateDate();
    }

    // Sidebar link active style (works on any page)
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            // Close sidebar on mobile after navigation
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('open');
                const btn = document.getElementById('sidebarToggleTop');
                if (btn) btn.innerHTML = '☰';
            }
        });
    });

    console.log(`RDC Platform ready. Welcome, ${displayName}!`);
})();
