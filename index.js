const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser=require("cookie-parser")
const authRoute=require("./Routes/AuthRoute")
const adminRoute=require('./Routes/AdminRoutes')
const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected Successfully"))
  .catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
const corsOptions = {
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true
  };
  app.use(cors(corsOptions));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credential: true,
  })
);
app.use(cookieParser())
app.use(express.json())
app.use('/', authRoute)
app.use('/admin', adminRoute)
