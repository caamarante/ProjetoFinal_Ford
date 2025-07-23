import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { LoginComponent } from './pages/login/login.component';
import { SelectGameComponent } from './pages/select-game/select-game.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { SelectGameAccessGuard } from './services/navigation-guard.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'login', component: LoginComponent },
  { path: 'selectGame', component: SelectGameComponent, canActivate: [SelectGameAccessGuard]  },
  { path: 'quiz', component: QuizComponent },
  { path: 'dashboard', component: DashboardComponent },

];
