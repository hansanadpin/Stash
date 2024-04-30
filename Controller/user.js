const User = require('../Models/user');

class UserControler {
    static addUser = (req, res) => {
       const user = User({
            userName: 'hansanaw',
            firstName: 'Hansana',
            lastName: 'Wijethunga',
            password: 'abc'
        });

        user.save()
        console.log("Add User");
        res.send("Hello World");
    }
}






module.exports = UserControler

