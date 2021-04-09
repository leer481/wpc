// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 14 below
console.log("is our script working");


// load the airtable library, call it "Airtable";
let Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key;
var base = new Airtable({ apiKey: "keyyxuPdxKx0PGmgZ" }).base(
  "app7mZodqyMiIxUNu"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("forbidden-foods").select({}).eachPage(gotPageOfFoods, gotAllFoods);

// an empty array to hold our data
var foods = [];


// callback function that receives our data
function gotPageOfFoods(records, fetchNextPage) {
  console.log("gotPageOfFoods()");
  // add the records from this page to our books array
  foods.push(...records);
  // request more pages
  fetchNextPage();
}


// call back function that is called when all pages are loaded
function gotAllFoods(err) {
  console.log("gotAllFoods()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the books
  consoleLogFoods();
  showFoods();
}

// just loop through the books and console.log them
function consoleLogFoods() {
  console.log("consoleLogFoods()");
  foods.forEach(food => {
    console.log("Food:", food);
  });
}

// look through our airtable data, create elements
function showFoods() {
  console.log("showFoods()");
  foods.forEach((food) => {

    // creating a new div container
    var foodContainer = document.createElement("div");
    foodContainer.classList.add("food-container");
    document.querySelector(".container").append(foodContainer)

        var foodName = document.createElement("h2");
    foodName.classList.add("food-name");
    foodName.innerText = food.fields.name;
    foodContainer.append(foodName);

    var foodImage = document.createElement("img");
    foodImage.classList.add("food-image");
    foodImage.src = food.fields.image[0].url;
    foodContainer.append(foodImage);

    var foodOption = document.createElement("h2");
    foodOption.classList.add("food-option");
    foodOption.innerText = food.fields.option;
    foodContainer.append(foodOption);

    var foodActualfood = document.createElement("img");
    foodActualfood.classList.add("food-actualfood");
    foodActualfood.src = food.fields.actualfood[0].url;
    foodContainer.append(foodActualfood);

    // add event listener
    // when user clicks on food container
    // new image and title will appear

    foodContainer.addEventListener("click", function(){
        foodOption.classList.toggle("active");
    })

    foodContainer.addEventListener("click", function(){
      foodActualfood.classList.toggle("active");
  })

    });
}

