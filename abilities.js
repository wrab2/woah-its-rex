let batteryEvent = false;
const abilityTestNums = []
let abilityTestAmt = 0;
async function rollAbilities(force) {
    let m = 1;
    if (currentWorld < 2 && player.gears["gear8"]) m += 0.2;
    if (player.gears["gear23"]) m += 0.15;
	if (player.gears["gear35"]) m += 0.5;
    if (batteryEvent) m += 0.1;
    if (randBuff.proc) m *= 2;
    if (player.gears["gear39"]) m *= 0.5;
    if (verifiedOres.canGenerateCaves()) {
        const caveRate = player.powerupVariables.caveBoosts.active ? 1/250 : 1/500;
        if (Math.random() <= caveRate && player.settings.cavesEnabled) {
            player.stats.cavesGenerated++;
            generateCave();
        }
    }
    if (debug && force) m = 10000000;
    const pickaxe = pickaxeStats[player.stats.currentPickaxe]
    if (Math.random() <= (m/pickaxe.rate)) {
        if ((player.settings.simulatedRng || pickaxeStats[player.stats.currentPickaxe].isDimensional) && !ca) {
            let bulkAmt = 0;
            if (player.stats.currentPickaxe === "pickaxe27") bulkAmt = pickaxe[player.upgrades["pickaxe27"].level].mined;
            else bulkAmt = pickaxe.mined;
            if (player.gears["gear41"] && Math.random() < 1/10) bulkAmt += 500000;
            if (player.gears["gear34"]) bulkAmt = Math.floor(bulkAmt*2);
            if (player.gears["gear39"]) bulkAmt = Math.floor(bulkAmt*3);
            bulkGenerate(curY, bulkAmt, undefined, false)
        } else {
            pickaxe.doAbility(curX, curY);
        }
    }
}
function getTestAvg() {
    let mined = 0;
    let revealed = 0;
    for (let i = 0; i < abilityTestNums.length; i++) {
        const amts = abilityTestNums[i];
        mined += amts.mined;
        revealed += amts.revealed;
    }
    return {m: mined/abilityTestAmt, r: revealed/abilityTestAmt};
}
function powerup1(x, y) {
    if (!pickaxeStats[player.stats.currentPickaxe].canMineIn.includes(currentWorld)) return;
    if (Date.now() >= player.powerupCooldowns["powerup1"].cooldown && player.powerupCooldowns["powerup1"].unlocked) {
        const multiplier = Math.floor(Math.log10(player.stats.blocksMined/500000)) + 1;
        const amt = (100*multiplier)*(100*multiplier);
        if (amt > 1000000 || player.settings.simulatedRng) bulkGenerate(curY, amt, undefined, false);
        else {
            for (let r = y - (50 * multiplier); r < y + (50 * multiplier); r++) {
                for (let c = x - (50 * multiplier); c < x + (50 * multiplier); c++) {
                    pickaxeAbilityMineBlock(c, r);
                }
            }
        }
        displayArea();
        player.powerupCooldowns["powerup1"].cooldown = Date.now() + (player.gears["gear24"] ? 900000 * 0.75 : 900000);
        applyNearbyData();
    }
    
}
function powerup2() {
    if (Date.now() >= player.powerupCooldowns["powerup2"].cooldown && player.powerupCooldowns["powerup2"].unlocked) {
        player.powerupCooldowns["powerup2"].cooldown = Date.now() + (player.gears["gear24"] ? 900000 * 0.75 : 900000);
        player.powerupVariables.caveBoosts.removeAt = Date.now() + (player.gears["gear24"] ? 150000 * 1.5 : 150000);
        player.powerupVariables.caveBoosts.active = true;
        applyNearbyData();
    }
}

