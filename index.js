const SocketIO = require('socket.io');
const http = require('http');
const app = require('./src/config/app')();

const port = 3001;

const server = http.createServer(app);

const io = SocketIO.listen(server); // pass a http.Server instance

io.on('connection', (socket) => {
  console.log(`a user connected  ${socket.id}`);
  socket.on('disconnect', (reason) => {
    console.log(`a user disconnected  ${reason}`);
  });

  socket.on('SEND_MESSAGE', (data) => {
    console.log(`a user connected  ${socket.id}`);
    io.emit('MESSAGE', data);
  });
  socket.on('pingServer', (data) => {
    console.log(data);
    io.emit('MESSAGE', data);
  });
});

server.listen(port, () => {
  console.log(`we live at http://localhost:${port}`);
});
