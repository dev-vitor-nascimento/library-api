import { BaseEntity } from "./BaseEntity";

class Book extends BaseEntity {
    constructor(
        public title: string,
        public author: string,
        public releaseYear: number,
        id?: string,
    ) {
        super(id);
    }
}
export { Book }