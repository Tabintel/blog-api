const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  body: String,
  tags: [String],
  status: String,
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
module.exports = mongoose.model('Post', PostSchema);