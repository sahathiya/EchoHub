const Feedback=require('../model/feedbackSchema')
const User=require('../model/userSchema')
const CreateFeedback=async(req,res)=>{
    const userId=req.user._id
    const {starRating,message}=req.body
    const user=await User.findOne({_id:userId})

    if(!user){
        return res.status(400).json({message:'user not found'})
    }
    let reviewLabel = "";
    if (starRating >= 4.5) {
      reviewLabel = "Excellent";
    } else if (starRating >= 4) {
      reviewLabel = "Good";
    } else if (starRating >= 3) {
      reviewLabel = "Ok";
    } else if (starRating >= 2) {
      reviewLabel = "Bad";
    } else {
      reviewLabel = "Terrible";
    }
    const feedback=new Feedback({
        userId,
        starRating,
        reviewLabel,
        message
    })

    await feedback.save()

    res.status(200).json({message:'feedback submitted'})

}

module.exports={CreateFeedback}