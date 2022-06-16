import mongoose from "mongoose";

const Schema = mongoose.Schema;


const Habitacion=new Schema({
    nombre : {
        type:String,
        req:true
    },
    precio:{
        type:Number,
        req:true
    },
    capacidad:{
        type:Number,
        req:true
    },
    descripcion:{
        type:String,
        req:true
    },
    imagen:{
        type:String,
        req:true
    }
})



export const modeloHabitacion=mongoose.model('habitaciones', Habitacion);