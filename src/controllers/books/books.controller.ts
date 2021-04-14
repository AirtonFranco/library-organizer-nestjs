import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {

    @Get()
    getAllBooks(): string {
        return 'Todos os livros estao aqui';
    }

    @Post()
    saveBook(@Body() newBook: string): string {
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

