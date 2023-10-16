const { port, prefix } = require('./src/configs/env.config');
const { logger } = require('./src/utils/logs.util');
const { dbConnection } = require('./src/database/config.db');
const errorHandlerMiddleware = require('./src/middlewares/error.middleware');
const morgan = require('morgan');

// Express
const express = require('express');
const cors = require('cors');
const app = express();

// Sockets
const http = require('http');
const server = http.createServer(app);
module.exports.io = require('socket.io')(server); // export socket.io instance to be used in other files
require('./src/sockets/socket'); // import socket.io events

// Database
dbConnection();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.get(`/${prefix}/test`, (req, res) => res.json({ message: 'Base route' }));
app.use(`/${prefix}/`, require('./src/routes/test.route'));
app.use(`/${prefix}/auth`, require('./src/routes/auth.route'));

// Error handler
app.use(errorHandlerMiddleware);

server.listen(port, () => {
  logger('info', `Server running on port ${port}`);
});
