const express = require('express')
const app = express()

const PORT = 3000

app.get('/',(req,res) => {
    return res.send('Hello from projectbackend')
})


app.listen(PORT, () => {
    console.log(`running at port : ${PORT}`)
})