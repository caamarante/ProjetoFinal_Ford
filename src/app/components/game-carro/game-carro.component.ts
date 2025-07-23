import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-carro',
  imports: [CommonModule],
  templateUrl: './game-carro.component.html',
  styleUrl: './game-carro.component.css'
})

export class GameCarroComponent implements AfterViewInit, OnChanges {
  @ViewChild('gameCanvas', { static: true }) canvasRef!: ElementRef;
  @Input() carroEscolhido!: { id: string; nome: string; imagem: string;};
  @Output() jogoTerminou = new EventEmitter<boolean>();


  velocidadeY = 0;
  gravidade = 0.4;
  noChao = true;
  jogoRodando = true;

  private ctx!: CanvasRenderingContext2D;
  canvasWidth = 800;
  canvasHeight = 400;
  private carroImg = new Image();
  private bgImg = new Image();
  private carroX = 50;
  private carroY = 150;
  private carroWidth = 100;
  private carroHeight = 60;
  private coneImg = new Image();
  private coneX = 750;
  private coneY = 170;
  private coneWidth = 30;
  private coneHeight = 50;

  velocidade = 5;
  vidas = 0;
  pontuacao = 0;
  animationFrameId: number = 0;

  private bgX = 0;
  private speed = 2;

  ngAfterViewInit(): void {
    const acertos = Number(localStorage.getItem('vidasExtras'));
    this.vidas = acertos;
    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d')!;
    window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && this.noChao) {
      this.velocidadeY = -10;
      this.noChao = false;
    }
  });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['carroEscolhido'] && this.carroEscolhido?.imagem) {
      this.iniciarJogo();
    }
  }

  private iniciarJogo() {
    this.carroImg.src = this.carroEscolhido.imagem;
    this.bgImg.src = 'assets/background_jogo.png';
    this.coneImg.src = 'assets/cone.png';

    this.carroImg.onload = () => {
      this.startGameLoop();
    };
  }

  private startGameLoop() {
    const loop = () => {
      this.update();
      this.draw();
      requestAnimationFrame(loop);
    };
    loop();
  }

  private update() {
    if (!this.jogoRodando) return;
    this.velocidadeY += this.gravidade;
    this.carroY += this.velocidadeY;
    this.bgX -= this.speed;

    const chaoY = 150;
    if (this.carroY >= chaoY) {
      this.carroY = chaoY;
      this.velocidadeY = 0;
      this.noChao = true;
    }
    if (this.bgX <= -800) this.bgX = 0;
    this.coneX -= this.velocidade;
    if (this.coneX + this.coneWidth < 0) {
      this.coneX = this.canvasWidth;
      this.pontuacao += 20;
    }

    if (
      this.carroX < this.coneX + this.coneWidth &&
      this.carroX + this.carroWidth > this.coneX &&
      this.carroY < this.coneY + this.coneHeight &&
      this.carroY + this.carroHeight > this.coneY
    ) {
      this.vidas -= 1;
      this.coneX = this.canvasWidth;
      if (this.vidas <= 0) {
        this.jogoRodando = false;
        cancelAnimationFrame(this.animationFrameId);
        localStorage.setItem('pontuacao', this.pontuacao.toString());
        this.jogoTerminou.emit(true);
        localStorage.setItem('quizFinalizado', 'false');
      }
    }
  }

  private draw() {
    this.ctx.clearRect(0, 0, 800, 300);
    this.ctx.drawImage(this.bgImg, this.bgX, 0, 800, 300);
    this.ctx.drawImage(this.bgImg, this.bgX + 800, 0, 800, 300);
    this.ctx.drawImage(this.coneImg, this.coneX, this.coneY, this.coneWidth, this.coneHeight);

    this.ctx.drawImage(
      this.carroImg,
      this.carroX,
      this.carroY,
      this.carroWidth,
      this.carroHeight
    );
    this.ctx.fillStyle = 'white';
    this.ctx.font = '20px Arial';
    if (!this.jogoRodando) return;
    this.ctx.fillText('Vidas: ' + this.vidas, 20, 30);
    this.ctx.fillText('Pontuação: ' + this.pontuacao, 20, 60);
  }
}
