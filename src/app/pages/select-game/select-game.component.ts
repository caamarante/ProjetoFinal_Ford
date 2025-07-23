import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardCarrosComponent } from "../../components/card-carros/card-carros.component";
import { CommonModule } from '@angular/common';
import { GameCarroComponent } from "../../components/game-carro/game-carro.component";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-game',
  imports: [NavBarComponent, FooterComponent, CardCarrosComponent, CommonModule, GameCarroComponent],
  templateUrl: './select-game.component.html',
  styleUrl: './select-game.component.css'
})
export class SelectGameComponent {
  jogoAcabou: boolean = false;
  carroEscolhido: any = null;

  selecionarCarro(carro: any) {
    this.carroEscolhido = carro;
    localStorage.setItem('carroEscolhido', JSON.stringify(carro));
  }

  onJogoTerminou(status: boolean) {
    this.jogoAcabou = status;
  }
}

export class SelectGameAccessGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const quizConcluido = localStorage.getItem('quizFinalizado') === 'true';

    if (quizConcluido) {
      return true;
    } else {
      return this.router.createUrlTree(['/game']);
    }
  }
}
