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
        mine[lY - 1] ??= [];
        mine[lY + 1] ??= [];
        mine[lY] ??= [];
        if (lY > 1) {
            if (mine[lY][lX] === undefined && mine[lY + 1][lX] === undefined && mine[lY - 1][lX] === undefined && mine[lY][lX - 1] === undefined && mine[lY][lX + 1] === undefined) return {x: lX, y: lY};
        }
        reps++;
    }
    return {x: undefined, y: undefined}
}
function generateCave(x, y, type) {
    let caveType;
    let rate = 1;
    if (type === undefined) {  
        type = getCaveType();
        if (type === undefined) {
            type = "currentLayer";
        }
        if (type !== "type5Ores" && type !== "currentLayer")
            sortCaveRarities(type);
        else {
            if (type !== "currentLayer" && caveList[type].length < 2)
                caveList[type] = createGsCave();
        }
    }
    if (x === undefined || y === undefined) {
        const newPoints = checkValidLocation(curX, curY);
        if (newPoints.x === undefined) return;
        else {
            x = newPoints.x;
            y = newPoints.y;
        }
    } else {
        const newPoints = checkValidLocation(x, y);
        if (newPoints.x === undefined) return;
        else {
            x = newPoints.x;
            y = newPoints.y;
        }
    }
    caveType = type;
    let points = [{x: x, y: y}];
    while (points.length > 0) {
        for (let i = points.length - 1; i >= 0; i--) {
            let pointX = points[i].x;
            let pointY = points[i].y;
            mineCaveBlock(pointX, pointY, type);
            points.splice(i, 1);
            let block = mine[pointY][pointX + 1];
            if (block !== "⚪" && Math.random() < rate) points.push({x: pointX + 1, y: pointY});
            block = mine[pointY][pointX - 1];
            if (block !== "⚪" && Math.random() < rate) points.push({x: pointX - 1, y: pointY});
            if (pointY - 1 > 0) {
                mine[pointY - 1] ??= [];
                block = mine[pointY - 1][pointX];
                if (block !== "⚪" && Math.random() < rate) points.push({x: pointX, y: pointY - 1});
            }
            mine[pointY + 1] ??= [];
            block = mine[pointY + 1][pointX];
            if (block !== "⚪" && Math.random() < rate) points.push({x: pointX, y: pointY + 1});
        }
        rate -= 0.04;
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
            else giveBlock({type: block, x:c, y:r});
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
    outputArr.push("🕳️");
    let temp = 0;
    for (let i = 0; i < outputArr.length; i++) {
        temp += 1/oreList[outputArr[i]]["numRarity"];
        gsProbabilities[i] = temp;
    }
    sgsProbability = temp;
    return outputArr;
}
//caveList["type5Ores"] = createGsCave(); generateCave(curX, curY, 0, 0, 'type5Ores');

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
    if (type !== "type5Ores") {
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
    if (oreList[blockToGive]["numRarity"] >= 750000) {
        caveOreLocations.push({"X":x, "Y":y, "type":type, "caveMulti":multi});
    }
    if (multi > 1) {
        if (adjRarity >= 25000000) {
            let variant = rollVariant();
            if (player.gears["gear26"] && variant === 1) variant = rollVariant();
            mine[y][x] = {ore: blockToGive, variant: variant};
            if (oolProbabilities[blockToGive] != undefined && type !== "type5Ores")
                adjRarity = (1/oolProbabilities[blockToGive]) * multi;
            if (oreList[blockToGive]["numRarity"] >= 25000000 || adjRarity >= 250000000) {
                playSound(oreList[blockToGive]["oreTier"]);
                verifiedOres.createLog(y,x,{ore: blockToGive, variant: variant}, new Error(), [true, getCaveMulti(type), type]);
                verifiedOres.verifyLog(y, x);
            }
            if (oreInformation.tierGrOrEqTo({"tier1" : oreList[blockToGive]["oreTier"], "tier2" : minTier})) spawnMessage({block: blockToGive, location: {"Y" : y, "X" : x}, caveInfo: {"adjRarity" : adjRarity, "caveType" : type}, variant: variant});
            if ((currentWorld < 2 && player.gears["gear3"]) || currentWorld === 2 && player.gears["gear17"]) mineCaveBlock(x, y, type);
        }
    } else {
        if (oreList[blockToGive]["numRarity"] >= 750000) {
            let variant = rollVariant();
            if (player.gears["gear26"] && variant === 1) variant = rollVariant();
            mine[y][x] = {ore: blockToGive, variant: variant};
            playSound(oreList[blockToGive]["oreTier"]);
            if (oreList[blockToGive]["hasLog"]) {
                verifiedOres.createLog(y, x, {ore: blockToGive, variant: variant}, new Error(), [true, 1]);
                verifiedOres.verifyLog(y, x);
            }
            if (oreInformation.tierGrOrEqTo({"tier1" : oreList[blockToGive]["oreTier"], "tier2" : minTier})) spawnMessage({block: blockToGive, location: {"Y" : y, "X" : x}, caveInfo: undefined, variant: variant});
            if ((currentWorld < 2 && player.gears["gear3"]) || currentWorld === 2 && player.gears["gear17"]) mineCaveBlock(x, y, type);
        }
    }
    
    
}



function getCaveMulti(type) {
    let multi;
    switch(type) {
        case "type1Ores":
            multi = caveMultis[0];
            break;
        case "type2Ores":
            multi = caveMultis[1];
            break;
        case "type3Ores":
            multi = caveMultis[2];
            break;
        case "type4Ores":
            multi = caveMultis[3];
            break;
        case "type5Ores":
            multi = caveMultis[4];
            break;
        default:
            multi = 1;
    }
    return multi;
}

let caveTypes = {
    "c5": 1/1000,
    "c1": 1/50,
    "c2": 1/35,
    "c3": 1/20,
    "c4": 1/10
}
let caveMultis = [50, 35, 20, 10, 1000];
let caveList = {
"type1Ores" : ["🌙", "🪔", "💫", "🩺", "💱", "🌟", "☄️", "⭐", "🔆", "🔭", "📡", "❓"],
"type2Ores" : ["🎷", "🪘", "🪩", "🥁", "🪇", "🎹", "🎵"],
"type3Ores" : ["🧫", "⚠️", "🛸", "🥀", "🍄", "🕸️", "💉", "☣️"],
"type4Ores" : ["⚕️", "🌡️", "💊", "💸", "🧵", "🧬", "🍥", "🦠"],
"type5Ores" : [],
}


let allCaves = ["type1Ores", "type2Ores", "type3Ores", "type4Ores", "type5Ores"];
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
    if (player.gears["gear25"]) chosenValue /= 1.75;
    for (let propertyName in caveTypes) {
        summedProbability += caveTypes[propertyName];
        if (chosenValue < summedProbability) {
            caveType = allCaves[Number(propertyName.substring(1)) - 1];
            break;
        }
    }
    if (!player.gears["gear21"] && caveType === "type5Ores") caveType = "type4Ores";
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
    for (let i = 0; i < allCaves.length; i++) {
        if (caveList[allCaves[i]].includes(ore))
            return getCaveMulti(allCaves[i]);
    }
    return 1;
}
function getCaveTypeFromOre(ore) {
    for (let i = 0; i < allCaves.length; i++) {
        if (caveList[allCaves[i]].includes(ore)) {
            return caveList[allCaves[i]];
        } 
    }
    return currentLayer;
}
//generateCave(curX, curY, 0, 0);
