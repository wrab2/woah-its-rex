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
    let caveRateModifier = 150;
    if (player.gears["gear14"]) caveRateModifier += 100;
    if (player.stats.currentPickaxe === "pickaxe12") caveRateModifier += 50;
    if (player.powerupVariables.caveBoosts.active) caveRateModifier *= 2;
    if (player.stats.currentPickaxe === "pickaxe33") caveRateModifier *= 3;
    const thisCaveLuck = verifiedOres.getCaveLuck();
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
    if (player.settings.simulatedRng && !ca) {
        bulkGenerate(curY, (400*(caveRateModifier/150)), {type: type, multi: getCaveMulti(type)}, false);
        return;
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
            mineCaveShape(pointX, pointY, type, thisCaveLuck);
            if (pointY > 0 && pointY !== 10000) {
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
        }
        rate -= ((Math.random() * 12) + 3)/caveRateModifier;
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
function mineCaveShape(x, y, type, luck) {
    let px;
    let py;
    for (let i = 0; i < caveShape.length; i++) {
        px = x + caveShape[i].x;
        py = y + caveShape[i].y;
        if (py > 0) {
        mine[py] ??= [];
            if (mine[py][px] === undefined) generateCaveBlock(py, px, type, luck);
            if (mine[py][px] !== undefined) mineCaveBlock(px, py, type, "gen", luck);
        }
    }
}
function mineCaveBlock(c, r, type, cause, luck) {
    let block = mine[r][c];
    if (block !== undefined) {
        if (block.isPlaced) {mine[r][c] = "⚪"; checkAllAround(c, r); return;}
        let variant = block.variant;
        block = block.ore === undefined ? block : block.ore;
        if (currentWorld === 2 && block === "✖️") {
            return;
        }
        let caveMulti = getCaveMulti(type);
        if (oreList[block]["isBreakable"]) {
            //{type: block, x:c, y:r, fromReset:false, fromCave:true, caveMulti:caveMulti, variant:variant}
            if (checkFromCave({"X":c, "Y":r})["fromCave"]) giveBlock({type: block, x:c, y:r, fromReset:false, fromCave:true, caveMulti:caveMulti, variant:variant, amt:1});
            else giveBlock({type: block, x:c, y:r, variant: variant, amt:1});
            mine[r][c] = "⚪";
        }
    }
    if (r - 1 > 0 && mine[r - 1] === undefined) {
        mine[r - 1] = [];
    }
    if (mine[r + 1] === undefined) {
        mine[r + 1] = [];
    }
    if (cause === "infinity") {
        if (mine[r + 1][c] === undefined) {
            mine[r+1][c] ??= getCaveMaterial(type);
            blocksRevealedThisReset++;
        }
        //CHECK TO THE RIGHT OF THE BLOCK
        if (mine[r][c + 1] === undefined) {
            mine[r][c+1] ??= getCaveMaterial(type);
            blocksRevealedThisReset++;
        }
        //CHECK TO THE LEFT OF THE BLOCK
        if (mine[r][c - 1] === undefined) {
            mine[r][c-1] ??= getCaveMaterial(type);
            blocksRevealedThisReset++;
        }
        //CHECK ABOVE THE BLOCK 
        if (r - 1 > 0 && mine[r - 1][c] === undefined) {
            mine[r-1][c] ??= getCaveMaterial(type);
            blocksRevealedThisReset++;
        }
    } else {
        if (mine[r + 1][c] === undefined) {
            generateCaveBlock(r + 1, c, type, luck);
            blocksRevealedThisReset++;
        }
        //CHECK TO THE RIGHT OF THE BLOCK
        if (mine[r][c + 1] === undefined) {
            generateCaveBlock(r, c + 1, type, luck);
            blocksRevealedThisReset++;
        }
        //CHECK TO THE LEFT OF THE BLOCK
        if (mine[r][c - 1] === undefined) {
            generateCaveBlock(r, c - 1, type, luck);
            blocksRevealedThisReset++;
        }
        //CHECK ABOVE THE BLOCK 
        if (r - 1 > 0 && mine[r - 1][c] === undefined) {
            generateCaveBlock(r - 1, c, type, luck)
            blocksRevealedThisReset++;
        }
    }
}
function getCaveMaterial(type) {
    return caveList[type].slice(-1);
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
    for (let i = 0; i < galacticaLayers.length; i++) {
        for (let j = 0; j < layerList[galacticaLayers[i]].length; j++) {
            if (oreList[layerList[galacticaLayers[i]][j]]["numRarity"] > 1)
                outputArr.push(layerList[galacticaLayers[i]][j]);
        }
    }
    for (let i = 0; i < subRealmOneLayers.length; i++) {
        for (let j = 0; j < layerList[subRealmOneLayers[i]].length; j++) {
            if (oreList[layerList[subRealmOneLayers[i]][j]]["numRarity"] > 1)
                outputArr.push(layerList[subRealmOneLayers[i]][j]);
        }
    }
    let toRemove = oreInformation.getOresByTier("Celestial");
    for (let i = 0; i < toRemove.length; i++) {
        while (outputArr.indexOf(toRemove[i]) > -1)
            outputArr.splice(outputArr.indexOf(toRemove[i]), 1);
    }
    outputArr.push("🤍", "🖤", "🤎", "💜", "❤️", "🧡", "💛", "💙", "💚", "📘", "📙", "📕", "📗", "✡️", "estrogen???");
    for (let i = 0; i < outputArr.length; i++) {
        for (let j = 0; j < outputArr.length - i - 1; j++) {
            if (oreList[outputArr[j]]["numRarity"] < oreList[outputArr[j + 1]]["numRarity"]) {
                let lesser = outputArr[j + 1];
                outputArr[j + 1] = outputArr[j];
                outputArr[j] = lesser;
            }
        }
    }
    let n = outputArr.length - 1;
    while (n >= 0) {
        const ore = outputArr[n];
        toSubt = 0;
        while (outputArr.lastIndexOf(ore) !== outputArr.indexOf(ore)) {
            outputArr.splice(outputArr.indexOf(ore), 1);
            toSubt++;
        }
        n -= toSubt + 1;
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
function generateCaveBlock(y, x, type, luck) {
    if (currentWorld === 2 && y === 10000) {
        if (Math.random() < 1/20000) {
            mine[y][x] = "✴️";
            return;
        } else {
            mine[y][x] = "✖️";
            return;
        }
    }
    let chosenValue = Math.random() / luck;
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
            const tier = oreList[blockToGive]["oreTier"];
            mine[y][x] = {ore: blockToGive, variant: variant};
            if (oolProbabilities[blockToGive] != undefined && type !== "abysstoneCave")
                adjRarity = (1/oolProbabilities[blockToGive]) * multi;
            if (type === "abysstoneCave") adjRarity = 1/(gsProbabilities[caveList["abysstoneCave"].indexOf(blockToGive)]/1000)
            if (oreList[blockToGive]["numRarity"] >= 25000000 || adjRarity >= 250000000 || oreList[blockToGive]["hasLog"]) {
                playSound(tier);
                verifiedOres.createLog(y,x,{ore: blockToGive, variant: variant}, new Error(), [true, getCaveMulti(type), type, luck]);
                verifiedOres.verifyLog(y, x);
            }
            if (messageIncluded(tier)) spawnMessage({block: blockToGive, location: {"Y" : y, "X" : x}, caveInfo: {"adjRarity" : adjRarity, "caveType" : type}, variant: variant});
            let canCollect = (currentWorld < 2 && (player.gears["gear3"] || player.gears["gear17"]));
            if (!canCollect) (canCollect = currentWorld === 2 && player.gears["gear17"]);
            if (tier === "Celestial" && !player.gears["gear28"]) canCollect = false;
            if (canCollect) mineCaveBlock(x, y, type, "infinity", luck);
            if (player.settings.stopOnRare.active && stopIncluded(tier)) stopMining();
        }
    } else {
        if (oreList[blockToGive]["numRarity"] >= 750000) {
            let variant = rollVariant();
            if (player.gears["gear25"] && variant === 1) variant = rollVariant();
            const tier = oreList[blockToGive]["oreTier"];
            mine[y][x] = {ore: blockToGive, variant: variant};
            playSound(tier);
            if (oreList[blockToGive]["hasLog"]) {
                verifiedOres.createLog(y, x, {ore: blockToGive, variant: variant}, new Error(), [false, 1]);
                verifiedOres.verifyLog(y, x);
            }
            if (messageIncluded(tier)) spawnMessage({block: blockToGive, location: {"Y" : y, "X" : x}, caveInfo: undefined, variant: variant});
            let canCollect = (currentWorld < 2 && (player.gears["gear3"] || player.gears["gear17"]));
            if (!canCollect) (canCollect = currentWorld === 2 && player.gears["gear17"]);
            if (tier === "Celestial" && !player.gears["gear28"]) canCollect = false;
            if (canCollect) mineBlock(x, y, type, "infinity");
            if (player.settings.stopOnRare.active && stopIncluded(tier)) stopMining();
            if (currentActiveEvent !== undefined) {
                if (getCurrentEventOre() === blockToGive && blockToGive !== "🪸") endEvent();
            } 
        }
    }
}
function getCaveMulti(type) {
    if (caveTypes[type] !== undefined) return caveTypes[type].multi;
    else return 1;
}
const worldCaveProbabilities = {
    1 : [],
    2 : [],
    1 : [],
    1 : [],
    1 : [],
    1 : [],
}
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
    "watrCave" : {rarity: 1/25, multi:25}
}
let caveList = {
"mysteryCave" : ["🌙", "🪔", "💫", "🩺", "💱", "🌟", "☄️", "⭐", "🔆", "🔭", "📡", "❓"],
"musicCave" : ["🎷", "🪘", "🪩", "🥁", "🪇", "🎹", "🎵"],
"biohazardCave" : ["🧫", "⚠️", "🛸", "🥀", "🍄", "🕸️", "💉", "☣️"],
"bacteriaCave" : ["⚕️", "🌡️", "💊", "💸", "🧵", "🧬", "🍥", "🦠"],
"abysstoneCave" : ["estrogen???", "✡️", "🕳️"],
"ioCave" : ['🇻🇮', '🇹🇰', '🇲🇵', '🇯🇪', '🇨🇽', '🇻🇬', '🇮🇴'],
"moCave" : ['🇹🇨', '🇵🇳', '🇲🇶', '🇬🇵', '🇨🇰', '🇦🇸', '🇲🇴'],
"ccCave" : ['🇼🇫', '🇷🇪', '🇾🇹', '🇬🇺', '🇨🇼', '🇦🇮', '🇨🇨'],
"ggCave" : ['🇧🇱', '🇬🇱', '🇲🇸', '🇮🇪', '🇦🇼', '🇬🇬'],
"axCave" : ['🇧🇶', '🇸🇭', '🇳🇺', '🇬🇮', '🇬🇫', '🇧🇲', '🇦🇽'],
"foCave" : ['🇭🇰', '🇮🇲', '🇵🇲', '🇬🇸', '🇳🇫', '🇫🇰', '🇰🇾', '🇫🇴'],
"watrCave" : ["eternalCoral", "🌊"],
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
function getWorldCaveTypes(world) {
    let toGive;
    switch(world) {
        case 1:
        case 2:
            toGive = ["abysstoneCave", "mysteryCave", "musicCave", "biohazardCave", "bacteriaCave"];
            break;
        case 1.1:
            toGive = ["abysstoneCave", "ggCave", "ioCave", "axCave", "foCave", "moCave", "ccCave"];
            break;
        case 1.2:
            toGive = ["abysstoneCave", "watrCave"];
            break;
        case 0.9:
            toGive = ["abysstoneCave"];
            break;
        default:
            toGive = [];
    }
    return toGive;
}
function getCaveType() {
    if (currentWorld === 0.9) return undefined;
    let caveTypeLuck = verifiedOres.getCaveTypeLuck();
    let caveType = undefined;
    let summedProbability = 0;
    let chosenValue = Math.random();
    chosenValue /= caveTypeLuck;
    const arr = getWorldCaveTypes(currentWorld);
    for (let i = 0; i < arr.length; i++) {
        summedProbability += caveTypes[arr[i]].rarity;
        if (chosenValue < summedProbability) {
            caveType = arr[i];
            break;
        }
    }
    if (!player.gears["gear21"] && caveType === "abysstoneCave") caveType = undefined;
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