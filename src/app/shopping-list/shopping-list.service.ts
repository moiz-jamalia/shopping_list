import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingChanged = new EventEmitter<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ing : Ingredient){
<<<<<<< Updated upstream
=======
    let shouldAdd: boolean = true;
    let ingCopy : Ingredient = new Ingredient(ing.name, ing.amount);
    this.ingredients.forEach(function (value) {
      if(value.name == ing.name) {
        ingCopy.amount = Number(value.amount) + Number(ingCopy.amount);
        shouldAdd = false;
      }
    });
    if(!shouldAdd) return;
>>>>>>> Stashed changes
    this.ingredients.push(ing);
    this.ingChanged.emit(this.ingredients.slice());
  }
}
