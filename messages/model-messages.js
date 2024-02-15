const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String
    },
    idDialog: {
      type: mongoose.Schema.Types.ObjectId
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId
    }
  },
  { timeStamps: true }
)

const Message = mongoose.model("Messages", messageSchema)
module.exports = Message
