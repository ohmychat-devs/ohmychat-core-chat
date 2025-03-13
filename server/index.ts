import getUserChat from "./handlers/getUserChat.js";

export const namespace = '/chat';

export default function(socket) {
    socket.on('chat/get', getUserChat);
    //console.log(db);
    console.log('hello');
}