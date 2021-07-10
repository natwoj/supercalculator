//on click
document.getElementById("send").addEventListener("click", ourResult);
function ourResult() 
{
  var mineOperator;
  var result;
  //taking values from operands
  var operand1 = document.getElementById("operand1").value;
  var operand2 = document.getElementById("operand2").value;

  //taking operator type number or string 
	var operandType1 = document.getElementById("operand-type1");
  var operandType2 = document.getElementById("operand-type2");

	// operand type value
  var operandValue1 = operandType1.value;
  var operandValue2 = operandType2.value; 

	//operator arythmetic, comparison etc. 
  var allOperators = document.getElementByName("operator")
  
  //operands conversion 
  switch (operandValue1) {
  case "string":
  	operand1 = String("operand1");
  	break;
  case "number":
  	operand1 = Number("operand1");
    break;
  }
  switch (operandValue2) {
  case "string":
  	operand2 = String(operand2);
    break;
  case "number":
  operand2 = Number(operand2);
  break;
  }
  // go through all operators and give me checked
  for (var i = 0, operatorsNumber = allOperators.length; i < operatorsNumber; i++)
  { 
    if (allOperators[i].checked) {
      mineOperator = allOperators[i].value;
      //make operation depends on operator
      switch (allOperators[i].value) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
         result = operand1 * operand2;
        break;
        case "/":
        result = operand1 / operand2;
        break;
        case "%":
        result = operand1 % operand2;
        break;
        case "concatenation":
        result = operand1 + operand2;
        mineOperator = "+";
        break;
        case "==":
        result = operand1 == operand2;
        break;
        case "===":
        result = operand1 === operand2;
        break;
        case "!=":
        result = operand1 != operand2;
        break;
        case "!==":
        result = operand1 !== operand2;
        break;
        case ">":
        result = operand1 > operand2;
        break;
        case ">=":
        result = operand1 >= operand2;
        break;
        case "<":
        result = operand1 < operand2; 
        break;
        case "<=":
        result = operand1 <= operand1;
        break; 
      }
      break;
    } 
  }
  // "action" on screen 
  if (typeof(operand1) === "string"){
    operand1 = '"' + operand1 + '"';
  }
  if (typeof(operand2) === "string"){
    operand2 = '"' + operand2 + '"';
  }
  document.getElementById("action").innerHTML = operand1 + mineOperator + operand2;
  // result on screeen as "You result is"
  getElementById("result").innerHTML = result;
}


