document.getElementById('register-form').addEventListener('submit', validatePasswords);

// Find all required input elements
var requiredInputs = document.querySelectorAll('input[required]');
requiredInputs.forEach(input => addRequiredIndicator(input));


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

function addRequiredIndicator(input) {
    // Find the associated label using the 'for' attribute
    var label = document.querySelector('label[for="' + input.id + '"]');

    // Check if a label is found and add the required-indicator span
    if (label) {
        // Create the span element
        var requiredIndicator = document.createElement('span');
        requiredIndicator.className = 'required-indicator';
        requiredIndicator.setAttribute('aria-hidden', 'true');
        requiredIndicator.textContent = '*\u00a0'; // '\u00a0' is the non-breaking space

        // Insert the span at the beginning of the label
        label.insertBefore(requiredIndicator, label.firstChild);
    }
}