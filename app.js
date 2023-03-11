const express = require('express')
const app = express()
const path = require('path')

//Express configuration
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs')

//This is the landing page
app.use('/hello', (req, res) => {
    res.render('index', {loggedIn: false})
})

//This is the actual login page
app.use('/login', (req, res) => {
    res.render('login')
})

//This is the create user page
app.use('/new_user', (req, res) => {
    res.render('new_user')
})

//This is the create password page
app.use('/restore_pass', (req, res) => {
    res.render('restore_pass')
})

//This is rendered when we 
//successfuly create an account
app.use('/success', (req, res) => {
    res.render('success')
})

//This page is served whenever we don't 
//really have availiable routes
app.use('/error', (req, res) => {
    res.render('error')
})

app.use((req, res, next)=>{
    if(req.url == "/"){
        res.redirect('/hello')
    }else{
        res.redirect('/error')
    }
})

app.listen(3000)
