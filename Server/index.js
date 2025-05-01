const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const userRoutes = require('./route/userRoutes')
const adminRoutes=require('./route/adminRoutes')
const cookieparser=require('cookie-parser')

const app=express()
const PORT=process.env.PORT||5000
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    }
))
app.use(express.json())
app.use(cookieparser())
app.use('/api',userRoutes)
app.use('/api',adminRoutes)
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('connected'))
.catch(()=>console.log('not connected'))
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})

