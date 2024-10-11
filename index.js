document.getElementById('main').addEventListener('mousemove', (e) => {
    gsap.to('#cursor', {
        x: e.clientX,
        y: e.clientY,
    });
});
window.addEventListener('click', function () {
    var audio = document.getElementById("bg_noise");
    audio.play();
})
function load() {
    document.getElementById('cursor').style.display = 'block';
    document.getElementById('Loader').style.display = 'none';
    document.getElementById('main').style.display = 'block';

    let credits = document.createElement('div');
    credits.innerText = 'Made By Shashwat Singh, VII-E';
    credits.setAttribute('id', 'credits');
    document.getElementById('main').append(credits);

    gsap.fromTo('#main', { opacity: 0 }, { opacity: 1 });
    
    setTimeout(() => {
        credits.style.opacity = 0;
    }, 3000);
}

let house = [
    'Ravenclaw',
    'Gryffindor',
    'Slytherin',
    'Hufflepuff'
];

function sortStudent() {
    let studentNum = Math.floor(Math.random() * 4);
    let name = document.getElementById('nameOfStudent').value;
    let houseStudent = house[studentNum];
    let popUpStudent = document.getElementById('Sorted');
    document.getElementById('name').innerText = name;
    document.getElementById('house').innerText = houseStudent + '!';
    if (houseStudent == 'Ravenclaw') {
        document.getElementById('emblem').innerHTML = '<img src="ravenclaw.jfif" alt="">'
    } if (houseStudent == 'Gryffindor') {
        document.getElementById('emblem').innerHTML = '<img src="gryffindor.jfif" alt="">'
    } if (houseStudent == 'Slytherin') {
        document.getElementById('emblem').innerHTML = '<img src="Slytherin.jfif" alt="">'
    } if (houseStudent == 'Hufflepuff') {
        document.getElementById('emblem').innerHTML = '<img src="hufflepuff.jfif" alt="">'
    }
    popUpStudent.style.scale = 1;
    const applaudingNoises = new Audio('cheer.mp3');
    applaudingNoises.play();
    document.getElementById('Frills').style.display = 'block';
    gsap.to('#Frills', {
        y: 488,
        duration: 3,
        display: 'none'
    });
}

window.onload = load;
