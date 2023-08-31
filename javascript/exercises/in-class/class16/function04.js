function factorial(n) { 
    //5! = 5*4*3*2*1 = 120
    fac = 1;
    for(n; n > 1; n--) {
        fac *= n;
    }
    return fac;
}

/*
Função para o cálculo fatorial de um número.
*/

console.log(factorial(5));