const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;
mongoose
  .connect("mongodb://localhost:27017/bank", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

// app.get("/",(req,res) => {
//     res.send("hi bruh")
// })
app.use(express.json());
app.use(cors());
const userRoute = require("./routes/userData");
app.use(userRoute);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`PORT is running at ${PORT}`));
