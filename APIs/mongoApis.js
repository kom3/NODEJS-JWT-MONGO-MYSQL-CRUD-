const { Router } = require("express");

// creating a router object(ie, 'mongoAPIsRouter') to add APIs
const mongoAPIsRouter = Router();

// we can register APIs like, routerObj.get()  or  routerObj.post()

mongoAPIsRouter.get("/testmongo", (req, res) => {
  res.end("hey, I am a mongo module Test API");
});

module.exports = { mongoAPIsRouter };

