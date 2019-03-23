import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingrediants } from '../shared/ingrediants.model';
import { shoppinglistService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

  ingrediants: Ingrediants[];

  subscription:Subscription

  constructor(private shoppinglistservice: shoppinglistService) { }

  ngOnInit() {
    this.ingrediants = this.shoppinglistservice.getingrediants();
     this.subscription = this.shoppinglistservice.IngrediantChanges.subscribe(
       (ingrediant:Ingrediants[]) => {
         this.ingrediants = ingrediant;
       }
     );
  }

  oneEditItem(index: number){
this.shoppinglistservice.startedediting.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 

}
