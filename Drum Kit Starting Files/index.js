const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
    drum.addEventListener("click", playDrum);
})

window.addEventListener("keypress", (e) => {
    const key = e.key.toLowerCase();
    return playDrum(null, key);
})

function playDrum(e, drumKey = null) {
    let audio, sound;

    if (e !== null) {
        const drumKey = e.target.classList[0];
        sound = e.target.dataset.sound;
        audio = new Audio(`./sounds/${sound}.mp3`);
        audio.play();
        buttonAnimation(drumKey);
        return;
    }

    if (drumKey) {   
       sound = document.querySelector(`.${drumKey}`).dataset.sound;
       audio = new Audio(`./sounds/${sound}.mp3`);
       audio.play();
       buttonAnimation(drumKey);
    }
}

function buttonAnimation(drumKey) {
    const drum = document.querySelector(`.${drumKey}`);
    drum.classList.add("pressed");
    setTimeout(() => {
        drum.classList.remove("pressed");
    }, 100)
}