import { Schema } from "mongoose";

//campos que irão para o DB
export const AuthorSchema = new Schema({

    name : String,
    surname : String,

})