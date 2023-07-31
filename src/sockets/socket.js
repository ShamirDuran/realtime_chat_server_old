const { io } = require('../../index');

io.of('/api/sockets').on('connection', async (socket) => {
  console.log('New user connection');
});
