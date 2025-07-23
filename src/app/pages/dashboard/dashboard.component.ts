import { Component, Input, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { CardTrofeuComponent } from "../../components/card-trofeu/card-trofeu.component";
import { CardCarrosComponent } from "../../components/card-carros/card-carros.component";
import { CommonModule } from '@angular/common';

interface Carro {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [NavBarComponent, FooterComponent, CardTrofeuComponent, CardCarrosComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  nome = localStorage.getItem('Nome');
  pontuacao = Number(localStorage.getItem('pontuacao'));
  carroEscolhidoObj: Carro | null = null;
  @Input() imagemTrofeu: string = ""
  @Input() nomeTrofeu: string = ""
  jaJogou:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      this.router.navigate(['/login']);
    }
    const carroEscolhidoString = localStorage.getItem('carroEscolhido');
    if (carroEscolhidoString) {
      this.carroEscolhidoObj = JSON.parse(carroEscolhidoString);
      this.jaJogou = true;
    } else {
      this.jaJogou = false;
    }
    if(this.pontuacao > 300 ){
      this.imagemTrofeu = 'assets/trofeu-ouro.png'
      this.nomeTrofeu = "Trófeu de Ouro"
    } else if (this.pontuacao > 100 && this.pontuacao <= 300){
      this.imagemTrofeu = 'assets/trofeu-prata.png'
      this.nomeTrofeu = "Trófeu de Prata"
    } else {
      this.imagemTrofeu = 'assets/trofeu-bronze.png'
      this.nomeTrofeu = "Trófeu de Bronze"
    }

  }

  onLogout(): void {
    localStorage.removeItem("isAuthenticated");
    this.router.navigate(['/login']);
  }
}
