const bcrypt = require('bcrypt');
const User = require("../Models/user");
const jwt = require('jsonwebtoken');

class AuthController {

    static signIn = async (req, res) => {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName: userName })
        if (user) {
            bcrypt.compare(password, user.password, function (err, passwordMatch) {
                if (err) throw err;
                if (passwordMatch) {
                    console.log("password match")
                    const token = jwt.sign({ userId: user._id }, 'secret_key');
                    res.send({ status: "success", payload: [{ msg: "login success", data: [{ token: token }] }] })
                } else {
                    console.log("invalid password")
                    res.send({ status: "fail", payload: [{ msg: "Incorrect user name/password", data: [] }] })
                }
            });

        } else {
            console.log('user not found')
            res.send({ status: "fail", payload: [{ msg: "Incorrect user name/password", data: [] }] })
        }
    }

}


module.exports = AuthController