import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    let { username, email, password } = req.body;

    if (!username && !email && !password) {
        return res.status(400).json({ error: "Enter all credentials." });
    }
    let duplicate = await User.findOne({ username });
    let duplicateEmail = await User.findOne({ email });

    if (duplicate) {
        return res.status(409).json({ error: "User already exist !" });
    }
    if (duplicateEmail) {
        return res.status(409).json({ error: "Email already taken ." });
    }

    let hashpwd = await bcrypt.hash(password , 10);
   
    

    try {
        let newUser = new User({ username, email, password : hashpwd });
        
        await newUser.save();
        res.status(201).json({ message: "User Created successfully. " });
    } catch (error) {
        console.log("error :", error.message);
    }
};
