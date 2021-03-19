//This model allows the user to input their issue into the chat
module.exports = function(sequelize, DataTypes) {
  const issue = sequelize.define("issue", {
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return issue;
};