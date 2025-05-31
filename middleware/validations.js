const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.validate(req.body, { abortEarly: false, allowUnknown: false });

        if (result.error) {
            const errors = result.error.details.map(err => err.message);
            return res.status(400).json({ errors });
        }
        next();
    };
};

module.exports = validate;