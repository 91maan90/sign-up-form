// Add event listener to submit button
document.getElementById('register-form').addEventListener('submit', validatePasswords);

// Add elements to inputs
const allInputs = document.querySelectorAll('input');
allInputs.forEach(input => addInputElements(input));

function validatePasswords(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values of password and confirm password inputs
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordErrorMessage = document.getElementById('pwd-error-msg');
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if the passwords match
    if (password === confirmPassword) {
        // Remove the "error" class if it was previously applied
        passwordInput.classList.remove('error');
        confirmPasswordInput.classList.remove('error');
        passwordErrorMessage.classList.remove('error');

        // Submit the form
        document.getElementById('register-form').submit();
    } else {
        // Apply the "error" class to indicate the error
        passwordInput.classList.add('error');
        confirmPasswordInput.classList.add('error');
        passwordErrorMessage.classList.add('error');
    }
}

function addInputElements(input) {
    if (input.required) {
        addRequiredIndicator(input);
    }

    // Create the checkmark-indicator span element
    const checkmarkIndicator = document.createElement('span');
    checkmarkIndicator.className = 'checkmark-indicator';

    // Insert the span after the input
    input.insertAdjacentElement('afterend', checkmarkIndicator);
}

function addRequiredIndicator(input) {
    // Find the associated label using the 'for' attribute
    const label = document.querySelector('label[for="' + input.id + '"]');

    // Check if a label is found and add the required-indicator span
    if (label) {
        // Create the span element
        const requiredIndicator = document.createElement('span');
        requiredIndicator.className = 'required-indicator';
        requiredIndicator.setAttribute('aria-hidden', 'true');
        requiredIndicator.textContent = '*\u00a0'; // '\u00a0' is the non-breaking space

        // Insert the span at the beginning of the label
        label.insertBefore(requiredIndicator, label.firstChild);
    }
}
