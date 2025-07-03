const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mail = sequelize.define('Mail', {
  recipient: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'sent', 'failed'),
    defaultValue: 'pending'
  },
  error: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: true,
  tableName: 'mails',
  indexes: [
    {
      fields: ['status']
    },
    {
      fields: ['recipient']
    }
  ]
});

sequelize.sync({ alter: true })
  .then(() => console.log('✅ male tables synced successfully'))
  .catch(err => console.error('❌ Error syncing tables:', err));


module.exports = Mail;