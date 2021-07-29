require('dotenv').config()

const server = require('./api/server')

const port = process.env.PORT

server.listen(port, (req) => {
  console.log(`Server running on http://localhost:${port}`)
})
