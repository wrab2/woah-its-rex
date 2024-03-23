/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
function generateCave(x, y, rate, reps, type) {
    let caveType;
    if (type === undefined) {
        type = getCaveType();
        if (type === undefined) {
            type = currentLayer;
        }
        type = sortCaveRarities(type);
    }
    caveType = type;
        let distX = Math.round(Math.random() * 10) + 3;
        let distY = Math.round(Math.random() * 10) + 3;
        let newOrigins = [];
            if ((mine[y] != undefined && mine[y + distY] != undefined) && !(mine[y][x] === "⚪" && mine[y + distY][x + distX] === "⚪")) {
            for (let r = y; r < y + distY; r++) {
                for (let c = x; c < x + distX; c++) {
                    if (Math.random() < (0.1 - rate))
                        newOrigins.push([c + (Math.round(Math.random() * 4)) - (5 + reps), r + (Math.round(Math.random() * 4)) - (5 + reps)]);
                        if (r > 0) {
                            if (mine[r][c] === undefined) {
                                generateCaveBlock(r, c, caveType);
                            }  
                        }
                        mineCaveBlock(c, r, caveType);
                }
            }
            let newRate = Math.round(Math.random() * 12) / 375;
            rate += newRate;
            reps++;
        }
        for (let i = 0; i < newOrigins.length; i++) {
            generateCave(newOrigins[i][0], newOrigins[i][1], rate, reps, caveType);
        }
}

function mineCaveBlock(c, r, type) {
    let block = mine[r][c];
    if (currentWorld === 2 && block === "✖️") {
        return;
    }
    let caveMulti = getCaveMulti(type);
    if (block != undefined) {
        if (oreList[block]["isBreakable"]) {
            if (checkFromCave([r, c])) giveBlock(block, c, r, false, true, caveMulti);
            else giveBlock(block, c, r);
            mine[r][c] = "⚪";
        }
    }
    //CHECK BELOW THE BLOCK
    let generated;
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


function sortCaveRarities(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let rarity1 = oreList[arr[j]]["numRarity"];
            let rarity2 = oreList[arr[j + 1]]["numRarity"];

            if (oolProbabilities[arr[j]] != undefined)
                rarity1 = 1/oolProbabilities[arr[j]];

            if (oolProbabilities[arr[j + 1]] != undefined)
                rarity2 = 1/oolProbabilities[arr[j + 1]];

            if (oreList[arr[j]]["numRarity"] < oreList[arr[j + 1]]["numRarity"]) {
                let lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
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
    let summedProbability = 0;
    for (let i = 0; i < type.length; i++) {
        summedProbability += (oolProbabilities[type[i]] === undefined) ? (1/oreList[type[i]]["numRarity"]) : (oolProbabilities[type[i]]);
        if (chosenValue < summedProbability) {
            blockToGive = type[i];
            break;
        }
    }
    //GETS THE CAVE RARITY TO MULTIPLY ORE RARITY BY FOR ADJUSTED RARITY
    let multi = getCaveMulti(type);
    let adjRarity = oreList[blockToGive]["numRarity"] * multi;
    //PLAYS SOUNDS AND CREATES LOGS BASED ON CAVE RARITY
    mine[y][x] = blockToGive;
    if (oreList[blockToGive]["numRarity"] >= 750000) {
        caveOreLocations.push([y, x, adjRarity]);
    }
    if (getCaveMulti(type) > 1) {
        if (adjRarity >= 25000000) {
            if (oolProbabilities[blockToGive] != undefined)
                adjRarity = (1/oolProbabilities[blockToGive]) * multi;
            if (oreList[blockToGive]["numRarity"] >= 25000000 || adjRarity >= 250000000) {
                playSound(oreList[blockToGive]["oreTier"])
                verifiedOres.createLog(y,x,blockToGive, new Error(), 1, [true, true]);
                verifiedOres.verifyLog(y, x);
            }
            if (oreInformation.tierGrOrEqTo({"tier1" : oreList[blockToGive]["oreTier"], "tier2" : minTier}))
                spawnMessage(blockToGive, {"Y" : y, "X" : x}, {"adjRarity" : adjRarity, "caveType" : type});
        }
    } else {
        if (oreList[blockToGive]["numRarity"] >= 750000) {
            playSound(oreList[blockToGive]["oreTier"]);
            if (oreList[blockToGive]["hasLog"]) {
                verifiedOres.createLog(y, x, blockToGive, new Error(), 1, [true, false]);
                verifiedOres.verifyLog(y, x);
            }
            if (oreInformation.tierGrOrEqTo({"tier1" : oreList[blockToGive]["oreTier"], "tier2" : minTier}))
                spawnMessage(blockToGive, {"Y" : y, "X" : x});
        }
    }
    
    
}



function getCaveMulti(type) {
    let multi;
    switch(type) {
        case caveList["type1Ores"]:
            multi = caveMultis[0];
            break;
        case caveList["type2Ores"]:
            multi = caveMultis[1];
            break;
        case caveList["type3Ores"]:
            multi = caveMultis[2];
            break;
        case caveList["type4Ores"]:
            multi = caveMultis[3];
            break;
        default:
            multi = 1;
    }
    return multi;
}

let caveTypes = {
    "1": 1/50,
    "2": 1/35,
    "3": 1/20,
    "4": 1/10
}
let caveMultis = [50, 35, 20, 10];
let caveList = {
"type1Ores" : ["🌙", "🪔", "💫", "🩺", "💱", "🌟", "☄️", "⭐", "🔆", "🔭", "📡", "❓"],
"type2Ores" : ["🎷", "🪘", "🪩", "🥁", "🪇", "🎹", "🎵"],
"type3Ores" : ["🧫", "⚠️", "🛸", "🥀", "🍄", "🕸️", "💉", "☣️"],
"type4Ores" : ["⚕️", "🌡️", "💊", "💸", "🧵", "🧬", "🍥", "🦠"]
}


let allCaves = ["type1Ores", "type2Ores", "type3Ores", "type4Ores"];
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
    if (currentPickaxe === 12)
        caveTypeLuck = 2;
    let caveType = undefined;
    let summedProbability = 0;
    let chosenValue = Math.random();
    chosenValue /= caveTypeLuck;
    for (let propertyName in caveTypes) {
        summedProbability += caveTypes[propertyName];
        if (chosenValue < summedProbability) {
            caveType = caveList[allCaves[Number(propertyName) - 1]];
            break;
        }
    }
    return caveType;
}

let caveOreLocations = [];
function checkFromCave(location) {
    for (let i = 0; i < caveOreLocations.length; i++) {
        if (location[0] === caveOreLocations[i][0] && location[1] === caveOreLocations[i][1]) {
            return true;
        }    
    }
    return false;
}
function getCaveMultiFromOre(ore) {
    for (let i = 0; i < allCaves.length; i++) {
        if (caveList[allCaves[i]].includes(ore))
            return getCaveMulti(caveList[allCaves[i]]);
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
