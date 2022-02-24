const express = require('express');
// const ejs = require('ejs')
const router = express.Router();
const Data = require('../modle/home.model');

router.get('', async(req, res) => {
    try {
        const data = await Data.find();
    return res.render("users/index.ejs", {data})
    } catch(err) {
        return res.send('err', err.message)
    }    
})

router.post('', async(req, res) => {
    try{
        const data = await Data.create(req.body);
        console.log(data)
        return res.send(data)
    } catch(err) {
        return res.send(err.message)
    }
})

module.exports = router