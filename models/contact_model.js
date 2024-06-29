import mongoose, { Schema, model } from "mongoose";

// Define schema
const contactSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    address: {type: String},
    workPhoneNumber: {type: String},
    emailAddress: {type: String},
    mobilePhoneNumber: {type: String},
})


export const contactModel = model('contact', contactSchema)