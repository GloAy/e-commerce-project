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
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const { Product, User, Order_item, Order_detail } = require("../../models");
//get all the products
router.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.findAll();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: "this is the error" });
    }
}));
//get single product
router.get("/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product.findByPk(req.params.id);
        res.json(product);
    }
    catch (err) {
        res.status(500).json({ Error: "this is the error" });
    }
}));
//post products
router.post("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, size, price, quantity, imageurl } = req.body;
    try {
        const products = yield Product.create({
            name,
            description,
            size,
            price,
            quantity,
            imageurl,
        });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "product not posting" });
    }
}));
router.post("/orderitems", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quantity, productId, orderDetailId } = req.body;
        const orderItems = yield Order_item.create({
            quantity,
            productId,
            orderDetailId,
        });
        res.json(orderItems);
    }
    catch (error) {
        res.status(500).json({ message: "not getting order items" });
    }
}));
//post route for order - add to the cart
router.post("/orderdetails", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { total, userId, paymentId } = req.body;
        const orderdetails = yield Order_detail.create({
            total,
            userId,
            paymentId,
        });
        res.json(orderdetails);
    }
    catch (error) {
        res.status(500).json({ message: "did not post order details" });
    }
}));
// 
//get all the order details
router.get("/orderdetails/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //gettig the id orderdetails => front end provides the id
        const id = req.params.id;
        //sending the request to the backend here
        // const orderDetails = await Order_detail.findByPk(id);
        //go to order item table and get all the data  where order detail id equals is
        const orderItems = yield Order_item.findAll({
            where: { orderDetailId: id },
            include: [Product],
        });
        console.log("this is", orderItems);
        res.json(orderItems);
    }
    catch (error) {
        res.status(500).json({ message: "there is an error" });
    }
}));
module.exports = router;
