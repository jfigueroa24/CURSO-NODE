const fs = require('node:fs')

fs.readdir('.',(error, files)=>{
    if(error){
        console.error('Error en el directorio: ',error);
        return;
    }

    files.forEach(file =>{
        console.log(file)
    })
})