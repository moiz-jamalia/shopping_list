import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
<<<<<<< Updated upstream
=======
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
>>>>>>> Stashed changes

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
<<<<<<< Updated upstream
  @Input() recipe: Recipe;

  constructor() { }
=======
  recipe: Recipe;
  id: number;

  constructor(private recipeService : RecipeService, private route : ActivatedRoute, private router : Router) { }
>>>>>>> Stashed changes

  ngOnInit() {
  }

<<<<<<< Updated upstream
=======
  onAddToSL() {
    this.recipeService.addIngToSL(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo : this.route});
  }
>>>>>>> Stashed changes
}
