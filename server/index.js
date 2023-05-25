const http = require('http');
const Sequelize = require('sequelize');
const userRoute = require('./routes/users');
const activityRoute = require('./routes/activity');
const completeRoute = require('./routes/completed');
const favoriteRoute = require('./routes/favorite');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 5000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(activityRoute);
app.use(completeRoute);
app.use(favoriteRoute);



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});