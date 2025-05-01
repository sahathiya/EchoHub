const express=require('express')
const { UserRegistration, UserLogin, UserLogout, UserProfileImage } = require('../controller/authController')
const { CreateFeedback, GetAllfeedbacks } = require('../controller/feedbackController')
const {userAuthmiddleware} =require("../middleware/userAuthmiddleware")
const upload = require('../middleware/upload')
const tryCatch=require('../middleware/tryCatch')
const userRoutes=express.Router()

userRoutes
.post('/auth/register',tryCatch(UserRegistration))
.post('/auth/login',tryCatch(UserLogin))
.post('/auth/logout',tryCatch(UserLogout))
.patch('/auth/upload',userAuthmiddleware,upload.single('profileImage'),tryCatch(UserProfileImage))

.post('/feedback/create',userAuthmiddleware,tryCatch(CreateFeedback))
.get('/feedback/all',tryCatch(GetAllfeedbacks))

module.exports=userRoutes