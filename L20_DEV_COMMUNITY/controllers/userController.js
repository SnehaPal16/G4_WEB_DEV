const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETKEY;


const generateToken = (userData) => {
    const token = jwt.sign({data : userData} , secretKey);
    return token;
}


const registerUser = async (req , res) =>{
    const {firstName , lastName , emailId , password} = req.body;

    // VALIDATION
    if(!firstName || !emailId || !password){
        return res.status(400).send({message : "Please add mandatory fields"});
    }

    // CHECK THE USER ALREADY EXISTS OR NOT
    const userExists = userModel.findOne({emailId});
    if(userExists){
        return res.status(400).json("User Already Exists" , {userExists});
    }

    // CREATE NEW USER IN YOUR DATABASE
    const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password
    })

    await newUser.save();

    const token = generateToken(newUser);

    res.status(200).json({message : "New User Registered Successfully" , token : token});
}



const loginUser = async (req , res) => {
    const {emailId , password} = req.body;

    if(!emailId || !password){
        return res.status(400).json({message : "ADD ALL DETAILS"});
    }

    const userExists = await userModel.findOne(emailId);

    if(!userExists){
        return res.status(401).json({message : "No User Found"});
    }

    if(req.body.password != userExists.password){
        return res.status(401).json({message : "Incorrect Password"});
    }

    const token = generateToken(userExists);

    res.status(200).json({message : "Logged in Successfully" , token});
}

module.exports = {registerUser , loginUser};