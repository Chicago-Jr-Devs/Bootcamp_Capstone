//This model allows the user to describe a tag.
module.exports = function(sequelize, DataTypes) {
    const tags = sequelize.define("tags", {
      issue_tag: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tag_description: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return tags;
  };