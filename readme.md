# Nodejs + Express + OpenAPI 3 + Swagger

Este proyecto es una prueba de concepto de desarrollo de una API Rest empleando las tecnologías de Nodejs, Express, OpenAPI 3 y Swagger.

El objetivo es desarrollar el proyecto de la forma más eficiente posible, automatizando la generación de rutas, documentación y pruebas.

Para usar el proyecto, descargalo desde el repositorio y ejecuta ''npm install''.
Una vez instaladas las dependencias ejecuta el proyecto con npm start.
Una vez el proyecto esté desplegado, puedes acceder a la documentación y pruebas automáticas desde la URL http://localhost/api-documentation.

Para crear la base del proyecto se ha empleado el generador automático:
npx express-generator --no-view --git todo-app

Sobre dicha base se han añadido:
npm i express-openapi -s
npm i swagger-ui-express -s

Realizando las modificaciones oportunas en el archivo ./app.js, ./api/api-doc.js y ./api/paths/todos/index.js
