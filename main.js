/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
const pixelcoordinate = (x, y, width) => {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
  };
  const azeiclopiff = function(x, y){
      const index = pixelcoordinate(x, y,this.canvas.width);
      const data = this.getImageData(0,0,this.canvas.width,this.canvas.height).data;
      return data[index[0]];
  }
  CanvasRenderingContext2D.prototype.getPixelColor = azeiclopiff;
  OffscreenCanvasRenderingContext2D.prototype.getPixelColor = azeiclopiff;
let mine = [];
let curX = 1000000000;
let curY = 0;
let currentDisplay = ""
let totalMined = 0;
let blocksRevealedThisReset = 0;
let baseMineCapacity = 40000;
let mineCapacity = 40000; // in case this ever needs to be raised
let canMine = false;
let lastDirection = "";
let stopOnRare = false;
let pickaxes = [
    ["is anyone gonna read these lol", true], //0
    ["hi!!! hii!!", false], //1
    ["wait no get out of here", false], //2
    ["stop it get out", false], //3
    ["leave!!!!!!!!", false], //4
    ["i have your ip", false], //5
    ["grrrrr leave!!", false], //6
    [":pouting-cat:", false], //7
    [">:C", false], //8
    ["IM HERE NOW TOO", false], //9
    ["mrrp meow meow!", false], //10
    ["cataxe", false], //11
    ["sorry chat, felt evil", false], //12
    ['THE KEY TO WHAT??', false], //13 1 consistency
    ['yawns, too good at naming things', false], //14 1.524 consistency
    ['prism of chaos...', false], //15 2 consistency
    ['starbyssss!!', false], //16 3.796 consistency
    ['ermmm cataxe', false], //17 6.24 consistency
    ['LA LUNA', false], //18 11.6 consistency
    ['this is just lazy', false], //19 ~24 consistency
    ['knots...', false], //20 ~40 consistency
    ['hey wait ive seen this one before', false], //21 ~75 consistency
    ['jesus christ what is it with world 2 and circles', false], //22 ~113 consistency
    ['man this ability sucks', false], //23 ~215 consistency
    ["NOBODY WILL SURVIVE THIS ABILITY ACTIVATING", false],
    ['ITS HUGE WHAT', false]
];
let gears = [
    false, //ORE TRACKER 0
    false, //REAL CANDILIUM 1
    false, //REAL VITRIOL 2
    false, //INFINITY COLLECTOR 3
    false, //LAYER MATERIALIZER 4
    false, //FORTUNE III BOOK 5
    false, //HASTE II BEACON 6
    false, //ENERGY SIPHONER 7
    false, //SUGAR RUSH 8
    false, //SILLY TP 9
    false, //LUCK 1 10
    false, //SPEED 1 11
    false, //LUCK 2 12
    false, //COMMON DUPLICATION 13
    false, //CAVE UNLOCK 14
    false, //+2 LAYER BLOCKS 15
    false, //SPEED 2 16
    false, //INFINITY COLLECTOR 2 17
    false, //LUCK 3 18
    false, //SPEED 3 19
    false, //15% OF CURRENT PICKAXE LUCK 20
];
let currentPickaxe = 0;
let currentWorld = 1;
let currentLayerNum = 0;
//IMPORTANT
const date = new Date();
let limitedTimer;
function init() {
    let canContinue = true;
    createSpecialLayers();
    createInventory();
    createMine();
    let playedBefore
    if (!debug) playedBefore = localStorage.getItem("playedBefore");
    else playedBefore = localStorage.getItem("testingPlayedBefore");
    if (playedBefore)
        canContinue = loadAllData();
    else {
        canContinue = true;
        saveAllData();
    }
        
    
    if (canContinue) {
        repeatDataSave();
        if (!debug) localStorage.setItem("playedBefore", true);
        else localStorage.setItem("testingPlayedBefore", true);
        createPickaxeRecipes();
        createGearRecipes();
        document.getElementById('dataText').value = "";
        switchLayerIndex(0, 0);
        if (Math.random() < 1/1000)
            document.getElementById("cat").innerText = "CatAxe";
        for (let propertyName in caveList) {
            sortCaveRarities(caveList[propertyName]);
        }
        cat = verifiedOres.getCurrentLuck();
        utilitySwitchActions();
        limitedTimer = setInterval(checkLimitedOres, 10000);
        if (date.getMonth() === 3 && date.getDate() === 1) {
            document.title = "The Sily Caverns";
        }
        console.log("meow");
    }
}

