function parOuImp(n) {
    if (n % 2 == 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

let res = parOuImp(5);
console.log(`O número fornecido é ${res}.`)