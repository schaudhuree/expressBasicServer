const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const chalk = require("chalk");

const PORT = process.env.PORT || 8080;

// base url
app.get("/", (req, res) => {
  res.status(200)
  res.send(`<h2>server is running.. </h2>`);
});

// http methods

// get
app.get('/api', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Hello, this is a get request</h1>")
})

// post
app.post('/api', (req, res) => {
  const  {name}  = req.body;

  res.send(`Welcome ${name}. this is form post request`);
})

// put   ------> generally used for updating the whole data
app.put('/api', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Hello, this is a put request</h1>")
})

//patch  -----> patch is for updating some attributes
app.patch('/api', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Hello, this is a patch request</h1>")
})

// delete
app.delete('/api', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Hello, this is a delete request</h1>")
})

// server listning
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      chalk.bgGreenBright.bold(
        "Server is Successfully Running, and App is listening on port " + PORT + ''
      )
    );
  else
    console.log(
      chalk.bgCyanBright.bold("Error occurred, server can't start", error)
    );
});
