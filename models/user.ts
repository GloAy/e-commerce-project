"use strict";
export const { Model} = require("sequelize");


// These are all the attributes in the User model
interface UserAttributes {
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  address: string;
}


module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model <UserAttributes> 
  implements UserAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    firstName!: string;
    lastName!: string;
    email:string;
    password:string;
    address:string;

    static associate(models: any) {
      // define association here
      this.hasOne(models.Order_detail, 
        { foreignKey: "userId" });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};

console.log("user")