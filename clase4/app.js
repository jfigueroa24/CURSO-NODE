import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

//CREATE LISTEN SERVER

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`)
})

// COMO LEER UN JSON EN ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8')) // PRIMERA FORMA - NO ES TAN BUENA

// COMO LEER UN JSON EN ESModules recomendado por ahora

// import movies from './movies.json' assert { type: 'json' }

// METHODS COMMONS: GET/HEAD/POST
// METHODS HARD: PUT/PATCH/DELETE

// CORE PRE-Flight
// OPTIONS
