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
let currentDisplay = "";
let blocksRevealedThisReset = 0;
let mineCapacity = 250000; // in case this ever needs to be raised
let canMine = false;
let lastDirection = "";
let currentWorld = 1;
let currentLayerNum = 0;
const birthdays = {
    "3/28" : "Draedon",
    "5/21" : "Jade",
    "12/16" : "ThatBotCook",
    "12/23" : "Amber"
}
//IMPORTANT
const date = new Date();
let limitedTimer;
let inventoryTimer;
let minedElement;
let revealedElement;
let locationElement;
let blockElement;
let emojiNames;
function init() {
    minedElement = document.getElementById("blocksMined");
    revealedElement = document.getElementById("mineResetProgress");
    locationElement = document.getElementById("location");
    blockElement = document.getElementById("blockDisplay");
    displayRows = document.getElementsByClassName("blockDisplayRow");
    document.getElementById("menuSelectionContainer").addEventListener('click', (event) => {
        if (event.target.parentElement.classList.contains("menuCategory")) closeMenu();
    }, false);
    let canContinue = true;
    createInventory();
    createGearRecipes();
    createPickaxeRecipes();
    switchPowerupDisplay(0)
        document.getElementById('dataText').value = "";
        if (Math.random() < 1/1000)
            document.getElementById("cat").innerText = "CatAxe";
        limitedTimer = setInterval(checkLimitedOres, 1000);
        inventoryTimer = setInterval(updateInventory, 500);
        if (date.getMonth() === 3 && date.getDate() === 1) {
            document.title = "The Sily Caverns";
        }
        for (let propertyName in birthdays) {
            if ((date.getMonth() + 1 === Number(propertyName.substring(0, propertyName.indexOf("/")))) && (date.getDate() === Number(propertyName.substring(propertyName.indexOf("/") + 1)))) {
                document.getElementById("spawnMessage").innerText = "Happy Birthday " + birthdays[propertyName] + "!!!";
            }
        }
        canContinue = loadAllData();
        saveAllData();
        fetch("emoji.json")
        .then((response) => response.json())
        .then((json) => setEmojiNames(json))
        .catch(error => {
            failedFetch();
        });
        fetch("abilityNums.json")
        .then((response) => response.json())
        .then((json) => assignPickaxeNums(json))
        .catch(error => {
            failedFetch();
        });
    if (canContinue) {
        repeatDataSave();
        cat = verifiedOres.getCurrentLuck();
        switchPowerupDisplay(0);
        createAllLayers();
        createMine();
        utilitySwitchActions();
        insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
        console.log("meow");
    }
}
function assignPickaxeNums(json) {
    pickaxe24Nums = json.pickaxeNums24;
    pickaxe25Nums = json.pickaxeNums25;
    treeLevels[0] = json.pickaxeNums27A;
    treeLevels[1] = json.pickaxeNums27B;
    treeLevels.cherryBranch = json.cherryBranch;
    treeLevels.autumnBranch = json.autumnBranch;
}
function failedFetch() {
    for (let ore in oreList) oreList[ore]["oreName"] = "FAILED TO FETCH NAMES";
    switchLayerIndex(0, "dirtLayer", 1);
    for (let ore in oreList) {
        oreList[ore]["Normal"].parentElement.setAttribute("title", oreList[ore]["oreName"]);
        oreList[ore]["Electrified"].parentElement.setAttribute("title", oreList[ore]["oreName"]);
        oreList[ore]["Radioactive"].parentElement.setAttribute("title", oreList[ore]["oreName"]);
        oreList[ore]["Explosive"].parentElement.setAttribute("title", oreList[ore]["oreName"]);
    }
    for (let i = 0; i < recipeElements.length; i++) {
        for (let j = 0; j < recipeElements[i].length; j++) {
            let elements = recipeElements[i][j].children;
            for (let k = 0; k < elements.length; k++) {
                let text = elements[k].innerText;
                if (oreList[text.substring(0, text.indexOf(" "))] != undefined) elements[k].setAttribute("title", oreList[text.substring(0, text.indexOf(" "))]["oreName"]);
            }
        }
    }
}
function setEmojiNames(emojis) {
    for (let i = 0; i < emojis.length; i++) {
        if (oreList[emojis[i]["character"]] != undefined) {
            oreList[emojis[i]["character"]]["oreName"] = emojis[i]["unicodeName"].substring(emojis[i]["unicodeName"].indexOf(" ") + 1);
            oreList[emojis[i]["character"]]["Normal"].parentElement.setAttribute("title", oreList[emojis[i]["character"]]["oreName"]);
            oreList[emojis[i]["character"]]["Electrified"].parentElement.setAttribute("title", oreList[emojis[i]["character"]]["oreName"]);
            oreList[emojis[i]["character"]]["Radioactive"].parentElement.setAttribute("title", oreList[emojis[i]["character"]]["oreName"]);
            oreList[emojis[i]["character"]]["Explosive"].parentElement.setAttribute("title", oreList[emojis[i]["character"]]["oreName"]);
        }
    }
    for (let i = 0; i < recipeElements.length; i++) {
        for (let j = 0; j < recipeElements[i].length; j++) {
            let elements = recipeElements[i][j].children;
            for (let k = 0; k < elements.length; k++) {
                let text = elements[k].innerText;
                if (oreList[text.substring(0, text.indexOf(" "))] != undefined) elements[k].setAttribute("title", oreList[text.substring(0, text.indexOf(" "))]["oreName"]);
            }
        }
    }
    document.getElementById("meterDisplay").setAttribute("title", oreList["🟫"]["oreName"]);
    switchLayerIndex(0, "dirtLayer", 1);
}

