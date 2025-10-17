const express = require('express');
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

//built in middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set ("view engine", 'ejs')



app.get('/',(req,res)=>{
    res.render('index', {title: "Home Page"})
})

app.get('/about',(req,res)=>{
    res.render("This is about page")
})

app.post('/get-form-data',(req,res) => {
    console.log(req.body)
    res.send('data received')
})

app.listen(3000,(e)=>{
    console.log("Server is running")
})