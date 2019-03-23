import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';
import { shoppinglistService } from '../shopping-list/shopping-list.service';

import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipechanged = new Subject<Recipe[]>();
   private recipes: Recipe[]= [
        new Recipe(
            ' A test recipe','this is simply a test!',
        'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'
        ,[
            new Ingrediants('Meat',1),
            new Ingrediants('French Frise',20)
        ]),
        new Recipe(
            ' Big fat burger','what is up',
        'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'
        ,[
            new Ingrediants('Buns',5),
            new Ingrediants('French ',20)
        ])
      ];
    
      constructor(private slservice:shoppinglistService){}
      
      getRecipes(){
          return this.recipes.slice();
      }
      setRecipes(recipes: Recipe[]){
          this.recipes = recipes;
          this.recipechanged.next(this.recipes.slice());
      }

      addingrediantstoshoppinglist(ingrediant: Ingrediants[]){
          this.slservice.addingrediants(ingrediant);
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addnewRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.recipechanged.next(this.recipes.slice());
      }
      UpdateRecipe(index: number, recipe: Recipe){
          this.recipes[index] = recipe;
          this.recipechanged.next(this.recipes.slice());
      }

      DeleteRecipe(index: number){
          this.recipes.splice(index,1);
          this.recipechanged.next(this.recipes.slice());
      }
}