const express = require('express');
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.set ("view engine", 'ejs')

app.use((req, res,next) => {
    console.log("This is middleware")

    const a =2
    const b =3 
    console.log(a + b)
    res.send("Response from middleware")
    return next()
})

app.get('/',(req, res, next) => {
    const a =5;
    const b =6
    console.log(a+b)
    return next()
},(req, res) => {
    res.render('index')
})


app.listen(3000,(e)=>{
    console.log("Server is running")
})