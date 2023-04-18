//ENVIROMENT VARAIBLES

let name = process.env.NAME || 'noname';
let web = process.env.WEB || 'no web';

console.log('Hola ' + name);
console.log('My webpage is ' + web);