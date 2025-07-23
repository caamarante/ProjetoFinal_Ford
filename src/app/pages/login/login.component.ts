import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { LoginFormsComponent } from "../../components/login-forms/login-forms.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NavBarComponent, FooterComponent, LoginFormsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private router: Router) {}
  ngOnInit(): void {
      const loginFeito = localStorage.getItem("isAuthenticated");
      if(loginFeito){
        this.router.navigate(['/dashboard']);
      }
  }

}
