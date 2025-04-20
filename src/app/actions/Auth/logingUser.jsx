"use server"
import bdconnect, { collectionObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
export const loginUser = async(payload)=>{
    const {email,password} = payload;
    const usercollection = bdconnect(collectionObj.usecollection);
    const user = await usercollection.findOne({email})
    if(!user) return null;
    const isPassword = await bcrypt.compare(password, user.password)

           if(!isPassword) return null;
           return user
           
}
