/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
let invToIndex = true;
let craftingToIndex = true;
let usePathBlocks = true;
let useDisguisedChills = false;

function openFrame(frameId) {
    document.querySelectorAll('.frame').forEach(frame => {
      frame.style.display = 'none';
    });
    
    const selectedFrame = document.getElementById(frameId + "-frame");
    if (selectedFrame) {
      selectedFrame
      .style.display = 'block';
    }
    if (frameId === "stats") createStats();
}


let canDisplay = true;
function changeCanDisplay(button) {
    if (canDisplay) {
        button.style.backgroundColor = "#FF3D3D";
        document.getElementById("blockDisplay").innerHTML = "❌";
        canDisplay = false;
    } else {
        button.style.backgroundColor = "#6BC267";
        canDisplay = true;
        displayArea();
    }
}
let useNumbers = false;
let allPickaxeNames = 
["Mulch Mallet", 
"Mud Sickle", 
"Dirt Ravager", 
"Void Crusher", 
"Geode Staff", 
"Earth Soiler", 
"Crypt Smasher", 
"Labyrinthian Tide", 
"77 Leaf Destroyer", 
"Planet Buster", 
"Whirlpool of Fate", 
"Wings of Glory",
"The Key",
"Extreme Echolocator",
"Corundum Caver",
"Starborne Slasher",
"Nyabomb",
"Lunar Lightsabre",
"Gemstone Engraver",
"Gambler's Fallacy",
"Exponential Centrifuge",
"Singularity Slammer",
"Staff of Binding",
"Stormseer's Superspark Sceptre",
"Coronary Catastrophe"
];
function changeUseNumbers(button) {
    if (!useNumbers) {
        let elements = document.getElementById("pickaxeCrafts").children;
        for (let i = 0; i < elements.length; i++) {
            elements[i].firstChild.innerText = "Pickaxe " + (i + 1);
        }
        if (button != undefined) {
            button.style.backgroundColor = "#6BC267";
        }
        useNumbers = true;
    } else {
        let elements = document.getElementById("pickaxeCrafts").children;
        for (let i = 0; i < elements.length; i++) {
            elements[i].firstChild.innerText = allPickaxeNames[i];
        }
        if (button != undefined) {
            button.style.backgroundColor = "#FF3D3D";
        }
        useNumbers = false;
    }
}

let stopRareNum = 0;
function changeMinRarity(button) {
    stopRareNum++;
    if (stopRareNum > 9) {
        stopRareNum = 0;
    }
    let tier = oreInformation.getTierAt(stopRareNum + 5);
    button.innerText = tier + "+";
    const colors = oreInformation.getColors(tier);
    button.style.color = colors["textColor"]
    button.style.backgroundImage = "linear-gradient(to right, " + colors["backgroundColor"] + " 70%, black)";
}
function changeStopOnRare(button) {
    if (stopOnRare) {
        stopOnRare = false;
        button.style.backgroundColor = "#FF3D3D";
    } else {
        stopOnRare = true;
        button.style.backgroundColor = "#6BC267";
    }   
}

