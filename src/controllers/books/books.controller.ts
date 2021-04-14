import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import {BookDTO} from '../../DTO/books.dto'

@Controller('books')
export class BooksController {

    @Get()
    getAllBooks(): string {
        return 'Todos os livros estao aqui';
    }

    @Post()
    saveBook(@Body() newBook: BookDTO): BookDTO {
        return newBook;
    }

    @Patch()
    updateBook(): string {
        return 'este livro foi alterado';
    }

    @Delete()
    deleteBook(): string {
        return 'este livro foi excluido';
    }
}

