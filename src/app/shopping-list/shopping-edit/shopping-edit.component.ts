import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingrediants } from 'src/app/shared/ingrediants.model';
import { shoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{

  @ViewChild('f') slform: NgForm;
  subscription: Subscription;
  editemode= false;
  editingItemIndex: number;
  editingItem :Ingrediants;
  constructor(private slService:shoppinglistService) { }

  ngOnInit() {
    this.subscription = this.slService.startedediting.subscribe(
      (index:number) => {
        this.editingItemIndex = index;
        this.editemode = true;
        this.editingItem =this.slService.getIngrediant(index);
        this.slform.setValue({
          name: this.editingItem.name,
          amount: this.editingItem.amount
        });
      }
    );
  }

  onAddItem(form:NgForm){
    const value = form.value;
    const newIngrediant = new Ingrediants(value.name,value.amount);
    if(this.editemode){
      this.slService.UpdatingIngrediant(this.editingItemIndex,newIngrediant);
    }else{
      this.slService.addIngrediant(newIngrediant);
    }
    this.editemode = false;
    form.reset();
  }

  onClear(){
    this.slform.reset();
    this.editemode = false;
  }
  onDelete(){
    this.slService.DeleteIngrediant(this.editingItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
