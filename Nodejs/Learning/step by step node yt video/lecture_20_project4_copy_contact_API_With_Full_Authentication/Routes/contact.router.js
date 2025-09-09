import express from "express";
import {
  deleteContactById,
  getAllContact,
  getContactById,
  newContact,
  updateContactById,
} from "../Controllers/contact.controller.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

// new contact
// @api description:- creating new contact
// @api method:- post
// @api endPoint:- /api/contact/new
router.post("/new", isAuthenticated, newContact);

// get all contact
router.get("/", getAllContact);

// get contact by ID
router.get("/:id", getContactById);

// update contact by id
router.put("/:id", updateContactById);

// Delete contact
router.delete("/:id", deleteContactById);
export default router;
