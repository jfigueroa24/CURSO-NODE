const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files;
    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.error(pc.red(`No se ha podido leer el directorio ${folder}`))
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder,file)
        let stats
        try {
            stats = await fs.stat(filePath) // Stat - informacion del archivo
        } catch (error) {
            console.error(`No se ha podido leer el archivo ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fielModified = stats.mtime.toLocaleString()

        return `${pc.magenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fielModified)}`
    })
    
    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
