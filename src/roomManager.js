let connect_room_id = ""

export function setConnectRoomId(id) {
    connect_room_id = id
    console.log(`Room set: ${id}`)
}
export function getConnectRoomId() {
    return connect_room_id
}