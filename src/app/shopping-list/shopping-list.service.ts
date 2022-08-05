
import {Subject} from "rxjs";

import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index : number) {
    return this.ingredients[index];
  }

  addIngredient(ing : Ingredient) {
    let shouldPush = true;
    this.ingredients.forEach(value => {
      if (ing.name == value.name) {
        let index = this.ingredients.indexOf(value);
        this.updateIngredient(index, new Ingredient(ing.name, this.ingredients[index].amount + ing.amount));
        shouldPush = false;
      }
    });

    if (!shouldPush) return;
    this.ingredients.push(ing);
    this.ingChanged.next(this.ingredients.slice());
  }

  addIngredients(ing : Ingredient[]) {
    ing.forEach(value => {
      this.addIngredient(value);
    })
  }

  updateIngredient(index : number, NI : Ingredient) {
    this.ingredients[index] = NI;
    this.ingChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index : number) {
    this.ingredients.splice(index, 1);
    this.ingChanged.next(this.ingredients.slice());
  }
}
