/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
function checkValidLocation(x, y) {
    let reps = 0;
    while (reps < 100) {
        const lX = x + Math.round(Math.random() * 100) - 50;
        const lY = y + Math.round(Math.random() * 75) - 45;
        mine[lY] ??= [];
        if (lY > 1) {
            if (mine[lY][lX] === undefined) return {x: lX, y: lY};
        }
        reps++;
    }
    return {x: undefined, y: undefined}
}
function generateCave(x, y, type) {
    let rate = 1;
    if (type === undefined) {  
        type = getCaveType();
        if (type === undefined) {
            type = "currentLayer";
        }
        if (type !== "abysstoneCave" && type !== "currentLayer")
            sortCaveRarities(type);
        else {
            if (type !== "currentLayer" && caveList[type].length < 3)
                caveList[type] = createGsCave();
        }
    }
    x ??= curX;
    y ??= curY;
    const newPoints = checkValidLocation(x, y);
    if (newPoints.x === undefined) return;
    else {
        x = newPoints.x;
        y = newPoints.y;
    }
    let points = [{x: x, y: y, ignore: undefined}];
    let selectedPoints = [];
    let add;
    let addRandom;
    let point;
    while (points.length > 0) {
        for (let i = points.length - 1; i >= 0; i--) {
            let pointX = points[i].x;
            let pointY = points[i].y;
            points.splice(i, 1);
            mine[pointY] ??= [];
            mineCaveShape(pointX, pointY, type);
            if (Math.random() < rate) {
                addRandom = Math.random();
                if (addRandom < 0.7) add = 3;
                else add = 4;
                if (mine[pointY][pointX + (add + 1)] !== "⚪") {
                    point = {x: pointX + add, y: pointY}
                    points.push(point);
                    selectedPoints.push(point);
                }
            }
            if (Math.random() < rate) {
                addRandom = Math.random();
                if (addRandom < 0.7) add = 3;
                else add = 4;
                if (mine[pointY][pointX - (add + 1)] !== "⚪") {
                    point = {x: pointX - add, y: pointY}
                    points.push(point);
                    selectedPoints.push(point);  
                }
            }
            if (Math.random() < rate) {
                addRandom = Math.random();
                if (addRandom < 0.7) add = 3;
                else add = 4;
                mine[pointY + (add + 1)] ??= [];
                if (mine[pointY + (add + 1)][pointX] !== "⚪") {
                    point = {x: pointX, y: pointY + add} 
                    points.push(point);
                    selectedPoints.push(point);
                }
            }
            if (Math.random() < rate) {
                addRandom = Math.random();
                if (addRandom < 0.7) add = 3;
                else add = 4;
                mine[pointY - (add + 1)] ??= [];
                if (mine[pointY - (add + 1)][pointX] !== "⚪") {
                    point = {x: pointX, y: pointY - add}
                    points.push(point);
                    selectedPoints.push(point);
                } 
            }
        }
        rate -= ((Math.random() * 12) + 3)/100;
    }
}
const caveShape = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 2, y: 0},
    {x: 3, y: 0},
    {x: -1, y: 0},
    {x: -2, y: 0},
    {x: -3, y: 0},
    {x: 0, y: 1},
    {x: 1, y: 1},
    {x: 2, y: 1},
    {x: 3, y: 1},
    {x: -1, y: 1},
    {x: -2, y: 1},
    {x: -3, y: 1},
    {x: 0, y: -1},
    {x: 1, y: -1},
    {x: 2, y: -1},
    {x: 3, y: -1},
    {x: -1, y: -1},
    {x: -2, y: -1},
    {x: -3, y: -1},
    {x: 0, y: 2},
    {x: 1, y: 2},
    {x: 2, y: 2},
    {x: -1, y: 2},
    {x: -2, y: 2},
    {x: 0, y: -2},
    {x: 1, y: -2},
    {x: 2, y: -2},
    {x: -1, y: -2},
    {x: -2, y: -2},
    {x: 0, y: 3},
    {x: 1, y: 3},
    {x: -1, y: 3},
    {x: 0, y: -3},
    {x: 1, y: -3},
    {x: -1, y: -3},
]
function mineCaveShape(x, y, type) {
    let px;
    let py;
    for (let i = 0; i < caveShape.length; i++) {
        px = x + caveShape[i].x;
        py = y + caveShape[i].y;
        if (py > 0) {
        mine[py] ??= [];
            if (mine[py][px] === undefined) generateCaveBlock(py, px, type);
            if (mine[py][px] !== undefined) mineCaveBlock(px, py, type);
        }
    }
}
function mineCaveBlock(c, r, type) {
    let block = mine[r][c];
    if (block !== undefined) {
        let variant = block.variant;
        block = block.ore === undefined ? block : block.ore;
        if (currentWorld === 2 && block === "✖️") {
            return;
        }
        let caveMulti = getCaveMulti(type);
        if (oreList[block]["isBreakable"]) {
            //{type: block, x:c, y:r, fromReset:false, fromCave:true, caveMulti:caveMulti, variant:variant}
            if (checkFromCave({"X":c, "Y":r})["fromCave"]) giveBlock({type: block, x:c, y:r, fromReset:false, fromCave:true, caveMulti:caveMulti, variant:variant});
            else giveBlock({type: block, x:c, y:r, variant: variant});
            mine[r][c] = "⚪";
        }
    }
    //CHECK BELOW THE BLOCK
    if (mine[r + 1] === undefined) {
        mine[r + 1] = [];
    }
    if (mine[r + 1][c] === undefined) {
        generateCaveBlock(r + 1, c, type);
        blocksRevealedThisReset++;
    }
    //CHECK TO THE RIGHT OF THE BLOCK
    if (mine[r][c + 1] === undefined) {
        generateCaveBlock(r, c + 1, type);
        blocksRevealedThisReset++;
    }
    //CHECK TO THE LEFT OF THE BLOCK
    if (mine[r][c - 1] === undefined) {
        generateCaveBlock(r, c - 1, type);
        blocksRevealedThisReset++;
    }
    //CHECK ABOVE THE BLOCK 
    if (r - 1 > 0 && mine[r - 1] === undefined) {
        mine[r - 1] = [];
    }
    if (r - 1 > 0 && mine[r - 1][c] === undefined) {
        generateCaveBlock(r - 1, c, type)
        blocksRevealedThisReset++;
    }
}


