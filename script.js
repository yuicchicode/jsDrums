document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLocaleLowerCase());
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);

    if(audioElement) {
        audioElement.play();
    }
}