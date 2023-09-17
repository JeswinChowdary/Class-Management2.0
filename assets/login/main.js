let users = [

{ element: document.getElementById('veda'), name: 'Veda' },
{ element: document.getElementById('jeswin'), name: 'Jeswin' },
{ element: document.getElementById('dakayath'), name: 'Dakayath' },
{ element: document.getElementById('amogh'), name: 'Amogh' },
{ element: document.getElementById('sudhanva'), name: 'Sudhanva' },
{ element: document.getElementById('aarya'), name: 'Aarya' },
{ element: document.getElementById('saisham'), name: 'Saisham' },
{ element: document.getElementById('ayush'), name: 'Ayush' },
{ element: document.getElementById('ahan'), name: 'Ahan' }

]

users.forEach(user => {
    user.element.addEventListener('click', e => {
        window.location.replace(`/verify?${user.name}`);
        console.log(`Clicked on ${user.name}`)
    })
})