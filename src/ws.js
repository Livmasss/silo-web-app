import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs'

const host = "http://localhost:8080"
let stompClient

export function initWSClient(roomId, showVisitorsCallback) {
    let socket = new SockJS(`${host}/ws`)
    stompClient = Stomp.Stomp.over(socket);

    stompClient.connect({}, function(frame) {
        console.log(`Room id: ${roomId}\nConnected: ${frame}`)
        subscribeRoomVisitors(showVisitorsCallback, roomId)
    })

    stompClient.onWebSocketError = (error) => {
        console.error('Error with websocket', error);
    };

    stompClient.onStompError = (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
    };
}

export function joinToRoom(name, roomId) {
    console.log(`Room id: ${roomId}`)
    stompClient.send(`/app/connect_to_room/${roomId}`, {}, JSON.stringify({'name': name}))
}

export function sendPing() {
    stompClient.send('/app/ping', {}, {})
}

export function sendStartGameMessage(roomId) {
    stompClient.send(`/app/start_game/${roomId}`, {}, {})
}

export function subscribeRoomVisitors(showVisitorsCallback, room_id) {
    const handleSubscribe = (message) => {
        const json = JSON.parse(message.body)
        console.log(json)
        showVisitorsCallback(json);
    }

    stompClient.subscribe(`/rooms/${room_id}`, handleSubscribe);
}

export function subscribeGameStarted(room_id, startGameCallback) {
    const handleSubscribe = () => {
        console.log("Game started")
        startGameCallback()
    }

    stompClient.subscribe(`/game_started/${room_id}`, handleSubscribe)
}