let chill;
let mystical;
let divine;
let flawless;
let interstellar;
let magnificent;
let sacred;
let ethereal;
let celestial;
let imaginary;
let keepRunningAudio;
let eventSpawn;
let allAudios = {
    "Antique" : undefined,
    "Mystical" : undefined,
    "Divine" : undefined,
    "Flawless" : undefined,
    "Interstellar" : undefined,
    "Metaversal" : undefined,
    "Sacred" : undefined,
    "Ethereal" : undefined,
    "Celestial" : undefined,
    "Imaginary" : undefined
};
function loadContent() {
    keepRunningAudio = new Audio("audios/ambiencebyx2corp.mp3")
    keepRunningAudio.load();
    eventSpawn = new Audio("audios/Glitch.mp3");
    eventSpawn.volume = 0.1;
    chill = new Audio("audios/chill.mp3");
    mystical = new Audio("audios/mystical.mp3");
    divine = new Audio("audios/divine.mp3");
    flawless = new Audio("audios/flawless.mp3");
    interstellar = new Audio("audios/interstellar.mp3");
    sacred = new Audio("audios/sacred.mp3");
    magnificent = new Audio("audios/magnificent.mp3");
    ethereal = new Audio("audios/ethereal sound by elysia.mp3");
    celestial = new Audio("audios/celestial.mp3");
    imaginary = new Audio("audios/imaginary.mp3");
    allAudios["Antique"] = chill;
    allAudios["Mystical"] = mystical;
    allAudios["Divine"] = divine;
    allAudios["Flawless"] = flawless;
    allAudios["Interstellar"] = interstellar;
    allAudios["Metaversal"] = magnificent;
    allAudios["Sacred"] = sacred;
    allAudios["Ethereal"] = ethereal;
    allAudios["Celestial"] = celestial;
    allAudios["Imaginary"] = imaginary;
    for (let property in allAudios) allAudios[property].load();
    musicPlayer.songs["song1"].src = new Audio("audios/ely_audio_1.mp3");
    musicPlayer.songs["song2"].src = new Audio("audios/ely_audio_2.mp3");
    musicPlayer.songs["song3"].src = new Audio("audios/ely_audio_3.mp3");
    musicPlayer.songs["song4"].src = new Audio("audios/mooing_audio_1.mp3");
    for (let property in musicPlayer.songs) {
        musicPlayer.songs[property].src.load();
        musicPlayer.songs[property].src.volume = musicPlayer.songs[property].baseVolume;
    }
    document.getElementById("pressPlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    canMine = true;
    init();
}

//MOVEMENT

function movePlayer(dir, reps) {
    for (let i = 0; i < reps; i++) {
        if (canMine) {
            if (currentWorld === 1 || (currentWorld === 2 && player.stats.currentPickaxe > 12) || (currentWorld === 1.1 && player.stats.currentPickaxe === 27)) {
                if (dir.y < 0 && !(curY > 0)) {
                    return;
                } else if (dir.x < 0 && !(curX > 0)) {
                    return;
                }
                let block = mine[curY + dir.y][curX + dir.x];
                block = block.ore === undefined ? block : block.ore;
                if (oreList[block]["isBreakable"]) { 
                    mine[curY][curX] = "⚪";
                    curY += dir.y;
                    curX += dir.x;
                    if (dir.y !== 0) setLayer(curY);
                    mineBlock(curX, curY, "mining");
                    mine[curY][curX] = "⛏️";
                    lastDirection = dir.key;
                } else {
                    if (mine[curY + dir.y][curX + dir.x] === "✖️") {
                        if (Math.random() < 1/20) {
                            mine[curY][curX] = "⚪";
                            curY += dir.y;
                            curX += dir.x;
                            if (dir.y !== 0) setLayer(curY)
                            mine[curY][curX] = "⛏️";
                            lastDirection = dir.key;
                            let variant = rollVariant();
                            if (player.gears["gear26"] && variant === 1) variant = rollVariant();
                            spawnMessage({block: "⛏️", location: {"X" : curX, "Y" : curY}, caveInfo: undefined, variant: variant})
                            giveBlock({type: "⛏️", x:curX, y:curY, fromReset: false, variant: variant});
                            checkAllAround(curX, curY);
                        }
                    }
                }
            }
        }
    }
    if (blocksRevealedThisReset >= mineCapacity) {
        blocksRevealedThisReset = 0;
        mineReset();
    }
    displayArea();
}
let keyCooldown = Date.now();
document.addEventListener('keydown', (event) => {
    let name = event.key;
    let validInput = false;
    name = name.toLowerCase();
    switch(name) {
        case "w":
            if (!buttonClicked && Date.now() >= keyCooldown) {validInput = true; keyCooldown = Date.now() + 15;}
            break;
        case "a":
            if (!buttonClicked && Date.now() >= keyCooldown) {validInput = true; keyCooldown = Date.now() + 15;}
            break;
        case "s":
            if (!buttonClicked && Date.now() >= keyCooldown) {validInput = true; keyCooldown = Date.now() + 15;}
            break;
        case "d":
            if (!buttonClicked && Date.now() >= keyCooldown) {validInput = true; keyCooldown = Date.now() + 15;}
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
            //toggleCelestials(false)
            if (document.getElementById("menuSelectionContainer").style.display !== "none") {
                closeMenu()
            }
            break;
        case "t":
            checkExistingOres();
            break;
        case "1":
            toggleSpecificPowerup(1);
            break;
        case "2":
            toggleSpecificPowerup(2);
            break;
        case "3":
            toggleSpecificPowerup(3);
            break;
        case "4":
            toggleSpecificPowerup(4);
            break;
        case "5":
            toggleSpecificPowerup(5);
            break;
        default:
            break;
    }
    if (validInput) {
        clearInterval(loopTimer);
        insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
        curDirection = "";
        let movements = {x:0, y:0, key:name};
        movements.x = (name === "a" ? -1 : (name === "d" ? 1 : 0));
        movements.y = (name === "s" ? 1 : (name === "w" ? -1 : 0));
        movePlayer(movements, 1);
        energySiphonerDirection = "";
    }
}, false);
let loopTimer = null;
let curDirection = "";
let baseSpeed = 25;;
function goDirection(direction, speed) {
    if (curDirection === direction) {
        clearInterval(loopTimer);
        insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
        curDirection = "";
    } else {
        let reps = 1;
        let miningSpeed;
        clearInterval(loopTimer);
        removeFromLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"]});
        if (speed === undefined) {
        if (currentWorld < 2 && player.gears["gear2"])
            miningSpeed = baseSpeed - 10;
        if (currentWorld < 2 && player.gears["gear6"])
            miningSpeed = baseSpeed - 15;
        if (currentWorld === 2 || (player.gears["gear11"] && player.gears["gear16"] && player.gears["gear19"]))
            miningSpeed = baseSpeed - (player.gears["gear11"] ? 3 : 0) - (player.gears["gear16"] ? 5 : 0) - (player.gears["gear19"] ? 13 : 0);
        } else {
            miningSpeed = speed;
        }
        if (miningSpeed < player.settings.minSpeed)
            miningSpeed = player.settings.minSpeed;
        if (player.stats.currentPickaxe === 12)
            reps++;
        reps += player.gears["gear19"] ? 2 : 0;
        if (a13) {
            reps = 1;
            miningSpeed = 35;
        }
        let movements = {x:0, y:0, key:direction};
        movements.x = (direction === "a" ? -1 : (direction === "d" ? 1 : 0));
        movements.y = (direction === "s" ? 1 : (direction === "w" ? -1 : 0));
        miningSpeed ??= 25;
        if (currentWorld === 1.1) {miningSpeed = 10 - player.upgrades["pickaxe27"].level; reps = 1;}
        loopTimer = setInterval(movePlayer, miningSpeed, movements, reps);
        curDirection = direction;
        energySiphonerDirection = direction;
    }
}
let buttonClicked = false;
function moveOne(dir, button) {
    button.disabled = true;
    buttonClicked = true;
    clearInterval(loopTimer);
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
    let movements = {x:0, y:0, key:dir};
    movements.x = (dir === "a" ? -1 : (dir === "d" ? 1 : 0));
    movements.y = (dir === "s" ? 1 : (dir === "w" ? -1 : 0));
    movePlayer(movements, 1);
    curDirection = "";
    setTimeout(() => {
        button.disabled = false;
        buttonClicked = false;
    }, 50);
    energySiphonerDirection = "";
}

//DISPLAY
let displayRows;
const invisibleBlock = "<span class='invisible'>⚪</span>";
function displayArea() {
    if (player.settings.canDisplay) {
        let output;
        let constraints = getParams(9, 9);
        let grass = 0;
        if (currentWorld === 2)
            grass = 2000;
        let i = 0;
        for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) mine[r] ??= [];
        for (let c = curX - constraints[0]; c <= curX + 9 + (9-constraints[0]); c++) {
            output = "";
            for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) {
                if (mine[r][c]) {
                    if (player.settings.usePathBlocks)
                        output += mine[r][c].ore !== undefined ? checkDisplayVariant(mine[r][c]) : mine[r][c];
                    else
                        output += mine[r][c] === "⚪" ? invisibleBlock : (mine[r][c].ore !== undefined ? checkDisplayVariant(mine[r][c]) : mine[r][c]);   
                } else {
                    output += r === grass ? "🟩" : "⬛";
                }
            }  
            displayRows[i].innerHTML = output;
            i++;
        }
    }
    revealedElement.textContent = blocksRevealedThisReset.toLocaleString() + "/" + mineCapacity.toLocaleString() + " Blocks Revealed This Reset";
    minedElement.textContent = player.stats.blocksMined.toLocaleString() + " Blocks Mined";
    let sub = currentWorld === 2 ? 2000 : 0;
    locationElement.textContent = "X: " + (curX - 1000000000).toLocaleString() + " | Y: " + (-(curY - sub)).toLocaleString();
    if (player.oreTracker.tracking) {
        getAngleBetweenPoints({x : player.oreTracker.locationX, y: player.oreTracker.locationY});
    }
}
function checkDisplayVariant(location) {
    let oreToAdd;
    let includeSize;
    let specialVariant;
    if (oreList[location.ore]["hasImage"]) {
        oreToAdd = `<img class="mineImage" src="${oreList[location.ore]["src"]}"></img>`;
        includeSize = "";
        specialVariant = "Img";
    } else {
        oreToAdd = location.ore;
        includeSize = "normalRare";
        specialVariant = "";
    }
    if (location.variant > 1) {
        //linear-gradient(to bottom right, #c91800, #ff722b, #383838) explosive
        //linear-gradient(to bottom right, #062404, #c9fc3a, #062404) radioactive
        //linear-gradient(to bottom right, #f7f368, #ffc629, #e365fc) electrified
        if (location.variant === 2) {
            return `<span class="electrifiedBlock${specialVariant} ${includeSize}">${oreToAdd}</span>`
        } else if (location.variant === 3) {
            return `<span class="radioactiveBlock${specialVariant} ${includeSize}">${oreToAdd}</span>`
        } else if (location.variant === 4) {
            return `<span class="explosiveBlock${specialVariant} ${includeSize}">${oreToAdd}</span>`
        }
    } else {
        return `<span class="${includeSize}">${oreToAdd}</span>`
    }
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
                tempElement.classList = "oreDisplay";
                if (i === 1) {
                    tempElement.setAttribute("onclick", "randomFunction(\"" + propertyName + "\", 'inv')");
                } else {
                    tempElement.setAttribute("onclick", `goToConvert("${propertyName}", ${i})`);
                }
                let colors = oreInformation.getColors(oreList[propertyName]["oreTier"]);
                tempElement.style.backgroundImage = "linear-gradient(to right, " + colors["backgroundColor"] + " 90%, black)"
                tempElement.style.color = colors["textColor"];
                tempElement.style.display = "none";
                let oreNameBlock = document.createElement("td");
                if (oreList[propertyName]["hasImage"]) {
                    oreNameBlock.innerHTML = `<span class="inventoryImage"><img src="${oreList[propertyName]["src"]}"></img></span>`
                } else {
                    oreNameBlock.innerText = propertyName;
                    oreNameBlock.classList = "inventoryElement1";
                }
                let oreRarityBlock = document.createElement("td");
                let rarity = oreList[propertyName]["numRarity"];
                if (oreList[propertyName]["caveExclusive"]) {
                    rarity *= getCaveMultiFromOre(propertyName);
                    oreRarityBlock.innerText = "1/" + (rarity * multis[i - 1]).toLocaleString() + "*";
                } else {
                    oreRarityBlock.innerText = "1/" + (rarity * multis[i - 1]).toLocaleString();
                }
                oreRarityBlock.classList = "inventoryElement2";
                let oreAmountBlock = document.createElement("td");
                oreAmountBlock.id = (propertyName + "amt" + i);
                oreAmountBlock.innerText = "x" + oreNum.toLocaleString();
                oreAmountBlock.classList = "inventoryElement3";
                oreList[propertyName][names[i - 1]] = oreAmountBlock;
                if (colors["textColor"] === "#ffffff") 
                {
                    oreRarityBlock.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
                    oreAmountBlock.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
                }
                else
                {
                    oreRarityBlock.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
                    oreAmountBlock.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
                } 
                tempElement.appendChild(oreNameBlock);
                tempElement.appendChild(oreRarityBlock);
                tempElement.appendChild(oreList[propertyName][names[i - 1]]);
                document.getElementById(("inventory") + i).appendChild(tempElement);
            }
        }
    }
        
     
}

