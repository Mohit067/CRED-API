import { Filter } from "bad-words";
import { creatTweet as creatTweetRepository,
        getTweets as getTweetRepository,
        getTweetById as getTweetByIdRepository,
        deleteTweet as deleteTweetRepository,
        updateTweet as updateTweetRepository
    } from "../repositories/tweetRepo.js";

export const createTweet = async ({ body, image }) => {
    // try to find blocked words in the tweet body and if any exists don't
    // create the tweet and return the error message

    const filter = new Filter();

    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message: 'Tweet contain block words',
            status: 400
        };
    }

    const tweet = await creatTweetRepository({ body, image});

    return tweet;
}

export const getTweets = async () => {
    const tweets = await getTweetRepository();

    return tweets;
}

export const getTweetById = async (id) => {
    const tweet = await getTweetByIdRepository(id);

    if(!tweet){
        throw {
            message: 'tweet not found',
            status: 404
        };
    }
    return tweet;
}

export const deleteTweet = async (id) => {
    const response = await deleteTweetRepository(id);
    if(!response){
        throw {
            message: 'tweet not found',
            status: 404
        }
    }

    return response;
}

export const updateTweet = async (id, body) => {
    const response = await updateTweetRepository(id, body);
    
    return response;
}