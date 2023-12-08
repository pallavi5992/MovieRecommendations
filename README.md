
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
