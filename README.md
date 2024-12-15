# Calculator Guide
## Hosted Application
https://actuallysilver.github.io/Calculator/
## Installation
### Requirements
**Node.js** v22.11.0 or higher (tested with v22.11.0)

**Node Package Manager** v10.9.1 or higher (tested with v10.9.1)



### Running the application locally
1. Clone the repository to your computer in command line using 
`git clone https://github.com/ActuallySilver/Calculator.git`
2. Navigate into the cloned folder using `cd Calculator` or `dir Calculator`
3. Install project dependencies using `npm install`
4. Run locally using `npm run dev` or to run tests use `npm run test`

## Assumptions
- The user will not write calculation that do not make sense e.g. `1)×5`
- The user understands what calculations make sense/are possible
## Limitations
- You cannot multiply using numbers attached to brackets e.g. `5(12)` would **not** be `60`
- Any largest number allowed is `1.7976931348623157e+308` if answer goes above will return `Infinity`
- The smallest positive number allowed is `5e-324`
- The smallest negative number allowed is `-1.7976931348623157e+308` if answer goes below will return `-Infinity`
- Decimals will not be calculated to more than 17 decimal places 
- When calculations are done, there will sometimes be floating point errors (`0.1*0.2` will result in `0.020000000000000004`)
- calculations will be accurate up to 16 characters of precision
- Divide by 0 functions will result in whole equation equaling `NaN`
- Some invalid inputs are blocked e.g. `++`, `××`, `()`
