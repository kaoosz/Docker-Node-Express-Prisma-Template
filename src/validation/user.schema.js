const { z } = require("zod");
const { requiredMessage, invalidTypeMessage } = require("./validation.functions");



const createUserSchema  = z.object({
    name: z.string({
        required_error: requiredMessage("phone"),
        invalid_type_error: invalidTypeMessage("phone", "string")
    }),
    email: z.string({
        required_error: requiredMessage("email"),
        invalid_type_error: invalidTypeMessage("email", "string")
    }),
    password: z.string({
        required_error: requiredMessage("password"),
        invalid_type_error: invalidTypeMessage("password", "string")
    }),
}).strip();

function validateUserPost(data){
    const validate = userSchema.safeParse(data);

    return {
        valid: validate.success,
        data: validate.data,
        message: validate.error ? console.log(validate.error) : null
    }

}

module.exports = {createUserSchema}