function powerup3() {
    if (Date.now() >= player.powerupCooldowns["powerup3"].cooldown && player.powerupCooldowns["powerup3"].unlocked) {
        const layer = layerDictionary[currentLayer].layer;
        const acceptableOres = [];
        for (let i = 0; i < layer.length; i++) if (!oreInformation.isCommon(oreList[layer[i]]["oreTier"]) && oreList[layer[i]]["oreTier"] !== "Celestial" && oreList[layer[i]]["oreTier"] !== "Antique" && player.powerupVariables.currentChosenOre.lastOre !== layer[i]) acceptableOres.push(layer[i])
        let chosenOre = acceptableOres[Math.round(Math.random() * (acceptableOres.length - 1))];
        player.powerupVariables.currentChosenOre.lastOre = chosenOre;
        player.powerupVariables.currentChosenOre.ore = chosenOre, 
        player.powerupVariables.currentChosenOre.removeAt = Date.now() + (player.gears["gear24"] ? 600000 * 1.5 : 600000);;
        updateAllLayers();
        player.powerupCooldowns["powerup3"].cooldown = Date.now() + (player.gears["gear24"] ? 3000000 * 0.75 : 3000000);
        applyNearbyData();
    }
}
function powerup4() {
    if (Date.now() >= player.powerupCooldowns["powerup4"].cooldown && player.powerupCooldowns["powerup4"].unlocked) {
        player.powerupVariables.commonsAffected.state = true;
        player.powerupVariables.commonsAffected.removeAt = Date.now() + (player.gears["gear24"] ? 300000 * 1.5 : 300000);
        player.powerupCooldowns["powerup4"].cooldown = Date.now() + (player.gears["gear24"] ? 1200000 * 0.75 : 1200000);
        updateAllLayers();
        applyNearbyData();
    }
}
function powerup5() {
    if (Date.now() >= player.powerupCooldowns["powerup5"].cooldown && player.powerupCooldowns["powerup5"].unlocked) {
        if (currentWorld !== 1.1) {
            removeParadoxical();
            let toChooseFrom = [];
            for (let pickaxe in pickaxeStats) {
                if (currentWorld === 2) {
                    if (pickaxeStats[pickaxe].canMineIn.includes(2)) toChooseFrom.push(pickaxe)
                } else if (currentWorld !== 2) toChooseFrom.push(pickaxe)
            }
            toChooseFrom = toChooseFrom.concat(Object.keys(player.gears));
            for (let i = toChooseFrom.length - 1; i >= 0; i--) {
                if (player.pickaxes[toChooseFrom[i]] || player.gears[toChooseFrom[i]] || recipes[toChooseFrom[i]].pUnob) toChooseFrom.splice(i, 1);
            }
            if (toChooseFrom.length > 0) {
                let toGive = toChooseFrom[Math.round(Math.random() * (toChooseFrom.length - 1))];
                player.powerupVariables.fakeEquipped.item = toGive;
                if (player.pickaxes[toGive] !== undefined) {
                    player.powerupVariables.fakeEquipped.originalState = player.stats.currentPickaxe;
                    player.stats.currentPickaxe = toGive;
                    player.pickaxes[toGive] = true;
                }
                if (player.gears[toGive] !== undefined) {
                    player.gears[toGive] = true;
                    if (toGive === "gear0") document.getElementById("trackerLock").style.display = "none";
                    if (toGive === "gear9") document.getElementById("sillyRecipe").style.display = "block";
                    if (toGive === "gear24") get("allowAutoPowerup").style.display = "block";
                    if (toGive === "gear45") showEventOptions();
                }
                updateAllLayers();
                updateSpeed();
                player.powerupVariables.fakeEquipped.removeAt = Date.now() + (player.gears["gear24"] ? 60000 * 1.5 : 60000);
                player.powerupCooldowns["powerup5"].cooldown = Date.now() + (player.gears["gear24"] ? 3600000 * 0.75 : 3600000);
                utilitySwitchActions();
            }
        } else if (currentWorld === 1.1) {
            removeParadoxical();
            const curTreeLevel = player.upgrades["pickaxe27"].level;
            if (curTreeLevel < 5) {
               const chosenLevel = curTreeLevel + 1;
                player.powerupVariables.fakeTreeLevel.originalState = player.upgrades["pickaxe27"].level;
                player.powerupVariables.fakeTreeLevel.level = chosenLevel;
                player.upgrades["pickaxe27"].level = chosenLevel;
                updateAllLayers();
                let tempDirection = curDirection;
                stopMining();
                goDirection(tempDirection);
                player.powerupVariables.fakeTreeLevel.removeAt = Date.now() + (player.gears["gear24"] ? 60000 * 1.5 : 60000);
                player.powerupCooldowns["powerup5"].cooldown = Date.now() + (player.gears["gear24"] ? 3600000 * 0.75 : 3600000);
                utilitySwitchActions();
            }
        }
        applyNearbyData();
    }
}