let chill;
let ringing;
let visionblur;
let unfath;
let ow;
let magnificent;
let zenith;
let ethereal;
let celestial;
let imaginary;
let keepRunningAudio;
let allAudios = [];
function loadContent() {
    keepRunningAudio = new Audio("audios/ambiencebyx2corp.mp3")
    keepRunningAudio.load();
    keepRunning();
    chill = new Audio("audios/spinechill.mp3");
    ringing = new Audio("audios/Transcendent.mp3");
    visionblur = new Audio("audios/visionblur.mp3");
    unfath = new Audio("audios/Unfathsound.mp3");
    ow = new Audio("audios/Otherworldly.mp3");
    zenith = new Audio("audios/Zenithsound.mp3");
    magnificent = new Audio("audios/magnificent.mp3");
    ethereal = new Audio("audios/ethereal sound by elysia.mp3");
    celestial = new Audio("audios/celestial.mp3");
    imaginary = new Audio("audios/ethereal sound by elysia.mp3")
    allAudios.push(chill);
    allAudios.push(ringing);
    allAudios.push(visionblur);
    allAudios.push(unfath);
    allAudios.push(ow);
    allAudios.push(magnificent);
    allAudios.push(zenith);
    allAudios.push(ethereal);
    allAudios.push(celestial);
    allAudios.push(imaginary);
    for (let i = 0; i < allAudios.length; i++)
        allAudios[i].load();
    document.getElementById("pressPlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    canMine = true;
    init();
}

//MOVEMENT

function movePlayer(dir, reps) {
    for (let i = 0; i < reps; i++) {
        if (canMine) {
            switch (dir) {
                case "s":
                    if (currentWorld === 1 || currentPickaxe > 12) {
                        if (oreList[mine[curY + 1][curX]]["isBreakable"]) {
                            mine[curY][curX] = "⚪";
                            curY++;
                            setLayer(curY);
                            mineBlock(curX, curY, "mining");
                            mine[curY][curX] = "⛏️";
                            lastDirection = "s";
                        } else {
                            if (mine[curY + 1][curX] === "✖️") {
                                if (Math.random() < 1/10000000) {
                                    mine[curY][curX] = "⚪";
                                    curY++;
                                    setLayer(curY);
                                    mine[curY][curX] = "⛏️";
                                    lastDirection = "s";
                                    spawnMessage("⛏️", {"X" : curX, "Y" : curY})
                                    giveBlock("⛏️", curX, curY, false);
                                    checkAllAround(curX, curY);
                                }
                            }
                        }
                        break;
                    }
                case "w":
                    if (curY > 0) {
                        if (currentWorld === 1 || currentPickaxe > 12) {
                            if (oreList[mine[curY - 1][curX]]["isBreakable"]) {
                                mine[curY][curX] = "⚪";
                                curY--;
                                setLayer(curY);
                                mineBlock(curX, curY, "mining");
                                mine[curY][curX] = "⛏️";
                                lastDirection = "w";   
                            } else {
                            if (mine[curY - 1][curX] === "✖️") {
                                if (Math.random() < 1/10000000) {
                                    mine[curY][curX] = "⚪";
                                    curY--
                                    setLayer(curY);
                                    mine[curY][curX] = "⛏️";
                                    lastDirection = "s";
                                    spawnMessage("⛏️", {"X" : curX, "Y" : curY})
                                    giveBlock("⛏️", curX, curY, false);
                                    checkAllAround(curX, curY);
                                }
                            }
                        }
                    }
                    }
                    break;
                case "a":
                    if (curX > 0) {
                        if (currentWorld === 1 || currentPickaxe > 12) {
                            if (oreList[mine[curY][curX - 1]]["isBreakable"]) {
                                mineBlock(curX - 1, curY, "mining");
                                mine[curY][curX] = "⚪";
                                curX--;
                                mine[curY][curX] = "⛏️";
                                lastDirection = "a";
                            } else {
                                if (mine[curY][curX - 1] === "✖️") {
                                    if (Math.random() < 1/10000000) {
                                        mine[curY][curX] = "⚪";
                                        curX--;
                                        setLayer(curY);
                                        mine[curY][curX] = "⛏️";
                                        lastDirection = "s";
                                        spawnMessage("⛏️", {"X" : curX, "Y" : curY})
                                        giveBlock("⛏️", curX, curY, false);
                                        checkAllAround(curX, curY);
                                    }
                                }
                            }
                        }
                    }
                    break;
                case "d":
                    if (currentWorld === 1 || currentPickaxe > 12) {
                        if (oreList[mine[curY][curX + 1]]["isBreakable"]) {
                            mineBlock(curX + 1, curY, "mining");
                            mine[curY][curX] = "⚪";
                            curX++;
                            mine[curY][curX] = "⛏️";
                            lastDirection = "s";
                        } else {
                            if (mine[curY][curX + 1] === "✖️") {
                                if (Math.random() < 1/10000000) {
                                    mine[curY][curX] = "⚪";
                                    curX++;
                                    setLayer(curY);
                                    mine[curY][curX] = "⛏️";
                                    lastDirection = "s";
                                    spawnMessage("⛏️", {"X" : curX, "Y" : curY})
                                    giveBlock("⛏️", curX, curY, false);
                                    checkAllAround(curX, curY);
                                }
                            }
                        }
                    break;
                    }
                default:
            }
            updateActiveRecipe();
        }
        displayArea();
        }
}

document.addEventListener('keydown', (event) => {
    let name = event.key;
    let validInput = false;
    name = name.toLowerCase();
    switch(name) {
        case "w":
            validInput = true;
            break;
        case "a":
            validInput = true;
            break;
        case "s":
            validInput = true;
            break;
        case "d":
            validInput = true;
            break;
        case "arrowup":
            event.preventDefault();
            goDirection('w')
            return;
        case "arrowleft":
            event.preventDefault();
            goDirection('a')
            return;
        case "arrowdown":
            event.preventDefault();
            goDirection('s')
            return;
        case "arrowright":
            event.preventDefault();
            goDirection('d')
            return;
        case "escape":
            if (document.getElementById("settingsContainer").style.display === "block") 
                hideSettings();
            else
                showSettings();
            break;
        default:
            break;
    }
    if (validInput) {
        clearInterval(loopTimer);
        curDirection = "";
        movePlayer(name, 1);
        energySiphonerDirection = "";
    }
}, false);

let loopTimer = null;
let curDirection = "";
let miningSpeed = 25;
function goDirection(direction, speed) {
    if (curDirection === direction) {
        clearInterval(loopTimer);
        curDirection = "";
        if (ability1Active) {
            clearTimeout(ability1Timeout);
            ability1Active = false;
        }
    } else {
        let reps = 1
        clearInterval(loopTimer);
        if (speed === undefined) {
        if (currentWorld === 1 && gears[2])
            miningSpeed = 15;
        if (currentWorld === 1 && gears[6])
            miningSpeed = 10;
        if (currentWorld === 2)
            miningSpeed = 25 - (gears[11] ? 3 : 0) - (gears[13] ? 5 : 0) - (gears[19] ? 7 : 0);
        } else {
            miningSpeed = speed;
        }
        if (miningSpeed < minMiningSpeed)
            miningSpeed = minMiningSpeed;
        if (currentPickaxe === 12)
            reps++;
        reps += gears[19] ? 2 : 0;
        loopTimer = setInterval(movePlayer, miningSpeed, direction, reps);
        curDirection = direction;
        energySiphonerDirection = direction;
    }
}

function moveOne(dir, button) {
    button.disabled = true;
    clearInterval(loopTimer);
    setTimeout(() => {
        movePlayer(dir, 1);
    }, 15);
    curDirection = "";
    setTimeout(() => {
        button.disabled = false;
    }, 100);
    energySiphonerDirection = "";
}

function updateStats() {
    let pickaxeLevel1 = currentWorld === 1 ? 9 : 23;
    let pickaxeLevel2 = currentWorld === 1 ? 6 : 20;
    minRarity = (currentPickaxe > pickaxeLevel1 ? 20000000 : (currentPickaxe > pickaxeLevel2 ? 2000000 : 750000));
}

//DISPLAY
const invisibleBlock = "<span class='invisible'>⚪</span>";
function displayArea() {
    if (canDisplay) {
        let output ="";
        let constraints = getParams(9, 9);
        let grass = 0;
        if (currentWorld === 2)
            grass = 2000;
        for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) {
            mine[r] ??= [];
            for (let c = curX - constraints[0]; c <= curX + 9 + (9-constraints[0]); c++) {
                if (mine[r][c]) {
                    if (usePathBlocks)
                        output += mine[r][c];
                    else
                        output += mine[r][c] === "⚪" ? invisibleBlock : mine[r][c];   
                } else {
                    output += r === grass ? "🟩" : "⬛";
                }
            }  
            output += "<br>";
        }
        document.getElementById("blockDisplay").innerHTML = (output.substring(0, output.length - 4));
    } else {
        document.getElementById("blockDisplay").innerHTML = "❌";
    }
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset.toLocaleString() + "/" + mineCapacity.toLocaleString() + " Blocks Revealed This Reset";
    document.getElementById("blocksMined").innerHTML = totalMined.toLocaleString() + " Blocks Mined";
    let sub = currentWorld === 2 ? 2000 : 0;
    document.getElementById("location").innerHTML = "X: " + (curX - 1000000000).toLocaleString() + " | Y: " + (-(curY - sub)).toLocaleString();
}

