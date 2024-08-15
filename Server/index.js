const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

// Use CORS middleware before defining routes
const corsOptions = {
  origin: "https://book-snap.vercel.app", 
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
// Middleware setup
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Route setup
app.get("/", (req, res) => {
  res.send("Hello world aadesh!!");
});
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// Define port and start server
const port =  3000;
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
