const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  students: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  rating: {
    type: DataTypes.DECIMAL(3, 1),
    defaultValue: 0.0,
  },
  image: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  syllabus: {
    type: DataTypes.JSON,
  },
  what_you_learn: {
    type: DataTypes.JSON,
  },
  prerequisites: {
    type: DataTypes.JSON,
  },
  certification: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
  tableName: 'courses',
});

// 🟢 Sync on load
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Course table synced'))
  .catch((err) => console.error('❌ Error syncing Course table:', err));

module.exports = Course;
