const yup = require('yup');

const { object, string, number, date, InferType } = yup;

const validate = async (req, res, next) => {
    try {
        const schema = object({
            name: string().matches(/^[a-zA-Z]{3,}$/ , 'wrong format').required(),
            email: string().email().required(),
            cin: number().required(),
        });
        await schema.validate(req.body);
        next();
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

module.exports = validate;