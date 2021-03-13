const path = require("path");
const router = require("express").Router();
const db = require("../models")
// const apiRoutes = require("./api");
// API Routes
// router.use("/api", apiRoutes);
// If no API routes are hit, send the React app

router.post("/login", passport.authenticate("local"), (req,res) => {
  res.json({
    email: req.user.email,
    firstName: req.user.first_name,
    lastName: req.user.last_name
  });
});

router.post("/signup", (req, res) => {
  db.User.create(req.body)
  .then(() => {
    res.redirect(307,"/api/login");
  })
  .catch((err) =>{
    res.status(401).json(err);
  });
});

router.get("/user_data", (req, res) => {
  if(!req.user) {
    return res.json({});
  }
  const { password, ...user } = req.user;
  res.json(user);
});

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;