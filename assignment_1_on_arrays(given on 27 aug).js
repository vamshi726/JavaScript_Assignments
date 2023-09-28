// -------------------------------------- type of datatypes in js--------------------------------------//

var name="vamshi";

var isLightOn=true;

var age=50;

var sky=undefined;

var zero=null;

console.log(typeof(name));
console.log(typeof(isLightOn));
console.log(typeof(age));
console.log(typeof(sky));
console.log(typeof(zero));



// ------------------------------------interploation in js--------------------------------------//

var firstName="vamshi";

var lastName="M";

var status="single";

var country="india"

var age="22"

console.log(
    `
    my name is ${firstName +" "+ lastName}
    my martial status is ${status}
    my country is ${country}
    my age is ${age}


    `
);



// --------------------------------------  Upper Case Method  --------------------------------------//


var country = "India"

console.log(country.toUpperCase());



// --------------------------------------  Includes Method  --------------------------------------//

var language = "Javascript";

console.log(language.includes("a"));

console.log(language.includes("n"));




// --------------------------------------  Arraay Split Method  --------------------------------------//




var animals = "Lion dog pig monkey";


var vechiles = "Car,bike,auto,bus,truck";

var letters=animals.split(" ");

var letters2 = vechiles.split(",");

console.log(letters);

console.log(letters2);

var socialmedia= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

var arrayOfSocialMedia= socialmedia.split(",");

console.log(arrayOfSocialMedia[1]);


console.log('\n'+arrayOfSocialMedia);

 


// -------------------------------------- 7. Last Index of Method  --------------------------------------//



var paragraph ='The Elephant is very big animal in forest. It is very Joyful';

var searchTerm = 'is';

console.log(paragraph.lastIndexOf(searchTerm));





// --------------------------------------  7.2 first Index of Method with 2 parameters --------------------------------------//


var para = 'You cannot end a sentence with because because because is a conjunction'

console.log(para.lastIndexOf("a",17)); // here second parameter is last range to find.  
                                        // in this case from 0 to 17th only a is searched. 
                                        //if that not present it return -1



// -------------------------------------- 8. Search  Method--------------------------------------//



var para = 'You cannot end ap sentence with because because because is a conjunction'


console.log(para.search("ap"));  //the search method finds the first occurance of character





// -------------------------------------- 9. Trim  Method--------------------------------------//


 
var sentence ='    alice and bob . are very good friends a   ';


var sentence ='    alice and bob . are very good friends   a   ';

console.log(sentence.trim());

console.log(sentence.trim().concat("hello"));





// -------------------------------------- 10. truthy and falsy values--------------------------------------//




var num =5;

console.log(num ==5);

console.log(num !=="5"); //false





// -------------------------------------- 11.predict the output--------------------------------------//




console.log( 4 > 3     );
console.log( 4 >= 3    );
console.log( 4 < 3     );
console.log( 4 <= 3    );
console.log( 4 == 4    );
console.log( 4 === 4   );
console.log( 4 != 4    );
console.log( 4 !== 4   );
console.log( 4 != '4'  );
console.log( 4 == '4'  );
console.log( 4 === '4' );   


// outputs

true
true
false
false
true
true
false
false
false
true
false

var str="python"

var str2= "jargon"

let strlen1=str.length;
let strlen2=str2.length;


console.log(strlen1 != strlen2);






// -------------------------------------- 12.  Date Method --------------------------------------//

var now = new Date;

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

//- Find out the numbers of seconds elapsed from January 1, 1970 to now.

const oldDate = new Date("1970-01-01");
console.log(oldDate);


let nowSeconds = oldDate.getSeconds()-now.getSeconds();

console.log(nowSeconds);



//-------------------------------------- 13. Find Area of traingle --------------------------------------//



let base=20;
let height=30;


function findArea(base,height){
    var area = 0.5*base*height;

    return area
}


console.log("The area of triangle is "+ findArea(base,height));





//-------------------------------------- 14. Find slope --------------------------------------//

function findSlope(x1,x2,y1,y2){

    if (x1-x2 ===0){
        console.log('the slope is undefined');
        return -1;
    }
    var mtop=x2-x1;
    var mbot=y2-y1;
    var ans= mbot/mtop;

    return ans;
}


let x1=3,x2=2,y1=6,y2=10;


console.log("the slope is: "+findSlope(x1,x2,y1,y2));




// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


const pi=3.14;

var radius= 23;

function findArea(radius){

    return pi*radius*radius;
}

console.log('The area of circle is :'+ findArea(radius));


// 17. Create a human readable time format using the Date time object--------------------//

// - YYYY-MM-DD HH:mm

var now = new Date();

console.log(`
    - ${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMilliseconds()}

`);

 

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.


