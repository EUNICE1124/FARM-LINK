document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally
    
    // Get form values
    const userName = document.getElementById('userName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const address = document.getElementById('address').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const privacyChecked = document.getElementById('privacyCheck').checked;
    
    // --- Validation Checks ---
    
    // 1. Check required fields
    if (!userName || !email || !phoneNumber || !address || !password || !confirmPassword) {
        alert('Please fill in all the required fields.');
        return;
    }
    
    // 2. Password matching check
    if (password !== confirmPassword) {
        alert('The passwords do not match. Please re-enter.');
        return;
    }
    
    // 3. Password strength check (Example: minimum 8 characters)
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // 4. Privacy policy check
    if (!privacyChecked) {
        alert('You must agree to the privacy policy to sign up.');
        return;
    }

    // --- Submission Logic ---
    console.log('Sign Up Form Final Submission!');
    
    // In a real application, you would send this data securely to an API
    
    alert('Account Created Successfully! Redirecting to Login.');
    // window.location.href = '/login';
});

document.querySelector('.login-link').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Navigating to Login page...');
    alert('Navigating to Login screen.');
});