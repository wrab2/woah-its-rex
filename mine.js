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
}
//MINING
function mineBlock(x, y, cause) {
    let mineBlockOre;
    let mineBlockVariant;
    if (mine[y][x].ore !== undefined) {
        mineBlockOre = mine[y][x].ore;
        mineBlockVariant = mine[y][x].variant
    } else {
        mineBlockOre = mine[y][x];
        mineBlockVariant = undefined;
    }
    if (mineBlockOre === "⚪") return;
    if (oreList[mineBlockOre]["isBreakable"]) {
        checkAllAround(x, y);
        if (oreList[mineBlockOre]["numRarity"] >= 750000) {
            if (checkFromCave({"X":x, "Y":y})["fromCave"]) {
                giveBlock({type: mineBlockOre, x:x, y:y, fromReset:false, fromCave:true, caveMulti:checkFromCave({"X":x, "Y":y})["multi"], variant:mineBlockVariant});
                mine[y][x] = "⚪";
                checkAllAround(x, y);
                player.stats.blocksMined++;
                return;
            }
            if (cause === "ability" && player.settings.automineProtection && oreInformation.tierGrOrEqTo({"tier1": oreList[mineBlockOre]["oreTier"], "tier2": minTier})) return;
        }
        player.stats.blocksMined++;
        giveBlock({type: mineBlockOre, x:x, y:y, fromReset: cause === "reset", fromCave:undefined, caveMulti:undefined, variant:mineBlockVariant});
        mine[y][x] = "⚪";
        cause !== "ability" ? rollAbilities() : undefined;
    }
}

//ORE GENERATION AND OBTAINING

