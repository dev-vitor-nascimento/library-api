import { param } from "express-validator"

const idValidation = [
    param("id")
        .notEmpty().withMessage("Id is required")
        .isUUID().withMessage("Id must be of type UUID")
]

export { idValidation }