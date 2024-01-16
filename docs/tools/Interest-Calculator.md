<script type="text/javascript" src="/tools/Interest-Calculator.js"></script>

This is a simple interest calculator to calculate initial value, final value, annual interest rate, or duration by rearranging the formula below. Each calculator solves for a different parameter, which are defined below.

```
F = P(1+(i/f))^(nf)
```

**Definitions**

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
| Final Value `$` | <p id="F()">N/A</p> |

## Initial Value

| Label | Input |
| ----- | ----- |
| Final Value `$` | <input type="number" id="P(F)" placeholder="Final Value [$]"> |
| Interest Rate `%` | <input type="number" id="P(i)" placeholder="Interest Rate [%]"> |
| Duration `yr` | <input type="number" id="P(n)" placeholder="Duration [yr]"> |
| Frequency `/yr` | <input type="number" id="P(f)" placeholder="Frequency [/yr]"> |
| Initial Value `$` | <p id="P()">N/A</p> |

## Annual Interest Rate

| Label | Input |
| ----- | ----- |
| Initial Value `$` | <input type="number" id="i(P)" placeholder="Initial Value [$]"> |
| Final Value `$` | <input type="number" id="i(F)" placeholder="Final Value [$]"> |
| Duration `yr` | <input type="number" id="i(n)" placeholder="Duration [yr]"> |
| Frequency `/yr` | <input type="number" id="i(f)" placeholder="Frequency [/yr]"> |
| Interest Rate `%` | <p id="i()">N/A</p> |

## Duration

| Label | Input |
| ----- | ----- |
| Initial Value `$` | <input type="number" id="n(P)" placeholder="Initial Value [$]"> |
| Final Value `$` | <input type="number" id="n(F)" placeholder="Final Value [$]"> |
| Interest Rate `%` | <input type="number" id="n(i)" placeholder="Interest Rate [%]"> |
| Frequency `/yr` | <input type="number" id="n(f)" placeholder="Frequency [/yr]"> |
| Duration `yr` | <p id="n()">N/A</p> |