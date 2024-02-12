/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/

//MINE CREATION

function createMine() {
    for (let r = curY - 51; r < curY + 51; r++) {
        if (r > -1)
            mine[r] = [];
    }
    for (let c = curX - 25; c < curX + 25; c++) 
        mine[curY][c] = "🟩";
    mine[curY][1000000000] = "⛏️"; //trusty pickaxe
    checkAllAround(curX, curY, 1);
    displayArea();
}

function checkAllAround(x, y, luck) {
    let generated;
    if (x - 1 >= 0) {
        if (mine[y] != undefined) {
            if (mine[y][x - 1] === undefined) {
                generated = generateBlock(luck, [y, x-1]);
                mine[y][x - 1] = generated[0];
                if (generated[1])
                    verifiedOres.verifyLog(y, x-1);
            }
            
        }
    }
    if (mine[y] != undefined) {
        if (mine[y][x + 1] === undefined) {
            generated = generateBlock(luck, [y, x+1]);
            mine[y][x + 1] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y, x+1);
        }
        }
    if (mine[y + 1] === undefined) 
        mine[y + 1] = [];
        if (mine[y + 1][x] === undefined) {
            generated = generateBlock(luck, [y+1, x]);
            mine[y + 1][x] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y+1, x);
        }
        
    if (y - 1 >= 0) {
        if (mine[y - 1] === undefined) 
            mine[y - 1] = [];
            if (mine[y - 1][x] === undefined) {
                generated = generateBlock(luck, [y-1, x]);
                mine[y - 1][x] = generated[0];
                if (generated[1])
                    verifiedOres.verifyLog(y-1, x);
            }
        
    }
    if (blocksRevealedThisReset >= mineCapacity) {
        canMine = false;
        gearAbility3();
        clearInterval(loopTimer);
        blocksRevealedThisReset = 0;
        setTimeout(() => {
            if (ability1Active) {
                clearTimeout(ability1Timeout);
                ability1Active = false;
            }
            mineReset();
        }, 250);
    }
}

function createMineIndexes() {
    if (mine[curY + 50] === undefined)
        mine[curY + 50] = [];
    if (curY >= 50) {
        if (mine[curY - 50] === undefined) 
            mine[curY - 50] = [];
    } else {
        let constraints = getParams(0, 50);
        if (mine[constraints[1]] === undefined)
            mine[constraints[1]] = [];
    }
}
//MINING

function mineBlock(x, y, cause, luck) {
    if (mine[y][x] !== "⚪" && mine[y][x] !== "⛏️") {
        let ore = mine[y][x];
        if (checkFromCave([y, x])) {
            let adjMulti = getCaveMultiFromOre(mine[y][x]);
            giveBlock(mine[y][x], x, y, false, true, adjMulti);
            mine[y][x] = "⚪";
            checkAllAround(x, y, 1);
            totalMined++;
        } else {
        if (ore === "🟩")
            ore = "🟫";
        if (cause === "reset") {
            giveBlock(mine[y][x], x, y, true);
            mine[y][x] = "⚪";
        } else {
            giveBlock(mine[y][x], x, y);
            mine[y][x] = "⚪";
            checkAllAround(x, y, luck);
            totalMined++;
            if (cause !== "ability") {
                rollAbilities();
                updateActiveRecipe();
            }
        }
        }
        
    }
}

//ORE GENERATION AND OBTAINING

let multis = [1, 50, 250, 500];
let inv;
function giveBlock(type, x, y, fromReset, fromCave, caveInfo) {
    if (type !== "⛏️") {
        //IF GRASS, MAKE DIRT
        if (type === "🟩")
            type = "🟫";
        //CREATE VARIABLES
        let oreRarity = Math.round(1 / (oreList[type][0]));
        let pickaxeLevel1 = currentWorld === 1 ? 9 : 20
        let pickaxeLevel2 = currentWorld === 1 ? 6 : 17
        let minRarity = (currentPickaxe > pickaxeLevel1 ? 15000000 : (currentPickaxe > pickaxeLevel2 ? 2000000 : 750000));
        inv = 1;
        //SELECT VARIANT
        if (Math.floor(Math.random() * 50) === 25)
            inv = 2;
        else if (Math.floor(Math.random() * 250) === 125)
            inv = 3;
        else if (Math.floor(Math.random() * 500) === 250)
            inv = 4;
        if (!fromCave) {
            if (currentWorld === 1 && gears[4]) {
                let block = Object.keys(currentLayer);
                block = block[block.length - 1];
                oreList[block][1][0]++;
                updateInventory(block, 1);
            }
            if (currentWorld === 2) {
                if (gears[15]) {
                    if (oreRarity === 1 && (Math.random() < 0.5));
                        oreList[type][1][0] += 2;
                }
                if (gears[13]) {
                    if (oreRarity < 750000 && oreRarity > 1)
                        if (Math.random < 0.75)
                            oreList[block][1][0]++;
                }
            }
            if (oreRarity >= 160000000)
                verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
        if (oreRarity > minRarity) {
            if (currentWorld === 1 && gears[7])
                gearAbility1();
            logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);     
        }
        oreList[type][1][inv-1]++;
        updateInventory(type, inv);
        } else {
            if (getCaveTypeFromOre(type) === currentLayer) {
                if (oreRarity >= 160000000) {
                    verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
                }
                if (oreRarity > minRarity) {
                    logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);
                    if (currentWorld === 1 && gears[7])
                        gearAbility1();
                }
            } else {
                if (oreRarity * caveInfo >= 250000000) {
                    verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
                    logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);
                }
                if (currentWorld === 1 && gears[7])
                    gearAbility1();
            }
            oreList[type][1][inv-1]++;
            updateInventory(type, inv);
        }
    }
}

