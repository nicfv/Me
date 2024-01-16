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
    document.getElementById('P(F)').addEventListener('input', calc_P);
    document.getElementById('P(i)').addEventListener('input', calc_P);
    document.getElementById('P(n)').addEventListener('input', calc_P);
    document.getElementById('P(f)').addEventListener('input', calc_P);
    document.getElementById('i(F)').addEventListener('input', calc_i);
    document.getElementById('i(P)').addEventListener('input', calc_i);
    document.getElementById('i(n)').addEventListener('input', calc_i);
    document.getElementById('i(f)').addEventListener('input', calc_i);
    document.getElementById('n(F)').addEventListener('input', calc_n);
    document.getElementById('n(P)').addEventListener('input', calc_n);
    document.getElementById('n(i)').addEventListener('input', calc_n);
    document.getElementById('n(f)').addEventListener('input', calc_n);
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
 * Calculate and output the initial value.
 */
function calc_P() {
    const F = getNum('P(F)'), i = getNum('P(i)'), n = getNum('P(n)'), f = getNum('P(f)'),
        P = F * (1 + i / 100 / f) ** (-n * f);
    document.getElementById('P()').textContent = '$' + P.toFixed(2);
}
/**
 * Calculate and output the annual interest rate.
 */
function calc_i() {
    const F = getNum('i(F)'), P = getNum('i(P)'), n = getNum('i(n)'), f = getNum('i(f)'),
        i = 100 * f * ((F / P) ** (1 / (n * f)) - 1);
    document.getElementById('i()').textContent = i.toFixed(2) + '%';
}
/**
 * Calculate and output the annual interest rate.
 */
function calc_n() {
    const F = getNum('n(F)'), P = getNum('n(P)'), i = getNum('n(i)'), f = getNum('n(f)'),
        n = Math.log(F / P) / f / Math.log(1 + i / 100 / f);
    document.getElementById('n()').textContent = n.toFixed(2) + ' yr';
}