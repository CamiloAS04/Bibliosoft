const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./Book');
const Platform = require('./Platform');

const Loan = sequelize.define('Loan', {
  loan_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  loan_days: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  return_date: {
    type: DataTypes.DATE,
  },
  late_fee: {
    type: DataTypes.INTEGER,
  },
  paid_fee: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: false,
});

Loan.belongsTo(User);
Loan.belongsTo(Book);
Loan.belongsTo(Platform);

module.exports = Loan;