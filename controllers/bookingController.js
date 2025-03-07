const { Booking, Event } = require('../models');

exports.getBookings = async (req, res) => {
  const bookings = await Booking.findAll({ include: Event });
  res.json(bookings);
};

exports.createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.status(201).json(booking);
};
