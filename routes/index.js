const path = require("path");
const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");

// const apiRoutes = require("./apiRoutes/users");

// router.use("/", apiRoutes);

router.post("/register", (req, res) => {
  db.user.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    zipcode: req.body.zipcode
  }).then(function(dbUser) {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbUser);
  });
})

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build"));
});
module.exports = router;