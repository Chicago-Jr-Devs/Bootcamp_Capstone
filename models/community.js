//This model allows the user to input their issue into the chat
module.exports = function(sequelize, DataTypes) {
  const Community = sequelize.define("Community", {
    issue_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issue_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issue_category: {
      type: DataTypes.INT,
      allowNull: false,
    },
    issue_id: {
      type: DataTypes.INT,
      allowNull: false,
    },
  });

  return Community;
};