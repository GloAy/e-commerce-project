const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const { sequelize } = require("../models/index");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

//middleware 
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "views")));
app.use("/api", require("./api"));




app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
      await sequelize.authenticate()
      console.log("Database Connected!");
    } catch (err) {
      console.error('Unable to connect to the database:', err)
    }
}),
(module.exports = app)
