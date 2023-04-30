const { Router } = require("express");

const customerController = require("../controllers/customer");

const router = Router();

router
.route("/:id")
.get(customerController.show)
.patch(customerController.updateCustomer)
.delete(customerController.deleteCustomer)

router
.route("/")
.post(customerController.createCustomer)

module.exports = router;


// MODEL/DB -> CONTROLLER ->  ROUTER -> APP