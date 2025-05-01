const Feedback=require("../model/feedbackSchema")
const User=require("../model/userSchema")


const AllFeedbacks=async(req,res)=>{
  const feedbacks=await Feedback.find().populate('userId')

  res.status(200).json({message:'all feedbacks',feedbacks})


}

const AllUsers=async(req,res)=>{
    
    const users=await User.find({role:'client'})
    res.status(200).json({message:'all Users',users})
}


const AverageRatingAndCountYearly=async(req,res)=>{

}
module.exports={AllFeedbacks,AllUsers}