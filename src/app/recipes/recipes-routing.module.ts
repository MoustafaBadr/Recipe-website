import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { authguargdService } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const routes: Routes = [
    { path: '', component: RecipesComponent,children:[
      { path: '',component:RecipeStartComponent},
      { path: 'new',component:RecipeEditComponent,canActivate:[authguargdService]},
      { path: ':id',component:RecipeDetailComponent},
      { path: ':id/edit',component:RecipeEditComponent,canActivate:[authguargdService]}
    ]},
  ];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule],
    providers:[authguargdService]
})
export class reciperoutingModule{

}