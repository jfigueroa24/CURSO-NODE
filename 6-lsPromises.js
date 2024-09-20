const fs = require('node:fs/promises')


fs.readdir('.').then(files =>{
    files.forEach(file =>{
        console.log(file)
    })
}).catch(e =>{
    if(e){
        console.error('Error en el directorio: ',error);
        return;
    }
})