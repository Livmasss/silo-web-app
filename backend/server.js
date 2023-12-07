const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))
app.get('/', (req, res) => {
    res.send("Connected to server")
})
app.get('/game_info', (req, res) => {
    res.send(
        JSON.stringify({
        "player_data": {
            "gender": "Мужчина",
            "health": "спид.",
            "personality": "Уверенный",
            "profession": "Гид по туалетам",
            "hobby": "ГейМер",
            "phobia": "Клоунофобия",
            "inventory": "Виагра",
            "information": "Работал в Росгвардии",
            "action": "В этом голосовании ваш голос считается за 2"
        },
        "persons": [
            {
                "player": "Зубослеп",
                "player_data": {
                    "gender": "Мужчина",
                    "health": "",
                    "personality": "",
                    "profession": "Стоматолог",
                    "hobby": "",
                    "phobia": "",
                    "inventory": "",
                    "information": "",
                    "action": ""
                }
            },
            {
                "player": "Октябрина",
                "player_data": {
                    "gender": "Мужчина",
                    "health": "",
                    "personality": "",
                    "profession": "Гид по туалетам",
                    "hobby": "",
                    "phobia": "",
                    "inventory": "",
                    "information": "",
                    "action": ""
                }
            },
            {
                "player": "Кринжеслав",
                "player_data": {
                    "gender": "Мужчина",
                    "health": "",
                    "personality": "",
                    "profession": "Банкир",
                    "hobby": "",
                    "phobia": "",
                    "inventory": "",
                    "information": "",
                    "action": ""
                }
            },
        ]

    }))
})