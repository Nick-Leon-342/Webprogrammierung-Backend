
const cors = require('cors')
const corsOptions = {
	origin: '*',
}

const express = require('express')
const app = express()

app.use(express.json())
app.use(cors(corsOptions))


//Arrays für Reservierungen und Lieferservice - Man könnte eine Datenbank integrieren und überprüfen,
//ob die Werte "valide" sind. Da ich noch andere Projekte im Semester habe, habe ich den Umfang des Projektes gering gehalten.
const reservierungen = []
const lieferservice = []




app.post('/reservierung', (req, res) => {

	const json = req.body

	reservierungen.push(json)
	console.log(reservierungen)

	res.sendStatus(204)
	
})





app.post('/lieferservice', (req, res) => {
	
	const json = req.body

	lieferservice.push(json)
	console.log(lieferservice)

	res.sendStatus(204)

})





app.listen(10001, () => console.log('Listening on port 10001'))