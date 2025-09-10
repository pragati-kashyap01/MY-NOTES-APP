const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  isPinned: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
