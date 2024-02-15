//services
const ServiceMessage = require("./service-messages");
const service = new ServiceMessage();

class MessageController {
	getMessages = async (req, res) => {
		try {
			const result = await service.getMessages(req.params.id);
			res.send(result);
		} catch (e) {
			res.status(400).send({ error: e.message });
		}
	};
	
	getMessagesByIdDialog = async (req, res) => {
    try {
      const result = await service.getMessagesByIdDialog(req.params.id);
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
	
	postMessage = async (req, res) => {
		try {
			const result = await service.addMessage(req.body);
			
			res.send(result);
		} catch (e) {
			res.status(400).send({ error: e.message });
		}
	};

  addMessage = async (body) => {
    try {
      return await service.addMessage(body);
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = MessageController;
