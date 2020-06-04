const express = require("express");
const router = express();
const articleController = require("../app/controllers/articleControllers");
const usersController = require("../app/controllers/usersController");
const { authenticateUser } = require("../app/middlewares/authentication");

router.get("/articles", articleController.list);
router.post("/articles", authenticateUser, articleController.create);
router.put("/articles/:id", authenticateUser, articleController.update);

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/account", usersController.account);
router.delete("/logout", usersController.logout);

module.exports = router;
