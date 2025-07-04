import e from "express";
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

  if (name == "" || email == "" || phone == "" || type == "") {
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
  });

  res.json({
    message: "Contact saved successfully",
    success: true,
  });
};


// get contact by id

export const getContactById = async(req,res)=>{
    const id  = req.params.id

    const userContact = await Contact.findById(id);
    if(!userContact){
        return res.json({
            message:"Invalid Id",
            success:false
        })
    }

}