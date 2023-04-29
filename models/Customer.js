const db = require("../config/db");

class Customer {
  constructor(data) {
    this.customer_id = data.customer_id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.street_number = data.street_number;
    this.street_name = data.street_name;
    this.city = data.city;
    this.post_code = data.post_code;
    this.country = data.country;
    this.email = data.email;
    this.phone = data.phone;
  }

  // GET
  static async findById(id) {
    console.log("line 18:", id);
    const data = await db.query(
      "SELECT * FROM customer WHERE customer_id = $1",
      [id]
    );
    return new Customer(data.rows[0]);
  }

  // CREATE
  static async createCustomer(data) {
    console.log("line 27 - model:", data);
    const newCustomer = await db.query(
      "INSERT INTO customer ( first_name, last_name, street_number, street_name, city, post_code, country, email, phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        data.first_name,
        data.last_name,
        data.street_number,
        data.street_name,
        data.city,
        data.post_code,
        data.country,
        data.email,
        data.phone,
      ]
    );
    console.log("line 41 - model:", newCustomer);
    return new Customer(newCustomer.rows[0]);
  }

  static async updateCustomer(data, id) {
    console.log("line 47 - models:", id);
    console.log("line 50 - model:", data)

    // UPDATE - PUT
    const updateCustomer = await db.query(
      "UPDATE customer SET first_name =$1, last_name =$2, street_number =$3, street_name =$4, city=$5, post_code =$6, country =$7, email =$8, phone =$9 WHERE customer_id = $10 RETURNING *",
      [
        data.first_name,
        data.last_name,
        data.street_number,
        data.street_name,
        data.city,
        data.post_code,
        data.country,
        data.email,
        data.phone,
        id
    ],
    );
    //console.log("line 68 - model:", updateCustomer);
    return new Customer(updateCustomer.rows[0]);
  }
}

module.exports = Customer;

// MODEL/DB -> CONTROLLER ->  ROUTER -> APP
