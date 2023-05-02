const request = require("supertest");

const app = require("../app");

// group test
describe("api server", () => {
  let api;

  // beforeAll is jest hook you only need to do setup once.Runs a function before any of the tests in this file run.
  beforeAll(() => {
    api = app.listen(5000, () => {
      console.log("Test server listening on port 5000");
    });
  });

  //Runs a function after each one of the tests in this file completes.
  afterAll((done) => {
    console.log("Gracefully stopping the server");
    api.close(done);
  });

  test("it response to GET / with status 200", (done) => {
    request(api).get("/").expect(200, done);
  });

  test("responds to invalid method request with 405", (done) => {
    request(api).post("/").expect(405, done);
  });

  test("responds to DELETE /customer/:id with status 204", (done) => {
    request(api).delete("/customers/1").expect(204, done);
  });

  test("responds to unknown customer id with a 404", (done) => {
    request(api).get("/customers/44").expect(404, done);
    //     .expect({error: 'Not found'},done)
  });

  test("responds to post /customers with status 201", (done) => {
    const testData = {
      first_name: 'Peter',
      last_name: 'Jones',
      street_number: '17',
      street_name: 'Sundale Ave',
      city: 'London',
      post_code: 'CS1 8RT',
      country: 'UK',
      email: 'HELLO@TEST.COM',
      phone: '123456789',
    };
    request(api)
      .post("/customers")
      .send(testData)
      .set("Accept", "application/json")
      .expect(201)
      .expect({ testData }, done);
  });


});
