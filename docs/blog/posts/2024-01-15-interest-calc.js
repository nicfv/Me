/**
 * Get a numeric input value.
 */
function getNum(id = '') {
    return +document.getElementById(id).value ?? 0;
}
/**
 * Round a number to 2 decimal places.
 */
function round(n = 0) {
    return Math.round(n * (100)) / 100;
}
/**
 * Calculate and output the annual interest rate.
 */
function calculate() {
    const F = getNum('F'), P = getNum('P'), Y = getNum('Y'), f = getNum('f'),
        i = 100 * f * ((F / P) ** (1 / (Y * f)) - 1);
    document.getElementById('i').textContent = 'Annual Interest Rate = ' + round(i) + '%';
}
/**
 * Add event listeners.
 */
document.getElementById('F').addEventListener('input', calculate);
document.getElementById('P').addEventListener('input', calculate);
document.getElementById('Y').addEventListener('input', calculate);
document.getElementById('f').addEventListener('input', calculate);