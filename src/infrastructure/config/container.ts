import { ICustomersRepository } from "@domain/repositories/ICustomersRepository";
import { CustomersRepository } from "@infrastructure/repositories/customers/CustomersRepository";
import { container } from "tsyringe";

container.registerSingleton<ICustomersRepository>(
    "CustomersRepository",
    CustomersRepository
);
