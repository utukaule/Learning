import jwt from 'jsonwebtoken'
import {User} from '../models/User.model.js'

// user is authenticated or not

export const isAuthenticated = async(req,res) => {
    const token = req.header("Auth")
    if(!token){
        return req.json({
            message:"Login first",
            success:false
        })
    }
    const decoded = jwt.verify(token,process.env.JWT)
    const id = decoded.userId;

    let user = await User.findById(id);
    if(!user){
        return res.json({
            message:"User is not valid",
            success:false
        })
    }
    req.user = user
    next()

}