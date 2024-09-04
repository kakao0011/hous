import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
  code: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Code || mongoose.model('Code', codeSchema);