import jwt from 'jsonwebtoken';
const protectRoute = (req, res, next) => {
    try{

    }catch(error){
        res.status(500).json({error: "Internal server error"});
    }
}