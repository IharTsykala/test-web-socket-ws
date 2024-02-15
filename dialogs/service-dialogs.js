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

  getAllDialogsByIdUser = async function (userId) {
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
            members: {
              $filter: {
                input: "$members",
                as: "membersFilter",
                cond: {
                  $ne: ["$$membersFilter", ObjectId(userId)],
                },
              },
            },
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "members",
            foreignField: "_id",
            as: "members",
          },
        },
        {
          $unwind: "$members",
        },
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
