import { createTweet as createTweetService,
        getTweets as getTweetService,
        getTweetById as getTweetByIdService,
        deleteTweet as deleteTweetService,
        updateTweet as updateTweetService
    } from "../services/tweetService.js"
import { errorResponse } from "../utils/responses.js";
import { tweetZodSchema } from "../validations/tweetZodSchema.js";

export const createTweet = async (req, res) => {
    console.log(req.file);
    try {
        const response = await createTweetService({
            boyd: req.body.body,
            image: req.file?.location
        });

        return res.status(201).json({
            success: true,
            data: response,
            message: 'Tweet create successfully'
        })

    } catch (error) {
        return errorResponse(error);
    }
}

export const getTweets = async () => {
    try {
        const response = await getTweetService();

        return res.status(200).json({
            success: true,
            data: response,
            message: 'tweet fetch successfully'
        }); 
    } catch (error) {
        return errorResponse(error);
    }
}

export const getTweetById = async (req, res) => {
    try {
        const response = await getTweetByIdService();

        return res.status(200).json({
            success: true,
            data: response,
            message: 'tweet fetch successfully'
        }); 
    } catch (error) {
        return errorResponse(error);
    }
}

export const deleteTweet = async (req, res) => {
    try {
        const response = await deleteTweetService(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully deleted tweet',
            data: response
        })
    } catch (error) {
        return errorResponse(error);
    }
}

export const updateTweet = async (req, res) => {
    try {
        const response = await updateTweetService(req.params.id, req.body.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully update tweet',
            data: response
        })
    } catch (error) {
        return errorResponse(error);
    }
}