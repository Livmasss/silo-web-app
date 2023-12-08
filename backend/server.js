const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))
app.get('/', (req, res) => {
    res.send("Connected to server")
})
app.get('/player_data', (req, res) => {
    res.send(
        JSON.stringify({
            "gender": "Мужчина",
            "health": "спид.",
            "personality": "Уверенный",
            "profession": "Гид по туалетам",
            "hobby": "ГейМер",
            "phobia": "Клоунофобия",
            "inventory": "Виагра",
            "information": "Работал в Росгвардии",
            "action": "В этом голосовании ваш голос считается за 2"
        })
    )
})

app.get('/players_open_data', (req, res) => {
    res.send(
        JSON.stringify( {
            "persons": [
                {
                    "name": "Зубослеп",
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
                    "name": "Октябрина",
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
                    "name": "Кринжеслав",
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
                }]
        })
    )
})
