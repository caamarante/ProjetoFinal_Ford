import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
 perguntas = [
    {
      pergunta: 'Em que ano a Ford foi fundada?',
      opcoes: ['1896', '1903', '1920', '1888'],
      resposta: '1903'
    },
    {
      pergunta: 'Qual foi o primeiro carro produzido pela Ford?',
      opcoes: ['Mustang', 'Model T', 'Model A', 'F-100'],
      resposta: 'Model T'
    },
    {
      pergunta: 'Quem fundou a Ford?',
      opcoes: ['Henry Ford', 'Thomas Edison', 'Elon Musk', 'Nikola Tesla'],
      resposta: 'Henry Ford'
    },
    {
      pergunta: 'Qual desses é um carro elétrico da Ford?',
      opcoes: ['Fiesta', 'Fusion', 'Mach-E', 'Focus'],
      resposta: 'Mach-E'
    },
    {
      pergunta: 'Qual desses é um modelo de picape da Ford?',
      opcoes: ['Civic', 'Ranger', 'Cruze', 'Corolla'],
      resposta: 'Ranger'
    }
  ];

  perguntaAtual = 0;
  pontuacao = 0;
  quizFinalizado = false;
  vidasExtras = 0;

  constructor(private router: Router) {}

  responder(opcao: string) {
    const pergunta = this.perguntas[this.perguntaAtual];
    if (opcao === pergunta.resposta) {
      this.pontuacao++;
    }

    this.perguntaAtual++;

    if (this.perguntaAtual >= this.perguntas.length) {
      this.quizFinalizado = true;
      this.calcularVidasExtras();
      this.salvarVidas();
      localStorage.setItem('quizFinalizado', 'true');
    }
  }

  calcularVidasExtras() {
    this.vidasExtras = this.pontuacao > 0 ? this.pontuacao : 0;
  }

  salvarVidas() {
    localStorage.setItem('vidasExtras', this.vidasExtras.toString());
  }

  irParaSelecaoCarro() {
    this.router.navigate(['/selectGame']);
  }
}
