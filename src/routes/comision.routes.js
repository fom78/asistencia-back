import { Router } from "express";
import { createComision, mostrarComisiones, agregarInscripto } from '../controllers/comision.controller';

const rutasComision = Router();

rutasComision.get('/', mostrarComisiones);

rutasComision.post('/', createComision);

rutasComision.put('/agregarinscripto/:id', agregarInscripto);


export default rutasComision;