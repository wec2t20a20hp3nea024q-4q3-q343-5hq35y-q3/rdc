// ========================================
// app.js - Main Application (Index Page)
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    // ── Require Authentication ──────────────
    // (Double-check in case auth.js auto-run missed it)
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }

    // ── Get Current User ────────────────────
    const currentUser = getCurrentUser();
    const displayName = currentUser ? currentUser.displayName : 'User';

    // ── DOM Elements ────────────────────────
    const usernameDisplay = document.getElementById('currentUsername');
    const userMenu = document.getElementById('userMenu');
    const logoutDropdown = document.getElementById('logoutDropdown');
    const logoutBtn = document.getElementById('logoutBtn');
    const clockTime = document.getElementById('clockTime');
    const currentDateEl = document.getElementById('currentDate');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // ── Set Username ────────────────────────
    if (usernameDisplay) {
        usernameDisplay.textContent = displayName;
    }

    // ── Set Current Date ────────────────────
    function updateDateDisplay() {
        if (currentDateEl) {
            const now = new Date();
            const gmt8 = getGMT8Date(now);
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            currentDateEl.textContent = gmt8.toLocaleDateString('en-US', options);
        }
    }
    updateDateDisplay();

    // ── GMT+8 Clock ─────────────────────────
    function getGMT8Date(date) {
        // Convert local date to GMT+8
        const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        return new Date(utc + (8 * 3600000));
    }

    function updateClock() {
        if (clockTime) {
            const now = new Date();
            const gmt8 = getGMT8Date(now);
            const hours = String(gmt8.getHours()).padStart(2, '0');
            const minutes = String(gmt8.getMinutes()).padStart(2, '0');
            const seconds = String(gmt8.getSeconds()).padStart(2, '0');
            clockTime.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    updateClock();
    setInterval(updateClock, 1000);

    // ── User Menu Dropdown ──────────────────
    if (userMenu && logoutDropdown) {
        // Toggle dropdown on username click
        userMenu.addEventListener('click', function (e) {
            e.stopPropagation();
            userMenu.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!userMenu.contains(e.target)) {
                userMenu.classList.remove('open');
            }
        });

        // Close dropdown on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                userMenu.classList.remove('open');
            }
        });
    }

    // ── Logout ──────────────────────────────
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            logout();
            window.location.href = 'login.html';
        });
    }

    // ── Sidebar Link Active State ───────────
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');

            // Optional: close sidebar on mobile after clicking a link
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('open');
            }
        });
    });

    // ── Mobile Sidebar Toggle ───────────────
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                const clickedOutsideSidebar = !sidebar.contains(e.target);
                const clickedToggle = sidebarToggle.contains(e.target);
                if (clickedOutsideSidebar && !clickedToggle && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }

    // ── Keyboard Shortcuts ──────────────────
    document.addEventListener('keydown', function (e) {
        // Ctrl+Shift+L to logout
        if (e.ctrlKey && e.shiftKey && e.key === 'L') {
            e.preventDefault();
            logout();
            window.location.href = 'login.html';
        }
        // Toggle sidebar with Ctrl+B
        if (e.ctrlKey && e.key === 'b') {
            e.preventDefault();
            if (sidebar) {
                sidebar.classList.toggle('open');
            }
        }
    });

    // ── Handle window resize ────────────────
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && sidebar) {
            // On desktop, ensure sidebar is visible
            sidebar.classList.remove('open');
        }
    });

    // ── Initialization complete ─────────────
    console.log(`RDC Platform initialized. Welcome, ${displayName}!`);
    console.log('Session active. Use the sidebar to navigate.');
    console.log('Tip: Press Ctrl+Shift+L to logout, Ctrl+B to toggle sidebar.');
});