import mongoose, { mongo } from "mongoose";

const urlSchema = new mongoose.Schema({
    shortCode:String,
    longUrl:String
})

export const Url = mongoose.model("ShortURL",urlSchema)