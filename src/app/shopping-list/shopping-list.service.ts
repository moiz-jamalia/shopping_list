import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ing : Ingredient){
    let shouldAdd: boolean = true;
    this.ingredients.forEach(function (value) {
      if(value.name == ing.name) {
        value.amount += +ing.amount;
        shouldAdd = false;
      }
    });
    if(!shouldAdd) return;
    this.ingredients.push(ing);
    this.ingChanged.emit(this.ingredients.slice());
  }

  addIngredients(ing : Ingredient[]) {
    this.ingredients.push(...ing);
    this.ingChanged.emit(this.ingredients.slice());
  }

  doesIngredientExist(ing : Ingredient) {

  }
}
