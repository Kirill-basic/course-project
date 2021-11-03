import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Borsch", "Really tasty borsch", "https://slivkisineta.ru/wp-content/uploads/2020/01/borshh-klasicheskij.jpg", [
      new Ingredient('Meat', 1),
      new Ingredient('potato', 3),
    ]),
    new Recipe("Ukraine borsch", "Another tasty borsch", "https://slivkisineta.ru/wp-content/uploads/2020/01/borshh-klasicheskij.jpg", [
      new Ingredient('Meat', 1),
      new Ingredient('potato', 4),
    ])
  ];
  selectedRecipe = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addINgredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
