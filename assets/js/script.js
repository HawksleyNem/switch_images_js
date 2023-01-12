// let text = document.querySelector('section :nth-child(2)');
let section = document.getElementById("site-content").querySelector("section");
let text = section.lastElementChild;
let img = document.querySelector('img');
console.log(text);
console.log(img);

text.addEventListener('click', function () {
    this.textContent = "Nouveau texte en italique";
    this.style.fontStyle = 'italic';
});

img.addEventListener('mouseover', function () {
    this.setAttribute("src", "/assets/images/2.jpg");
});

img.addEventListener('mouseout', function () {
    this.setAttribute("src", "/assets/images/1.jpg");
});