const mongoose = require("mongoose");
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = "TravelBooking"; // Specify your desired database name

const encodedPassword = encodeURIComponent(password);

// Construct the connection string with the encoded password and the database name
let url = `mongodb+srv://${username}:${encodedPassword}@travelbooking.a6bbddp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true })
  .then(() => {
    console.log("[connect_db.js] INFO : Connected to the database successfully!");
  })
  .catch((error) => {
    console.error(`[connect_db.js] ERROR: ${error.message}`);
  });
