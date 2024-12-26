import express from 'express';

const router = express.Router(); // create a new router object

router.get('/', (req, res) => {
    return res.json({
        message: "Welcome to tweet route v2"
    });
});

router.get('/:id', (req, res) => {
    return res.json({
        message: "Welcome to tweet route v2",
        id: req.params.id
    });
});

export default router // export router object