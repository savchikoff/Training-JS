'use strict';

const box = document.getElementById("box"),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = ' blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';

circles[0].style.cssText = "background-color: red";

box.style.cssText = 'background-color: blue; width: 500px';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode();

div.classList.add('black');

wrapper.append(div);

// wrapper.prepend(div);

// hearts[1].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Hello world!</h1>';

// div.textContent = "Hello";

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');



