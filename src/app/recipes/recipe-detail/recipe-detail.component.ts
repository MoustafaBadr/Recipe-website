import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;
constructor(private recipeservice: RecipeService,
  private route:ActivatedRoute,
  private router:Router) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this. recipeservice.getRecipe(this.id); 
      }
    );
  }
  
  onsneding(){
    this.recipeservice.addingrediantstoshoppinglist(this.recipe.ingredients);
  }

  oneditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDelete(){
    this.recipeservice.DeleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
