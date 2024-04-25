/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/

//MINE CREATION
const debug = (document.location.href.includes("testing")) || (document.location.href.includes('http://127.0.0.1:5500/'));
function createMine() {
    for (let r = curY - 101; r < curY + 101; r++) {
        if (r > -1)
            mine[r] = [];
    }
    mine[curY][1000000000] = "⛏️"; //trusty pickaxe
    currentLayerNum = -1;
    setLayer(curY);
    checkAllAround(curX, curY, 1);
    displayArea();
}

function checkAllAround(x, y) {
    mine[y] ??= [];
    if (x - 1 >= 0) {
        if (mine[y][x - 1] === undefined) {
            generateBlock({"Y" : y, "X" : x-1});
        }
    }
    if (mine[y][x + 1] === undefined) {
        generateBlock({"Y" : y, "X" : x+1});
    }
    mine[y + 1] ??= [];
    if (mine[y + 1][x] === undefined) {
        generateBlock({"Y" : y + 1, "X" : x}); 
    }
        
    if (y - 1 >= 0) {
        mine[y - 1] ??= [];
        if (mine[y - 1][x] === undefined) {
            generateBlock({"Y" : y - 1, "X" : x});
        }
        
    }
    if (blocksRevealedThisReset >= mineCapacity) {
        canMine = false;
        clearInterval(loopTimer);
        blocksRevealedThisReset = 0;
        setTimeout(() => {
            if (ability1Active) {
                clearTimeout(ability1Timeout);
                ability1Active = false;
                baseSpeed += baseSpeed <= 22 ? 3 : 0;
            }
            mineReset();
        }, 250);
    }
}
//MINING

function mineBlock(x, y, cause) {
    let ore = mine[y][x];
    if (ore === "⚪") return;
    checkAllAround(x, y);
    player.stats.blocksMined++;
    cause !== "ability" ? rollAbilities() : undefined;
    if (oreList[ore]["isBreakable"]) {
        mine[y][x] = "⚪";
        if (oreList[ore]["numRarity"] >= 750000) {
            if (checkFromCave({"X":x, "Y":y})["fromCave"]) {
                giveBlock(ore, x, y, false, true, checkFromCave({"X":x, "Y":y})["multi"]);
                return;
            }
        }
        giveBlock(ore, x, y, (cause === "reset"));
    }
}

//ORE GENERATION AND OBTAINING

let multis = [1, 50, 250, 500];
let inv;
function giveBlock(type, x, y, fromReset, fromCave, caveMulti) {
        if (type === "⚪") return;
        //CREATE VARIABLES
        let oreRarity = oreList[type]["numRarity"];
        let inv = 1;
        //SELECT VARIANT
        if (Math.floor(Math.random() * 50) === 25)
            inv = 2;
        else if (Math.floor(Math.random() * 250) === 125)
            inv = 3;
        else if (Math.floor(Math.random() * 500) === 250)
            inv = 4;
        if (!fromCave) {
            if (oreRarity >= 750000) {
                if (currentWorld === 1 && player.gears["gear7"])
                    gearAbility1();
                if (oreInformation.tierGrOrEqTo({"tier1" : oreList[type]["oreTier"], "tier2" : minTier}))
                    logFind(type, x, y, namesemojis[inv - 1], player.stats.blocksMined, fromReset);     
            }
            if (currentWorld === 1 && player.gears["gear4"]) {
                oreList[currentLayer.slice(-1)]["normalAmt"]++;
            }
            if (player.gears["gear15"]) {
                 if (oreRarity === 1 && (Math.random() < 0.5))
                    oreList[type]["normalAmt"] += 2;
            }
            if (player.gears["gear13"]) {
                if (oreRarity < 750000 && oreRarity > 1)
                    if (Math.random < 0.75)
                        oreList[type]["normalAmt"]++;
            }
            if (oreList[type]["hasLog"]) {
                verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
            }
        } else {
                oreRarity *= caveMulti;
                if (oreRarity >= 750000) { 
                    if (currentWorld === 1 && player.gears["gear7"])
                        gearAbility1();
                    if (oreInformation.tierGrOrEqTo({"tier1" : oreList[type]["oreTier"], "tier2" : minTier}))
                        logFind(type, x, y, namesemojis[inv - 1], player.stats.blocksMined, fromReset);     
                }
                if (oreList[type]["hasLog"] || oreRarity >= 160000000) {
                    verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
                }
                
        }
        oreList[type][variantInvNames[inv - 1]]++;
        inventoryObj[type] = 0;
}
let minRarity = 750000;
let cat = 1;
let probabilityTable;
const specialCases = "💙🌻🔋⌛🦾👀🌈🍃⛔🎉🔒📽️🧂🏯🖊️🏔️💔🩸";
function generateBlock(location) {
    blocksRevealedThisReset++;
    probabilityTable = currentLayer;
    if (location["Y"] === 1 && currentWorld === 1) {
        probabilityTable = layerList[specialLayers[2]];
    }
    if (currentWorld === 2) {
        if (location["Y"] === 10000 && currentWorld === 2)
            probabilityTable = layerList[specialLayers[3]];
    }
    if ((location["Y"] === 0 && currentWorld === 1) || (location["Y"] === 2000 && currentWorld === 2)) {
        probabilityTable = layerList[specialLayers[5]]
    }
        

    let blockToGive = "";
    let chosenValue = Math.random();
    let summedProbability = 0;
    for (let i = 0; i < probabilityTable.length; i++) {
        summedProbability += oreList[probabilityTable[i]]["decimalRarity"];
        if (chosenValue < summedProbability) {
            blockToGive = probabilityTable[i];
            break;
        }
    }
    let oreRarity = oreList[blockToGive]["numRarity"];
    mine[location["Y"]][location["X"]] = blockToGive;
    if (oreRarity >= 750000) {
        if (specialCases.indexOf(blockToGive) > -1) {
            blockToGive = checkSpecials(blockToGive);
            mine[location["Y"]][location["X"]] = blockToGive;
        }
        const tier = oreList[blockToGive]["oreTier"];
        if (player.settings.stopOnRare.active && oreInformation.tierGrOrEqTo({"tier1": tier, "tier2": player.settings.stopOnRare.minimum}))
            stopMining();
        if (oreList[blockToGive]["hasLog"]) {
            verifiedOres.createLog(location["Y"],location["X"],blockToGive, new Error());
            verifiedOres.verifyLog(location["Y"], location["X"]);
        }
        playSound(oreList[blockToGive]["oreTier"]);
        if (oreInformation.tierGrOrEqTo({"tier1" : tier, "tier2" : minTier})) spawnMessage(blockToGive, location);
        if (((currentWorld === 1 && player.gears["gear3"]) || currentWorld === 2 && player.gears["gear17"]) && tier !== "Celestial") mineBlock(location["X"], location["Y"], "ability");
    }
}

