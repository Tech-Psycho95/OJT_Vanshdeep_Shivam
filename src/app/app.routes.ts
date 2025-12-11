import { Routes } from '@angular/router';
import { authGuard } from './auth/ath-guard';

export const routes: Routes = [

  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login').then(m => m.LoginComponent)
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard/dashboard').then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },

  {
    path: 'topic/:topic/quiz',
    loadComponent: () =>
      import('./dashboard/quiz/quiz.component').then(m => m.QuizComponent),
    canActivate: [authGuard]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  
  {
    path: '**',
    redirectTo: 'login'
  }
];
