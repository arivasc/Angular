import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email ;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;

  constructor() {
    console.log("Constructor working...");
    this.name = "Anthony Rivas";
    this.email = "arivasc@unsa.edu.pe";
    this.webpage = "http://www.unsa.com.pe";
    this.hobbies = ["YouTube", "Programación", "Videojuegos"];
    this.showHobbies = false;
  }
  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
}
