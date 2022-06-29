
import {Subject} from "rxjs";

import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 0, 5),
    new Ingredient('Tomatoes', 0, 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ing : Ingredient){
    let shouldAdd: boolean = true;
    this.ingredients.forEach(function (value) {
      if(value.name == ing.name) {
        value.shoppingAmount = Number(value.shoppingAmount) + Number(ing.amount);
        shouldAdd = false;
      }
    });
    if(!shouldAdd) return;
    this.ingredients.push(new Ingredient(ing.name, ing.amount, ing.amount));
    this.ingChanged.next(this.ingredients.slice());
  }

  addIngredients(ing : Ingredient[]) {
    ing.forEach(value => this.addIngredient(value));
  }
}
