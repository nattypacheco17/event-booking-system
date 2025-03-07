Sistema de Gestión de Reservas de Eventos

Descripción

Este proyecto es un sistema basado en microservicios que permite la gestión de eventos y reservas mediante una API REST. Se ha desarrollado utilizando Node.js, Express, y Sequelize para la manipulación de datos en una base de datos PostgreSQL.

Características

Creación, consulta y gestión de eventos.

Registro y consulta de reservas para eventos.

Arquitectura basada en microservicios siguiendo principios de arquitectura limpia.

Uso de Sequelize ORM para la manipulación de la base de datos.

Tecnologías Utilizadas

Node.js

Express.js

Sequelize

PostgreSQL

Dotenv

Nodemon (para desarrollo)

Instalación

1. Clonar el Repositorio

git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio

2. Instalar Dependencias

npm install

3. Configurar la Base de Datos

Crear un archivo .env en la raíz del proyecto y configurar las credenciales de la base de datos:

DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=nombre_de_tu_base
DB_HOST=127.0.0.1
DB_DIALECT=postgres
PORT=3000

4. Ejecutar Migraciones

npx sequelize-cli db:migrate

5. Iniciar el Servidor

npm start

O en modo desarrollo con nodemon:

npx nodemon index.js

El servidor se ejecutará en http://localhost:3000.

Endpoints de la API

Eventos

GET /events → Obtener todos los eventos

POST /events → Crear un evento

Reservas

GET /bookings → Obtener todas las reservas

POST /bookings → Crear una reserva

Ejemplo de petición para crear un evento:

curl -X POST http://localhost:3000/events -H "Content-Type: application/json" -d '{"name": "Concierto Rock", "date": "2024-12-01"}'

Ejemplo de petición para crear una reserva:

curl -X POST http://localhost:3000/bookings -H "Content-Type: application/json" -d '{"user": "Juan Pérez", "eventId": 1}'

Estructura del Proyecto

project-root/
│── config/             # Configuración de Sequelize (base de datos)
│── controllers/        # Lógica de manejo de peticiones HTTP
│── models/            # Modelos de datos de Sequelize
│── routes/            # Definición de rutas API REST
│── services/          # Lógica de negocio
│── migrations/        # Migraciones de base de datos
│── seeders/           # Datos de prueba (opcional)
│── .env               # Variables de entorno (credenciales DB)
│── index.js           # Punto de entrada principal
│── README.md          # Documentación del proyecto

Mejoras Futuras

Validaciones de entrada con express-validator.

Autenticación de usuarios con JWT.

Implementación de pruebas unitarias.

Dockerización del servicio.

Autor

Nataly Pacheco - Desarrollo del proyecto para el examen final de Aplicaciones distribuidas.

Licencia

Este proyecto se encuentra bajo la licencia MIT.