import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-forms.component.html',
  styleUrl: './login-forms.component.css'
})
export class LoginFormsComponent implements OnInit {
  @Input() redirectRoute: string = '/dashboard';
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private router: Router) { }

  logarAutomaticamente: boolean = false;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      lembrar: new FormControl(false)
    });

    const auto = localStorage.getItem('autoLogin');

    if (auto === 'true') {
      const nomeSalvo = localStorage.getItem('usuario');
      const senhaSalva = localStorage.getItem('senha');

      this.loginForm.patchValue({
      nome: nomeSalvo || "",
      senha: senhaSalva || "",
      lembrar: true
      });
    }
  }


  onSubmit(): void {
    this.errorMessage = '';
    if (this.loginForm.valid) {
      const { nome, senha, lembrar } = this.loginForm.value;

      if (nome === 'ford' && senha === 'ford123'){
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('Nome', 'Carol');
        localStorage.setItem('usuario', nome);
        localStorage.setItem('senha', senha);
        if(lembrar){
          localStorage.setItem('autoLogin', 'true');
        } else {
          localStorage.setItem('autoLogin', 'false');
        }
        this.router.navigate([this.redirectRoute]);
      } else {
        this.errorMessage = 'Email ou senha incorretos. Tente novamente.';
      }


    }
  }
}
