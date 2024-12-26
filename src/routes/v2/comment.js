import express from 'express';

const router = express.Router(); // create a new router object

router.get('/comments', (req, res) => {
    return res.json({
        message: "tweetd comment v2"
    });
});


export default router // export router object