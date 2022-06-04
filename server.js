const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const cars = {
	'integra' : {
		'make': 'Honda',
		'color': 'Yellow',
		'countryOfOrigin': 'Japan'
	},
	'civic' : {
		'make': 'Honda',
		'color': 'White',
		'countryOfOrigin': 'Japan'
	},
	'm3' : {
		'make': 'BMW',
		'color': 'Blue',
		'countryOfOrigin': 'Germany'
	}
}

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/:carName', (request, response)=> {
	const carsName = request.params.carName.toLowerCase()
	if(cars[carsName]) {
		response.json(cars[carsName])
	} else {
		response.json('m3')
	}
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}. Better go catch it sucka!`);
})
