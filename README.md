
Step 1: Clone the Repository:
git clone https://github.com/pallavi5992/MovieRecommendations

Step 2: Open project on terminal
cd MovieRecommendations

Step 3: Install Dependencies
npm i

To run application 
npm start

To Make a Recommendation Request:
Use tools like Postman or curl to make a POST request to http://localhost:3000/recommendations.

Example JSON payload:

{
  "genre": "Comedy",
  "time": "12:00"
}

If the request is successful, the server will respond with an array of movie
recommendations in the specified format:
[
    {
        "name": "Zootopia",
        "showingTime": "7:00PM"
    },
    {
        "name": "Zootopia",
        "showingTime": "9:00PM"
    },
    {
        "name": "Shaun The Sheep",
        "showingTime": "7:00PM"
    }
]
If there are no suitable recommendations, the server will respond with a message:

{
  "message": "No movie recommendations"
}

Unit Test case:
To test unit test case kill the running server if its in running mode
command to run test cases in node:
npm test





To set up a test suite using Jest.js, first install Jest as a dev dependency in your project by running “npm install –save-dev jest”. Then, update the package.json file to include a test script: “scripts”: {“test”: “jest”}. Create a “__tests__” directory where all tests will reside. For each module you want to test, create a corresponding .test.js file inside this directory. In these files, write your tests using global functions provided by Jest such as describe(), it() or test(), and expect(). To run the tests, use the command “npm test”.

How do you handle asynchronous testing in Jest.js?

Jest.js handles asynchronous testing through several methods. The first is by using a callback function, where Jest waits for the callback to be called before finishing the test. Another method is through promises; if your code returns a promise, Jest will wait for that promise to resolve. If it rejects, the test automatically fails.
test('async test', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('async test', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

How do you manage errors in Jest.js?
test('throws on octopus', () => {
  expect(() => {
    eatOctopus();
  }).toThrow('octopus is not edible');
});
Can you differentiate between toBe and toEqual in Jest.js?
In Jest.js, toBe and toEqual are matchers used for comparison. The key difference lies in how they compare values.

toBe uses Object.is to test exact equality. If you check an object or an array with toBe, it will fail unless you’re comparing the exact same instance of that object or array. It’s ideal when testing primitive types like numbers, strings, and booleans where we care about strict equality.

toEqual, on the other hand, checks for deep equality. It recursively checks every field of an object or array. This means if two objects have the same structure and nested values, even if they aren’t the same instance, toEqual will pass. It’s useful when you want to check the value of an object, but don’t care whether it’s a new instance or not.


describe("GET /api/products/:id", () => {
  it("should return a product", async () => {
    const res = await request(app).get(
      "/api/products/6331abc9e9ececcc2d449e44"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Product 1");
  });
});

describe("POST /api/products", () => {
  it("should create a product", async () => {
    const res = await request(app).post("/api/products").send({
      name: "Product 2",
      price: 1009,
      description: "Description 2",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Product 2");
  });
});

describe("PUT /api/products/:id", () => {
  it("should update a product", async () => {
    const res = await request(app)
      .patch("/api/products/6331abc9e9ececcc2d449e44")
      .send({
        name: "Product 4",
        price: 104,
        description: "Description 4",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.price).toBe(104);
  });
});

describe("DELETE /api/products/:id", () => {
  it("should delete a product", async () => {
    const res = await request(app).delete(
      "/api/products/6331abc9e9ececcc2d449e44"
    );
    expect(res.statusCode).toBe(200);
  });
});

We use describe to describe the unit test. Even though it is not required, it will be useful to identify tests in test results.
In it, we write the actual test code. Tell what the test performs in the first argument, and then in the second argument, write a callback function that contains the test code.
In the callback function, the request is sent to the endpoint first, and the expected and actual responses are then compared. The test passes if both answers match, else, it fails. 
