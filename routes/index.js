const path = require("path");
const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");

// const apiRoutes = require("./apiRoutes/users");

// router.use("/", apiRoutes);

router.post("/register", (req, res) => {
  console.log("register", req.body)
  db.user.create({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
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