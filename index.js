const express  = require("express")
const bodyParser  = require("body-parser")
const connection = require('./database')

const Ask = require('./models/Ask')
const Answer = require('./models/Answer')

connection
	.authenticate()
	.then(() => console.log("Conexão com MYSQL"))
	.catch((error) => console.log(error))

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	Ask.findAll({ raw: true, order: [
		['id', 'DESC']
	]}).then(asks => {
		res.render('index', { asks })
	})
})

app.get('/ask/create', (req, res) => res.render('ask-create'))

app.post('/ask', (req, res) => {
	let title = req.body.title
	let description = req.body.description
	
	Ask.create({
		title,
		description
	}).then(() => res.redirect('/'))
})

app.get('/ask/:id', (req, res) => {
	let id = req.params.id

	Ask.findOne({
		where: { id: id}
	}).then(ask => {
		if (ask != undefined) {
			Answer.findAll({
				raw: true,
				where: { id_ask: ask.id},
				order: [
					['id', 'DESC']
				]
			}).then(answers => {
				res.render('ask-show', { ask, answers })
			})
		}
		else
			res.redirect('/asks')
	})
})

app.post('/answer/:id', (req, res) => {
	let id = req.params.id
	let answer = req.body.answer

	Ask.findOne({
		where: { id: id}
	}).then(ask => {
		if (ask != undefined) {
			Answer.create({
				id_ask: id,
				answer
			})

			res.redirect('/ask/' + id)
		} else
			res.redirect('/asks')
	})
})

app.listen(port, () => console.log("APP rodando!"))