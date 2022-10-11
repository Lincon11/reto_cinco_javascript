var scanf = require('scanf');

console.log('Mi Cadena de Texto');
console.log('\n');
console.log('Acontinuacion escriba lo que desee y al terminar escriba "cancelar" para ver en consola lo que escribio.');
console.log('\n');

var cadenaDeTexto = [];
var cancelar 

do {

var listaDePalabras = scanf("%s");
cancelar = listaDePalabras;
cadenaDeTexto.push(cancelar);
    
} while (cancelar != "cancelar");

cadenaDeTexto.pop();
console.log('\n');
console.log('Finalizaste tu texto, ahora podras verlo:')
console.log('\n');
cadenaDeTexto.forEach(cancelar => {
    console.log(`${cancelar}`)
    
});
