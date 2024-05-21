/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
let a12 = 0;
let a13 = false;
function toSurface() {
    if (currentWorld === 1) a12++;
    if (currentWorld === 1 && a12 === 10) {
        insertIntoLayers({"ore":"🐢","layers":["paperLayer"], "useLuck":true});
        insertIntoLayers({"ore":"🐰","layers":["paperLayer"], "useLuck":true});
        a13 = true;
        document.getElementById("spawnMessage").innerText = "The air becomes hard to breathe as particle flow slows to a halt...";
        document.getElementById("teleportButton").disabled = true;
        eventSpawn.currentTime = 0;
        eventSpawn.play();
    }
    clearInterval(loopTimer);
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true})
    curDirection = "";
    mine[curY][curX] = "⚪";
    curX = 1000000000;
    if (currentWorld < 2) {
        curY = 0;
    } else {
        curY = 2001;
    }
    setLayer(curY);
    mine[curY][curX] = "⛏️";
    checkAllAround(curX, curY, 1);
    displayArea();
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset.toLocaleString() + "/" + mineCapacity.toLocaleString() + " Blocks Revealed This Reset";
}
let resetting = false;
function mineReset() {
        a12 = 0;
        caveOreLocations = [];
        mineCapacity = player.settings.baseMineCapacity;
        player.oreTracker.existingOres = [];
        removeTrackerInformation();
        displayArea();
        canMine = false;
        mine = null;
        mine = [[]];
        curX = 1000000000;
        checkAllAround(curX, curY, 1);
        mine[curY][curX] = "⛏️";
        canMine = true;
}
