const BankDetails = require("../models/BankDetails");

const show = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const bankDetails = await BankDetails.findById(id);
    res.send(bankDetails);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
};

const create =async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = { show };

// MODEL/DB -> CONTROLLER ->  ROUTER -> APP