var age=17; //prompt("Enter your age:")

if (age>=18){
    console.log("You are old enough to drive");
}else{
    console.log(`
    Wait ${18-age} year to drive.
    `);
}





// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


let num =33;

if(num%2==0){
    console.log("its even");
}else{
    console.log("odd num");
}





// 20. Write a code which can give grades to students according to theirs scores:

// - 80-100, A

// - 70-79, B

// - 60-69, C

// - 50-59, D

// - 0-49, F

let score =55;

if( score >= 80 && score <=100){
    console.log( "A");
} else if( score >= 70 && score <=79){
    
    console.log( "B");
}
else if( score >= 60 && score <=69){
    
    console.log( "C");
}
else if( score >= 50 && score <=59){
    
    console.log( "D");

} else{
    console.log("FAIL");
}






// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// - September, October or November, the season is Autumn.

// - December, January or February, the season is Winter.

// - March, April or May, the season is Spring

// - June, July or August, the season is Summer



let season = "february";
season =season.toUpperCase(); 


let Autumn =["SEPTEMBER", "OCTOBER" , "NOVEMBER"]
let Winter =[ "DECEMBER", "JANUARY", "FEBRUARY"]
let Spring =["MARCH", "APRIL", "MAY"]
let Summer =["JUNE", "JULY" ,"AUGUST"]

if(Autumn.includes(season)){
    console.log("Autumn");
}

if(Winter.includes(season)){
    console.log("Winter");
}

if(Spring.includes(season)){
    console.log("Spring");
}

if(Summer.includes(season)){
    console.log("Summer");
}


//  22. Write a program which tells the number of days in a month.

// let now = new Date();
// let month=now.getMonth()
// let year =now.getFullYear();
// let days= new Date(year,month,0).getDate();
// console.log(days);



// 23. Write a program which tells the number of days in a month, now consider leap year.

function isLeap(yr){
    if((yr%4==0) || (yr%400==0) && (yr%100!=0)){
        return 1;
    }

else{
    return 0;
}

}

isLeap(2023);


let now = new Date();
let month=2;

let year =now.getFullYear();
if(isLeap(year) &&  month == 1){
    console.log("29 days");
}
let days= new Date(year,month,0).getDate();
console.log(days);




// 24. Create a separate countries.js file and store the countries array 
// in to this file, create a separate file web_techs.js and store the webTechs array
// in to this file. Access both file in main.js file





// 25. In the following shopping cart add, remove, edit items

// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// - add 'Meat' in the beginning of your shopping cart if it has not been already added

// - add Sugar at the end of you shopping cart if it has not been already added

// - remove 'Honey' if you are allergic to honey

// - modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat');

shoppingCart.push('Sugar');

shoppingCart.splice(shoppingCart.indexOf('Honey'),1)

console.log(shoppingCart);


// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries =["ind","us","uk"];

if(countries.includes('ent')){
    console.log("ent exists");
}else{
    countries.push("ent");
}

console.log(countries);


// 27. The following is an array of 10 students ages:

// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Sort the array and find the min and max age

// - Find the median age(one middle item or two middle  items divided by two)

// - Find the average age(all items divided by number of items)

// - Find the range of the ages(max minus min)

// - Compare the value of (min - average) and (max - average), use abs() method


// range


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


let min = Math.min(...ages);
let max = Math.max(...ages);

let range = max-min;

console.log("range is: "+range);

// averages

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let len = ages.length;

let sum = ages.reduce((acc,curr)=> acc +curr ,0);

console.log("sum is: "+sum);

console.log("length is: "+len);

console.log("Average is :"+ sum/len);



// max and min 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sortAges = ages.sort();

console.log(sortAges);

console.log("minimum is: "+Math.min(...ages));
console.log("maximum is: "+Math.max(...ages));





// median 

const ages = new [19, 22, 19, 24, 20, 25, 26, 24, 25,26 ]

let sortedAges=ages.sort();
 
let length = ages.length;
console.log("length of arr "+length);

if(length %2 ===1){
    console.log("median is odd "+ ages[Math.floor(length/2)]);
} else if(length % 2==0){
    let median =  (ages[Math.floor(length/2)]  + ages[Math.floor(length/2 -1)])/2 ;

    console.log("median is even "+ median);
    
}

 



 

// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

let range =100;
let ans =[];

function isPrime(num ){
    if(num===1 || num ==0){
        return false;
    } 
    
    else{
        for (var i=2 ; i<=Math.sqrt(num);i++){
            if(num% i===0){
                return false;
            }
        }
        return true;
    }
}

for(var i =0;i<=range;i++){ 
    if(isPrime(i)){
        ans.push(i);
    }
}
 
console.log(ans);


// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let range =100;

let allevensum=0;
let alloddsum=0;

