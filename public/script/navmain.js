
import navbar from "./navbar.js";
// console.log('saurav')

let container = document.querySelector('#navbar');

container.innerHTML = navbar();


document.querySelector('.ravbox1').addEventListener('mouseover', display);

document.querySelector('.ravbox1').addEventListener('mouseout', display1);

document.querySelector('.two1').addEventListener('mouseover', display);

    function display() {
        document.querySelector('.ravbox1').style.display = 'flex';
    }

    document.querySelector('.two1').addEventListener('mouseout', display1);

    function display1() {
        document.querySelector('.ravbox1').style.display = 'none';
    }




    document.querySelector('.ravbox2').addEventListener('mouseover', display2);

    document.querySelector('.ravbox2').addEventListener('mouseout', display3);
    //second box
document.querySelector('.two2').addEventListener('mouseover', display2);

function display2() {
    document.querySelector('.ravbox2').style.display = 'flex';
}

document.querySelector('.two2').addEventListener('mouseout', display3);

function display3() {
    document.querySelector('.ravbox2').style.display = 'none';
}

document.querySelector('#ravnavone').addEventListener('click', function() {
    window.location.href = 'http://localhost:4553/home'
})

document.querySelector('.two4').addEventListener('click', function() {
    window.location.href = 'store.html'
})

    