//HTML EDITING

const names = ["Normal", "Electrified", "Radioactive", "Explosive"];
const namesemojis = ["", "⚡️", "☢️", "💥"]
function switchInventory(amt) {
    document.getElementById(("inventory") + variant).style.display = "none";
    variant += amt;
    if (variant > 4) variant = 1;
    else if (variant < 1) variant = 4
    document.getElementById("inventory" + variant).style.display = "block";
    document.getElementById("switchInventory").innerHTML = names[variant - 1] + " Inventory"
    showing = false;
}

function createInventory() {
    let arr = [];
    for (let propertyName in oreInformation.oreTiers) {
        arr.push(oreInformation.getOresByTier(propertyName));
    }
    for (let k = arr.length - 1; k >= 0; k--) {
        for (let i = 0; i < arr[k].length; i++) {
            for (let j = 0; j < arr[k].length - i - 1; j++) {
                let rarity1 = oreList[arr[k][j]]["numRarity"];
                let rarity2 = oreList[arr[k][j + 1]]["numRarity"];
                    if (oreList[arr[k][j]]["caveExclusive"])
                rarity1 *= getCaveMultiFromOre(arr[k][j]);
                if (oreList[arr[k][j + 1]]["caveExclusive"])
                    rarity2 *= getCaveMultiFromOre(arr[k][j + 1]);
                if (rarity1 < rarity2) {
                    const lesser = arr[k][j + 1];
                    arr[k][j + 1] = arr[k][j];
                    arr[k][j] = lesser;
                }
            }
        }
        
    }
    for (let j = arr.length - 1; j >= 0; j--) {
        for (let k = 0; k < arr[j].length; k++) {
            let propertyName = arr[j][k];
            for (let i = 1; i < 5; i++) {
                let oreNum = oreList[propertyName][variantInvNames[i - 1]];
                let tempElement = document.createElement('tr');
                tempElement.id = (propertyName + i);
                tempElement.classList = "oreDisplay";
                tempElement.setAttribute("onclick", "randomFunction(this.innerText, 'inv')");
                let colors = oreInformation.getColors(oreList[propertyName]["oreTier"]);
                tempElement.style.backgroundImage = "linear-gradient(to right, " + colors["backgroundColor"] + " 90%, black)"
                tempElement.style.color = colors["textColor"];
                tempElement.style.display = "none";
                let oreNameBlock = document.createElement("td");
                oreNameBlock.innerText = propertyName;
                oreNameBlock.classList = "inventoryElement1";
                let oreRarityBlock = document.createElement("td");
                let rarity = oreList[propertyName]["numRarity"];
                if (oreList[propertyName]["caveExclusive"])
                    rarity *= getCaveMultiFromOre(propertyName);
                oreRarityBlock.innerText = "1/" + (rarity * multis[i - 1]).toLocaleString();
                oreRarityBlock.classList = "inventoryElement2";
                let oreAmountBlock = document.createElement("td");
                oreAmountBlock.id = (propertyName + "amt" + i);
                oreAmountBlock.innerText = oreNum.toLocaleString();
                oreAmountBlock.classList = "inventoryElement3";
                tempElement.appendChild(oreNameBlock);
                tempElement.appendChild(oreRarityBlock);
                tempElement.appendChild(oreAmountBlock);
                document.getElementById(("inventory") + i).appendChild(tempElement);
            }
        }
    }
        
     
}

