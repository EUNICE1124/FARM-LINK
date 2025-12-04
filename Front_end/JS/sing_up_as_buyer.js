document.addEventListener('DOMContentLoaded', () => {
    const skipButton = document.getElementById('skipButton');
    const completeButton = document.getElementById('completeButton');
    const logInLink = document.getElementById('logInLink');

    // Function to handle the "Skip for now" click
    skipButton.addEventListener('click', () => {
        alert('Skipping profile completion. Navigating to main dashboard...');
        // In a real app, you would use: window.location.href = '/dashboard.html';
    });

    // Function to handle the "Complete profile" click
    completeButton.addEventListener('click', () => {
        alert('Navigating to the profile completion form...');
        // In a real app, you would use: window.location.href = '/complete-profile.html';
    });

    // Function to handle the "Log In" click
    logInLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the default anchor tag action
        alert('Navigating to the Log In screen...');
        // In a real app, you would use: window.location.href = '/login.html';
    });
});