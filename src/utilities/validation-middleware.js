const validator = require("./validator");

/**
 * The custom validation rule for all the keys to be validated in our request
 */
const validationRule = [
    "type",
    "crux",
    "color",
    "title"
];

const removeValidationRule = ["item"];


/**
 * Our assumed self-defined validation middleware to handle our validation
 * @param HttpRequest req 
 * @param HttpResponse res 
 * @param ExpressNext next 
 * 
 */
const validationMiddleware = function (req, res, next, rule) {
    const validation = validator(rule, req.body);

    if (validation.failed) {
        return res.status(400).json({
            status: "FAILED",
            code: "02",
            error: validation.errors
        });
    }
    
    return next();

}

module.exports = {validate: validationMiddleware, validationRule, removeValidationRule};