import { Length, MAX_LENGTH, min } from "class-validator";

export class BookDto {

    @Length(3, 29, { message: "3<= x <=29" })
    name: string;

    author: string;
    
    price: number;
}