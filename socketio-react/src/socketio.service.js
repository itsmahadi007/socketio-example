import { io } from 'socket.io-client';

let socket;
export const initiateSocketConnection = (room) => {
  socket = io(process.env.REACT_APP_SOCKET_ENDPOINT);
	console.log(`Connecting socket...`);
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}
export const subscribeToChat = (cb) => {
    let mes =  "{message: hi from react app}";
	socket.emit('CHAT', mes);
  if (!socket) return(true);
  socket.on('CHAT', msg => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
}
export const sendMessage = (room, message) => {
  if (socket) socket.emit('CHAT', { message, room });
}