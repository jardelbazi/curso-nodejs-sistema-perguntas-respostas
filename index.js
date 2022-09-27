const express  = require("express")
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
	let name = "Jardel Pavan Bazi"
	let is_active = false

	let users = [
		{name: "Jardel Bazi" ,age: 37},
		{name: "Jaine Jover" ,age: 22},
		{name: "Poliana" ,age: 35},
	]

	res.render('index', {
		name,
		users,
		is_active
	})
})

app.listen(port, () => console.log("APP rodando!"))