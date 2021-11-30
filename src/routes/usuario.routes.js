import { Router } from 'express'
import { createUsuario, mostrarUsuarios } from '../controllers/usuarios.controller'

const rutasUsuario = Router()

rutasUsuario.get('/', mostrarUsuarios  )

rutasUsuario.post('/', createUsuario  )

export default rutasUsuario
