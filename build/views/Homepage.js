"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// import Footer from "./Footer";
// import Header from "./Header";
var Banner_1 = __importDefault(require("./Banner"));
var Homepage = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Banner_1.default, null)));
};
exports.default = Homepage;