let ability1RemoveTime = 0;
let ability1Stacks = 0;
let energySiphonerCooldown = 0;
let energySiphonerActive = false;
function gearAbility1() {
        const time = Date.now();
        if (ability1Stacks === 0 && time >= energySiphonerCooldown) {
            energySiphonerActive = true;
            ability1RemoveTime = time + 1000;
            ability1Stacks++;
            activateSiphoner();
            return;
        }
        if (ability1Stacks > 0 && ability1Stacks < 6) {
            ability1RemoveTime += 5000;
            ability1Stacks++;
        }
}
function activateSiphoner() {
    baseSpeed -= 3;
    updateSpeed();
}
function removeSiphoner() {
    ability1Stacks = 0;
    energySiphonerCooldown = Date.now() + 5000;
    baseSpeed += 3;
    energySiphonerActive = false;
    updateSpeed();
}
function gearAbility2() {
    if (currentWorld === 1 && player.gears["gear9"]) {
        let reps = -1;
        let chosenDistance;
        while (chosenDistance === undefined) {
            reps++;
            if (repeatingLayers[reps] === undefined && Math.random() < 1/77) chosenDistance = reps;
        }
        const forceKorone = Math.random() < 1/56 ? "KORONE" : false;
        repeatingLayers[reps] = {layer: 7777, force: forceKorone};
        specialLayerLocations["sillyLayer"] ??= 18000 + (10000 * reps);
    }
}

let pickaxe1Nums = [];
function pickaxeAbility1(x, y) {
    x -= 7;
    y -= 7;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe1Nums, 1), x, y); return;}
    pickaxeArrayLoop(pickaxe1Nums, x, y);
}

let pickaxe2Nums = [];
function pickaxeAbility2(x, y) {
    x -= 5;
    y -= 5;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe2Nums, 2), x, y); return;}
    pickaxeArrayLoop(pickaxe2Nums, x, y);
}
let pickaxe3Nums = [];
function pickaxeAbility3(x, y) {
    x -= 12;
    y -= 12;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe3Nums, 3), x, y); return;}
    pickaxeArrayLoop(pickaxe3Nums, x, y);
}
let pickaxe4Nums = [];
function pickaxeAbility4(x, y) {
    x -= 11;
    y -= 11;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe4Nums, 4), x, y); return;}
    pickaxeArrayLoop(pickaxe4Nums, x, y);
}

