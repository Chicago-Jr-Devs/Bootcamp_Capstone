const path = require("path");
const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");

// const apiRoutes = require("./api");
// API Routes
// router.use("/api", apiRoutes);
// If no API routes are hit, send the React app

// POST route for saving a new todo
app.post("/users", function(req, res) {
  console.log("server hi", req.body);
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property (req.body)
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    zipCode: req.body.zipCode
  }).then(function(dbUser) {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbUser);
  });
});

//Here, we are using the passport.authenticate middleware with our local strategy.
//If the user inputs valid log-in credentials, the application will redirect them to the main page.
//If not, an informative error message will be displayed on the screen.
router.post("/login", passport.authenticate("local"), (req,res) => {
  res.json({
    email: req.user.email,
    username: req.user.username,
    firstName: req.user.first_name,
    lastName: req.user.last_name
  });
});


//Here, we have the route for the user's sign-up process. The password associated with an account is automatically hashed and securely stored due to our configurations.
//If a user account has been successfully created, they will be able to proceed to the log-in page.
//In the instance that an account has not been successfully created, the user will be sent an informative error message.
router.post("/signup", (req, res) => {
  db.User.create(req.body)
  .then(() => {
    res.redirect(307,"/api/login");
  })
  .catch((err) =>{
    res.status(401).json(err);
  });
});


//This route allows user data to be retrieved and used on the client side.
router.get("/user_data", (req, res) => {
 //In the instance that a user is not logged in, an empty object will be returned.
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