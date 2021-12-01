import { Comision } from "../models/Comision";

export const createComision = async (req, res) => {
    const { numero, titulo, profesor, fechaInicio, fechaFinal, calendario, inscriptos } = req.body;

    try {
        const comisionEncontrada = await Comision.findOne({ numero: numero });

        if (comisionEncontrada) {
            return res.status(304).send({ msg: `La comision ${numero} ya existe` })
        } else {
            const comision = new Comision({
                numero,
                titulo,
                profesor,
                fechaInicio,
                fechaFinal,
                calendario,
                inscriptos
            });

            const comisionGuardada = await comision.save();

            return res.send(comisionGuardada);
        }
    } catch {
        res.send(error)
    }
}