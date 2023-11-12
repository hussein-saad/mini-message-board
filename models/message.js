const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

messageSchema.virtual("createdAtFormatted").get(function () {
  return DateTime.fromJSDate(this.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
});

module.exports = mongoose.model("Message", messageSchema);
