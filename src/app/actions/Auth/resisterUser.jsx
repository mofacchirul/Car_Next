"use server";

import bdconnect, { collectionObj } from "@/lib/dbConnect";
import bcrypt from'bcrypt';
export const resisterUser = async (payload) => {
    const usercollection =  bdconnect(collectionObj.usecollection);

  const { name, email, password } = payload;

  if (!name || !email || !password) return null

  const existingUser = await usercollection.findOne({email: payload.email});

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
const result = await usercollection.insertOne(payload);
const {acknowledged,insertedId}=result;
return {
    acknowledged,
    insertedId: insertedId.toString()
};
  }

  return { success: false, message: "User already exists" };
};
