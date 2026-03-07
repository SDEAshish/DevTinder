const express = require("express");
const connectDB = require("./config/db");
const app = express();

// const { adminAuth, userAuth } = require("./middlewares/auth");

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("server start at port no.3000");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected...");
  });

// app.use("/admin", adminAuth);
// // app.use("/", userAuth);

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Data send");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("All Data Delete");
// });

// app.get("/user", userAuth, (req, res) => {
//   res.send("All user data fethched");
// });
