const Joi = require('joi');

const nhaCungCapSchema = Joi.object({
  manhacc: Joi.string().trim().min(3).required().messages({
    'string.base': `"manhacc" phải là chuỗi`,
    'string.empty': `"manhacc" không được để trống`,
    'string.min': `"manhacc" phải có ít nhất 3 ký tự`,
    'any.required': `"manhacc" là bắt buộc`
  }),
  tennhacc: Joi.string().trim().min(3).required().messages({
    'string.base': `"tennhacc" phải là chuỗi`,
    'string.empty': `"tennhacc" không được để trống`,
    'string.min': `"tennhacc" phải có ít nhất 3 ký tự`,
    'any.required': `"tennhacc" là bắt buộc`
  }),
  diachi: Joi.string().trim().min(3).required().messages({
    'string.base': `"diachi" phải là chuỗi`,
    'string.empty': `"diachi" không được để trống`,
    'string.min': `"diachi" phải có ít nhất 3 ký tự`,
    'any.required': `"diachi" là bắt buộc`
  }),
  sodt: Joi.string().trim().min(3).required().messages({
    'string.base': `"sodt" phải là chuỗi`,
    'string.empty': `"sodt" không được để trống`,
    'string.min': `"sodt" phải có ít nhất 3 ký tự`,
    'any.required': `"sodt" là bắt buộc`
  }),
  masothe: Joi.string().trim().min(3).required().messages({
    'string.base': `"masothue" phải là chuỗi`,
    'string.empty': `"masothue" không được để trống`,
    'string.min': `"masothue" phải có ít nhất 3 ký tự`,
    'any.required': `"masothue" là bắt buộc`
  })
});

module.exports = nhaCungCapSchema;
