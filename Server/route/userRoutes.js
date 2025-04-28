const express=require('express')
const { UserRegistration, UserLogin, UserLogout } = require('../controller/authController')
const { CreateFeedback } = require('../controller/feedbackController')
const {userAuthmiddleware} =require("../middleware/userAuthmiddleware")
const userRoutes=express.Router()

userRoutes
.post('/register',UserRegistration)
.post('/login',UserLogin)
.post('/logout',UserLogout)


.post('/feedback',userAuthmiddleware,CreateFeedback)

module.exports=userRoutes