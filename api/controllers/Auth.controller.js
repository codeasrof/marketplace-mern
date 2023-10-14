import User from "../models/User.model.js"
import bcryptjs from "bcryptjs"

export const Signup = async (req,res) => {
    const {username, email, password} = await req.body
    const hashedPassword = bcryptjs.hashSync(password, 16)
    const newUser = new User({username, email, password: hashedPassword})
    try {
        await newUser.save()
        res.status(201).json({message: "User created!"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}