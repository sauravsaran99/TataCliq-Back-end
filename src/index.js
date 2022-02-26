const express = require('express');
const  connect  = require('../src/configs/db');
const app = express();
require("dotenv").config();
const passport = require("./configs/google_oauth");
const productapiController = require('../src/controller/productapi.controller');
const port = process.env.PORT || 4553
//for form work
app.use(express.urlencoded({
  extended: true
}))
//end

const {signup, login} = require('../src/controller/auth.controler')
const homeController = require('../src/controller/home.controller');
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
  app.post('/login', signup)
  app.post('/home', login)
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );
  
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/auth/google/failure",
    }),
    (req, res) => {
      console.log(req.user);
      res.render("users/index.ejs");
    }
  );
// app.use("/",homeController);
app.use(express.json());
app.use('/products', productapiController);
app.use('/home', homeController);
app.use("/login",async (req,res) =>{
 return res.render("users/login.ejs");
})
app.use("/thankyou", async(req, res) => {
  return res.render("users/thankyou.ejs")
})
app.use("/checkout", async(req, res) => {
  return res.render("users/check.ejs")
})

app.use('/cart', async(req,res) => {
  return res.render('users/cart.ejs')
})

app.use("/signup",async (req,res) =>{
  return res.render("users/signup.ejs");
 })

app.set('view engine', 'ejs');
app.use(express.static("public"))

app.listen(port, async() => {
    try {
        connect();
        console.log('Listening Port 4553');
    } catch(err) {
        console.log(err.message);
    }
})

// "bcryptjs": "^2.4.3",
//     "dotenv": "^16.0.0",
//     "ejs": "^3.1.6",
//     "express": "^4.17.3",
//     "jsonwebtoken": "^8.5.1",
//     "mongoose": "^6.2.3",
//     "passport": "^0.5.2",
//     "passport-google-oauth2": "^0.2.0",
//     "uuid": "^8.3.2"