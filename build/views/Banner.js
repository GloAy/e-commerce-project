"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/styles");
var useStyles = (0, styles_1.makeStyles)({
    shoppingcartimg: {
        minHeight: "auto",
        width: "100%",
        top: 0,
        left: 0,
        sizes: "(max-width:480px)45vw,45vw",
    },
});
var Banner = function () {
    var classes = useStyles();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("img", { src: "https://candlebymelissa.s3.us-east-2.amazonaws.com/image+3.jpeg", className: classes.shoppingcartimg, alt: "Christmas Eggnog Candle" })));
};
exports.default = Banner;
