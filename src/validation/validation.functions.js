const { z } = require("zod");

function requiredMessage(field){
    return `O campos ${field} é obrigatorio`
}

function uuidMessage(){
    return `UUID inválido.`
}

function invalidTypeMessage(field, type) {
    return `O campo ${field} é do tipo ${type}.`
}

module.exports = { 
    requiredMessage,
    uuidMessage,
    invalidTypeMessage
}