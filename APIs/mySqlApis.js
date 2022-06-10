const { Router } = require("express");

// creating a router object(ie, 'mysqlAPIsRouter') to add APIs
const mysqlAPIsRouter = Router();

// we can register APIs like, routerObj.get()  or  routerObj.post()

mysqlAPIsRouter.get("/testmysql", (request, response) => {
  response.end("Hi, I am a MySql module Test API");
});

module.exports = { mysqlAPIsRouter };