let multis = [1, 50, 250, 500];
//{type: x, x:x, y:y, fromReset:x, fromCave:x, caveMulti:x, variant:x}
function giveBlock(obj) {
    if (obj.type === "⚪") return;
    //CREATE VARIABLES
    let oreRarity = oreList[obj.type]["numRarity"];
    //SELECT VARIANT
    let inv;
    if (obj.variant === undefined) {
        inv = rollVariant();
        if (player.gears["gear26"] && inv === 1) inv = rollVariant();
    } else {
        inv = obj.variant;
    }
    //PROC & LOGS
    const layerMaterial = layerDictionary[currentLayer].layer.slice(-1);
    if (currentWorld < 2 && player.gears["gear4"]) {
        oreList[layerMaterial]["normalAmt"]++;
    }
    if (player.gears["gear13"] && oreRarity < 750000 && oreRarity > 1 && Math.random < 0.75) {
        oreList[obj.type]["normalAmt"]++;
    }
    if (oreRarity >= 750000) {
        if (obj.fromCave) {oreRarity *= obj.caveMulti;}
        if (player.gears["gear22"] && Math.random() < 1/10) oreList[obj.type][variantInvNames[inv - 1]]++;
        if (currentWorld < 2 && player.gears["gear7"]) {gearAbility1();}
        if (oreInformation.tierGrOrEqTo({"tier1" : oreList[obj.type]["oreTier"], "tier2" : minTier})) {
            logFind(obj.type, obj.x, obj.y, namesemojis[inv - 1], player.stats.blocksMined, obj.fromReset); 
        }
        if (oreList[obj.type]["oreTier"] === "Flawless") {
            if (!player.sr1Unlocked) {
                player.sr1Unlocked = true;
                document.getElementById("sr1Lock").style.display = "none";
                document.getElementById("sr1Teleporter").style.display = "block";
            }
        }
        if (oreList[obj.type]["hasLog"] || oreRarity >= 160000000) {
            verifiedOres.verifyFind(mine[obj.y][obj.x], obj.y, obj.x, names[inv - 1]);
        }
        if (Math.random() < 1/100000) {
            oreList["bitcoin"]["normalAmt"]++;
            inventoryObj["bitcoin"] = 0;
        }
    } else {
        if (oreRarity === 1) {
            if (player.gears["gear15"] && Math.random() < 0.5) oreList[obj.type]["normalAmt"] += 2;
            if (player.gears["gear27"] && Math.random() < 1/20) oreList[layerMaterial]["normalAmt"] += 30;
        }
    }
    oreList[obj.type][variantInvNames[inv - 1]]++;
    inventoryObj[obj.type] = 0;
}
function rollVariant() {
    let rng = Math.round(Math.random() * 499 + 1);
    if (rng === 1) {return 4;} // 1:500
    else if (rng <= 3) {return 3;} // 1:250
    else if (rng <= 10) {return 2;} // 1:50
    return 1;
}
let cat = 1;
let mainProbabilityTable;
let mainGenerationTable;
const specialCases = "💙🌻🔋⌛🦾👀🌈🍃⛔🎉🔒📽️🧂🏯🖊️🏔️💔🩸";
function generateBlock(location) {
    blocksRevealedThisReset++;
    mainProbabilityTable = getLayer(location["Y"]);
    mainGenerationTable = mainProbabilityTable.probabilities;
    let arr = mainProbabilityTable.layer;
    let chosenValue = Math.random();
    let low = 0;
    let high = arr.length;
    while (low < high) {
        const mid = (low + high) >> 1; // Use bitwise shift for integer division
        if (chosenValue >= mainGenerationTable[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    let blockToGive = arr[low];
    let oreRarity = oreList[blockToGive]["numRarity"];
    mine[location["Y"]][location["X"]] = blockToGive;
    if (oreRarity >= 750000) {
        if (specialCases.indexOf(blockToGive) > -1) {
            blockToGive = checkSpecials(blockToGive);
            mine[location["Y"]][location["X"]] = blockToGive;
        }
        let variant = rollVariant();
        if (player.gears["gear26"] && variant === 1) variant = rollVariant();
        mine[location["Y"]][location["X"]] = {ore: blockToGive, variant: variant};
        const tier = oreList[blockToGive]["oreTier"];
        if (oreList[blockToGive]["hasLog"]) {
            verifiedOres.createLog(location["Y"],location["X"],{ore: blockToGive, variant: variant}, new Error());
            verifiedOres.verifyLog(location["Y"], location["X"]);
        }
        playSound(oreList[blockToGive]["oreTier"]);
        if (oreInformation.tierGrOrEqTo({"tier1" : tier, "tier2" : minTier})) spawnMessage({block: blockToGive, location: location, caveInfo: undefined, variant: variant});
        if (((currentWorld < 2 && (player.gears["gear3"] || player.gears["gear28"])) || player.gears["gear17"] && tier !== "Celestial")) mineBlock(location["X"], location["Y"], "ability");
        if (blocksRevealedThisReset / mineCapacity >= 0.9) mineBlock(location["X"], location["Y"], "reset");
        if (player.settings.stopOnRare.active && oreInformation.tierGrOrEqTo({"tier1": tier, "tier2": player.settings.stopOnRare.minimum})) stopMining();
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
const specialLayerLocations = {

}
let specialLayerDistance;
let distanceMulti = 1;
let layerDistanceY = 1000;
function distanceHelper(layer) {
    if (specialLayerDistance !== undefined) {
        if (layer === "fluteLayer") return false;
        if (layer === "sillyLayer" && specialLayerDistance === "fluteLayer") return true;
        else if (layer === "unknownLayer" && specialLayerDistance !== "unknownLayer") return true;
        else if (layer === "lastLayer" && specialLayerDistance !== "lastLayer") return true;
        else return false;
    } else {
        return true;
    }
}
function switchDistance() {
        if (layerDistanceY < (allLayers.length - 1) * 2000) {
            layerDistanceY = 2000 * distanceMulti + 1000;
            distanceMulti++;
        } else if (layerDistanceY > (allLayers.length - 1) * 2000) {
            if (currentWorld < 2) {
                if (currentWorld === 1) {
                    if (specialLayerLocations["fluteLayer"] !== undefined && distanceHelper("fluteLayer")) {specialLayerDistance = "fluteLayer"; layerDistanceY = specialLayerLocations["fluteLayer"] + 5000}
                    else if (specialLayerLocations["sillyLayer"] !== undefined && distanceHelper("sillyLayer")) {specialLayerDistance = "sillyLayer"; layerDistanceY = specialLayerLocations["sillyLayer"] + 5000}
                    else if (specialLayerLocations["unknownLayer"] !== undefined && distanceHelper("unknownLayer")) {specialLayerDistance = "unknownLayer"; layerDistanceY = specialLayerLocations["unknownLayer"] + 5000}
                    else if (specialLayerLocations["lastLayer"] !== undefined && distanceHelper("lastLayer")) {specialLayerDistance = "lastLayer"; layerDistanceY = specialLayerLocations["lastLayer"].y + 5000}
                    else {
                        layerDistanceY = 1000;
                        distanceMulti = 1;
                        specialLayerDistance = undefined;
                    }
                } else {
                    layerDistanceY = 1000;
                    distanceMulti = 1;
                }
            } else {
                layerDistanceY = 3000;
                distanceMulti = 2;
            }
        } else {
            layerDistanceY = 1000;
            distanceMulti = 1;
        }
        let layer;
        if (currentWorld === 1 && layerDistanceY > 16000) {
            for (let property in specialLayerLocations) if (specialLayerLocations[property] + 5000 === layerDistanceY || specialLayerLocations[property].y + 5000 === layerDistanceY) {
                if (specialLayerDistance === "lastLayer") {
                    layer = layerDictionary[layerIndex.worldOne[repeatingLayers[specialLayerLocations["lastLayer"].num].layer]].layer.slice(-1);
                } else if (property !== "lastLayer") {
                    layer = layerDictionary[property].layer.slice(-1);
                }
            }
        } else {
            layer = layerList[allLayers[Math.floor(layerDistanceY / 2000)]].slice(-1);
        }
        layer = layer[layer.length - 1];   
        document.getElementById("meterDisplay").setAttribute("title", oreList[layer]["oreName"]);
        if (player.settings.usingNewEmojis || currentWorld === 1.1) {
            layer = "<span style=\"font-family:'Noto Color Emoji'\">" + layer + "</span>";
        }
        let sub = currentWorld === 2 ? 2000 : 0;
        document.getElementById("meterDisplay").innerHTML = layer + " " + (layerDistanceY - sub).toLocaleString() + "m";
        
}

async function teleport() {
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true})
    clearInterval(loopTimer);
    curDirection = "";
    pa1 = [];
    pa2 = [];
    pa3 = [];
    pa4 = [];
    pickaxeAbility23Num = 0;
    toLocation();
    displayArea();
}

function toLocation() {
    pa1 = [];
    pa2 = [];
    pa3 = [];
    pa4 = [];
    pickaxeAbility23Num = 0;
    let x = curX;
    for (let r = layerDistanceY - 101; r < layerDistanceY + 101; r++) {
        if(mine[r] === undefined)
            mine[r] = [];
    }
    setLayer(layerDistanceY);
    mine[curY][curX] = "⚪";
    curX = x;
    curY = layerDistanceY;
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
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
    if (currentWorld < 2) { 
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
function attemptSwitchWorld(to) {
    if (to === 2 && player.pickaxes["pickaxe13"] || to === 2 && currentWorld === 2) {switchWorld(currentWorld === 1 ? 2 : 1); return;}
    if (to === 1.1) {switchWorld(currentWorld === 1.1 ? 1 : 1.1); return;}
}
function switchWorld(to) {
    canMine = false;
    stopMining();
    mine = [];
    player.oreTracker.existingOres = [];
    removeTrackerInformation();
    m87 = 0;
    m88 = 0;
    currentLayerNum = -1;
    currentWorld = to;
    if (currentWorld === 2) {
        distanceMulti = 1;
        y = 1000;
        allLayers = worldTwoLayers;
        curX = 1000000000;
        curY = 2001; 
        createMine();
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
        layerNum = 1;
        switchLayerIndex(0, "tvLayer", 2);
    } else if (currentWorld < 2) {
        distanceMulti = 0;
        y = 1000;
        if (currentWorld === 1) allLayers = worldOneLayers;
        else if (currentWorld === 1.1) allLayers = subRealmOneLayers;
        curX = 1000000000;
        curY = 0; 
        createMine();
        if (currentWorld === 1) {
            if (player.stats.currentPickaxe === 1) {
                if (Math.random() < 1/10000) {
                    mine[curY + 1][curX] = "🩶";
                    playSound(oreList["🩶"]["oreTier"]);
                    document.getElementById("spawnMessage").innerHTML = "🩶 Has Spawned!";
                } else {
                    mine[curY + 1][curX] = "🟫";
                }
            }
        }
        layerNum = 0;
        if (currentWorld === 1) switchLayerIndex(0, "dirtLayer", 1);
        else if (currentWorld === 1.1) switchLayerIndex(0, "scLayer", 1);
        if (currentWorld === 1.1) sr1Helper(true);
        else sr1Helper(false);
    }
    switchDistance();
    displayArea();
    switchWorldCraftables();
    if (currentRecipe !== undefined) displayRecipe(currentRecipe);
    utilitySwitchActions();
    removeFromLayers({"ore":"🐢","layers":["paperLayer"]})
    removeFromLayers({"ore":"🐰","layers":["paperLayer"]});
    a12 = 0;
    a13 = false;
    document.getElementById("teleportButton").disabled = false;
    canMine = true;
    if (debug) adminChangeLuck(verifiedOres.getCurrentLuck());
}
function stopMining() {
    curDirection = "";
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true})
    clearInterval(loopTimer);
}
function sr1Helper(state) {
    updateTolLuck();
    if (player.pickaxes[player.powerupVariables.fakeEquipped.item] !== undefined) {
        player.pickaxes[player.powerupVariables.fakeEquipped.item] = false;
        player.stats.currentPickaxe = player.powerupVariables.fakeEquipped.originalState;
        player.powerupVariables.fakeEquipped.item = "";
        player.powerupVariables.fakeEquipped.originalState = undefined;
        player.powerupVariables.fakeEquipped.removeAt = Date.now();
    }
    if (state) {
        if (!player.settings.usingNewEmojis) {
            document.querySelector(":root").style.setProperty("--bs-font-sans-serif", "system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Noto Color Emoji\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"");
            document.getElementById("switchFont").disabled = true;
        }
        player.wasUsing = player.stats.currentPickaxe;
        player.stats.currentPickaxe = 27;
        document.getElementById("theWorkshop").style.display = "block";
        document.getElementById("sr1Teleporter").innerText = "Return Home...";
    } else {
        if (!player.settings.usingNewEmojis) {
            document.querySelector(":root").style.setProperty("--bs-font-sans-serif", "system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"")
            document.getElementById("switchFont").disabled = false;
        }
        if (player.wasUsing !== undefined) player.stats.currentPickaxe = player.wasUsing;
        player.wasUsing = undefined;
        document.getElementById("theWorkshop").style.display = "none";
        document.getElementById("sr1Teleporter").innerText = "Travel to New Lands...";
    }
}