function generateBlock(luck, location) {
    if (currentWorld === 2)
        luck += (gears[18] ? 0.75 : 0) + (gears[12] ? 0.35 : 0) + (gears[10] ? 0.25 : 0);
    blocksRevealedThisReset++;
    let hasLog = false;
    let probabilityTable = currentLayer;
    if (location[0] === 1 && currentWorld === 1)
        probabilityTable = specialLayers[2];
    if (currentWorld === 2) {
        if (Math.random < 1/444400000000000)
            return ["🍀", true]
        if (location[0] === 1999 || location[0] === 1998)
            return ["☁️", false]
        if (location[0] === 2001 || location[0] === 2002)
            return ["📺", false]
        if (location[0] === 10000 && currentWorld === 2)
            probabilityTable = specialLayers[3];
    }
    let blockToGive = "";
    let summedProbability = 0;
    let chosenValue = Math.random();
    chosenValue /= luck;
    if ((location[0] === 0 && currentWorld === 1) || (location[0] === 2000 && currentWorld === 2))
        return ["🟩", false];
    
    for (let propertyName in probabilityTable) {
        summedProbability += probabilityTable[propertyName];
        if (chosenValue < summedProbability) {
            blockToGive = propertyName;
            break;
        }
    }
    if (Math.round(1 / (probabilityTable[blockToGive])) >= 750000) {
        if (Math.round(1 / (probabilityTable[blockToGive])) > 5000000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("zenith");
            if (stopOnRare && stopRareNum < 7)
                stopMining();
        } else if (Math.round(1 / (probabilityTable[blockToGive])) > 1500000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("magnificent");
            if (stopOnRare && stopRareNum < 6)
                stopMining();
        } else if (Math.round(1 / (probabilityTable[blockToGive])) > 750000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("otherworldly");
            if (stopOnRare && stopRareNum < 5)
                stopMining();
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 160000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("unfathomable");
            if (stopOnRare && stopRareNum < 4)
                stopMining();
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 25000000) {
            spawnMessage(blockToGive, location);
            playSound("enigmatic");
            if (stopOnRare && stopRareNum < 3)
                stopMining();
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 5000000) {
            spawnMessage(blockToGive, location);
            playSound("transcendent");
            if (stopOnRare && stopRareNum < 2)
                stopMining();
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 750000) {
            spawnMessage(blockToGive, location);
            playSound("exotic");
            if (stopOnRare && stopRareNum < 1)
                stopMining();
        }
    }
    return [blockToGive, hasLog];
}

function stopMining() {
    curDirection = "";
    clearInterval(loopTimer);
    if (ability1Active) {
        clearTimeout(ability1Timeout);
        ability1Active = false;
    }
}
//TELEPORTING

let distanceMulti = 1;
let y = 1000;
function switchDistance() {
        if (y < (allLayers.length - 1) * 2000) {
            y = 2000 * distanceMulti + 1000;
            distanceMulti++;
        } else if (y > (allLayers.length - 1) * 2000) {
            y = 1000;
            distanceMulti = 1;
        } else {
            y = 1000;
            distanceMulti = 1;
        }
        let layer = Object.keys(allLayers[Math.floor(y / 2000)]);
        layer = layer[layer.length - 1];   
        let sub = currentWorld === 2 ? 2000 : 0;
        document.getElementById("meterDisplay").innerHTML = layer + " " + (y - sub).toLocaleString() + "m";
}

async function teleport() {
    canMine = false;
    clearInterval(loopTimer);
    curDirection = "";
    canMine = await toLocation();
    displayArea();
}

function toLocation() {
    return new Promise((resolve) => {
    let x = curX;
    for (let r = y - 51; r < y + 51; r++) {
        if(mine[r] === undefined)
            mine[r] = [];
    }
    setLayer(y - 50);
    mine[curY][curX] = "⚪";
    curX = x;
    curY = y;
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
    
    setTimeout(() => {
        resolve(true);
    }, 1000);
    });
}

function getParams(distanceX, distanceY, x, y) {
    if (x === undefined)
        x = curX;
    if (y === undefined)
        y = curY;
    let displayLeft = 0;
    let displayUp = 0;
    if (x > distanceX)
        displayLeft = distanceX;
    else
        displayLeft = x;
    if (y > distanceY)
        displayUp = distanceY;
    else
        displayUp = y;
    return [displayLeft, displayUp];
}
function switchWorld() {
    distanceMulti = 1;
    y = 1000;
    canMine = false;
    stopMining();
    mine = [];
    if (currentWorld === 1) {
        currentWorld = 2;
        allLayers = worldTwoLayers;
        currentLayer = allLayers[0];
        curX = 1000000000;
        curY = 2000; 
        createMine();
        mine[curY + 1][curX] = "📺";
    } else {
        currentWorld = 1;
        allLayers = worldOneLayers;
        currentLayer = allLayers[0];
        curX = 1000000000;
        curY = 0; 
        createMine();
    }
    switchDistance();
    displayArea();
    switchWorldCraftables();
    canMine = true;
}




