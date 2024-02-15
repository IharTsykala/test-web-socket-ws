//services
const ServiceDialog = require("./service-dialogs");
const service = new ServiceDialog();

class DialogController {
  getAllDialog = async (req, res) => {
    try {
      const result = await service.getAllDialogs();
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  getAllDialogsByIdUser = async (req, res) => {
    try {
      const result = await service.getAllDialogsByIdUser(req.params.id);
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  addDialog = async (req, res) => {
    try {
      const result = await service.addDialog(req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  updateDialogById = async (req, res) => {
    try {
      const result = await service.updateDialogById(req.params.id, req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  deleteDialogById = async (req, res) => {
    try {
      const result = await service.deleteDialogById(req.params.id);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
}

module.exports = DialogController;
