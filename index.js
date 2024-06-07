const express = require("express");
const app = express();
port = 8001;

const router = require("./routers/user.route");
const db = require("./config/database");
const passport = require("passport");
const localAuth = require("./middlewares/passport");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: "1234", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
localAuth(passport);

app.use(router);

app.listen(port, (err) => {
  db();
  if (!err) console.log("server start on http://localhost:" + port);
});
