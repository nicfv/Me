---
date:
  created: 2024-01-15
categories:
  - Project
tags:
  - time
  - value
  - money
---
# Interest Calculator

This is a simple calculator to calculate annual interest rate based on the initial value, final value, duration, and compounding frequency (per year.)

<!-- more -->

## Annual Interest Rate Calculator

| Label | Input |
| ----- | ----- |
| Initial Value `$` | <input type="number" id="P" placeholder="Initial Value [$]"> |
| Final Value `$` | <input type="number" id="F" placeholder="Final Value [$]"> |
| Duration `yr` | <input type="number" id="Y" placeholder="Duration [yr]"> |
| Frequency `/yr` | <input type="number" id="f" placeholder="Frequency [/yr]"> |
| Annual Interest Rate `%` | <p id="i">NaN%</p> |
<script type="text/javascript">
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
    document.getElementById('i').textContent = round(i) + '%';
}
/**
 * Add event listeners.
 */
document.getElementById('F').addEventListener('input', calculate);
document.getElementById('P').addEventListener('input', calculate);
document.getElementById('Y').addEventListener('input', calculate);
document.getElementById('f').addEventListener('input', calculate);
</script>