for(let i=0;i<=100;i++){
    if(i%2==0){
        allevensum=allevensum+i;
    }
    else if(i%2 !=0){
        alloddsum=alloddsum+i;
    }
}

console.log(allevensum);
console.log(alloddsum);


// 30. Write a script which generates a random hexadecimal number.
 
function generateRandomHexadecimal() {
    // Generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();
  
    // Convert the decimal number to hexadecimal
    const randomHexadecimal = (randomDecimal * 0xffffffffffffffff).toString(16);
  
    return randomHexadecimal;
  }
  
  const randomHex = generateRandomHexadecimal();
  console.log('Random Hexadecimal Number:', randomHex);


// 31. Sort the webTechs array and mernStack array

// countries Array : https://gist.github.com/incredimike/1469814

let webTech = ["java","c","python","mysql"];

let mernStack = ["mongo","express","node","react"];

console.log(webTech.sort());
console.log(mernStack.sort());



// 32. Array Questions

// - Extract all the countries contain the word 'land' from the countries array and print it as array


let arrayOfCountries= ['England','Germany','Korea','Swezerland','India']

let arrayContainsLand = [];

for(ele of arrayOfCountries){
    if(ele.includes('land')){
        arrayContainsLand.push(ele)
    }
}

console.log(arrayContainsLand);



// - Find the country containing the hightest number of characters in the countries array

let arrayOfCountries= ['England','Germany','United States of america','Korea','Swezerland','India',];

var highestNumOfCharCountry=0;
var index=0;
for(ele of arrayOfCountries){
    if(ele.length > highestNumOfCharCountry){
        highestNumOfCharCountry = ele.length;
        index=ele;
    }
}
console.log(index);





 

// - Extract all the countries containing only five characters from the countries array and print it as array

let arrayOfCountries= ['England','Mamba','Germany','United States of america','Korea','Swezerland','India', 'gama','juma'];


let countryWithFiveChars = arrayOfCountries.filter((element)=> element.length === 5)

let countryWithFourChars =arrayOfCountries.filter((element)=> element.length === 4)

console.log(countryWithFiveChars);
console.log(countryWithFourChars);

// - Extract all the countries containing two or more words from the countries array and print it as array


let arrayOfCountries= ['England','Mamba','C','o','Germany','United States of america','Korea','Swezerland','India', 'gama','juma'];

let moreThanTwo = arrayOfCountries.filter((ele)=>ele.length>=2)

console.log(moreThanTwo);


// - Reverse the countries array and capitalize each country and stored it as an array

let arrayOfCountries= ['england','Mamba','C','o','Germany','United States of america','Korea','Swezerland','India', 'gama','juma'];

let capitalizedCountriesReverse = arrayOfCountries.map((ele)=>ele.charAt(0).toUpperCase()+ele.slice(1))

console.log(capitalizedCountriesReverse.reverse());







// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// - The same groups apply to both men and women.

// - Underweight: BMI is less than 18.5

// - Normal weight: BMI is 18.5 to 24.9

// - Overweight: BMI is 25 to 29.9

// - Obese: BMI is 30 or more




function findBMI(weight,height){
    const bmi = weight/(height*height);
    console.log(bmi);
    var ans="-1";
    if(bmi < 18.5){
        ans="Underweight";
    } else if(bmi>=18.5 && bmi<=24.9){
        ans="Normal weight";
    }else if(bmi>=25 && bmi<=29.9){
        ans = "Overweight";
    }else{
        ans="Obese"
    }


    return ans;
}

var weight =70;
var height=1.75;

console.log("The bmi is: "+findBMI(weight,height));







/////////////////////////// ai gpt //////////////////////////////////////////////////////


function calculateBMI(weightKg, heightM) {
    const bmi = weightKg / (heightM * heightM);
    return bmi;
  }

//   console.log(calculateBMI(70,1.5));
  
  function classifyWeight(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  
  // Example usage:
  const weight = 70;  // Replace with the person's weight in kilograms
  const height = 1.75;  // Replace with the person's height in meters
  
  const bmi = calculateBMI(weight, height);
  const weightClassification = classifyWeight(bmi);
  
  console.log(`BMI: ${bmi}`);
  console.log(`Weight Classification: ${weightClassification}`);
  


// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


function solveLinEquation(a,b,c,x,y){
    var ans = a*x+b*y+c;
    return ans;
}


console.log( "value of linear queation is:"+solveLinEquation(3,4,5,6,7,8));





// 35. Write a functions which checks if all items are unique in the array.


let array =["vamshi","hitesh","anurag","vamshi"];

let uniqset = new Set(array);

if (array.length == uniqset.size){
    console.log("array is unique");
}else{
    console.log("array is not unique");


}
 