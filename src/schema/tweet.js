import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true, // removing extra space from begining and end of the string
        maxlength: 280
    },
    image: {
        type: String,
        default: null
    }
},{ timestamps: true});

const Tweet = mongoose.model("tweet", tweetSchema); // Tweet collenction

export default Tweet;