let variant = 1;
let inventoryObj = {};
let lastTime = Date.now();
function updateInventory() {
    for (let propertyName in inventoryObj) {
        for (let i = 1; i < 5; i++) {
            oreList[propertyName][names[i - 1]].innerText = "x" + oreList[propertyName][variantInvNames[i - 1]].toLocaleString();
            if (oreList[propertyName][variantInvNames[i - 1]] > 0) (oreList[propertyName][names[i - 1]].parentElement).style.display = "table";
            else (oreList[propertyName][names[i - 1]].parentElement).style.display = "none";
        }
    }
    inventoryObj = {};
    updateActiveRecipe();
        if (player.powerupVariables.currentChosenOre.ore !== undefined && Date.now() >= player.powerupVariables.currentChosenOre.removeAt) {
            player.powerupVariables.currentChosenOre.ore = undefined;
            updateAllLayers();
        }
    if (player.powerupVariables.commonsAffected.state && Date.now() >= player.powerupVariables.commonsAffected.removeAt) {
        player.powerupVariables.commonsAffected.state = false;
        updateAllLayers();
    }
    if (player.powerupVariables.fakeEquipped.item !== "" && Date.now() >= player.powerupVariables.fakeEquipped.removeAt) {
        if (player.gears[player.powerupVariables.fakeEquipped.item] !== undefined) {
            if (player.powerupVariables.fakeEquipped.item === "gear0") document.getElementById("trackerLock").style.display = "inline-flex";
            if (player.powerupVariables.fakeEquipped.item === "gear9") document.getElementById("sillyRecipe").style.display = "none";
            player.gears[player.powerupVariables.fakeEquipped.item] = false;
            player.powerupVariables.fakeEquipped.item = "";
        }
        if (player.pickaxes[player.powerupVariables.fakeEquipped.item] !== undefined) {
            player.pickaxes[player.powerupVariables.fakeEquipped.item] = false;
            player.stats.currentPickaxe = player.powerupVariables.fakeEquipped.originalState;
            player.powerupVariables.fakeEquipped.item = "";
            player.powerupVariables.fakeEquipped.originalState = undefined;
            utilitySwitchActions();
        }
        let tempDirection = curDirection;
        stopMining();
        goDirection(tempDirection);
    }
    if (currentWorld === 1.1 && player.stats.currentPickaxe !== 27) player.stats.currentPickaxe = 27;
    else if (currentWorld !== 1.1 && player.stats.currentPickaxe === 27) player.stats.currentPickaxe = 0;
    checkPowerupCooldowns();
    updatePowerupCooldowns();
    updateDisplayedUpgrade();
    if (player.gears["gear24"]) autoPowerups();
    player.stats.timePlayed += Date.now() - lastTime;
    lastTime = Date.now();
    if (Date.now() >= ability1RemoveTime && energySiphonerActive) removeSiphoner();
    const bodyCheck = document.body.getBoundingClientRect();
    if (bodyCheck.height < 400) {
        document.getElementById("mainSticky").style.position = "relative";
        document.getElementById("mainTop").style.position = "relative";
    } 
    else {
        document.getElementById("mainSticky").style.position = "sticky";
        document.getElementById("mainTop").style.position = "sticky";
    }
}

