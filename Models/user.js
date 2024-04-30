const mongoose =  require('mongoose')

const UserSchema = new mongoose.Schema({
    userName : String,
    firstName : String,    
    lastName : String,    
    password:String
})

const User = mongoose.model('user',UserSchema);

module.exports = User;