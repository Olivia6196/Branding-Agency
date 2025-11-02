function toggleMenu() {
    const hamburger =
        document.querySelector('.hamburger');
    const navlinks =
        document.querySelector('.navlinks');

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

// const flex =
// document.getElementById('flex');
// const left = document.getElementById('left');
// const right = document.getElementById('right');

// right.addEventListener('click', (e) => {flex.scrollBy({left:200, behaviour:'smooth' })});
// left.addEventListener('click', (e) => {flex.scrollBy({left:-200, behaviour:'smooth'})});

const track =
document.getElementById('carouselTrack')
if (track) {
    const slide =
    track.querySelectorAll('.slide');
    const totalSlide = slide.length;
    let currentSlide = 0;
function moveSlide(direction) {
        if (currentSlide < 0){
            currentSlide = totalSlide - 1; }
            else if (currentSlide >= totalSlide){currentSlide = 0}
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
    window.moveSlide = moveSlide; }
    else { console.error("carousel track element with ID 'carouselTrack' not found"); }
        } 
