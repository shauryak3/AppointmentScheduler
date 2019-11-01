'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timing = sequelize.define('Timing', {
    timingId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    day: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    open: DataTypes.INTEGER,
    practiceId: DataTypes.INTEGER
  }, {});
  Timing.associate = function(models) {
    // associations can be defined here
    Timing.belongsTo(models.User)
  };
  return Timing;
};