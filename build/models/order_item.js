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
    var Order_item = /** @class */ (function (_super) {
        __extends(Order_item, _super);
        function Order_item() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Order_item.associate = function (models) {
            // define association here
            this.belongsTo(models.Product, { foreignKey: "productId" });
            this.belongsTo(models.Order_detail, { foreignKey: "orderDetailId" });
        };
        return Order_item;
    }(exports.Model));
    Order_item.init({
        quantity: DataTypes.INTEGER,
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Product",
                key: "id",
            },
        },
        orderDetailId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Order_detail",
                key: "id",
            },
        },
    }, {
        sequelize: sequelize,
        tableName: "order_items",
        modelName: "Order_item",
    });
    return Order_item;
};
