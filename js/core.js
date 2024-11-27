/* const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for(let i=0; i < q.length; i++) {
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-opened');
        arr[i].classList.toggle('arrow-rotated');
    });
} */

    var acc = document.getElementsByClassName('accordion'); 
    var i; 
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.parentElement.classList.toggle('active');
    
            var pannel = this.nextElementSibling;
            var icon = this.querySelector('i'); // Находим иконку внутри аккордеона
            
            if (pannel.classList.contains('open')) {
                pannel.classList.remove('open'); // Убираем класс open
                icon.classList.remove('active'); // Удаляем класс active у иконки
            } else {
                pannel.classList.add('open'); // Добавляем класс open
                icon.classList.add('active'); // Добавляем класс active к иконке
            }
        });
    }

    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }
    