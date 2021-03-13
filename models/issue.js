//This model allows the user to input their issue into the chat
module.exports = function(sequelize, DataTypes) {
  const issue = sequelize.define("issue", {
    issue_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issue_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Temporarily removing this, but will leave here in case we need it later.
    // issue_category: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    issue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return issue;
};