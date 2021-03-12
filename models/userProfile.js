//This model allows for the user to input the info for their profile.
module.exports = function(sequelize, DataTypes) {
  const Profile = sequelize.define("Profile", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ward: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precinct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    community: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Profile;
};