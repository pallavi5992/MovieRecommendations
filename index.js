const express = require("express");
const axios = require("axios");
const moment = require("moment");
const app = express();
const port = process.env.PORT;
const apiUrl = process.env.API_URL;
require("dotenv").config();
app.use(express.json());

app.post("/recommendations", async (req, res) => {
  try {
    const { genre, time } = req.body;

    if (!genre || !time) {
      return res
        .status(400)
        .json({ error: "Both genre and time are required" });
    }

    const moviesData = await axios.get(apiUrl);
    const recommendations = getRecommendations(genre, time, moviesData.data);

    if (recommendations.length === 0) {
      return res.json({ message: "No movie recommendations" });
    }

    return res.json(recommendations);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

function getRecommendations(genre, time, moviesData) {
  const currentTime = moment(time, "HH:mm");
  const validMovies = [];

  moviesData.forEach((movie) => {
    if (movie.genres.includes(genre)) {
      movie.showings.forEach((showing) => {
        const movieTime = moment(showing, "HH:mm:ssZZ")
          .utcOffset("+11:00")
          .format("HH:mm");
        if (
          moment(movieTime, "HH:mm").isAfter(currentTime.add(30, "minutes"))
        ) {
          validMovies.push({
            name: movie.name,
            showingTime: moment(showing, "HH:mm:ssZZ")
              .utcOffset("+11:00")
              .format("h:mmA"),
          });
        }
      });
    }
  });

  return validMovies.sort((a, b) => b.rating - a.rating);
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
