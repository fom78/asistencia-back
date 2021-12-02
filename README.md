# Como ejecutarlo

- Clonar el repo
- abrir consola en tu PC
- Ejecutar: git clone "Pegar lo clonado"
- cd asistencia-back
- npm install
- Y por ultimo npm start

# Paso a paso para crearlo desde cero

## Servidor

- crear una carpeta llamado servidor para este caso
- ejecutar desde consola dentro de la carpeta servidor: npm init -y
  Como resultado ya crea el package.json:
  {
  "name": "servidor",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
  }

## instalamos las dependencias:

- $ npm install express
  Documentacion: https://www.npmjs.com/package/express
  Con express crearemos el servidor.

- $ npm install dotenv
  Documentacion: https://www.npmjs.com/package/dotenv
  Nos sirve para las variables de entorno, asi por ejemplo los datos de nuestra base de datos solo las manejamos en privado.

- Como resultado ya se creo node_modules
- A la misma altura de node_modules creamos la carpeta src que ayuda a tener mas orden

## Creamos el servidor basico

- creamos un archivo app.js dentro de src
- Dentro pegamos el siguiente codigo:
  const express = require('express')
  const app = express()

app.get('/', function (req, res) {
res.send('Hola en explorador')
})

const server=app.listen(3000, () => {
console.log('Servidor web escuchando por el puerto 3000...');
});

- Corremos node ./src/app.js
- Verificamos todo funciona, tenemos el servidor corriendo en el puerto 3000.

## Usar Babel para trabajar con js moderno

- Para poder usar import, exports y demas funcionalidades modernas vamos a instalar en modo desarrollo las siguientes dependencias:

npm install -D @babel/cli @babel/core @babel/preset-env @babel/node

- Ahora creamos el archivo .babelrc
- Dentro pegamos el siguiente codigo:
  {
  "presets": [
  ["@babel/env", {
  "targets": {
  "node": "current"
  }
  }]
  ]
  }

## Instalar Nodemon

- Para monitorear los cambios en el código fuente que se esta desarrollando y automáticamente reiniciar el servidor.

npm install --save-dev nodemon

- Ahora para ejecutar el servidor con el cli de babel y nodemon, agregamos en el package.json los siguientes scripts:

  "scripts": {
  "build": "babel src/app.js -d dist",
  "serve": "babel-node src/app.js",
  "start": "nodemon --exec npm run serve"
  },

- Listo ahora corremos el comando npm start y todo funciona

## Las variables de entorno

- creamos el archivo .env
  y dentro declaramos la siguiente variable:
  PORT=4000

- Para trabajar con estas variables de manaera simple y ordenada crearemos el archivo config.js dentro de src

- Dentro colocamos el siguiente codigo
  import { config } from 'dotenv'
  config()

export default {
PORT: process.env.PORT || 4000
}

- Con esto ya tenemos un acceso mas simple a las variables de entorno, con solo importar el archivo config.js donde se lo necesite.

- Ejecutamos npm start y el servidor esta corriendo en el puerto 4000.

## Git

- ejecutamos git init

- creamos el .gitignore
- Dentro lo siguiente<br>

#Node<br>
node_modules
<br>
#environment variables<br>
.env

- git add .
- git commit -m "inicial"

- Luego desde Github creamos un nuevo repositorio
  y copiamos y pegamos en la consola los comandos que estan bajo
  …or push an existing repository from the command line
  Normalmente son 3.

- En este punto ya tenemos nuestro repositorio en GitHub
