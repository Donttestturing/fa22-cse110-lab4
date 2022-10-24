
1.    
  - The code at line 12 will print 3 to the console because i is declared var in the for loop, so i now has function scope due to the use of var.

2.    
  - The code at line 13 will print 150 to the console because 300 * (1 - 0.5) = 150. This is because discount and prices have a function scope due to being passed in, and discountedPrice is declared var as well inside the for loop block, this results in discountedPrice having a function scope, regardless of it only being declared inside the for loop.

3.    
  - The code at line 14 will print 150 to the console because round(150 * 100)/100 = 150, because finalPrice is declared at the top of the function, var actually makes no difference for finalPrice being function scoped. If we were to use let instead for finalPrice, finalPrice would be scoped to the function block anyways, because of where finalPrice is in the code. And, though discountedPrice is declared var, this is not needed for this console.log because finalPrice is assigned in the for loop as well, so we could change discountedPrice to let inside the for loop, and this code would run the same.

4.    
  - This function will return an array holding all of the now discounted prices, it will return an array that looks like this: [50, 100, 150], for this specific code, since we are discounting our given array of 3 prices by 50%.

5.    
  - The code at line 12 will cause an error, a reference error, since we used the let keyword when declaring i in the for loop, it is now block scoped. i is scoped only to the for loop block and so we cannot access it outside of the for loop block. i is not defined outside of the for loop block.

6.    
  - The code at line 13 will cause an error, a reference error, since we used the let keyword when declaring discountedPrice in the for loop, discountedPrice is only defined inside the for loop, discountedPrice is only scoped to the for loop block. Therefore, we cannot access it outside of the block where it is scoped.

7.    
  - The code at line 14 will correctly print the value of 150, this is because though finalPrice is declared with the let keyword, its scope is the entire function block because of where it is placed in the code, so it is defined and accessible. And, though i and discountedPrice are now block scoped to the for loop, they are only used within it, with finalPrice being given the value of 150 at the last loop iteration, inside the for loop block.

8.    
  - This function will return an array holding all of the now discounted prices, it will return an array that looks like this: [50, 100, 150], for this specific code, since we are discounting our given array of 3 prices by 50%. The changes from the var keyword to the let keyword make no difference for this overall code correct execution, because finalPrice is declared to have the block scope of the function, and so finalPrice is updated in the for loop with no scope issues.

9.    
  - The code at line 11 will give an error, a reference error, because due to the use of the let keyword, i is block scoped to only the for loop block. So we cannot access it outside of that block because it is not defined outside of that block.

10.    
  - The code at line 12 will output 3 to the console. This is because though we define length to be a constant, we never try to change its value after assigning it, and so we can access it with no errors and correctly output the length of the passed in array, which is 3. 

11.   
  -  This function will return an array holding all of the now discounted prices, it will return an array that looks like this: [50, 100, 150], for this specific code, since we are discounting our given array of 3 prices by 50%. This is because though discountedPrice is declared const, we are only assigning it a value once, and then pushing it onto the array, which gets returned correctly. We are never reassigning values. Also, though discounted is also declared const, it is an array, which means its reference is now constant, but the data within the array can be changed. So, there are no errors and the code runs correctly.

12.   
  - A:   student.name will give you access to the value of 'Sarah', value of name property
  - B:   student['grad year'] will give you access to the value of '2022', value of Grad Year property
  - C:   student.greeting() to call the function for the greeting property
  - D:   student['Favorite Teacher'].name to access name property for object in Favorite Teacher property in student
  - E:   student.courseLoad[0] to access array slot zero in the array of the courseLoad property of the student object

13.  Arithmatic:     
  - A:  '32', this is because integers map to their exact string representation, so 2 turns into '2' and the two strings are concatenated
  - B:   1, this is because '3' maps/converts to the integer 3, and so '3' - 2 turns into 3-2 = 1
  - C:   3, this is because null maps to the value of 0, so 3 + 0 = 3
  - D:   '3null', this is because null maps to its string representation of 'null', and the two strings are then concatenated
  - E:   4, this is because true maps to the value of 1, so 1 + 3 = 4
  - F:   0, this is because false maps to the value of 0, as does null, so 0 + 0 = 0
  - G:   '3undefined', this is because undefined maps to the string 'undefined', and the strings concatenate
  - H:   NaN, this is because '3' maps to its integer value, and undefined maps to NaN for integer values, and the result of 3 - NaN is NaN

14.  Comparison:      
  - A:   true, because '2' maps to its integer value, and 2 > 1 is true
  - B:   false, because '2' and '12' map to their integer values, and 2 < 12 is true
  - C:   true, because == does type conversion, so '2' will convert to 2 and 2 == 2 is true
  - D:   false, because === is strict comparison, which does not do type conversion, so it will compare number 2 to string '2' which are not equal
  - E:   false, because though true will be converted to 1, 1 !== 2, so the result is false
  - F:   true, because the Boolean function will output either true or false depending on its input, and Boolean(2) is a tautology, so that result is true, and so we are comparing a boolean with a boolean, there are no type conversion issues, and we compare true === true, which is true.

15.     
  -  The difference between the == and the === operators is the === operator is the strict equality comparison operator, it will not do any type conversions for the comparison. The === is the strict (typing) equality comparison operator, whereas == will compare for equality after doing any type conversion. (if needed) If you want to strictly compare two objects while considering their specific type, use ===, otherwise you can use == and use javascript's type conversion functionality. The === operator will return false if the two things are different types, no matter what.

16.     
  - Answer is in this directory, the part2-question16.js file

17.     
  - The result would be that a new array gets instantiated to [2,4,6], becoming a modification of the old array, and is returned. This is because of the nature of callbacks, for the case of receiving a function passed into another function. That outer function can now invoke the inner callback function and use it, and it would return inside the outer function, to be used. So, with each iteration of line 4, we are pushing the result of doSomething(array[i]) into newArr, which gets later returned. 

18.     
  - Answer is in this directory, the part2-question18.js file

19.     
  - The output of the code will be:
    - 1
    - 4
    - 3
    - 2
  - This is because of the setTimeout() function, which delays calling that function for the argument amount in milliseconds, so for line 3, console.log(2) will be delayed for 1 second until it is called, so all the other lines will run before line 3, and because of line 4, console.log(3) will be delayed for 0 milliseconds, but this still delays it to after the console logs of lines 2 and 5 because of setTImeout, so console.log of lines 2 and 5 will execute first, sequentially, and then line 4 console.log will execute, and then line 3 console.log will execute, as it is timed out the longest.

