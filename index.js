const express  = require("express")
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	let name = "Jardel Pavan Bazi"
	let is_active = false

	res.render('index', {
		name,
		is_active
	})
})

app.listen(port, () => console.log("APP rodando!"))