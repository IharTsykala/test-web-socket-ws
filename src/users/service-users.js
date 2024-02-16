//models
const User = require("./model-users");

class ServiceUser {
  getAllUsers = async function () {
    try {
      return await User.find({});
    } catch (e) {
      console.log(e);
    }
  };

  getUserById = async function (id) {
    try {
      return await User.findById(id);
    } catch (e) {
      console.log(e);
    }
  };

  addUser = async function (body) {
    const user = new User(body);
		
    await user.save();
	  
    return { user };
  };

  updateUserById = async function (id, body) {
    try {
      return await User.findByIdAndUpdate(id, body);
    } catch (e) {
      console.log(e);
    }
  };

  deleteUserById = async function (id) {
    try {
      return await User.deleteOne({ _id: id });
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = ServiceUser;
