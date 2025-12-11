import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  private auth = inject(AuthService);
  private router = inject(Router);

  user$ = this.auth.user$;

  menuOpen = false;
  profileMenuOpen = false;
  learnMenuOpen = false;
  aboutMenuOpen = false;
  involvedMenuOpen = false;

  activeItem = 'Home';

 

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleLearnMenu() {
    this.learnMenuOpen = !this.learnMenuOpen;
    this.aboutMenuOpen = false;
    this.involvedMenuOpen = false;
    this.profileMenuOpen = false;
  }

  toggleAboutMenu() {
    this.aboutMenuOpen = !this.aboutMenuOpen;
    this.learnMenuOpen = false;
    this.involvedMenuOpen = false;
    this.profileMenuOpen = false;
  }

  toggleInvolvedMenu() {
    this.involvedMenuOpen = !this.involvedMenuOpen;
    this.learnMenuOpen = false;
    this.aboutMenuOpen = false;
    this.profileMenuOpen = false;
  }

  toggleProfileMenu() {
    this.profileMenuOpen = !this.profileMenuOpen;
    this.learnMenuOpen = false;
    this.aboutMenuOpen = false;
    this.involvedMenuOpen = false;
  }

  

  goToMaths() {
    document.getElementById('maths')?.scrollIntoView({ behavior: 'smooth' });
    this.learnMenuOpen = false;
  }

  goToScience() {
    document.getElementById('science')?.scrollIntoView({ behavior: 'smooth' });
    this.learnMenuOpen = false;
  }

  aboutClick(item: string) {
    alert(`${item} clicked`);
    this.aboutMenuOpen = false;
  }

  involvedClick(item: string) {
    alert(`${item} clicked`);
    this.involvedMenuOpen = false;
  }

  navClick(item: string) {
    alert(`${item} clicked`);
  }

  creatorDashboard() {
    alert("Creator Dashboard clicked");
    this.profileMenuOpen = false;
  }

  learnerDashboard() {
    this.profileMenuOpen = false;
    this.router.navigateByUrl('/dashboard');
  }

  contributorDashboard() {
    alert("Contributor Dashboard clicked");
    this.profileMenuOpen = false;
  }

  preferences() {
    alert("Preferences clicked");
    this.profileMenuOpen = false;
  }

  

  continueLesson() {
    alert("Resuming your last lesson...");
  }

  openTopic(topic: string) {
    this.router.navigate(['/topic', topic, 'quiz']);
  }

  setActive(item: string) {
    this.activeItem = item;
    if (window.innerWidth < 768) {
      this.menuOpen = false;
    }
  }

  logout() {
    this.profileMenuOpen = false;
    this.auth.logout();
  }
}
