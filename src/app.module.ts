import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './controllers/books/books.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/biblioteca', {useNewUrlParser: true, useUnifiedTopology: true})
  ],
  controllers: [BooksController],
  providers: [],
})
export class AppModule {}
