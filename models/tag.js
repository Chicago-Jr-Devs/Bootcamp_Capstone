//This model allows the user to add a tag to a post.
module.exports = function(sequelize, DataTypes) {
    const entityTag = sequelize.define("entity_tag", {
      issue_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      issue_tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return entityTag;
  };