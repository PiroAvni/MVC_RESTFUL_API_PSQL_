const Customer = require("../models/Customer");

// GET
const show = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const customer = await Customer.findById(id);
    console.log("line 7 - con:", customer)
    res.status(200).send(customer);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

// CREATE
const createCustomer = async (req, res) => {
  try {
    const 
    {
        first_name,
        last_name,
        street_number,
        street_name,
        city,
        post_code,
        country,
        email,
        phone
    } = req.body;
 console.log('line 27 - controller:',req.body)
    //validation request body
   
    if (req.bod) {
      res.status(204).send({ message: "Content can not be empty!" });
    }
   
    const newCustomer = await Customer.createCustomer(req.body)
    console.log('line 34:', newCustomer)
    res.status(201).send({
      message: "Customer Added successfully",
      body: {
        user: {newCustomer },
      },
    })
  } catch (error) {
    res.status(500).send({ error: error.message });
   }

};

   // UPDATE - PUT
const updateCustomer =async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const 
        {
            first_name,
            last_name,
            street_number,
            street_name,
            city,
            post_code,
            country,
            email,
            phone
        } = req.body;
        console.log( "line 65 - cont", id)
        console.log( "line 66 - cont", req.body)
        const updateCustomer = await Customer.updateCustomer(req.body, id)
        console.log('line 34:', updateCustomer)
        res.status(200).send({
          message: "Customer Updated successfully",
          body: {
            user: {updateCustomer },
          }
        });

    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}


module.exports = {  show, createCustomer, updateCustomer };

// MODEL/DB -> CONTROLLER ->  ROUTER -> APP
