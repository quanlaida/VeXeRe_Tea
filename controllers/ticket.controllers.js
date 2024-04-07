const { Ticket } = require('../models');

const createTicket = async (req, res) => {
    const { trip_id, user_id, seatNumber } = req.body;
    try {
        const newTicket = await Trip.create({ trip_id, user_id, seatNumber });
        res.status(201).send({ message: `Created ticket`, newTicket });
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllTickets = async (req, res) => {

}

module.exports = {
    createTicket,
};