let pickaxe5Nums = [];
function pickaxeAbility5(x, y) {
    x -= 16;
    y -= 16;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe5Nums, 5), x, y); return;}
    pickaxeArrayLoop(pickaxe5Nums, x, y);
}
let pickaxe6Nums = [];
function pickaxeAbility6(x, y) {
    x -= 18;
    y -= 19;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe6Nums, 6), x, y); return;}
    pickaxeArrayLoop(pickaxe6Nums, x, y);
}
function mineLines(loc) {
    let x = loc.x;
    let y = loc.y;
    let from = loc.from;
    for (let i = 0; i < 8; i++) {
        from !== 2 ? pickaxeAbilityMineBlock(x + i, y) : null;
        from !== 3 ? pickaxeAbilityMineBlock(x - i, y) : null;
        from !== 0 ? pickaxeAbilityMineBlock(x, y + i) : null;
        from !== 1 ? pickaxeAbilityMineBlock(x, y - i) : null;
    }
}
function pickaxeAbility7(x, y) {
    const points = [{x: x, y:y, from: -1}];
    let reps = 1;
    while (reps < 8) {
        let pointX;
        let pointY;
        let pointFrom;
        for (let i = points.length - 1; i >= 0; i--) {
            pointX = points[i].x;
            pointY = points[i].y;
            pointFrom = points[i].from;
            mineLines({x: pointX, y:pointY, from:pointFrom});
            points.splice(i, 1);
            let npy;
            let npx;
            if (Math.random() <= 0.85) {
                //point above center, value of 0
                npy = pointY - 8;
                npx = pointX; 
                mine[npy] ??= [];
                if (mine[npy][npx] !== "⚪") points.push({x:npx, y:npy, from:0});
            }
            if (Math.random() <= 0.85) {
                //point below center, value of 1
                npy = pointY + 8;
                npx = pointX; 
                mine[npy] ??= [];
                if (mine[npy][npx] !== "⚪") points.push({x:npx, y:npy, from:1});
            }
            if (Math.random() <= 0.85) {
                //point left of center, value of 2
                npy = pointY;
                npx = pointX - 8; 
                mine[npy] ??= [];
                if (mine[npy][npx] !== "⚪") points.push({x:npx, y:npy, from:2});
            }
            if (Math.random() <= 0.85) {
                //point right of center, value of 3
                npy = pointY;
                npx = pointX + 8; 
                mine[npy] ??= [];
                if (mine[npy][npx] !== "⚪") points.push({x:npx, y:npy, from:3});
            }
        }
        reps++;
    }
}
function mineX(loc) {
    let x = loc.x;
    let y = loc.y;
    let from = loc.from;
    pickaxeAbilityMineBlock(x, y)
    for (let i = 1; i < 7; i++) {
        //bottom right
        from !== 2 ? (pickaxeAbilityMineBlock(x + i, y + i), pickaxeAbilityMineBlock(x + i, y + (i - 1))) : null;
        //top right
        from !== 3 ? (pickaxeAbilityMineBlock(x + i, y - i), pickaxeAbilityMineBlock(x + i, y - (i - 1))) : null;
        //bottom left
        from !== 0 ? (pickaxeAbilityMineBlock(x - i, y + i), pickaxeAbilityMineBlock(x - i, y + (i - 1))) : null;
        //top left
        from !== 1 ? (pickaxeAbilityMineBlock(x - i, y - i), pickaxeAbilityMineBlock(x - i, y - (i - 1))) : null;
    }
}
function pickaxeAbility8(x, y) {
    const points = [{x: x, y:y, from: -1}];
    let reps = 1;
    while (reps < 8) {
        let pointX;
        let pointY;
        let pointFrom;
        for (let i = points.length - 1; i >= 0; i--) {
            pointX = points[i].x;
            pointY = points[i].y;
            pointFrom = points[i].from;
            mineX({x: pointX, y:pointY, from:pointFrom});
            points.splice(i, 1);
            let npy;
            let npx;
            if (Math.random() <= 0.7) {
                //point top right, value of 0
                npy = pointY - 6;
                npx = pointX + 7; 
                mine[npy] ??= [];
                if (mine[npy][npx] !== "⚪") points.push({x:npx, y:npy, from:0});
            }
            if (Math.random() <= 0.7) {
                //point bottom right, value of 1
                npy = pointY + 6;
                npx = pointX + 7; 
                mine[npy] ??= [];
                if (mine[npy][npx] !== "⚪") points.push({x:npx, y:npy, from:1});
            }
            if (Math.random() <= 0.7) {
                //point top left, value of 2
                npy = pointY - 6;
                npx = pointX - 7; 
                mine[npy] ??= [];
                if (mine[npy][npx] !== "⚪") points.push({x:npx, y:npy, from:2});
            }
            if (Math.random() <= 0.7) {
                //point bottom left, value of 3
                npy = pointY + 6;
                npx = pointX - 7; 
                mine[npy] ??= [];
                if (mine[npy][npx] !== "⚪") points.push({x:npx, y:npy, from:3});
            }
        }
        reps++;
    }
}
let pickaxe9Nums = [];
function pickaxeAbility9(x, y) {
    x -= 25;
    y -= 20;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe9Nums, 9), x, y); return;}
    pickaxeArrayLoop(pickaxe9Nums, x, y);
}
let pickaxe10Nums = [];
function pickaxeAbility10(x, y) {
    x -= 30;
    y -= 30;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe10Nums, 10), x, y); return;}
    pickaxeArrayLoop(pickaxe10Nums, x, y);
}
let pickaxe11Nums = [];
function pickaxeAbility11(x, y) {
    x -= 40;
    y -= 37;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe11Nums, 11), x, y); return;}
    pickaxeArrayLoop(pickaxe11Nums, x, y);
}
let pickaxe12Nums = [];
function pickaxeAbility12(x, y) {
    x -= 103;
    y -= 56;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe12Nums, 12), x, y); return;}
    pickaxeArrayLoop(pickaxe12Nums, x, y);
}
function pickaxeAbility14(translatex, translatey) {
    let r = Math.round((Math.random() * 5) + 1)
    let a = 0; //FAKE CENTER POINT
    let x = 0; //START POINT
    let nums = [];
    while (x <= r) {
        let num1 = Math.sqrt(Math.pow(r, 2) - Math.pow((x - a), 2));
        nums.push(Math.floor(num1));
        x++;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let r = translatey + nums[i]; r >= translatey - nums[i]; r--) {
            pickaxeAbilityMineBlock(translatex + i, r);
            pickaxeAbilityMineBlock(translatex - i, r);
        }
    }
}
//pickaxeAbility14(curX, curY, 5, 1);
function pickaxeAbility15(x, y) {
    let dist = 7;
    for (let r = y; r < y + 8; r++) {
        let r2 = y - (r - y)
        for (let c = x - dist; c <= x + dist; c++) {
            pickaxeAbilityMineBlock(c, r)
            pickaxeAbilityMineBlock(c, r2)
        }
        dist--;
    }
}
function pickaxeAbility16(x, y) {
    let startNums = [0, 0, 1, 1, 1, 2, 2, 2, 9, 11, 10, 8, 7, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7];
    let endNums = [1, 1, 2, 2, 2, 3, 3, 3, 10, 12, 11, 9, 8, 7, 6, 6, 6, 6, 7, 5, 4, 3, 2];
    let i = 0;
    for (let r = y - 11; r <= y + 11; r++) {
        for (let c = x - startNums[i]; c < x - startNums[i] + endNums[i]; c++) {
            let c2 = x + (x - c);
            if (mine[r] != undefined) {
                pickaxeAbilityMineBlock(c, r);
                pickaxeAbilityMineBlock(c2, r);
            }
        }
        i++;
    }
}
function pickaxeAbility17(x, y) {
    let startNums = [17, 16, 15, 14, 13, 12, 12, 11, 11, 11, 12, 12, 12, 12, 12, 12];
    let endNums = [23, 24, 25, 25, 25, 26, 27, 26, 27, 27, 28, 29, 29, 29, 29, 29];
    let i = 0;
    for (let c = x - 15; c <= x; c++) {
        let c2 = x + (x - c)
        for (let r = y - startNums[i]; r < y - (startNums[i] - endNums[i]); r++) {
            if (mine[r] != undefined) {
                pickaxeAbilityMineBlock(c, r);
                pickaxeAbilityMineBlock(c2, r);
            }
        }
        i++;
    }
}
function pickaxeAbility18(x, y) {
        let startNums = [-13, -17, -20, -22, -24, -26, -28, -30, -31, -32, -22, -18, -15, -12, -10, -8, -6, -5, -3, -2, -1, 0, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14];
        let endNums = [8, 16, 23, 27, 31, 35, 38, 41, 43, 45, 36, 33, 31, 29, 28, 26, 25, 24, 23, 22, 22, 21, 21, 20, 19, 19, 18, 18, 17, 17, 17, 16, 15, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 8, 6, 6, 5, 5, 4, 4, 3, 2, 1];
        let i = 0;

        for (let r = y + 22; r > y - 33; r--) {
                for (let c = x - startNums[i]; c > x - (startNums[i] + endNums[i]); c--) {
                    pickaxeAbilityMineBlock(c, r);
                }
            i++;
        }
}
function pickaxeAbility19(x, y, reps) {
    if (reps > 7)
        return;
    let newOrigins = [];
    let dist = 7;
    for (let r = y; r < y + 8; r++) {
        for (let c = x - dist; c <= x + dist; c++) {
            let r2 = y - (r - y)
            pickaxeAbilityMineBlock(c, r);
            pickaxeAbilityMineBlock(c, r2);
            if (r2 < y) {
                if (c < x && Math.random() < 1/60)
                    newOrigins[0] = [y - 8, x - 8];
                if (c > x && Math.random() < 1/60)
                    newOrigins[1] = [y - 8, x + 8];
            }
            if (r > y) {
                if (c < x && Math.random() < 1/60)
                    newOrigins[2] = [y + 8, x - 8];
                if (c > x && Math.random() < 1/60)
                    newOrigins[3] = [y + 8, x + 8];
            }
        }
        dist--;
    }
    for (let i = 0; i < 4; i++) {
        if (newOrigins[i] != undefined) {
            reps++;
            pickaxeAbility19(newOrigins[i][1], newOrigins[i][0], reps)
        }
    }
}
function pickaxeAbility20(x, y) {
    let board = [
        [],
        [],
        []
    ]
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (Math.random() < 0.5)
                board[i][j] = "O";
            else 
                board[i][j] = "X";
        }
    }
    let toMine = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            toMine[i][0] = toMine[i][1] = toMine[i][2] = true;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
            toMine[0][j]= toMine[1][j] = toMine[2][j] = true;
        }  
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        toMine[0][0] = toMine[1][1] = toMine[2][2] = true;
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        toMine[0][2] = toMine[1][1] = toMine[2][0] = true;
    } 
    let generated;
    //CREATE SPACES ON THE BOARD    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let yStart = y - 22 + (15 * i);
            let xStart = x - 22 + (15 * j);
            if (toMine[i][j]) {
                for (let r = yStart; r < yStart + 15; r++) {
                    for (let c = xStart; c < xStart + 15; c++) {
                        pickaxeAbilityMineBlock(c, r);
                    }
                }
            } else if (board[i][j] === "X") {
                    for (let r = 0; r < 15; r++) {
                        if (mine[yStart + r] != undefined) {
                            pickaxeAbilityMineBlock(xStart + r, yStart + r);
                            pickaxeAbilityMineBlock(xStart + (14 - r), yStart + r);
                        }
                    }
                
                
            } else {
                for (let r = 1; r < 14; r++) {
                    pickaxeAbilityMineBlock(xStart, yStart + r);
                    pickaxeAbilityMineBlock(xStart + r, yStart);
                    pickaxeAbilityMineBlock(xStart + 14, yStart + 14);
                    pickaxeAbilityMineBlock(xStart + r, yStart + 14);
                }
            }
            
        }
    }
}

