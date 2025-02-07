const express = require("express");
const app = express();
const connectDB = require("./config/db");
const authRouter = require("./routes/auth");

//db connect
connectDB();

app.use(express.json());

//routes
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Api running");
});

app.listen(5001, () => {
  console.log("Server is running on 5001");
});