const checkSpecials = function(block) {
    const originalBlock = block;
    if (Math.random() < 1/1000)
    switch(block) {
        case "💙" : 
        if (curDirection === "")
            block = "🩵";
        break;
        case "⌛" : 
        block = "⏳";
        break;
        case "🍃" : 
        block = "🍂";
        break;
        case "🦾" : 
        if (curDirection === "")
            block = "🦿";
        break;
        case "👀" : 
        block = "👁‍🗨";
        break;
        case "🔋" : 
        if (curDirection === "")
            block = "🪫";
        break;
        case "⛔" : 
        block = "📛";
        break;
        case "🌻" : 
        if (curDirection === "")
            block = "🌼";
        break;
        case "🌈" : 
        block = "🏳️‍🌈";
        break;
        case "🎉" : 
        block = "🎊";
        break;
        case "🔒" : 
        if (curDirection === "")
            block = "🔓";
        break;
        case "📽️" : 
        block = "🎥";
        break;
        case "🧂" : 
        block = "🌶️";
        break;
        case "🏯" : 
        block = "⛩️";
        break;
        case "🖊️" : 
        block = "🖋️";
        break;
        case "🏔️" : 
        block = "🌋";
        break;
        case "💔" : 
        if (curDirection === "")
            block = "❤️‍🩹";
        break;
        case "🩸" : 
        block = "💧";
        break;
    }
    if (originalBlock !== block) oreList[block]["decimalRarity"] = oreList[originalBlock]["decimalRarity"] / 1000;
    return block;
}
/*
let totalSpeeds = 0;
for (let i = 0; i < 100000; i++) {
    let num1 = Date.now();
    generateBlock({"Y" : curY + 1, "X" : curX});
    let num2 = Date.now();
    totalSpeeds += (num2 - num1);
}
*/
//TELEPORTING

let distanceMulti = 1;
let y = 1000;
function switchDistance() {
        if (y < (allLayers.length - 1) * 2000) {
            y = 2000 * distanceMulti + 1000;
            distanceMulti++;
        } else if (y > (allLayers.length - 1) * 2000) {
            if (currentWorld === 1) {
                y = 1000;
                distanceMulti = 1;
            } else {
                y = 3000;
                distanceMulti = 2;
            }
           
        } else {
            y = 1000;
            distanceMulti = 1;
        }
        let layer = layerList[allLayers[Math.floor(y / 2000)]].slice(-1);
        layer = layer[layer.length - 1];   
        document.getElementById("meterDisplay").setAttribute("title", oreList[layer]["oreName"]);
        if (player.settings.usingNewEmojis) {
            layer = "<span style=\"font-family:'Noto Color Emoji'\">" + layer + "</span>";
        }
        let sub = currentWorld === 2 ? 2000 : 0;
        document.getElementById("meterDisplay").innerHTML = layer + " " + (y - sub).toLocaleString() + "m";
        
}

