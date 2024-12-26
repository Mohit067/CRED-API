import express from 'express';
import v1Router from './v1/v1Routes.js';
import v2Router from './v2/v2Routes.js';

const router = express.Router(); // router object

router.use('/v1', v1Router); // if the remening url start with v1, use the v1 router 

router.use('/v2', v2Router); // if the remening url start with v2, use the v2 router 

export default router; // Export the router object