let num1 = 7;
let num2 = 8;
let result ;

/* if(num1 === num2) {
    result = num1 + num2
    }
else {
    result = num1 * num2
    }
console.log(result)
 */

switch(num1){
    case num1 === num2:
        result = num1 + num2
        break
    case num1 !== num2 && num1 > num2:
        result = num1 * num2
        break
    case num1 !== num2 && num2 > num1:
        result = num1 / num2
        break
}
console.log(result)
