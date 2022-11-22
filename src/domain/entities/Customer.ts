import { BaseEntity } from "./BaseEntity";

class Customer extends BaseEntity {
    constructor(
        public name: string,
        public email: string,
        public city: string,
        public address: string,
        id?: string,
    ) {
        super(id);
    }
}
export { Customer }
