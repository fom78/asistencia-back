import { Schema, model } from 'mongoose'

const comisionSchema = new Schema(
  {
    numero: { // 2155
      type: Number,
      unique: true
    },
    titulo: { // Desarrollo Web
      type: String,
      unique: true
    },
    profesor: { // Erica
      type: Array,
      required: true
    },
    fechaInicio: {
      type: Date,
      required: true
    },
    fechaFinal: {
      type: Date,
      required: true
    },
    calendario: {
      type: Array,
      default: []
    },
    inscriptos: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)



// module.exports = model('Usuario', usuarioSchema)
export const Comision = model('Comision', comisionSchema);