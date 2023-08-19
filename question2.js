function evalNumbers(num1, num2, operation) {

    if(operation == "+"){
      console.log(`operation is "add"`)
    }
    else if(operation == "-"){
      console.log(`operation is "subtract"`)
    }
    else if(operation == "*"){
        console.log(`operation is "multiply"`)
    }
    else if(operation == "/"){
        console.log(`operation is "divide"`)
    }
    else if(operation == "%"){
        console.log(`operation is "modulus"`)
    }
    else{
       console.log(`Invalid operation`)    
    }
  }
  
  evalNumbers(8,10,"+") 
  evalNumbers(30,8,"-") 
  evalNumbers(2,4,"*") 
  evalNumbers(35,7,"/") 
  evalNumbers(13,3,"%") 
  evalNumbers(2,3,"**") 