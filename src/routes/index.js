const express = require('express');
const router = express.Router();

const cookiesRouter = require('./cookies/cookies.routes');
const sessionRouter = require('./session/session.routes');


router.get("/health", async(_req, res)=>{
    res.status(200).json({
        success: true,
        health:'up',
        environment: process.env.environment || "not found"
    })
})
router.use('/cookies', cookiesRouter);
router.use('/session', sessionRouter);

module.exports = router;