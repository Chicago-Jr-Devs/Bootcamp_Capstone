//This model allows the user to input their issue into the chat
module.exports = function(sequelize, DataTypes) {
  const issues = sequelize.define("issues", {
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return issues;
};