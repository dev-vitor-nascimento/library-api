import { body } from "express-validator"

const currentYear = new Date().getFullYear();

const bookValidation = [
    body("title")
        .notEmpty().withMessage("Title is required")
        .isString().withMessage("Title must be of type string")
        .isLength({ min: 3, max: 50 }).withMessage("Title must be between 3 and 50 characters.")
        .trim(),

    body("author")
        .notEmpty().withMessage("Author is required")
        .isString().withMessage("Author must be of type string")
        .isLength({ min: 3, max: 50 }).withMessage("Author must be between 3 and 50 characters.")
        .trim(),

    body("release_year")
        .notEmpty().withMessage("Release year is required")
        .isInt({ max: currentYear }).withMessage(`Release year must be of integer type and less than ${currentYear}.`)
        .isLength({ min: 4, max: 4 }).withMessage("Release year must be 4 characters.")
        .toInt(),

    body("publisher_id")
        .notEmpty().withMessage("Publisher id is required")
        .isUUID().withMessage("Publisher id must be of type UUID")
]

export { bookValidation }