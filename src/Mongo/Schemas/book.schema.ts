import { Schema } from "mongoose";
import {AuthorSchema} from './author.schema'

//campos que irão para o DB
export const BookSchema = new Schema({

    name : String,
    author : AuthorSchema,
    language : String,
    releaseYear : Number,
    publisher : String,
    pages : Number

})