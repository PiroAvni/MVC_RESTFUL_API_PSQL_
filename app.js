const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const customerRoutes = require("./routes/customer");
const bankDetailsRoutes = require("./routes/bankDetails");

const db = require("./config/db");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));


app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Bank API!!",
    info: "Node.js, Express, and Postgres API",
    alert: " All Data in the database are NOT REAL!",
  });
});

app.post('/', (req, res) => {
  res.status(405).send('Not Allowed')
})

app.get("/customers", async (req, res) => {
  const data = await db.query("SELECT * FROM customer ORDER BY customer_id");
  //console.log(data);
  res.send(data.rows);
});

app.get("/bank_details", async (req, res) => {
  const data = await db.query("SELECT * FROM bank_details ORDER BY customer_id");
  //console.log(data)
  res.send(data.rows);
});


app.use("/customers", customerRoutes);
app.use("/bank_details", bankDetailsRoutes);

module.exports = app;

// MODEL/DB -> CONTROLLER ->  ROUTER -> APP
