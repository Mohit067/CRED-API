import express from 'express';
import tweetRouter from './tweet.js';
import commentRouter from './comment.js';
const router = express.Router();

router.use('./tweets', tweetRouter); // if remaining url are start with tweets , use the tweet router
router.use('./comments', commentRouter); // if remaining url are start with comment , use the comment router
export default router;