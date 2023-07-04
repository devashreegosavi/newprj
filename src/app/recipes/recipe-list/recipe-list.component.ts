import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
    recipes : Recipe[] = [
      new Recipe('A Test Recipe','This is a simply Test',
      'https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
      new Recipe('A Test Recipe','This is a simply Test',
      'https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg')
    ];
    constructor(){

    }
    ngOnInit(): void {

    }
}