function appear(element){
    element.classList.remove("hidden")
}
function disappear(element){
    element.classList.add("hidden")
}

//SPAWNS AND FINDS
let spawnOre = null;
let currentSpawnTier = "";
function spawnMessage(obj) {
    let block = obj.block;
    let location = obj.location;
    let caveInfo = obj.caveInfo;
    let variant = namesemojis[obj.variant - 1];
    let variantMulti = multis[obj.variant - 1];
    //ADD TO MINE CAPACITY IF NEAR RESET
    player.oreTracker.existingOres.push({block: block, posX : location["X"], posY : location["Y"]});
    let oreRarity = oreList[block]["numRarity"];
    let spawnElement = document.getElementById("latestSpawns");
    let output = "";
    const element = document.getElementsByClassName("htmlTemplate")[0].cloneNode(true);
    element.setAttribute("title", oreList[block]["oreName"]);
    element.style.display = "block";
    let blockOutput;
    if (oreList[block]["hasImage"]) {
        blockOutput = `<span class="latestImage"><img src="${oreList[block]["src"]}"></img></span>`
    } else {
        blockOutput = block;
    }
    if (caveInfo != undefined) output += `${variant} ${blockOutput}` + " 1/" + (caveInfo["adjRarity"] * variantMulti).toLocaleString() + " Adjusted.";
    else output += `${variant} ${blockOutput}` + " 1/" + (oreRarity * variantMulti).toLocaleString();
    let colors = oreInformation.getColors(oreList[block]["oreTier"]);
    element.style.backgroundImage = "linear-gradient(to right, black," + colors["backgroundColor"] + " 20%, 80%, black)";
    element.style.color = colors["textColor"];
    if (colors["textColor"] === "#ffffff") element.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
    else element.style.textShadow = "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff";
    element.innerHTML = output;
    if (spawnElement.children.length > 0) {
        spawnElement.insertBefore(element, spawnElement.firstChild);
    } else {
        spawnElement.innerText = "";
        spawnElement.appendChild(element)
    }
    if (spawnElement.children.length > player.settings.latestLength) spawnElement.removeChild(spawnElement.lastChild);
    let createSpawnMessage = false;
    let curTier = oreList[block]["oreTier"];
    if (oreInformation.tierGrOrEqTo({"tier1": curTier, "tier2":currentSpawnTier}) || spawnOre === null || currentSpawnTier === "") createSpawnMessage = true;
    if (createSpawnMessage) {
        if (obj.variant === 4) document.getElementById("spawnMessage").classList = "explosiveSpawnMessage";
        else if (obj.variant === 3) document.getElementById("spawnMessage").classList = "radioactiveSpawnMessage";
        else if (obj.variant === 2) document.getElementById("spawnMessage").classList = "electrifiedSpawnMessage";
        else if (obj.variant === 1) document.getElementById("spawnMessage").classList = "";
        currentSpawnTier = curTier;
        let spawnText;
        if (currentWorld === 1.1) {
            spawnText = `<i><span title="${oreList[block]["oreName"]}">` + oreInformation.getTierMessage(curTier) + "</span></i><br>";
            typeWriter(spawnText);
        } else {
            spawnText = `<i><span title="${oreList[block]["oreName"]}">` + oreList[block]["spawnMessage"] + "</span></i><br>";
            if (caveInfo != undefined) {
                spawnText += "1/" + (caveInfo["adjRarity"] * variantMulti).toLocaleString();
            } else {
                spawnText += "1/" + (oreRarity * variantMulti).toLocaleString();
            }
            typeWriter(spawnText)
        }
        clearTimeout(spawnOre);
        spawnOre = setTimeout(() => {
            document.getElementById("spawnMessage").classList = ""; 
            document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here!";
            spawnOre = null;
            currentSpawnTier = "";
        }, 30000);
        }
        
}
let typeCallNum = 0;
function typeWriter(string) {
    let char;
    let hex;
    let emoji
    let output = "";
    let ignoreUntil = 0;
    typeCallNum++;
    const thisTypeNum = typeCallNum;
    const element = document.getElementById('spawnMessage');
    for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
        char = string.substring(i, i + 1);
        hex = char.codePointAt(0).toString(16);
        emoji = String.fromCodePoint("0x"+hex);
        if (emoji === "<") {
            let htmlOutput = "";
            for (let j = i; j < string.length; j++) {
                let htmlChar = string.substring(j, j + 1);
                htmlOutput += htmlChar;
                if (htmlChar === ">") break;
            }
            ignoreUntil = i + htmlOutput.length;
            output += htmlOutput;
        } else {
            if (!(ignoreUntil > i)) {
                output += emoji;
            }
        }
        if (thisTypeNum === typeCallNum) element.innerHTML = output;
    }, 10 * i);
    }
}

