const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require('./routes/auth/auth-routes')  

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://shashikantsahu487:SahuShoppingCart@cluster0.ujdp1.mongodb.net/"
  )
  .then(() => console.log("Connected to mongodb successfully"))
  .catch((error) => console.log(error));

  app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization","Cache-Control", "Expires", 'Pragma'],
    credentials: true //credentials is use for login and register. 
  }));

  app.use(express.json());
  app.use(cookieParser());
  app.use('/api/auth', authRouter);

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

