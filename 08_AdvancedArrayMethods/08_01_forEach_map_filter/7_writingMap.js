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

function myMap(arr,callback) {
    const mappedArray = [];
    for(let i = 0; i<arr.length; i++){
        const val = callback(arr[i],i,arr);
        mappedArray.push(val);
    }
    return mappedArray;
}

const priMap = myMap(todos, function(todo){
    return todo.priority;
})

const repStrings = myMap(['a','b','c','d','e'],function(str,idx){
    // taking a string and repeating it idx times
    return str.repeat(idx);
})