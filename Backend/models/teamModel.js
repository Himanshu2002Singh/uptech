const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TeamMember = sequelize.define('TeamMember', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
  tableName: 'team_members',
});

sequelize.sync({ alter: false })
  .then(() => console.log('✅ TeamMembers table synced'))
  .catch((err) => console.error('❌ Error syncing TeamMembers table:', err));

module.exports = TeamMember;
