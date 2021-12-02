"use strict";
export const  { Model } = require("sequelize");

// These are all the attributes in the User model
interface ProductAttributes {
  id: number;
  name: string;
  description?: string;
  price?: number;
  password: string;
  address?: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model <ProductAttributes> 
  implements ProductAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!: number;
     name!: string;
     description!: string;
     price!: number;
     password!: string;
     address!: string;
    static associate(models:any) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.NUMBER,
      description: DataTypes.STRING,
      size: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
      imageurl: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "products",
      modelName: "Product",
    }
  );
  return Product;
};
