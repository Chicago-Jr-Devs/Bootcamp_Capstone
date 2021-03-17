const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define("user", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  user.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  user.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  user.associate = function(models) {
     //user.hasMany(models.index, {
      // onDelete: "cascade",
     //});
  };

  return user;
};
