const bcrypt = require('bcryptjs');

const encryptPassword = (password, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            callback(hash)
        });
    });
}

const decryptPassword = (password, hash ,callBack) => {
    bcrypt.compare(password, hash, function (err, result) {
        if (err) throw err;
        callBack(result);
    });
}




module.exports = { encryptPassword , decryptPassword };