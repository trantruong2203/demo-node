const joi = require('joi');

const dkccSchema = joi.object({
    madkcc: joi.string().trim().required().messages({
        'string.base': `"madkcc" phải là chuỗi`,
        'string.empty': `"madkcc" không được để trống`,
        'any.required': `"madkcc" là bắt buộc`
    }),
    manhacc: joi.string().trim().required().messages({
        'string.base': `"manhacc" phải là chuỗi`,
        'string.empty': `"manhacc" không được để trống`,
        'any.required': `"manhacc" là bắt buộc`
    }),
    maloaidv: joi.string().trim().required().messages({
        'string.base': `"maloaidv" phải là chuỗi`,
        'string.empty': `"maloaidv" không được để trống`,
        'any.required': `"maloaidv" là bắt buộc`
    }),
    dongxe: joi.string().trim().required().messages({    
        'string.base': `"dongxe" phải là chuỗi`,
        'string.empty': `"dongxe" không được để trống`,
        'any.required': `"dongxe" là bắt buộc`
    }),
    mamp: joi.string().trim().required().messages({
        'string.base':   `"mamp" phải là chuỗi`,
        'string.empty': `"mamp" không được để trống`,
        'any.required': `"mamp" là bắt buộc`
    }),
    ngaybatdaucungcap: joi.date().required().messages({
        'date.base': `"ngaybatdaucungcap" phải là ngày`,
        'any.required': `"ngaybatdaucungcap" là bắt buộc`
    }),
    ngayketthuccungcap: joi.date().required().messages({
        'date.base': `"ngayketthuccungcap" phải là ngày`,
        'any.required': `"ngayketthuccungcap" là bắt buộc`
    }),
    soluongxedangky: joi.number().required().messages({
        'number.base': `"soluongxedangky" phải là số`,
        'any.required': `"soluongxedangky" là bắt buộc`
    })
})

exports = module.exports = dkccSchema;