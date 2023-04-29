const { Router } = require("express");

const bankDetailsController = require("../controllers/bankDetails");

const router = Router();

router
.route("/:id")
.get(bankDetailsController.show);

module.exports = router;


// MODEL/DB -> CONTROLLER ->  ROUTER -> APP