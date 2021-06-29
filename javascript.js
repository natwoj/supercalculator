//on click
document.getElementById = "send".addEventListener("click", ourResult);
function ourResult() {
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
  	operand2 = String(operand2)
    break;
  case "number":
  operand2 = Number(operand2) 
  break;
    
  }
  
  // go through all operators and give picked
  for ()
  
  
  
  
  
  
  

}
