//argumentos de entrada
console.log(process.argv)

//controlar el proceso y su salida
//process.exit(1);

//podemos conrolar eventos del proceso
process.on('exit', ()=>{
    //limpiar los recursos
})

//current working directory
console.log(process.cwd())

// variable de entorno
console.log(process.env.PEPE)

