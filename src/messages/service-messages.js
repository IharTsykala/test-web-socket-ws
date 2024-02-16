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
	      {
		      $lookup: {
			      from: "users",
			      localField: "authorId",
			      foreignField: "_id",
			      as: "user"
		      }
	      },
	      {
		      $project: {
			      _id: 1,
			      text: 1,
			      idDialog: 1,
			      authorId: 1,
			      createdAt: 1,
			      user: { $arrayElemAt: ["$user", 0] }
		      }
	      }
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
