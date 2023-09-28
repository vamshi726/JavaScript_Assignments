// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


let personAccount = {
  firstName:"Vamshi",
  lastName:"Mulg",
  incomes:[20000,40000,10000],
  expenses :[5000,9000,1500],
  totalIncome: function (){
    let sumIncomes = 0;
    sumIncomes = this.incomes.reduce((acc,curr)=> acc+curr,0);
    return sumIncomes;  
  },
  totalExpense: function (){
    
    sumExpenses = this.expenses.reduce((acc,curr)=> acc+curr,0);
    return sumExpenses;   
  },
  accountInfo: function (){ 
    console.log(`
      First Name: ${this.firstName}
      Last Name: ${this.lastName}
      Total Income: ${this.totalIncome()}
      Total Expenses: ${this.totalExpense()}


    `); 
  },

  addIncome: function (income){
    this.incomes.push(income);
  },

  addExpense: function (expense){
    this.expenses.push(expense);
  },

  accountBalance: function (){ 
    let balance = (this.totalIncome() - this.totalExpense());
    return balance;
  },  

}

console.log(personAccount.accountInfo());


// ---


    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];


//---------------------------------------------------------------//

 


// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(user){ 

  if( doesObjectExist(users,user._id)){
    console.log("failed"); 
    console.log(`Object with user Id "${user._id}" already exists.`);
  }
 else
 {
   users.push(user);

 }
}

function doesObjectExist(array, idToFind) {
  return array.some((user) => user._id == idToFind);
}


let now = new Date();
let year = now.getFullYear();
let month= now.getMonth();
let date= now.getDate();
let hour= now.getHours();
let min  =now.getMinutes(); 

let ampm = hour >= 12 ? 'PM' :'AM';
let formattedDate = date < 10 ? `0${date}` : date;
let formattedMonth = month < 10 ? `0${month}` : month;
let formattedHour = hour%12 || 12;
let formattedMinute = min < 10 ? `0${min}` : min;


let fullDateAndTime = `${formattedDate}/${formattedMonth}/${year} ${formattedHour}:${formattedMinute} ${ampm}`;

const newUser = {_id:"vamshi726",  username:"vamshi726",  email:"vamshi@gmial.com",  password:"12345Ab",  createdAt:fullDateAndTime ,  isLoggedIn:false};

const newUser2 = {_id:"vardhan826",  username:"vadhan12",  email:"vardhan@gma.com",  password:"555OP",  createdAt:fullDateAndTime ,  isLoggedIn:false};

signUp(newUser);  
signUp(newUser2);  

console.log(users);



//---------------------------------------------//
 

// b. Create a function called signIn which allows user to sign in to the application

function signIn(emailIdToSignIn,passwordToSignIn){
  if(doesEmailExist(users,emailIdToSignIn)){
      console.log("email exist");
      let user = users.find((user)=>user.email ===emailIdToSignIn);
       
       
      if(user.password === passwordToSignIn){
        user.isLoggedIn = true; 
        console.log("User login Succesful");
      } else {
        console.log("Incorrect password. Please try again.");
      }
  }else{
    console.log("User not Exist please SignUp");
  }
}
 
function doesEmailExist(array, emailToFind) {
  return array.some((user) => user.email ===emailToFind);
}


let emailIdToSignIn ='martha@martha.com';
let passwordToSignIn = '123222';


signIn(emailIdToSignIn,passwordToSignIn);

console.log(users);




// 3. The products array has three elements and each of them has six properties.


const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
      { userId: 'tester', rate: 4 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['vamshi','fg12cy',]
  }
]


// a. Create a function called rateProduct which rates the product 


 
function rateProduct(userId, productId, rating){
  const product = products.find((p)=> p._id === productId);
  // console.log("the find method returned : "+product.name);
  if(!product){
    return "Product Not Found";

  }
  //check user already rated or not

  const existingRating = product.ratings.find((er)=> er.userId == userId);

  if(existingRating){
    return "you have already rated this product";
  }

  // Add new rating to ratings array

  product.ratings.push({userId, rate:rating});

  return "Rating Submitted Succesfully.";
}




 
console.log(rateProduct('ghderc','hedfcg', 10));
console.log("-----------------------------------");
 
console.log("-----------------------------------");
console.log(products);


// b. Create a function called averageRating which calculate the average rating of a product


function averageRating(productId){

  let product = products.find((p)=> p._id === productId )
 
  if (!product) {
    console.log( 'Product not found.');
  }

  else{

 
  let len = product.ratings.length;
  console.log(len);

  //extract the ratings in ratings array
  let ratingsArr = product.ratings.map((rating)=>   rating.rate);
  console.log(ratingsArr);

  let sum = ratingsArr.reduce((acc,curr)=>acc+curr,0);
   
  console.log("Average rating is : "+ sum/len);
}

}

let productId ='eedfcf'; 
averageRating(productId );



  // 4. Create a function called likeProduct. This function will helps to like to the product
  // if it is not liked and remove like if it was liked.

function likeProduct(productId,likedUserId) {

  let product = products.find((p)=> p._id  == productId)
  
  //if not found print not found
  if(!product){
    console.log("product not found");
  }

  //if found then add like
  else{
    console.log("found : "+product.name);
    console.log(product.likes);
    let isAlreadyLiked = product.likes.includes(likedUserId);
    console.log("is already liked : "+isAlreadyLiked);


    //if already liked then remove that id to dislike it
    if(isAlreadyLiked){
      let indexOfUserId = product.likes.indexOf(likedUserId)
      // console.log(indexOfUserId);
      product.likes.splice(indexOfUserId,1)
      console.log("like removed");
    }
    else{
      product.likes.push(likedUserId);
      console.log("the like succesfully added");
    }
    console.log(product.likes);

  }
}

let productId = 'hedfcg';
let userIdToLike ='vardh';
likeProduct(productId,userIdToLike);






 


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

