const hamburger = document.querySelector('div.hamburger');
hamburger.addEventListener("click", toggleMenu)
const navlinks = document.querySelector('ol.navlinks');
function toggleMenu() {
    hamburger.classList.toggle('active');
    navlinks.classList.toggle('active');
}

const thumb = document.getElementById('video-thumb');
const frame = document.getElementById('video-frame');

if (thumb && frame) {
    thumb.addEventListener('click', () => {
        console.log('Play button clicked ✅');
        thumb.style.display = 'none';
        frame.src = "https://www.youtube.com/embed/sDwQBHN4jK0?autoplay=1";
        frame.style.display = 'block';
    });
} else {
    console.error('❌ Elements not found!');
};

const slides =
    document.querySelectorAll('div.slide');
const leftBtn = document.getElementById('lftbtn');
const rightBtn = document.getElementById('rgtbtn');
let currentIndex = 0;

function showSlides(index) {
    slides.forEach((slide) => {
        slide.classList.remove("one");
    });
    slides[index].classList.add("one");
}

rightBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0
    }
    showSlides(currentIndex);
});
leftBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1
    }
    showSlides(currentIndex);
});


const flex =
    document.querySelector('div#flex');
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');

let position = 0;
const slideAmount = 200;

rightArrow.addEventListener("click", ()=>{
    const maxSlide = flex.scrollWidth - flex.parentElement.offsetWidth;
    if (Math.abs(position) < maxSlide) {
        position -= slideAmount;
        flex.style.transform = `translateX(${position}px)`
        }
});
leftArrow.addEventListener("click", ()=>{
    if(position < 0){
        position += slideAmount;
        flex.style.transform = `translateX(${position}px)`
    }
});


