import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  private auth = inject(AuthService);
  private router = inject(Router);

  login() {
    this.auth.loginWithGoogle()
      .then(result => {
        console.log("Google login success:", result);
        this.router.navigate(['/dashboard']);  // ⭐ REDIRECT AFTER LOGIN
      })
      .catch(err => {
        console.error("Google login failed:", err);
      });
  }
}
