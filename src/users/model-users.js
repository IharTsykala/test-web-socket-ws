const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	  name: {
	    type: String,
	    unique: true,
	    required: true,
	    trim: true
	  },
		avatar: {
			type: String
		}
	},
	{ timestamps: true }
)

const User = mongoose.model("Users", userSchema)

module.exports = User
