import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { BookDto } from './book.dto';

@Injectable()
export class BookService {
    constructor(@InjectKnex() private readonly knex: Knex) { }

    async findAll() {

       return await this.knex.select('id','name','').from('book').orderBy('id','desc')

        // const books = await (await this.knex.select().table('book').orderBy('id', 'desc'));
        // return { books };
    }

    async create(dto: BookDto) {
        try {
            const post = await this.knex.table('book').insert({
                ...dto
            });
            return { message: "done" };
        } catch (err) {
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: number, dto: BookDto) {
        try {
            return this.knex('book').where({ id: id }).update(dto);

        } catch (error) {
            return error.detail;
        }
    }

    async getOne(id: number) {
        try {
            const book = await this.knex('book').where({ id: id }).select();

            return { ...book[0] };

        } catch (error) {
            return error.detail;
        }
    }


    async delete(id: number) {
        try {
            return this.knex('book').where({ id: id }).delete().then((res) => {
                if (res ==1 ) {
                    return { message: " deleted" }
                } else {
                    throw new NotFoundException({message :`${id} not found`})
                }
            });
        } catch (error) {
            return error.detail;
        }
    }



}