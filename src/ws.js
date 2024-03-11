import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs'
import {getConnectRoomId} from "./roomManager";

const host = "http://localhost:8080"
let stompClient

export function initWSClient(showVisitorsCallback, room_id) {
    let socket = new SockJS(`${host}/ws`)
    stompClient = Stomp.Stomp.over(socket);

    stompClient.connect({}, function(frame) {
        console.log('Connected: ' + frame)
        subscribePong()
        subscribeRoomVisitors(showVisitorsCallback, room_id)
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
    stompClient.send(`/app/connect_to_room/${getConnectRoomId()}`, {}, JSON.stringify({'name': name}))
}

export function sendPing() {
    stompClient.send('/app/ping', {}, {})
}

export function subscribeRoomVisitors(showVisitorsCallback, room_id) {
    const handleSubscribe = (message) => {
        const json = JSON.parse(message.body)
        console.log(json)
        showVisitorsCallback(json);
    }

    stompClient.subscribe(`/rooms/${room_id}`, handleSubscribe);
}

export function subscribePong() {
    const handleSubscribe = (message) => {
        console.log("Pong")
    }

    stompClient.subscribe('/pong', handleSubscribe)
}