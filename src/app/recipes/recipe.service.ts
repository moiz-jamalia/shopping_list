import {Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes : Recipe[] = [];

  constructor(private slService : ShoppingListService) {}

  setRecipes(recipes : Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

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
