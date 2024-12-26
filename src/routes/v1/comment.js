import express from 'express';

const router = express.Router(); // create a new router object

router.get('/comments', (req, res) => {
    return res.json({
        message: "tweetd comment"
    });
});


export default router // export router object