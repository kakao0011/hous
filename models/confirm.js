import mongoose from "mongoose";

const confirmSchema = new mongoose.Schema({
  browser: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Confirm || mongoose.model('Confirm', confirmSchema);