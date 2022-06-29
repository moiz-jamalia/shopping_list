
import {Subject} from "rxjs";

import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ing : Ingredient){
    let shouldAdd: boolean = true;
    let ingCopy : Ingredient = new Ingredient(ing.name, ing.amount);
    this.ingredients.forEach(function (value) {
      if(value.name == ing.name) {
        let sum = Number(value.amount) + Number(ingCopy.amount);
        ingCopy.amount = sum;
        shouldAdd = false;
      }
    });
    if(!shouldAdd) return;
    this.ingredients.push(ing);
    this.ingChanged.next(this.ingredients.slice());
  }

  addIngredients(ing : Ingredient[]) {
    ing.forEach(value => this.addIngredient(value));
  }
}