let loggedFinds = [];
function logFind(type, x, y, variant, atMined, fromReset) {
    let output = "";
    //latestFinds.push([type, x, y, variant, atMined, fromReset]);
    removeExistingOre({x: x, y:y})
    let sub = currentWorld < 2 ? 0 : 2000;
    let spawnElement = document.getElementById("latestFinds");
    const element = document.getElementsByClassName("htmlTemplate")[0].cloneNode(true);
    element.setAttribute("title", oreList[type]["oreName"]);
    element.style.display = "block";
    let colors = oreInformation.getColors(oreList[type]["oreTier"]);
    element.style.backgroundImage = "linear-gradient(to right, black," + colors["backgroundColor"] + " 20%, 80%, black)";
    element.style.color = colors["textColor"];
    if (colors["textColor"] === "#ffffff") element.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
    else element.style.textShadow = "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff";
    element.setAttribute("title", oreList[type]["oreName"]);
    output += `<span onclick='goToOre(\"${type}\", \"${variant}\")'>`;
    output += variant + " ";
    let blockOutput;
    if (oreList[type]["hasImage"]) {
        blockOutput = `<span class="latestImage"><img src="${oreList[type]["src"]}"></img></span>`
    } else {
        blockOutput = type;
    }
    output += blockOutput + " | X: " + (x - 1000000000).toLocaleString() + ", Y: " + (-(y - sub)).toLocaleString();
    if (fromReset) output += " | Void Prevention.<br>";
    else output += " | At " + atMined.toLocaleString() +  " Mined.<br>";
    output += "</span>";
    element.innerHTML = output;
    if (spawnElement.children.length > 0) {
        spawnElement.insertBefore(element, spawnElement.firstChild);
    } else {
        spawnElement.innerText = "";
        spawnElement.appendChild(element)
    }
    if (spawnElement.children.length > player.settings.latestLength) spawnElement.removeChild(spawnElement.lastChild);
}

