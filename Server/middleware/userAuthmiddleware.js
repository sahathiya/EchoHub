const jwt=require("jsonwebtoken");

const userAuthmiddleware = async (req, res, next) => {
    try {
      
      const token=req.cookies.token
      console.log(token)
     if(!token){
      return res.status(401).send("Authentication token missing");
     }
        
        if (token) {
          jwt.verify(token, process.env.USER_SECRETKEY, (err, user) => {
            
            if(err){
                res.send(err)
            }else{
                req.user=user
                
                console.log(req.user);
                
                next()
            }
          });
        } else {
        
        res.status(404).send("not authenticate")
        }
      } catch (error) {
      
        res.send(error)
      }
    };


    const adminOnlyMiddleware = (req, res, next) => {
        if (req.user.role !== 'admin') {
          return res.status(403).json({ message: "Access denied: Admins only" });
        }
        next();
      };
      
    
module.exports={userAuthmiddleware,adminOnlyMiddleware}