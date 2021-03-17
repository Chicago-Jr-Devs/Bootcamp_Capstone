require("dotenv").config();
const express = require("express");
const session = require("express-session")
const morgan = require("morgan")
const helmet = require('helmet')
// Requiring passport as we've configured it
const passport = require("./config/passport");
const routes = require("./routes");
const environment = process.env.NODE_ENV || 'development';

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 5000;
const SYNC_OPTIONS = {
  force: process.env.NODE_ENV === "test",
};

const db = require("./models");
// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('tiny'));

if (environment === 'production') {
  app.use(express.static('/client'));
}
// Requiring our routes
app.use(routes);
// Syncing our database and logging a message to the user upon success
db.sequelize.sync(SYNC_OPTIONS).then(() => {
  app.listen(PORT, () => {
    console.log(
      `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    );
  });
});
