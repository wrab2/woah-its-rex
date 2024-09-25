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
    if (get("stopOnRareList").style.display !== "none") toggleStopRareList();
    if (get("spawnTierList").style.display !== "none") toggleSpawnMessageList();
    get("portal").style.animation = "";
    get("rightPortal").style.animation = "";
    get("leftPortal").style.animation = "";
}
function keepShowingMenu() {
    document.getElementById("menuHolder").style.display = "block";
}
function showMenuScreen(type) {
    document.getElementById("menuSelectionContainer").style.display = "block";
    const allFrames = document.getElementById("menuSelectionContainer").children;
    for (let i = 0; i < allFrames.length; i++) allFrames[i].style.display = "none";
    document.getElementById(`frame-${type}`).style.display = "block";
    if (type === "index") switchLayerIndex(0)
    if (type === 'settings') switchSettings('game');
    if (type === 'statistics') createStats();
    if (type === 'locations') {
        get("portal").style.animation = "rotatePortal 60s linear infinite";
        get("rightPortal").style.animation = "rotatePortal 180s linear infinite";
        get("leftPortal").style.animation = "rotatePortal 180s linear infinite";
        getNextPortalPosition(0);
        showPortalRoom(true);
    }
}
function showFaqPage(num) {
    const elements = document.getElementsByClassName("faqPage");
    for (let i = 0; i < elements.length; i++) {
        if (i === num) elements[i].style.display = "block";
        else elements[i].style.display = "none";
    }
}
function doTutorial() {
    showMenuScreen("faq");
    showFaqPage(0);
    player.faqOffered = true;
    showNextInQueue();
}
const settingsTabs = ["game", "audio", "webhook"]
function switchSettings(type) {
    for (let i = 0; i < settingsTabs.length; i++) document.getElementById(`${settingsTabs[i]}Settings`).style.display = "none";
    document.getElementById(`${type}Settings`).style.display = "block";
    if (type === "webhook") get("webhookSettings").style.display = "flex"; 
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
"Ballast Breaker",
"Tropical Carver",
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
        const list = pickaxeStats;
        let i = 1;
        for (let name in list) {
            if (name !== "pickaxe0") {
                getButtonByName(name).firstChild.textContent = `Pickaxe ${i}`;
                i++;
            }
        }
        if (button != undefined) {
            button.style.backgroundColor = "#6BC267";
        }
        player.settings.useNumbers = true;
    } else {
        const list = pickaxeStats;
        let i = 0;
        for (let name in list) {
            if (name !== "pickaxe0") {
                getButtonByName(name).firstChild.textContent = allPickaxeNames[i];
                i++;
            }
        }
        if (button != undefined) {
            button.style.backgroundColor = "#FF3D3D";
        }
        player.settings.useNumbers = false;
    }
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
    document.getElementById("resetNumber").innerText = `${blocksRevealedThisReset}/${mineCapacity.toLocaleString()} Blocks Revealed This Reset.`;
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
    "worldOne" : ["dirtLayer", "brickLayer", "foggyLayer", "waterLayer", "rockLayer", "radioactiveLayer", "cactusLayer",  "paperLayer", "giftLayer", "worldOneCommons", "sillyLayer", "fluteLayer", "grassLayer", "bacteriaCave", "biohazardCave", "musicCave", "mysteryCave", "eventLayer"],
    "worldTwo" : ["cloudLayer", "tvLayer", "doorLayer", "globeLayer", "chessLayer", "worldTwoCommons", "barrierLayer", "borderLayer", "bacteriaCave", "biohazardCave", "musicCave", "mysteryCave"],
    "subrealmOne" : ["scLayer", "bnLayer", "knLayer", "vaLayer", "srLayer", "ocLayer", "catcatLayer", "ccCave", "moCave", "foCave", "axCave", "ioCave", "ggCave"],
    "waterWorld" : ["waterLayer", "watrCave"],
    "galactica" : ["starLayer", "nebulaLayer"]
}
let layerNum = 0;
function switchLayerIndex(num, overrideLayer, world) {
    while (document.getElementById("oreCardHolder").firstChild) {
        document.getElementById("oreCardHolder").removeChild(document.getElementById("oreCardHolder").firstChild);
    }
    let layerToIndex;
    let worldLayer;
    if (world === undefined) {
        if (currentWorld === 1) worldLayer = indexOrder["worldOne"];
        else if (currentWorld === 1.1) worldLayer = indexOrder["subrealmOne"];
        else if (currentWorld === 1.2) worldLayer = indexOrder["waterWorld"];
        else if (currentWorld === 2) worldLayer = indexOrder["worldTwo"];
        else if (currentWorld === 0.9) worldLayer = indexOrder["galactica"];
    } else {
        if (world === 1) worldLayer = indexOrder["worldOne"];
        else if (world === 1.1) worldLayer = indexOrder["subrealmOne"];
        else if (world === 1.2) worldLayer = indexOrder["waterWorld"];
        else if (world === 2) worldLayer = indexOrder["worldTwo"];
        else if (world === 0.9) worldLayer = indexOrder["galactica"];
    }
    if (overrideLayer === undefined) {
        layerNum += num;
        if (layerNum < 0) layerNum = worldLayer.length - 1;
        else if (layerNum > worldLayer.length - 1) layerNum = 0;
        layerToIndex = worldLayer[layerNum];
    } else {
        layerToIndex = overrideLayer;
    }
    
    if (layerToIndex === "sillyLayer") if (playerInventory["🎂"]["normalAmt"] < 1000000) {
        if (num === undefined) return; else {
            switchLayerIndex(num);
            return;
        }
    }
    if (layerToIndex === "borderLayer") if (playerInventory["❌"]["normalAmt"] < 1000000) {
        if (num === undefined) return; else {
            switchLayerIndex(num);
            return;
        }
    }
    if (layerToIndex === "fluteLayer") if (playerInventory["🪈"]["normalAmt"] < 1000000) {
        if (num === undefined) return; else {
            switchLayerIndex(num);
            return;
        }
    }
    if (layerToIndex === "grassLayer") if (playerInventory["🟩"]["normalAmt"] < 1000000) {
        if (num === undefined) return; else {
            switchLayerIndex(num);
            return;
        }
    }
    let layerMaterial;
    if (layerList[layerToIndex] != undefined) layerMaterial = layerList[layerToIndex].slice(-1);
    if (caveList[layerToIndex] != undefined) layerMaterial = caveList[layerToIndex].slice(-1);
    if (layerToIndex === "eventLayer") get("indexSwitchButton").textContent = "Events";
    else document.getElementById("indexSwitchButton").innerHTML = `<span title="${oreList[layerMaterial]["oreName"]}">${layerMaterial}</span>`;
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
        let minIndexRarity = 2;
        let affectedByLuck = true;
        let isEvent = false;
        if (layer === "worldOneCommons" || layer === "worldTwoCommons") {
            layer = layerList[layer];
        } else if (layerDictionary[layer] !== undefined) {
            layer = layerDictionary[layer].layer;
            minIndexRarity = 5000000;
        }
        if (subRealmOneLayers.includes(oldLayer)) minIndexRarity = 750000;
        else if (caveList[layer] != undefined) {
            layer = caveList[layer];
        }
        if (layer === "eventLayer") {
            isEvent = true;
            const collect = Object.keys(limitedOres);
            const output = [];
            for (let i = 0; i < collect.length; i++) {
                if (oreList[collect[i]]["oreTier"] !== "Celestial") output.push(collect[i]);
            }
            for (let i = 0; i < output.length; i++) {
                for (let j = 0; j < output.length - i - 1; j++) {
                    let rarity1 = oreList[output[j]]["numRarity"];
                    let rarity2 = oreList[output[j + 1]]["numRarity"];
                    if (rarity1 < rarity2) {
                        const lesser = output[j + 1];
                        output[j + 1] = output[j];
                        output[j] = lesser;
                    }
                }
            }
            layer = output;
        }
        for (let i = 0; i < layer.length; i++) {
        let property = layer[i];
        let skipOre = false;
        if ((layerList["worldOneCommons"].indexOf(property) > -1 || layerList["worldTwoCommons"].indexOf(property) > -1) && oldLayer.indexOf("Commons") === -1) {
            skipOre = true;
        }
        if ((oreList[property]["numRarity"] >= minIndexRarity || property === "✴️") && oreList[property]["oreTier"] !== "Celestial" && !skipOre) {
            if (oreInformation.isCommon(oreList[property]["oreTier"])) affectedByLuck = false;
            if (noLuck.indexOf(property) > -1) affectedByLuck = false;
            let blackOut = false;
            if (shouldIgnore(property) && !indexHasOre(property)) blackOut = true;
            let parentObject = document.createElement("div");
            let parentWrapper = get("normalIndexCard").cloneNode(true);
            parentObject.classList = "oreCard";
            //Add Ore
            const indexOre = parentWrapper.children[0];
            let propertyToAdd;
            if (oreList[property]["hasImage"]) {
                propertyToAdd = `<img src="${oreList[property]["src"]}" class="indexImage"></img>`;
            } else propertyToAdd = property;
            if (blackOut) {
                if (oreList[property]["hasImage"]) indexOre.classList.add("blackoutImage")
                indexOre.classList.add("indexBlackout");
            }
            indexOre.setAttribute("title", oreList[property]["oreName"]);
            indexOre.innerHTML = propertyToAdd;
            //Add Variants
            const indexVariant = parentWrapper.children[1];
            indexVariant.innerHTML = indexVariants(property);
            //Add Tier
            const indexTier = parentWrapper.children[2];
            if (blackOut) indexTier.textContent = "???";
            else indexTier.textContent = oreList[property]["oreTier"];
            //Add Rarity
            const indexRarity = parentWrapper.children[3];
            const indexRarityLuck = parentWrapper.children[4];
            if (caveList[oldLayer] !== undefined) {
                let rarity = oreList[property]["numRarity"];
                const caveMulti = getCaveMulti(oldLayer);
                if (oolProbabilities[property] != undefined) rarity = Math.round(1/oolProbabilities[property]);
                if (blackOut) indexRarity.textContent = "1/??? Base Rarity.";
                else indexRarity.textContent = `${rarity > 1000000000000000 ? formatNumber(rarity, 3) : rarity.toLocaleString()} Base Rarity.`;
                rarity *= caveMulti;
                if (blackOut) indexRarityLuck.textContent = "1/??? Adjusted.";
                else indexRarityLuck.textContent = `${rarity > 1000000000000000 ? formatNumber(rarity, 3) : rarity.toLocaleString()} Adjusted.`
            } else {
                let rarity = oreList[property]["numRarity"];
                if (blackOut) indexRarity.textContent = "1/??? Base Rarity.";
                else indexRarity.textContent = `${rarity > 1000000000000000 ? formatNumber(rarity, 3) : rarity.toLocaleString()} Base Rarity.`;
                rarity = Math.round(rarity / verifiedOres.getCurrentLuck());
                if (rarity < 1000 && affectedByLuck) rarity = 1000;
                let simAmt;
                if (player.settings.simulatedRng || pickaxeStats[player.stats.currentPickaxe].isDimensional) {
                    if (pickaxeStats[player.stats.currentPickaxe].isDimensional) simAmt = pickaxeStats[player.stats.currentPickaxe].mined;
                    else {
                        if (player.stats.currentPickaxe === "pickaxe27") simAmt = pickaxeStats["pickaxe27"][player.upgrades["pickaxe27"].level].mined;
                        else simAmt = pickaxeStats[player.stats.currentPickaxe].mined;
                    }
                    if (simAmt < 35899) rarity = Math.round(1/oreList[property]["decimalRarity"]);
                    else {
                        let rngModifier = simAmt / 35899;
                        rarity = oreList[property]["decimalRarity"]*simAmt;
                        if (rarity < 1) {
                            rarity /= simAmt;
                            rarity *= rngModifier;
                            rarity = Math.round(1/rarity);
                        }
                        else {
                            rarity = 1;
                        }
                    }
                }
                if (affectedByLuck && blackOut) indexRarityLuck.textContent = "1/??? With Luck.";
                else if (affectedByLuck) indexRarityLuck.textContent = `${rarity > 1000000000000000 ? formatNumber(rarity, 3) : rarity.toLocaleString()} With ${simAmt !== undefined ? "Simulated." : "Luck."}`
                else indexRarityLuck.textContent = "Unaffected By Luck";
            }
            //Add Spawn Message
            const indexSpawnMessage = parentWrapper.children[5];
            if (blackOut) indexSpawnMessage.textContent = "???";
            else indexSpawnMessage.textContent = oreList[property]["spawnMessage"];
            if (isEvent) {
                const indexEventLayers = parentWrapper.children[6];
                indexEventLayers.textContent = formatEventLayers(limitedOres[property].layers)
                const indexEventMonths = parentWrapper.children[7];
                indexEventMonths.textContent = formatEventMonths(limitedOres[property].timeValues)
            }
            //Add Variant Gradient
            parentWrapper = addIndexColors(parentWrapper, blackOut, property);
            parentObject.appendChild(parentWrapper)
            toReturn.push(parentObject);
        }
    }
        return toReturn;
}
function formatEventLayers(arr) {
    let layerOutput = "";
    for (let i = 0; i < arr.length; i++) {
        const toSearch = layerDictionary[arr[i]].layer;
        for (let i = toSearch.length - 1; i >= 0; i--) {
            if (oreList[toSearch[i]]["oreTier"] === "Layer") {
                layerOutput += `${toSearch[i]}, `;
                break;
            }
        }
    }
    layerOutput = layerOutput.substring(0, layerOutput.length - 2);
    return `Found in: ${layerOutput}`;
}
function formatEventMonths(arr) {
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthOutput = "";
    for (let i = 0; i < arr.length; i++) {
        monthOutput += `${monthNames[arr[i]]}, `
    }
    monthOutput = monthOutput.substring(0, monthOutput.length - 2);
    return `Found during: ${monthOutput}`;
}
function addIndexColors(element, blackOut, property) {
    let colors = oreInformation.getColors(oreList[property]["oreTier"]);
    if (playerInventory[property]["explosiveAmt"]) {
        element.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to bottom right, #c91800, #ff722b, #383838)"
    } else if (playerInventory[property]["radioactiveAmt"]) {
        element.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to bottom right, #062404, #c9fc3a, #062404)"
    } else if (playerInventory[property]["electrifiedAmt"]) {
        element.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to bottom right, #f7f368, #ffc629, #e365fc)"
    } else if (playerInventory[property]["normalAmt"]) {
        element.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to top right, #6BC267 20%, black, #6BC267 80%)"
    } else {
        element.style.backgroundImage = "linear-gradient(to bottom right, black 5%, " + colors["backgroundColor"] + " 30%, 70%, black 95%), linear-gradient(to top right, #FF3D3D 20%, black, #FF3D3D 80%)"
    }
    //Add Tier Gradient
    if (blackOut) element.style.backgroundImage = "linear-gradient(to bottom right, black 5%, #383838 30%, 70%, black 95%), linear-gradient(to top right, #FF3D3D 20%, black, #FF3D3D 80%)"
    return element
}
let isPlacing = false;
function randomFunction(ore, cause, elem) {
    if (elem && elem.srcElement.classList.contains("inventoryElement4")) return;
    if (isPlacing) {
        mine[curY][curX + 1] = {ore: ore, variant:1, isPlaced: true};
        displayArea();
        return;
    }
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
                for (let i = 0; i < galacticaLayers.length; i++) {
                    if (layerList[galacticaLayers[i]].includes(ore)) {
                        layer = galacticaLayers[i];
                        world = 0.9;
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
    return (playerInventory[ore]["normalAmt"] || playerInventory[ore]["electrifiedAmt"] || playerInventory[ore]["radioactiveAmt"] || playerInventory[ore]["explosiveAmt"]);
}
function indexVariants(ore) { 
    let imageOutput = "";
    let isImage = false;
    if (oreList[ore]["hasImage"]) {
        imageOutput = `<span class="${playerInventory[ore]["normalAmt"] ? "" : "blackoutImage"}"><img src="${oreList[ore]["src"]}" class="indexImageVariant"></img></span>`
        isImage = true;
    }
    return "" + (isImage ? imageOutput : (playerInventory[ore]["normalAmt"] ? ore : (`<span class='indexBlackout'>${ore}</span>`))) + (playerInventory[ore]["electrifiedAmt"] ? "⚡️" : "<span class='indexBlackout'>⚡️</span>") + (playerInventory[ore]["radioactiveAmt"] ? "☢️" : "<span class='indexBlackout'>☢️</span>") + (playerInventory[ore]["explosiveAmt"] ? "💥" : "<span class='indexBlackout'>💥</span>")
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
    if (allAudios[name].currentTime === 0) {
        closeMenu();
        playSound(name);
        element.style.backgroundColor = "#6BC267";
        allAudios[name].onended = (event) => {
            allAudios[name].onended = "";
            element.style.backgroundColor = "#FF3D3D";
            allAudios[name].pause();
            allAudios[name].currentTime = 0;
            clearTimeout(testSoundTimeout);
            get("blockContainer").style.animation = "";
            get("blockDisplay").style.animation = "";
        };
    } else {
        allAudios[name].onended = "";
        allAudios[name].pause();
        allAudios[name].currentTime = 0;
        element.style.backgroundColor = "#FF3D3D";
        clearTimeout(testSoundTimeout);
        get("blockContainer").style.animation = "";
        get("blockDisplay").style.animation = "";
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
    } else {
        player.settings.usingNewEmojis = true;
        document.body.style.fontFamily = `system-ui, Tahoma, Verdana, sans-serif, Noto Color Emoji`;
        document.getElementById("switchFont").style.backgroundColor = "#6BC267";
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
            totals[variantInvNames[j]] += playerInventory[ores[i]][variantInvNames[j]];
            amts += playerInventory[ores[i]][variantInvNames[j]];
        }
        completionAmt += amts > 0 ? 1 : 0;
    }
    let tableRowInfo = document.createElement("td");
    tableRowInfo.classList = "statsRow";
    tableRowInfo.innerText = currentTier;
    tableRow.appendChild(tableRowInfo);
    tableRowInfo = document.createElement("td");
    tableRowInfo.classList = "statsRow";
    const totalAmt = (totals["normalAmt"] + totals["electrifiedAmt"] + totals["radioactiveAmt"] + totals["explosiveAmt"])
    tableRowInfo.innerText = totalAmt > 1000000000 ? formatNumber(totalAmt, 3) : totalAmt.toLocaleString();
    tableRow.appendChild(tableRowInfo);
    for (let property in totals) {
        tableRowInfo = document.createElement("td");
        tableRowInfo.classList = "statsRow";
        tableRowInfo.innerText = totals[property] > 1000000000 ? formatNumber(totals[property], 3) : totals[property].toLocaleString();
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
    get("statsSessionReset").textContent = `${(player.stats.minesReset - player.startingResets).toLocaleString()} Session Resets.`
    get("statsReset").textContent = `${player.stats.minesReset.toLocaleString()} Total Resets.`
    get("furthestPosX").textContent = `${player.stats.furthestPosX - 1000000} Furthest X.`
    get("furthestNegX").textContent = `${player.stats.furthestNegX - 1000000} Furthest -X.`
    get("furthestY").textContent = `-${player.stats.furthestY} Furthest Y.`;
    get("sessionMined").textContent = `${formatNumber((player.stats.blocksMined-player.startingBlocks), 3)} Session Mined.`
    const total = player.avgSpeed;
    const speeds = calcSpeed();
    const output = `${Math.floor(total)} Average Speed/${Math.floor(1000/speeds.speed * speeds.reps) + speeds.extra} Estimated Speed`;
    document.getElementById("statsSpeed").textContent = output;
}
function calcAverageSpeed() {
    if (movementsX > 0) {
        const timeUsing = Date.now();
        const totalMoves = 1000 * (movementsX / (timeUsing - lastXCheck));
        movementsX = 0;
        lastXCheck = timeUsing;
        lastXValues.push(totalMoves);
        if (lastXValues.length > 10) lastXValues.splice(0, 1);
        let total = 0;
        for (let i = 0; i < lastXValues.length; i++) total += lastXValues[i];
        total /= lastXValues.length;
        return total;
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
function switchHighRarity(element) {
    const value = Number(element.value);
    if (!isNaN(value) && value > 0) {
        player.settings.minLogRarity = value;
        flashGreen(element);
    } else {
        flashRed(element)
    }
}
function setWebhookLink(element) {
    if (element.value !== "") {
        player.serverHook = element.value;
        flashGreen(element);
    } else {
        player.serverHook = undefined;
        flashGreen(element);
    }
}
function setWebhookName(element) {
    if (element.value !== "") {
        player.serverHookName = element.value;
        flashGreen(element);
    } else {
        flashRed(element);
    }
}
function createWebhookId(parent) {
    const children = parent.children;
    const webhookName = children[0].children[0].value;
    const rarityNum = Number(children[1].children[0].value);
    const idName = children[2].children[0].value;
    const webhookLink = children[3].children[0].value;
    if (isNaN(rarityNum) || webhookLink === undefined || idName === undefined || webhookName === undefined) return;
    if (player.webHook.ids[idName] !== undefined) {
        removeWebhookId(undefined, idName);
    }
    player.webHook.ids[idName] = {name: webhookName, rarity:rarityNum, link:webhookLink}
    parent.remove();
    addToCreated(idName);
}
function addToNew() {
    const element = get("newHookCopyable").cloneNode(true);
    element.id = "";
    if (get("customHookContainer").children.length < 2) {
        get("customHookContainer").appendChild(element);
    }
}
function addToCreated(id) {
    const element = get("createdHookCopyable").cloneNode(true);
    element.id = "";
    const children = element.children;
    children[0].textContent = player.webHook.ids[id].name;
    children[1].textContent = player.webHook.ids[id].rarity;
    children[2].textContent = id;
    get("createdWebhooks").appendChild(element);
}
function removeWebhookId(element, id) {
    let toRemove;
    if (id === undefined) {
        toRemove = element.children[2].textContent;
    }
    else toRemove = id;
    if (player.webHook.ids[toRemove] !== undefined) delete player.webHook.ids[toRemove];
    if (element === undefined) {
        const toSearch = get("createdWebhooks").children;
        for (let i = 0; i < toSearch.length; i++) {
            if ( i > 0 && toSearch[i].children[2].textContent === toRemove) {toSearch[i].remove(); break;}
        }
    } else {
        element.remove();
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
function showPortalRoom(state) {
    if (state) closeAllLocations();
    get("portalRoom").style.display = state ? "block" : "none";
}
function showVariantConversion(state) {
    if (state) closeAllLocations();
    document.getElementById("conversionContainer").style.display = state ? "block" : "none";
}
function showOreForge(state) {
    if (state) closeAllLocations();
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
    if (state) closeAllLocations();
    document.getElementById("workshopContainer").style.display = state ? "block" : "none";
    currentDisplayedUpgrade = undefined;
    updateDisplayedUpgrade();
}
function closeAllLocations() {
    showVariantConversion(false);
    showPortalRoom(false);
    showOreForge(false);
    showWorkshop(false)
}
const conversionRates = [5, 10, 30];
let hasConverted = false;
function convertVariants() {
    let ore = document.getElementById("oreInput").value;
    if (oreList[ore] === undefined) ore = ore.replaceAll(" ", "");
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
    if (playerInventory[obj["ore"]][name] >= obj["amt"]) {
        playerInventory[obj["ore"]][name] -= obj["amt"];
        playerInventory[obj["ore"]]["normalAmt"] += (obj["amt"] * amtToGive);
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
    removeTrackerInformation();
}
function toggleSimulatedRng(button) {
    if (player.settings.simulatedRng) {
        button.style.backgroundColor = "#FF3D3D";
        player.settings.simulatedRng = false;
    } else {
        button.style.backgroundColor = "#6BC267";
        player.settings.simulatedRng = true;
    }
    updateAllLayers();
}
function togglePlacement() {
    const placer = get("toggleOrePlacer");
    if (isPlacing) {
        placer.style.border = "0.1vw solid red";
        placer.style.boxShadow = "0px 0px 0.5vw red";
        isPlacing = false;
    } else {
        placer.style.border = "0.1vw solid green";
        placer.style.boxShadow = "0px 0px 0.5vw green";
        isPlacing = true;
    }
}
function goToConvert(ore, variant, event) {
    if (event.srcElement.classList.contains("inventoryElement4")) return;
    if (isPlacing) {
        mine[curY][curX + 1] = {ore: ore, variant:variant, isPlaced: true};
        displayArea();
        return;
    }
    showMenuScreen("locations");
    showVariantConversion(true);
    document.getElementById("oreInput").value = ore;
    document.getElementById("amtInput").value = playerInventory[ore][variantInvNames[variant - 1]];
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
        const elecAmt = playerInventory[ore]["electrifiedAmt"] - 1;
        const radiAmt = playerInventory[ore]["radioactiveAmt"] - 1;
        const explAmt = playerInventory[ore]["explosiveAmt"] - 1;
        const uses = [false, false, false];
        const amts = [elecAmt, radiAmt, explAmt]
        if (elecAmt > 0) uses[0] = true;
        if (radiAmt > 0) uses[1] = true;
        if (explAmt > 0) uses[2] = true;
        for (let i = 1; i < 4; i++) {
            if (uses[i - 1]) {
                playerInventory[ore][variantInvNames[i]] -= amts[i - 1];
                playerInventory[ore]["normalAmt"] += (amts[i - 1] * conversionRates[i - 1])
            }
        }
        inventoryObj[ore] = 0;
    } else return;
}
function toggleStopRareList() {
const element = get("stopOnRareList");
const editingButton = get("stopOnRareDisplay")
if (element.style.display === "none") {
    element.style.display = "inline-flex"; 
    editingButton.textContent = "Hide Tiers"; 
    editingButton.style.borderTopRightRadius = '0px'
    editingButton.style.borderBottomRightRadius = '0px'
}
  else {
    element.style.display = "none"; 
    editingButton.textContent = "Show Tiers"; 
        editingButton.style.borderTopRightRadius = '20px';
    editingButton.style.borderBottomRightRadius = '20px';
  }
}
function allowList(tier) {
    const currentList = player.settings.stopOnRare.allowList;
    let removing = false;
    for (let i = 0; i < currentList.length; i++) if (currentList[i] === tier) {removing = true; break;}
    if (removing) player.settings.stopOnRare.allowList.splice(currentList.indexOf(tier), 1);
    else (player.settings.stopOnRare.allowList.push(tier));
    const elementsToSearch = document.getElementsByClassName("stopOnRareTier");
    for (let i = 0; i < elementsToSearch.length; i++) if (elementsToSearch[i].textContent === tier) elementsToSearch[i].style.color = (removing ? "#FF3D3D" : "#6BC267");
}
function toggleSpawnMessageList() {
    const element = get("spawnTierList");
    const editingButton = get("changeSMrarityDisplay")
    if (element.style.display === "none") {
        element.style.display = "inline-flex"; 
        editingButton.textContent = "Hide Spawn Message Tiers"; 
    }
      else {
        element.style.display = "none"; 
        editingButton.textContent = "Show Spawn Message Tiers"; 
            editingButton.style.borderTopRightRadius = '20px'
        editingButton.style.borderBottomRightRadius = '20px'
      }
    }
function allowMessage(tier) {
    const currentList = player.settings.spawnMessageTiers;
    let removing = false;
    for (let i = 0; i < currentList.length; i++) if (currentList[i] === tier) {removing = true; break;}
    if (removing) player.settings.spawnMessageTiers.splice(currentList.indexOf(tier), 1);
    else (player.settings.spawnMessageTiers.push(tier));
    const elementsToSearch = document.getElementsByClassName("spawnMessageTier");
    for (let i = 0; i < elementsToSearch.length; i++) if (elementsToSearch[i].textContent === tier) elementsToSearch[i].style.color = (removing ? "#FF3D3D" : "#6BC267");
}
const portalLocations = {
    "worldOne" : {position: 0, name: "World One", goesTo: 1, hue: "0deg"},
    "worldTwo" : {position: 1, name: "World Two", goesTo: 2, hue: "-40deg"},
    "trophyRoom" : {position: 2, name: "Trophy Room", goesTo: 0, hue: "150deg"},
    "galactica" : {position: 3, name: "Galactica", goesTo: 0.9, hue: "190deg"},
    "subrealmOne" : {position: 4, name: "Subrealm One", goesTo: 1.1, hue: "40deg"}
}
let currentPortalShown = 0;
function getNextPortalPosition(num) {
    currentPortalShown += num;
    const portals = Object.keys(portalLocations);
    if (currentPortalShown > portals.length - 1) currentPortalShown = 0;
    else if (currentPortalShown < 0) currentPortalShown = portals.length - 1;
    const portalAtLocation = portalLocations[getPortalByNum(currentPortalShown)];
    get("portal").setAttribute("onclick", `attemptSwitchWorld(${portalAtLocation.goesTo})`);
    get("portal").style.filter = isUnlocked(portalAtLocation) ? `hue-rotate(${portalAtLocation.hue})` : "grayscale(1)";
    if (!isUnlocked(portalAtLocation)) {
        get("portalLockReason").style.display = "flex";
        get ("portalLockText").textContent = getWorldRequirements(portalAtLocation.goesTo);
    } else get("portalLockReason").style.display = "none";
    get("portalName").textContent = portalAtLocation.name;
    const leftPortal = portalLocations[getPortalByNum(currentPortalShown-1)];
    get("leftPortalName").textContent = leftPortal.name;
    get("leftPortal").style.filter = isUnlocked(leftPortal) ? `hue-rotate(${leftPortal.hue})` : "grayscale(1)";
    const rightPortal = portalLocations[getPortalByNum(currentPortalShown+1)];
    get("rightPortalName").textContent = rightPortal.name;
    get("rightPortal").style.filter = isUnlocked(rightPortal) ? `hue-rotate(${rightPortal.hue})` : "grayscale(1)";
}
function getPortalByNum(num) {
    const list = Object.keys(portalLocations);
    if (num < 0) num = list.length-1;
    if (num > list.length-1) num = 0;
    for (let portal in portalLocations) if (portalLocations[portal].position === num) return portal;
}
function isUnlocked(portal) {
    if (portal.goesTo === 1) return true;
    if (portal.goesTo === 1.1 && player.sr1Unlocked) return true;
    if (portal.goesTo === 2 && player.pickaxes["pickaxe13"]) return true;
    if (portal.goesTo === 0) return true;
    if (portal.goesTo === 0.9 && player.galacticaUnlocked) return true;
    return false;
}
function getWorldRequirements(world) {
    if (world === 2) return "Craft 'The Key' to Unlock!";
    if (world === 1.1) return "Mine 1 Flawless to Unlock!";
    if (world === 0.9) return "Find the true God of this world."
}
//SILLINESS BELOW!!!!!!!
function showCatText() {
    get("catStuff").style.display = "flex";
}
let curCatStep = 0;
function sillyKittyCat(text) {
    const catFaceOrder = [
        "ᓚᘏᗢ",
        "≽^•⩊•^≼",
        "ദ്ദി（• ˕ •マ.ᐟ",
        "ᓚ₍ ^. .^₎",
        "BALLIN CAT 43",
        "•⩊•",
        "/ᐠ｡‸｡ᐟ\\",
        "₊˚⊹♡ ᓚ₍ ^. .^₎",
        "⎛⎝ ≽  >  ⩊   < ≼ ⎠⎞",
        "ᨐᵉᵒʷ",
        "/ᐠ˵- ⩊ -˵マ",
        "I LOVE CATLAND CENTRAL",
        "◕⩊◕"
    ]
    if (text === catFaceOrder[curCatStep]) {
        get("catText").value = "";
        curCatStep++;
        new Audio("audios/meow-1.mp3").play();
        if (curCatStep === catFaceOrder.length) {
            typeWriter("WHY DO YOU KNOW SO MANY CAT EMOTICONS YOU FUCKING FURRY :SOB:", get("spawnMessage"));
            get("catStuff").style.display = "none";
            catstuff.layer = currentLayer;
            insertIntoLayers({ore: "Goober", layers:[currentLayer], "useLuck": true})
        }
    } else {
        new Audio("audios/meow-2.mp3").play();
        curCatStep = 0;
        get("catText").value = "";
        get("catStuff").style.display = "none";
    }
}
function toggleHideCompleted() {
    if (player.settings.hideCompleted) {
        player.settings.hideCompleted = false;
        get("hideCompleted").style.backgroundColor = "#FF3D3D";
    } else {
        player.settings.hideCompleted = true;
        get("hideCompleted").style.backgroundColor = "#6BC267";
    }
}
