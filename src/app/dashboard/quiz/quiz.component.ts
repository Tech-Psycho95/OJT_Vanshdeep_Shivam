import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from './quiz.service';
import { AuthService } from '../../auth/auth.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css']
})
export class QuizComponent {
  @ViewChild("certificateEl") certificateEl!: ElementRef;

  topic = '';
  questions: any[] = [];
  selected: number[] = [];
  started = false;
  submitted = false;
  score = 0;
  total = 0;
  userName = '';
  date = new Date().toLocaleDateString();

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.topic = this.route.snapshot.paramMap.get('topic') || '';
    this.questions = this.quizService.getQuiz(this.topic);
    this.total = this.questions.length;
    this.selected = new Array(this.total).fill(-1);
    this.auth.user$.subscribe(user => {
      this.userName = user?.displayName || user?.email || 'Student';
    });
  }

  startQuiz() {
    this.started = true;
  }

  submitQuiz() {
    this.score = 0;
    this.questions.forEach((q, i) => {
      if (this.selected[i] === q.answer) this.score++;
    });
    this.submitted = true;
  }

  restart() {
    this.started = false;
    this.submitted = false;
    this.selected = new Array(this.questions.length).fill(-1);
  }

  async downloadCertificate() {
    const element = this.certificateEl.nativeElement;
    element.style.display = "block";
    const canvas = await html2canvas(element, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`${this.topic}_certificate.pdf`);
    element.style.display = "none";
  }
}
