const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.text({ type: 'text/plain' }))

const port = 4567

app.get('/api/printers', (req, res) => {
    // @TODO: Get the list of printers using Node OS API
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Content-Type', 'application/json')

    res.json([
        {
            id: 'printer1',
            name: 'Zebra ZD421'
        },
        {
            id: 'printer2',
            name: 'HP Deskjet Wannabe Bullshit Printer'
        }
    ])
})

app.post('/api/print/:printer', (req, res) => {
    // @TODO: Parse printer we're printing to from payload
    // @TODO: Parse Zebra ZPL from payload
    // @TODO: Send to printer

    const { body, params } = req
    const { printer } = params

    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.header('Content-Type', 'application/json')

    res.json({
        status: 'OK',
        message: `Printing on ${printer}`,
        content: `Printing following content: \n\n${body}`
    })
})

app.listen(4567, () => {
    console.log(`Printer server is running on http://localhost:${port}`)
})