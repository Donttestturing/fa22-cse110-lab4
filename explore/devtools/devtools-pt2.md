
1.    
  - The bug is due to line 5 and 6, 'let num1 = document.getElementById("num1").value', and 'let num1 = document.getElementById("num2").value'. During these lines, num1 and num2 are typed as strings, and assigned the given value the user enters. This is from the document.getElementById("num*").value's which must then return a string, this makes sense because we write into the textfields, which are implicitly read as strings. As a result, when we do 'let result = num1+num2', we are concatenating 2 strings together, which is then outputted to the webpage. This is a bug, we aren't actually doing math! We can truly see this bug if we enter text into the two fields, like say 'o' and 'k', the program says the result is 'ok'.

2.    
  - We can fix it by explicitly converting document.getElementById("num1").value's and document.getElementById("num2").value's value to be a number value using the Numbers() function, now num1 and num2 after assignment will be numbers, meaning typed as numbers, and result will now correctly add them together. See fix.png.
