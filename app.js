const express = require("express");
const mongoose = require("mongoose");
const WebSocket = require("ws");

// Routers
const routerUsers = require("./users/router-users");
const routerDialogs = require("./dialogs/router-dialogs");
const routerMessages = require("./messages/router-messages");

// Configs
const mongoConfig = require("./configs/mongo.config");
const corsConfig = require("./configs/cors.config");

//socket
const socket = require("./socket");

require("dotenv").config();

const cors = require("cors");

mongoose.connect(process.env.BD, mongoConfig);

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(corsConfig);
app.use(cors());
app.use("/users", routerUsers);
app.use("/dialogs", routerDialogs);
app.use("/messages", routerMessages);

const server = app.listen(port, () => {
	console.log(`server on port ${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => socket(ws, wss));
