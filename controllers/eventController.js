const { Event } = require('../models');

// Crear un evento
exports.createEvent = async (req, res) => {
    try {
        const { name, date } = req.body;
        const newEvent = await Event.create({ name, date });
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los eventos
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un evento por ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un evento
exports.updateEvent = async (req, res) => {
    try {
        const { name, date } = req.body;
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }
        await event.update({ name, date });
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un evento
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }
        await event.destroy();
        res.json({ message: 'Evento eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
