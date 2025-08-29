import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateTokenAndSaveCookie } from "../utils/generateToken.js";

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

    let hashpwd = await bcrypt.hash(password, 10);

    try {
        let newUser = new User({ username, email, password: hashpwd });

        await newUser.save();
        res.status(201).json({ success: "User Created successfully." });
    } catch (error) {
        console.log("error :", error.message);
    }
};

export const signin = async (req, res) => {
    let { email, password } = req.body;

    if (!email && !password) {
        return res.status(400).json({ error: "Enter all credentials ." });
    }

    let user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    let isPassCorrect = await bcrypt.compare(password, user.password);

    if (!isPassCorrect) {
        return res.status(403).json({ error: "Invalid credentials" });
    }

    //removing password to send on client side
    const { password: hashpwd, ...safeUser } = user.toObject();

    generateTokenAndSaveCookie(user._id, res);
    res.status(200).json(safeUser);
};

export const google = async (req, res) => {
    let { name, email, profilePicture } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        generateTokenAndSaveCookie(user._id, res);
        let { password, ...safeUser } = user.toObject();
        res.status(200).json(safeUser);
    } else {
        let generatedPassword =
            Math.random().toString(36).slice(-8) +
            Math.random().toString(36).slice(-8);
        let hashpwd = await bcrypt.hash(generatedPassword, 10);
        let username =
            name.split(" ").join("").toLowerCase() +
            Math.floor(Math.random() * 10000);

        let newUser = new User({
            username,
            email,
            password: hashpwd,
            profilePicture,
        });
        newUser.save();

        let { password, ...safeUser } = newUser.toObject();
        res.status(200).json(safeUser);
    }
};
