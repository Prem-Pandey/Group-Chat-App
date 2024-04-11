const express = require("express");
const app = express();
const path = require("path");

const userRoutes = require("./routes/user");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static("public"));
app.use(userRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, `${req.url}`));
});


async function main() {
  try {
    console.log("Database Connection Successfull");
    app.listen(3000);
    console.log("connected to Port 3000");
  } catch (error) {
    console.log(error);
  }
}
main();
