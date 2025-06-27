const Joi = require('joi');

const loaidvSchema = Joi.object({
  maloaidv: Joi.string().trim().min(3).required().messages({
    'string.base': `"maloaidv" phải là chuỗi`,
    'string.empty': `"maloaidv" không được để trống`,
    'string.min': `"maloaidv" phải có ít nhất 3 ký tự`,
    'any.required': `"maloaidv" là bắt buộc`
  }),
  tenloaidv: Joi.string().trim().min(3).required().messages({
    'string.base': `"tenloaidv" phải là chuỗi`,
    'string.empty': `"tenloaidv" không được để trống`,
    'string.min': `"tenloaidv" phải có ít nhất 3 ký tự`,
    'any.required': `"tenloaidv" là bắt buộc`
  })
});

module.exports = loaidvSchema;
