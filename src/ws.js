import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs'
import {getConnectRoomId} from "./roomManager";

const host = "http://localhost:8080"
let stompClient

export function initWSClient() {
    let socket = new SockJS(`${host}/ws`)
    stompClient = Stomp.Stomp.over(socket);

    stompClient.connect({}, function(frame) {
        console.log('Connected: ' + frame)
    })

    stompClient.onWebSocketError = (error) => {
        console.error('Error with websocket', error);
    };

    stompClient.onStompError = (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
    };
}

export function joinToRoom(name) {
    console.log("Message sent")
    stompClient.send(`/app/connect_to_room/${getConnectRoomId()}`, {}, JSON.stringify({'name': name}))
}

export function sendPing() {
    console.log("Message sent")
    stompClient.send('/app/ping', {}, {})
}