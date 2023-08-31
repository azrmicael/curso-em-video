let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
console.log('')

// indexOf retorna a key onde o valor buscado se encontra
console.log(valores.indexOf(7));
console.log('')

/*
for (let i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`);

} 
*/

for (let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`);
}

