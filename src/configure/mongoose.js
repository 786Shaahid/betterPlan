import mongoose from "mongoose";
const url = `mongodb+srv://shahidraza02qwert:${process.env.DB_USER_PASSWORD}@cluster0.mqrfg6o.mongodb.net/usersDb`;
mongoose.connect(url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected to mongodb successfully");
});
// module.exports=db;

export default db;
