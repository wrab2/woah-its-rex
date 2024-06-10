/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
function toggleMenu() {
    const element = document.getElementById("menuHolder");
    element.style.display = element.style.display === "block" ? "none" : "block";
}
function closeMenu() {
    const children = document.getElementsByClassName("menuCategory");
    for (let i = 0; i < children.length; i++) children[i].style.display = "none";
    document.getElementById("menuSelectionContainer").style.display = "none";
    if (document.getElementById("logHolder").children.length > 0) document.getElementById("logHolder").removeChild(document.getElementById("logHolder").firstChild);
    clearInterval(timeUpdater);
    verifiedOres.showLogs();
}
function keepShowingMenu() {
    document.getElementById("menuHolder").style.display = "block";
}
function showMenuScreen(type) {
    document.getElementById("menuSelectionContainer").style.display = "block";
    const allFrames = document.getElementById("menuSelectionContainer").children;
    for (let i = 0; i < allFrames.length; i++) allFrames[i].style.display = "none";
    document.getElementById(`frame-${type}`).style.display = "block";
    if (type === 'settings') switchSettings('game');
    if (type === 'statistics') createStats();
    if (type === 'locations') showOreForge(true);
}
function showFaqPage(num) {
    const elements = document.getElementsByClassName("faqPage");
    for (let i = 0; i < elements.length; i++) {
        if (i === num) elements[i].style.display = "block";
        else elements[i].style.display = "none";
    }
}
function toggleNewPlayer(state) {
    if (state) document.getElementById("newPlayer").style.display = "block";
    else {document.getElementById("newPlayer").style.display = "none"; player.faqOffered = true;}
}
function doTutorial() {
    showMenuScreen("faq");
    showFaqPage(0);
    toggleNewPlayer(false);
    player.faqOffered = true;
}
const settingsTabs = ["game", "audio"]
function switchSettings(type) {
    for (let i = 0; i < settingsTabs.length; i++) document.getElementById(`${settingsTabs[i]}Settings`).style.display = "none";
    document.getElementById(`${type}Settings`).style.display = "block";
}
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


function changeCanDisplay(button) {
    if (player.settings.canDisplay) {
        button.style.backgroundColor = "#FF3D3D";
        document.getElementById("blockDisplay").style.display = "none";
        document.getElementById("displayDisabled").style.display = "block";
        player.settings.canDisplay = false;
    } else {
        button.style.backgroundColor = "#6BC267";
        player.settings.canDisplay = true;
        document.getElementById("blockDisplay").style.display = "inline-flex";
        document.getElementById("displayDisabled").style.display = "none";
        displayArea();
    }
}
let useNumbers = false;
let allPickaxeNames = 
["Mulch Mallet", 
"Mud Sickle", 
"Dirt Ravager", 
"Crystalline Excavator",
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
"Coronary Catastrophe",
"N̴̡̠͍̰̓̀̉́͘͟͜͠͠͝uͧ̆̃͂̔̂͛̆̇ͫ̍̒̍͑̅̎̾͒҉̶̶̧̡̨͘͟͟͡͞͡͏̷̧͈̣̱͚̼̹̤̘̹l̷̷̸̴̨̡̢̜͈̭̰͕̪̯̭͓͓̲̱̹̥̜̝̩̝ͤ̀̕͝͠͠͝͠l̴͋̄̋͐ͪ̒ͦ̄̆̅̂̍͂ͧ͛ͮ̏̒̓ͨ̓͊̓̆ͤ̓̇̽̎͏̷͔̬̟̣͍̗̦̝̮̱̳̼͔̻̭͍̗̦͉̗̥͍͇̭̘͉̕͜͡ ̸̸̶̨̢̳̍̐̓ͪͥ̐͋̃̉͒̓̓̀̌͑̾ͩͯ͋ͦ͗ͮͯͪͥ̅͊ͩͣͨ̆̒̂̂̽̀̀͘͘͘͜͞͠C̵̵̷̸̸̵ͦ͒͆͡͞͡͏̶̵̡͔̙̱͢ḩ̸͙͙̼̖̥̦̻͈̖̫̖̯̣̣͍͎̖̹̜͇̯ͧͥ̎̒ͨ̎̓ͫ͛̅ͨͧͤͤͫ̊̓̈̒͐ͥ̎̓ͤ̃ͧͣ͊̉̄͛͡r̵̸̴̢̢͒ͮ̈́̓ͬ̉͆ͪ̀̓͋̉́͌̾ͬ̾̐ͫ̑ͮ̒̂̈͆͆̆͌̿ͭ́͑̂ͯ͛ͩ̇̚͜͡͏̸̼̫̪̮̲͉͔͇̯̻͇̫͚̰̦̤͈͉̟̙̻̖͇͖̱͕̘̣̫̥̝͍͔͝o̷͐̏̈́ͭ̔̇ͬͣ͑̂̉̑̓̊ͯͪ͏̶̸͏̷̴̴̶̷̷̧́̀̀͘͟͢͞҉̠̩͇͙̥̫̻̮̯̳̖̙͕̹̤͈͓̻͇̘͖͔m͑͐̃́̚͏̷̶̸̴̧̢̧̡̭̰́̕̕͢͡a̷̶̛̓̉͐͋̄̍͊̓ͪ̏̑̍͋ͮ̔͋̒ͧͭ̐̋͛͆̌̚̕͏͏̶͜͢͞͏̵̸̧̢̹̯͎̫̜̪̪̥̫̖̻̝̘͖̼̰̝͈͝͝͡",
"The Tree of Life"
];
function changeUseNumbers(button) {
    if (!player.settings.useNumbers) {
        let elements = document.getElementById("pickaxeCrafts").children;
        for (let i = 0; i < elements.length; i++) {
            elements[i].firstChild.innerText = "Pickaxe " + (i + 1);
        }
        if (button != undefined) {
            button.style.backgroundColor = "#6BC267";
        }
        player.settings.useNumbers = true;
    } else {
        let elements = document.getElementById("pickaxeCrafts").children;
        for (let i = 0; i < elements.length; i++) {
            elements[i].firstChild.innerText = allPickaxeNames[i];
        }
        if (button != undefined) {
            button.style.backgroundColor = "#FF3D3D";
        }
        player.settings.useNumbers = false;
    }
}

