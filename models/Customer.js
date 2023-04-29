class Customer{
    constructor(data){
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
}
    const customer = new Customer({
    
    });


module.export = Customer;