import config from './config'
import express from 'express'
import cors from 'cors'

import rutasUsuario from './routes/usuario.routes'
import rutasComision from './routes/comision.routes'

import mongoose from 'mongoose'

mongoose
  .connect(config.MONGO_URL)
  .then((db) => console.log(`DB esta conectada: ${config.MONGO_URL}`))
  .catch((err) => console.log(err))


const app = express()

app.use(express.json()); //permite el mapeo de la peticion json a object js

app.use(cors())


app.get('/', function (req, res) {
  res.send('Hola en explorador')
})


app.use('/usuario', rutasUsuario);

app.use('/comision', rutasComision)


const server = app.listen(config.PORT, () => {
  console.log(`Servidor web escuchando por el puerto ${config.PORT}...`);

});