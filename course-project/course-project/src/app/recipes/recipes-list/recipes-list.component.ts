import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Borsch", "Really tasty borsch", "https://slivkisineta.ru/wp-content/uploads/2020/01/borshh-klasicheskij.jpg"),
    new Recipe("Ukraine borsch", "Another tasty borsch", "https://slivkisineta.ru/wp-content/uploads/2020/01/borshh-klasicheskij.jpg")
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
