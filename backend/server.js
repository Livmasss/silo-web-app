const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Listening on port ${port}`))
app.get('/api', (req, res) => {
    res.send("Connected to server")
})
app.get('/api/player_data', (req, res) => {
    res.send(
        JSON.stringify({
            "gender": "Мужчина",
            "health": "Спид",
            "personality": "Уверенный",
            "profession": "Гид по туалетам",
            "hobby": "Геймер",
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
                    "Евгения",
                    "Кринжеслав"
                ],
                "action": ""
            },
            {
                "player": "Евгения",
                "votes": [],
                "action": "Уменьшает запасы еды в бункере на 24"
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
                    "inventory": "Ящик пива",
                    "information": "",
                    "action": ""
                },
                {
                    "name": "Евгения",
                    "gender": "Мужчина",
                    "health": "",
                    "personality": "",
                    "profession": "Гид по туалетам",
                    "hobby": "",
                    "phobia": "",
                    "inventory": "",
                    "information": "Работал в Росгвардии",
                    "action": ""
                },
                {
                    "name": "Кринжеслав",
                    "gender": "Мужчина",
                    "health": "Проблем нет",
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
