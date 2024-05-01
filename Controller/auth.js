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
                    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '15m' });
                    const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_KEY, { expiresIn: '7d' });
                    res.send({ status: "success", payload: [{ msg: "login success", data: [{ token: token, refreshToken: refreshToken }] }] })
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

    static refreshToken = async (req, res) => {
        const { refreshToken } = req.body;
        console.log(refreshToken);
        jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(403).json({ status: "fail", payload: [{ msg: "invalid refresh token", data: [] }] });
            }
            const userId = decoded.userId;
            const token = jwt.sign({ userId: userId }, process.env.SECRET_KEY, { expiresIn: '15m' });
            res.send({ status: "success", payload: [{ msg: "login success", data: [{ token: token }] }] });
        });
    }

}


module.exports = AuthController