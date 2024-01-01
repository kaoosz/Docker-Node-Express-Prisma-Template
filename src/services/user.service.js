
const { prisma } = require("./prisma.service");

async function createUser(req,res){
    console.log("first");
    console.log(res);

    try{
        const result = await prisma.user.create({
            data: req.body
        });
        res.status(201).json(result); // Resposta de sucesso
        //res.status(201).json('data'); // Resposta de sucesso

    }catch(error){
        console.log("error",error)
        res.status(500).json({ error: "An error occurred while creating the user." });
    }

}

module.exports = {
    createUser
}