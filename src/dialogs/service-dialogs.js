const mongoose = require("mongoose");

//models
const Dialog = require("./model-dialogs");

const ObjectId = mongoose.Types.ObjectId;

class ServiceDialog {
  getAllDialogs = async function () {
    try {
      return await Dialog.find({});
    } catch (e) {
      console.log(e);
    }
  };
	
	getAllDialogsByUserId = async function (userId) {
		try {
			return await Dialog.aggregate([
				{
					$match: {
						members: {
							$all: [ObjectId(userId)],
						},
					},
				},
				{
					$addFields: {
						user: {
							$arrayElemAt: ["$members", 0]
						}
					},
				},
				{
					$lookup: {
						from: "users",
						localField: "user",
						foreignField: "_id",
						as: "user",
					},
				},
				{
					$lookup: {
						from: "messages",
						let: { dialogId: "$_id" },
						pipeline: [
							{
								$match: {
									$expr: { $eq: ["$idDialog", "$$dialogId"] }
								}
							},
							{
								$sort: { createdAt: -1 }
							},
							{
								$limit: 1
							}
						],
						as: "lastMessage"
					}
				},
				{
					$project: {
						_id: 1,
						members: 1,
						createdAt: 1,
						__v: 1,
						user: { $arrayElemAt: ["$user", 0] },
						lastMessage: { $arrayElemAt: ["$lastMessage", 0] }
					}
				}
			]);
		} catch (e) {
			console.log(e);
		}
	};

  addDialog = async function (body) {
    try {
      const dialog = new Dialog(body);
      return await dialog.save();
    } catch (e) {
      console.log(e);
    }
  };

  updateDialogById = async function (id, body) {
    try {
      return await User.findByIdAndUpdate(id, body);
    } catch (e) {
      console.log(e);
    }
  };

  deleteDialogById = async function (id) {
    try {
      return await Dialog.deleteOne({ _id: id });
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = ServiceDialog;
