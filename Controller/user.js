const { encryptPassword, decryptPassword } = require('../Helpers/password');
const User = require('../Models/user');

class UserControler {
    static addUser = async (req, res) => {   
        console.log("add user")     
        const { userName, firstName, lastName, password } = req.body;
        const userexist = await this.checkUserNameExist(userName);

        if (!userexist) {
            const pass = encryptPassword(password, (hash) => {
                const user = User({
                    userName: userName,
                    firstName: firstName,
                    lastName: lastName,
                    password: hash
                });
                user.save()
                console.log("User Added");
                res.send({ status: "success", payload: { msg: "", data: [] } });
            });
        } else {
            res.send({ status: "fail", payload: [{ msg: "user already exists", data: [] }] });
        }
    }

    static checkUserNameExist = async (userName) => {
        const user = await User.findOne({ userName: userName });
        if (user) {
            console.log("user exixt")
            return true
        } else {
            console.log("user not exixt")
            return false
        }
    }

    static getusers = async (req,res) => {
        console.log("hititng get users")
        const users = await User.find({})
        res.send({ status: "success", payload: [{ msg: "all users", data: users }] });
    }
}






module.exports = UserControler

