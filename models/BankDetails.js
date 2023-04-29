const db = require("../config/db");

class BankDetails {
  constructor(data) {
    (this.bank_id = data.bank_id), (this.customer_id = data.customer_id);
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.street_number = data.street_number;
    this.street_name = data.street_name;
    this.city = data.city;
    this.post_code = data.post_code;
    this.country = data.country;
    this.credit_card_no = data.credit_card_no;
    this.credit_card_type = data.credit_card_type;
    this.iban = data.iban;
  }
  static async findById(id) {
    const data = await db.query(
      "SELECT * bank_details WHERE customer_id = $1",
      [id]
    );
    return new BankDetails(data.rows[0]);
  }

  // static async createBankDetails(data) {
  //   console.log('line 27 - model:', data)
  //  const newBankDetails = await db.query('INSERT INTO customer ( first_name, last_name, street_number, street_name, city, post_code, country, email, phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
  //     [
  //       data.first_name,
  //       data.last_name,
  //       data.street_number,
  //       data.street_name,
  //       data.city,
  //       data.post_code,
  //       data.country,
  //       data.credit_card_no,
  //       data.credit_card_type,
  //       data.iban,
  //     ],
      
  //   );
  //   console.log('line 41 - model:', newBankDetails)
  //   return new Customer(newBankDetails.rows[0]);
  //  }
}





module.exports = BankDetails;

// MODEL/DB -> CONTROLLER ->  ROUTER -> APP