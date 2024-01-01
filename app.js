const express = require("express");
const { createUser } = require("./src/services/user.service");
const validateOneObj = require("./src/middleware/validate");
const { createUserSchema } = require("./src/validation/user.schema");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3008;


app.get("/",(req,res) => {
    res.send("Hello APIs");
})

//middleware
app.post("/user", validateOneObj(createUserSchema), createUser);

app.listen(PORT,() => {
    console.log(`Server Running on port ${PORT}`)
});