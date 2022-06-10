const express = require("express");

const app = express();

const { mysqlAPIsRouter } = require("./APIs/mySqlApis");
const { mongoAPIsRouter } = require("./APIs/mongoApis");

const PROTOCOL = "http";
const HOST = "localhost";
const PORT = "8888";

// This is an api registerd using express() object
app.get("/test", (req, resp) => {
  resp.end("Hey, I'm a entry file Test API");
});

// These are the module level APIs(middlewares), created using Router()
// Router cab be obtained from express, ie, const {Router} = require("express")
app.use(mysqlAPIsRouter); //contains MySql APIs
app.use(mongoAPIsRouter); //contains Mongo APIs

// Starting the server
app.listen(PORT, () =>
  console.log(`Node server started on ${PROTOCOL}://${HOST}:${PORT}`)
);
