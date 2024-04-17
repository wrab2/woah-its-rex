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
    if (currentWorld === 1) {
        curY = 0;
    } else {
        curY = 2001;
    }
    for (let i = curY - 101; i < curY + 101; i++)
        if (i > -1 && mine[i] === undefined) 
            mine[i] = [];
    setLayer(curY);
    mine[curY][curX] = "⛏️";
    checkAllAround(curX, curY, 1);
    displayArea();
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset.toLocaleString() + "/" + mineCapacity.toLocaleString() + " Blocks Revealed This Reset";
}
let resetting = false;
async function mineReset() {
    if (!resetting) {
        a12 = 0;
        caveOreLocations = [];
        resetting = true;
        mineCapacity = player.settings.baseMineCapacity;
        const temp = curDirection;
        curDirection = "";
        let temp2;
        if ((currentWorld === 1 && !player.gears["gear3"]) || (currentWorld === 1 && !player.gears["gear17"]))
            temp2 = await collectOres(temp);
        canMine = await mineResetAid();
        checkAllAround(curX, curY, 1);
        mine[curY][curX] = "⛏️";
        loggedFinds = [];
        player.oreTracker.existingOres = [];
        displayArea();
        goDirection(temp);
        resetting = false;
    }
}

function collectOres(temp) {
    return new Promise((resolve) => {
        let direction = "";
        if (temp !== "")
            direction = temp;
        else if (lastDirection !== "")
            direction = lastDirection;
        if (direction === "s") {
            let constraints = getParams(30, 500);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        } else if (direction === "w") {
            let constraints = getParams(30, 30);
            for (let r = curY - constraints[1]; r < curY + 500; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        } else if (direction === "a") {
            let constraints = getParams(30, 30);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 500; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        } else if (direction === "d") {
            let constraints = getParams(500, 30);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        }
    setTimeout(() => {
        resolve(true);
    }, 250);
    });
}

function mineResetAid() {
    return new Promise((resolve) => {
    setTimeout(() => {
        mine = [[]];
        curX = 1000000000;
        let y = curY;
        for (let r = y - 101; r < y + 101; r++) {
            if(r > -1 && mine[r] === undefined) {
                mine[r] = [];
            }
        }
        checkAllAround(curX, curY, 1);
    }, 5);
    setTimeout(() => {
        resolve(true);
    }, 10);
    });
}