const http = require('http')
const fs = require('fs') // lida com os arquivos do sistema
const path = require('path') // ações referentes às pastas

http.createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url // Se index igual a '/'(raiz) então exibe o arquivo index.html senão, exibe url todo
    const filePath = path.join(__dirname, 'public', file)
    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname )

    if(!allowed) return

    fs.readFile(
        filePath,
        (err, content) => {
            if(err) throw err

            res.end(content)
        }
    )
}).listen(5000, () => console.log('Server is running'))