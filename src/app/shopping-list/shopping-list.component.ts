import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  private ingChangeSub : Subscription;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.ingChangeSub = this.slService.ingChanged.subscribe(
      (ing : Ingredient[]) => {
        this.ingredients = ing;
      }
    );
  }

  ngOnDestroy(): void {
    this.ingChangeSub.unsubscribe();
  }
}
