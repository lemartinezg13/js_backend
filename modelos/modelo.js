import mongoose from 'mongoose'

//definir el esquema de persona
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
    nombre_corto:{
        type:String
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    nacimiento:{
        type: Date
    },
    lugar: {
        type: String
    },
    edad:{
        type: Number
    }, 
    altura:{
        type: String
    },
    posicion:{
        type: String
    },
    pie:{
        type: String
    },
    club:{
        type: String
    },
    fichado:{
        type: String
    },
    contrato_hasta:{
        type: String
    },
    proveedor:{
        type: String
    },
    fecha_creacion: {
        type:Date,
        default: Date.now
    }

})

export default PersonaSchema