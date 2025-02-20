/* string method...................................*/
//length use character number  
let userone="hey you are the best "
console.log(userone.length);
//tolowercase touppercase...
let usertwo="hey you are the best "
console.log(usertwo.toUpperCase());
//includes works of searching ans in true false return
let userthree="hey you are the best "
console.log(userthree.includes("mus"));
//search return the index number
let userfour="hey you are the best "
console.log(userfour.search("hey"));
//match same word ka arrey bnata hai
let userfive="hey you are the best hey you are my favourite "
console.log(userfive.match(/hey/g));
//indexof 
let usersix="hey you hey  are the best hey you are my favourite "
console.log(usersix.indexOf("hey"));
//replace only one time 
let userseven="hey you hey  are the best hey you are my favourite "
console.log(userseven.replace("hey","hello"));
console.log(userseven.replace(/hey/g,"hello"));
//trim extrea space remove
let usereight="    hey you hey  are the best hey you are my favourite "
console.log(usereight.trim());
//charat char.. return 
let usernine="muskan"
console.log(usernine.charAt(3));
//charcodeat ASCII CODE
let a=String.fromCharCode(65);
console.log(a);
//concat string marge
let usertan="hey you hey are the best hey you are my favourite "
let users="hello how are you"
let b=usertan.concat(users)
console.log(b);
//split
let userones="hey you hey are the best "

console.log(userones.split(""));
//repeat..
let useroness="hello hello "

console.log(useroness.repeat(2));
//slice. starting.end point
let useronesss="hello hello "

console.log(useronesss.slice(2,7));
//tostring........
let d=89
//let e=d.toString(10)



//console.log(e+20);
console.log(d.toString()+20);











