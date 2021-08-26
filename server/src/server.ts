import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

const users: { name: string, email: string, password: string }[] = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    const user = { name: req.body.name, email: req.body.email, password: req.body.password }
    users.push(user)
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})