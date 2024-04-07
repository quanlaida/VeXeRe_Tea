const { where, Op } = require('sequelize');
const { Station } = require('../models');

const createStation = async (req, res) => {
    try {
        const { name, address, province } = req.body;
        const newStation = await Station.create({ name, address, province });
        res.status(201).send(newStation);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

const getAllStation = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const stationList = await Station.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`, // like MySQL
                    }
                }
            });
            res.status(200).send(stationList);
        } else {
            const listStation = await Station.findAll();
            res.status(200).send(listStation);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getDetailStation = async (req, res) => {
    const { id } = req.params;
    try {
        const detailStation = await Station.findOne({ where: { id } });
        if (detailStation) {
            res.status(200).send(detailStation);
        } else {
            res.status(404).send(`Station not exist`);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateStation = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    console.log(data);
    try {
        await Station.update({
            name: data.name,
            address: data.address,
            province: data.province,
        }, {
            where: { id }
        })
        const detailsStation = await Station.findOne({ where: { id: id } });
        // detailsStation.name = data.name;
        // detailsStation.address = data.address;
        // detailsStation.province = data.province;
        // await detailsStation.save();
        res.status(200).send(detailsStation);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteStation = async (req, res) => {
    const { id } = req.params;
    try {
        await Station.destroy({
            where: { id: id } // xóa theo id cho chắc
        });
        res.status(200).send(`Xóa thành công bến xe có id: ${id}`);
    } catch (error) {
        res.status(500).send(error);
    }
}

const uploadImg = async (req, res) => {
    const { id } = req.params;
    const file = req.file;
    try {
        if (!file) {
            res.status(400).send(`No file uploaded!`);
        } else {
            const urlImage = `http://localhost:3000/${file.path}`;
            const stationFound = await Station.findOne({
                where: {
                    id,
                }
            })
            stationFound.image = urlImage;
            await stationFound.save();
            res.status(200).send(`Upload station image successful`)
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createStation,
    getAllStation,
    getDetailStation,
    updateStation,
    deleteStation,
    uploadImg,
}