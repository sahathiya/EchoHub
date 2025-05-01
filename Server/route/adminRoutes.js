const express=require("express")
const { AdminLogout } = require("../controller/authController")
const { AllUsers, AllFeedbacks } = require("../controller/adminController")
const tryCatch=require('../middleware/tryCatch')
const adminRoutes=express.Router()
adminRoutes
.post('/admin/logout',tryCatch(AdminLogout))

.get('/admin/users',tryCatch(AllUsers))
.get('/admin/feedbacks',tryCatch(AllFeedbacks))
module.exports=adminRoutes