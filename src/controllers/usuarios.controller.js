import { Usuario } from '../models/Usuario'

export const createUsuario = async (req, res) => {
    try {
        const {
            nombre,
            dni,
            clave,
            roles,
        } = req.body

        const usuarioEncontrado = await Usuario.findOne({ dni: dni })
        if (usuarioEncontrado) {
            return res.status(304).json({ msg: 'El DNI ya existe' })
        }

        // Creamos el Nuevo Usuario para agregarlo
        const usuario = new Usuario({
            nombre,
            dni,
            clave,
            roles
        })
        // Guardamos el Usuario
        const UsuarioGuardado = await usuario.save()
        return res.status(200).json(UsuarioGuardado)
    } catch (error) {
        console.error(error)
    }
}

export const mostrarUsuarios = async (req, res) => {
    
    try {
        const usuarios = await Usuario.find()
        return res.status(200).json(usuarios)
    } catch (error) {
        console.error(error)
    }
}