async function teleport() {
    canMine = false;
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true})
    clearInterval(loopTimer);
    curDirection = "";
    pa1 = [];
    pa2 = [];
    pa3 = [];
    pa4 = [];
    pickaxeAbility23Num = 0;
    canMine = await toLocation();
    displayArea();
}

function toLocation() {
    return new Promise((resolve) => {
    let x = curX;
    for (let r = y - 101; r < y + 101; r++) {
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
    }, 5);
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
    if (currentWorld === 1) { 
    if (y > distanceY)
        displayUp = distanceY;
    else
        displayUp = y;
    } else {
        if (curY < 2001) {
            if (curY < 1991) {
                if (y > distanceY)
                    displayUp = distanceY;
                else
                    displayUp = y;
            } else {
                if (y > distanceY)
                    displayUp = -1 * (y - 2000);
                else
                    displayUp = y;
            }
            return [displayLeft, displayUp];
        }
        if (curY > 2000) {
            if (y < 2009 && y - 2000 > distanceY - 2000)
                displayUp = y - 2000;
            else
                displayUp = distanceY;
        } else {
            if (y > distanceY)
                displayUp = distanceY;
            else
                displayUp = y;
        }
    }
    return [displayLeft, displayUp];
}
function attemptSwitchWorld() {
    if (player.pickaxes["pickaxe13"]) {
        switchWorld();
    }
}
function switchWorld() {
    canMine = false;
    stopMining();
    mine = [];
    player.oreTracker.existingOres = [];
    document.getElementById("trackerOre").innerText = `Ore: N/A`
    document.getElementById("trackerX").innerText = `X: N/A`
    document.getElementById("trackerY").innerText = `Y: N/A`
    removeTrackerInformation();
    m87 = 0;
    m88 = 0;
    if (currentWorld === 1) {
        currentWorld = 2;
        allLayers = worldTwoLayers;
        curX = 1000000000;
        curY = 2001; 
        currentLayerNum = -1;
        setLayer(curY);
        createMine();
        distanceMulti = 1;
        y = 1000;
        if (player.stats.currentPickaxe === 25) {
            if (Math.random() < 1/10000) {
                mine[curY + 1][curX] = "🩷";
                playSound(oreList["🩷"]["oreTier"]);
                document.getElementById("spawnMessage").innerHTML = "🩷 Has Spawned!";
            } else {
                mine[curY + 1][curX] = "📺";
            }

        } else {
            mine[curY + 1][curX] = "📺";
        }
        if (debug) adminChangeLuck(verifiedOres.getCurrentLuck());
        layerNum = 1;
        switchLayerIndex(0, "tvLayer", 2)
    } else {
        let children = document.getElementById("pickaxeCrafts").children;
        for (let i = worldOnePickaxes.length - 1; i < worldOnePickaxes.length + worldTwoPickaxes.length; i++) children[i].style.display = "block";
        distanceMulti = 0;
        y = 1000;
        currentWorld = 1;
        allLayers = worldOneLayers;
        currentLayer = allLayers[0];
        curX = 1000000000;
        curY = 0; 
        currentLayerNum = -1;
        setLayer(curY);
        createMine();
        if (player.stats.currentPickaxe === 1) {
            if (Math.random() < 1/10000) {
                mine[curY + 1][curX] = "🩶";
                playSound(oreList["🩶"]["oreTier"]);
                document.getElementById("spawnMessage").innerHTML = "🩶 Has Spawned!";
            } else {
                mine[curY + 1][curX] = "🟫";
            }
        }
        if (debug) adminChangeLuck(verifiedOres.getCurrentLuck());
        layerNum = 0;
        switchLayerIndex(0, "dirtLayer", 1);
    }
    switchDistance();
    displayArea();
    switchWorldCraftables();
    document.getElementById("nullChroma").style.display = "none";
    utilitySwitchActions();
    removeFromLayers({"ore":"🐢","layers":["paperLayer"]})
    removeFromLayers({"ore":"🐰","layers":["paperLayer"]});
    a12 = 0;
    a13 = false;
    document.getElementById("teleportButton").disabled = false;
    canMine = true;
}
function stopMining() {
    curDirection = "";
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true})
    clearInterval(loopTimer);
    if (ability1Active) {
        clearTimeout(ability1Timeout);
        ability1Active = false;
        baseSpeed += baseSpeed <= 22 ? 3 : 0;
    }
}


