import { Component, ElementRef, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { QuizService } from './quiz.service'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css']
})
export class QuizComponent {

  @ViewChild('certificateEl') certificateEl!: ElementRef

  subject = ''
  questions: any[] = []
  index = 0
  selected: any = null
  score = 0

  started = false
  completed = false

  recommendedCourse: any = null

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('subject') || 'math'
    this.questions = this.quizService.getQuiz(this.subject)
  }

  startTest() {
    this.started = true
  }

  submit() {
    if (this.selected === this.questions[this.index].answer) {
      this.score++
    }

    this.selected = null
    this.index++

    if (this.index >= this.questions.length) {
      this.finishTest()
    }
  }

  finishTest() {
    this.completed = true
    this.recommendedCourse =
      this.subject === 'math'
        ? {
            title: 'Fractions',
            lessons: '12 Lessons',
            img: 'https://storage.googleapis.com/oppiaserver-resources/topic/fractions.svg'
          }
        : {
            title: 'Basics of Energy',
            lessons: '8 Lessons',
            img: 'https://storage.googleapis.com/oppiaserver-resources/topic/energy.svg'
          }
  }

  progress() {
    return Math.round((this.index / this.questions.length) * 100)
  }

  startRecommended() {
    this.router.navigate(['/course', this.subject])
  }

  async downloadCertificate() {
    const el = this.certificateEl.nativeElement
    el.style.display = 'block'

    const canvas = await html2canvas(el, { scale: 3 })
    const img = canvas.toDataURL('image/png')

    const pdf = new jsPDF('landscape', 'mm', 'a4')
    const width = pdf.internal.pageSize.getWidth()
    const height = pdf.internal.pageSize.getHeight()

    pdf.addImage(img, 'PNG', 0, 0, width, height)
    pdf.save(`${this.subject}-certificate.pdf`)

    el.style.display = 'none'
  }
}
