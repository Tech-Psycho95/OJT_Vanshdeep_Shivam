import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent {

  private route = inject(ActivatedRoute)
  private router = inject(Router)

  subject = 'math'

  banner = {
    title: '',
    subtitle: '',
    bg: '',
    thumbnail: ''
  }

  topics: { title: string; img: string; lessons: string }[] = []

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.subject = params.get('subject') || 'math'
      this.loadCourse(this.subject)
    })
  }

  loadCourse(subject: string) {

    if (subject === 'science') {
      this.banner = {
        title: 'Science',
        subtitle: 'The Science Classroom',
        bg: 'https://storage.googleapis.com/oppiaserver-resources/classroom/lImdNadb4MbL/assets/image/img_20251106_063835_4rbdx7d882_height_197_width_2851.png',
        thumbnail: 'https://storage.googleapis.com/oppiaserver-resources/classroom/lImdNadb4MbL/assets/thumbnail/img_20251106_063739_qdv9ofaj0e_height_150_width_179.svg'
      }

      this.topics = [
        {
          title: 'Matter and Non-Matter',
          img: 'https://storage.googleapis.com/oppiaserver-resources/topic/wkYKZeAiRiAL/assets/thumbnail/img_20250725_212639_a8i6f5qx8y_height_150_width_200.svg',
          lessons: '3 Lessons'
        },
        {
          title: 'Basics of Energy',
          img: 'https://storage.googleapis.com/oppiaserver-resources/topic/wn2VaObEbiVE/assets/thumbnail/img_20250626_184759_mcv9f6tddo_height_150_width_200.svg',
          lessons: '3 Lessons'
        },
        {
          title: 'Scientific Principles',
          img: 'https://storage.googleapis.com/oppiaserver-resources/topic/aEQ9rYeAW7GN/assets/thumbnail/img_20251106_074212_9wv0b1xptr_height_170_width_189.svg',
          lessons: '4 Lessons'
        }
      ]

    } else {
      this.banner = {
        title: 'Math',
        subtitle: 'The Math Classroom',
        bg: 'https://storage.googleapis.com/oppiaserver-resources/classroom/waVS7reheAqC/assets/image/img_20240822_164345_kjad8uotbx_height_197_width_2851.png',
        thumbnail: 'https://storage.googleapis.com/oppiaserver-resources/classroom/waVS7reheAqC/assets/thumbnail/img_20240822_164339_ifnfmh6hld_height_121_width_120.svg'
      }

      this.topics = [
        {
          title: 'Place Values',
          img: 'https://storage.googleapis.com/oppiaserver-resources/topic/iX9kYCjnouWN/assets/thumbnail/img_20200521_033202_4r4j4ljrwy_height_324_width_432.svg',
          lessons: '5 Lessons'
        },
        {
          title: 'Addition and Subtraction',
          img: 'https://storage.googleapis.com/oppiaserver-resources/topic/sWBXKH4PZcK6/assets/thumbnail/img_20200906_225251_bkvjd84p8c_height_1065_width_1420.svg',
          lessons: '7 Lessons'
        },
        {
          title: 'Multiplication',
          img: 'https://storage.googleapis.com/oppiaserver-resources/topic/C4fqwrvqWpRm/assets/thumbnail/img_20200703_022435_j83mwprxmz_height_567_width_756.svg',
          lessons: '7 Lessons'
        }
      ]
    }
  }

  startQuiz() {
    this.router.navigate(['/quiz', this.subject])
  }
}

