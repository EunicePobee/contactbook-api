import { contactModel } from "../models/contact_model.js";

// Function to add a conatct
export const addContact = async (req, res) => {
    try {
        console.log("request", req.body);
        const addData = await contactModel.create(req.body);
        res.status(200).send(addData)
        
    } catch (error) {
        console.log(error)
    }
}


// Function to get all contacts in the database
export const getContact = async (req, res) => {
    try {
        console.log("request", req.body);
        const getData = await contactModel.find();
        res.status(200).send(getData)

    } catch (error) {
        console.log(error)
    }
}


// Function to get a particular contact from the database
export const getContactById = async (req, res) => {
    try {
        console.log("request", req.body);
        const getDataById = await contactModel.findById(req.params.id);
        res.status(200).send(getDataById)

    } catch (error) {
        console.log(error)
    }
}





// Function to update a particular contact
export const patchContactById = async (req, res) => {
    try {
        const newData = req.body
        console.log("request", req.body);
        const patchDataById = await contactModel.findByIdAndUpdate(req.params.id, newData, {new:true});
        res.status(200).send(patchDataById)
    } catch (error) {
        console.log(error)
    }
}


// Function to delete a particular contact from the database
export const deleteContactById = async (req, res) => {
    try {
        console.log("request", req.body);
        const deleteDataById = await contactModel.findByIdAndDelete(req.params.id);
        res.status(200).send('Contact has been deleted.')
    } catch (error) {
        console.log(error)
    }
}