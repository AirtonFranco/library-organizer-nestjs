import { ArrayMinSize, IsNotEmpty, IsNotEmptyObject, IsNumber, IsPositive, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { AuthorDTO } from './author.dto';
import { Type } from 'class-transformer';

export class BookDTO {

    @IsNotEmpty() //informando que não pode esta vazio
    @IsString() // tem que conter String
    @MinLength(2) //Minimo de 2 caracteres
    @MaxLength(100) //Max de 100 caracteres
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @Type(() => AuthorDTO) //Deve ter os campos definidos na class AuthorDTO
    @ArrayMinSize(1) //deve ter minimo de 1 Array
    @IsNotEmptyObject({  }) //Não pode ser um objeto vazio
    @ValidateNested({ each : true }) //Validar o obj principal BookDTO e tambem AuthorDTO
    readonly author: AuthorDTO[]; //Importando aqui a class AuthorDTO

    @IsNotEmpty() //informando que não pode esta vazio
    @IsString() // tem que conter String
    @MinLength(2) //Minimo de 2 caracteres
    @MaxLength(100) //Max de 100 caracteres
    readonly language: string;

    @IsNotEmpty()
    @IsNumber() //Precisa ser numero
    @IsPositive() //Não pode conter um numero negativo
    readonly releaseYear: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly publisher: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly pages: number

}