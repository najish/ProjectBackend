require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()



const database = require('./config/database.js')
const User = require('./models/user.js')
const userRouter = require('./routes/userRouter.js')
const PORT = process.env.PORT || 3001



app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/user',userRouter)

app.get('/',(req,res) => {
    return res.send('Hello from projectbackend')
})


app.listen(PORT, () => {
    console.log(`running at port : ${PORT}`)
})