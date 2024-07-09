import { userModel } from "../models/user_model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


// Function to add a user (Sign up)
export const addUser = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        let user = await userModel.find({ username });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        user = new user({ username, password });
        await user.save();

        const payload = { userId: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


// Function for existing user to log in
export const logIn = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        let user = await userModel.find({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const payload = { userId: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};