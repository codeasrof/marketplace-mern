import User from "../models/User.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"

export const Signup = async (req,res,next) => {
    const {username, email, password} = await req.body
    const hashedPassword = bcryptjs.hashSync(password, 16)
    const newUser = new User({username, email, password: hashedPassword})
    try {

        await newUser.save()
        res.status(201).json({message: "User created!"})
        
    } catch (error) {
        next(error)
    }
}