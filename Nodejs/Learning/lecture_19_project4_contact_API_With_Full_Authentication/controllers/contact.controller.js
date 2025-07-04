import { Contact } from "../models/Contact.model.js";

// get all contact
export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();
  if (!userContact) {
    return res.json({ message: "no contact exist", success: false });
  }

  res.json({ message: "All contact fatched", userContact });
};

// create new contact
export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (name == "" || email == "" || phone == "" || type == "") {
    return res.json({ message: "All fields are required", succss: false });
  }

  let saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
  });
  res.json({
    message: "Contact saved successfully..",
    saveContact,
    success: true,
  });
};
