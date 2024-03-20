const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

const db = require('./db/db')
const Task = require('./models/Task')
const routes = require('./routes/tasksRoute')

app.use('/', routes)

db.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => {
    console.log(err)
})