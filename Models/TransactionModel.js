const mongoose = require("mongoose");
const User = require("./UserModel");

const TransactionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "type is required"],
  },
  amount: {
    type: Number,
    required: [true, "amount is required"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "user id is required"],
    ref: User,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction
