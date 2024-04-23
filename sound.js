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
    if (!player.settings.musicSettings.active) {
        keepRunningAudio.play();
        document.getElementById("musicButton").innerHTML = "Mute Music";
        player.settings.musicSettings.active = true;
    } else {
        keepRunningAudio.pause();
        document.getElementById("musicButton").innerHTML = "Unmute Music";
        player.settings.musicSettings.active = false;
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
    oldType = type;
    type = type === "Imaginary" ? "Ethereal" : type;
    if (player.settings.audioSettings[type].canPlay) {
        if (player.settings.useDisguisedChills) {
            allAudios["Antique"].currentTime = 0;
            allAudios["Antique"].play();
        } else {
            allAudios[type].currentTime = 0;;
            allAudios[type].play();
        } 
        if (player.settings.doSpawnEffects && oreInformation.tierGrOrEqTo({"tier1":type, "tier2": "Interstellar"})) {
            let timeoutAmt = 0;
            if (document.getElementById("blockContainer").style.animation !== "") {
                document.getElementById("blockContainer").style.animation = "";
                timeoutAmt = 10;
            }
            type = oldType;
            setTimeout(() => {
                document.getElementById("blockContainer").style.animation = oreInformation.getEffectByTier(type);  
            }, timeoutAmt);
        }
    }
    
}
addEventListener("animationend", (event) => {
    if (event.target.id === "blockContainer") document.getElementById("blockContainer").style.animation = "";
});
