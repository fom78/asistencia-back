import { Router } from "express";
import { createComision, mostrarComisiones } from '../controllers/comision.controller';

const rutasComision = Router();

rutasComision.get('/', mostrarComisiones);

rutasComision.post('/', createComision);

export default rutasComision;