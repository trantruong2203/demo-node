const Joi = require('joi');

const dongxeSchema = Joi.object({
  dongxe: Joi.string().trim().min(3).required().messages({
    'string.base': `"dongxe" phải là chuỗi`,
    'string.empty': `"dongxe" không được để trống`,
    'string.min': `"dongxe" phải có ít nhất 3 ký tự`,
    'any.required': `"dongxe" là bắt buộc`
  }),
  hangxe: Joi.string().trim().min(3).required().messages({
    'string.base': `"hangxe" phải là chuỗi`,
    'string.empty': `"hangxe" không được để trống`,
    'string.min': `"hangxe" phải có ít nhất 3 ký tự`,
    'any.required': `"hangxe" là bắt buộc`
  }),
  sochongoi: Joi.number().integer().min(1).messages({
    'number.base': `"sochongoi" phải là số`,
    'number.min': `"sochongoi" phải lớn hơn 0`
  })
});

module.exports = dongxeSchema;