function sortCaveRarities(type) {
    let arr = caveList[type];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let rarity1 = oreList[arr[j]]["numRarity"];
            let rarity2 = oreList[arr[j + 1]]["numRarity"];

            if (oolProbabilities[arr[j]] != undefined)
                rarity1 = 1/oolProbabilities[arr[j]];

            if (oolProbabilities[arr[j + 1]] != undefined)
                rarity2 = 1/oolProbabilities[arr[j + 1]];

            if (rarity1 < rarity2) {
                let lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
}
let gsProbabilities = [];
let sgsProbability;
function createGsCave() {
    let outputArr = [];
    for (let i = 0; i < worldOneLayers.length; i++) {
        for (let j = 0; j < layerList[worldOneLayers[i]].length; j++) {
            if (oreList[layerList[worldOneLayers[i]][j]]["numRarity"] > 1)
                outputArr.push(layerList[worldOneLayers[i]][j]);
        }
    }
    for (let i = 0; i < worldTwoLayers.length; i++) {
        for (let j = 0; j < layerList[worldTwoLayers[i]].length; j++) {
            if (oreList[layerList[worldTwoLayers[i]][j]]["numRarity"] > 1)
                outputArr.push(layerList[worldTwoLayers[i]][j]);
        }
    }
    let toRemove = oreInformation.getOresByTier("Celestial");
    for (let i = 0; i < toRemove.length; i++) {
        while (outputArr.indexOf(toRemove[i]) > -1)
            outputArr.splice(outputArr.indexOf(toRemove[i]), 1);
    }
    outputArr.push("🤍", "🖤", "🤎", "💜", "❤️", "🧡", "💛", "💙", "💚", "📘", "📙", "📕", "📗", "✡️");
    for (let i = 0; i < outputArr.length; i++) {
        for (let j = 0; j < outputArr.length - i - 1; j++) {
            if (oreList[outputArr[j]]["numRarity"] < oreList[outputArr[j + 1]]["numRarity"]) {
                let lesser = outputArr[j + 1];
                outputArr[j + 1] = outputArr[j];
                outputArr[j] = lesser;
            }
        }
    }
    let temp = 0;
    for (let i = 0; i < outputArr.length; i++) {
        temp += 1/(oreList[outputArr[i]]["numRarity"] * 10);
        gsProbabilities[i] = temp;
    }
    sgsProbability = temp;
    outputArr.push("🕳️");
    gsProbabilities.push(1)
    return outputArr;
}
let caveLuck = 1;
function generateCaveBlock(y, x, type) {
    if (currentWorld === 2 && y === 10000) {
        if (Math.random() < 1/20000) {
            mine[y][x] = "✴️";
            return;
        } else {
            mine[y][x] = "✖️";
            return;
        }
    }
    let chosenValue = Math.random();
    if (debug) chosenValue /= caveLuck;
    let probabilityTable;
    let arr;
    if (type === "currentLayer") {
        probabilityTable = getLayer(y);
        arr = probabilityTable.layer;
        probabilityTable = probabilityTable.probabilities;
    } else {
        arr = caveList[type];
    }
    let blockToGive = "";
    let low = 0;
    let high = arr.length;
    if (type !== "abysstoneCave") {
        while (low < high) {
            const mid = (low + high) >> 1; // Use bitwise shift for integer division
            const value = type === "currentLayer" ? probabilityTable[mid] : 1/(oreList[arr[mid]]["numRarity"]);
            if (chosenValue >= value) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        blockToGive = arr[low];
    } else {
        while (low < high) {
            const mid = (low + high) >> 1; // Use bitwise shift for integer division
            if (chosenValue >= gsProbabilities[mid]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        blockToGive = arr[low];
    }
    //GETS THE CAVE RARITY TO MULTIPLY ORE RARITY BY FOR ADJUSTED RARITY
    let multi = getCaveMulti(type);
    let adjRarity = oreList[blockToGive]["numRarity"] * multi;
    //PLAYS SOUNDS AND CREATES LOGS BASED ON CAVE RARITY
    mine[y][x] = blockToGive;
    if (multi > 1) {
        if (adjRarity >= 750000) {
            if (oreList[blockToGive]["numRarity"] >= 750000) {
                caveOreLocations.push({"X":x, "Y":y, "type":type, "caveMulti":multi});
            }
            let variant = rollVariant();
            if (player.gears["gear25"] && variant === 1) variant = rollVariant();
            mine[y][x] = {ore: blockToGive, variant: variant};
            if (oolProbabilities[blockToGive] != undefined && type !== "abysstoneCave")
                adjRarity = (1/oolProbabilities[blockToGive]) * multi;
            if (oreList[blockToGive]["numRarity"] >= 25000000 || adjRarity >= 250000000 || oreList[blockToGive]["hasLog"]) {
                playSound(oreList[blockToGive]["oreTier"]);
                verifiedOres.createLog(y,x,{ore: blockToGive, variant: variant}, new Error(), [true, getCaveMulti(type), type, caveLuck]);
                verifiedOres.verifyLog(y, x);
            }
            if (messageIncluded(oreList[blockToGive]["oreTier"])) spawnMessage({block: blockToGive, location: {"Y" : y, "X" : x}, caveInfo: {"adjRarity" : adjRarity, "caveType" : type}, variant: variant});
            if ((currentWorld < 2 && player.gears["gear3"]) || currentWorld === 2 && player.gears["gear17"]) mineCaveBlock(x, y, type);
            if (player.settings.stopOnRare.active && stopIncluded(oreList[blockToGive]["oreTier"])) stopMining();
        }
    } else {
        if (oreList[blockToGive]["numRarity"] >= 750000) {
            let variant = rollVariant();
            if (player.gears["gear25"] && variant === 1) variant = rollVariant();
            mine[y][x] = {ore: blockToGive, variant: variant};
            playSound(oreList[blockToGive]["oreTier"]);
            if (oreList[blockToGive]["hasLog"]) {
                verifiedOres.createLog(y, x, {ore: blockToGive, variant: variant}, new Error(), [true, 1]);
                verifiedOres.verifyLog(y, x);
            }
            if (messageIncluded(oreList[blockToGive]["oreTier"])) spawnMessage({block: blockToGive, location: {"Y" : y, "X" : x}, caveInfo: undefined, variant: variant});
            if ((currentWorld < 2 && player.gears["gear3"]) || currentWorld === 2 && player.gears["gear17"]) mineCaveBlock(x, y, type);
            if (player.settings.stopOnRare.active && stopIncluded(oreList[blockToGive]["oreTier"])) stopMining();
        }
    }
}



function getCaveMulti(type) {
    if (caveTypes[type] !== undefined) return caveTypes[type].multi;
    else return 1;
}
const caveProbabilities1 = ["abysstoneCave", "mysteryCave", "musicCave", "biohazardCave", "bacteriaCave"];
const caveProbabilities2 = ["ggCave", "ioCave", "axCave", "foCave", "moCave", "ccCave"]
let caveTypes = {
    "abysstoneCave": {rarity: 1/1000, multi: 1000},
    "mysteryCave": {rarity: 1/50, multi: 50},
    "musicCave": {rarity: 1/35, multi: 35},
    "biohazardCave": {rarity: 1/20, multi: 20},
    "bacteriaCave": {rarity: 1/10, multi: 10},
    "ioCave" : {rarity: 1/30, multi: 30},
    "moCave" : {rarity: 1/6.9, multi: 6.9},
    "ccCave" : {rarity: 1/6, multi: 6},
    "ggCave" : {rarity: 1/49, multi: 49},
    "axCave" : {rarity: 1/29, multi: 29},
    "foCave" : {rarity: 1/28, multi: 28},
}
let caveList = {
"mysteryCave" : ["🌙", "🪔", "💫", "🩺", "💱", "🌟", "☄️", "⭐", "🔆", "🔭", "📡", "❓"],
"musicCave" : ["🎷", "🪘", "🪩", "🥁", "🪇", "🎹", "🎵"],
"biohazardCave" : ["🧫", "⚠️", "🛸", "🥀", "🍄", "🕸️", "💉", "☣️"],
"bacteriaCave" : ["⚕️", "🌡️", "💊", "💸", "🧵", "🧬", "🍥", "🦠"],
"abysstoneCave" : ["✡️", "🕳️"],
"ioCave" : ['🇻🇮', '🇹🇰', '🇲🇵', '🇯🇪', '🇨🇽', '🇻🇬', '🇮🇴'],
"moCave" : ['🇹🇨', '🇵🇳', '🇲🇶', '🇬🇵', '🇨🇰', '🇦🇸', '🇲🇴'],
"ccCave" : ['🇼🇫', '🇷🇪', '🇾🇹', '🇬🇺', '🇨🇼', '🇦🇮', '🇨🇨'],
"ggCave" : ['🇧🇱', '🇲🇸', '🇮🇪', '🇦🇼', '🇬🇬'],
"axCave" : ['🇧🇶', '🇸🇭', '🇳🇺', '🇬🇮', '🇬🇫', '🇧🇲', '🇦🇽'],
"foCave" : ['🇭🇰', '🇮🇲', '🇵🇲', '🇬🇸', '🇳🇫', '🇫🇰', '🇰🇾', '🇫🇴']
}


let oolOres = "🥀💫⚠️💸🪩🌟🧵☄️⭐🔆";
let oolProbabilities = {
    "🥀" : 1/420000000,
    "💫" : 1/1500000000,
    "⚠️" : 1/3500000000,
    "💸" : 1/560000000,
    "🪩" : 1/450000000,
    "🌟" : 1/150000000,
    "🧵" : 1/100000000,
    "☄️" : 1/40000000,
    "⭐" : 1/25000000,
    "🔆" : 1/25000000,
}
function getCaveType() {
    let caveTypeLuck = 1;
    if (player.stats.currentPickaxe === 12)
        caveTypeLuck = 2;
    let caveType = undefined;
    let summedProbability = 0;
    let chosenValue = Math.random();
    chosenValue /= caveTypeLuck;
    if (player.gears["gear27"]) chosenValue /= 1.75;
    const arr = currentWorld === 1.1 ? caveProbabilities2 : caveProbabilities1;
    for (let i = 0; i < arr.length; i++) {
        summedProbability += caveTypes[arr[i]].rarity;
        if (chosenValue < summedProbability) {
            caveType = arr[i];
            break;
        }
    }
    if (!player.gears["gear21"] && caveType === "abysstoneCave") caveType = "bacteriaCave";
    return caveType;
}

let caveOreLocations = [];
function checkFromCave(location) {
    for (let i = 0; i < caveOreLocations.length; i++) {
        if (location["Y"] === caveOreLocations[i]["Y"] && location["X"] === caveOreLocations[i]["X"]) {
            return {"fromCave":true, "multi":caveOreLocations[i]["caveMulti"], "type":caveOreLocations[i]["type"]};
        }    
    }
    return {"fromCave":false};
}
function getCaveMultiFromOre(ore) {
    for (let cave in caveTypes) {
        if (caveList[cave].includes(ore)) return getCaveMulti(cave);
    }
    return 1;
}
//generateCave(curX, curY, 0, 0);
