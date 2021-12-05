"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
exports.Model = require("sequelize").Model;
module.exports = (sequelize, DataTypes) => {
    class User extends exports.Model {
        static associate(models) {
            // define association here
        }
    }
    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
    }, {
        sequelize,
        tableName: "users",
        modelName: "User",
    });
    return User;
};
