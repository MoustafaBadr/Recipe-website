import { Ingrediants } from '../shared/ingrediants.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients:Ingrediants[];
    
    constructor(name: string, desc: string, imagepath: string,Ingrediants:Ingrediants[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagepath;
        this.ingredients = Ingrediants;
    }
}