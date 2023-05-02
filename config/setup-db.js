const fs = require('fs'); // to read and write with files
require("dotenv").config(); // Load environment config

// Load in the SQL statements
const sqlQuery = fs.readFileSync('../server/database/bank_detail-setup.sql').toString();

// Get a link to the database
const db = require("./db");

// Run the query
db.query(sqlQuery)
    .then(data => console.log("Set-up complete."))
    .catch(error => console.log(error));