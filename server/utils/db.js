const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:27017/expressmongo", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// DB schema
const ContentItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

ContentItem = mongoose.model("ContentItem", ContentItemSchema);

module.exports = ContentItem;
