module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  Booking.associate = (models) => {
    Booking.belongsTo(models.Event, { foreignKey: 'eventId', as: 'event' });
  };

  return Booking;
};
