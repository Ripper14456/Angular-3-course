import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  constructor(private router:Router) {}
  onLogin()
  {
    if(localStorage.getItem('user-logged-in') == 'true')
    {
      this.router.navigate(["/profile"])
    }
    else
    {
      this.router.navigate(["/login"])
    }
  }
}
