# MEAN Stack

Este proyecto es una aplicación MEAN Stack que permite a los usuarios gestionar una lista de tareas. Utiliza MongoDB como base de datos, Express.js como servidor, Angular como cliente y Node.js como entorno de ejecución.

## Configuración del Proyecto

### Requisitos Previos
Asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js: [Descargar Node.js](https://nodejs.org/)
- MongoDB: [Descargar MongoDB](https://www.mongodb.com/try/download/community)

### Pasos para Configurar el Proyecto

**Clonar el Repositorio:**
   ```bash
   git clone https://github.com/DavidCantunaMorales/TodoList.git
   ```
**Distribución de Carpetas:**
* ClientTodoList
* ServerTodoList

**Intalación de Dependencias:**  

Dentro de la carpeta ```ClientTodoList``` abrir una termina y ejecutar el siguiente comando:
   ```bash
   npm install
   ```
Esto descargara todas las dependencias necesarias para ejecutar el proyecto. 

## Ejecucion de los Servidores

**Servidor del Frontend**

Dentro de la carpeta ```ClientTodoList``` abrir una termina y ejecutar el siguiente comando:
   ```bash
   ng serve --o
   ```
Esto inicializara el servidor y se abrira una pestaña del navegador que tengas como principal mostrando el FrontEnd de la aplicacion.

**Servidor del BackEnd**

Dentro de la carpeta ```ServerTodoList``` abrir una termina y ejecutar el siguiente comando:
   ```bash
   npm run dev
   ```

Esto inicializara el servidor y por consola mostrar un mensaje diciendo el puerto en que corre el servidor y si la conexion a la base de mongo es correcta

## Indicaciones Adicionales

En MongoDB Compass vas poner una nueva conección y vas a colocar la siguiente cadena de conexión. 
   ```bash
   mongodb+srv://admin:1234@atlascluster.zddio2m.mongodb.net/meantareas
   ```

