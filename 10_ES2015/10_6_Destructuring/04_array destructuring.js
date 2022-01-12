const students = [
    { name: 'Drake', gpa: 4.6},
    { name: 'Henrietta', gpa: 4.4},
    { name: 'Tung', gpa: 4.0},
    { name: 'Harry', gpa: 3.8},
    { name: 'Ant', gpa: 3.2}
];

// topStudent is always [0], which is Drake
// secondBest is always [1], which is Henrietta
const [topStudent, secondBest] = students;

// You can also skip [2] by using ,,
// const [topStudent, secondBest,,fourth] = students;

// Same rest logic applies here
// first = Drake
// losers = everyone else
const [firsts,...losers] = students;