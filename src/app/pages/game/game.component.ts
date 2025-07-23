import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardTrofeuComponent } from "../../components/card-trofeu/card-trofeu.component";
import { LoginFormsComponent } from "../../components/login-forms/login-forms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [NavBarComponent, FooterComponent, CardTrofeuComponent, LoginFormsComponent, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit{
  loginFeito = false;

  ngOnInit(): void {
    localStorage.setItem('quizFinalizado', 'false');
    const loginFeito = Boolean(localStorage.getItem("isAuthenticated"));
    this.loginFeito = loginFeito;
  }

}
