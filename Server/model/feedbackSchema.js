const mongoose=require('mongoose')

const feedbackSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.ObjectId,ref:'User'},
    reviewLabel:{type:String,enum:['Terrible','Bad','Ok','Good','Excellent']},
    starRating:{ type: Number, required: true, min: 1, max: 5 },
    message:{type:String,required:true}

})

module.exports=mongoose.model('Feedback',feedbackSchema)