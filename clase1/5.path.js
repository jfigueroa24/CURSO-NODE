const { diffieHellman } = require('node:crypto');
const path = require('node:path');

//barra separadora de carpetas segun SO
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath);

// obtener el nombre del fichero
const base = path.basename('/temp/carlos-archivo-secreto/password.txt')
console.log(base)


// obtener el nombre del fichero sin extension
const filename = path.basename('/temp/carlos-archivo-secreto/password.txt','.txt')
console.log(filename)

//obtener la extension de un archivo
const extension = path.extname('imagen.png')
console.log(extension)
