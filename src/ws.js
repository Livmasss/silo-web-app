import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs'

const host = "http://localhost:8080"
let stompClient

export function initWSClient(roomId, showVisitorsCallback, setOpenDataState, finishVotingCallback) {
    let socket = new SockJS(`${host}/ws`)
    stompClient = Stomp.Stomp.over(socket);

    stompClient.connect({}, function(frame) {
        console.log(`Room id: ${roomId}\nConnected: ${frame}`)
        subscribeRoomVisitors(showVisitorsCallback, roomId)
        subscribeOpenPropertyMessage(setOpenDataState, roomId)
        subscribeVotingFinished(roomId, finishVotingCallback) 
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

export function sendFinishVotingMessage(roomId) {
    stompClient.send(`/app/game/finish_voting/${roomId}`, {}, {})
}

export function sendOpenPropertyMessage(roomId, playerId, propertyId) {
    stompClient.send(`/app/game/open_property/${roomId}`, {}, 
        JSON.stringify({
            'player_id': playerId,
            'property': propertyId
        })
    )
}

export function subscribeOpenPropertyMessage(showOpenDataState, room_id) {
    const handleSubscribe = (message) => {
        const json = JSON.parse(message.body)
        if (json.length > 0){
            console.log(`Response length: ${json.length}`)
            showOpenDataState(json);
        }
    }

    stompClient.subscribe(`/game/property/${room_id}`, handleSubscribe);
}

export function subscribeRoomVisitors(showVisitorsCallback, room_id) {
    const handleSubscribe = (message) => {
        const json = JSON.parse(message.body)
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

export function subscribeVotingFinished(room_id, finishVotingCallback) {
    const handleSubscribe = (message) => {
        const json = JSON.parse(message.body)
        console.log(`Voting finished: ${json}`)
        finishVotingCallback(json["items"])
    }

    stompClient.subscribe(`/game/voting_finished/${room_id}`, handleSubscribe)
}
