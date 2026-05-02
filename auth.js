// ========================================
// auth.js - Authentication & User Data Store
// ========================================

// ──────────────────────────────────────────
// USER DATA STORE (stored in this JS file)
// NOTE: lol you see the password right?
// ──────────────────────────────────────────
const USER_STORE = [
    {
        id: 1,
        username: 's22r42',
        password: 'helloworld',
        displayName: 'Chris Li',
        role: 'admin'
    },
    {
        id: 2,
        username: 'admin',
        password: '98273vnyt0347ty2374ty37952vt75vt8749ny3v4t385t7834nyt90v8cntyvnc3t098tv388wy4vt3283nymt09w4v2834',
        displayName: 'admin',
        role: 'admin'
    },
];

// ──────────────────────────────────────────
// SESSION MANAGEMENT
// ──────────────────────────────────────────
const SESSION_KEY = 'rdc_current_user';
const SESSION_EXPIRY_KEY = 'rdc_session_expiry';

/**
 * Get the currently logged-in user object from localStorage.
 * Returns null if no valid session exists or session has expired.
 */
function getCurrentUser() {
    const userJson = localStorage.getItem(SESSION_KEY);
    const expiry = localStorage.getItem(SESSION_EXPIRY_KEY);

    if (!userJson || !expiry) {
        return null;
    }

    // Check if session has expired (24-hour session)
    if (Date.now() > parseInt(expiry, 10)) {
        clearSession();
        return null;
    }

    try {
        return JSON.parse(userJson);
    } catch (e) {
        clearSession();
        return null;
    }
}

/**
 * Check if a user is currently logged in with a valid session.
 */
function isLoggedIn() {
    return getCurrentUser() !== null;
}

/**
 * Attempt to log in with the given credentials.
 * Returns { success: boolean, message: string, user?: object }
 */
function login(username, password) {
    // Trim and normalize input
    const normalizedUsername = username.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (!normalizedUsername || !normalizedPassword) {
        return { success: false, message: 'Username and password are required.' };
    }

    // Find user in the data store
    const user = USER_STORE.find(
        u => u.username.toLowerCase() === normalizedUsername
    );

    if (!user) {
        return { success: false, message: 'Invalid username or password.' };
    }

    if (user.password !== normalizedPassword) {
        return { success: false, message: 'Invalid username or password.' };
    }

    // Create session (store user info without password)
    const sessionUser = {
        id: user.id,
        username: user.username,
        displayName: user.displayName,
        role: user.role
    };

    // Set session with 24-hour expiry
    const expiryTime = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    localStorage.setItem(SESSION_EXPIRY_KEY, expiryTime.toString());

    return { success: true, message: 'Login successful.', user: sessionUser };
}

/**
 * Log out the current user by clearing the session.
 */
function logout() {
    clearSession();
}

/**
 * Clear all session data from localStorage.
 */
function clearSession() {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_EXPIRY_KEY);
}

/**
 * Require authentication for protected pages.
 * If the user is not logged in, redirect to login.html.
 * Call this on pages that require authentication (e.g., index.html).
 */
function requireAuth() {
    if (!isLoggedIn()) {
        // Save the intended URL so we can redirect back after login (optional)
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage && currentPage !== 'login.html' && currentPage !== '') {
            sessionStorage.setItem('rdc_redirect_after_login', currentPage);
        }
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

/**
 * Redirect authenticated users away from the login page.
 * If already logged in, go to index.html.
 */
function redirectIfAuthenticated() {
    if (isLoggedIn()) {
        const redirectPage = sessionStorage.getItem('rdc_redirect_after_login') || 'index.html';
        sessionStorage.removeItem('rdc_redirect_after_login');
        window.location.href = redirectPage;
        return true;
    }
    return false;
}

// ──────────────────────────────────────────
// AUTO-RUN: Page-level redirect logic
// ──────────────────────────────────────────
(function () {
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();

    // On the index/home page: require authentication
    if (currentPage === 'index.html' || currentPage === '') {
        requireAuth();
    }

    // On the login page: redirect if already authenticated
    if (currentPage === 'login.html') {
        redirectIfAuthenticated();
    }
})();