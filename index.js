const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Importa rutas
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
