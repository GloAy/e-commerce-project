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
module.exports = {
    up: function (queryInterface, Sequelize) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, queryInterface.bulkInsert("products", [
                        {
                            id: 1,
                            name: "Palo Santo",
                            description: "Palo Santo Candle Vegan Candles are hand-crafted with love in New York from start to finish using best quality ingredients – 100% soy wax, phthalate-free fragrance and essential oils, and clean burning crackling wooden wick.",
                            size: "9oz",
                            price: 300000,
                            quantity: 4,
                            imageurl: "https://candlebymelissa.s3.us-east-2.amazonaws.com/palosanto.jpg",
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            id: 2,
                            name: "Unconditional Love",
                            description: "Unconditional Love Candle Vegan Candles are hand-crafted with love in New York from start to finish using best quality ingredients – 100% soy wax, phthalate-free fragrance and essential oils, and clean burning crackling wooden wick.",
                            size: "7.5oz",
                            price: 190000,
                            quantity: 5,
                            imageurl: "https://candlebymelissa.s3.us-east-2.amazonaws.com/unconditionalove.jpg",
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            id: 3,
                            name: "Hemp & Cannabis Candle",
                            description: "Hemp and Cannabis Candle Vegan Candles are hand-crafted with love in New York from start to finish using best quality ingredients – 100% soy wax, phthalate-free fragrance and essential oils, and clean burning crackling wooden wick.",
                            size: "16oz",
                            price: 200000,
                            quantity: 24,
                            imageurl: "https://candlebymelissa.s3.us-east-2.amazonaws.com/cannabis%3Ahemp.jpg",
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            id: 4,
                            name: "Let That Shit Go Candle",
                            description: "Let That Shit Go Candle Vegan Candles are hand-crafted with love in New York from start to finish using best quality ingredients – 100% soy wax, phthalate-free fragrance and essential oils, and clean burning crackling wooden wick.",
                            size: "9oz",
                            price: 350000,
                            quantity: 15,
                            imageurl: "https://candlebymelissa.s3.us-east-2.amazonaws.com/letthatshitgo.jpg",
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            id: 5,
                            name: "Saffron & Tobacco Candle",
                            description: "Saffron & Tobacco Candle Vegan Candles are hand-crafted with love in New York from start to finish using best quality ingredients – 100% soy wax, phthalate-free fragrance and essential oils, and clean burning crackling wooden wick.",
                            size: "9oz",
                            price: 350000,
                            quantity: 15,
                            imageurl: "https://candlebymelissa.s3.us-east-2.amazonaws.com/saffron-tobacco.jpg",
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            id: 6,
                            name: "Hinoki Candle",
                            description: "Hinoki Candle Vegan Candles are hand-crafted with love in New York from start to finish using best quality ingredients – 100% soy wax, phthalate-free fragrance and essential oils, and clean burning crackling wooden wick.",
                            size: "9oz",
                            price: 350000,
                            quantity: 15,
                            imageurl: "https://candlebymelissa.s3.us-east-2.amazonaws.com/hinoki.jpg",
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            id: 7,
                            name: "Hinoki Candle",
                            description: "Hinoki Candle Vegan Candles are hand-crafted with love in New York from start to finish using best quality ingredients – 100% soy wax, phthalate-free fragrance and essential oils, and clean burning crackling wooden wick.",
                            size: "9oz",
                            price: 35.9999,
                            quantity: 15,
                            imageurl: "https://candlebymelissa.s3.us-east-2.amazonaws.com/hinoki.jpg",
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (queryInterface, Sequelize) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); },
};
