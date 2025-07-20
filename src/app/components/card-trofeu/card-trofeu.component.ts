import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-trofeu',
  imports: [],
  templateUrl: './card-trofeu.component.html',
  styleUrl: './card-trofeu.component.css'
})
export class CardTrofeuComponent {
  @Input() imagem: string = ""
  @Input() trofeu: string = ""
  @Input() pontuacao: string = ""
  @Input() legenda: string = ""
}
