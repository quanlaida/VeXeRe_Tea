const express = require('express');
const stationRouter = express.Router();
const { Station } = require('../models');

// controllers
const {
    createStation,
    getAllStation,
    getDetailStation,
    updateStation,
    deleteStation,
    uploadImg,
} = require('../controllers/station.controllers');
// middleware
const { checkExist } = require('../middlewares/validations/checkExist');
const { authenticate } = require('../middlewares/auth/authenticate');
const { authorize } = require('../middlewares/auth/authorize');
const { uploadImage } = require('../middlewares/upload/upload-img');
const type = ['admin', 'superadmin'];

stationRouter.post('/', authenticate, authorize(type), createStation);
stationRouter.get('/', getAllStation);
stationRouter.get('/:id', getDetailStation);
stationRouter.put('/:id', authenticate, authorize(type), checkExist(Station), updateStation);
stationRouter.put('/upload-station-image/:id', authenticate, authorize(type), uploadImage(`station-Image`), uploadImg);
stationRouter.delete('/:id', authenticate, authorize(type), checkExist(Station), deleteStation);

module.exports = { stationRouter };