const http = require('node:http')

//CommonJS -> modulos clásicos de node
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  console.log({ method, url })

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Not found <b>404</b></h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon':
          {
            let body = ''
            // escuchar el evento data
            req.on('data', (chunk) => {
              body += chunk.toString()
              console.log({ body })
            })

            req.on('end', () => {
              const data = JSON.parse(body)
              data.timestamp = Date.now()
              //LLAMAR A UNA BASE DE DATOS PARA GUARDAR LA INFO
              res.writeHead(201, {
                'Content-Type': 'application/json; charset=utf-8',
              })

              res.end(JSON.stringify(data))
            })
          }
          break
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('Not found 404')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('server listening on port http://localhost:3000')
})
