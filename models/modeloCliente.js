import mongoose from "mongoose";

const Schema = mongoose.Schema;


const Cliente=new Schema({
    nombre : {
        type:String,
        req:true
    },
    apellido:{
        type:String,
        req:true
    },
    telefono:{
        type:Number,
        req:true
    },
    fecha_entrada:{
        type:Date,
        req:true
    },
    fecha_salida:{
        type:Date,
        req:true
    },
    numero_personas:{
        type:Date,
        req:true
    }

})



export const modeloCliente=mongoose.model('clientes', Cliente);