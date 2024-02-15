const express = require("express")

//controllers
const MessagesController = require("./controller-messages")
const messages_controller = new MessagesController()

const routerMessages = new express.Router()

routerMessages.get("/", messages_controller.getMessages)
routerMessages.get("/:id", messages_controller.getMessagesByIdDialog)
routerMessages.post("/", messages_controller.postMessage)

module.exports = routerMessages
