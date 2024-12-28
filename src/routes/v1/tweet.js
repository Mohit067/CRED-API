import express from 'express';
import { createTweet, deleteTweet, getTweets, getTweetById, updateTweet } from '../../controllers/tweetController.js';
import { validate } from '../../validations/zodValidator.js';
import { tweetZodSchema } from '../../validations/tweetZodSchema.js';
import { s3Uploader } from '../../config/multerConfig.js';
import { getTweetByIdManualValidator } from '../../validations/tweetsManualValidator.js';


const router = express.Router(); // create a new router object

router.get('/', getTweets);

router.get('/:id', getTweetByIdManualValidator ,getTweetById);

router.delete('/:id', getTweetByIdManualValidator, deleteTweet);

router.put('/:id', getTweetByIdManualValidator, updateTweet);

// router.post('/', createTweetManualValidator,  createTweet); // for manual validation 

router.post('/', s3Uploader.single('tweetImage'), validate(tweetZodSchema),  createTweet);// for zod validation

export default router // export router object