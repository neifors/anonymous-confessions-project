const server = require('./server');
const port = process.env.PORT


server.listen(port, function() {
    console.log('YAY IT WORKS')
})

// heroku will set a port for you
