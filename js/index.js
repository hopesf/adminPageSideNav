document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('#menubtn');
    const panel = document.querySelector('.panel');
    const ara = document.querySelector('.bx-search');

    menuBtn.onclick = function (){
        panel.classList.toggle("aktif");
    }

    ara.onclick = function (){
        panel.classList.toggle("aktif");
    }
});