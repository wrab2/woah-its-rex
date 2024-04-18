/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
function keepRunning() {
    keepRunningAudio.loop = true;
    keepRunningAudio.volume = 0.05;
    keepRunningAudio.play();
}

function changeMusicVolume(percent) {
    percent = Number(percent);
    if (!(isNaN(percent))) {
        if (percent > 100)
            percent = 100;
        keepRunningAudio.volume = 0.05 * (percent / 100);
    }
    
}


function toggleMusic() {
    if (keepRunningAudio.paused) {
        keepRunningAudio.play();
        document.getElementById("musicButton").innerHTML = "Mute Music";
    } else {
        keepRunningAudio.pause();
        document.getElementById("musicButton").innerHTML = "Unmute Music";
    }
}

function changeCanPlay(name, button) {
    let text = button.innerHTML;
    text = text.substring(text.indexOf(" "));
    if (player.settings.audioSettings[name].canPlay) {
        button.innerHTML = "Unmute" + text;
    } else {
        button.innerHTML = "Mute" + text;
    }
    player.settings.audioSettings[name].canPlay = !player.settings.audioSettings[name].canPlay;
}


function playSound(type) {
    type = type === "Imaginary" ? "Ethereal" : type;
    if (player.settings.audioSettings[type].canPlay) {
        if (player.settings.useDisguisedChills) allAudios["Antique"].play();
        else allAudios[type].play();
    }
    
}
