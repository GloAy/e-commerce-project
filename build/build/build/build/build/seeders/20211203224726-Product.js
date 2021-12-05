"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert("products", [
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
        ]);
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }),
};
