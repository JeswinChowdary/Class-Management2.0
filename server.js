const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const upload = require('express-fileupload');
const PORT = process.env.PORT || 5000;
let users = [
    {
        username: "Jeswin",
        password: "Jai2021$",
        token: "2524352345"  //Jeswin
    }, 
    {
        username: "Veda",
        password: "iloverobin",
        token: "3453453454" // Veda
    }, 
    {
        username: "Ahan",
        password: "ahanismelol",
        token: "2342342334" // Ahan
    }, 
    {
        username: "Amogh",
        password: "myselfvegetarian", //Amogh
        token: "4543543676"
    }, 
    {
        username: "Ayush",
        password: "whatsgrass?",
        token: "6456545670" // Ayush
    }, 
    {
        username: "Saisham",
        password: "physicsdabest",
        token: "3460984636" // Saisham
    }, 
    {
        username: "Aarya",
        password: "blowupdakayath",
        token: "34543543534727" //Aarya
    }, 
    {
        username: "Sudhanva",
        password: "iamsudhanva",
        token: "3406983346" //Sudhanva
    }, 
    {
        username: "Alok",
        password: "ihatetnt",
        token: "6923469434369" // Alok
    }, 
]

app.use(upload());
app.use(express.json());
app.use(express.static('./assets'));

//Redirects to login
 
app.get('/', (req, res) => {
    res.redirect('/login')
})

// Autheticate user

app.post('/verify', (req, res) => {
    const password = req.body.password;
    var isAuthenticated = false;
    
    users.forEach(user => {
        if(user.password === password) {
            res.status(200).send({ msg: 'Authentication Success!', token: user.token });
            isAuthenticated = true;
        } 
    })

    if(!isAuthenticated) {
        res.send({ msg: 'Wrong Password!', token: null })
    }
    
})

// User Data Fetch

app.get('/get-user-data', (req, res) => {
    const token = req.query.token;
    users.forEach(user => {
        if(user.token === token) {
            res.send(user);
        }
    });
})

// Listens on the specified port

app.listen(PORT, console.log('Server is listening on port' + ' ' + PORT));