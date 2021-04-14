import { IsEmpty, isNotEmpty, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class BookDTO {

    @IsNotEmpty() //informando que não pode esta vazio
    @IsString() // tem que conter String
    @MinLength(2) //Minimo de 2 caracteres
    @MaxLength(100) //Max de 100 caracteres
    readonly name: string;

    readonly author: string[]

    @IsNotEmpty() //informando que não pode esta vazio
    @IsString() // tem que conter String
    @MinLength(2) //Minimo de 2 caracteres
    @MaxLength(100) //Max de 100 caracteres
    readonly language: String;

    @IsNotEmpty()
    @IsNumber()
    @MinLength(2)
    @IsPositive() //Não pode conter um numero negativo
    readonly releaseYear: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly publisher: string;

    @IsEmpty()
    @IsNumber()
    @IsPositive()
    readonly pages: number

}