import mongoose from "mongoose";

const user = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
})

export const User = mongoose.model("user",user)