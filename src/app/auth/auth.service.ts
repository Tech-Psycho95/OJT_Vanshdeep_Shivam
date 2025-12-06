import { Injectable, inject } from '@angular/core'
import { Router } from '@angular/router'
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, authState, User } from '@angular/fire/auth'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth)
  private router = inject(Router)

  user$: Observable<User | null> = authState(this.auth)

  async googleSignIn(): Promise<void> {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(this.auth, provider)
    await this.router.navigateByUrl('/dashboard')
  }

  async logout(): Promise<void> {
    await signOut(this.auth)
    await this.router.navigateByUrl('/login')
  }
}
