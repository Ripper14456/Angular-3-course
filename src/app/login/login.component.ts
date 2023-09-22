import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username = '';
  password : any;

  constructor(private router : Router) {}
  ngOnInit() {}
  onSubmit()
  {
    if(this.username == 'Admin' && this.password == 12345)
    {
      localStorage.setItem('user-logged-in', 'true');
      this.router.navigate(["/profile"]);
    }
    else
    {
      alert("Ім'я або пароль введені неправильно");
    }

  }
}
