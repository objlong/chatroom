const DEFAULT_ROOM = '0'
export default function listenWebSocket(io, store) {
  io.on('connection', (socket) => {
    console.log('connected');
    socket.emit('state', store.getState());
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  });
}
