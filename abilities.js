/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
async function rollAbilities() {
    let boost = 1;
    let m = 1;
    if (currentWorld === 1 && gears[1])
        boost *= 1.1;
    if (currentWorld === 1 && gears[5])
        boost *= 1.6;
    if (currentWorld === 1 && gears[8])
        m = 1.2;
    let temp;
    if (!resetting && ((currentWorld === 1 && currentPickaxe > 5)||(currentWorld === 2 && gears[14]))) {
        if (Math.random() < 1/750) {
            generateCave(curX, curY, 0, 0);
            displayArea();
            gearAbility3();
        }
    }
    switch (currentPickaxe) {
        case 1:
            if (Math.random() < (1/30 * m)) {
                canMine = await(pickaxeAbility3(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 2:
            if (Math.random() <= (1/35 * m)) {
                canMine = await(pickaxeAbility1(curX, curY, 3, 1.35, boost));
                updateActiveRecipe();
            }
            break;
        case 3:
            if (Math.random() <= (1/30 * m)) {
                canMine = await(pickaxeAbility2(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 4:
            if (Math.random() <= (1/25 * m)) {
                canMine = await(pickaxeAbility4(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 5:
            if (Math.random() <= (1/17 * m)) {
                canMine = await(pickaxeAbility5(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 6:
            if (Math.random() <= (1/60 * m)) {
                canMine = await(pickaxeAbility6(curX, curY, boost));
                updateActiveRecipe();
            } else if (Math.random() <= (1/40 * m)) {
                canMine = await(pickaxeAbility7(curX, curY, boost));
                updateActiveRecipe();
            }
            
            break;
        case 7:
            if (Math.random() <= (1/50 * m)) {
                canMine = await(pickaxeAbility8(curX, curY, 0, boost));
                updateActiveRecipe();
            }
            break;
        case 8:
            if (Math.random() <= (1/50 * m)) {
                canMine = await(pickaxeAbility9(curX, curY, 0, boost));
                updateActiveRecipe();
            }
            break;
        case 9:
            if (Math.random() <= (1/30 * m)) {
                canMine = await(pickaxeAbility10(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 10:
            if (Math.random() <= (1/50 * m)) {
                canMine = await(pickaxeAbility11(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 11:
            if (Math.random() <= (1/100 * m)) {
                temp = await(pickaxeAbility12(curX, curY, boost));
                if (!resetting)
                    canMine = temp;
                updateActiveRecipe();
            }
            break;
        case 12:
            if (Math.random() <= (1/150 * m)) {
                canMine = await(pickaxeAbility13(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 14:
            if (Math.random() <= 1/45) {
                canMine = await(pickaxeAbility14(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 15:
            if (Math.random() <= 1/75) {
                canMine = await(pickaxeAbility15(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 16:
            if (Math.random() <= 1/100) {
                canMine = await(pickaxeAbility16(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 17:
            if (Math.random() <= 1/150) {
                canMine = await(pickaxeAbility17(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 18:
            if (Math.random() <= 1/150) {
                canMine = await(pickaxeAbility18(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 19:
            if (Math.random() <= 1/50) {
                canMine = await(pickaxeAbility19(curX, curY, 0, boost));
                updateActiveRecipe();
            }
            break;
        case 20:
            if (Math.random() <= 1/75) {
                canMine = await(pickaxeAbility20(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
    }
}

let ability1Active = false;
let ability1Timeout;
let energySiphonerSpeed;
let energySiphonerDirection;
function gearAbility1() {
    if (!ability1Active && !resetting) {
        ability1Active = true;
        energySiphonerSpeed = miningSpeed;
        energySiphonerDirection = curDirection;
        curDirection = "";
        clearInterval(loopTimer);
        goDirection(energySiphonerDirection, energySiphonerSpeed - 3);
        ability1Timeout = setTimeout(() => {
            miningSpeed = energySiphonerSpeed;
            clearInterval(loopTimer);
            curDirection = "";
            if (energySiphonerDirection != "") {
                goDirection(energySiphonerDirection);
            }
            ability1Active = false;
        }, 5000);
    }
}

function gearAbility2() {
    if (currentWorld === 1 && gears[9]) {
        currentLayer = sillyLayer;
    }
}

function gearAbility3() {
    if (loggedFinds.length > 0 && ((currentWorld === 1 && gears[3]) || (currentWorld === 2 && gears[17]))) {
        for (let i = 0; i < loggedFinds.length; i++) {
            if (mine[loggedFinds[i][0]] !== undefined && mine[loggedFinds[i][0]][loggedFinds[i][1]] !== undefined) {
                mineBlock(loggedFinds[i][1], loggedFinds[i][0], "ability", 1);
                loggedFinds.splice(i, 1);
            }
        }
    }
}
function pickaxeAbility1(x, y, size, customLuck, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = customLuck * boost;
    canMine = false;
    const constraints = getParams(size, size);
    for (let r = y - constraints[1]; r <= y + size; r++) {
        for (let c = x - constraints[0]; c <= x + size; c++) {
            if (mine[r][c] === undefined) {
                generated = generateBlock(thisLuck, [r, c]);
                mine[r][c] = generated[0];
                if (generated[1])
                    verifiedOres.verifyLog(r, c);
            }
            if (mine[r][c] !== "⛏️")
                mineBlock(c, r, "ability", thisLuck);
        }
        displayArea();
        setTimeout(() => {
            resolve(true);
        }, 1);
    }
    });
}

function pickaxeAbility2(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 1.8 * boost;
    const constraints  = getParams(6, 6);
    canMine = false;
    const origin = [y, x];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    y = origin[0];
    for (let i = 0; i < constraints[0]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    y = origin[0];
    for (let i = 0; i < constraints[1]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    y = origin[0];
    if (constraints[1] < constraints[0])
        constraints[0] = constraints[1];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility3(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 1.2 * boost;
    const constraints  = getParams(6, 6, x, y);
    canMine = false;
    const origin = [y, x];
    for (let i = 0; i < 6; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    for (let i = 0; i < 6; i++) {
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    y = origin[0];
    for (let i = 0; i < constraints[1]; i++) {
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility4(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 2 * boost;
    const constraints  = getParams(7, 7);
    const area1 = Math.round((Math.random() * (-(constraints[0]) - 7)) + 7);
    const area2 = Math.round((Math.random() * (-(constraints[1]) - 7)) + 7);
    pickaxeAbility1((x + area1), (y + area2), 4, thisLuck, 1);
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility5(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = 5 * boost;
    const area1 = Math.round((Math.random() * 40) - 20);
    const area2 = Math.round((Math.random() * 40) - 20);
    let r = y + area2;
    let c = x + area1;
    for (let i = c; i < c + 5; i++) {
        if (mine[r] !== undefined && mine[r][i] === undefined) {
            generated = generateBlock(thisLuck, [r, i]);
                    mine[r][i] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(r, c);
        }
        if (mine[r] !== undefined && mine[r][i] !== "⛏️")
            mineBlock(i, r, "ability", thisLuck);
    }
    r++;
    for (let i = 0; i < 5; i++) {
        for (let j = c - 1; j < c+6; j++) {
            if (mine[r] !== undefined && mine[r][j] === undefined) {
                generated = generateBlock(thisLuck, [r, j]);
                    mine[r][j] = generated[0];
                if (generated[1])
                    verifiedOres.verifyLog(r, j);
            }
            if (mine[r] !== undefined && mine[r][j] !== "⛏️")
                mineBlock(j, r, "ability", thisLuck);
        }
        r++;
    }
    for (let i = c; i < c + 5; i++) {
        if (mine[r] !== undefined && mine[r][i] === undefined) {
            generated = generateBlock(thisLuck, [r, i]);
            mine[r][i] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(r, i);
        }
        if (mine[r] !== undefined && mine[r][i] !== "⛏️")
            mineBlock(i, r, "ability", thisLuck);
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility6(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = 10 * boost;
    const constraints  = getParams(9, 9);
    let dist = 9;
    for (let r = y + 6; r >= y - constraints[1]; r--) {
        for (let c = x - dist; c <= x + dist; c++) {
            if (c >= x - constraints[0]) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
                if (mine[r][c] !== "⛏️")
                    mineBlock(c, r, "ability", thisLuck);
            }
        }
        dist--;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility7(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = 10 * boost;
    const constraints = getParams(4, 3);
    let reps = 1;
    for (let r = y - constraints[1]; r < y; r++) {
        for (let c = x - constraints[0]; c < x + 5; c++) {
            if (reps !== 4 && reps !== 6) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
                if (mine[r][c] !== "⛏️")
                    mineBlock(c, r, "ability", thisLuck);
            }
            reps++; 
        }
    }
    reps = 1;
    let dist = 3;
    for (let r = y; r < y+4; r++) {
        for (let c = x - dist; c <= x + dist; c++) {
            if (c >= x - constraints[0]) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
                if (mine[r][c] !== "⛏️")
                    mineBlock(c, r, "ability", thisLuck);
            }
        }
        dist--;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility8(x, y, reps, boost) {
    return new Promise((resolve) => {
    canMine = false;
    if (reps < 4) {
        let procs = [
            [],
            [],
            [],
            []
        ];
        const thisLuck  = 3 * boost;
        const constraints  = getParams(8, 8, x, y);
        const origin = [y, x];
        for (let i = 0; i < 8; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[0] = [x, y, true];
        x = origin[1];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[1] = [x, y, true];
        x = origin[1];
        for (let i = 0; i < 8; i++) {
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75) {
            procs[2] = [x, y, true]
        }
        y = origin[0];
        for (let i = 0; i < constraints[1]; i++) {
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[3] = [x, y, true];
        reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1])
                pickaxeAbility8(procs[i][0], procs[i][1], reps, boost);
        }
        resolve(true);
    } else {
        displayArea();
        resolve(true);
    }
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility9(x, y, reps, boost) {
    return new Promise((resolve) => {
    canMine = false;
    if (reps < 4) {
        let procs = [
            [],
            [],
            [],
            []
        ];
        const thisLuck  = 4 * boost;
        const constraints  = getParams(6, 6, x, y);
        const origin = [y, x];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[0] = [x, y, true];
        x = origin[1];
        y = origin[0];
        for (let i = 0; i < constraints[0]; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[1] = [x, y, true];
        x = origin[1];
        y = origin[0];
        for (let i = 0; i < constraints[1]; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[2] = [x, y, true];
        x = origin[1];
        y = origin[0];
        if (constraints[1] < constraints[0])
            constraints[0] = constraints[1];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[3] = [x, y, true];
        reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1])
                pickaxeAbility9(procs[i][0], procs[i][1], reps, boost);
        }
        resolve(true);
    } else {
        displayArea();
        resolve(true);
    }
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility10(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 20 * boost;
    let generated;
    let skips = [
        [0, 4, 12, 16],
        [5, 11],
        [6, 10],
        [0, 16],
        [0, 1, 15, 16],
        [0, 16],
        [6, 10],
        [5, 11],
        [0, 4, 12, 16]
    ];
    let i = 0;
    let reps = 0;
    for (let c = x - 4; c < x + 5; c++) {
        for (let r = y - 8; r < y + 9; r++) {
            if (mine[r] !== undefined) {
                if (!(skips[reps].includes(i))) {
                    if (mine[r][c] === undefined) {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(r, c);
                    }
                    if (mine[r][c] !== "⛏️")
                        mineBlock(c, r, "ability", thisLuck);
                }
            }
            i++;
        }
        i = 0;
        reps++;
    }
    i = 0;
    reps = 0;
    for (let r = y - 4; r < y + 5; r++) {
        for (let c = x - 8; c < x + 9; c++) {
            if (mine[r] !== undefined) {
                if (!(skips[reps].includes(i))) {
                    if (mine[r][c] === undefined) {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(r, c);
                    }
                    if (mine[r][c] !== "⛏️")
                        mineBlock(c, r, "ability", thisLuck);
                }
            }
            i++;
        }
        i = 0;
        reps++;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility11(x, y, boost) {
    const thisLuck = 15 * boost;
    return new Promise((resolve) => {
    for (let i = -3; i < 4; i++) {
        for (let j = -3; j < 4; j++) {
            if (!(i === 0 && j === 0) && Math.random() <= 0.5) {
                    for (let r = 7 * j; r < (7 * j + 7); r++) {
                        for (let c = 7 * i; c < (7 * i + 7); c++) {
                            if (mine[y + r] !== undefined) {
                                if (mine[y + r][x + c] === undefined) {
                                    generated = generateBlock(thisLuck, [y + r, x + c]);
                                    mine[y + r][x + c] = generated[0];
                                    if (generated[1])
                                        verifiedOres.verifyLog(r, c);
                                }
                                if (mine[y + r] !== undefined && mine[y + r][ x + c] !== undefined)
                                    mineBlock(x + c, y + r, "ability", thisLuck);
                            }
                        }
                    }
            }
        }
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility12(x, y, boost) {
    return new Promise((resolve) => {
    let direction;
    let dirNum = 0;
    const thisLuck = 30 * boost;
    const nums = [3, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44, 45, 47, 48, 50, 51, 53, 54];
    const dirs = ["down", "left", "up", "right"];
    for (let i = 0; i < nums.length; i++) {
        direction = dirs[dirNum];
        switch(direction) {
            case "down":
                for (let r = y; r <= y + nums[i]; r++) {
                    if (mine[r] != undefined) {
                        if (mine[r][x] === undefined) {
                            generated = generateBlock(thisLuck, [r, x]);
                            mine[r][x] = generated[0];
                            if (generated[1])
                                verifiedOres.verifyLog(r, x);
                        }
                        if (mine[r][x] != undefined) {
                            mineBlock(x, r, "ability", thisLuck);
                    }   
                    } 
            }
            y += nums[i];
            break;
            case "left":
                for (let c = x; c >= x - nums[i]; c--) {
                    if (mine[y] != undefined && mine[y][c] != undefined) {
                        if (mine[y][c] === undefined) {
                            generated = generateBlock(thisLuck, [y, c]);
                            mine[y][c] = generated[0];
                            if (generated[1])
                                verifiedOres.verifyLog(y, c);
                        }
                        mineBlock(c, y, "ability", thisLuck);
                        
                    }
                }
                x -= nums[i];
                break;
            case "up":
                for (let r = y; r >= y - nums[i]; r--) {
                    if (mine[r] != undefined) {
                        if (mine[r][x] === undefined) {
                            generated = generateBlock(thisLuck, [r, x]);
                            mine[r][x] = generated[0];
                            if (generated[1])
                                verifiedOres.verifyLog(r, x);
                        }
                        if (mine[r][x] != undefined) {
                            mineBlock(x, r, "ability", thisLuck);
                        }
                    }
                }
                y -= nums[i];
                break;
            case "right":
                for (let c = x; c <= x + nums[i]; c++) {
                    if (mine[y] != undefined && mine[y][c] != undefined) {
                        if (mine[y][c] === undefined) {
                            generated = generateBlock(thisLuck, [y, c]);
                            mine[y][c] = generated[0];
                            if (generated[1])
                                verifiedOres.verifyLog(y, c);
                        }
                        mineBlock(c, y, "ability", thisLuck); 
                    }
                }
                x += nums[i];
                break;
        }
        dirNum++;
        if (dirNum > 3)
            dirNum = 0;
    }
    
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility13(x, y, boost) {
    return new Promise((resolve) => {
    let thisLuck = 75 * boost;
    let startNums = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 4, 5, 6, 6];
    let endNums = [37, 36, 35, 34, 29, 31, 30, 29, 28, 27, 26, 24, 29, 28, 32, 31, 25, 24, 23, 16, 24, 23, 22, 24, 26, 28, 19, 31, 30, 24, 13, 20, 21];
    let numSkips = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [28], [27], [], [], [], [], [19, 20], [21, 22], [], [], [], [], [], [24], [12, 25], [13], [], [15], [16]];
    let i = 0;
    for (let r = y - 16; r < y + 17; r++) {
        if (mine[r] != undefined) {
            for (let c = x + startNums[i]; c <= x + endNums[i]; c++) {
                if (!(numSkips[i].includes(c - x))) {
                    if (mine[r][c] === undefined) {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(r, c);
                    }
                    mineBlock(c, r, "ability", thisLuck); 
                }
            }
        }
        i++;
    }
    i = 0;
    for (let r = y - 16; r < y + 17; r++) {
        if (mine[r] != undefined) {
            for (let c = x - startNums[i]; c >= x - endNums[i]; c--) {
                if (!(numSkips[i].includes(-(c - x)))) {
                    if (mine[r][c] === undefined) {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(r, c);
                    }
                    mineBlock(c, r, "ability", thisLuck); 
                }
            }
        }
        i++;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}
function pickaxeAbility14(translatex, translatey, boost) {
    return new Promise((resolve) => {
    let thisLuck = 1.05 * boost;
    let r = Math.round((Math.random() * 5) + 1)
    let a = 0; //FAKE CENTER POINT
    let x = 0; //START POINT
    let nums = [];
    let generated;
    while (x <= r) {
        let num1 = Math.sqrt(Math.pow(r, 2) - Math.pow((x - a), 2));
        nums.push(Math.floor(num1));
        x++;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let r = translatey + nums[i]; r >= translatey - nums[i]; r--) {
            if (mine[r] != undefined) {
                if (mine[r][translatex + i] === undefined) {
                    generated = generateBlock(thisLuck, [r, translatex + i]);
                    mine[r][translatex + i] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, translatex + i);
                }
                mineBlock(translatex + i, r, "ability", thisLuck); 
                if (mine[r][translatex - i] === undefined) {
                    generated = generateBlock(thisLuck, [r, translatex - i]);
                    mine[r][translatex - i] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, translatex - i);
                }
                mineBlock(translatex - i, r, "ability", thisLuck); 
                

            }
        }
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}
//pickaxeAbility14(curX, curY, 5, 1);
function pickaxeAbility15(x, y, boost) {
    return new Promise((resolve) => {
        let generated;
    let thisLuck = 1.075 * boost;
    let dist = 7;
    for (let r = y; r < y + 8; r++) {
        let r2 = y - (r - y)
        for (let c = x - dist; c <= x + dist; c++) {
            if (mine[r] != undefined) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
            }
            mineBlock(c, r, "ability", thisLuck); 
            if (mine[r2] != undefined) {
                if (mine[r2][c] === undefined) {
                    generated = generateBlock(thisLuck, [r2, c]);
                    mine[r2][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r2, c);
                }
            }
            mineBlock(c, r2, "ability", thisLuck); 
        }
        dist--;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}
function pickaxeAbility16(x, y, boost) {
    return new Promise((resolve) => {
    let startNums = [0, 0, 1, 1, 1, 2, 2, 2, 9, 11, 10, 8, 7, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7];
    let endNums = [1, 1, 2, 2, 2, 3, 3, 3, 10, 12, 11, 9, 8, 7, 6, 6, 6, 6, 7, 5, 4, 3, 2];
    let i = 0;
    let thisLuck = 1.3 * boost;
    for (let r = y - 11; r <= y + 11; r++) {
        for (let c = x - startNums[i]; c < x - startNums[i] + endNums[i]; c++) {
            let c2 = x + (x - c);
            if (mine[r] != undefined) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
                mineBlock(c, r, "ability", thisLuck); 
                if (mine[r][c2] === undefined) {
                    generated = generateBlock(thisLuck, [r, c2]);
                    mine[r][c2] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c2);
                }
                mineBlock(c2, r, "ability", thisLuck); 
            }
        }
        i++;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}
function pickaxeAbility17(x, y, boost) {
    return new Promise((resolve) => {
    let startNums = [17, 16, 15, 14, 13, 12, 12, 11, 11, 11, 12, 12, 12, 12, 12, 12];
    let endNums = [23, 24, 25, 25, 25, 26, 27, 26, 27, 27, 28, 29, 29, 29, 29, 29];
    let thisLuck = 1 * boost;
    let i = 0;
    for (let c = x - 15; c <= x; c++) {
        let c2 = x + (x - c)
        for (let r = y - startNums[i]; r < y - (startNums[i] - endNums[i]); r++) {
            if (mine[r] != undefined) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
                mineBlock(c, r, "ability", thisLuck); 
                if (mine[r][c2] === undefined) {
                    generated = generateBlock(thisLuck, [r, c2]);
                    mine[r][c2] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c2);
                }
                mineBlock(c2, r, "ability", thisLuck); 
            }
        }
        i++;
    }

    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}
function pickaxeAbility18(x, y, boost) {
    return new Promise((resolve) => {
        let startNums = [-13, -17, -20, -22, -24, -26, -28, -30, -31, -32, -22, -18, -15, -12, -10, -8, -6, -5, -3, -2, -1, 0, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14];
        let endNums = [8, 16, 23, 27, 31, 35, 38, 41, 43, 45, 36, 33, 31, 29, 28, 26, 25, 24, 23, 22, 22, 21, 21, 20, 19, 19, 18, 18, 17, 17, 17, 16, 15, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 8, 6, 6, 5, 5, 4, 4, 3, 2, 1];
        let i = 0;
        let generated;
        let thisLuck = 1.5 * boost;
        for (let r = y + 22; r > y - 33; r--) {
            if (mine[r] != undefined) {
                for (let c = x - startNums[i]; c > x - (startNums[i] + endNums[i]); c--) {
                    if (mine[r][c] === undefined) {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(r, c);
                    }
                    mineBlock(c, r, "ability", thisLuck); 
                }
            }
            i++;
        }
        //pickaxeAbility17(curX, curY, 1)
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}
function pickaxeAbility19(x, y, reps, boost) {
    return new Promise((resolve) => {
    if (reps > 5)
        return;
    let generated;
    let newOrigins = [];
    let thisLuck = 2 * boost;
    let dist = 7;
    for (let r = y; r < y + 8; r++) {
        for (let c = x - dist; c <= x + dist; c++) {
            let r2 = y - (r - y)
            if (mine[r] != undefined) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
            }
            mineBlock(c, r, "ability", thisLuck); 
            if (mine[r2] != undefined) {
                if (mine[r2][c] === undefined) {
                    generated = generateBlock(thisLuck, [r2, c]);
                    mine[r2][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r2, c);
                }
            }
            mineBlock(c, r2, "ability", thisLuck); 
            if (r2 < y) {
                if (c < x && Math.random() < 1/30)
                    newOrigins[0] = [y - 8, x - 8];
                if (c > x && Math.random() < 1/30)
                    newOrigins[1] = [y - 8, x + 8];
            }
            if (r > y) {
                if (c < x && Math.random() < 1/30)
                    newOrigins[2] = [y + 8, x - 8];
                if (c > x && Math.random() < 1/30)
                    newOrigins[3] = [y + 8, x + 8];
            }
        }
        dist--;
    }
    for (let i = 0; i < 4; i++) {
        if (newOrigins[i] != undefined) {
            reps++;
            pickaxeAbility16(newOrigins[i][1], newOrigins[i][0], reps, boost)
        }
    }
    setTimeout(() => {
        displayArea();
        resolve(true);
    }, 1);
    });
}
function pickaxeAbility20(x, y, boost) {
    return new Promise((resolve) => {
    let thisLuck = 3 * boost;
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
            thisLuck += 0.02
        }
    }
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
            toMine[0][j]= toMine[1][j] = toMine[2][j] = true;
            thisLuck += 0.02
        }  
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        toMine[0][0] = toMine[1][1] = toMine[2][2] = true;
        thisLuck += 0.02
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        toMine[0][2] = toMine[1][1] = toMine[2][0] = true;
        thisLuck += 0.02
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
                        if (mine[r] != undefined) {
                            if (mine[r][c] === undefined) {
                                generated = generateBlock(thisLuck, [r, c]);
                                mine[r][c] = generated[0];
                                if (generated[1])
                                    verifiedOres.verifyLog(r, c);
                            }
                            mineBlock(c, r, "ability", thisLuck); 
                        }
                    }
                }
            } else if (board[i][j] === "X") {
                    for (let r = 0; r < 15; r++) {
                        if (mine[yStart + r] != undefined) {
                            if (mine[yStart + r][xStart + r] === undefined) {
                                generated = generateBlock(thisLuck, [yStart + r, xStart + r]);
                                mine[yStart + r][xStart + r] = generated[0];
                                if (generated[1])
                                    verifiedOres.verifyLog(yStart + r, xStart + r);
                            }
                            if (mine[yStart + r][xStart + (14 - r)] === undefined) {
                                generated = generateBlock(thisLuck, [yStart + r, xStart + (14 - r)]);
                                mine[yStart + r][xStart + (14 - r)] = generated[0];
                                if (generated[1])
                                    verifiedOres.verifyLog(yStart + r, xStart + (14 - r));
                            }
                        }
                    }
                
                
            } else {
                for (let r = 1; r < 14; r++) {
                    if (mine[yStart + r][xStart] === undefined) {
                        generated = generateBlock(thisLuck, [yStart + r, xStart]);
                        mine[yStart + r][xStart] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(yStart + r, xStart);
                    }

                    if (mine[yStart][xStart + r] === undefined) {
                        generated = generateBlock(thisLuck, [yStart, xStart + r]);
                        mine[yStart][xStart + r] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(yStart, xStart + r);
                    }
                    if (mine[yStart + r][xStart + 14] === undefined) {
                        generated = generateBlock(thisLuck, [yStart + r, xStart + 14]);
                        mine[yStart + r][xStart + 14] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(yStart + r, xStart + 14);
                    }
                    if (mine[yStart + 14][xStart + r] === undefined) {
                        generated = generateBlock(thisLuck, [yStart + 14, xStart + r]);
                        mine[yStart + 14][xStart + r] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(yStart + 14, xStart + r);
                    }
                }
            }
            
        }
    }
    displayArea();
    setTimeout(() => {
        displayArea();
        resolve(true);
    }, 1);
    });
}