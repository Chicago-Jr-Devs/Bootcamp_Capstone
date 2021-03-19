// const path = require("path");
// const router = require("express").Router();
// const db = require("../models");

// router.post("/soapbox", (req, res) => {
//   console.log("issues", req.body)
//   db.issue.create({
//     category: req.body.category,
//     subject: req.body.subject,
//     description: req.body.description,
//     address: req.body.address
//   }).then(function(dbissues) {
//     res.json(dbissues);
//   });
// })

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build"));
// });

// module.exports = router;