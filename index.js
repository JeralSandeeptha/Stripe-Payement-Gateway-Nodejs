require('dotenv').config();
const express = require('express');
const cors = require('cors');

const paymentRoutes = require('./routes/pyamentRoute');

const app = express();

app.use(cors());

app.use('/api/payment', paymentRoutes);

app.listen(5000, () => {
    console.log("Server is running at port 5000");
});