function changeMinRarity(button) {
    let nextTier = oreInformation.getNextTier(player.settings.stopOnRare.minimum);
    if (nextTier === "Layer") nextTier = "Antique";
    player.settings.stopOnRare.minimum = nextTier;
    button.innerText = nextTier + "+";
    const colors = oreInformation.getColors(nextTier);
    button.style.color = colors["textColor"]
    button.style.backgroundImage = "linear-gradient(to right, " + colors["backgroundColor"] + " 70%, black)";
}
function changeLatestMax(button) {
    amt = Number(button.value);
    if (!isNaN(amt) && amt > 0 && amt < 1000) {
        player.settings.latestLength = amt;
        flashGreen(button);
    } else {
        flashRed(button)
    }
}
function changeStopOnRare(button) {
    if (player.settings.stopOnRare.active) {
        player.settings.stopOnRare.active = false;
        button.style.backgroundColor = "#FF3D3D";
    } else {
        player.settings.stopOnRare.active = true;
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
function changeSpawnVolume(percent, name) {
    percent = Number(percent);
    if (!(isNaN(percent))) {
    if (percent > 100)
        percent = 100;
    allAudios[name].volume = (percent / 100);
    player.settings.audioSettings[name].volume = percent;
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
        player.settings.minSpeed = num;
        flashGreen(element);
    } else {
        flashRed(element);
    }
}

function toggleCaves() {
    if (player.settings.cavesEnabled) {
        player.settings.cavesEnabled = false;
        document.getElementById("caveToggle").style.backgroundColor = "#FF3D3D";
    }
    else {
        player.settings.cavesEnabled = true;
        document.getElementById("caveToggle").style.backgroundColor = "#6BC267";
    }
}

function updateCapacity(element) {
    elementValue = element.value;
    let value = elementValue === "" ? "none" : elementValue;
    value = Number(value);
    if (!(isNaN(value)) && value >= 250) {
        player.settings.baseMineCapacity = value;
        mineCapacity = value;
        flashGreen(element);
    } else {
        flashRed(element);
    }        
    document.getElementById("mineResetProgress").innerText = `${blocksRevealedThisReset}/${mineCapacity.toLocaleString()} Blocks Revealed This Reset.`;
}
function updateAutomineUpdateSpeed(element) {
    let speed = element.value;
    speed ??= "na";
    if (!isNaN(speed) && speed > 0) {
        player.settings.automineUpdate = speed;
        flashGreen(element);
    } else {
        flashRed(element);
    }
}
const indexOrder = {
    "worldOne" : ["dirtLayer", "brickLayer", "foggyLayer", "waterLayer", "rockLayer", "radioactiveLayer", "cactusLayer",  "paperLayer", "worldOneCommons", "sillyLayer", "fluteLayer", "grassLayer", "bacteriaCave", "biohazardCave", "musicCave", "mysteryCave"],
    "worldTwo" : ["cloudLayer", "tvLayer", "doorLayer", "globeLayer", "chessLayer", "worldTwoCommons", "barrierLayer", "borderLayer", "bacteriaCave", "biohazardCave", "musicCave", "mysteryCave"],
    "subrealmOne" : ["scLayer", "bnLayer", "knLayer", "vaLayer", "srLayer", "ocLayer", "catcatLayer", "ccCave", "moCave", "foCave", "axCave", "ioCave", "ggCave"]
}
let layerNum = 0;
function switchLayerIndex(num, overrideLayer, world) {
    while (document.getElementById("oreCardHolder").firstChild) {
        document.getElementById("oreCardHolder").removeChild(document.getElementById("oreCardHolder").firstChild);
    }
    let layerToIndex;
    let worldLayer;
    if (world === undefined) {
        worldLayer = currentWorld === 1 ? indexOrder["worldOne"] : (currentWorld === 2 ? indexOrder["worldTwo"] : indexOrder["subrealmOne"]);
    } else {
        worldLayer = world === 1 ? indexOrder["worldOne"] : (world === 2 ? indexOrder["worldTwo"] : indexOrder["subrealmOne"]);
    }
    if (overrideLayer === undefined) {
        layerNum += num;
        if (layerNum < 0) layerNum = worldLayer.length - 1;
        else if (layerNum > worldLayer.length - 1) layerNum = 0;
        layerToIndex = worldLayer[layerNum];
    } else {
        layerToIndex = overrideLayer;
    }
    
    if (layerToIndex === "sillyLayer") if (oreList["🎂"]["normalAmt"] < 1000000) {
        if (num === undefined) return; else {
            switchLayerIndex(num);
            return;
        }
    }
    if (layerToIndex === "borderLayer") if (oreList["❌"]["normalAmt"] < 1000000) {
        if (num === undefined) return; else {
            switchLayerIndex(num);
            return;
        }
    }
    if (layerToIndex === "fluteLayer") if (oreList["🪈"]["normalAmt"] < 1000000) {
        if (num === undefined) return; else {
            switchLayerIndex(num);
            return;
        }
    }
    if (layerToIndex === "grassLayer") if (oreList["🟩"]["normalAmt"] < 1000000) {
        if (num === undefined) return; else {
            switchLayerIndex(num);
            return;
        }
    }
    let layerMaterial;
    if (layerList[layerToIndex] != undefined) layerMaterial = layerList[layerToIndex].slice(-1);
    if (caveList[layerToIndex] != undefined) layerMaterial = caveList[layerToIndex].slice(-1);
    document.getElementById("indexSwitchButton").innerHTML = `<span title="${oreList[layerMaterial]["oreName"]}">${layerMaterial}</span>`;
    let oreIndexCards = [];
    let elements = createIndexCards(layerToIndex);
    for (let i = 0; i < elements.length; i++) oreIndexCards.push(elements[i])
    for (let i = oreIndexCards.length - 1; i >= 0; i--) {
        document.getElementById("oreCardHolder").appendChild(oreIndexCards[i]);
    }
    return 0;
}
function shouldIgnore(ore) {
    return oreInformation.tierGrOrEqTo({"tier1": oreList[ore]["oreTier"], "tier2": "Sacred"});
}
let noLuck = "✴️🌹";
function createIndexCards(layer) {
        const oldLayer = layer; 
        let toReturn = [];
        let isCave = false;
        let caveMulti;
        let spawnMessage = true;
        let minIndexRarity = 2;
        let affectedByLuck = true;
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
        if ((oreList[property]["numRarity"] >= minIndexRarity || property === "✴️" || (oreList[property]["numRarity"] > 1 && subRealmOneLayers.includes(oldLayer))) && oreList[property]["oreTier"] !== "Celestial") {
            if (oreInformation.isCommon(oreList[property]["oreTier"])) affectedByLuck = false;
            if (noLuck.indexOf(property) > -1) affectedByLuck = false;
            let parentObject = document.createElement("div");
            let parentWrapper = document.createElement("div");
            parentObject.classList = "oreCard";
            parentWrapper.classList = "indexWrapper";
            let blackOut = false;
            if (shouldIgnore(property) && !indexHasOre(property)) blackOut = true;
            let propertyToAdd;
            if (oreList[property]["hasImage"]) {
                propertyToAdd = `<img src="${oreList[property]["src"]}" class="indexImage"></img>`
            } else propertyToAdd = property;
            let output = `<span class='indexOre ${(blackOut) ? (oreList[property]["hasImage"] ? "indexBlackout blackoutImage" : "indexBlackout") : ""}' title="${oreList[property]["oreName"]}">${propertyToAdd}</span>${blackOut ? "</span>" : ""}`;
            output += `<span class='indexVariants indexTextOutline'>${indexVariants(property)}</span>`
            output += `<span class='indexTier indexTextOutline'>${blackOut ? "???" : oreList[property]["oreTier"]}</span>`
            output += "<span class='indexRarity indexTextOutline'>1/";
            if (isCave) {
                let rarity = oreList[property]["numRarity"];
                if (oolProbabilities[property] != undefined) rarity = Math.round(1/oolProbabilities[property]);
                output += (blackOut ? "???" : rarity.toLocaleString());
                output += " Base Rarity.</span>";
                rarity *= caveMulti;
                output += `<span class='indexWithLuck indexTextOutline'>1/${(blackOut ? "???" : rarity.toLocaleString())} Adjusted.</span>`;
            } else {
                let rarity = oreList[property]["numRarity"]
                output += (blackOut ? "???" : rarity.toLocaleString());
                output += " Base Rarity.</span>";
                if (affectedByLuck) output += "<span class='indexWithLuck indexTextOutline'>1/" + (blackOut ? "???" : Math.round(rarity / verifiedOres.getCurrentLuck()).toLocaleString()) + " With Luck.</span>";
                else  output += "<span class='indexWithLuck indexTextOutline'>Unaffected By Luck</span>";
            }
            if (oreList[property]["spawnMessage"] !== "") {
                output += `<span class='indexSpawnMessage indexTextOutline'>${blackOut ? "???" : oreList[property]["spawnMessage"]}</span>`;
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
            if (blackOut) parentWrapper.style.backgroundImage = "linear-gradient(to bottom right, black 5%, #383838 30%, 70%, black 95%), linear-gradient(to top right, #FF3D3D 20%, black, #FF3D3D 80%)"
            parentWrapper.innerHTML = output;
            parentObject.appendChild(parentWrapper)
            toReturn.push(parentObject);
        }
    }
        return toReturn;
}

function randomFunction(ore, cause) {
    if ((cause === "inv" && player.settings.inventorySettings.invToIndex) || (cause === "crafting" && player.settings.inventorySettings.craftingToIndex)) {
        let layer = undefined;
        let world = currentWorld;
        if (ore === "❤️‍🔥")
            return;
        if (ore === "🕳️")
            return;
        if (!shouldIgnore(ore) || indexHasOre(ore)) {
            for (let i = 0; i < worldOneLayers.length; i++) {
                if (layerList[worldOneLayers[i]].includes(ore)) {
                    layer = worldOneLayers[i];
                    world = 1;
                    break;
                }
            }
            if (layer === undefined) {
                for (let i = 0; i < worldTwoLayers.length; i++) {
                    if (layerList[worldTwoLayers[i]].includes(ore)) {
                        layer = worldTwoLayers[i];
                        world = 2;
                        break;
                    }
                }
            }
            if (layer === undefined) {
                for (let i = 0; i < subRealmOneLayers.length; i++) {
                    if (layerList[subRealmOneLayers[i]].includes(ore)) {
                        layer = subRealmOneLayers[i];
                        world = 1.1;
                        break;
                    }
                }
            }
            if (layer === undefined) {
                for (let cave in caveTypes) {
                    if (caveList[cave].includes(ore)) {
                        layer = cave;
                        break;
                    }
                }
            }
            if (layer === undefined) {
                for (let i = specialLayers.length - 1; i >= 0; i--) {
                    if (layerList[specialLayers[i]].includes(ore)) {
                        layer = specialLayers[i];
                        break;
                    }
                }
            }
            if (layerList["worldOneCommons"].includes(ore)) {
                layer = "worldOneCommons";
                world = 1;
            }
            if (layerList["worldTwoCommons"].includes(ore)) {
                layer = "worldTwoCommons";
                world = 2;
            }
            
            if (layer != undefined) {
                showMenuScreen('index');
                switchLayerIndex(0, layer, world);
            }
        }
    }
}

function indexHasOre(ore) {
    return (oreList[ore]["normalAmt"] || oreList[ore]["electrifiedAmt"] || oreList[ore]["radioactiveAmt"] || oreList[ore]["explosiveAmt"]);
}
function indexVariants(ore) { 
    let imageOutput = "";
    let isImage = false;
    if (oreList[ore]["hasImage"]) {
        imageOutput = `<span class="${oreList[ore]["normalAmt"] ? "" : "blackoutImage"}"><img src="${oreList[ore]["src"]}" class="indexImageVariant"></img></span>`
        isImage = true;
    }
    return "" + (isImage ? imageOutput : (oreList[ore]["normalAmt"] ? ore : (`<span class='indexBlackout'>${ore}</span>`))) + (oreList[ore]["electrifiedAmt"] ? "⚡️" : "<span class='indexBlackout'>⚡️</span>") + (oreList[ore]["radioactiveAmt"] ? "☢️" : "<span class='indexBlackout'>☢️</span>") + (oreList[ore]["explosiveAmt"] ? "💥" : "<span class='indexBlackout'>💥</span>")
}
function switchToIndex(button, num) {
    if (num === 0) {
        if (player.settings.inventorySettings.invToIndex) {
            player.settings.inventorySettings.invToIndex = false;
            button.style.backgroundColor = "#FF3D3D";
        } else {
            player.settings.inventorySettings.invToIndex = true;
            button.style.backgroundColor = "#6BC267";
        }
    } else if (num === 1) {
        if (player.settings.inventorySettings.craftingToIndex) {
            player.settings.inventorySettings.craftingToIndex = false;
            button.style.backgroundColor = "#FF3D3D";
        } else {
            player.settings.inventorySettings.craftingToIndex = true;
            button.style.backgroundColor = "#6BC267";
        }
    }
    
}
function togglePathBlocks() {
    if (player.settings.usePathBlocks) {
        document.getElementById("pathBlocks").style.backgroundColor = "#6BC267";
        player.settings.usePathBlocks = false;
    } else {
        document.getElementById("pathBlocks").style.backgroundColor = "#FF3D3D";
        player.settings.usePathBlocks = true;
    }
    displayArea();
}
let testSoundTimeout = null;
function testSound(name, element) {
    let time = (allAudios[name].duration * 1000);
    if (allAudios[name].currentTime === 0) {
        allAudios[name].play();
        element.style.backgroundColor = "#6BC267";
        allAudios[name].onended = (event) => {
            allAudios[name].onended = "";
            element.style.backgroundColor = "#FF3D3D";
            allAudios[name].pause();
            allAudios[name].currentTime = 0;
            clearTimeout(testSoundTimeout);
        };
    } else {
        allAudios[name].onended = "";
        allAudios[name].pause();
        allAudios[name].currentTime = 0;
        element.style.backgroundColor = "#FF3D3D";
        clearTimeout(testSoundTimeout);
    }
}
function enableDisguisedChills() {
    if (player.settings.useDisguisedChills) {
        player.settings.useDisguisedChills = false;
        document.getElementById("disguisedChills").style.backgroundColor = "#FF3D3D";
    } else {
        player.settings.useDisguisedChills = true;
        document.getElementById("disguisedChills").style.backgroundColor = "#6BC267";
    }
}
function switchFont() {
    if (player.settings.usingNewEmojis) {
        player.settings.usingNewEmojis = false;
        document.body.style.fontFamily = "";
        document.getElementById("switchFont").style.backgroundColor = "#FF3D3D";
        distanceMulti--;
        layerDistanceY -= 2000;
    } else {
        player.settings.usingNewEmojis = true;
        document.body.style.fontFamily = `system-ui, Noto Color Emoji`;
        document.getElementById("switchFont").style.backgroundColor = "#6BC267";
        distanceMulti--;
        layerDistanceY -= 2000;
    }
}
let minTier = "Antique";
function changeSpawnMessageRarity(button) {
    player.settings.minRarityNum++;
    if (player.settings.minRarityNum > 9) player.settings.minRarityNum = 0;
    minTier = oreInformation.getTierAt(player.settings.minRarityNum + 6);
    button.innerText = "Minimum Spawn Message Tier: " + minTier + "+";
    let colors = oreInformation.getColors(minTier);
    button.style.color = colors["textColor"]
    button.style.backgroundImage = "linear-gradient(to right, " + colors["backgroundColor"] + " 70%, black)";
}
let timeUpdater;
function createStats() {
    clearInterval(timeUpdater);
    const elements2 = document.getElementsByClassName("deleteClass")
    for (let i = elements2.length - 1; i >= 0; i--) elements2[i].remove()
    let currentTier = "Flawless";
    const table = document.createElement("table");
    while (!oreInformation.tierGrOrEqTo({"tier1": "Common", "tier2": currentTier})) {
    const tableRow = document.createElement('tr');
    tableRow.classList = "deleteClass";
    const ores = oreInformation.getOresByTier(currentTier);
    let totals = {
        "normalAmt": 0,
        "electrifiedAmt": 0,
        "radioactiveAmt": 0,
        "explosiveAmt": 0,
    }
    let completionAmt = 0;
    for (let i = 0; i < ores.length; i++) {
        let amts = 0;
        for (let j = 0; j < variantInvNames.length; j++) {
            totals[variantInvNames[j]] += oreList[ores[i]][variantInvNames[j]];
            amts += oreList[ores[i]][variantInvNames[j]];
        }
        completionAmt += amts > 0 ? 1 : 0;
    }
    let tableRowInfo = document.createElement("td");
    tableRowInfo.classList = "statsRow";
    tableRowInfo.innerText = currentTier;
    tableRow.appendChild(tableRowInfo);
    tableRowInfo = document.createElement("td");
    tableRowInfo.classList = "statsRow";
    tableRowInfo.innerText = (totals["normalAmt"] + totals["electrifiedAmt"] + totals["radioactiveAmt"] + totals["explosiveAmt"]).toLocaleString();
    tableRow.appendChild(tableRowInfo);
    for (let property in totals) {
        tableRowInfo = document.createElement("td");
        tableRowInfo.classList = "statsRow";
        tableRowInfo.innerText = totals[property].toLocaleString();
        tableRow.appendChild(tableRowInfo);
    }
    tableRowInfo = document.createElement("td");
    tableRowInfo.classList = "statsRow";
    tableRowInfo.innerText = `${Math.round(completionAmt / ores.length * 100)}%`;
    tableRow.appendChild(tableRowInfo);
    currentTier = oreInformation.getNextTier(currentTier);
    document.getElementById("statsTable").appendChild(tableRow);
    }
   updateTimes();
   timeUpdater = setInterval(() => {
    updateTimes();
   }, 250);
   
}
function updateTimes() {
    document.getElementById("statsTotalTime").textContent = `${longTime(player.stats.timePlayed)} Time Played.`;
    document.getElementById("statsSessionTime").textContent = `${longTime(Date.now() - verifiedOres.getStartTime())} Session Time.`;
    document.getElementById("statsCavesGenerated").textContent = `${player.stats.cavesGenerated.toLocaleString()} Caves Generated.`;
    document.getElementById("statsBlocksMined").textContent = `${player.stats.blocksMined.toLocaleString()} Blocks Mined.`;
    lastX += resetAddX;
    if (movementsX > lastX) {
        const timeUsing = Date.now();
        const totalMoves = 1000 * ((movementsX - lastX) / (timeUsing - lastXCheck));
        lastXCheck = timeUsing;
        lastX = movementsX;
        lastXValues.push(totalMoves);
        if (lastXValues.length > 10) lastXValues.splice(0, 1);
        let total = 0;
        for (let i = 0; i < lastXValues.length; i++) total += lastXValues[i];
        total /= lastXValues.length;
        const speeds = calcSpeed();
        resetAddX = 0;
        const output = `${Math.floor(total)} Average Speed/${Math.floor(1000/speeds.speed * speeds.reps)} Estimated Speed`
        document.getElementById("statsSpeed").textContent = output;
    }
    
}
function longTime(milliseconds) {
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    let days = Math.floor((milliseconds / 1000 / 60 / 60 / 24) % 365);
    let years = Math.floor((milliseconds / 1000 / 60 / 60 / 24 / 365));
    const finalTime = [
        years.toString().padStart(20, "0"),
        days.toString().padStart(3, "0"),
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":");
    for (let i = 0; i < finalTime.indexOf(":") + 1; i++) if (finalTime[i] !== "0") {
        return (finalTime[i] === ":" ? finalTime.substring(i + 1) : finalTime.substring(i));
    }
    return finalTime;
}
function switchHighRarity(button) {
    if (player.settings.highRarityLogs) {
        player.settings.highRarityLogs = false;
        button.style.backgroundColor = "#FF3D3D";
    } else {
        player.settings.highRarityLogs = true
        button.style.backgroundColor = "#6BC267";
    } 
}
function toggleVariantList(state) {
    const elements = document.getElementsByClassName("potentialVariant");
    for (let i = 0; i < elements.length; i++) elements[i].style.display = state ? "flex" : "none";
}
function switchCurrentSelectedVariant(type) {
    document.getElementById("currentSelectedVariant").innerText = type;
    toggleVariantList(false)
}
function showVariantConversion(state) {
    if (state) {showWorkshop(false); showOreForge(false);}
    document.getElementById("conversionContainer").style.display = state ? "block" : "none";
}
function showOreForge(state) {
    if (state) {showVariantConversion(false); showWorkshop(false);}
    document.getElementById("forgeContainer").style.display = state ? "block" : "none";
}
function showOreCrafts(state) {
    if (state) showOreFissions(false);
    document.getElementById("forgeCraft").style.display = state ? "inline-flex" : "none";
}
function showOreFissions(state) {
    if (state) showOreCrafts(false);
    document.getElementById("forgeFission").style.display = state ? "inline-flex" : "none";
}
function showWorkshop(state) {
    if (state) {showVariantConversion(false); showOreForge(false);}
    document.getElementById("workshopContainer").style.display = state ? "block" : "none";
    currentDisplayedUpgrade = undefined;
    updateDisplayedUpgrade();
}
const conversionRates = [5, 10, 30];
let hasConverted = false;
function convertVariants() {
    let ore = document.getElementById("oreInput").value;
    ore = ore.replaceAll(" ", "");
    let variant = document.getElementById("currentSelectedVariant").innerText;
    let amt = document.getElementById("amtInput").value;
    document.getElementById("amtInput").value = "";
    document.getElementById("oreInput").value = "";
    if (oreList[ore] === undefined) {
        document.getElementById("machineError").innerText = "Error! Ore Doesn't Exist!";
        document.getElementById("machineError").style.color = "red";
        setTimeout(() => {
            document.getElementById("machineError").innerText = "";
        }, 2000);
        return;
    }
    amt = Number(amt);
    if (isNaN(amt) || amt <= 0) {
        document.getElementById("machineError").innerText = "Error! Invalid Amount!";
        document.getElementById("machineError").style.color = "red";
        setTimeout(() => {
            document.getElementById("machineError").innerText = "";
        }, 2000);
        return;
    }
    const obj = {"ore":ore, "variant":variant, "amt":amt};
    let amtToGive = 0;
    if (obj["variant"] === "Explosive") amtToGive = conversionRates[2];
    else if (obj["variant"] === "Radioactive") amtToGive = conversionRates[1];
    else if (obj["variant"] === "Electrified") amtToGive = conversionRates[0];
    let name = variantInvNames[names.indexOf(obj["variant"])];
    if (obj["ore"] === "🧱" && obj["variant"] === "Electrified" && obj["amt"] === 1337) {
        typeWriter("<i>The ground shakes beneath you as something makes its presence known...</i>", get("spawnMessage"), true);
        eventSpawn.currentTime = 0;
        eventSpawn.play();
        hasConverted = true;
    }
    if (oreList[obj["ore"]][name] >= obj["amt"]) {
        oreList[obj["ore"]][name] -= obj["amt"];
        oreList[obj["ore"]]["normalAmt"] += (obj["amt"] * amtToGive);
        inventoryObj[obj["ore"]] = 0;
        document.getElementById("machineError").innerText = "Success!";
        document.getElementById("machineError").style.color = "green";
        setTimeout(() => {
            document.getElementById("machineError").innerText = "";
        }, 2000);
    } else {
        document.getElementById("machineError").innerText = "Error! You do not own enough of this ore to perform this action!";
        document.getElementById("machineError").style.color = "red";
        setTimeout(() => {
            document.getElementById("machineError").innerText = "";
        }, 2000);
    }
}
function timeSinceLastAutosave() {
    let milliseconds = (cloudsaving.save_interval - (cloudsaving.next_save_time - Date.now()));
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    document.getElementById("lastAutosave").innerHTML = `Time Since Last Galaxy Cloud Save: ${[
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":")}`;
}
function toggleSpawnEffects(button) {
    if (player.settings.doSpawnEffects) {
        button.style.backgroundColor = "#FF3D3D";
        player.settings.doSpawnEffects = false;
    } else {
        button.style.backgroundColor = "#6BC267";
        player.settings.doSpawnEffects = true;
    }
}
function toggleAutomineProtection(button) {
    if (player.settings.automineProtection) {
        button.style.backgroundColor = "#FF3D3D";
        player.settings.automineProtection = false;
    } else {
        button.style.backgroundColor = "#6BC267";
        player.settings.automineProtection = true;
    }
}
function toggleNyerd(button) {
    if (player.settings.useNyerd) {
        button.style.backgroundColor = "#FF3D3D";
        player.settings.useNyerd = false;
        document.getElementById("nyerd").style.display = "none";
        document.getElementById("trackerArrow").style.display = "block";
        if (player.oreTracker.tracking) {
            getAngleBetweenPoints({x : player.oreTracker.locationX, y: player.oreTracker.locationY});
        }
    } else {
        button.style.backgroundColor = "#6BC267";
        player.settings.useNyerd = true;
        document.getElementById("trackerArrow").style.display = "none";
        document.getElementById("nyerd").style.display = "block";
        if (player.oreTracker.tracking) {
            getAngleBetweenPoints({x : player.oreTracker.locationX, y: player.oreTracker.locationY});
        }
    }
}
function goToConvert(ore, variant) {
    showMenuScreen("locations");
    showVariantConversion(true);
    document.getElementById("oreInput").value = ore;
    document.getElementById("amtInput").value = oreList[ore][variantInvNames[variant - 1]];
    document.getElementsByClassName("potentialVariant")[variant - 2].click();
}
let inafk = false
function AFKmode(){
    if(!inafk){
        let element = document.createElement("div")
        element.id = 'afkModeScreen'
        element.style = 'width:100vw;height:100vh;z-index:2'
        element.innerHTML = "<h1>AFK</h1></br><p id='blocksMinedafk'></p><br><button onclick='AFKmode()'>bnack</button>"
        document.body.prepend(element)
        document.getElementById("inventory1").textContent = ""
        document.getElementById("inventory2").textContent = ""
        document.getElementById("inventory3").textContent = ""
        document.getElementById("inventory4").textContent = ""
        minedElement = document.getElementById("blocksMinedafk")
        document.getElementById("mainContent").style.display="none"
    } else {
        document.getElementById("afkModeScreen").remove()
        minedElement = document.getElementById("blocksMined");
        document.getElementById("mainContent").style.display="block"
        inventoryObj = {...oreList}
        createInventory();
    }
    inafk = !inafk
}
function convertAllButOne() {
    let ore = document.getElementById("oreInput").value;
    ore = ore.replaceAll(" ", "");
    if (oreList[ore] !== undefined) {
        const elecAmt = oreList[ore]["electrifiedAmt"] - 1;
        const radiAmt = oreList[ore]["radioactiveAmt"] - 1;
        const explAmt = oreList[ore]["explosiveAmt"] - 1;
        const uses = [false, false, false];
        const amts = [elecAmt, radiAmt, explAmt]
        if (elecAmt > 0) uses[0] = true;
        if (radiAmt > 0) uses[1] = true;
        if (explAmt > 0) uses[2] = true;
        for (let i = 1; i < 4; i++) {
            if (uses[i - 1]) {
                oreList[ore][variantInvNames[i]] -= amts[i - 1];
                oreList[ore]["normalAmt"] += (amts[i - 1] * conversionRates[i - 1])
            }
        }
        inventoryObj[ore] = 0;
    } else return;
}
//convertVariants({"ore":"", "variant":"Explosive", "amt":1})