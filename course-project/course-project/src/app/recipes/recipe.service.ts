import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Borsch", "Really tasty borsch", "https://slivkisineta.ru/wp-content/uploads/2020/01/borshh-klasicheskij.jpg"),
    new Recipe("Ukraine borsch", "Another tasty borsch", "https://slivkisineta.ru/wp-content/uploads/2020/01/borshh-klasicheskij.jpg")
  ];
  selectedRecipe = new EventEmitter<Recipe> ();

  getRecipes() {
    return this.recipes.slice();
  }
}
