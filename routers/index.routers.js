const express = require('express');
const rootRouter = express.Router();
const { stationRouter } = require('./stations.routers');
const { userRouter } = require('./user.routers');
const { tripRouter } = require('./trip.routers');
const { fingerprintRouter } = require('./fingerprint.Routers');

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouter);
rootRouter.use("*", fingerprintRouter);
module.exports = { rootRouter };