document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    // Get form values
    const userName = document.getElementById('userName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const address1 = document.getElementById('address1').value.trim();
    const address2 = document.getElementById('address2').value.trim();

    // --- Basic Validation ---
    if (!userName || !email || !phoneNumber || !address1 || !address2) {
        alert('Please fill in all the required fields.');
        return;
    }

    // Simple Email Regex check (not fully robust, but better than nothing)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // --- Submission Logic ---
    console.log('Sign Up Form Submitted!');
    console.log(`User Name: ${userName}`);

    // In a real application, you would send this data to an API
    // Example: 
    // fetch('/api/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ userName, email, phoneNumber, address1, address2 })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Sign up successful! Please log in.');
    //     // Redirect to login page
    // })
    // .catch(error => {
    //     console.error('Sign up failed:', error);
    //     alert('An error occurred during sign up.');
    // });

    alert('Sign Up Successful! (Simulated)');
});

document.querySelector('.login-link').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Navigating to Login page...');
    alert('Navigating to Login screen.');
    // window.location.href = '/login';
});