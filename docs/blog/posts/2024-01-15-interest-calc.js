function getNum(id = '') {
    return +document.getElementById(id).value ?? 0;
}
function calculate() {
    const F = getNum('F'), P = getNum('P'), Y = getNum('Y'), f = getNum('f'),
        i = 100 * f * ((F / P) ** (1 / (Y * f)) - 1);
    document.getElementById('i').textContent = 'Annual Interest Rate = ' + i + '%';
}