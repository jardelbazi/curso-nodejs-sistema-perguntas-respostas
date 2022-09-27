const express  = require("express")
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	let name = "Jardel Pavan Bazi"

	res.render('index', {
		name: name
	})
})

app.listen(port, () => console.log("APP rodando!"))