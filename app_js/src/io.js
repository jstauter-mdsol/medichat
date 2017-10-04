import io from 'socket.io-client'

const socket = io();

window.setInterval(() => {
  socket.send({});
}, 5000);

socket.on('message', data => {
  console.log(data);
});
