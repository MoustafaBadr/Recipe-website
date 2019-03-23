import { Subject } from 'rxjs';
import { Ingrediants } from '../shared/ingrediants.model';


export class shoppinglistService{
    IngrediantChanges = new Subject<Ingrediants[]>();
    startedediting = new Subject<number>();
private ingrediants: Ingrediants[]=[
        new Ingrediants('Appels',5),
        new Ingrediants('Tomatos',10),
      ];

      getingrediants(){
          return this.ingrediants.slice();
      }
      getIngrediant(index: number){
          return this.ingrediants[index];
      }

      addIngrediant(ingrediant: Ingrediants){
          this.ingrediants.push(ingrediant);
          this.IngrediantChanges.next(this.ingrediants.slice());
      }

      UpdatingIngrediant(index:number,ingrediant: Ingrediants){
        this.ingrediants[index] = ingrediant;
        this.IngrediantChanges.next(this.ingrediants.slice());
    }

    DeleteIngrediant(index:number){
        this.ingrediants.splice(index);
        this.IngrediantChanges.next(this.ingrediants.slice());
    }
      addingrediants(ingrediant:Ingrediants[]){
          this.ingrediants.push(...ingrediant);
          this.IngrediantChanges.next(this.ingrediants.slice());      }
}