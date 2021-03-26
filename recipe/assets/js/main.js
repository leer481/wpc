const recipe = {
  "@context": "https://schema.org",
  "@type": "Recipe",
  source: "https://tasty.co/recipe/microwave-chocolate-lava-cake",
  author: "by: The Tasty Team",
  cookTime: "Cooktime: 5 Minutes",
  description: "This is a super easy and quick one serving recipe for Chocolate Lava Cake that'll satisfy your dessert cravings.",
  image: "lavacake.jpeg",
  recipeIngredient: 
    "Ingredients:\n\n1/4 cup of flour\n1 teaspoon of baking powder\n2 tablespoons of sugar\n2 tablespoons of cocoa powder\n1/8 teaspoon of salt\n2 tablespoons of oil\n2 tablespoons of milk\n1 chocolate truffle\n1 scoop of vanilla ice cream, optional",

  name: "EASY CHOCOLATE LAVA CAKE",
  recipeInstructions: "Instructions:\n\n1. In a bowl, add flour, 1 tsp baking powder, 2 tbsp sugar, 2 tbsp cocoa powder, and ⅛ tsp salt and mix well.\n\n2. Then, add 2 tbsp oil and 2 tbsp milk and mix to paste.\n\n4. Transfer this mix to a microwave-friendly bowl and add a chocolate truffle in the middle.\n\n5. Heat in the microwave for about 70 seconds and then top it off with ice cream (optional) and enjoy!",
  recipeYield: "Yield: 1 serving",
}

const titleElement = document.getElementById("title");

titleElement.innerText = recipe.name;

document.getElementById("author").innerText = recipe.author;
document.getElementById("description").innerText = recipe.description;
document.getElementById("image").innerText = recipe.image;
document.getElementById("cookTime").innerText = recipe.cookTime;
document.getElementById("recipeYield").innerText = recipe.recipeYield;
document.getElementById("recipeIngredient").innerText = recipe.recipeIngredient;
document.getElementById("recipeInstructions").innerText = recipe.recipeInstructions;


