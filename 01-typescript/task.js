"use strict";
(() => {
    /*
      1.**Factorial de un número:**
      - **Descripción:** Calcular el factorial de un número entero no negativo n, denotado por n!. El factorial de un número n se define como el producto de todos los enteros positivos menores o iguales a n.
      - **Entrada:** Un número entero no negativo n. x ej: 5
      - **Salida:** El factorial de n, es decir, n!. Salida: 5x4x3x2x1 = 120
    */
    function factorial(n) {
        if (n < 0 || !Number.isInteger(n))
            return -1;
        if (n == 0 || n == 1)
            return 1;
        return n * factorial(n - 1);
    }
    /*
    2. **Fibonacci (recursividad):**
    - **Descripción:** Calcular el n-ésimo número de la secuencia de Fibonacci utilizando recursividad. La secuencia de Fibonacci comienza con 0 y 1, y cada número posterior es la suma de los dos números anteriores.
    - **Entrada:** Un número entero no negativo n que indica el índice del número de Fibonacci deseado. **Entrada: 7**
    - **Salida:** El n-ésimo número de Fibonacci. **Salida: 13**
    */
    function fibonacciNum(n, memo = []) {
        if (n === 0)
            return 0;
        if (n === 1)
            return 1;
        if (memo[n] !== undefined) {
            return memo[n];
        }
        memo[n] = fibonacciNum(n - 1, memo) + fibonacciNum(n - 2, memo);
        return memo[n];
    }
    /*
    3. **Palíndromo (recursividad):**
    - **Descripción:** Determinar si una cadena es un palíndromo o no utilizando recursividad. Un palíndromo es una palabra, frase o secuencia que se lee igual de adelante hacia atrás que de atrás hacia adelante.
    - **Entrada:** Una cadena de caracteres. **Entrada: “radar”**
    - **Salida:** True si la cadena es un palíndromo, False en caso contrario. **Salida: true**
    */
    function isPalindrome(word) {
        if (word.length <= 1)
            return true;
        if (word[0] !== word[word.length - 1])
            return false;
        const newWord = word.substring(1, word.length - 1);
        return isPalindrome(newWord);
    }
    /*
    4. **Grid Traveler:**
    - **Descripción:** Un viajero comienza en la esquina superior izquierda de una cuadrícula m x n y quiere llegar a la esquina inferior derecha. El viajero solo puede moverse hacia abajo o hacia la derecha. Calcular el número de formas únicas en las que el viajero puede llegar a su destino.
    - **Entrada:** Dos enteros m y n, que representan las dimensiones de la cuadrícula. **Entrada: 3x3**
    - **Salida:** El número de formas únicas en las que el viajero puede llegar a la esquina inferior derecha. **Salida: 6**
    */
    console.log('fibonacci', fibonacciNum(7));
    console.log('factorial', factorial(5));
    console.log('isPalindrome', isPalindrome('radar'));
})();
