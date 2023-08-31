function factorial(n) { 
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

/*
Função para o cálculo fatorial RECURSIVA de um número.

5! = 5 * 4 * 3 * 2 * 1 = 120
5! = 5 * 4! = 120

n! = n * (n - 1)!
1! = 1
*/

console.log(factorial(5));