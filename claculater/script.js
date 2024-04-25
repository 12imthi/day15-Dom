let result = document.getElementById("result");
let num = document.getElementById("num");
let expression = '';

function number(num) {
  console.log(num);
  expression += num;
  result.textContent = expression;
};
function operator(opr) {
  console.log(`opr`, opr);
    expression += opr;
    result.textContent = expression;
}
function cl(clr) {
  console.log(33);
  expression += clr;
  clr = '';
  result.textContent = clr;
}
function slc() {
console.log(`slice`);
expression = expression.slice(0,-1);
result.textContent=expression;
}

function equal() {
    try {
        let e = eval(expression);
        console.log(e);
        result.textContent = e;
        expression = ""; 
      } catch (error) {
        console.log("Invalid expression");
        result.textContent = "Error";
        expression = ""; 
      }
}
function tryC() {
    let val = document.getElementById('val').value;
    let demo = document.getElementById('demo')
    try {
        if (val < 18) {
          throw 'minor';
        } else {
          throw 'adult';
        }
      } catch (error) {
        if (error === 'minor') {
          demo.innerHTML = 'minor';
        } else {
          demo.innerHTML = 'adult';
        }
    }
}


// let val = 20; 

// try {
//   if (val < 18) {
//     throw 'minor';
//   } else {
//     throw 'adult';
//   }
// } catch (error) {
//   switch (error) {
//     case 'minor':
//       demo.innerHTML = 'minor';
//       break;
//     case 'adult':
//       demo.innerHTML = 'adult';
//       break;
//     default:
//       break;
//   }
// }