//TY TETRA FOR THE BACKGROUND CHANGING FUNCTION!!
function changeBackgroundColor() {
    // Get the input value
    let element = document.getElementById("colorInput");
    let hexColor = element.value;
  
    // Validate if the input is a valid hex color
    if (/^#[0-9A-F]{6}$/i.test(hexColor)) {
      // Set the background color
      document.getElementById("mainContent").style.backgroundColor = hexColor;
      flashGreen(element);
    } else {
        flashRed(element);
    }
}
function changeLatestColors(num) {
    let toChange = document.getElementsByClassName("latestDisplay");
    let element = document.getElementById("latestColor");
    let value = element.value;
    if (/^#[0-9A-F]{6}$/i.test(value)) {
        if (num === 0) {
            toChange[0].style.color = value;
            toChange[1].style.color = value;
        } else if (num === 1) {
            toChange[0].style.borderColor = value;
            toChange[1].style.borderColor = value;
        } else if (num === 2) {
            toChange[0].style.backgroundColor = value;
            toChange[1].style.backgroundColor = value;
        }
    flashGreen(element);
    } else {
        flashRed(element);
    }
    
}
function getLatestColors() {
    let colors = [];
    let element = document.getElementsByClassName("latestDisplay")[0];
    colors.push(element.style.color);
    colors.push(element.style.borderColor);
    colors.push(element.style.backgroundColor);
    return colors;
}
function changeInventoryColors(num) {
    let toChange = document.getElementById("inventoryDisplay");
    let element = document.getElementById("inventoryColors");
    let value = element.value;
    if (/^#[0-9A-F]{6}$/i.test(value)) {
        if (num === 0) {
            toChange.style.borderColor = value;
        } else if (num === 1) {
            toChange.style.backgroundColor = value;
        }
    flashGreen(element);
    } else {
        flashRed(element);
    }
}
function getInventoryColors() {
        let colors = [];
        let element = document.getElementById("inventoryDisplay");
        colors.push(element.style.borderColor);
        colors.push(element.style.backgroundColor);
        return colors;
}
function changeCraftingColors(num) {
    let toChange = document.getElementsByClassName("col-2")[0];
    let element = document.getElementById("craftingColors");
    let value = element.value;
    if (/^#[0-9A-F]{6}$/i.test(value)) {
        if (num === 0) {
            toChange.style.borderColor = value;
        } else if (num === 1) {
            toChange.style.backgroundColor = value;
        }
    flashGreen(element);
    } else {
        flashRed(element);
    }
}
function getCraftingColors() {
    let colors = [];
    let element = document.getElementsByClassName("col-2")[0];
    colors.push(element.style.borderColor);
    colors.push(element.style.backgroundColor);
    return colors;
}
function flashRed(element) {
    element.style.animation = "flashRed 1s linear 1";
    setTimeout(() => {
        element.style.animation = "";
        element.value = "";
    }, 1000);
}
function flashGreen(element) {
    element.style.animation = "flashGreen 1s linear 1";
    setTimeout(() => {
        element.style.animation = "";
        element.value = "";
    }, 1000);
}
//latestDisplay
//inventoryDisplay
//col-2

function showSettings() {
    canMine = false;
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("settingsContainer").style.display = "block";
    createStats();
    switchLayerIndex(0, 0)
}

function hideSettings() {
    canMine = true;
    document.getElementById("settingsContainer").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}
/*
let chill;
let ringing;
let visionblur;
let unfath;
let ow;
let magnificent;
let zenith;
let keepRunningAudio;
*/
function changeSpawnVolume(percent, num) {
    percent = Number(percent);
    if (!(isNaN(percent))) {
    if (percent > 100)
        percent = 100;

    allAudios[num].volume = (percent / 100);
    }
}

let minMiningSpeed = 0;

function changeMinMiningSpeed(element) {
    elementValue = element.value;
    let num = elementValue === "" ? "none" : elementValue;
    num = Number(num);
    if (!isNaN(num)) {
        if (num > 25)
            num = 25;
        if (num < 0)
            num = 0;
        minMiningSpeed = num;
        flashGreen(element);
    } else {
        flashRed(element);
    }
}

function toggleCaves() {
    if (cavesEnabled) {
        cavesEnabled = false;
        document.getElementById("caveToggle").style.backgroundColor = "#FF3D3D";
    }
    else {
        cavesEnabled = true;
        document.getElementById("caveToggle").style.backgroundColor = "#6BC267";
    }
}

