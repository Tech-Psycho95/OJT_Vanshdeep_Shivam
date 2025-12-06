import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App {
  menuOpen = false;
  activeItem = 'Home';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setActive(item: string) {
    this.activeItem = item;
    if (window.innerWidth < 768) {
      this.menuOpen = false;
    }
  }

  openTopic(topic: string) {
    alert(`Opening topic: ${topic}`);
  }

  continueLesson() {
    alert('Resuming your last lesson...');
  }

  navClick(item: string) {
    alert(`${item} clicked`);
  }
}
