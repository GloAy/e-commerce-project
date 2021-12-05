"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var router = require("express").Router();
var _a = require("../../models"), Product = _a.Product, User = _a.User, Order_item = _a.Order_item, Order_detail = _a.Order_detail;
//const stripe = require("stripe")(process.env.STRIPE_KEY);
//get all the products
router.get("/products", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Product.findAll()];
            case 1:
                products = _a.sent();
                res.json(products);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ message: "this is the error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//get single product
router.get("/products/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Product.findByPk(req.params.id)];
            case 1:
                product = _a.sent();
                res.json(product);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ Error: "this is the error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//post products
router.post("/products", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, description, size, price, quantity, imageurl, products, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, description = _a.description, size = _a.size, price = _a.price, quantity = _a.quantity, imageurl = _a.imageurl;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Product.create({
                        name: name,
                        description: description,
                        size: size,
                        price: price,
                        quantity: quantity,
                        imageurl: imageurl,
                    })];
            case 2:
                products = _b.sent();
                res.status(200).json(products);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                res.status(500).json({ message: "product not posting" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("/orderitems", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, quantity, productId, orderDetailId, orderItems, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, quantity = _a.quantity, productId = _a.productId, orderDetailId = _a.orderDetailId;
                return [4 /*yield*/, Order_item.create({
                        quantity: quantity,
                        productId: productId,
                        orderDetailId: orderDetailId,
                    })];
            case 1:
                orderItems = _b.sent();
                res.json(orderItems);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                res.status(500).json({ message: "not getting order items" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//post route for order - add to the cart
router.post("/orderdetails", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, total, userId, paymentId, orderdetails, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, total = _a.total, userId = _a.userId, paymentId = _a.paymentId;
                return [4 /*yield*/, Order_detail.create({
                        total: total,
                        userId: userId,
                        paymentId: paymentId,
                    })];
            case 1:
                orderdetails = _b.sent();
                res.json(orderdetails);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                res.status(500).json({ message: "did not post order details" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// 
//get all the order details
router.get("/orderdetails/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, orderItems, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Order_item.findAll({
                        where: { orderDetailId: id },
                        include: [Product],
                    })];
            case 1:
                orderItems = _a.sent();
                console.log("this is", orderItems);
                res.json(orderItems);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(500).json({ message: "there is an error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// router.post("/payment", async (req, res) => {
//   let { amount, id } = req.body;
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description: "CandlebyMelissa4U",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log("Payment", payment);
//     res.json({
//       message: "Payment successful",
//       success: true,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     res.json({
//       message: "Payment failed",
//       success: false,
//     });
//   }
// });
module.exports = router;
