// Your code goes here

funBusHead = document.querySelector('.logo-heading');
navBar = document.querySelector('.nav');
navItems = document.querySelectorAll('.nav-link');
headerH2 = document.querySelector('.intro h2');
allParagraphs = document.querySelectorAll('p');
allExpeditionsTitle = document.querySelectorAll('.destination h4');
footer = document.querySelector('.footer');

funBusHead.addEventListener('mouseover', function () {
    this.classList.add('funBusHead');
});

funBusHead.addEventListener('mouseleave', function () {
    this.class.remove('funBusHead');
});

navBar.addEventListener('keydown', function () {
    event.preventDefault();
    this.classList.add('navBar');
    console.log('navBar');
    this.addEventListener('animationend', myEndFunction);
});

function myEndFunction() {
    this.classList.remove('navBar');
};

navItems.forEach(node => {
    node.addEventListener('click', function (event) {
        event.preventDefault();
        event.target.style.color = "red";
    });
});

headerH2.addEventListener('drag', function (event) {
    console.log('h2 selected');
    this.style.color = "red";
});

allParagraphs.forEach(node => {
    node.addEventListener('copy', function (event) {
        alert("Get ready to copy");
    });
});

allExpeditionsTitle.forEach(node => {
    node.addEventListener('mouseover', function (event) {
        event.target.style.color = "orange";
    });
});

footer.addEventListener('contextmenu', function () {
    event.target.style.color = "aqua";
});

intro = document.querySelector('.intro');
intro.addEventListener('copy', function (event) {
    alert('Copy the Intro');
});

allParagraphs.forEach(node => {
    node.addEventListener('copy', function (event) {
        event.stopPropagation();
        alert("Copy this paragraph.");
    });
});
