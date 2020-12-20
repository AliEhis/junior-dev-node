/**
 * This checks for the presence and validity (by type) of the key-value pair in our request body  
 * @param Object body 
 * @param String key 
 * @param String type 
 */
function isValidateError(body, key, type) {
    if (body.hasOwnProperty(key)) {
        if (typeof body[key] == type) {
            return false;
        }
        return `the ${key} field is expected to be string`;
    }
    return `the ${key} field is required`;
}



/**
 * Our (MINI) reusable validation function that only needs to be imported wherever it is needed
 * @param Array rule 
 * @param HttpResuestBody body 
 */
 const validator = function (rule, body) {
    const errors = {};
    let errorCount = 0;
    rule.forEach(field => {
        const isError = isValidateError(body, field, "string");
        if (isError) {
            errors[field] = isError;
            errorCount++;
        }
    });
    return errorCount > 0 ? {failed: true, errors} : {failed: false};
}


module.exports = validator;