"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true 
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        is: /^[0-9a-f]{64}$/i
      },
      token: DataTypes.STRING,
      status: { type: DataTypes.STRING, defaultValue: "A", max: 1 }
    },
    { timestamps: true }
  );
  User.associate = function(models) {
  };
  return User;
};
