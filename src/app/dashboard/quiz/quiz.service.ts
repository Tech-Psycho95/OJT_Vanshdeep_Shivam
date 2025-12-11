import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizzes: any = {

    'Place Values': [
      { question: 'What is the place value of 7 in 572?', options: ['7', '70', '700', '7000'], answer: 1 },
      { question: 'Which digit is in the tens place in 984?', options: ['9', '8', '4', '0'], answer: 1 },
      { question: 'Value of 600 + 40 + 2?', options: ['642', '462', '426', '624'], answer: 0 },
      { question: 'Place value of 5 in 459?', options: ['5', '50', '500', '5000'], answer: 1 },
      { question: 'Smallest 3-digit number?', options: ['100', '101', '999', '111'], answer: 0 },
      { question: 'Largest 2-digit number?', options: ['90', '98', '99', '100'], answer: 2 },
      { question: 'Value of 300 + 20 + 1?', options: ['301', '321', '312', '231'], answer: 1 },
      { question: 'In 786, which digit is in hundreds place?', options: ['7', '8', '6', '0'], answer: 0 },
      { question: 'Which number has 5 in tens place?', options: ['452', '528', '359', '245'], answer: 3 },
      { question: 'What is the expanded form of 305?', options: ['300 + 5', '30 + 5', '300 + 50', '3 + 5'], answer: 0 }
    ],

    'Addition & Subtraction': [
      { question: '12 + 8 = ?', options: ['18', '22', '20', '24'], answer: 2 },
      { question: '50 - 25 = ?', options: ['20', '25', '30', '35'], answer: 1 },
      { question: '34 + 56 = ?', options: ['80', '90', '70', '100'], answer: 1 },
      { question: '89 - 47 = ?', options: ['32', '42', '52', '60'], answer: 1 },
      { question: '100 - 99 = ?', options: ['1', '10', '0', '11'], answer: 0 },
      { question: '45 + 20 = ?', options: ['55', '65', '75', '85'], answer: 1 },
      { question: '27 - 12 = ?', options: ['10', '12', '15', '17'], answer: 2 },
      { question: '64 + 21 = ?', options: ['75', '85', '95', '55'], answer: 0 },
      { question: '90 - 38 = ?', options: ['42', '52', '32', '40'], answer: 0 },
      { question: '14 + 19 = ?', options: ['33', '34', '32', '29'], answer: 0 }
    ],

    'Multiplication': [
      { question: '2 × 4 = ?', options: ['6', '8', '10', '12'], answer: 1 },
      { question: '5 × 7 = ?', options: ['30', '35', '40', '25'], answer: 1 },
      { question: '9 × 3 = ?', options: ['18', '27', '24', '21'], answer: 1 },
      { question: '8 × 6 = ?', options: ['42', '36', '48', '52'], answer: 2 },
      { question: '10 × 5 = ?', options: ['40', '45', '50', '55'], answer: 2 },
      { question: '11 × 2 = ?', options: ['20', '21', '22', '23'], answer: 2 },
      { question: '12 × 4 = ?', options: ['36', '46', '48', '44'], answer: 2 },
      { question: '7 × 8 = ?', options: ['45', '54', '56', '63'], answer: 2 },
      { question: '3 × 9 = ?', options: ['18', '27', '24', '21'], answer: 1 },
      { question: '6 × 6 = ?', options: ['30', '36', '42', '32'], answer: 1 }
    ],

    'Matter and Non-Matter': [
      { question: 'Which of these is matter?', options: ['Air', 'Light', 'Sound', 'Shadow'], answer: 0 },
      { question: 'Matter has…?', options: ['Mass only', 'Volume only', 'Mass & Volume', 'Neither'], answer: 2 },
      { question: 'Water is a…?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], answer: 1 },
      { question: 'Steam is…?', options: ['Solid', 'Gas', 'Liquid', 'None'], answer: 1 },
      { question: 'Ice melts at…?', options: ['0°C', '50°C', '100°C', '10°C'], answer: 0 },
      { question: 'Rusting is a…?', options: ['Change in state', 'Chemical change', 'Physical change', 'Reversible change'], answer: 1 },
      { question: 'Salt dissolving in water is…?', options: ['Chemical change', 'Physical change', 'No change', 'None'], answer: 1 },
      { question: 'Air is a…?', options: ['Compound', 'Mixture', 'Element', 'Solid'], answer: 1 },
      { question: 'Oxygen is a…?', options: ['Element', 'Mixture', 'Compound', 'Solid'], answer: 0 },
      { question: 'Burning paper is…?', options: ['Reversible', 'Irreversible', 'Physical', 'None'], answer: 1 }
    ],

    'Basics of Energy': [
      { question: 'The ability to do work is called…?', options: ['Force', 'Energy', 'Power', 'Speed'], answer: 1 },
      { question: 'The sun is a source of…?', options: ['Solar energy', 'Wind energy', 'Nuclear energy', 'Chemical energy'], answer: 0 },
      { question: 'Energy cannot be…?', options: ['Created', 'Destroyed', 'Both', 'None'], answer: 2 },
      { question: 'Which is kinetic energy?', options: ['Running boy', 'Book on table', 'Ball at rest', 'None'], answer: 0 },
      { question: 'Which is potential energy?', options: ['Stretched bow', 'Moving train', 'Falling stone', 'Running dog'], answer: 0 },
      { question: 'Food provides…?', options: ['Chemical energy', 'Heat energy', 'Wind energy', 'Solar energy'], answer: 0 },
      { question: 'Windmill runs on…?', options: ['Solar energy', 'Wind energy', 'Chemical energy', 'Light energy'], answer: 1 },
      { question: 'Battery stores…?', options: ['Heat energy', 'Chemical energy', 'Mechanical energy', 'Light energy'], answer: 1 },
      { question: 'Hydropower uses…?', options: ['Running water', 'Sunlight', 'Wind', 'Coal'], answer: 0 },
      { question: 'Fire gives…?', options: ['Sound energy', 'Heat & light', 'Kinetic energy', 'Nuclear energy'], answer: 1 }
    ],

    'Scientific Principles': [
      { question: 'Who discovered gravity?', options: ['Einstein', 'Newton', 'Rutherford', 'Bohr'], answer: 1 },
      { question: 'Unit of force?', options: ['Joule', 'Newton', 'Pascal', 'Volt'], answer: 1 },
      { question: 'Speed = ?', options: ['Distance × Time', 'Distance / Time', 'Time / Distance', 'Force × Mass'], answer: 1 },
      { question: 'Water boils at…?', options: ['50°C', '80°C', '100°C', '120°C'], answer: 2 },
      { question: 'Friction is a…?', options: ['Force', 'Energy', 'Gas', 'None'], answer: 0 },
      { question: 'Electric bulb works on…?', options: ['Heat energy', 'Solar energy', 'Light energy', 'Sound energy'], answer: 2 },
      { question: 'Which travels fastest?', options: ['Sound', 'Water', 'Light', 'Air'], answer: 2 },
      { question: 'Earth revolves around…?', options: ['Moon', 'Sun', 'Mars', 'None'], answer: 1 },
      { question: 'Human heart pumps…?', options: ['Air', 'Light', 'Blood', 'Energy'], answer: 2 },
      { question: 'Which is NOT a simple machine?', options: ['Lever', 'Screw', 'Wheel', 'Computer'], answer: 3 }
    ]
  };

  getQuiz(topic: string) {
    return this.quizzes[topic] || [];
  }
}
