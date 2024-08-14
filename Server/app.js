const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');

const app = express();

// app.use(cors({
//   origin: 'https://booksnap-mu.vercel.app/', // Your frontend URL
// }));
// const cors = require('cors');
// app.use(cors());
app.use(cors({
  origin: 'https://booksnap-mu.vercel.app', // Your frontend URL without trailing slash
}));
const corsOptions = {
  origin: 'https://booksnap-mu.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  optionsSuccessStatus: 204 // Some legacy browsers (e.g., IE11) choke on 204
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // enable pre-flight across-the-board

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
