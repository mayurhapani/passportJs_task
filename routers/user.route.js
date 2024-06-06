const { Router } = require("express");
const router = Router();

const { home, login, register, addUser } = require("../controllers/user.controller");
const passport = require("passport");
const { isAuth } = require("../middlewares/isAuth");

router.get("/", isAuth, home);
router.get("/login", login);
router.get("/register", register);

router.post("/addUser", addUser);
router.post(
  "/loginPage",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);
router.get("/logout", (req, res, next) => {
  console.log("logout");
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid");
      res.redirect("/login");
    });
  });
});

module.exports = router;
