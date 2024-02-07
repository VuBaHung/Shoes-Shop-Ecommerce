const mongoose = require("mongoose");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
