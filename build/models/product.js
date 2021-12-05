"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
exports.Model = require("sequelize").Model;
module.exports = function (sequelize, DataTypes) {
    var Product = /** @class */ (function (_super) {
        __extends(Product, _super);
        function Product() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Product.associate = function (models) {
            // define association here
            this.hasMany(models.Order_item, { foreignKey: "productId" });
        };
        return Product;
    }(exports.Model));
    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        size: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        quantity: DataTypes.INTEGER,
        imageurl: DataTypes.TEXT,
    }, {
        sequelize: sequelize,
        tableName: "products",
        modelName: "Product",
    });
    return Product;
};
