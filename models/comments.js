//This model allows the user to store their reply to a comment.
module.exports = function(sequelize, DataTypes) {
  const Comments = sequelize.define("Comments", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    community_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Comments;
};