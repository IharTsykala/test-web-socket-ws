const WebSocket = require("ws");

//controllers
const MessageController = require("../messages/controller-messages");
const message_controller = new MessageController();
function socket (ws, wss) {
	console.log("connection open")
	let idDialog
	
	ws.on("message", async (message) => {
		try {
			const data = JSON.parse(message);
			if (data.type === "dialog") {
				idDialog = data.payload.idDialog
			}
			
			if (data.type === "text") {
				const newMessage = await message_controller.addMessage({...data.payload, idDialog});
				wss.clients.forEach((client) => {
					if (client.readyState === WebSocket.OPEN) {
						client.send(JSON.stringify(newMessage));
					}
				});
			}
		} catch (error) {
			console.error("Error processing message:", error);
		}
	});
	
	ws.on("close", (error) => {
		console.log("connection close");
		console.error("WebSocket error:", error);
	});
}

module.exports = socket