function getAngleBetweenPoints(obj) {
    let x = obj.x - curX;
    let y = obj.y - curY;
    let angle = Math.atan2(y, x);
    if(angle < 0) angle += Math.PI * 2;
    angle *= (180 / Math.PI);
    let element = (player.settings.useNyerd ? document.getElementById("nyerd") : document.getElementById("trackerArrow"));
    let rotate = (player.settings.useNyerd ? `rotate(${angle - 90}deg)` : `rotate(${angle}deg)`);
    element.style.transform = rotate;
    return angle;
}
function checkExistingOres() {
    let closestIndex = -1;
    let closestLocation = Infinity;
    for (let i = 0; i < player.oreTracker.existingOres.length; i++) {
        let num = Math.abs(curX - player.oreTracker.existingOres[i].posX) + Math.abs(curY - player.oreTracker.existingOres[i].posY);
        mine[player.oreTracker.existingOres[i].posY] ??= [];
        let block = mine[player.oreTracker.existingOres[i].posY][player.oreTracker.existingOres[i].posX];
        block = block.ore === undefined ? block : block.ore;
        if (num < closestLocation && (block === player.oreTracker.existingOres[i].block)) {
            closestIndex = i;
            closestLocation = num;
        }
    }
    if (closestIndex > -1) {
        mine[player.oreTracker.existingOres[closestIndex].posY] ??= [];
        let blockAtIndex = mine[player.oreTracker.existingOres[closestIndex].posY][player.oreTracker.existingOres[closestIndex].posX];
        let variantAtIndex = "";
        if (blockAtIndex.variant !== undefined) variantAtIndex = namesemojis[blockAtIndex.variant - 1];
        if (blockAtIndex.ore !== undefined) blockAtIndex = blockAtIndex.ore;
        if (blockAtIndex === player.oreTracker.existingOres[closestIndex].block) {
            player.oreTracker.tracking = true;
            player.oreTracker.locationX = player.oreTracker.existingOres[closestIndex].posX;
            player.oreTracker.locationY = player.oreTracker.existingOres[closestIndex].posY;
            let blockOutput;
            const ore = player.oreTracker.existingOres[closestIndex].block;
            if (oreList[ore]["hasImage"]) {
                blockOutput = `<span class="trackerImage"><img src="${oreList[ore]["src"]}"></img></span>`
            } else {
                blockOutput = ore;
            }
            document.getElementById("trackerOre").innerHTML = `Ore: ${variantAtIndex}${blockOutput}`
            document.getElementById("trackerX").innerText = `X: ${(player.oreTracker.locationX - 1000000000).toLocaleString()}`
            document.getElementById("trackerY").innerText = `Y: ${(-1 * (player.oreTracker.locationY - (currentWorld < 2 ? 0 : 2000))).toLocaleString()}`
            getAngleBetweenPoints({x:player.oreTracker.locationX, y:player.oreTracker.locationY});
        }
    }
}
function removeExistingOre(location) {
    for (let i = 0; i < player.oreTracker.existingOres.length; i++) {
        let num1 = player.oreTracker.existingOres[i].posX;
        let num2 = player.oreTracker.existingOres[i].posY;
        if (location.x === num1 && location.y === num2) {
            player.oreTracker.existingOres.splice(i, 1);
            if (location.x === player.oreTracker.locationX && location.y === player.oreTracker.locationY) {
                removeTrackerInformation();
            }
            break;
        }
    }
}
function removeTrackerInformation() {
    player.oreTracker.tracking = false;
    document.getElementById("trackerOre").innerText = `Ore: N/A`
    document.getElementById("trackerX").innerText = `X: N/A`
    document.getElementById("trackerY").innerText = `Y: N/A`
    player.oreTracker.locationX = 0;
    player.oreTracker.locationY = 0;
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
/*
function toggleCelestials(state) {
    let element = document.getElementById("celestialContainer");
    if (!state) {
        document.getElementById("mainContent").style.display = "block";
        element.style.display = "none";
        canMine = true
    } 
    else {
        element.style.display = "block";
        document.getElementById("mainContent").style.display = "none";
        canMine = false;
    }
}
*/
//TY @marbelynrye FOR MAKING THESE IMAGE DATA GATHERERS UR SO COOL FOR THAT
//IT WORKS SO WELL!!!!
let pickaxe24Nums = [];
let pickaxe25Nums = [];
let testNums = [];
/*
const az = new Image();
az.src = "media/Removal-920.webp"
        az.onload = () => {
            const c = new OffscreenCanvas(az.width,az.height)
            const cc = c.getContext("2d")
            cc.drawImage(az,0,0)
            const data = cc.getImageData(0,0,c.width,c.height).data
            console.log(data)
            for (let i = 0; i < data.length; i+=4) {
                data[i + 3]===0?null:testNums.push({"x":(i / 4) % c.width,"y":Math.floor((i / 4) / c.width)})
            }
}
*/

