/**
 * Process a first-time setup on page load.
 */
window.addEventListener('load', () => {
    /**
     * Add event listeners.
     */
    document.getElementById('F(P)').addEventListener('input', calc_F);
    document.getElementById('F(i)').addEventListener('input', calc_F);
    document.getElementById('F(n)').addEventListener('input', calc_F);
    document.getElementById('F(f)').addEventListener('input', calc_F);
    document.getElementById('i(F)').addEventListener('input', calc_i);
    document.getElementById('i(P)').addEventListener('input', calc_i);
    document.getElementById('i(n)').addEventListener('input', calc_i);
    document.getElementById('i(f)').addEventListener('input', calc_i);
});
/**
 * Get a numeric input value.
 */
function getNum(id = '') {
    return +document.getElementById(id).value ?? 0;
}
/**
 * Calculate and output the final value.
 */
function calc_F() {
    const P = getNum('F(P)'), i = getNum('F(i)'), n = getNum('F(n)'), f = getNum('F(f)'),
        F = P * (1 + i / 100 / f) ** (n * f);
    document.getElementById('F()').textContent = '$' + F.toFixed(2);
}
/**
 * Calculate and output the annual interest rate.
 */
function calc_i() {
    const F = getNum('i(F)'), P = getNum('i(P)'), n = getNum('i(n)'), f = getNum('i(f)'),
        i = 100 * f * ((F / P) ** (1 / (n * f)) - 1);
    document.getElementById('i()').textContent = i.toFixed(2) + '%';
}