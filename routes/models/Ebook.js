const mongoose = require('mongoose');

const EbookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  fileUrl: { type: String, required: true },
  coverImageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ebook', EbookSchema);
