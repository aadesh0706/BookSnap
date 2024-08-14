const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://booksnap-mu.vercel.app/', // Your frontend URL
}));
const cors = require('cors');
// app.use(cors());

// Routes
const authRoutes = require("./routes/auth");

// Middlewares
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", authRoutes);

// PORT
const port = 3000;

// Starting a server
app.listen(port, () => {
  console.log(`App is running at ${port} http://localhost:3000`);
});
