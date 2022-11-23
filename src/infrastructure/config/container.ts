import { ICustomersRepository } from "@domain/repositories/ICustomersRepository";
import { IPublishersRepository } from "@domain/repositories/IPublishersRepository";
import { CustomersRepository } from "@infrastructure/repositories/customers/CustomersRepository";
import { PublishersRepository } from "@infrastructure/repositories/publishers/PublishersRepository";
import { container } from "tsyringe";

container.registerSingleton<ICustomersRepository>(
    "CustomersRepository",
    CustomersRepository
);

container.registerSingleton<IPublishersRepository>(
    "PublishersRepository",
    PublishersRepository
);
