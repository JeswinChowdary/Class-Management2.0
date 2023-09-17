const url = window.location.href;
userName = url.split('?')[1];
const headerText = document.querySelector('.headertext')
headerText.innerText += ` ${userName}!`;
const input = document.getElementById('input');

input.addEventListener('keypress', (event) => {
    if(event.key !== 'Enter') {
        return;
    }

    const password = input.value;

    fetch('/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password
        })
    }).then(res => res.json()).then(res => {
        headerText.innerText = res.msg;
       
        if(res.token) {
        setTimeout(() => {
            window.location.replace('/home?' + res.token);
        }, 2000) }
    })
    
})