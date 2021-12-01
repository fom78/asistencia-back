import { Schema, model } from 'mongoose'

const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      unique: true
    },
    dni: {
      type: Number,
      unique: true
    },
    clave: {
      type: String,
      required: true
    },
    roles: {
      type: String,
      enum : ['admin','student'],
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)



// module.exports = model('Usuario', usuarioSchema)
export const Usuario = model('Usuario', usuarioSchema)
