//services
const ServiceUser = require("./service-users");
const service = new ServiceUser();

class UserController {
  getAllUser = async (req, res) => {
    try {
      const result = await service.getAllUsers();
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const result = await service.getUserById(req.params.id);
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  addUser = async (req, res) => {
    try {
      const result = await service.addUser(req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  updateUserById = async (req, res) => {
    try {
      const result = await service.updateUserById(req.params.id, req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  deleteUserById = async (req, res) => {
    try {
      const result = await service.deleteUserById(req.params.id);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
}

module.exports = UserController;
