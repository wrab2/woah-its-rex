let a12 = 0;
let a13 = false;
function toSurface() {
    lastX = 0;
    movementsX = 0;
    lastXValues = [];
    pa1 = [];
    pa2 = [];
    pa3 = [];
    pa4 = [];
    pickaxeAbility23Num = 0;
    if (currentWorld === 1) a12++;
    if (currentWorld === 1 && a12 === 10) {
        insertIntoLayers({"ore":"🐢","layers":["paperLayer"], "useLuck":true});
        insertIntoLayers({"ore":"🐰","layers":["paperLayer"], "useLuck":true});
        a13 = true;
        typeWriter("<i>The air becomes hard to breathe as particle flow slows to a halt...</i>", get("spawnMessage"), true)
        document.getElementById("teleportButton").disabled = true;
        eventSpawn.currentTime = 0;
        eventSpawn.play();
    }
    clearInterval(loopTimer);
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true})
    curDirection = "";
    mine[curY][curX] = "⚪";
    curX = 1000000;
    if (currentWorld < 2) {
        curY = 0;
    } else {
        curY = 2001;
    }
    setLayer(curY);
    mine[curY] ??= [];
    mine[curY][curX] = "⛏️";
    checkAllAround(curX, curY, 1);
    displayArea();
    document.getElementById("resetNumber").innerHTML = blocksRevealedThisReset.toLocaleString() + "/" + mineCapacity.toLocaleString() + " Blocks Revealed This Reset";
}
let resetting = false;
function mineReset() {
    player.stats.minesReset++;
    lastX = 0;
    a12 = 0;
    if (curX > player.stats.furthestPosX) player.stats.furthestPosX = curX;
    if (curX < player.stats.furthestNegX) player.stats.furthestNegX = curX;
    if (curY > player.stats.furthestY) player.stats.furthestY = curY;
    caveOreLocations = [];
    mineCapacity = player.settings.baseMineCapacity;
    player.oreTracker.existingOres = [];
    removeTrackerInformation();
    displayArea();
    canMine = false;
    mine = null;
    mine = [[]];
    curX = 1000000;
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
    canMine = true;
}
