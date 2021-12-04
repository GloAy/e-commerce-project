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
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const { sequelize } = require("../models/index");
// const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://localhost:8080",
//   })
// );
//middleware =>
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "views")));
app.use("/api", require("./api"));
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Server running on port ${PORT}`);
        yield sequelize.authenticate();
        console.log("Database Connected!");
    }
    catch (error) {
        console.error(error);
    }
})),
    (module.exports = app);
