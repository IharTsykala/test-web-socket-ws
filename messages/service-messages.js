const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

//models
const Message = require("./model-messages");

class ServiceMessage {
	getMessages = async function () {
		try {
			 return await Message.find({});;
		} catch (e) {
			console.log(e);
		}
	};
	
	getMessagesByIdDialog = async function (id) {
    try {
      return await Message.aggregate([
        {
          $match: {
            idDialog: new ObjectId(id),
          },
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  addMessage = async function (body) {
    const message = new Message(body);
		
    return await message.save();
  };
}

module.exports = ServiceMessage;
