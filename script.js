var stack = [];
    
function reset() {
	document.getElementById("textbox").value = '';
	document.getElementById("textbox_full").value = '';
	stack = [];
}

function num(val) {
	var obj_full = document.getElementById("textbox_full");
	obj_full.value += val.value;	
	var obj = document.getElementById("textbox");
	obj.value += val.value;	
}

function operator(obj) {
	if(obj.value == "=") {
		if(document.getElementById("textbox").value.trim().length > 0) {
			stack.push(document.getElementById("textbox").value);
		}
		calculate();
	} else {
		// alert(JSON.stringify(stack));
		if(document.getElementById("textbox").value.trim().length > 0) {
			stack.push(document.getElementById("textbox").value);
		}

		if(stack.length - 1 > 0 && isAnOperator(stack[stack.length - 1])) {
			stack[stack.length- 1] = obj.value;
			document.getElementById("textbox_full").value = 
				document.getElementById("textbox_full").value.substring(0, document.getElementById("textbox_full").value.length - 1) +
				obj.value;
		} else {				
			stack.push(obj.value);
			document.getElementById("textbox_full").value = document.getElementById("textbox_full").value + obj.value;
			document.getElementById("textbox").value = "";
		}
	}
}

function calculate() {
	// alert(JSON.stringify(stack));
	var output = 0;
	for(i = 0; i < stack.length; i+=2) {
		//alert("val currently at i (" + i + "): " + stack[i]);
		if(i > 0) {
			output = compute(stack[i-2], stack[i-1], stack[i]);
			stack[i] = output;
		//alert("val currently at i (" + i + "): " + stack[i]);

			//alert("op is " + op);
		}
	 }

	 document.getElementById("textbox").value = output;
	  stack = [];
}

function isAnOperator(a) {
	var operators = ["+","-","/","*","."];
	var isOperator = false;

	for(i = 0; i < operators.length; i++) {
		if(a === operators[i]) {
			isOperator = true;
			break;
		}
	}

	return isOperator;
}
        
function compute(a,op,b) {
	switch(op) {
		case "+": 
	  		return parseFloat(a) + parseFloat(b); 
	  	break;
	  	case "-": 
	  		return parseFloat(a) - parseFloat(b); 
	  	break;
	  	case "*": 
	  		return parseFloat(a) * parseFloat(b);
	  	break; 
	  	case "/": 
	  		return parseFloat(a) / parseFloat(b); 
	  	break;
	}
}



 /*function getval(val) {
	var obj = document.getElementById("textbox");
	if(check(val.value, obj.value)){
		obj.value += val.value;
	}
}

function reset() {
    document.getElementById("textbox").value = '';
}

function calculate() {
	document.getElementById("textbox").value = eval(document.getElementById("textbox").value);
}

function check(val, obj){
var _last = obj.substr(obj.length -1,1);
//alert(val);
if((val=="*"||val=="+"||val=="-"||val=="/"||val==".") && _last == val){return false;}
else{return true;}
}
/*function erase (){
	if (document.getElementById("textbox").value.contains("*"||"+"||"-"||"/")){
eval(document.getElementById("textbox").value='');
	}*/

