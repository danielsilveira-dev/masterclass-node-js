const EventEmitter = require('events')
const fs = require('fs') // irá trabalhar com os arquivos de sistema
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => { // appendFile(qualarquivo)
        if (err) throw err
    })
})

// emitter.emit('log', "mensagem que eu quero")

function log(message) {
    emitter.emit('log', message)
}

module.exports = log