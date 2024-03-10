import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs'

const host = "http://localhost:8080"
let stompClient

export function initWSClient() {
    let socket = new SockJS(`${host}/ws`)
    stompClient = Stomp.Stomp.over(socket);

    stompClient.connect({}, function(frame) {
        console.log('Connected: ' + frame)
        // sendName("name", "cbd77229-bbdd-4447-b1a9-f4b320ec2727")
        sendPing()
    })

    stompClient.onWebSocketError = (error) => {
        console.error('Error with websocket', error);
    };

    stompClient.onStompError = (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
    };
}

export function sendName(name, room_id) {
    console.log("Message sent")
    stompClient.send({
        destination: `/app/connect_to_room/${room_id}`,
        body: JSON.stringify({'name': name})
    });
}

export function sendPing() {
    console.log("Message sent")
    stompClient.send('/app/ping', {}, {})
}