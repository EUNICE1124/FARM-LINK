document.getElementById('farmLinkForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    // Get the values from the input fields
    const fullName = document.getElementById('fullName').value.trim();
    const province = document.getElementById('province').value.trim();
    const district = document.getElementById('district').value.trim();
    const city = document.getElementById('city').value.trim();

    console.log('Form Submitted!');
    console.log(`Full Name: ${fullName}`);
    console.log(`Location: ${province}, ${district}, ${city}`);

    // Add simple validation logic here
    if (fullName === '') {
        alert('Please enter your Full Name.');
        return;
    }

    //  send this data to a server
    // Example: fetch('/api/register', { method: 'POST', body: JSON.stringify({ fullName, province, district, city }) });

    alert('Registration Complete! (Simulated)');
});

document.querySelector('.skip-link').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Skipping registration for now...');
    // Add logic to navigate to the main app page
    alert('Skipped setup. Navigating to main app.');
});