const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors");
const connectDB = require('./server/database/connection');


const app = express();

dotenv.config({path:'.env'})
const PORT = process.env.PORT || 8080

// mongodb connection
connectDB();

app.use(express.json());
app.use(cors());

app.use("/",require("./server/routes/router"));

// Start the server
app.listen(PORT, () => {
    console.log(`API server is running on port http://localhost:${PORT}`);
  });