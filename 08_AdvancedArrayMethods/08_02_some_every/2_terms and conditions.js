const btn = document.querySelector('button');
btn.addEventListener('click',function(e){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // converting the nodelist to an array
    const allChecked = Array.from(checkboxes).every(function(checkbox){
        return checkbox.checked;
    });
    console.log(allChecked);
})


