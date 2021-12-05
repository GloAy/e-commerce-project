const router = require("express").Router();
const { Product,  User, Order_item, Order_detail } = require("../../models");
import {Application, Request, Response} from "express"
const stripe = require("stripe")(process.env.STRIPE_KEY);



//get all the products
router.get("/products", async (req: Request, res: Response) => {
  console.log("this is router")
    try {
      let products = await Product.findAll();
      console.log('this is product', Product)
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "this is the error" });
    }
  });


//get single product
router.get("/products/:id", async (req: Request, res: Response) => {
    try {
      const product = await Product.findByPk(req.params.id);
      res.json(product);
    } catch (err) {
      res.status(500).json({ Error: "this is the error" });
    }
  });



//post products
router.post("/products", async (req: Request, res: Response) => {
  const { name, description, size, price, quantity, imageurl } = req.body;

  try {
    const products = await Product.create({
      name,
      description,
      size,
      price,
      quantity,
      imageurl,
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "product not posting" });
  }
});


router.post("/orderitems", async (req: Request, res: Response) => {
  try {
    const { quantity, productId, orderDetailId } = req.body;
    const orderItems = await Order_item.create({
      quantity,
      productId,
      orderDetailId,
    });
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ message: "not getting order items" });
  }
});



//post route for order - add to the cart
router.post("/orderdetails", async (req: Request, res: Response) => {
  try {
    const { total, userId, paymentId } = req.body;
    const orderdetails = await Order_detail.create({
      total,
      userId,
      paymentId,
    });
    res.json(orderdetails);
  } catch (error) {
    res.status(500).json({ message: "did not post order details" });
  }
});


// 
//get all the order details
router.get("/orderdetails/:id", async (req:Request, res: Response) => {
  try {
    //gettig the id orderdetails => front end provides the id
    const id = req.params.id;
    //sending the request to the backend here
    // const orderDetails = await Order_detail.findByPk(id);
    //go to order item table and get all the data  where order detail id equals is
    const orderItems = await Order_item.findAll({
      where: { orderDetailId: id },
      include: [Product],
    });
    console.log("this is", orderItems);
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ message: "there is an error" });
  }
});




router.post("/payment", async (req: Request, res: Response) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "CandlebyMelissa4U",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});



module.exports = router;
