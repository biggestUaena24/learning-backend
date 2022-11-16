const express = require("express");
const port = 3000;

const app = express();
// To start a server
app.listen(port);

//parsing all the object in body to json object
app.use(express.json());

//Making a get request and send the response to the user as a json object
app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👚",
    size: "large",
  });
});

//Creating a new user with the id and logo
app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo here" });
  }

  res.send({
    message: `tshirt ${id} has a logo of ${logo}`,
  });
});
