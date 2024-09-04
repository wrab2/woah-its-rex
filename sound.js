function keepRunning() {
    keepRunningAudio.currentTime = 0;
    keepRunningAudio.loop = true;
    keepRunningAudio.volume = 0.05;
    changeMusicVolume(player.settings.musicSettings.volume)
    keepRunningAudio.play();
}

function changeMusicVolume(percent) {
    if (player.settings.useNewMusic) {changeNewMusicVolume(percent); return;}
    percent = Number(percent);
    if (!(isNaN(percent))) {
        if (percent > 100)
            percent = 100;
        keepRunningAudio.volume = 0.05 * (percent / 100);
        player.settings.musicSettings.volume = percent;
    }
}
function changeNewMusicVolume(percent) {
    percent = Number(percent);
    if (!(isNaN(percent))) {
        if (percent > 100)
            percent = 100;
        for (let song in musicPlayer.songs) {
            musicPlayer.songs[song].src.volume = musicPlayer.songs[song].baseVolume * (percent / 100);
            player.settings.musicSettings.volume = percent;
        }
        
    }
}


function toggleMusic() {
    if (!player.settings.musicSettings.active) {
        if (player.settings.useNewMusic) {
            if (musicPlayer.currentSong !== "") {
                musicPlayer.songs[musicPlayer.currentSong].src.play();
            } else selectSong();
        } else {
            keepRunningAudio.play();
            keepRunningAudio.loop = true;
        }
        document.getElementById("musicButton").innerHTML = "Mute Music";
        player.settings.musicSettings.active = true;
    } else {
        if (player.settings.useNewMusic && musicPlayer.currentSong !== "") {
            if (musicPlayer.currentSong !== "") {
                const editingSong = musicPlayer.songs[musicPlayer.currentSong].src;
                editingSong.pause();
            }
        } else {
            keepRunningAudio.pause();
            keepRunningAudio.loop = false;
        }
        document.getElementById("musicButton").innerHTML = "Unmute Music";
        player.settings.musicSettings.active = false;
    }
}
function switchMusicType() {
    if (player.settings.useNewMusic) {
        player.settings.useNewMusic = false;
        if (musicPlayer.currentSong !== "") {
            const editingSong = musicPlayer.songs[musicPlayer.currentSong].src;
            editingSong.pause();
        }
        if (player.settings.musicSettings.active) keepRunningAudio.play();
        changeMusicVolume(player.settings.musicSettings.volume);
        document.getElementById("newMusic").style.backgroundColor = "#FF3D3D";
        keepRunningAudio.loop = true;
    } else {
        player.settings.useNewMusic = true;
        keepRunningAudio.pause();
        if (player.settings.musicSettings.active) {
            if (musicPlayer.currentSong !== "") {
                const editingSong = musicPlayer.songs[musicPlayer.currentSong].src;
                editingSong.play();
            } else selectSong();
        }
        changeMusicVolume(player.settings.musicSettings.volume);
        document.getElementById("newMusic").style.backgroundColor = "#6BC267";
        keepRunningAudio.loop = false;
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


function playSound(type, special) {
    oldType = type;
    if (special === "catgirl") {osaka.currentTime = 0; osaka.play();}
    else if (player.settings.audioSettings[type].canPlay) {
        if (player.settings.useDisguisedChills) {
            allAudios["Antique"].currentTime = 0;
            allAudios["Antique"].play();
        } else {
            allAudios[type].currentTime = 0;
            allAudios[type].play();
        } 
    }
    
    if ((player.settings.doSpawnEffects && oreInformation.tierGrOrEqTo({"tier1":type, "tier2": "Interstellar"}) && (player.currentEffect === '' ? true : (oreInformation.tierGrOrEqTo({"tier1":type, "tier2":player.currentEffect})))) && messageIncluded(type)) {
        let timeoutAmt = 0;
        if (document.getElementById("blockContainer").style.animation !== "") {
            document.getElementById("blockContainer").style.animation = "";
            //timeoutAmt = 10;
        }
        if (document.getElementById("blockDisplay").style.animation !== "")
            document.getElementById("blockDisplay").style.animation = "";
        type = oldType;
        setTimeout(() => {
            document.getElementById("blockContainer").style.animation = oreInformation.getEffectByTier(type); 
            let shakeReps = 4;
            if (type === "Polychromatical") shakeReps = 8;
            document.getElementById("blockDisplay").style.animation = `shake 0.5s linear ${shakeReps}`;
            player.currentEffect = type;
        }, timeoutAmt);
    }
 }
addEventListener("animationend", (event) => {
    if (event.target.id === "blockContainer") document.getElementById("blockContainer").style.animation = "";
    if (event.target.id === "blockDisplay") {document.getElementById("blockDisplay").style.animation = ""; document.getElementById("blockDisplay").style.rotate = `0deg`}
    player.currentEffect = "";
});

const musicPlayer = {
    songs : {
        "song1" : {baseVolume: 0.05, src: "1"},
        "song2" : {baseVolume: 0.05, src: "1"},
        "song3" : {baseVolume: 0.05, src: "1"},
        "song4" : {baseVolume: 0.15, src: "1"}
    },
    currentSong : ""
}
function selectSong() {
    for (let property in musicPlayer.songs) if (!musicPlayer.songs[property].src.paused) {
        const editingSong = musicPlayer.songs[property].src;
        editingSong.onended = "";
        editingSong.pause();
        editingSong.currentTime = 0;
    }
    let selectedSong = musicPlayer.currentSong;
    while (selectedSong === musicPlayer.currentSong) selectedSong = `song${Math.round((Math.random() * 3)) + 1}`;
    musicPlayer.currentSong = selectedSong;
    const song = musicPlayer.songs[selectedSong].src;
    song.currentTime = 0;
    song.play();
    song.onended = (event) => {
        selectSong();
    };
}
