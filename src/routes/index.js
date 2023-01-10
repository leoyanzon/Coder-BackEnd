const express = require('express');
const router = express.Router();

const cookiesRouter = require('./cookies/cookies.routes');


router.get("/health", async(_req, res)=>{
    res.status(200).json({
        success: true,
        health:'up',
        environment: process.env.environment || "not found"
    })
})
.use('/cookies', cookiesRouter);

module.exports = router;