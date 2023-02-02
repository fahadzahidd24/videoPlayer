const play = document.querySelector('.blue');
const video = document.querySelector('video')
document.querySelector('.btn').


addEventListener('click', () => {
    if (!play.classList.contains('slide1')) {
        play.classList.add('slide1');
        video.pause();
    }
    else {
        play.classList.remove('slide1');
        video.play();

    }
})


window.addEventListener('load', () => {
    document.querySelector('.preLoader').classList.add('hidden')
})