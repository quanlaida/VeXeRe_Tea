const express = require('express');
const fingerprintRouter = express.Router();

fingerprintRouter.get('/', (req, res) => {
    console.log(req.fingerprint);
    res.send(req.fingerprint);
})

module.exports = {
    fingerprintRouter,
};
