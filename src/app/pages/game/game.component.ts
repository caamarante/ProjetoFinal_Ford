import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardTrofeuComponent } from "../../components/card-trofeu/card-trofeu.component";

@Component({
  selector: 'app-game',
  imports: [NavBarComponent, FooterComponent, CardTrofeuComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
