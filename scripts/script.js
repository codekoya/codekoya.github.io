document.querySelectorAll('.navBtn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('navBtn--active');
        if(button.classList.contains('navBtn--active')){
            navLinks.getElementsByClassName.maxHeight = navLinks.scrollHeight + "px";
        }
        else{
            navLinks.getElementsByClassName.maxHeight = 0;
        }
    });
});