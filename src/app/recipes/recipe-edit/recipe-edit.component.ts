import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editmode =false;
  recipeForm: FormGroup;
  constructor(private route:ActivatedRoute,
    private recipeservice: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id= +params['id'];
        this.editmode = params['id'] !=null;
        this.InitForm();
      }
    );
  }
  onAddIngrediant(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]
          ),
      })
    );
  }

  private InitForm(){
    let recipeName ='';
    let recipeImgPath ='';
    let recipeDescription ='';

    let recipeIngrediants = new FormArray([]);

    if (this.editmode){
      const recipe = this.recipeservice.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
      
      if(recipe['ingredients']){
        for(let ingrediant of recipe.ingredients){
          recipeIngrediants.push(
            new FormGroup({
              'name': new FormControl(ingrediant.name,Validators.required),
              'amount': new FormControl(ingrediant.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImgPath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngrediants
    }
    );
  }

  onDeleteIngrediant(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  onsubmit(){
    
    if(this.editmode){
      this.recipeservice.UpdateRecipe(this.id,this.recipeForm.value);
    }else{
      this.recipeservice.addnewRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
}
