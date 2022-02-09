import {io} from 'socket.io-client';

class SocketioService {
    socket;

    constructor() {
    }

    setupSocketConnection() {
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
        let mes =  "{message: hi from VUE}";
        this.socket.emit('CHAT', mes);

        this.socket.on('CHAT', (data) => {
            console.log(data);
        });
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}

export default new SocketioService();