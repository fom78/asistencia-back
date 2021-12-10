import { Usuario } from '../models/Usuario'

// Ingresar un nuevo usuario
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
            return res.status(304).json({ msg: `El usuario con DNI ${dni}ya existe` })
        }

        // Creamos el Nuevo Usuario para agregarlo
        const usuario = new Usuario({
            nombre,
            dni,
            clave,
            roles
        })
        // Guardamos el Usuario
        const usuarioGuardado = await usuario.save()
        return res.status(200).json(usuarioGuardado)
    } catch (error) {
        res.send(error)
    }
}

// Mostrar todos los usuarios
export const mostrarUsuarios = async (req, res) => {

    try {
        const usuarios = await Usuario.find()
        return res.status(200).json(usuarios)
    } catch (error) {
        res.send(error)
    }
}

// Mostrar un usuario según DNI
export const mostrarUsuario = async (req, res) => {
    try {
        const dni = req.params.dni
        const usuarioEncontrado = await Usuario.findOne({ dni: dni })
        if (usuarioEncontrado) {
            return res.status(200).json(usuarioEncontrado)
        }
    } catch (error) {
        res.send(error)
    }
}

// Actualizar usuario según DNI
export const updateUsuario = async (req, res) => {
    try {
        const dniUpdate = req.params.dni
        const {
            nombre,
            dni,
            clave,
            roles,
        } = req.body

        const usuarioActualizado = await Usuario.findOneAndUpdate({ dni: dniUpdate }, {
            $set: {
                nombre: nombre,
                dni: dni,
                clave: clave,
                roles: roles
            }
        }, {
            // upsert: true
            new: true
        })
        return usuarioActualizado ? res.status(204).json(usuarioActualizado) : res.status(500).json({ msg: 'El usuario no se actualizó' })
    } catch (error) {
        res.send(error)
    }
}

// Eliminar usuario según DNI
export const deleteUsuario = async (req, res) => {
    try {
        const dni = req.params.dni
        const usuarioDeleted = await Usuario.findOneAndRemove({ dni: dni })
        return usuarioDeleted ? res.status(200).json(usuarioDeleted) : res.status(500).json({ msg: 'El usuario no se eliminó' })
    } catch (error) {
        res.send(error)
    }
}