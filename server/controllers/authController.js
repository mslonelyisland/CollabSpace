const User = require('../models/user');
const {hashPassword, comparePassword} = require('../helpers/auth');
const jwt = require('jsonwebtoken');


const test = (req,res) => {
    res.json('test is working')
}

// Register Endpoint
const registerUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        // check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password needs to be atleast 6 characters.'
            });
        };
        // check if email exist
        const exist = await User.findOne({email});
        if (exist) {
            return res.json({
                error: 'Email is already taken.'
            });
        }
        // send the hashed password to the database
        const hashedPassword = await hashPassword(password)
        
        // create user in database
        const user = await User.create({
            email,
            password: hashedPassword
        })

        return res.json({userId: user._id});
    } catch (error) {
        console.log(error)
    }
}

// Login endpoint
const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        
        // check required fields
        if(!email || !password ) {
            return res.json({
                error: 'Email and Password required'
            });
        }
        // check if user exist
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'No user found'
            });
        }
        // check if passwords match 
        const match = await comparePassword(password, user.password ) 
        if(match){
            jwt.sign({ email: user.email, id: user._id, name: user.name} , process.env.JWT_SECRET, {}, (err,token) => {
                if(err) throw err;
                res.json('token', token).json(user)
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile= (req,res) => {
    const {token} = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

module.exports = {test,registerUser,loginUser, getProfile};