//This model allows the user to like an issue.
module.exports = function(sequelize, DataTypes) {
    const likedEntity = sequelize.define("liked_entity", {
      issue_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      liked_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return likedEntity;
  };