function pickaxeAbility21(x, y) {
    let reps = 0;
    let increaseNum = 2;
    for (let cat = 0; cat < 12; cat++) {
    for (let i = 0; i < increaseNum; i++) {
        x--;
        pickaxeAbilityMineBlock(x, y);
        y++
        pickaxeAbilityMineBlock(x, y);
        
    }
    while (reps < increaseNum) {
        x--;
        pickaxeAbilityMineBlock(x, y);
        reps++;
    }
    reps = 0;
    for (let i = 0; i < increaseNum; i++) {
        y--;
        pickaxeAbilityMineBlock(x, y);
        x--;
        pickaxeAbilityMineBlock(x, y);
        
    }
    while (reps < increaseNum) {
        y--;
        pickaxeAbilityMineBlock(x, y);
        reps++;
    }
    reps = 0;
    increaseNum++;

    for (let i = 0; i < increaseNum; i++) {
        x++;
        pickaxeAbilityMineBlock(x, y);
        y--;
        pickaxeAbilityMineBlock(x, y);
        
    }
    while (reps < increaseNum) {
        x++;
        pickaxeAbilityMineBlock(x, y);
        reps++;
    }
    reps = 0;
    for (let i = 0; i < increaseNum; i++) {
        y++;
        pickaxeAbilityMineBlock(x, y);
        x++;
        pickaxeAbilityMineBlock(x, y);
        
    }
    while (reps < increaseNum) {
        y++;
        pickaxeAbilityMineBlock(x, y);
        reps++;
    }
    reps = 0;
    increaseNum++;
    }
}

