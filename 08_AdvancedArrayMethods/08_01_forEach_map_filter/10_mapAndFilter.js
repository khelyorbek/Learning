const allCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"'));

const checked = allCheckboxes.filter(function(box){
    return box.checked;
});

const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
})