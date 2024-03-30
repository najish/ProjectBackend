require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')
const app = express()



const database = require('./config/database.js')
const User = require('./models/user.js')
const userRouter = require('./routes/userRouter.js')
const loginRouter = require('./routes/authentication/login.js')
const PORT = process.env.PORT || 3001



app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

sessionOption = {
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: false,
    name: 'userId',
}



app.use('/authenticate',session(sessionOption))
app.use('/user',userRouter)
app.use('/login',loginRouter)


app.get('/',(req,res) => {
    return res.send('Hello from projectbackend')
})

// app.post('/login',(req,res,next) => {
//     console.log('middleware1');
//     next()
// },(req,res,next) => {
//     console.log('middleware2')
//     next()
// },(req,res) => {
//     return res.send('user logged in')
// })




app.listen(PORT, () => {
    console.log(`running at port : ${PORT}`)
})