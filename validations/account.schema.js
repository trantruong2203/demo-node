const joi = require('joi');

const accountSchema = joi.object({
    username: joi.string().trim().min(3).required().messages({
        'string.base': `"username" phải là chuỗi`,
        'string.empty': `"username" không được để trống`,
        'string.min': `"username" phải có ít nhất 3 ký tự`,
        'any.required': `"username" là bắt buộc`
    }),
    password: joi.string().trim().min(6).required().messages({
        'string.base': `"password" phải là chuỗi`,
        'string.empty': `"password" không được để trống`,
        'string.min': `"password" phải có ít nhất 6 ký tự`,
        'any.required': `"password" là bắt buộc`
    })
})

exports = module.exports = accountSchema;