function pickaxeAbility22(translatex, translatey) {
    let r = 1;
    for (let reps = 0; reps < 21; reps++) {
        let a = 0; //FAKE CENTER POINT
        let x = 0; //START POINT
        let y = 0;
        let nums1 = [];
        let nums2 = [];
        while (x <= r) {
            let num1 = Math.sqrt(Math.pow(r, 2) - Math.pow((x - a), 2));
            let num2 = Math.sqrt(Math.pow(r, 2) - Math.pow((y - a), 2));
            nums1.push(Math.round(num1));
            nums2.push(Math.round(num2));
            x++;
            y++;
        }
        for (let i = 0; i < nums1.length; i++) {
            pickaxeAbilityMineBlock(translatex + i, translatey + nums1[i]);
            pickaxeAbilityMineBlock(translatex + i, translatey - nums1[i]);
            pickaxeAbilityMineBlock(translatex - i, translatey + nums1[i]);
            pickaxeAbilityMineBlock(translatex - i, translatey - nums1[i]);
            pickaxeAbilityMineBlock(translatex + nums2[i], translatey + i);
            pickaxeAbilityMineBlock(translatex + nums2[i], translatey - i);
            pickaxeAbilityMineBlock(translatex - nums2[i], translatey + i);
            pickaxeAbilityMineBlock(translatex - nums2[i], translatey - i);
        }
        r += 2;
    }
    
}
//IN ARRAY, ORDER IS X, Y
let pa1 = [];
let pa2 = [];
let pa3 = [];
let pa4 = [];
let pickaxeAbility23Num = 0;

