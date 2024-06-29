import express from "express";
import contactRouter from "./routes/contact_route.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";

// Create app
const app = express();

// Apply middleware
app.use(express.json());

dbConnection();


// Use routes
app.use(contactRouter);

// Listen for incoming requests
app.listen(7800, () => {
    console.log('App is listening on port 7800');
});