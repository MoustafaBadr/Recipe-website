import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { sharedModule } from '../shared/shared-module';
import { shoppinglistService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent
    ],
    imports:[
        AppRoutingModule,
        sharedModule
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent
    ],  
    providers: [
        shoppinglistService,
        RecipeService,
        DataStorageService,
        AuthService
    ],
})
export class coreModule{

}