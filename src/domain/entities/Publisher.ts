import { BaseEntity } from "./BaseEntity";

class Publisher extends BaseEntity {
    constructor(
        public name: string,
        public city: string,
        id?: string,
    ) {
        super(id);
    }
}
export { Publisher }
