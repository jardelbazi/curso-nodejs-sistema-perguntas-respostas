const express  = require("express")
const bodyParser  = require("body-parser")
const connection = require('./database')
const Ask = require('./models/Ask')

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

app.get('/', (req, res) => res.render('index'))
app.get('/ask', (req, res) => res.render('ask'))

app.post('/ask', (req, res) => {
	let title = req.body.title
	let description = req.body.description
	res.send(`Formulário Recebido: Titulo: ${title}`)
})

app.listen(port, () => console.log("APP rodando!"))