function updateCapacity(element) {
    elementValue = element.value;
    let value = elementValue === "" ? "none" : elementValue;
    value = Number(value);
    if (!(isNaN(value)) && value > 0) {
        baseMineCapacity = value;
        mineCapacity = value;
        flashGreen(element);
    } else {
        flashRed(element);
    }        
}
let layerNum = 0;
function switchLayerIndex(num, overrideNum, world) {
    while (document.getElementById("oreCardHolder").firstChild) {
        document.getElementById("oreCardHolder").removeChild(document.getElementById("oreCardHolder").firstChild);
    }
    if (world === undefined) {
        world = currentWorld;
    }
    layerNum += num;
    let add = world === 1 ? 8 : 5;
    if (layerNum > (add + 3)) {
        layerNum = 0;
    }
    if (layerNum < 0)
        layerNum = (add + 3);
    let layerToIndex;
    let caveBase = currentWorld === 1 ? 11 : 8;
    layerNum = overrideNum === undefined ? layerNum : overrideNum;
    if (layerNum > (add - 1)) {
        let caveNum = caveBase - layerNum;
        layerToIndex = allCaves[caveNum];
    } else {
        if (world === 1) {
            layerToIndex = worldOneLayers[layerNum];
        } else {
            layerToIndex = worldTwoLayers[layerNum];
        }
    }
    
    layerToIndex = layerNum === 101 ? "worldOneCommons" : layerToIndex;
    layerToIndex = layerNum === 102 ? "worldTwoCommons" : layerToIndex;
    let layerMaterial
    if (layerList[layerToIndex] != undefined) layerMaterial = layerList[layerToIndex].slice(-1);
    if (caveList[layerToIndex] != undefined) layerMaterial = caveList[layerToIndex].slice(-1);
    document.getElementById("indexSwitchButton").innerText = layerMaterial;
    let oreIndexCards = [];
    let elements = createIndexCards(layerToIndex);
    for (let i = 0; i < elements.length; i++) oreIndexCards.push(elements[i])
    for (let i = oreIndexCards.length - 1; i >= 0; i--) {
        document.getElementById("oreCardHolder").appendChild(oreIndexCards[i]);
    }
}
let ignoreList = "🌳🏰🚿🐋🏔️⚠️💗🐪💵☘️🪽🔫🗝️💰⚖️🌙🍀🍃🚽🎓👾🪝🪡🍓🏯🦚⚓🪤🤖🦴🎩💘💞🐰🐢🌹🦋🔈☯️🦾🐞🥈🚬🪸🪦🚨🍖📜🐸⛔⚡🌱";
function createIndexCards(layer) {
        let toReturn = [];
        let isCave = false;
        let caveMulti;
        let spawnMessage = true;
        let minIndexRarity = 2;
        if (layer === "worldOneCommons" || layer === "worldTwoCommons") {
            layer = layerList[layer];
            spawnMessage = false;
        } else if (layerList[layer] != undefined) {
            layer = layerList[layer];
            minIndexRarity = 5000000;
        }
        else if (caveList[layer] != undefined) {
            caveMulti = getCaveMulti(layer)
            layer = caveList[layer];
            isCave = true;
        }
        for (let i = 0; i < layer.length; i++) {
        let property = layer[i];
        if ((ignoreList.indexOf(property) < 0 || indexHasOre(property)) && oreList[property]["numRarity"] >= minIndexRarity) {
            let parentObject = document.createElement("div");
            let parentWrapper = document.createElement("div");
            parentObject.classList = "oreCard";
            parentWrapper.classList = "indexWrapper"
            
            let output = "<span class='indexOre'>" + property + "</span>"
            output += "<span class='indexRarity'>1/"
            if (isCave) {
                let rarity = oreList[property]["numRarity"];
                if (oolProbabilities[property] != undefined) rarity = Math.round(1/oolProbabilities[property]);
                output += rarity.toLocaleString();
                output += " Base Rarity.</span>";
                rarity *= caveMulti;
                output += "<span class='indexWithLuck'>1/" + rarity.toLocaleString() + " Adjusted.</span>";
            } else {
                output += oreList[property]["numRarity"].toLocaleString();
                output += " Base Rarity.</span>";
                output += "<span class='indexWithLuck'>1/" + Math.round((oreList[property]["numRarity"] / verifiedOres.getCurrentLuck())).toLocaleString() + " With Luck.</span>";
            }
            if (oreList[property]["spawnMessage"] !== "") {
                output += "<span class='indexSpawnMessage'>" + oreList[property]["spawnMessage"] + "</span>";
            }
            let colors = oreInformation.getColors(oreList[property]["oreTier"]);
            if (oreList[property]["explosiveAmt"]) {
                parentWrapper.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to bottom right, #c91800, #ff722b, #383838)"
            } else if (oreList[property]["radioactiveAmt"]) {
                parentWrapper.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to bottom right, #062404, #c9fc3a, #062404)"
            } else if (oreList[property]["electrifiedAmt"]) {
                parentWrapper.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to bottom right, #f7f368, #ffc629, #e365fc)"
            } else if (oreList[property]["normalAmt"]) {
                parentWrapper.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to top right, #6BC267 20%, black, #6BC267 80%)"
            } else {
                parentWrapper.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to top right, #FF3D3D 20%, black, #FF3D3D 80%)"
            }
            //border-image-source: linear-gradient(to bottom right, #743ad5, #d53a9d);
            parentWrapper.innerHTML = output;
            parentObject.appendChild(parentWrapper)
            toReturn.push(parentObject);
        }
        
    }
        return toReturn;
}

