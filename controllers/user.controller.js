const passport = require("passport");
const userModel = require("../models/user.model");

const home = async (req, res) => {
  res.render("index");
};

const login = async (req, res) => {
  res.render("login");
};
const register = async (req, res) => {
  res.render("register");
};

const addUser = async (req, res) => {
  const { username, password, email, phone } = req.body;

  const user = await userModel.create({ username, password, email, phone });
  res.redirect("/login");
};

const Logout = (req, res) => {
  console.log("logout");
  req.logOut = (err) => {
    if (err) {
      return err;
    } else {
      res.redirect("/login");
    }
  };
};

module.exports = { home, login, register, addUser };
