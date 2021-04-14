import { Document } from 'mongoose'; //IMportando um documento especifico
import * as mongoose from 'mongoose'; //IMportando tudo do mongose
import { AuthorDTO } from 'src/DTO/author.dto';

export interface Book extends Document {
    readonly _id : mongoose.Schema.Types.ObjectId;
    readonly name : String;
    readonly author : Object;
    readonly language : String;
    readonly releaseYear : String;
    readonly publisher : String;
    readonly pages : Number
}