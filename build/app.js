"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Products_1 = require("./views/Products");
var Navbar_1 = __importDefault(require("./views/Navbar"));
var Footer_1 = __importDefault(require("./views/Footer"));
var Homepage_1 = __importDefault(require("./views/Homepage"));
var react_router_dom_1 = require("react-router-dom");
// import AboutUs from "./views/AboutUs";
// import SingleProduct from "./views/SingleProduct";
// import Cart from "./views/Cart";
// import Checkout from "./views/Checkout";
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Homepage_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/products", element: react_1.default.createElement(Products_1.Products, null) })),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = App;
