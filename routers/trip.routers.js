const express = require('express');
const tripRouter = express.Router();
// controller
const {
    createTrip,
    getAllTrip,
    updateTrip,
    deleteTrip,
} = require('../controllers/trip.controllers');
// middleware
const { authenticate } = require('../middlewares/auth/authenticate');
const { authorize } = require('../middlewares/auth/authorize');
const type = ['admin', 'superadmin'];

tripRouter.post('/', authenticate, authorize(type), createTrip);
tripRouter.get('/', getAllTrip);
tripRouter.put('/:id', authenticate, authorize(type), updateTrip);
tripRouter.delete('/:id', authenticate, authorize(type), deleteTrip);

module.exports = { tripRouter };