function randomFunction(ore, cause) {
    if ((cause === "inv" && invToIndex) || (cause === "crafting" && craftingToIndex)) {
        let num = -1;
        let world = currentWorld;
        if (ore === "❤️‍🔥")
            return;
        if (ignoreList.indexOf(ore) === -1 || indexHasOre(ore)) {
            for (let i = 0; i < worldOneLayers.length; i++) {
                if (layerList[worldOneLayers[i]].includes(ore)) {
                    num = i;
                    world = 1;
                    break;
                }
            }
            if (num < 0) {
                for (let i = 0; i < worldTwoLayers.length; i++) {
                    if (layerList[worldTwoLayers[i]].includes(ore)) {
                        num = i;
                        world = 2;
                        break;
                    }
                }
            }
            if (num < 1) {
                for (let i = allCaves.length - 1; i >= 0; i--) {
                    if (caveList[allCaves[i]].includes(ore)) {
                        num = currentWorld === 1 ? (11 - i) : (8 - i);
                        break;
                    }
                }
            }
            if (layerList["worldOneCommons"].includes(ore)) {
                num = 101;
            }
            if (layerList["worldTwoCommons"].includes(ore)) {
                num = 102;
            }
            
            if (num > -1) {
                showSettings();
                openFrame('index');
                switchLayerIndex(0, num, world);
            }
        }
    }
}

