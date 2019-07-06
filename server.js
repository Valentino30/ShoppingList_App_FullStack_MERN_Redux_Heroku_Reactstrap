const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')
const path = require('path')

const db = require('./config/keys').mongoURI
const app = express()

app.use(bodyParser.json())
app.use('/api/items', items)

// If in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

app.listen(process.env.PORT || 5000, () => console.log(`Server started on port ${process.env.PORT || 5000}`))