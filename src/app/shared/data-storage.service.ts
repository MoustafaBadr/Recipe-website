import { Injectable } from '@angular/core';
import 'rxjs/Rx'

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataStorageService{

    constructor(private httpClient: HttpClient,
        private recipeservice: RecipeService,
        private authservice: AuthService){}

    storeRecipes(){
        return this.httpClient.put('https://ng-recipes-book-1aa0f.firebaseio.com/recipes.json',
        this.recipeservice.getRecipes());
    }

    getrecipes(){
        const token = this.authservice.getToken();
        return this.httpClient.get<Recipe[]>('https://ng-recipes-book-1aa0f.firebaseio.com/recipes.json?auth='+token,
        {
            observe:'body',
            responseType:'json'
        })
        .map(
            (recipes) => {
                console.log(recipes);
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
            // this should called one for the recipe that has not ingrediant
        )
        .subscribe(
           (recipes: Recipe[]) => {
               this.recipeservice.setRecipes(recipes);
           }
        );
    }
    
}