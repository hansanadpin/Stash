const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./Routs/user')
const authRoute = require('./Routs/auth')
const connectDB = require('./Helpers/db')
const bodyParser = require('body-parser');
const authenticateToken = require('./middleware/authenticateToken');
require('dotenv').config();

app.use(bodyParser.json());
app.use('/', authRoute)
app.use(authenticateToken)
app.use('/user', userRoute)

connectDB(() => {
    app.listen(port, () => {
        console.log('Node Server Listning At 3000')
    })
})
