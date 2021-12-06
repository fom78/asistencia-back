import { Comision } from "../models/Comision";
import { Usuario } from "../models/Usuario"

export const createComision = async (req, res) => {
    const { numero, titulo, profesor, fechaInicio, fechaFinal, calendario, inscriptos } = req.body;

    try {
        const comisionEncontrada = await Comision.findOne({ numero: numero });
        if (comisionEncontrada) {
            return res.status(304).send({ msg: `La comision ${numero} ya existe` })
        } else {
            const usuariosEncontrados = await Usuario.find({
                _id: { $in: inscriptos }
            })

            const comision = new Comision({
                numero,
                titulo,
                profesor,
                fechaInicio,
                fechaFinal,
                calendario,
                inscriptos: usuariosEncontrados.map((u) => u._id),

            });

            const comisionGuardada = await comision.save();

            return res.send(comisionGuardada);
        }
    } catch(error) {
        res.send(error)
    }
}

export const mostrarComisiones = async (req, res) => {

    try {
        const comision = await Comision.find();

        return res.json(comision);
    } catch (e) {
        res.json(e);
    }
}

export const agregarInscripto = async (req, res) => {
    const { idUsuarioAInscribir, rol } = req.body
    const { id } = req.params

    try {
        if (rol != "admin") return res.status(403).send({ msg: `Su rol: ${rol}, es insuficiente para agregar inscriptos a esta comision.` })
        
        // Verificamos que la comision exista
        const comision = await Comision.findOne({ _id: id })
        if (!comision)  return res.status(404).send({
            msg: 'La comision a la que intenta inscribir estudiantes no existe'
        })
        
        // Verificamos que el usuario ya no este inscripto
        const estaInscripto = await Comision.find({
            $and: [{ inscriptos: { $in: [idUsuarioAInscribir] } }, { _id: id }]
        })

        // console.log("estaInscripto: ", estaInscripto)

        if (estaInscripto.length > 0) {
            return res.status(203).json({
            msg: 'El estudiante ya esta inscripto en esta comision'
            })
        }



        // Verificamos que el usuario a inscribir exista
        const usuario = await Usuario.findOne({ _id: idUsuarioAInscribir })
        if (!usuario)  return res.status(404).send({
            msg: 'El estudiante que intenta inscribir no existe'
        })


        

        // Todo en orden, editamos la coleccion de comision, agregando el estudiante
        comision.inscriptos.push(idUsuarioAInscribir)
        const comisionSalvada = await Comision.findByIdAndUpdate(id, comision, { new: true })
        return res.json({msg:"funciona",inscriptos:comisionSalvada.inscriptos});

    } catch (e) {
        res.json(e);
    }
}

