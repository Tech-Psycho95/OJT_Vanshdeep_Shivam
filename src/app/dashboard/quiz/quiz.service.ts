import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  getQuiz(subject: string) {

    if (subject === 'science') {
      return [
        { question: 'Which of these is non-living?', options: ['Dog', 'Tree', 'Rock', 'Human'], answer: 2 },
        { question: 'Plants make food using?', options: ['Respiration', 'Digestion', 'Photosynthesis', 'Evaporation'], answer: 2 },
        { question: 'Which gas is essential for breathing?', options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Hydrogen'], answer: 1 },
        { question: 'Which part of plant makes food?', options: ['Root', 'Stem', 'Leaf', 'Flower'], answer: 2 },
        { question: 'What force pulls objects toward Earth?', options: ['Magnetism', 'Friction', 'Gravity', 'Pressure'], answer: 2 },
        { question: 'Which is a source of light?', options: ['Moon', 'Mirror', 'Sun', 'Water'], answer: 2 },
        { question: 'Which organ pumps blood?', options: ['Brain', 'Lungs', 'Heart', 'Liver'], answer: 2 },
        { question: 'Which material conducts electricity?', options: ['Plastic', 'Wood', 'Copper', 'Rubber'], answer: 2 },
        { question: 'Which sense organ helps us see?', options: ['Ear', 'Eye', 'Nose', 'Skin'], answer: 1 },
        { question: 'What happens when water freezes?', options: ['Evaporates', 'Condenses', 'Solidifies', 'Melts'], answer: 2 },

        { question: 'Which gas do plants release?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'], answer: 0 },
        { question: 'Which is a renewable resource?', options: ['Coal', 'Petrol', 'Wind', 'Diesel'], answer: 2 },
        { question: 'Which planet is closest to the Sun?', options: ['Earth', 'Venus', 'Mercury', 'Mars'], answer: 2 },
        { question: 'What keeps us warm?', options: ['Light energy', 'Heat energy', 'Sound energy', 'Wind'], answer: 1 },
        { question: 'Which part protects the brain?', options: ['Ribs', 'Skull', 'Spine', 'Pelvis'], answer: 1 },
        { question: 'Which liquid is essential for life?', options: ['Oil', 'Milk', 'Water', 'Juice'], answer: 2 },
        { question: 'Which animal is a herbivore?', options: ['Lion', 'Cow', 'Tiger', 'Dog'], answer: 1 },
        { question: 'Which sense helps us smell?', options: ['Tongue', 'Eye', 'Nose', 'Ear'], answer: 2 },
        { question: 'What form of energy is electricity?', options: ['Chemical', 'Mechanical', 'Electrical', 'Heat'], answer: 2 },
        { question: 'Which object floats on water?', options: ['Stone', 'Iron nail', 'Wood', 'Coin'], answer: 2 }
      ]
    }

    // ================== MATH ==================
    return [
      { question: 'What is 480 ÷ 6?', options: ['60', '70', '80', '90'], answer: 2 },
      { question: 'Add 2.5 + 4.75', options: ['6.25', '7.25', '7.5', '8.25'], answer: 1 },
      { question: 'What is 15 × 4?', options: ['45', '50', '55', '60'], answer: 3 },
      { question: 'Subtract 900 − 475', options: ['425', '435', '415', '450'], answer: 0 },
      { question: 'What is the place value of 7 in 572?', options: ['7', '70', '700', '7000'], answer: 1 },
      { question: 'Solve: 3x = 18', options: ['3', '6', '9', '12'], answer: 1 },
      { question: 'What is 3/4 of 20?', options: ['10', '12', '15', '18'], answer: 2 },
      { question: 'Convert 2 km to meters', options: ['200', '2000', '20', '20000'], answer: 1 },
      { question: 'What is the perimeter of a square with side 5 cm?', options: ['10', '15', '20', '25'], answer: 2 },
      { question: 'What is 100 − (25 + 30)?', options: ['55', '45', '35', '40'], answer: 1 },

      { question: 'Multiply: 0.5 × 8', options: ['2', '3', '4', '5'], answer: 2 },
      { question: 'What is the next multiple of 6 after 24?', options: ['28', '30', '36', '42'], answer: 1 },
      { question: 'Solve: x − 7 = 5', options: ['10', '11', '12', '13'], answer: 2 },
      { question: 'What fraction is shaded if 3 out of 8 parts?', options: ['3/5', '3/6', '3/8', '5/8'], answer: 2 },
      { question: 'Convert 500 cm to meters', options: ['0.5', '5', '50', '500'], answer: 1 },
      { question: 'What is the area of a rectangle (l=6, b=4)?', options: ['20', '24', '10', '12'], answer: 1 },
      { question: 'Round 4.67 to nearest whole number', options: ['4', '5', '4.5', '6'], answer: 1 },
      { question: 'What is 9²?', options: ['18', '27', '81', '72'], answer: 2 },
      { question: 'Solve: 20 ÷ (5 × 2)', options: ['1', '2', '4', '5'], answer: 1 },
      { question: 'What is 3/5 as a decimal?', options: ['0.3', '0.5', '0.6', '0.8'], answer: 2 }
    ]
  }
}
