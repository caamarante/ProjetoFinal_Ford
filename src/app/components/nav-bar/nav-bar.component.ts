import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(public router: Router) {}

  isGameRoute(): boolean {
    return this.router.url.includes('/game') || this.router.url.includes('/quiz') || this.router.url.includes('/selectGame');
  }

  isLoginRoute(): boolean {
    return this.router.url.includes('/login') || this.router.url.includes('/dashboard');
  }
}
