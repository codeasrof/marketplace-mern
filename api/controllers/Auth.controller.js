import User from "../models/User.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

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

export const Signin = async (req,res,next) => {
    const {email, password} = req.body;

    try {

        const validUser = await User.findOne({email})
        if(!validUser) return next(errorHandler(404, "User not found!"))
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if(!validPassword) return next(errorHandler(401, "Wrong credentials"))
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        const {password: pass, ...rest} = validUser._doc
        res
            .cookie('access_token', token, {httpOnly: true})
            .status(200)
            .json(rest)

    } catch (error) {
        next(error)
    }
}