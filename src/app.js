import config from './config'
import express from 'express'
import mongoose from 'mongoose'

mongoose
  .connect(config.MONGO_URL)
  .then((db) => console.log(`DB esta conectada: ${config.MONGO_URL}`))
  .catch((err) => console.log(err))


const app = express()
 
app.get('/', function (req, res) {
  res.send('Hola en explorador')
})
 
const server=app.listen(config.PORT, () => {
  console.log(`Servidor web escuchando por el puerto ${config.PORT}...`);

});