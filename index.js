const server = require('./server')

const port = 3900

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})