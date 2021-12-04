const router = require("express").Router();
const { Product } = require("../../models");
import {Application, Request, Response } from "express"


//get routes
router.get("/products", async (req: Request, res: Response) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "this is the error" });
    }
  });


module.exports = router;
