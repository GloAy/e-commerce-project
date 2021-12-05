"use strict";
export const { Model } = require("sequelize");

// These are all the attributes in the User model
interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  size: string;
  price: number;
  quantity: number;
  imageurl: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductAttributes>
  implements ProductAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      id!: number;
      name!: string;
      description: string; 
      size: string; 
      price!: number;
      quantity: number; 
      imageurl: string; 
    
    static associate(models: any) {
      // define association here
      this.hasMany(models.Order_item, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      size: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
      imageurl: DataTypes.TEXT,
    },
    {
      sequelize,
      tableName: "products",
      modelName: "Product",
    }
  );
  return Product;
};
