const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String
    },
    idDialog: {
      type: mongoose.Schema.Types.ObjectId
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId
    }
  },
	{ timestamps: true }
)

const Message = mongoose.model("Messages", messageSchema)
module.exports = Message
