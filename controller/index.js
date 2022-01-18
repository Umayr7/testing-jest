// MODELS
const User = require('../models/users');

exports.userController = async (req, res) => {
    try {
        let users = await User.find({});
    
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    };
};

exports.userPostController = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let user = new User();
        user.username = username;
        user.email = email;
        user.password = password;
    
        await user.save();
    
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    };
};