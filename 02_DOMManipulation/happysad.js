function toggleAllTodos() {
    const todos = document.querySelectorAll('li');

    for(let li of todos) {
        li.classList.toggle('completed');
    }
}

const h1 = document.querySelector('h1');

setInterval(function(){
    if(h1.classList.contains('big')) {
        h1.innerText = "SAD";
    } else {
        h1.innerText = "HAPPY";
    }
    h1.classList.toggle('big'); // if has big, toggle on, otherwise toggle off
    h1.classList.toggle('small'); // if has small, toggle on, otherwise toggle off
},1000)