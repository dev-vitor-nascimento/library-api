import { body } from "express-validator"

const publisherValidation = [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isString().withMessage("Name must be of type string")
        .isLength({ min: 3, max: 50 }).withMessage("Name must be between 3 and 50 characters.")
        .trim(),

    body("city")
        .notEmpty().withMessage("City is required")
        .isString().withMessage("City must be of type string")
        .isLength({ min: 3, max: 50 }).withMessage("City must be between 3 and 50 characters.")
        .trim(),
]

export { publisherValidation }