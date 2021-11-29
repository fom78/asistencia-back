import config from './config'
const express = require('express')


const app = express()
 
app.get('/', function (req, res) {
  res.send('Hola en explorador')
})
 
const server=app.listen(config.PORT, () => {
  console.log(`Servidor web escuchando por el puerto ${config.PORT}...`);

});