document.addEventListener('DOMContentLoaded', () => {
    const ROUTES = {
        // relative to the `Front_end/SCREENS` folder where the HTML files live
        dashboard: 'dashboard.html',
        profile: 'complete-profile.html',
        login: 'login.html'
    };

    const skipButton = document.getElementById('skipButton');
    const completeButton = document.getElementById('completeButton');
    const logInLink = document.getElementById('logInLink');

    // Helper to attach listeners safely and add basic keyboard accessibility
    function safeAddListener(el, eventName, handler) {
        if (!el) {
            console.warn(`safeAddListener: element for event '${eventName}' not found.`);
            return;
        }

        el.addEventListener(eventName, handler);

        // Ensure element is focusable for keyboard activation
        if (typeof el.tabIndex !== 'number' || el.tabIndex < 0) {
            el.tabIndex = 0;
        }

        // Support Enter and Space activating the control
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handler(e);
            }
        });
    }

    // "Skip for now" navigates to the dashboard
    safeAddListener(skipButton, 'click', () => {
        try {
            window.location.href = ROUTES.dashboard;
        } catch (err) {
            console.error('Navigation to dashboard failed:', err);
        }
    });

    // "Complete profile" navigates to the profile completion form
    safeAddListener(completeButton, 'click', () => {
        try {
            window.location.href = ROUTES.profile;
        } catch (err) {
            console.error('Navigation to profile form failed:', err);
        }
    });

    // "Log In" link - prefer anchor href if present, otherwise use ROUTES.login
    safeAddListener(logInLink, 'click', (event) => {
        if (event && typeof event.preventDefault === 'function') event.preventDefault();
        try {
            const href = logInLink && logInLink.getAttribute && logInLink.getAttribute('href');
            window.location.href = href || ROUTES.login;
        } catch (err) {
            console.error('Navigation to login failed:', err);
        }
    });
});