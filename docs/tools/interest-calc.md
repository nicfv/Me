<script type="text/javascript" src="/tools/interest-calc.js"></script>

# Interest Calculator

This is a simple calculator to calculate annual interest rate based on the initial value, final value, duration, and compounding frequency (per year) using the formula below. Each calculator solves for a different parameter, which are defined below.

```
F = P(1+(i/f))^(nf)
```

#### Definitions

| Variable | Definition | Unit |
| -------- | ---------- | ---- |
| `F` | Final/future value | `$` |
| `P` | Initial/present value | `$` |
| `i` | Annual interest rate | `%` |
| `f` | Compound frequency | `/yr` |
| `n` | Duration in years | `yr` |

## Final Value

| Label | Input |
| ----- | ----- |
| Initial Value `$` | <input type="number" id="F(P)" placeholder="Initial Value [$]"> |
| Interest Rate `%` | <input type="number" id="F(i)" placeholder="Interest Rate [%]"> |
| Duration `yr` | <input type="number" id="F(n)" placeholder="Duration [yr]"> |
| Frequency `/yr` | <input type="number" id="F(f)" placeholder="Frequency [/yr]"> |
| Final Value `$` | <p id="F()">NaN%</p> |

## Initial Value

| Label | Input |
| ----- | ----- |
| Final Value `$` | <input type="number" id="P(F)" placeholder="Final Value [$]"> |
| Interest Rate `%` | <input type="number" id="P(i)" placeholder="Interest Rate [%]"> |
| Duration `yr` | <input type="number" id="P(n)" placeholder="Duration [yr]"> |
| Frequency `/yr` | <input type="number" id="P(f)" placeholder="Frequency [/yr]"> |
| Final Value `$` | <p id="P()">NaN%</p> |

## Annual Interest Rate

| Label | Input |
| ----- | ----- |
| Initial Value `$` | <input type="number" id="i(P)" placeholder="Initial Value [$]"> |
| Final Value `$` | <input type="number" id="i(F)" placeholder="Final Value [$]"> |
| Duration `yr` | <input type="number" id="i(n)" placeholder="Duration [yr]"> |
| Frequency `/yr` | <input type="number" id="i(f)" placeholder="Frequency [/yr]"> |
| Interest Rate `%` | <p id="i()">NaN%</p> |