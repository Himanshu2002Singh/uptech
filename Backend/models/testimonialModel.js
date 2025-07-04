const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Testimonial = sequelize.define('Testimonial', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  quote: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'testimonials',
});

sequelize.sync({ alter: false })
  .then(() => console.log('✅ Testimonials table synced'))
  .catch((err) => console.error('❌ Error syncing Testimonials table:', err));

module.exports = Testimonial;
