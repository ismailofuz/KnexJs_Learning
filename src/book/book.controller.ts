import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookDto } from './book.dto';
import { BookService } from './book.service';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BookService) { }

    @Get()
    async getAllUsers() {
        return await this.bookService.findAll();
    }


    @Post()
    create(@Body() dto: BookDto) {
        return this.bookService.create(dto);
    }

    @Patch(':id')
    update(@Body() dto: BookDto, @Param('id') id: number) {
        return this.bookService.update(id, dto);
    }

    @Get(':id')
    getOne( @Param('id') id: number) {
        return this.bookService.getOne(id);
    }

    @Delete(':id')
    delete( @Param('id') id: number) {
        return this.bookService.delete(id);
    }
}