const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))
app.get('/api', (req, res) => {
    res.send("Connected to server")
})
app.get('/api/player_data', (req, res) => {
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

app.get('/api/actions_data', (req, res) => {
    res.send(
        JSON.stringify( [
            {
                "player": "Зубослеп",
                "votes": [
                    "Октябрина",
                    "Кринжеслав"
                ],
                "action": ""
            },
            {
                "player": "Октябрина",
                "votes": [],
                "action": "Уменьшает запасы еды в бункере на 300"
            },
            {
                "player": "Кринжеслав",
                "votes": [
                    "Зубослеп"
                ],
                "action": ""
            }]
        )
    )
})

app.get('/api/players_open_data', (req, res) => {
    res.send(
        JSON.stringify(
            [
                {
                    "name": "Зубослеп",
                    "gender": "Мужчина",
                    "health": "",
                    "personality": "",
                    "profession": "Стоматолог",
                    "hobby": "",
                    "phobia": "",
                    "inventory": "",
                    "information": "",
                    "action": ""
                },
                {
                    "name": "Октябрина",
                    "gender": "Мужчина",
                    "health": "",
                    "personality": "",
                    "profession": "Гид по туалетам",
                    "hobby": "",
                    "phobia": "",
                    "inventory": "",
                    "information": "",
                    "action": ""
                },
                {
                    "name": "Кринжеслав",
                    "gender": "Мужчина",
                    "health": "",
                    "personality": "",
                    "profession": "Банкир",
                    "hobby": "",
                    "phobia": "",
                    "inventory": "",
                    "information": "",
                    "action": ""
                }]
        )
    )
})
