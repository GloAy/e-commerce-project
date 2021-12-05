"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/styles");
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var useStyles = (0, styles_1.makeStyles)({
    root: {
        maxWidth: 345,
        marginTop: "100px",
    },
    media: {
        height: 300,
    },
    productContent: {
        display: "flex",
        justifyContent: "flex-end",
    },
    productLink: {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.87)",
    },
    spContainer: {
        display: "flex",
        justifyContent: "space-around",
    },
});
var Product = function (_a) {
    var product = _a.product;
    var classes = useStyles();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.Card, { className: classes.root },
            react_1.default.createElement(core_1.CardActionArea, null,
                react_1.default.createElement(core_1.CardMedia, { className: classes.media, image: product.imageurl, title: product.name }, " "),
                react_1.default.createElement(core_1.CardContent, null,
                    react_1.default.createElement(core_1.Typography, { gutterBottom: true, variant: "h5", component: "h2" }, product.name),
                    react_1.default.createElement(core_1.Typography, { variant: "body2", color: "textSecondary", component: "p" }, product.description))),
            react_1.default.createElement(core_1.CardActions, { className: classes.spContainer },
                react_1.default.createElement(core_1.Typography, { variant: "body2", color: "textSecondary", component: "p" }, product.size),
                react_1.default.createElement(core_1.Typography, { variant: "body2", color: "textSecondary", component: "p" },
                    "$",
                    product.price)),
            react_1.default.createElement(react_router_dom_1.Link, { className: classes.productLink, to: "/products/".concat(product.id) },
                react_1.default.createElement(core_1.CardActions, null,
                    react_1.default.createElement(core_1.Button, { size: "small", color: "primary" }, "View"))))));
};
exports.default = Product;
