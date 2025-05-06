const express=require('express')
const cors=require('cors')
const { Server } = require('socket.io');
const http = require('http');
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const userRoutes = require('./route/userRoutes')
const adminRoutes=require('./route/adminRoutes')
const cookieparser=require('cookie-parser')

const app=express()
const PORT=process.env.PORT
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

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ['GET', 'POST'],
      credentials: true,
    }
  });
  
  const userSocketMap = new Map();
  app.set('io', io)
  app.set('userSocketMap', userSocketMap);
  
io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap.set(userId, socket.id);
    console.log(`User ${userId} connected with socket ID ${socket.id}`);
    console.log("userSocketMap",userSocketMap);
    
  }

  // socket.on('disconnect', () => {
  //   if (userId) {
  //     userSocketMap.delete(userId);
  //     console.log(`User ${userId} disconnected`);
  //   }
  // });

  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${socket.id}`);
    // Optionally remove user from map
    for (let [key, value] of userSocketMap.entries()) {
      if (value === socket.id) {
        userSocketMap.delete(key);
        break;
      }
    }
  });
});

// Make map accessible in routes

  // io.on('connection', (socket) => {
  //   console.log('A user connected: ', socket.id);
  
  //   // You can use socket.on(...) here if needed for other events
  
  //   socket.on('disconnect', () => {
  //     console.log('User disconnected:', socket.id);
  //   });
  // });
  


  server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})