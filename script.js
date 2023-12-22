document.getElementById('register-form').addEventListener('submit', validatePasswords);

function validatePasswords(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values of password and confirm password inputs
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('confirm-password');
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    // Check if the passwords match
    if (password === confirmPassword) {
        // Remove the "error" class if it was previously applied
        passwordInput.classList.remove('error');
        confirmPasswordInput.classList.remove('error');
        // Submit the form
        document.getElementById('register-form').submit();
    } else {
        // Apply the "error" class to indicate the error
        passwordInput.classList.add('error');
        confirmPasswordInput.classList.add('error');
    }
}
