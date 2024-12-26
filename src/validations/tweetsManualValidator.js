import mongoose from "mongoose";

export const createTweetManualValidator = (req, res, next) => {
    if(!req.body.tweet) {
        return res.status(400).json({
            error: 'tweet is required'
        })
    }

    if(req.body.tweet.length > 280) {
        return res.status(400).json({
            error: 'tweet must be 280 characters or less'
        })
    }

    next();
}

export const getTweetByIdManualValidator = async (req, res, next) => {
    const isValid = mongoose.Types.ObjectId.isValid(req.param.id);

    if(!isValid){
        return res.status().json({
            error: 'invalid tweet id'
        });
    }
    next();
}