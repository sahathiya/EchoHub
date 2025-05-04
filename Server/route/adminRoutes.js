const express=require("express")
const { AdminLogout } = require("../controller/authController")
const { AllUsers, AllFeedbacks, AverageRatingAndCountYearly, FilterByStarRating, SortFeedbackByDate, ResponseByAdmin, generateSuggestion } = require("../controller/adminController")
const tryCatch=require('../middleware/tryCatch')
const adminRoutes=express.Router()
adminRoutes
.post('/admin/logout',tryCatch(AdminLogout))

.get('/admin/users',tryCatch(AllUsers))
.get('/admin/feedbacks',tryCatch(AllFeedbacks))

.get('/admin/yearlycount',tryCatch(AverageRatingAndCountYearly))

.get('/admin/starrating',tryCatch(FilterByStarRating))
.get('/admin/date',tryCatch(SortFeedbackByDate))

.patch('/admin/feedback/respond/:id',tryCatch(ResponseByAdmin))

.post('/admin/respond/generate-suggestion',tryCatch(generateSuggestion))
module.exports=adminRoutes