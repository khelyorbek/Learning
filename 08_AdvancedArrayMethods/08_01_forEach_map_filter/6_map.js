const numbers = [21, 37, 64, 99, 142];

const negatives =
    numbers.map(function (num) {
        return num * -1;
    })

const doubles =
    numbers.map(function (num) {
        console.log(num * 2);
    })

const todos = [
    {
        id: 1,
        text: 'walk the dog',
        priority: 'high'
    },
    {
        id: 2,
        text: 'walk the cat',
        priority: 'high'
    },
    {
        id: 3,
        text: 'walk the frog?',
        priority: 'low'
    },
    {
        id: 4,
        text: 'walk the snake?',
        priority: 'very high'
    }
];

const todosText = todos.map(function(todo){
    return todo.text;
})


const links = document.querySelectorAll('a');
const arrLinks = Array.from(links);

const urls = arrLinks.map(function(a) {
    return a.getAttribute('href');
})
