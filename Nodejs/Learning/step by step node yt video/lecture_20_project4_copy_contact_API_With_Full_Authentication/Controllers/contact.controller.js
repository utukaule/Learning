import { Contact } from "../Models/Contact.model.js";

// get all contact
export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();
  if (!userContact) {
    return res.json({
      message: "Contacts not exists",
      success: false,
    });
  }

  res.json({
    message: "All Contacts Fatched",
    userContact,
    success: true,
  });
};

// create new contact
export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (!name || !email || !phone || !type) {
    return res.json({
      message: "All fields are required",
      success: false,
    });
  }

  let saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
    user: req.user,
  });

  res.json({
    message: "Contact saved successfully",
    success: true,
    data: saveContact,
  });
};

// update contact by ID
export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;

  let updatedContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
      
    },
    { new: true }
  );

  if (!updatedContact) {
    return res.json({
      message: "No contact exists",
      success: false,
    });
  }
  res.json({
    message: "Contact Updated Successfully",
    success: true,
    data: updatedContact,
  });
};

// Delete contact by ID
export const deleteContactById = async (req, res) => {
  const id = req.params.id;
  const deleteContact = await Contact.findByIdAndDelete(id);
  if (!deleteContact) {
    return res.json({
      message: "Invalid ID",
      success: false,
    });
  }
  res.json({
    message: "Contact Deleted Successfully",
    success: true,
  });
};

// get contact by id
export const getContactById = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.findById(id);
  if (!userContact) {
    return res.json({
      message: "No contact find",
      success: false,
    });
  }
  res.json({
    message: "Contact fetched",
    success: true,
    data: userContact,
  });
};

// 