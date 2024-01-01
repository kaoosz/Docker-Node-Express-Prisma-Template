
const validateOneObj = (schema) => (req, res, next) => {
    console.log("Inicio validates");
    try {
        const result = schema.safeParse(req.body);
        console.log("result", result);
        if (result.success) {
            console.log("req.body", req.body);
            console.log("Dados validados: ", result.data);
            req.body = result.data;
            next(); // Importante para passar o controle ao próximo middleware/função
        } else {
            res.status(400).json({ error: result.error.issues.map(item => item.message) });
        }

    } catch (error) {
        console.log('err',error.issues.map(item => item.message))
        return res.status(400).json({ errorz: error.errors })

    }
}

module.exports = validateOneObj;