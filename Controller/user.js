const { encryptPassword, decryptPassword } = require('../Helpers/password');
const User = require('../Models/user');

class UserControler {
    static addUser = (req, res) => {
        const { userName, firstName, lastName, password } = req.body;

        const pass = encryptPassword(password, (hash) => {
            const user = User({
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                password: hash
            });
            user.save()
            console.log("Add User");
            res.send("Add User")
        });
    }
}






module.exports = UserControler

