const express = require("express")

//controllers
const DialogController = require("./controller-dialogs.js")
const dialog_controller = new DialogController()

const routerDialogs = new express.Router()

routerDialogs.get("/", dialog_controller.getAllDialog)
routerDialogs.get("/:id", dialog_controller.getAllDialogsByIdUser)
routerDialogs.post("/", dialog_controller.addDialog)
routerDialogs.put("/:id", dialog_controller.updateDialogById)
routerDialogs.delete("/:id", dialog_controller.deleteDialogById)

module.exports = routerDialogs
