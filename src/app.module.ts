import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { AppController } from './app.controller';
import { AppService } from './app.service';import { BooksController } from './book/book.controller';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'postgres',
        version: '14.4',
        connection: {
          host: '127.0.0.1',
          user: 'postgres',
          password: 'postgres',
          database: 'postgres',
        },
      },
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
