const express = require('express');
const router = express.Router();

router.get('/', (_req, res)=>{
    res.cookie('name', 'hola', {maxAge: 5000}).send('Cookie set')
});

module.exports = router;