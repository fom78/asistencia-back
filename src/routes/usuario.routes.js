import { Router } from 'express'
import { createUsuario, mostrarUsuarios, mostrarUsuario, updateUsuario, deleteUsuario } from '../controllers/usuarios.controller'

const rutasUsuario = Router()

rutasUsuario.get('/', mostrarUsuarios)

rutasUsuario.post('/', createUsuario)

rutasUsuario.get('/:dni', mostrarUsuario)

rutasUsuario.put('/modificarusuario/:dni', updateUsuario)

rutasUsuario.delete('/eliminarusuario/:dni', deleteUsuario)

export default rutasUsuario