function pickaxeAbility23(x, y) {
    if (pickaxeAbility23Num === 0) {
        pa1[0] = x - Math.round(Math.random() * 600) + 350;
        pa1[1] = y - Math.round(Math.random() * 75) + 10;
        pa2[0] = x + Math.round(Math.random() * 600) + 350;
        pa2[1] = y - Math.round(Math.random() * 75) + 10;
        pickaxeAbility23Num++;
    } else {
        pickaxeAbility23Num = 0;
        pa3[0] = x - Math.round(Math.random() * 600) + 350;
        pa3[1] = y + Math.round(Math.random() * 75) + 10;
        pa4[0] = x + Math.round(Math.random() * 600) + 350;
        pa4[1] = y + Math.round(Math.random() * 75) + 10;
        //ARRAY ORDER IS X, Y
        let dist1 = [Math.abs(pa1[0] - pa4[0]), Math.abs(pa1[1] - pa4[1])];
        let dist2 = [Math.abs(pa2[0] - pa3[0]), Math.abs(pa2[1] - pa3[1])];
        dist1[1] = dist1[1] === 0 ? 1 : dist1[1];
        let xIncrease = dist1[0]/dist1[1];
        let startNumY = pa1[1] < pa4[1] ? pa1[1] : pa4[1];
        let endNumY = pa1[1] > pa4[1] ? pa1[1] : pa4[1];
        let startNumX = pa1[0] < pa4[0] ? pa1[0] : pa4[0];
        let lastChangeX = startNumX;
        let lastChangeY = startNumY;
        let useX;
        if (xIncrease >= 1)
            useX = true;
        else
            useX = false;
        for (let r = startNumY; r < endNumY; r++) {  
            if (!useX) {
                if (r > lastChangeY + 3) {
                    lastChangeY += 3;
                    for (let r2 = r - 2; r2 <= r + 1; r2++) {
                        for (let c = startNumX - 2; c <= startNumX + 1; c++) {
                            pickaxeAbilityMineBlock(Math.floor(c), r2);
                        }
                    }
                }
                
            } else {
                for (let c = startNumX; c < startNumX + xIncrease; c++) {
                    if (c > lastChangeX + 3) {
                        lastChangeX += 3;
                        for (let r2 = r - 2; r2 <= r + 1; r2++) {
                            for (let c2 = c - 2; c2 <= c + 1; c2++) {
                                pickaxeAbilityMineBlock(Math.floor(c2), r2);
                            }
                        }
                    }
                }
            }
            startNumX += xIncrease;
        }
        dist2[1] = dist2[1] === 0 ? 1 : dist2[1];
        xIncrease = dist2[0]/dist2[1];
        startNumY = pa2[1] > pa3[1] ? pa2[1] : pa3[1];
        endNumY = pa2[1] < pa3[1] ? pa2[1] : pa3[1];
        startNumX = pa2[0] < pa3[0] ? pa2[0] : pa3[0];
        lastChangeX = startNumX;
        lastChangeY = startNumY;
        if (xIncrease >= 1)
            useX = true;
        else
            useX = false;
        for (let r = startNumY; r > endNumY; r--) { 
            if (!useX) {
                if (r > lastChangeY - 3) {
                    for (let r2 = r - 2; r2 <= r + 1; r2++) {
                        for (let c = startNumX - 2; c <= startNumX + 1; c++) {
                            pickaxeAbilityMineBlock(Math.floor(c), r2);
                        }
                    }
                    lastChangeY -= 3;
                }
            } else {
                for (let c = startNumX; c < startNumX + xIncrease; c++) {
                    if (c < lastChangeX + 3) {
                        lastChangeX += 3;
                        for (let r2 = r - 2; r2 <= r + 1; r2++) {
                            for (let c2 = c - 2; c2 <= c + 1; c2++) {
                                pickaxeAbilityMineBlock(Math.floor(c2), r2);
                            }
                        }
                    }
                }
            }
            startNumX += xIncrease;
        }
    }
}
function pickaxeAbility24(x, y) {
    x = x - 60;
    y = y - 110;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe24Nums, 24), x, y); return;}
    for (let i = 0; i < pickaxe24Nums.length; i++) {
        pickaxeAbilityMineBlock(pickaxe24Nums[i]["x"] + x, pickaxe24Nums[i]["y"] + y)
    }
}
function pickaxeAbility25(x, y) {
    x = x - 130;
    y = y - 110;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe25Nums, 25), x, y); return;}
    for (let i = 0; i < pickaxe25Nums.length; i++) {
        pickaxeAbilityMineBlock(pickaxe25Nums[i]["x"] + x, pickaxe25Nums[i]["y"] + y)
    }
}
const abilityTable = {
    "pickaxe23" : 1/17,
    "pickaxe25" : 1/15,
    "pickaxe10" : 1/13,
    "pickaxe27" : 1/11,
    "pickaxe21" : 1/9,
    "pickaxe22" : 1/7,
    "pickaxe12" : 1/5,
    "pickaxe24" : 1/3,
    "pickaxe11" : 1/1,
}
function pickaxeAbility26(x, y) {
    const abilityTableArray = Object.keys(abilityTable);
    const offset = Math.floor(Math.random() * 400) + 250;
    const points = {
        "a" : {"X":x, "Y":y},
        "b" : {"X":x + offset, "Y":y - offset},
        "c" : {"X":x - offset, "Y":y - offset},
        "d" : {"X":x + offset, "Y":y + offset},
        "e" : {"X":x - offset, "Y":y + offset}
    }
    for (let propertyName in points) {
        let low = 0;
        let high = abilityTableArray.length;
        let chosenValue = Math.random();
        while (low < high) {
            const mid = (low + high) >> 1; // Use bitwise shift for integer division
            if (chosenValue >= abilityTable[abilityTableArray[mid]]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        if (abilityTableArray[low] === "pickaxe27") {
            const overrideLevel = Math.round(Math.random() * 3) + 2;
            pickaxeAbility27(points[propertyName]["X"], points[propertyName]["Y"], overrideLevel);
        } else pickaxeStats[abilityTableArray[low]].doAbility(points[propertyName]["X"], points[propertyName]["Y"])
    }
}
const treeLevels = {
    0: [],
    1: [],
    cherryBranch: [],
    autumnBranch: [],
    winterBranch: [],
    summerBranch: []
}
function pickaxeAbility27(x, y, overrideLevel) {
    let eX = x;
    eX -= 37;
    let eY = y;
    overrideLevel ??= player.upgrades["pickaxe27"].level;
    const level = overrideLevel;
    let arrToIndex;
    if (level === 0) {arrToIndex = treeLevels[0]; eY -= 65;}
    else if (level > 0) {arrToIndex = treeLevels[1]; eY -= 200;}
    for (let i = 0; i < arrToIndex.length; i++) {
        pickaxeAbilityMineBlock(arrToIndex[i]["x"] + eX, arrToIndex[i]["y"] + eY)
    }
    if (level > 1) {
        arrToIndex = treeLevels.cherryBranch;
        eX = x - 345;
        eY = y + 50;
        pickaxeArrayLoop(arrToIndex, eX, eY)
    }
    if (level > 2) {
        arrToIndex = treeLevels.autumnBranch;
        eX = x - 260;
        eY = y - 150;
        pickaxeArrayLoop(arrToIndex, eX, eY)
    }
    if (level > 3) {
        arrToIndex = treeLevels.winterBranch;
        eX = x + 20;
        eY = y + 10;
        pickaxeArrayLoop(arrToIndex, eX, eY)
    }
    if (level > 4) {
        arrToIndex = treeLevels.summerBranch;
        eX = x + 20;
        eY = y - 200;
        pickaxeArrayLoop(arrToIndex, eX, eY)
    }
}
let pickaxe28Nums = [];
function pickaxeAbility28(x, y) {
    x -= 22;
    y -= 22;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe28Nums, 28), x, y); return;}
    pickaxeArrayLoop(pickaxe28Nums, x, y);
}
let pickaxe29Nums = [];
function pickaxeAbility29(x, y) {
    x -= 33;
    y -= 24;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe29Nums, 29), x, y); return;}
    pickaxeArrayLoop(pickaxe29Nums, x, y);
}
let pickaxe30Nums = [];
function pickaxeAbility30(x, y) {
    x -= 13;
    y -= 15;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe30Nums, 30), x, y); return;}
    pickaxeArrayLoop(pickaxe30Nums, x, y);
}
let pickaxe31Nums = [];
function pickaxeAbility31(x, y) {
    x = x - 300;
    y = y - 200;
    if (player.gears["gear34"]) {pickaxeArrayLoop(increaseAbilitySize(pickaxe31Nums, 31), x, y); return;}
    pickaxeArrayLoop(pickaxe31Nums, x, y);
}
function pickaxeAbility32(x, y) {
    bulkGenerate(y, 75000, undefined, false)
}
function pickaxeAbility33(x, y) {
    bulkGenerate(y, 65000, undefined, false)
}
function pickaxeArrayLoop(array, x, y) {
    for (let i = 0; i < array.length; i++) {
        pickaxeAbilityMineBlock(array[i]["x"] + x, array[i]["y"] + y)
    }
}
function pickaxeAbilityMineBlock(x, y) {
    if (y > 0) {
        mine[y] ??= [];
        if (mine[y][x] === undefined) 
            generateBlock({"Y":y, "X":x});
        mineBlock(x, y, "ability"); 
    }
}
function increaseAbilitySize(array, num) {
    if (magnifiedAbilites[num] !== undefined) return magnifiedAbilites[num];
    const xOrigin = array[0].x;
    const yOrigin = array[0].y
    const finalList = [];
    for (let i = 0; i < array.length; i++) finalList.push({x:array[i].x + incDistTo(xOrigin, array[i].x), y:array[i].y + incDistTo(yOrigin, array[i].y)},{x:array[i].x + incDistTo(xOrigin, array[i].x) + 1, y:array[i].y + incDistTo(yOrigin, array[i].y)},{x:array[i].x + incDistTo(xOrigin, array[i].x), y:array[i].y + incDistTo(yOrigin, array[i].y) + 1},{x:array[i].x + incDistTo(xOrigin, array[i].x) + 1, y:array[i].y + incDistTo(yOrigin, array[i].y) + 1})
    magnifiedAbilites[num] = finalList;
    return finalList;
}
const magnifiedAbilites = {

}
function incDistTo(x, y) {
    return y - x;
}