function indexHasOre(ore) {
    return (oreList[ore]["normalAmt"] || oreList[ore]["electrifiedAmt"] || oreList[ore]["radioactiveAmt"] || oreList[ore]["explosiveAmt"]);
}
function switchToIndex(button, num) {
    if (num === 0) {
        if (invToIndex) {
            invToIndex = false;
            button.style.backgroundColor = "#FF3D3D";
        } else {
            invToIndex = true;
            button.style.backgroundColor = "#6BC267";
        }
    } else if (num === 1) {
        if (craftingToIndex) {
            craftingToIndex = false;
            button.style.backgroundColor = "#FF3D3D";
        } else {
            craftingToIndex = true;
            button.style.backgroundColor = "#6BC267";
        }
    }
    
}
function togglePathBlocks() {
    if (usePathBlocks) {
        document.getElementById("pathBlocks").style.backgroundColor = "#6BC267";
        usePathBlocks = false;
    } else {
        document.getElementById("pathBlocks").style.backgroundColor = "#FF3D3D";
        usePathBlocks = true;
    }
    displayArea();
}
let testSoundTimeout = null;
function testSound(num) {
    let element = document.getElementsByClassName("testButton")[num];
    let time = (allAudios[num].duration * 1000);
    if (allAudios[num].currentTime === 0) {
        allAudios[num].play();
        element.style.backgroundColor = "#6BC267";
        testSoundTimeout = setTimeout(() => {
            element.style.backgroundColor = "#FF3D3D";
            allAudios[num].pause();
            allAudios[num].currentTime = 0;
            clearTimeout(testSoundTimeout);
        }, time);
    } else {
        allAudios[num].pause();
        allAudios[num].currentTime = 0;
        element.style.backgroundColor = "#FF3D3D";
        clearTimeout(testSoundTimeout);
    }
}
function enableDisguisedChills() {
    if (useDisguisedChills) {
        useDisguisedChills = false;
        document.getElementById("disguisedChills").style.backgroundColor = "#FF3D3D";
    } else {
        useDisguisedChills = true;
        document.getElementById("disguisedChills").style.backgroundColor = "#6BC267";
    }
}
let usingNewEmojis = false;
function switchFont() {
    if (usingNewEmojis) {
        usingNewEmojis = false;
        document.querySelector(":root").style.setProperty("--bs-font-sans-serif", "system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"")
        document.getElementById("switchFont").style.backgroundColor = "#FF3D3D";
        distanceMulti--;
        y -= 2000;
        switchDistance();
    } else {
        usingNewEmojis = true;
        document.querySelector(":root").style.setProperty("--bs-font-sans-serif", "system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Noto Color Emoji\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"");
        document.getElementById("switchFont").style.backgroundColor = "#6BC267";
        distanceMulti--;
        y -= 2000;
        switchDistance();
    }
}
let minTier = "Antique";
let minRarityNum = 0
function changeSpawnMessageRarity(button) {
    minRarityNum++;
    if (minRarityNum > 9) minRarityNum = 0;
    minTier = oreInformation.getTierAt(minRarityNum + 5);
    button.innerText = "Minimum Spawn Message Tier: " + minTier + "+";
    let colors = oreInformation.getColors(minTier);
    button.style.color = colors["textColor"]
    button.style.backgroundImage = "linear-gradient(to right, " + colors["backgroundColor"] + " 70%, black)";
}
function createStats() {
    let elements = document.getElementsByClassName("oreStats")
    let tier = "Flawless";
    let i = 0;
    while (tier !== "Common") {
        let ores = oreInformation.getOresByTier(tier);
        let isOwned = new Array(ores.length - 1)
        let output = "";
        let currentTotal = 0;
        for (let j = 0; j < ores.length; j++) {
            currentTotal += oreList[ores[j]]["normalAmt"];
            if (oreList[ores[j]]["normalAmt"] > 0) isOwned[j] = true;
        }
        output += "You have " + currentTotal.toLocaleString() + " normal " + tier + " ores, ";
        currentTotal = 0;
        for (let j = 0; j < ores.length; j++) {
            currentTotal += oreList[ores[j]]["electrifiedAmt"];
            if (oreList[ores[j]]["electrifiedAmt"] > 0) isOwned[j] = true;
        }
        output += currentTotal.toLocaleString() + " electrified " + tier + " ores, ";
        currentTotal = 0;
        for (let j = 0; j < ores.length; j++) {
            currentTotal += oreList[ores[j]]["radioactiveAmt"];
            if (oreList[ores[j]]["radioactiveAmt"] > 0) isOwned[j] = true;
        }
        output += currentTotal.toLocaleString() + " radioactive " + tier + " ores, and ";
        currentTotal = 0;
        for (let j = 0; j < ores.length; j++) {
            currentTotal += oreList[ores[j]]["explosiveAmt"];
            if (oreList[ores[j]]["explosiveAmt"] > 0) isOwned[j] = true;
        }
        let totalExisting = 0;
        for (let j = 0; j < isOwned.length; j++) if (isOwned[j]) totalExisting++;
        output += currentTotal.toLocaleString() + " explosive " + tier + " ores.";
        elements[i].innerText = output;
        elements[i + 1].innerText = "You have " + totalExisting + "/" + ores.length + " of the ores in this tier."
        i+= 2;
        tier = oreInformation.getNextTier(tier);
    }
}