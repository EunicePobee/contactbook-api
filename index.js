import express from "express";
import contactRouter from "./routes/contact_route.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userRouter from "./routes/user_route.js";
import { userModel } from "./models/user_model.js";

// Create app
const app = express();

// Apply middleware
app.use(express.json());
app.use(bodyParser.json());

const hashedPassword = await bcrypt.hash('your_password', 10);
const isMatch = await bcrypt.compare('your_password', hashedPassword);

const user = await userModel.find()

const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h'});
const decoded = jwt.verify(token, process.env.JWT_SECRET);

dbConnection();


// Use routes
app.use(contactRouter);
app.use(userRouter);
app.use('/api', userRouter);

// Listen for incoming requests
app.listen(7800, () => {
    console.log('App is listening on port 7800');
});