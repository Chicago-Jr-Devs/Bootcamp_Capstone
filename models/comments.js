//This model allows the user to store their reply to a comment.
module.exports = function(sequelize, DataTypes) {
  const Comments = sequelize.define("entity_comment", {
    issue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //Keeping in case we need to use this later

  //   id_1: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //   },
  //   community_id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //   },
  });

  return Comments;
};