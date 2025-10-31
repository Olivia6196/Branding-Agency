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

