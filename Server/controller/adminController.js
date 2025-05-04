const Feedback=require("../model/feedbackSchema")
const User=require("../model/userSchema")
const axios=require('axios')
const { GoogleGenerativeAI } = require('@google/generative-ai');


const AllFeedbacks=async(req,res)=>{
  const feedbacks=await Feedback.find().populate('userId')

  res.status(200).json({message:'all feedbacks',feedbacks})


}

const AllUsers=async(req,res)=>{
    
    const users=await User.find({role:'client'})
    res.status(200).json({message:'all Users',users})
}


 const AverageRatingAndCountYearly=async(req,res)=>{
  const currentYear = new Date().getFullYear();

  const startOfYear = new Date(currentYear, 0, 1); // Jan 1
  const endOfYear = new Date(currentYear + 1, 0, 1); // Jan 1 next year

  const result = await Feedback.aggregate([
    {
      $match: {
        createdAt: {
          $gte: startOfYear,
          $lt: endOfYear
        }
      }
    },
    {
      $group: {
        _id: null,
        averageRating: { $avg: '$starRating' },
        totalReviews: { $sum: 1 }
      }
    }
  ]);

  if (result.length === 0) {
    return res.status(200).json({ averageRating: 0, totalReviews: 0 });
  }

  const { averageRating, totalReviews } = result[0];

  res.status(200).json({ averageRating, totalReviews });
}


const   FilterByStarRating=async(req,res)=>{
  const {starRating}=req.body

  const feedbacks=await Feedback.find({starRating:starRating}).sort({createdAt:-1})

  res.status(200).json({message:'based on starrating',feedbacks});

}

const SortFeedbackByDate = async (req, res) => {
  
    // const { order } = req.query;

    // // Default to descending (newest first) if no order is provided
    // const sortOrder = order === 'asc' ? 1 : -1;

    // const feedbacks = await Feedback.find().sort({ createdAt: sortOrder });

    // res.status(200).json(feedbacks);




    const { date } = req.body; // Expecting 'YYYY-MM-DD'

    if (!date) {
      return res.status(400).json({ message: 'Date query parameter is required (format: YYYY-MM-DD).' });
    }

    const selectedDate = new Date(date);
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);

    const feedbacks = await Feedback.find({
      createdAt: {
        $gte: selectedDate,
        $lt: nextDate
      }
    }).sort({ createdAt: -1 }); // optional: sort newest first

    res.status(200).json(feedbacks);

};


const ResponseByAdmin=async(req,res)=>{
  const feedbackId=req.params.id
  const {response}=req.body
if(!response){
  return res.status(400).json({message:'response not found'})
}
  const feedback=await Feedback.findById(feedbackId)
  if(!feedback){
    return res.status(400).json({message:'feedback not found'})
  }
  feedback.response=response

  await feedback.save()
  
res.status(200).json({message:'response addedd successfully'})


}



const generateSuggestion = async (req, res) => {
  const { userMessage } = req.body;

  if (!userMessage) {
    return res.status(400).json({ message: 'User message is required.' });
  }
const prompt= `Here is the user message: "${userMessage}". Please provide a one sentence, formal admin response to the user feedback message?`
  const GEMINI_API_KEY=process.env.GEMINI_API_KEY
  if (!GEMINI_API_KEY) {
      throw new CustomError("GEMINI_API_KEY is not configured", 400);
    }
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] },
      { headers: { "Content-Type": "application/json" } }
    );
   console.log("response",response.data.candidates[0].content.parts[0].text);
   
     const suggestion =response.data.candidates[0].content.parts[0].text.trim()

    res.status(200).json({ suggestion });

  }
module.exports={AllFeedbacks,AllUsers,AverageRatingAndCountYearly,SortFeedbackByDate,FilterByStarRating,ResponseByAdmin,generateSuggestion}