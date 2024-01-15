/**
 * Get a numeric input value.
 */
function getNum(id = '') {
    return +document.getElementById(id).value ?? 0;
}
/**
 * Calculate and output the annual interest rate.
 */
function calculate() {
    const F = getNum('F'), P = getNum('P'), Y = getNum('Y'), f = getNum('f'),
        i = 100 * f * ((F / P) ** (1 / (Y * f)) - 1);
    document.getElementById('i').textContent = 'Annual Interest Rate = ' + i + '%';
}
/**
 * Add event listeners.
 */
document.getElementById('F').addEventListener('input', calculate);
document.getElementById('P').addEventListener('input', calculate);
document.getElementById('Y').addEventListener('input', calculate);
document.getElementById('f').addEventListener('input', calculate);