let variant = 1;
function updateInventory(type, inv) {
    let amt = oreList[type][variantInvNames[inv - 1]];
    let element = document.getElementById((type + "amt" + (inv)));
    element.innerText = "x" + amt.toLocaleString();
    if (amt > 0) element.parentElement.style.display = "table";
    else element.parentElement.style.display = "none";
}

function appear(element){
    element.classList.remove("hidden")
}
function disappear(element){
    element.classList.add("hidden")
}

//SPAWNS AND FINDS

let spawnOre = null;
function spawnMessage(block, location, caveInfo) {
    //ADD TO MINE CAPACITY IF NEAR RESET
    if ((currentWorld === 1 && !gears[3]) && (blocksRevealedThisReset > mineCapacity - 10000) && mineCapacity < baseMineCapacity + 50000)
        mineCapacity += 10000;
    else if (!gears[17] && (blocksRevealedThisReset > mineCapacity - 10000) && mineCapacity < baseMineCapacity + 50000)
        mineCapacity += 10000;
    let oreRarity = oreList[block]["numRarity"];
    if ((currentWorld === 1 && gears[3]) || currentWorld === 2 && gears[17]) {
        if (caveInfo === undefined) {
            mineBlock(location["X"], location["Y"], "ability");
        }
        else {
            mineCaveBlock(location["X"], location["Y"], caveInfo["caveType"])
        }
    }
    let spawnElement = document.getElementById("latestSpawns");
    let sub = currentWorld === 1 ? 0 : 2000;
    let output = "";
    let element = document.createElement("p");
    element.classList = "latestFind";
    if (caveInfo != undefined) output += block + " 1/" + caveInfo["adjRarity"].toLocaleString() + " Adjusted.";
    else output += block + " 1/" + oreRarity.toLocaleString();
    if (gears[0] || currentPickaxe === 5) output += " | X: " + (location["X"] - 1000000000).toLocaleString() + ", Y: " + (-(location["Y"] - sub)).toLocaleString();
    let colors = oreInformation.getColors(oreList[block]["oreTier"]);
    element.style.backgroundImage = "linear-gradient(to right, black," + colors["backgroundColor"] + " 20%, 80%, black)";
    element.style.color = colors["textColor"];
    element.innerText = output;
    if (spawnElement.children.length > 0) {
        spawnElement.insertBefore(element, spawnElement.firstChild);
    } else {
        spawnElement.innerText = "";
        spawnElement.appendChild(element)
    }
    if (spawnElement.children.length > 10) spawnElement.removeChild(spawnElement.lastChild);
        let createSpawnMessage = false;
        if (spawnOre === null) 
            createSpawnMessage = true;
        else if (document.getElementById("spawnMessage").innerText.indexOf(" Has Spawned!") > -1) 
            createSpawnMessage = true;
        else if (oreList[block]["spawnMessage"].indexOf(" Has Spawned!") < 0)
            createSpawnMessage = true;
        if (createSpawnMessage) {
            let spawnText = "<i>" + oreList[block]["spawnMessage"] + "</i><br>";
            if (caveInfo != undefined) {
                document.getElementById("spawnMessage").innerHTML = spawnText + "1/" + (caveInfo["adjRarity"]).toLocaleString();(currentPickaxe === 5 || gears[0]? "<br>X: " + (location["X"] - 1000000000).toLocaleString() + "<br>Y: " + (-(location["Y"] - sub)).toLocaleString():"");
            } else {
                document.getElementById("spawnMessage").innerHTML = spawnText + "1/" + oreRarity.toLocaleString() + (currentPickaxe === 5 || gears[0]?"<br>X: " + (location["X"] - 1000000000).toLocaleString() + "<br>Y: " + (-(location["Y"] - sub)).toLocaleString():"");
            }
        }
        clearTimeout(spawnOre);
        spawnOre = setTimeout(() => {
            document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here!";
            spawnOre = null;
        }, 20000);
}

