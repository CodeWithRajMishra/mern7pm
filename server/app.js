const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const app = express();
app.use(cors());
const server = http.createServer(app);
// Setup Socket.IO server
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5174', // React app origin
    methods: ['GET', 'POST']
  }
});
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  socket.on('send_message', (data) => {
    console.log(data);
    // Broadcast to all other clients
    socket.broadcast.emit('receive_message', data);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});
server.listen(5000, () => {
  console.log('Server running on port 5000');
});