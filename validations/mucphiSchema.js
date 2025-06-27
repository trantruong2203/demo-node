const Joi = require('joi');

const mucphiSchema = Joi.object({
  mamp: Joi.string().trim().min(3).required().messages({
    'string.base': `"mamp" phải là chuỗi`,
    'string.empty': `"mamp" không được để trống`,
    'string.min': `"mamp" phải có ít nhất 3 ký tự`,
    'any.required': `"mamp" là bắt buộc`
  }),
  dongia: Joi.number().integer().min(1).required().messages({
    'number.base': `"dongia" phải là số`,
    'number.empty': `"dongia" không được để trống`,
    'number.min': `"dongia" phải lớn hơn 0`,
    'any.required': `"dongia" là bắt buộc`
  }),
  mota: Joi.string().trim().min(3).required().messages({
    'string.base': `"mota" phải là chuỗi`,
    'string.empty': `"mota" không được để trống`,
    'string.min': `"mota" phải có ít nhất 3 ký tự`,
    'any.required': `"mota" là bắt buộc`
  })
});

module.exports = mucphiSchema;
