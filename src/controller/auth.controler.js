const express = require("express");
const User = require('../models/user.model');


const signup = async (req, res, next) => {

    try {
        console.log(req.body)
    let user = await User.findOne({email: req.body.email}).lean().exec();

    if(user) {
        return res.send('User already exists')
    }

    user = await User.create(req.body);
    console.log(user);

    return res.render("users/login.ejs", {user})
} catch(err) {
    return res.send(err.message)
}
}

const login = (req, res, next) => {

}

module.exports = {signup, login}