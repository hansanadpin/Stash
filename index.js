const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./Routs/user')
const connectDB = require('./Helpers/db')


app.use('/user',userRoute)
connectDB(()=>{
    app.listen(port,()=>{
        console.log('Node Server Listning At 3000')
    })
})
