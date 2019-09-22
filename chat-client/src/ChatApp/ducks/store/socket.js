import { default as ioc } from 'socket.io-client';

export class Socket {
    constructor(url = 'http://localhost:8002', io = ioc) {
        this.io = io;
        this.url = url;
    }

    configure(handlers) {
        const {
            connect,
            disconnect,
            receive,
        } = handlers;

        this.socket = this.io(this.url);

        this.socket.on('connect', connect);
        this.socket.on('disconnect', disconnect);
        this.socket.on('chat_message', receive);
    }

    sendMessage(message) {
        this.io.emit('chat_message', message);
    }
}
