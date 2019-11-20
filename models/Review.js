const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        reference: "users"
    },
    post: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model("review", ReviewSchema);
module.exports = Review;