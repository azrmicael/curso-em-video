let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar (p=0) {
        console.log('Engordou');
        this.peso += p;
    }
};

console.log('Antes de function engordar (com p = 0):');
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`);

console.log('');
amigo.engordar(2);

console.log('Depois de function engordar (com p = 2):');
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`);