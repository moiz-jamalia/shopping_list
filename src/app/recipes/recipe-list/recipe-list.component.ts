import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('KSB', 'best School ever', 'data:image/jpeg;base64,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'),
    new Recipe('KSB', 'best School ever', 'data:image/jpeg;base64,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')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
