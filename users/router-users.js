const express = require("express");

//controllers
const UserController = require("./controller-users.js");
const user_controller = new UserController();

const routerUsers = new express.Router();
routerUsers.get("/", user_controller.getAllUser);
routerUsers.get("/:id", user_controller.getUserById);
routerUsers.post("/", user_controller.addUser);
routerUsers.put("/:id", user_controller.updateUserById);
routerUsers.delete("/:id", user_controller.deleteUserById);
routerUsers.post("/login", user_controller.loginUser);

module.exports = routerUsers;
