# Sistema de Reservas de Eventos

## Descripción
API REST basada en microservicios para gestionar reservas de eventos, desarrollada como parte del examen final. Implementa una arquitectura limpia con PostgreSQL y Sequelize.

## Tecnologías
- Node.js / Express
- PostgreSQL
- Sequelize ORM
- Joi (validación)

## Instalación rápida

```bash
# Clonar el repositorio
git clone [https://github.com/nattypacheco17/event-booking-system.git]

# Instalar dependencias
npm install

# Configurar base de datos
cp .env.example .env
# Editar .env con credenciales de la BD

# Crear BD y ejecutar migraciones
npx sequelize-cli db:create
npx sequelize-cli db:migrate

# Iniciar servidor
npm start
```

## Estructura del proyecto
```
/src
 ├── config/          # Configuración BD
 ├── models/          # Modelos Sequelize
 ├── controllers/     # Controladores
 ├── services/        # Servicios
 ├── routes/          # Rutas API
 ├── middlewares/     # Validaciones
 ├── app.js           # Express
 └── server.js        # Punto de entrada
```

## Diagrama Entidad-Relación
- **Evento** (1) --- tiene muchas ---> (n) **Reserva**

## Endpoints API

### Eventos
- `GET /api/eventos` - Listar todos los eventos
- `GET /api/eventos/:id` - Obtener evento por ID
- `POST /api/eventos` - Crear evento

### Reservas
- `GET /api/reservas` - Listar todas las reservas
- `GET /api/reservas/evento/:eventoId` - Listar reservas por evento
- `POST /api/reservas` - Crear reserva

## Capturas de pantalla

# Microservicio de eventos (/api/eventos)
## Crear un evento
![crear un evento](/images/Crear%20un%20evento.png)
## Obtener la lista de eventos
![alt text](/images/Obtener%20la%20lista%20de%20eventos.png)
## Obtener un evento por ID
![alt text](/images/Obtener%20un%20evento%20por%20ID.png)
# Microservicio de reservas (/api/reservas)
## Crear una reserva asociada a un evento
![alt text](/images/Crear%20una%20reserva%20asociada%20a%20un%20evento.png)
## Obtener la lista de reservas
![alt text](/images/Obtener%20la%20lista%20de%20reservas.png)
## Obtener las reservas de un evento específico
![alt text](/images/Obtener%20las%20reservas%20de%20un%20evento%20específico.png)


## Características implementadas
- ✅ Relación entre dos entidades (Eventos y Reservas)
- ✅ Validación de datos con Joi
- ✅ Verificación de capacidad disponible
- ✅ Arquitectura limpia y modular
- ✅ Documentación completa

## Modelo de datos

### Eventos
```
id: INTEGER (PK)
nombre: STRING
descripcion: STRING
fecha: DATE
capacidad: INTEGER
```

### Reservas
```
id: INTEGER (PK)
email: STRING
numero_tickets: INTEGER
eventoId: INTEGER (FK)
```

## Autor
[Nataly Pacheco]

---
Desarrollado como parte del examen final del curso de Programacion Distribuida