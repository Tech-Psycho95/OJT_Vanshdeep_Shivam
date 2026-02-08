import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  private auth = inject(AuthService)
  private router = inject(Router)

  user$ = this.auth.user$

  menuOpen = false
  profileMenuOpen = false
  learnMenuOpen = false
  aboutMenuOpen = false
  involvedMenuOpen = false

  activeItem = 'Home'

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }

  toggleLearnMenu() {
    this.learnMenuOpen = !this.learnMenuOpen
    this.aboutMenuOpen = false
    this.involvedMenuOpen = false
    this.profileMenuOpen = false
  }

  toggleAboutMenu() {
    this.aboutMenuOpen = !this.aboutMenuOpen
    this.learnMenuOpen = false
    this.involvedMenuOpen = false
    this.profileMenuOpen = false
  }

  toggleInvolvedMenu() {
    this.involvedMenuOpen = !this.involvedMenuOpen
    this.learnMenuOpen = false
    this.aboutMenuOpen = false
    this.profileMenuOpen = false
  }

  toggleProfileMenu() {
    this.profileMenuOpen = !this.profileMenuOpen
    this.learnMenuOpen = false
    this.aboutMenuOpen = false
    this.involvedMenuOpen = false
  }

  goToMaths() {
    document.getElementById('maths')?.scrollIntoView({ behavior: 'smooth' })
    this.learnMenuOpen = false
  }

  goToScience() {
    document.getElementById('science')?.scrollIntoView({ behavior: 'smooth' })
    this.learnMenuOpen = false
  }

  setActive(item: string) {
    this.activeItem = item
  }

  openCourse(subject: 'math' | 'science') {
    this.router.navigate(['/course', subject])
  }

  learnerDashboard() {
    this.router.navigate(['/dashboard'])
  }

  logout() {
    this.auth.logout()
  }
}
