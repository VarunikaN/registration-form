function validateForm(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let errorMessage = '';

    if (fullName.length < 5) {
        errorMessage += 'Name must be at least 5 characters. ';
    }

    if (!email.includes('@')) {
        errorMessage += 'Enter a correct email. ';
    }

    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        errorMessage += 'Enter a valid 10-digit phone number. ';
    }

    if (password === 'password' || password.length < 8 || password === fullName) {
        errorMessage += 'Password is not strong. ';
    }

    if (password !== confirmPassword) {
        errorMessage += 'Passwords do not match. ';
    }

    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = errorMessage;

    if (errorMessage === '') {
        alert('Form submitted successfully!');

    }
}
