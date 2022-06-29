import {Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 2)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Salad', 1),
        new Ingredient('Cheese', 3),
        new Ingredient('Bacon', 4),
        new Ingredient('Onionslice', 2)
      ]
    )
  ];

  constructor(private slService : ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id : number){
    return this.recipes.slice()[id];
  }

  addIngToSL(ing : Ingredient[]) {
    this.slService.addIngredients(ing);
  }

  addRecipe(recipe : Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index : number, NR : Recipe) {
    this.recipes[index] = NR;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index : number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