let loggedFinds = [];
function logFind(type, x, y, variant, atMined, fromReset) {
    let output = "";
    //latestFinds.push([type, x, y, variant, atMined, fromReset]);
    let sub = currentWorld === 1 ? 0 : 2000;
    let spawnElement = document.getElementById("latestFinds");
    let element = document.createElement("p");
    element.classList = "latestFind";
    let colors = oreInformation.getColors(oreList[type]["oreTier"]);
    element.style.backgroundImage = "linear-gradient(to right, black," + colors["backgroundColor"] + " 20%, 80%, black)";
    element.style.color = colors["textColor"];
    output += "<span onclick='goToOre(\"" + type + "\", \"" + variant + "\")'>";
    output += variant + " ";
    output += type + " | X: " + (x - 1000000000).toLocaleString() + ", Y: " + (-(y - sub)).toLocaleString();
    if (fromReset) output += " | FROM RESET<br>";
    else output += " | At " + atMined.toLocaleString() +  " Mined.<br>";
    output += "</span>";
    element.innerHTML = output;
    if (spawnElement.children.length > 0) {
        spawnElement.insertBefore(element, spawnElement.firstChild);
    } else {
        spawnElement.innerText = "";
        spawnElement.appendChild(element)
    }
    if (spawnElement.children.length > 10) spawnElement.removeChild(spawnElement.lastChild);
}

