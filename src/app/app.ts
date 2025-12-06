import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class AppComponent {
  private auth = inject(AuthService)

  menuOpen = false
  activeItem = 'Home'

  constructor() {
    this.auth.logout()
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }

  setActive(item: string) {
    this.activeItem = item
    if (window.innerWidth < 768) {
      this.menuOpen = false
    }
  }

  openTopic(topic: string) {
    alert(`Opening topic: ${topic}`)
  }

  continueLesson() {
    alert('Resuming your last lesson...')
  }

  navClick(item: string) {
    alert(`${item} clicked`)
  }
}
