require("dotenv").config();
const express = require("express");

const passport = require("./config/passport");
const routes = require("./routes");

const PORT = process.env.PORT || 8080;
const SYNC_OPTIONS = {
  force: process.env.NODE_ENV === "test",
};

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    );
  });
});
