const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 3000

const app = express()
app.disable('x-powered-by')

// Linea de codigo que reemplaza todo el siguiente codigo
app.use(express.json())

//TODO ESTO SE RESUMEN EN UNA SOLA LINEA USANDO EXPRESS

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   //SOLO llegan request POST y que tienen el header CONTENT TYPE APLICATION / JSON
//   let body = ''
//   // escuchar el evento data
//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     //mutar la request y meter la informacion en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

//la ultima a la que va a llegar - Use para todos metodos
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
