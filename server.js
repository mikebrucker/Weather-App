const express = require("express");
const weather = require("./routes/api/weather");
const path = require("path");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/weather", weather);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
