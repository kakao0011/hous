import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  phone: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Phone || mongoose.model('Phone', phoneSchema);