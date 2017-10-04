module.exports = function (server) {
  const io = require('socket.io')(server);

  io.on('connection', socket => {
    socket.on('message', data => {
      socket.send({ others: Object.keys(io.sockets.sockets).filter(id => id !== socket.id) });
    });

    socket.on('disconnect', () => {});
  });
};
