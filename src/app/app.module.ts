import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sharedModule } from './shared/shared-module';
import { shoppinglistModule } from './shopping-list/shoping-list-module';
import { authModule } from './auth/auth-module';
import { coreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    sharedModule,
    shoppinglistModule,
    authModule,
    coreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
