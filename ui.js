"use strict"
var contentArray = document.getElementsByClassName("box");
var inputList;


for(var i = 0; i<contentArray.length; i++){
	var num1 = 0, num2 = 0
	var buttons = contentArray[i].getElementsByTagName("button")[0];

	function getInputValues(obj){
		var arr = [];
		inputList = obj.parentElement.getElementsByTagName("input");
		num1 = parseInt(inputList[0].value);
		num2 = parseInt(inputList[1].value);
		arr.push(num1, num2);
		return arr;
	}

	buttons.onclick = function(){//hier zou buttons[i] moeten staan
		var name = this.getAttribute("id");
		var holder = this.parentElement.getElementsByTagName("span")[0];
		var numbers = getInputValues(this);
		switch(name){
			case "addUp":
				holder.innerHTML = Calculator.addUp(numbers[0],numbers[1]);
			break;
			case "countdown":
				holder.innerHTML = Calculator.countDown(numbers[0],numbers[1]);
			break;
			case "multiply":
			holder.innerHTML = Calculator.multiply(numbers[0],numbers[1]);
			break;
			case "divide":
			holder.innerHTML = Calculator.divide(numbers[0],numbers[1]);
			break;
			default: null;
		}
	}
}
