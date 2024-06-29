import { Router } from "express";
import { addContact, deleteContactById, getContact, getContactById, patchContactById } from "../controllers/contact_controller.js";


// Create router
const contactRouter = Router();

// Define routes
contactRouter.post('/contacts', addContact)

contactRouter.get('/contacts', getContact)

contactRouter.get('/contacts/:id', getContactById)

contactRouter.patch('/contacts/:id', patchContactById)

contactRouter.delete('/contacts/:id', deleteContactById)

// Export router
export default contactRouter;