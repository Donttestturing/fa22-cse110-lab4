
1. 'values added: 20' is printed by line 9

2. 'final result: 20' is printed by line 13

3. 'values added: 20' is printed by line 9

4. There is a reference error for line 13 because result is now scoped to only the if() block due to the use of let, (let is block scoped) so result is not defined when console.log is called and an error occurs

5. There is a type error which will occur on line 7, because result is now declared const, so result is immutable and cannot change its value after being given a value of 0. So, nothing is printed for line 9

6. There is a error for line 13, nothing is printed for line 13, in fact line 13 is never reached because of the type error that occurs on line 7 previously, you cannot assign a variable declared const any new values.
