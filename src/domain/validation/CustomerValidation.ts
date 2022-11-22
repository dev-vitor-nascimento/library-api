import { body } from "express-validator"

const customerValidation = [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isString().withMessage("Name must be of type string")
        .isLength({ min: 3, max: 50 }).withMessage("Name must be between 3 and 50 characters.")
        .trim(),

    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid Email")
        .isLength({ min: 10, max: 50 }).withMessage("Email must be between 10 and 50 characters.")
        .trim(),

    body("city")
        .notEmpty().withMessage("City is required")
        .isString().withMessage("City must be of type string")
        .isLength({ min: 3, max: 50 }).withMessage("City must be between 3 and 50 characters.")
        .trim(),

    body("address")
        .notEmpty().withMessage("Address is required")
        .isString().withMessage("Address must be of type string")
        .isLength({ min: 3, max: 50 }).withMessage("Address must be between 3 and 50 characters.")
        .trim(),
]

export { customerValidation }