const express=require('express')
const { UserRegistration, UserLogin, UserLogout } = require('../controller/authController')
const { CreateFeedback, GetAllfeedbacks } = require('../controller/feedbackController')
const {userAuthmiddleware} =require("../middleware/userAuthmiddleware")
const userRoutes=express.Router()

userRoutes
.post('/auth/register',UserRegistration)
.post('/auth/login',UserLogin)
.post('/auth/logout',UserLogout)


.post('/feedback/create',userAuthmiddleware,CreateFeedback)
.get('/feedback/all',GetAllfeedbacks)

module.exports=userRoutes