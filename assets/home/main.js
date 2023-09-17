const token = window.location.href.split('?')[1];

fetch(`/get-user-data?token=${token}`).then(res => res.json()).then(res => {
    const userData = res;
    console.log(userData);

    //Sets the name to username
    const usernameElem = document.getElementById('username');
    usernameElem.innerText = userData.username;
});

function alertProduction() {
    alert('This is just a preview of the actual site... The other pages are still under production...')
}

const notReadyElements = document.querySelectorAll('.not-ready');

notReadyElements.forEach(elem => {
    elem.addEventListener('click', e => {
        alertProduction();
    })
})