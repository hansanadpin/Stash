const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./Routs/user')
const authRoute = require('./Routs/auth')
const connectDB = require('./Helpers/db')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(bodyParser.json());
app.use('/user', userRoute)
app.use('/', authRoute)

connectDB(() => {
    app.listen(port, () => {
        console.log('Node Server Listning At 3000')
    })
})
