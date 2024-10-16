const express=require('express');
const cors=require('cors');
const app=express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");

dotenv.config();


app.use(cors());
app.use(express.json());







mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect  to MongoDB");
  })
  .catch((err) => console.log("Error to connect to MongoDB"));

const PORT=process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("listening on port");
});
