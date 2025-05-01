const User=require('../model/userSchema')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const UserRegistration=async(req,res)=>{
const{name,email,password}=req.body

if(!name||!email||!password){
    return res.status(400).json({status:false,message:'All fields are required'})
}
const emailExist=await User.findOne({email:email})
if(emailExist){
    return res.status(400).json({message:'this email is already exist'})
}
const hashedPassword=await bcrypt.hash(password,10)
const user=new User({
   name,
    email,
    password:hashedPassword
})

await user.save()

const token=jwt.sign({_id:user._id,email:user.email},process.env.USER_SECRETKEY,{expiresIn:'1d'})
res.cookie('token',token,{
    httpOnly: false,
    secure:true ,
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000,

})

res.status(200).json({status:true,message:'user successfully registered',user})


}


const UserLogin=async(req,res)=>{

    const {email,password}=req.body
if(!email||!password){
    return res.status(400).json({message:'all fields are required'})
}

    const user=await User.findOne({email:email})
if(!user){
    return res.status(400).json({message:'user not found'})
}
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({message:'password is not match'})
    }
    if(user.role=='admin'){
      const Admintoken=jwt.sign({id:user._id,email:user.email},process.env.ADMIN_SECRETKEY,{expiresIn:'1d'})
      
      
       res.cookie('Admintoken',Admintoken,{
           httpOnly:false,
           secure:true,
           sameSite:'none',
           maxAge:24*60*60*60*1000
   
       })
       
       
      return  res.status(200).json({status:'success', message:'admin logged successfully',user})
      }else{
        const token=jwt.sign({_id:user._id,email:user.email},process.env.USER_SECRETKEY,{expiresIn:'1d'})
        res.cookie('token',token,{
            httpOnly: false,
            secure:true ,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000,
    
        })
        
        res.status(200).json({status:'success',message:'login successful',user})
      }
   
}



const UserLogout=async(req,res)=>{
    
    try {
        res.clearCookie('token', {
          httpOnly: false,
          secure: true,
          sameSite: 'none',
        });
        res.status(200).json({ message: 'User Logout successful' });
      } catch (error) {
        res.status(500).json({ message: 'Logout failed', error: error.message });
      }
}


const AdminLogout=async(req,res)=>{
    
  try {
      res.clearCookie('Admintoken', {
        httpOnly: false,
        secure: true,
        sameSite: 'none',
      });
      res.status(200).json({ message: 'Admin Logout successful' });
    } catch (error) {
      res.status(500).json({ message: 'Logout failed', error: error.message });
    }
}
const UserProfileImage = async (req, res) => {
    try {
        console.log('hh');
        
      const userId = req.user._id;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ status: false, message: "User not found" });
      }
  
      if (!req.file || !req.file.path) {
        return res.status(400).json({ status: false, message: "No image uploaded" });
      }
  
      user.profileImage = req.file.path; // Cloudinary URL
      await user.save();
  
      res.status(200).json({ status: true, message: "Successfully uploaded", imageUrl: user.profileImage });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ status: false, message: "Server error" });
    }
  };
module.exports={UserRegistration,UserLogin,UserLogout,AdminLogout,UserProfileImage}