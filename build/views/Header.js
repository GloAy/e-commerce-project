"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var useStyles = (0, styles_1.makeStyles)({
    headerText: {
        display: "flex",
        textAlign: "center",
        marginTop: "15%",
        marginBottom: "5%",
    },
});
var Header = function () {
    var classes = useStyles();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Typography, { variant: "h3", color: "inherit", className: classes.headerText }, "All I want for Chritmas is Christmas Eggnog Candle")));
};
exports.default = Header;
