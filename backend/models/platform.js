const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Platform = sequelize.define('Platform', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: false,
});

module.exports = Platform;