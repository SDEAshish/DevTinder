const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    // "mongodb+srv://vishwakarmaashish581_db_user:2qXR1fUKAxZYbx60@cluster0.ugps69h.mongodb.net/DevTinder",
    "mongodb://localhost:27017/Hello",
  );
};
module.exports = connectDB;
