"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/styles");
var core_1 = require("@material-ui/core");
var useStyles = (0, styles_1.makeStyles)({
    footerBar: {
        marginTop: "100px",
    },
    footer: {
        display: "flex",
    },
});
var Footer = function () {
    var classes = useStyles();
    return (react_1.default.createElement(core_1.AppBar, { position: "static", color: "inherit", className: classes.footerBar },
        react_1.default.createElement(core_1.Toolbar, null,
            react_1.default.createElement(core_1.Typography, { variant: "body1", color: "inherit" },
                "\u00A9 2021 CandlebyMelissa4U",
                " "))));
};
exports.default = Footer;
