const mongoose = require('mongoose');

const VectorSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  embedding: {
    type: [Number],
    required: true,
  },
  trash: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// module.exports = Vector = mongoose.model('vector', VectorSchema);

export default mongoose.model('Vector', VectorSchema);
// export default mongoose.models.Vector || mongoose.model('Vector', VectorSchema);
