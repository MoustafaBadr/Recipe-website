import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { reciperoutingModule } from './recipes-routing.module';
import { sharedModule } from '../shared/shared-module';


@NgModule(
    {
        declarations:[
            RecipesComponent,
            RecipeDetailComponent,
            RecipeEditComponent,
            RecipeItemComponent,
            RecipeListComponent,
            RecipeStartComponent
        ],
        imports:[
            CommonModule,
            ReactiveFormsModule,
            reciperoutingModule,
            sharedModule
        ],
    }
)
export class RecipesModule {

}