const express = require("express");
const fs = require("fs");
const parser = require("body-parser");
const path = require("path");
const app = express();
const port = 80;

app.use('/static', express.static('static'))
app.use(express.urlencoded({extended:true}));

app.set('view engine' ,'pug')
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
})
app.get('/about',(req,res)=>{
    res.status(200).render('about.pug');
})

app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
})

app.listen(port,()=>{
    console.log(`the application is started on ${port}`);
})