function goToOre(block, variantType) {
    //SET INVENTORY
    let variantNum = namesemojis.indexOf(variantType) + 1;
    document.getElementById("inventory" + variant).style.display = "none";
    variant = variantNum;
    document.getElementById("inventory" + variant).style.display = "block";
    document.getElementById("switchInventory").innerHTML = names[variant - 1] + " Inventory"
    let inventoryElements = document.getElementById("inventory" + variantNum).children;
    let oreHeightValue
    if (inventoryElements[0].style.display === "table")
        oreHeightValue = inventoryElements[0].getBoundingClientRect()["height"];
    else {
        inventoryElements[0].style.display = "table";
        oreHeightValue = inventoryElements[0].getBoundingClientRect()["height"];
        inventoryElements[0].style.display = "none";
    }
    let multi = 0;
    for (let i = 0; i < inventoryElements.length; i++) {
        let ore = inventoryElements[i].innerText.substring(0, inventoryElements[i].innerText.indexOf("1") - 1);
        let element = inventoryElements[i];
        if (element.style.display === "table") {
            if (ore === block) {
                let total = oreHeightValue * multi;
                document.getElementById("inventoryDisplay").scrollTop = total;
                return;
            } else {
                multi++;
            }
        }
    }
}

//TY @marbelynrye FOR MAKING THESE IMAGE DATA GATHERERS UR SO COOL FOR THAT
//IT WORKS SO WELL!!!!
let pickaxe24Nums = [];
const az = new Image()
az.src = "ability1.jpg"
        az.onload = () => {
            const c = new OffscreenCanvas(az.width,az.height)
            const cc = c.getContext("2d")
            cc.drawImage(az,0,0)
            const data = cc.getImageData(0,0,c.width,c.height).data
            for (let i = 0; i < data.length; i+=4) {
                data[i]>125?null:pickaxe24Nums.push({"x":(i / 4) % c.width,"y":Math.floor((i / 4) / c.width)})
            }
    }
let pickaxe25Nums = [];
const ay = new Image();
ay.src = "coronalheart.png"
ay.onload = () => {
    const c = new OffscreenCanvas(ay.width,ay.height)
    const cc = c.getContext("2d")
    cc.drawImage(ay,0,0)
    const data = cc.getImageData(0,0,c.width,c.height).data
    for (let i = 0; i < data.length; i+=4) {
        data[i]>125?null:pickaxe25Nums.push({"x":(i / 4) % c.width,"y":Math.floor((i / 4) / c.width)})
    }
}