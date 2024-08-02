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
let curX = 1000000;
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
    "12/16" : "ThatBotCook",
    "12/23" : "Amber",
    "8/8" : "Korone",
    "4/8" : "REEKY",
    "4/27" : "Tetra (if you changed your name i am Not changing it here)"
}
//IMPORTANT
const date = new Date();
let limitedTimer;
let inventoryTimer;
let trophyTimer;
let minedElement;
let revealedElement;
let locationElement;
let blockElement;
let emojiNames;
let messageElement;
let eventElement;
function init() {
    for (let propertyName in oreList) {
        playerInventory[propertyName] = {"normalAmt":0,"electrifiedAmt":0, "radioactiveAmt":0, "explosiveAmt":0, "foundAt": undefined}
    }
    minedElement = document.getElementById("blocksMined");
    revealedElement = document.getElementById("resetNumber");
    locationElement = document.getElementById("location");
    blockElement = document.getElementById("blockDisplay");
    displayRows = document.getElementsByClassName("blockDisplayRow");
    messageElement = document.getElementById("spawnMessage");
    eventElement = document.getElementById("eventMessages");
    document.getElementById('dataFileUpload').addEventListener('change', getFileContents, false);
    document.getElementById("menuSelectionContainer").addEventListener('click', (event) => {
        if (event.target.parentElement.classList.contains("menuCategory")) closeMenu();
    }, false);
    createInventory();
    createGearRecipes();
    createPickaxeRecipes();
    assignImageNames();
    createAllLayers();
    createMine();
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
    removeFromLayers({"ore":"HD 160529","layers":["waterLayer"]});
    if (Math.random() < 1/1000) insertIntoLayers({"ore":"intercept", "layers":["globeLayer"], "useLuck":true})
    formatEventText();
    addPickaxeDescriptions();
    document.getElementById('dataText').value = "";
    if (Math.random() < 1/1000) document.getElementById("cat").innerText = "CatAxe";
    limitedTimer = setInterval(checkLimitedOres, 1000);
    inventoryTimer = setInterval(updateInventory, 500);
    trophyTimer = setInterval(checkUnlockConditions, 5000)
    if (date.getMonth() === 3 && date.getDate() === 1) {
        document.title = "The Sily Caverns";
    }
    for (let propertyName in birthdays) {
        if ((date.getMonth() + 1 === Number(propertyName.substring(0, propertyName.indexOf("/")))) && (date.getDate() === Number(propertyName.substring(propertyName.indexOf("/") + 1)))) {
            document.getElementById("spawnMessage").innerText = "Happy Birthday " + birthdays[propertyName] + "!!!";
        }
    }
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
    let canContinue = loadAllData();
    if (canContinue) {
        repeatDataSave();
        cat = verifiedOres.getCurrentLuck();
        checkUnlockConditions();
        switchWorldCraftables();
        switchPowerupDisplay(0);
        utilitySwitchActions();
        console.log("meow");
    }
}
function assignImageNames() {
    for (let ore in oreList) {
        if (oreList[ore]["hasImage"]) {
            for (let i = 0; i < 4; i++) {
                oreList[ore][names[i]].parentElement.setAttribute("title", oreList[ore]["oreName"])
            }
        }
    }
}
function assignPickaxeNums(json) {
    pickaxe24Nums = json.pickaxeNums24;
    pickaxe25Nums = json.pickaxeNums25;
    pickaxe28Nums = json.pickaxeNums28;
    pickaxe29Nums = json.pickaxeNums29;
    pickaxe30Nums = json.pickaxeNums30;
    pickaxe31Nums = json.pickaxeNums31;
    pickaxe1Nums = json.pickaxeNums1;
    pickaxe2Nums = json.pickaxeNums2;
    pickaxe3Nums = json.pickaxeNums3;
    pickaxe4Nums = json.pickaxeNums4;
    pickaxe5Nums = json.pickaxeNums5;
    pickaxe6Nums = json.pickaxeNums6;
    pickaxe9Nums = json.pickaxeNums9;
    pickaxe10Nums = json.pickaxeNums10;
    pickaxe11Nums = json.pickaxeNums11;
    pickaxe12Nums = json.pickaxeNums12;
    treeLevels[0] = json.pickaxeNums27A;
    treeLevels[1] = json.pickaxeNums27B;
    treeLevels.cherryBranch = json.cherryBranch;
    treeLevels.autumnBranch = json.autumnBranch;
    treeLevels.winterBranch = json.winterBranch;
    treeLevels.summerBranch = json.summerBranch;
}
//meow
function failedFetch() {
    for (let ore in oreList) oreList[ore]["oreName"] = "FAILED TO FETCH NAMES";
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
    document.getElementById("meterDisplay").setAttribute("title", oreList[getLayer(curY).layerMat]["oreName"]);
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
    "Imaginary" : undefined,
    "Hyperdimensional" : undefined,
    "Infinitesimal" : undefined
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
    hyperdimensional = new Audio("audios/hyperdimensional.mp3");
    infinitesimal = new Audio("audios/infinitesimal.mp3");
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
    allAudios["Hyperdimensional"] = hyperdimensional;
    allAudios["Infinitesimal"] = infinitesimal;
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
function movePlayer(dir, reps, type) {
    for (let i = 0; i < reps; i++) {
        if (canMine) {
            if (verifiedOres.isRightPickaxe()) {
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
                    movementsX += Math.abs(dir.y) + Math.abs(dir.x)
                    if (dir.y !== 0) setLayer(curY);
                    mineBlock(curX, curY, "mining");
                    mine[curY][curX] = "⛏️";
                    lastDirection = dir.key;
                    if (player.gears["gear29"] && !isHoldingShift && type !== "single") {
                        if (dir.y !== 0) {
                            if (curY > 0 && mine[curY + dir.y][curX] === "⚪") {
                                mine[curY][curX] = "⚪";
                                curY += getNextSolidY(dir.y, curY, curX);
                                mine[curY][curX] = "⛏️";
                            }
                        } else if (dir.x !== 0) {
                            if (mine[curY][curX + dir.x] === "⚪") {
                                mine[curY][curX] = "⚪";
                                curX += getNextSolidX(dir.x, curY, curX);
                                mine[curY][curX] = "⛏️";
                            }
                        }
                    }
                } else {
                    if (mine[curY + dir.y][curX + dir.x] === "✖️") {
                        if (Math.random() < 1/10000000) {
                            mine[curY][curX] = "⚪";
                            curY += dir.y;
                            curX += dir.x;
                            if (dir.y !== 0) setLayer(curY)
                            mine[curY][curX] = "⛏️";
                            lastDirection = dir.key;
                            let variant = rollVariant();
                            if (player.gears["gear25"] && variant === 1) variant = rollVariant();
                            spawnMessage({block: "⛏️", location: {"X" : curX, "Y" : curY}, caveInfo: undefined, variant: variant, amt:1})
                            giveBlock({type: "⛏️", x:curX, y:curY, fromReset: false, variant: variant});
                            checkAllAround(curX, curY);
                            playSound("Celestial")
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
    if (curDirection === "") displayArea();
}
function getNextSolidY(dir, y, x) {
    const original = dir;
    while (y + dir > 0 && mine[y + dir][x] === "⚪" && Math.abs(dir) < 25) dir += original;
    return dir - original;
}
function getNextSolidX(dir, y, x) {
    const original = dir;
    while (x + dir > 0 && mine[y][x + dir] === "⚪" && Math.abs(dir) < 25) dir += original;
    return dir - original;
}
let keyCooldown = Date.now();
let isHoldingShift = false;
const catstuff = {
    ":" : false,
    layer: undefined
}
document.addEventListener('keydown', (event) => {
    let name = event.key;
    let validInput = false;
    name = name.toLowerCase();
    if (get("menuSelectionContainer").style.display !== "block") {
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
                if (catstuff[":"]) {showCatText(); catstuff[":"] = false;}
                else toggleSpecificPowerup(3);
                break;
            case "4":
                toggleSpecificPowerup(4);
                break;
            case "5":
                toggleSpecificPowerup(5);
                break;
            case "shift":
                isHoldingShift = true;
                break;
            case ":":
                catstuff[":"] = true;
                break;
            default:
                break;
        }
    }
    if (name !== ":") catstuff[":"] = false;
    if (validInput) {
        stopMining();
        curDirection = "";
        let movements = {x:0, y:0, key:name};
        movements.x = (name === "a" ? -1 : (name === "d" ? 1 : 0));
        movements.y = (name === "s" ? 1 : (name === "w" ? -1 : 0));
        movePlayer(movements, 1);
        energySiphonerDirection = "";
    }
}, false);
document.addEventListener('keyup', (event) => {
    let name = event.key;
    name = name.toLowerCase();
    switch (name) {
        case "shift" :
            isHoldingShift = false;
            break;
    }
}, false);
let loopTimer = null;
let secondaryTimer = null;
let curDirection = "";
let baseSpeed = 25;
function goDirection(direction, speed) {
    if (curDirection === direction) {
        stopMining();
        curDirection = "";
        updateDisplayTimer(false);
    } else {
        const nums = calcSpeed();
        let reps = nums.reps;
        let miningSpeed = nums.speed;
        stopMining();
        if (a13) {
            reps = 1;
            miningSpeed = 35;
        }
        removeFromLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"]})
        let movements = {x:0, y:0, key:direction};
        movements.x = (direction === "a" ? -1 : (direction === "d" ? 1 : 0));
        movements.y = (direction === "s" ? 1 : (direction === "w" ? -1 : 0));
        miningSpeed ??= 25;
        loopTimer = setInterval(movePlayer, miningSpeed, movements, reps, "auto");
        if (nums.extra > 0) {
            secondaryTimer = setInterval(movePlayer, (Math.ceil(1000/nums.extra)), movements, 1, "auto");
        }
        curDirection = direction;
        energySiphonerDirection = direction;
        updateDisplayTimer(true);
    }
}
let buttonClicked = false;
function moveOne(dir, button) {
    button.disabled = true;
    buttonClicked = true;
    clearInterval(loopTimer);
    clearInterval(secondaryTimer);
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
    let movements = {x:0, y:0, key:dir, extra:0};
    movements.x = (dir === "a" ? -1 : (dir === "d" ? 1 : 0));
    movements.y = (dir === "s" ? 1 : (dir === "w" ? -1 : 0));
    movePlayer(movements, 1, "single");
    curDirection = "";
    setTimeout(() => {
        button.disabled = false;
        buttonClicked = false;
    }, 50);
    energySiphonerDirection = "";
}
function speedFactorial(num) {
    if (num === 0) return 1;
    return num * speedFactorial(num-1);
}
let devReps = 100;
const calcSpeed = function() {
    let miningSpeed = baseSpeed;
    let reps = 1;
    if (currentWorld < 2 && player.gears["gear31"])
        miningSpeed = baseSpeed - 5;
    if (currentWorld < 2 && player.gears["gear2"])
        miningSpeed = baseSpeed - 10;
    if (currentWorld < 2 && player.gears["gear6"])
        miningSpeed = baseSpeed - 15;
    if (currentWorld === 2 || (player.gears["gear11"] && player.gears["gear16"] && player.gears["gear19"]))
        miningSpeed = baseSpeed - (player.gears["gear11"] ? 3 : 0) - (player.gears["gear16"] ? 5 : 0) - (player.gears["gear19"] ? 8 : 0);
    if (miningSpeed < player.settings.minSpeed)
        miningSpeed = player.settings.minSpeed;
    if (player.stats.currentPickaxe === "pickaxe12")
        reps++;
    reps += player.gears["gear19"] ? 10 : 0;
    const extraSpeed = 0 + (player.gears["gear32"] ? 25 : 0) + (player.gears["gear33"] ? 75 : 0);
    if (currentWorld === 1.1) {
        if (debug) return {speed: 5, reps: devReps, extra:0}
        const sr1Level = player.upgrades["pickaxe27"].level;
        if (sr1Level < 4) return {speed: 10 - sr1Level, reps: 1, extra:0}
        else return {speed: 7, reps: (-2 + sr1Level), extra:0}
    }
    if (debug) return {speed: 5, reps: devReps, extra:0}
    return {speed: miningSpeed, reps: reps, extra: extraSpeed}
}
function updateSpeed() {
    const temp = curDirection;
    stopMining();
    if (temp !== "") goDirection(temp);
}
//DISPLAY
let displayRows;
const invisibleBlock = "<span class='invisible'>⚪</span>";
function displayArea() {
    if (!inafk) {
        if (player.settings.canDisplay) {
            let output;
            let constraints = getParams(9, 9);
            let grass = 0;
            if (currentWorld === 2)
                grass = 2000;
            if (currentWorld === 1.2) grass = -1;
            if (currentWorld === 0.9) grass = -1;
            let i = 0;
            for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) mine[r] ??= [];
            for (let c = curX - constraints[0]; c <= curX + 9 + (9-constraints[0]); c++) {
                output = "";
                for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) {
                    if (mine[r][c]) {
                        if (player.settings.usePathBlocks)
                            output += mine[r][c].ore !== undefined ? checkDisplayVariant(mine[r][c]) : (mine[r][c] === "⛏️" ? addPickaxeIcon() : mine[r][c]);
                        else
                            output += mine[r][c] === "⚪" ? "⠀" : (mine[r][c].ore !== undefined ? checkDisplayVariant(mine[r][c]) : (mine[r][c] === "⛏️" ? addPickaxeIcon() : mine[r][c]));   
                    } else {
                        output += r === grass ? "🟩" : "⬛";
                    }
                }  
                displayRows[i].innerHTML = output;
                i++;
            } 
        }
        const percent = Math.floor(blocksRevealedThisReset/mineCapacity * 10000)/100;
        const percentElement = get("resetPercent");
        if (percent >= 90) percentElement.style.color = "red";
        else if (percent >= 60) percentElement.style.color = "orange";
        else percentElement.style.color = "green";
        percentElement.textContent = `${percent}%`
        revealedElement.textContent = `${blocksRevealedThisReset.toLocaleString()}/${mineCapacity.toLocaleString()} Blocks Revealed This Reset. `;
        let sub = currentWorld === 2 ? 2000 : 0;
        locationElement.textContent = "X: " + (curX - 1000000).toLocaleString() + " | Y: " + (-(curY - sub)).toLocaleString();
        if (player.oreTracker.tracking) {
            getAngleBetweenPoints({x : player.oreTracker.locationX, y: player.oreTracker.locationY});
        }
    }
    const blocksMined = player.stats.blocksMined;
    minedElement.textContent = (blocksMined > 1e12 ? formatNumber(blocksMined, 6) : blocksMined.toLocaleString()) + " Blocks Mined";
}
function addPickaxeIcon() {
    return `<span class="mineSpan">${pickaxeStats[player.stats.currentPickaxe].src}</span>`
}
function checkDisplayVariant(location) {
    let oreToAdd;
    let includeSize;
    let specialVariant;
    const tier = oreList[location.ore]["oreTier"];
    let isRare = (tier !== "Layer" && commons.indexOf(tier) === -1) 
    if (oreList[location.ore]["hasImage"]) {
        let isLarge = tier === "Hyperdimensional" || tier === "Infinitesimal" || oreList[location.ore]["numRarity"] >= 1000000000000000;
        if (isRare) oreToAdd = `<img class="${isLarge ? 'largeMineImage' : 'mineOre'}" src="${oreList[location.ore]["src"]}"></img>`;
        else return location.ore;
        includeSize = "";
        specialVariant = "Img";
    } else {
        if (!isRare) return location.ore;
        oreToAdd = location.ore;
        includeSize = "normalRare";
        specialVariant = "";
    }
    if (location.variant > 1) {
        if (location.variant === 2) {
            return `<span class="mineSpan electrifiedBlock${specialVariant} ${includeSize}">${oreToAdd}</span>`
        } else if (location.variant === 3) {
            return `<span class="mineSpan radioactiveBlock${specialVariant} ${includeSize}">${oreToAdd}</span>`
        } else if (location.variant === 4) {
            return `<span class=" mineSpan explosiveBlock${specialVariant} ${includeSize}">${oreToAdd}</span>`
        }
    } else {
        return `<span class="${includeSize} mineSpan">${oreToAdd}</span>`
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
                let oreNum = playerInventory[propertyName][variantInvNames[i - 1]];
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
                    const tier = oreList[propertyName]["oreTier"]
                    if ((tier === "Infinitesimal" || tier === "Hyperdimensional" || oreList[propertyName]["numRarity"] >= 1000000000000000) && oreList[propertyName]["hasImage"]) {
                        oreNameBlock.innerHTML = `<span class="inventoryImage"><img src="${oreList[propertyName]["src"]}" style="width:2.5vw; height:2.5vw;"></img></span>`;
                    } else {
                        oreNameBlock.innerHTML = `<span class="inventoryImage"><img src="${oreList[propertyName]["src"]}"></img></span>`;
                    }
                    
                } else {
                    oreNameBlock.innerText = propertyName;
                    oreNameBlock.classList = "inventoryElement1";
                }
                let oreRarityBlock = document.createElement("td");
                let rarity = oreList[propertyName]["numRarity"];
                rarity *= multis[i - 1];
                if (oreList[propertyName]["oreTier"] === "Infinitesimal") rarity = Infinity;
                if (propertyName === "Goober") rarity = ":3";
                if (oreList[propertyName]["caveExclusive"]) {
                    rarity *= getCaveMultiFromOre(propertyName);
                    oreRarityBlock.innerText = "1/" + (rarity >= 1000000000000 ? formatNumber(rarity, 2) : rarity.toLocaleString()) + "*";
                } else {
                    oreRarityBlock.innerText = "1/" + (rarity >= 1000000000000 ? formatNumber(rarity, 2) : rarity.toLocaleString());
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
let movementsX = 0;
let lastX = 0;
let lastXCheck = Date.now();
let resetAddX = 0;
let displayTimer = null;
function updateInventory() {
    for (let propertyName in inventoryObj) {
        for (let i = 1; i < 5; i++) {
            let amt = playerInventory[propertyName][variantInvNames[i - 1]];
            if (amt > 1e308) amt = 1e308;
            oreList[propertyName][names[i - 1]].textContent = "x" + (amt >= 1000000 ? formatNumber(amt, 2) : amt.toLocaleString());
            if (playerInventory[propertyName][variantInvNames[i - 1]] > 0) (oreList[propertyName][names[i - 1]].parentElement).style.display = "table";
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
    if (player.powerupVariables.fakeEquipped.item !== undefined && Date.now() >= player.powerupVariables.fakeEquipped.removeAt) {
        removeParadoxical();
    }
    if (player.powerupVariables.fakeTreeLevel.level !== undefined && Date.now() >= player.powerupVariables.fakeTreeLevel.removeAt) {
        removeParadoxical();
    }
    if (player.powerupVariables.caveBoosts.active && Date.now() >= player.powerupVariables.caveBoosts.removeAt) {
        player.powerupVariables.caveBoosts.removeAt = 0;
        player.powerupVariables.caveBoosts.active = false;
        caveLuck = 1;
    }

    if (currentWorld === 1.1 && player.stats.currentPickaxe !== "pickaxe27") player.stats.currentPickaxe = "pickaxe27";
    else if (currentWorld !== 1.1 && player.stats.currentPickaxe === "pickaxe27" && !player.trophyProgress["subrealmOneCompletion"].trophyOwned) player.stats.currentPickaxe = "pickaxe0";
    updatePowerupCooldowns();
    updateDisplayedUpgrade();
    displayNearbyCooldowns();
    if (player.gears["gear24"]) autoPowerups();
    player.stats.timePlayed += Date.now() - lastTime;
    lastTime = Date.now();
    if (Date.now() >= ability1RemoveTime && energySiphonerActive) removeSiphoner();
    const bodyCheck = document.body.getBoundingClientRect();
    if (bodyCheck.height < 550) {
        document.getElementById("mainSticky").style.position = "relative";
        document.getElementById("mainTop").style.position = "relative";
    } 
    else {
        document.getElementById("mainSticky").style.position = "sticky";
        document.getElementById("mainTop").style.position = "sticky";
    }
    if (currentActiveEvent !== undefined) {
        if (Date.now() >= currentActiveEvent.removeAt) endEvent();
    } else {
        activateEvent(rollEvent());
    }
    let speed = calcAverageSpeed();
    if (speed !== undefined) player.avgSpeed = speed;
    const avgBlocks = getAvgBlockSpeed();
    get("catPlayerStats").textContent = `${player.displayStatistics.luck.toLocaleString()}x Luck. ${avgBlocks > 1000000000000 ? formatNumber(avgBlocks, 3) : avgBlocks.toLocaleString()} Average Blocks Per Minute.`;
    player.lastOnline = Date.now();
    updateOfflineProgress();
}
const blockAmts = [];
let lastBlockAmt = 0;
function getAvgBlockSpeed() {
    blockAmts.push(player.stats.blocksMined - lastBlockAmt);
    if (blockAmts.length > 40) blockAmts.splice(0, 1);
    let totalBlockAmts = 0;
    for (let i = 0; i < blockAmts.length; i++) totalBlockAmts += blockAmts[i];
    totalBlockAmts *= 6;
    lastBlockAmt = player.stats.blocksMined;
    return totalBlockAmts;
}
function updateDisplayTimer(state) {
    if (state) {
        clearInterval(displayTimer);
        displayTimer = null;
        displayTimer = setInterval(() => {
        displayArea();
    }, player.settings.automineUpdate);
}
    else {
        clearInterval(displayTimer); 
        displayTimer = null;
        displayArea();
    }
}
let lastXValues = [];
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
    if (oreList[block]["oreTier"] === "Infinitesimal") oreRarity = Infinity;
    let spawnElement = document.getElementById("latestSpawns");
    let output = "";
    const element = document.getElementsByClassName("htmlTemplate")[0].cloneNode(true);
    element.setAttribute("title", oreList[block]["oreName"]);
    element.style.display = "block";
    let blockOutput;
    let curTier = oreList[block]["oreTier"];
    if (oreList[block]["hasImage"]) {
        if (curTier === "Hyperdimensional" || curTier === "Infinitesimal" || oreList[block]["numRarity"] >= 1000000000000000) {
            blockOutput = `<span class="latestImage"><img src="${oreList[block]["src"]}" style="width:2.5vw; height:2.5vw;"></img></span>`;
            element.style.height = "2.5vw";
        } else {
            blockOutput = `<span class="latestImage"><img src="${oreList[block]["src"]}"></img></span>`;
        }
    } else {
        blockOutput = block;
    }
    let rng;
    if (caveInfo !== undefined) {
        if (caveInfo["caveType"] === "abysstoneCave") rng = Math.floor(1/gsProbabilities[caveList["abysstoneCave"].indexOf(block)]) * getCaveMulti(caveInfo["caveType"]);
        else if (oolProbabilities[block] !== undefined) rng = Math.floor(1/oolProbabilities[block]) * getCaveMulti(caveInfo["caveType"]);
        else rng = oreRarity * getCaveMulti(caveInfo["caveType"]);
    } else rng = oreRarity;
    if (caveInfo !== undefined) output += `${variant} ${blockOutput}` + " 1/" + formatNumber(rng * variantMulti) + " Adjusted.";
    else output += `${variant} ${blockOutput}` + " 1/" + formatNumber(rng * variantMulti);
    let colors = oreInformation.getColors(oreList[block]["oreTier"]);
    element.style.backgroundImage = "linear-gradient(to right, black," + colors["backgroundColor"] + " 20%, 80%, black)";
    element.style.color = colors["textColor"];
    if (colors["textColor"] === "#ffffff") element.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
    else element.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
    element.innerHTML = output;
    if (spawnElement.children.length > 0) {
        spawnElement.insertBefore(element, spawnElement.firstChild);
    } else {
        spawnElement.innerText = "";
        spawnElement.appendChild(element)
    }
    if (spawnElement.children.length > player.settings.latestLength) spawnElement.removeChild(spawnElement.lastChild);
    let createSpawnMessage = false;
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
            typeWriter(spawnText, messageElement);
        } else {
            spawnText = `<i><span title="${oreList[block]["oreName"]}">` + oreList[block]["spawnMessage"] + "</span></i><br>";
            if (caveInfo != undefined) {
                spawnText += "1/" + (caveInfo["adjRarity"] * variantMulti).toLocaleString();
            } else {
                spawnText += "1/" + (oreRarity * variantMulti).toLocaleString();
            }
            typeWriter(spawnText, messageElement)
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
let typeCalls = {
    spawnMessages:0,
    eventMessages:0
};
function typeWriter(string, loc) {
    let char;
    let hex;
    let emoji
    let output = "";
    let ignoreUntil = 0;
    const thisId = loc.id;
    if (thisId === "spawnMessage") typeCalls.spawnMessages++ ;
    else typeCalls.eventMessages++;
    const thisTypeNum = thisId === "spawnMessage" ? typeCalls.spawnMessages : typeCalls.eventMessages;
    const elements = [];
    const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
    for (let i = 0; i < string.length; i++) {
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
            elements.push({t: htmlOutput, h: true})
        } else {
            if (!(ignoreUntil > i)) {
                elements.push({t: emoji, h: false, e: emojiRegex.test(emoji)})
            }
        }
    }
    let i = 0;
    while (i < elements.length - 1) {
        const text = `${elements[i].t}${elements[i + 1].t}`
        if (emojiRegex.test(text)) {
            elements[i].t = `${elements[i].t}${elements[i + 1].t}`;
            elements.splice(i + 1, 1);
        }
        i++;
    }
    let multi;
    for (let i = 0; i < elements.length; i++) {
        multi = i;
        if (elements[i].h) multi = i - 1;
        setTimeout(() => {
            output += elements[i].t
            if (thisTypeNum === (thisId === "spawnMessage" ? typeCalls.spawnMessages : typeCalls.eventMessages)) loc.innerHTML = output;
            else return;
        }, 10 * multi);
    }
    
}

let loggedFinds = [];
function logFind(type, x, y, variant, atMined, fromReset, amt, fromCave, bulkRarity) {
    let output = "";
    removeExistingOre({x: x, y:y})
    let spawnElement = document.getElementById("latestFinds");
    const element = document.getElementsByClassName("htmlTemplate")[0].cloneNode(true);
    element.setAttribute("title", oreList[type]["oreName"]);
    element.style.display = "block";
    let colors = oreInformation.getColors(oreList[type]["oreTier"]);
    element.style.backgroundImage = "linear-gradient(to right, black," + colors["backgroundColor"] + " 20%, 80%, black)";
    element.style.color = colors["textColor"];
    if (colors["textColor"] === "#ffffff") element.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
    else element.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
    element.setAttribute("title", oreList[type]["oreName"]);
    output += `<span onclick='goToOre(\"${type}\", \"${variant}\")'>`;
    output += `${variant} `;
    let blockOutput;
    let curTier = oreList[type]["oreTier"]
    if (oreList[type]["hasImage"]) {
        if (curTier === "Hyperdimensional" || curTier === "Infinitesimal" || oreList[type]["numRarity"] >= 1000000000000000) {
            blockOutput = `<span class="latestImage"><img src="${oreList[type]["src"]}" style="width:2.5vw; height:2.5vw;"></img></span>`;
            element.style.height = "2.5vw";
        } else {
            blockOutput = `<span class="latestImage"><img src="${oreList[type]["src"]}"></img></span>`;
        }
    } else {
        blockOutput = type;
    }
    output += blockOutput + ` ${amt > 1 ? `(x${amt > 1000000 ? formatNumber(amt, 2) : amt.toLocaleString()})` : ""}`;
    if (fromReset) output += " From Void Prevention.";
    else output += " At " + formatNumber(atMined) +  " Mined.";
    let rng;
    if (fromCave.cave) {
            if (fromCave.multi === 1000) rng = Math.floor(1/gsProbabilities[caveList["abysstoneCave"].indexOf(type)]/caveLuck) * fromCave.multi;
            else if (oolProbabilities[type] !== undefined) rng = Math.floor(1/oolProbabilities[type]/caveLuck) * fromCave.multi;
            else rng = Math.floor(oreList[type]["numRarity"] / caveLuck) * fromCave.multi;
    } else {
        rng = Math.floor(1/oreList[type]["decimalRarity"]);
    }
    if (oreList[type]["oreTier"] === "Infinitesimal") rng = Infinity;
    output += ` 1/${bulkRarity === undefined ? formatNumber(rng * multis[namesemojis.indexOf(variant)], 2) : formatNumber(1/bulkRarity, 2)}`;
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
const suffixes = ["", "k", "M", "B", "T", "qd", "Qn", "sx", "Sp", "O", "N", "de", "Ud", "DD", "tdD", "qdD", "QnD", "sxD", "SpD", "OcD", "NvD", "Vgn", "UVg", "DVg", "TVg", "qtV", "QnV", "SeV", "SPG", "OVG", "NVG", "TGN", "UTG", "DTG", "tsTG", "qtTG", "QnTG", "ssTG", "SpTG", "OcTg", "NoTG", "QdDR", "uQDR", "dQDR", "tQDR", "qdQDR", "QnQDR", "sxQDR", "SpQDR", "OQDDr", "NQDDr", "qQGNT", "uQGNT", "dQGNT", "tQGNT", "qdQGNT", "QnQGNT", "sxQGNT", "SpQGNT", "OQQGNT", "NQQGNT", "SXGNTL", "USXGNTL", "DSXGNTL", "TSXGNTL", "QTSXGNTL", "QNSXGNTL", "SXSXGNTL", "SPSXGNTL", "OSXGNTL", "NVSXGNTL", "SPTGNTL", "USPTGNTL", "DSPTGNTL", "TSPTGNTL", "QTSPTGNTL", "QNSPTGNTL", "SXSPTGNTL", "SPSPTGNTL", "OSPTGNTL", "NVSPTGNTL", "OTGNTL", "UOTGNTL", "DOTGNTL", "TOTGNTL", "QTOTGNTL", "QNOTGNTL", "SXOTGNTL", "SPOTGNTL", "OTOTGNTL", "NVOTGNTL", "NONGNTL", "UNONGNTL", "DNONGNTL", "TNONGNTL", "QTNONGNTL", "QNNONGNTL", "SXNONGNTL", "SPNONGNTL", "OTNONGNTL", "NONONGNTL", "CENT", "UCENT"];
function formatNumber(num, topoint) {
    num = Math.round(num)
    topoint ??= 1;
    if (topoint < 1) topoint = 1;
    topoint = Math.pow(10, topoint);
    if (num < 1000) {
        return num;
    }
    if (num >= Infinity) return Infinity;
    let tenMulti = Math.floor(Math.log10(num) / 3);
    return Math.floor(num / Math.pow(1000, (tenMulti)) * topoint) / topoint + suffixes[tenMulti];
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
            document.getElementById("trackerX").innerText = `X: ${(player.oreTracker.locationX - 1000000).toLocaleString()}`
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
    document.getElementById("trackerOre").innerText = `${player.settings.useNyerd ? "Ore: NYAH" : "Ore: N/A"}`;
    document.getElementById("trackerX").innerText = `${player.settings.useNyerd ? "X: NYAH" : "X: N/A"}`;
    document.getElementById("trackerY").innerText = `${player.settings.useNyerd ? "Y: NYAH" : "Y: N/A"}`;
    get("oreTrackerButton").textContent = `${player.settings.useNyerd ? "Track NYERDS!" : "Track Ores!"}`
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
let currentActiveEvent;
specialOreValues = {

}
const events = {
    "event1" : {
        rate: 1/5000,
        duration: 1500000,
        boost: 1.5,
        ore: "🌀",
        message: `<i><span style="background-image:linear-gradient(to right, #0007ff, #008eff, #14f0f2, #49c7cd, #70a9b3);" class="eventGradient">The tides in the 🌊 drop out into the ocean, lowering a path into the depth...</span></i>`,
        world: 1,
        specialText: "Makes commons twice as rare, puts 🧀 into water layer, makes 🧀 rarer (1/927,000,000 base rarity)",
        //makes commons twice as rare, puts cheese into water layer, makes cheese rarer
        specialEffect: function(state) {
            if (state) {
                insertIntoLayers({"ore":"🧀", "layers":["waterLayer"], "useLuck":true});
                oreInformation.commonMultiplier = 2;
                specialOreValues["🧀"] = {
                    newBaseRarity: 927000000,
                    layerToChange: "waterLayer"
                }
            }
            else {
                removeFromLayers({"ore":"🧀", "layers":["waterLayer"]});
                oreInformation.commonMultiplier = 1;
                delete specialOreValues["🧀"];
            }
        },
    },
    "event2" : {
        rate: 1/2500,
        duration: 3000000,
        boost: 2,
        ore: "⚙️",
        message: `<i>Mechanical whirring draws your attention deeper into the mines...</i>`,
        world: 1,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) return;
            else return;
        }
    },
    "event3" : {
        rate: 1/4000,
        duration: 1800000,
        boost: 1.375,
        ore: "🌈",
        message: `<i>Every pigment of color swirls up from below, surrounding you in an eternal rainbow...</i>`,
        world: 1,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) return;
            else return;
        }
    },
    "event4" : {
        rate: 1/1250,
        duration: 1800000,
        boost: 1.25,
        ore: "🛎️",
        message: `<i>You hear a bell start dinging in the 🚪 layer...</i>`,
        world: 2,
        specialText: "Makes 🔕 rarer (1/500,000,000 base rarity)",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["🔕"] = {
                    newBaseRarity: 500000000,
                    layerToChange: "borderLayer"
                }
            }
            else {
                delete specialOreValues["🔕"];
            }
        }
    },
    "event5" : {
        rate: 1/3000,
        duration: 1800000,
        boost: 2,
        ore: "🔋",
        message: `<i>An electrical container in the rock layer energizes the air around you...</i>`,
        world: 1,
        specialText: "Adds +10% ability proc rate",
        specialEffect: function(state) {
            if (state) {
                batteryEvent = true;
            }
            else {
                batteryEvent = false;
            }
        }
    },
    "event6" : {
        rate: 1/10000,
        duration: 900000,
        boost: 1.15,
        ore: "⌛",
        message: `<i><span style="background-image:linear-gradient(to right, #c2842d, #edae26, #d45419, #8a1b0c);" class="eventGradient">The passage of time seems to speed up as it's source is unearthed...</span></i>`,
        world: 1,
        specialText: "Decreases base mining speed by 1",
        specialEffect: function(state) {
            if (state) {
                baseSpeed--;
                updateSpeed();
            }
            else {
                baseSpeed++;
                updateSpeed();
            }
        }
    },
    "event7" : {
        rate: 1/15000,
        duration: 1200000,
        boost: 1.3,
        ore: "🎓",
        message: `<i><span style="background-image:linear-gradient(to right, #ede6e6, #383434, #7a7878, #ede6e6);" class="eventGradient">All the knowledge of this realm courses through you as a new intelligence forms...</span></i>`,
        world: 2,
        specialText: "Makes ✏️,  🧠,  📖, 📐, 📚, and 🖊️ 2x more common",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["✏️"] = {newBaseRarity: 8200000/2,layerToChange: "chessLayer"}
                specialOreValues["🧠"] = {newBaseRarity: 15500000/2,layerToChange: "chessLayer"}
                specialOreValues["📖"] = {newBaseRarity: 16000000/2,layerToChange: "chessLayer"}
                specialOreValues["📐"] = {newBaseRarity: 34000000/2,layerToChange: "chessLayer"}
                specialOreValues["📚"] = {newBaseRarity: 48100000/2,layerToChange: "chessLayer"}
                specialOreValues["🖊️"] = {newBaseRarity: 165000000/2,layerToChange: "chessLayer"}
            }
            else {
                delete specialOreValues["✏️"];
                delete specialOreValues["🧠"];
                delete specialOreValues["📖"];
                delete specialOreValues["📐"];
                delete specialOreValues["📚"];
                delete specialOreValues["🖊️"];
            }
        }
    },
    "event8" : {
        rate: 1/3500,
        duration: 3000000,
        boost: 1.75,
        ore: "🥗",
        message: `<i><span style="background-image:linear-gradient(to right, #6a9c44, #78db2c, #27d111, #083802, #2f7327);" class="eventGradient">Leafy greens cloud your vision...</span></i>`,
        world: 1,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) {
                return;
            }
            else {
                return;
            }
        }
    },
    "event9" : {
        rate: 1/5000,
        duration: 2700000,
        boost: 1.25,
        ore: "📽️",
        message: `<i>A highlight reel of your journey in the mines is faintly visible in the corner of your eyes...</i>`,
        world: 2,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) {
                return;
            }
            else {
                return;
            }
        }
    },
    "event10" : {
        rate: 1/1000000,
        duration: 9000000,
        boost: 1,
        ore: "✈️",
        message: `<i><span class="rainbowBackground">Lyle! Lyle, wake up! You gotta wake up, please!...</span></i>`,
        world: 1,
        specialText: "Makes ✈️ obtainable",
        specialEffect: function(state) {
            if (state) {
                insertIntoLayers({"ore":"✈️", "layers":["sillyLayer"], "useLuck":true});
                specialOreValues["✈️"] = {
                    newBaseRarity: 911911911911,
                    layerToChange: "sillyLayer"
                }
            }
            else {
                removeFromLayers({"ore":"✈️", "layers":["sillyLayer"]});
                delete specialOreValues["✈️"];
            }
        }
    },
    "event11" : {
        rate: 1/4000,
        duration: 2700000,
        boost: 1.25,
        ore: "💫",
        message: `<i>The skies begin to glow as a cosmic body enchants the mine...</i>`,
        world: 1,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) return;
            else return;
        }
    },
    "event12" : {
        rate: 1/15000,
        duration: 180000,
        boost: 5,
        ore: "⌨️",
        message: `<i>Intense typing can be heard not too deep underground...</i>`,
        world: 2,
        specialText: "Makes 🖱️ rarer (1/10,010,000 base rarity)",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["🖱️"] = {
                    newBaseRarity: 10010000,
                    layerToChange: "globeLayer"
                }
            }
            else delete specialOreValues["🖱️"];
        }
    },
    "event13" : {
        rate: 1/22000,
        duration: 1200000,
        boost: 1.13,
        ore: "⚡",
        message: `<i>A thundercloud begins brewing above the mines...</i>`,
        world: 2,
        specialText: "Makes 🪶 rarer (1/4,120,000,000 base rarity)",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["🪶"] = {
                    newBaseRarity: 4120000000,
                    layerToChange: "cloudLayer"
                }
            }
            else delete specialOreValues["🪶"];
        }
    },
    "event14" : {
        rate: 1/12500,
        duration: 900000,
        boost: 1.4,
        ore: "💣",
        message: `<i>BOMBS AWAY!!!...</i>`,
        world: 2,
        specialText: "Makes 🏹 rarer (1/5,000,000,000 base rarity)",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["🏹"] = {
                    newBaseRarity: 5000000000,
                    layerToChange: "tvLayer"
                }
            }
            else delete specialOreValues["🏹"];
        }
    },
    "event15" : {
        rate: 1/30000,
        duration: 600000,
        boost: 1.5,
        ore: "🇯🇵",
        message: `<i>Onichan, sempaiiiiii, come visit me ^w^...</i>`,
        world: 1.1,
        specialText: "Puts 🍆 into 🇧🇳 layer, makes 🍆 rarer (1/696,969,696 base rarity)",
        specialEffect: function(state) {
            if (state) {
                insertIntoLayers({"ore":"🍆", "layers":["bnLayer"], "useLuck":true});
                specialOreValues["🍆"] = {
                    newBaseRarity: 696969696,
                    layerToChange: "bnLayer"
                }
            }
            else {
                removeFromLayers({"ore":"🍆", "layers":["bnLayer"]});
                delete specialOreValues["🍆"];
            }
        }
    },
    "event16" : {
        rate: 1/50000,
        duration: 2700000,
        boost: 1.17,
        ore: "🇵🇫",
        message: `<i>Is this from where the french national team comes from?...</i>`,
        world: 1.1,
        specialText: "Reduces game brightness to 50%",
        specialEffect: function(state) {
            if (state) {
                document.body.style.filter = "brightness(0.5)";
            }
            else document.body.style.filter = "";
        }
    },
    "event16" : {
        rate: 1/1250,
        duration: 1800000,
        boost: 1,
        ore: "🪸",
        message: `<i><span style="background-image:linear-gradient(to right, #037ADE, #03E5B7);" class="eventGradient">watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br></span></i>`,
        world: 1.2,
        specialText: "watr",
        specialEffect: function(state) {
            if (state) {
                insertIntoLayers({"ore":"🪸", "layers":["waterLayer"], "useLuck":true});
            }
            else removeFromLayers({"ore":"🪸", "layers":["waterLayer"]});
        }
    },
}
function activateEvent(name) {
    if (name === undefined) return;
    currentActiveEvent = {name: name, removeAt: Date.now() + events[name].duration}
    events[name].specialEffect(true);
    const text = events[name].message;
    typeWriter(text, eventElement);
    updateAllLayers();
}
function endEvent() {
    if (currentActiveEvent === undefined) return;
    events[currentActiveEvent.name].specialEffect(false);
    currentActiveEvent = undefined;
    eventElement.textContent = "Event Messages Appear Here!";
    updateAllLayers();
}
function getCurrentEventOre() {
    if (currentActiveEvent === undefined) return;
    return events[currentActiveEvent.name].ore;
}
function rollEvent() {
    const arr = Object.keys(events);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (events[arr[j]].rate > events[arr[j + 1]].rate) {
                let lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) if (currentWorld !== events[arr[i]].world) arr.splice(i, 1);
    const chosenValue = Math.random();
    for (let i = 0; i < arr.length; i++) {
        if (chosenValue < events[arr[i]].rate) return arr[i]
    }
    return undefined;
}
function formatEventText() {
    const element = document.getElementsByClassName("faqPage")[8];
    let output = `<span class="faqTitle">Events:</span><br>`;
    for (let event in events) {
        const newEventName = `Event ${event.substring(5)}:`
        output += `<span class="faqSection">${newEventName}</span>`;
        output += `<span class="faqText">${events[event].message}</span>`;
        output += `<span class="faqText">Rate: 1/${Math.round(1/events[event].rate)} every 250ms</span>`;
        output += `<span class="faqText">Duration: ${msToTime(events[event].duration)}</span>`;
        output += `<span class="faqText">Main Effect(s): ${events[event].boost}x boost on ${events[event].ore}</span>`;
        output += `<span class="faqText">Side Effect(s): ${events[event].specialText}</span>`;
        output += `<span class="faqText">World(s): ${events[event].world}</span>`;
        output += `<br>`;
    }
    element.innerHTML = output;
}
function get(id) {
    return document.getElementById(`${id}`)
}
function editMode() {
    window.onclick = getElementAt;
    clearInterval(limitedTimer);
    clearInterval(inventoryTimer);
    limitedTimer = null;
    inventoryTimer = null;
}
const ignoreClasses = [""];
const ignoreIds = [""];
let currentlyEditingElement = "";
let edits = 0;
let editsMade = {};
function getElementAt(event) {
    const toEdit = document.elementFromPoint(event.pageX, event.pageY);
    let includesIgnoreClass = false;
    for (let i = 0; i < toEdit.classList; i++) if (ignoreClasses.includes(toEdit.classList[i])) {includesIgnoreClass = true; break;}
    if (toEdit.children.length === 0 && !toEdit.classList.contains("indexBlackout")) {
        if (toEdit.id.includes("editedManually")) {
            const searchingIn = toEdit.parentElement.children;
            let idToFind = toEdit.id;
            for (let i = 0; i < searchingIn.length; i++) {
                if (searchingIn[i].id === idToFind) {
                    currentlyEditingElement = searchingIn[i];
                    createCustomColorInput();
                    break;
                }
            }
        } else {
            currentlyEditingElement = toEdit;
            createCustomColorInput();
            edits++;
        }
    }
}
function setTextColor(color) {
    if (currentlyEditingElement !== undefined) {
        const textContent = currentlyEditingElement.innerText;
        let thisId = currentlyEditingElement.id;
        if (thisId.indexOf("editedManually") > -1) {
        } else {
            thisId = `editedManually${edits}`;
        }
        if (editsMade[thisId] === undefined) editsMade[thisId] = {color: color, element: currentlyEditingElement}
        else editsMade[thisId].color = color;
        currentlyEditingElement.innerHTML = `<span id='${thisId}' style='color:${color}'>${textContent}</span>`;
        
    }
}
function createCustomColorInput() {
    const text = window.prompt("Enter Color");
    setTextColor(text);
}
let trackerDisplayed = false;
function toggleTracker() {
    const tracker = get("oreTrackerHolder");
    if (tracker.style.animation !== "") return;
    if (trackerDisplayed) {
        tracker.style.animation = "retractTracker 0.5s linear 1";
        tracker.onanimationend = () => {
            tracker.style.display = "none";
            tracker.style.right = "-7vw";
            tracker.style.animation = "";
            trackerDisplayed = false;
            tracker.onanimationend = undefined;
        };
    } else {
        tracker.style.display = "flex";
        tracker.style.animation = "extendTracker 0.5s linear 1";
        tracker.onanimationend = () => {
            tracker.style.right = "2.5vw";
            tracker.style.animation = "";
            trackerDisplayed = true;
            tracker.onanimationend = undefined;
        };
    }
}
let offlineDisplayed = false;
function toggleOffline() {
    if (trackerDisplayed) {
        const tracker = get("oreTrackerHolder");
        tracker.style.display = "none";
        tracker.style.right = "-7vw";
        trackerDisplayed = false;
    }
    const offlineDisplay = get("offlineHolder")
    if (offlineDisplayed) {
        offlineDisplay.style.animation = "retractOffline 0.5s linear 1";
        offlineDisplay.onanimationend = () => {
            offlineDisplay.style.display = "none";
            offlineDisplay.style.right = "-7vw";
            offlineDisplay.style.animation = "";
            offlineDisplayed = false;
            offlineDisplay.onanimationend = undefined;
        };
    } else {
        offlineDisplay.style.display = "block";
        offlineDisplay.style.animation = "extendOffline 0.5s linear 1";
        offlineDisplayed = true;
        updateOfflineProgress();
        offlineDisplay.onanimationend = () => {
            offlineDisplay.style.right = "2.5vw";
            offlineDisplay.style.animation = "";
            offlineDisplay.onanimationend = undefined;
        };
    }
}
function updateOfflineProgress() {
    if (offlineDisplayed) {
        let output = "";
        const layer = getLayer(curY).layer;
        let m = 1;
        for (let i = layer.length-1; i >= 0; i--) if (oreList[layer[i]]["oreTier"] !== "Celestial") output += `${layer[i]}${(i<layer.length-1&& m%5 === 0) ? (m++, "<br>") : (m++," ")}`;
        get("offlineLayer").innerHTML = `${output}`;
        if (player.offlineProgress > 28800000) player.offlineProgress = 28800000;
        get("offlineStats").textContent = `${msToTime(player.offlineProgress)}/08:00:00`;
        const percent = player.offlineProgress > 0 ? 100/(28800000/(player.offlineProgress)) : 0;
        get("offlineInteriorGradient").style.width = `${percent}%`;
        get("offlineInteriorGradient").style.background = "repeating-linear-gradient(45deg, #7f007f, #fff, #7f007f 3vw)";
        const nums = calcSpeed();
        const speed = ((1000/nums.speed)*nums.reps)+nums.extra;
        let pickaxeMined;
        if (player.stats.currentPickaxe === "pickaxe27") pickaxeMined = pickaxeStats["pickaxe27"][player.upgrades["pickaxe27"].level].mined;
        else pickaxeMined = pickaxeStats[player.stats.currentPickaxe].mined
        let willGen = player.offlineProgress > 0 ? Math.floor((speed * (player.offlineProgress/1000))*(pickaxeMined/pickaxeStats[player.stats.currentPickaxe].rate)/10) : 0;
        if (player.powerupVariables.fakeEquipped.item !== undefined || player.powerupVariables.fakeTreeLevel.level !== undefined) {get("offlineActivate").textContent = "Cant Gen: Paradoxical Active!"; willGen = 0;}
        else get("offlineActivate").textContent = `Gen ${willGen > 1000000000 ? formatNumber(willGen, 2) : willGen.toLocaleString()} Blocks.`;
        return willGen;
    }
}
function generateOfflineProgress() {
    const offlineAmt = updateOfflineProgress();
    if (offlineAmt > 0) {bulkGenerate(curY, offlineAmt); player.offlineProgress = 0; updateOfflineProgress();}
}
//TY @marbelynrye FOR MAKING THESE IMAGE DATA GATHERERS UR SO COOL FOR THAT
//IT WORKS SO WELL!!!!
let pickaxe24Nums = [];
let pickaxe25Nums = [];
let testNums = [];
/*
const az = new Image();
az.src = "media/b.png"
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
