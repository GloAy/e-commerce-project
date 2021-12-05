"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("@material-ui/core");
var useStyles = (0, styles_1.makeStyles)({
    root: {
        display: "flex",
        padding: "1em",
    },
    toolBar: {
        display: "flex",
        padding: 0,
        flex: 3,
        margin: 0,
    },
    grow: {
        flex: 1,
    },
    shopmenu: {
        marginRight: "30px",
    },
    shopLink: {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.87)",
        textTransform: "uppercase",
    },
    aboutUsLink: {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.87)",
        textTransform: "uppercase",
    },
});
var Navbar = function () {
    var classes = useStyles();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.AppBar, { position: "relative", className: classes.root, color: "inherit" },
            react_1.default.createElement(core_1.Toolbar, { className: classes.toolBar },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                    react_1.default.createElement("img", { src: "https://candlebymelissa.s3.us-east-2.amazonaws.com/logo.jpg", height: "100px", alt: "CandleByMelissa4U Logo" })),
                react_1.default.createElement("div", { className: classes.grow }),
                react_1.default.createElement(react_router_dom_1.Link, { className: classes.shopLink, to: "/products" },
                    react_1.default.createElement(core_1.Typography, { className: classes.shopmenu }, "Shop")),
                react_1.default.createElement(react_router_dom_1.Link, { className: classes.aboutUsLink, to: "/aboutus" },
                    react_1.default.createElement(core_1.Typography, null, "About Us")),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/cart" },
                    react_1.default.createElement(core_1.IconButton, { "aria-label": "Order details", color: "inherit" },
                        react_1.default.createElement("img", { src: "https://candlebymelissa.s3.us-east-2.amazonaws.com/shoppingcart.png", height: "50px", alt: "Shopping Cart Icon" })))))));
};
exports.default = Navbar;
