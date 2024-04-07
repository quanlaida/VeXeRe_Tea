const { where } = require('sequelize');
const { Trip, Station } = require('../models');

const createTrip = async (req, res) => {
    const { fromStation, toStation, startTime, price } = req.body;
    try {
        const newTrip = await Trip.create({ fromStation, toStation, startTime, price });
        res.status(201).send({ message: `Created trip`, newTrip });
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllTrip = async (req, res) => {
    const { nameFromStation, nameToStation } = req.query;
    try {
        if (nameFromStation && nameToStation) {
            const stationStart = await Trip.findOne({ where: { name: nameFromStation } });
            const stationEnd = await Trip.findOne({ where: { name: nameToStation } });
            const startId = stationStart.id;
            const endId = stationEnd.id;
            const listTripName = await Trip.findAll({
                where: {
                    fromStation: startId,
                    toStation: endId,
                },
                include: [{
                    model: Station,
                    as: "from",
                },
                {
                    model: Station,
                    as: "to",
                }]
            })
            res.status(200).send(listTripName);
        } else {
            const tripList = await Trip.findAll({
                include: [{
                    model: Station,
                    as: "from",
                }, {
                    model: Station,
                    as: "to",
                }],
            });
            res.status(200).send(tripList);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateTrip = async (req, res) => {
    const { id } = req.params;
    const { fromStation, toStation, startTime, price } = req.body;
    try {
        const tripNeedUpdate = await Trip.findOne({ where: { id } });
        if (tripNeedUpdate) {
            await Trip.update({ fromStation, toStation, startTime, price }, { where: { id } });
            const tripUpdated = await Trip.findOne({ where: { id } });
            res.status(200).send({ message: `Update success`, tripUpdated });
        } else {
            res.status(404).send(`Trip not found`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteTrip = async (req, res) => {
    const { id } = req.params;
    try {
        const trip = await Trip.findOne({
            where: { id }
        })
        if (trip) {
            await Trip.destroy({ where: { id } });
            res.status(200).send(`Delete successfully`);
        } else {
            res.status(404).send(`Trip not found`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createTrip,
    getAllTrip,
    updateTrip,
    deleteTrip,
};
