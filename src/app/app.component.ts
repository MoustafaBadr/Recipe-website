import { Component, OnInit } from '@angular/core';
import * as firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBf6l5uY5XsymSQjPM_-0HZeqwZduOY9c8",
    authDomain: "ng-recipes-book-1aa0f.firebaseapp.com"
    });
  }
  loadedFeature = 'recipe';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
