// script.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input value
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;

    // Update the output div with the input value
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `You entered: ${inputValue}`;

    // Clear the input field
    inputField.value = '';
}

// Attach the event listener to the form
document.getElementById('dataForm').addEventListener('submit', handleFormSubmit);
