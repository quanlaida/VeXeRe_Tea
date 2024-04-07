const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
// express-fingerprint
const Fingerprint = require('express-fingerprint');
const { rootRouter } = require('./routers/index.routers');

const app = express();

const port = 3000;

// Cài đặt ứng dụng sử dụng kiểu json
app.use(express.json());
// Cài đặt fingerprint
app.use(Fingerprint());

// Static file
const publicPathDirectory = path.join(__dirname, "./public");

app.use("/public", express.static(publicPathDirectory));

app.use("/api/v1", rootRouter);

// Nghe sự kiện kết nối

app.listen(port, async () => {
    console.log(`App listen on port: ${port}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})