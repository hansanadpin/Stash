const mongoose = require('mongoose')

const uri = "mongodb+srv://hansana:teatime@employee.q2ihmoi.mongodb.net/stash"

const connectDB = (callBack) => {
    mongoose.connect(uri, {       
        maxPoolSize: 10
    }).then(() => {
        console.log("DB Connected");
        callBack();
        
    }).catch((err) => {
        console.log("Error Connection");
    })
    mongoose.connection.on('error', err => {
        console.log(err);
    });
}


module.exports = connectDB