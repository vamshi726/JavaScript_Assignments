

// let userDetailCourse ={
//     firstName:"vamshi",
//     lastName:"M",
//     role:"Student",
//     googlelogin:true,
//     courseList:[],
//     buyCourse: function (coursename){
//         this.courseList.push(coursename);
//     },
//     getCourseCount: function(){
//         return `${this.firstName} is Enrolled in ${this.courseList.length} Courses.`;
//     }

// };

// console.log(userDetailCourse.firstName);
// userDetailCourse.buyCourse("Pro Backend");
// console.log(userDetailCourse.courseList);

// userDetailCourse.buyCourse("Dockor");
// console.log(userDetailCourse.courseList);

// console.log(userDetailCourse.getCourseCount());



// //Keys

// console.log(Object.keys(userDetailCourse));

// //Values

// console.log(Object.values(userDetailCourse));

// //Checking key
// console.log(userDetailCourse.hasOwnProperty("firstName"));
// console.log(userDetailCourse.hasOwnProperty("MiddleName"));




//for in loop
//it is used to objects

// for of loop is used for array

// let userDetailCourse ={
//     firstName:"vamshi",
//     lastName:"M",
//     role:"Student",
//     googlelogin:true,
//     logincount:25
    
// };

// for(let x in userDetailCourse){
//     // console.log(x);
//     console.log(`  The key is ${x} : and value is ${userDetailCourse[x]} `);
// }





//Importand in JS

// Higher order functions
// Call Back Functions

// let isEven =(element)=>{
//     return element % 2 ==0;
// }



// let value = [2,4,6,8].every(isEven)

// console.log(value);



//Mini Program
//Function to Square
//it will multiple the squre with num
//return a number


// const callback =(n)=>{
//     return n**2;
// };

// function cube(callback,n){
//     return callback(n)*n;
// }

// console.log(cube(callback,3));







//settimeout
// event loop important

// function course(){
//     console.log("welcome to Full Stak Course");
// }
// setTimeout(course,3000);




// setTimeout(()=>{
//     console.log("welcome to Full Stak Course");
// },3000);


// //setintervel

// setInterval(()=>{
//     console.log("hello");
// },3000);



//for each loop, its a higher order function

// let arr=["hey","hai","hello","hola"];

// arr.forEach((val)=>{
//     console.log(val);
// });




// Map 
//map is also higher order function

// let number= [2,3,5,4,8,9,6]

// let store =number.map((num)=>num*num)

// console.log(store);
 


// let names=["vamshi","vardhan","hitesh","bunny"];

// let storeinarr= names.map((name)=>name.toUpperCase())

// console.log(storeinarr);



//Filter 

let animals=["lions","panda","donkey","buffalo","dog","monkey"   ];

// let store3= animals.filter((animal)=> animal.includes("ey"))
let store3= animals.filter((animal)=> animal.length ===     5)

console.log(store3);