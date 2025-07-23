import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-carros',
  imports: [],
  templateUrl: './card-carros.component.html',
  styleUrl: './card-carros.component.css'
})
export class CardCarrosComponent {
  @Input() imagem: string = ""
  @Input() legenda: string = ""
  @Input() carro: string = ""
  @Input() descricao: string = ""
  @Input() id: string = ""

  @Output() carroSelecionado = new EventEmitter<any>();

  selecionarCarro() {
    const carroInfo = {
      id: this.id,
      nome: this.carro,
      imagem: this.imagem,
      descricao: this.descricao
    };
    this.carroSelecionado.emit(carroInfo);
  }
}
