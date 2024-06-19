class playerTemplate {
    constructor() {
        this.gears = {
            "gear0": false, 
            "gear1": false,
            "gear2": false,
            "gear3": false,
            "gear4": false,
            "gear5": false,
            "gear6": false,
            "gear7": false,
            "gear8": false,
            "gear9": false,
            "gear10": false,
            "gear11": false,
            "gear12": false,
            "gear13": false,
            "gear14": false,
            "gear15": false,
            "gear16": false,
            "gear17": false,
            "gear18": false,
            "gear19": false,
            "gear20": false,
            "gear21": false,
            "gear22": false,
            "gear23": false,
            "gear24": false,
            "gear25": false,
            "gear26": false,
            "gear27": false,
            //"gear28": false,
        }
        this.pickaxes = {
            "pickaxe0": true,
            "pickaxe1": false,
            "pickaxe2": false,
            "pickaxe3": false,
            "pickaxe4": false,
            "pickaxe5": false,
            "pickaxe6": false,
            "pickaxe7": false,
            "pickaxe8": false,
            "pickaxe9": false,
            "pickaxe10": false,
            "pickaxe11": false,
            "pickaxe12": false,
            "pickaxe13": false,
            "pickaxe14": false,
            "pickaxe15": false,
            "pickaxe16": false,
            "pickaxe17": false,
            "pickaxe18": false,
            "pickaxe19": false,
            "pickaxe20": false,
            "pickaxe21": false,
            "pickaxe22": false,
            "pickaxe23": false,
            "pickaxe24": false,
            "pickaxe25": false,
            "pickaxe26": false,
            "pickaxe28" : false,
        }
        this.settings = {
            audioSettings: {
                "Antique": {canPlay: true, volume: 50},
                "Mystical": {canPlay: true, volume: 50},
                "Divine": {canPlay: true, volume: 50},
                "Flawless": {canPlay: true, volume: 50},
                "Interstellar": {canPlay: true, volume: 50},
                "Metaversal": {canPlay: true, volume: 50},
                "Sacred": {canPlay: true, volume: 50},
                "Ethereal": {canPlay: true, volume: 15},
                "Celestial": {canPlay: true, volume: 50},
                "Imaginary": {canPlay: true, volume: 50},
            },
            musicSettings: {
                active: true,
                volume: 50
            },
            baseMineCapacity: 250000,
            minSpeed: 0,
            stopOnRare: {active: true, allowList: ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary"]},
            canDisplay: true,
            useNumbers: false,
            inventorySettings: {invToIndex: true, craftingToIndex: true},
            usePathBlocks: true,
            cavesEnabled: true,
            useDisguisedChills: false,
            usingNewEmojis: false,
            minRarityNum: 0,
            highRarityLogs: false,
            doSpawnEffects: true,
            latestLength: 10,
            useNewMusic: true,
            automineProtection: false,
            useNyerd: false,
            automineUpdate: 25,
            spawnMessageTiers: ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary"],
            lastWorld: 1
        },
        this.stats = {
            currentPickaxe: 0,
            blocksMined: 0,
            timePlayed: 0,
            cavesGenerated: 0,
            minesReset: 0,
            furthestPosX: 1000000000,
            furthestNegX: 1000000000,
            furthestY: 0
        },
        this.powerupCooldowns = {
            "powerup1": {cooldown: Date.now(), unlocked: false},
            "powerup2": {cooldown: Date.now(), unlocked: false},
            "powerup3": {cooldown: Date.now(), unlocked: false},
            "powerup4": {cooldown: Date.now(), unlocked: false},
            "powerup5": {cooldown: Date.now(), unlocked: false},
        },
        this.powerupVariables = {
            currentChosenOre : {ore: undefined, removeAt: Date.now, lastOre: undefined},
            commonsAffected : {state: false, removeAt: Date.now()},
            currentPowerupDisplayed : "powerup1",
            fakeEquipped: {originalState: undefined, item: undefined, removeAt: Date.now()},
            nextAuto: Date.now(),
            autoNum: 1,
        },
        this.oreTracker = {
            existingOres : [],
            tracking : false,
            locationX : 0,
            locationY : 0
        },
        this.currentEffect = "";
        this.upgrades = {
            "pickaxe27" : {
                level: 0,
                maxLevel: 5,
                bought: 0,
                levelLuck: [1, 3, 10, 20, 40, 100]
            }
        },
        this.wasUsing = undefined;
        this.sr1Unlocked = false;
        this.faqOffered = false;
        this.webHook = {
            active: false,
            ids : {

            },
            link: "",
        }
        this.luna = {
            layer: Math.round(Math.random() * 100000),
            lastAddedOn: new Date().getDate()
        }
        this.viewedMessages = {}
        this.avgSpeed = 0;
    }
}
let player = new playerTemplate();
const powerupOrder = ["powerup1", "powerup2", "powerup3", "powerup4", "powerup5"];
const powerupList = {
    "powerup1" : {
        title: "Terrestrial Terror",
        description: "Mines a large area around the player. Has a cooldown of 15 minutes.",
        cooldown: 900000,
        colors: {
            background: "linear-gradient(to bottom, #00ffff, #ff00ff, #ffff00)",
            text: "black",
            buttonUp: {background: "#00ffff", text: "black"},
            buttonDown: {background: "#ffff00", text: "black"},
        },
        //these store the requirements for each powerup to be unlocked, use eval() on the property and put them into the lock area
        requirement: "(player.stats.blocksMined >= 500000)",
        condition1: "player.stats.blocksMined",
        condition2: "/500,000 Blocks Mined."
    },
    "powerup2" : {
        title: "The Spelunker",
        description: "Generates a few caves around the player. Has a cooldown of 5 minutes.",
        cooldown: 300000,
        colors: {
            background: "linear-gradient(to bottom, #F5533D, #6B331D, #696969, #0A0DC7)",
            text: "white",
            buttonUp: {background: "#F5533D", text: "black"},
            buttonDown: {background: "#0A0DC7", text: "white"},
        },
        requirement: "(player.stats.cavesGenerated >= 250)",
        condition1: "player.stats.cavesGenerated",
        condition2: "/250 Caves Generated."
    },
    "powerup3" : {
        title: "Illogical Randomiser",
        description: "Makes a random, Mystical+ ore more common for a short duration. Has a cooldown of 50 minutes.",
        cooldown: 3000000,
        colors: {
            background: "linear-gradient(to bottom, #f00e1d, #ff8178, #ebebeb, #ff8178, #f00e1d)",
            text: "black",
            buttonUp: {background: "#f00e1d", text: "black"},
            buttonDown: {background: "#f00e1d", text: "black"},
        },
        requirement: "(player.stats.timePlayed >= 10800000)",
        condition1: "msToTime(player.stats.timePlayed)",
        condition2: "/3 Hours Played.",
        oreAffected: "",
    },
    "powerup4" : {
        title: "Re-repurposed Replicator",
        description: "Makes commons affected by up to 3.5x luck for a short duration. Has a cooldown of 20 minutes.",
        cooldown: 1200000,
        colors: {
            background: "linear-gradient(to bottom, #FF0B0B, #FFEB00, #7AFF1F)",
            text: "black",
            buttonUp: {background: "#FF0B0B", text: "black"},
            buttonDown: {background: "#7AFF1F", text: "black"},
        },
        requirement: "(oreList['⏏️']['normalAmt'] >= 50)",
        condition1: "oreList['⏏️']['normalAmt'].toLocaleString()",
        condition2: "/50 ⏏️ Owned"
    },
    "powerup5" : {
        title: "Paradoxical Progression",
        description: "Gives you a random unowned pickaxe or gear for 1 minute. Has a cooldown of 1 hour.",
        cooldown: 3600000,
        colors: {
            background: "linear-gradient(to bottom, darkgray, #37085A, #76734E, #116666, #58340B, #04370A, #3B0505, #740A32, #451676, darkgray)",
            text: "white",
            buttonUp: {background: "darkgray", text: "white"},
            buttonDown: {background: "darkgray", text: "white"},
        },
        requirement: `(countFlawlessOres() >= 400)`,
        condition1: "(countFlawlessOres())",
        condition2: "/400 Flawless Ores Owned."
    },
}
function switchPowerupDisplay(num) {
    let currentNum = powerupOrder.indexOf(player.powerupVariables.currentPowerupDisplayed);
    currentNum += num;
    if (currentNum < 0) currentNum = (powerupOrder.length - 1)
    else if (currentNum > powerupOrder.length - 1) currentNum = 0;
    player.powerupVariables.currentPowerupDisplayed = powerupOrder[currentNum];
    let powerup = powerupList[player.powerupVariables.currentPowerupDisplayed];
    document.getElementById("powerupTitle").innerText = powerup.title;
    document.getElementById("powerupTitle").style.color = powerup.colors.text;
    document.getElementById("powerupDescription").innerText = powerup.description;
    document.getElementById("powerupDescription").style.color = powerup.colors.text;
    document.getElementById("powerupCooldown").innerText = `Cooldown: ${msToTime(powerup.cooldown)}`;
    document.getElementById("powerupCooldown").style.color = powerup.colors.text;
    document.getElementById("powerupActive").style.color = powerup.colors.text;
    document.getElementById("powerupScrollUp").style.backgroundColor = powerup.colors.buttonUp.background;
    document.getElementById("powerupScrollUp").style.color = powerup.colors.buttonUp.text;
    document.getElementById("powerupScrollDown").style.backgroundColor = powerup.colors.buttonDown.background;
    document.getElementById("powerupScrollDown").style.color = powerup.colors.buttonDown.text;
    document.getElementById("powerupExtraInfo").style.color = powerup.colors.text;
    let parent = document.getElementById("powerupContainer");
    parent.style.backgroundImage = powerup.colors.background;
    let children = parent.children;
    if (children.length > 5) document.getElementById("powerupContainer").removeChild(children[children.length - 1]);
    let child = document.getElementById(`${player.powerupVariables.currentPowerupDisplayed}`).cloneNode(true);
    child.style.display = "flex";
    document.getElementById("powerupContainer").appendChild(child);
    document.getElementById("powerupExtraInfo").innerText = "";
    updatePowerupCooldowns();
    checkPowerupCooldowns();
    if (player.powerupCooldowns[player.powerupVariables.currentPowerupDisplayed].unlocked || eval(powerup.requirement)) {
        document.getElementById("powerupLock").style.display = "none";
        player.powerupCooldowns[player.powerupVariables.currentPowerupDisplayed].unlocked = true;
    } else {
        document.getElementById("powerupLock").style.display = "inline-flex";
        document.getElementById("powerupRequirement").innerText = `${eval(powerup.condition1).toLocaleString()}${powerupList[player.powerupVariables.currentPowerupDisplayed].condition2}`
    }
}
function msToTime(milliseconds) {
    if (milliseconds < 0) milliseconds = 0;
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":");
}
function updatePowerupCooldowns() {
    let num = player.powerupCooldowns[player.powerupVariables.currentPowerupDisplayed].cooldown - Date.now();
    num = num < 0 ? 0 : num;
    document.getElementById("powerupCooldown").innerText = `Cooldown: ${msToTime(num)}`;
    if (player.powerupVariables.currentPowerupDisplayed === "powerup3" && player.powerupVariables.currentChosenOre.ore !== undefined) document.getElementById("powerupActive").innerText = `Active for: ${msToTime(player.powerupVariables.currentChosenOre.removeAt - Date.now())}`;
    else if (player.powerupVariables.currentPowerupDisplayed === "powerup4" && player.powerupVariables.commonsAffected.state) document.getElementById("powerupActive").innerText = `Active for: ${msToTime(player.powerupVariables.commonsAffected.removeAt - Date.now())}`;
    else if (player.powerupVariables.currentPowerupDisplayed === "powerup5" && player.powerupVariables.fakeEquipped.item !== undefined) document.getElementById("powerupActive").innerText = `Active for: ${msToTime(player.powerupVariables.fakeEquipped.removeAt - Date.now())}`;
    else document.getElementById("powerupActive").innerText = `Active for: 00:00:00`;
    if (!player.powerupCooldowns[player.powerupVariables.currentPowerupDisplayed].unlocked) {
        if (eval(powerupList[player.powerupVariables.currentPowerupDisplayed].requirement)) {
            player.powerupCooldowns[player.powerupVariables.currentPowerupDisplayed].unlocked = true;
            document.getElementById("powerupLock").style.display = "none";
        } else {
            document.getElementById("powerupLock").style.display = "inline-flex";
            document.getElementById("powerupRequirement").innerText = `${eval(powerupList[player.powerupVariables.currentPowerupDisplayed].condition1).toLocaleString()}${powerupList[player.powerupVariables.currentPowerupDisplayed].condition2}`
        }
    }
    if (player.powerupVariables.currentPowerupDisplayed === "powerup3") {
        const element = document.getElementById("powerupExtraInfo");
        if (player.powerupVariables.currentChosenOre.ore !== undefined) {
            const ore = player.powerupVariables.currentChosenOre.ore;
            let blockOutput;
            if (oreList[ore]["hasImage"]) {
                blockOutput = `<span class="trackerImage"><img src="${oreList[ore]["src"]}"></img></span>`
            } else {
                blockOutput = ore;
            }
            element.innerHTML = `<span onclick="randomFunction('${ore}', 'inv')">1.5x to ${blockOutput}</span>`; 
            element.style.display = "block";
        }
        else {element.style.display = "none"; element.innerText = ""}
    }
}
function checkPowerupCooldowns() {
    for (let propertyName in player.powerupCooldowns) {
        if (Date.now() >= player.powerupCooldowns[propertyName].cooldown) {
            document.getElementById(`${propertyName}`).style.backgroundColor = "#6BC267";
        } else {
            document.getElementById(`${propertyName}`).style.backgroundColor = "#FF3D3D";
        }
    }
}
function toggleSpecificPowerup(num) {
    const current = Number(player.powerupVariables.currentPowerupDisplayed.substring(7));
    if (document.getElementById("menuSelectionContainer").style.display !== "block") switchPowerupDisplay(num - current)
}
function autoPowerups() {
    if (Date.now() >= player.powerupVariables.nextAuto) {
        toggleSpecificPowerup(player.powerupVariables.autoNum);
        if (player.powerupCooldowns[`powerup${player.powerupVariables.autoNum}`].unlocked)
            document.getElementById(`${player.powerupVariables.currentPowerupDisplayed}`).click();
        player.powerupVariables.autoNum++;
        if (player.powerupCooldowns[`powerup${player.powerupVariables.autoNum}`] === undefined) player.powerupVariables.autoNum = 1;
        player.powerupVariables.nextAuto = Date.now() + 20000;
    }
}
function countFlawlessOres() {
    const ores = oreInformation.getOresByTier("Flawless");
    let count = 0;
    for (let i = 0; i < ores.length; i++) count += oreList[ores[i]]["normalAmt"], count += oreList[ores[i]]["electrifiedAmt"], count += oreList[ores[i]]["radioactiveAmt"], count += oreList[ores[i]]["explosiveAmt"];
    return count;
}

function oldDataToNew(data) {
    console.log("transfered old");
    let newData = {blocks: {}, player: new playerTemplate()};
    for (let i = 0; i < data[0].length; i++) {
        newData.blocks[data[0][i][0]] = {
            n : data[0][i][1][0][0],
            l : data[0][i][1][0][1],
            r : data[0][i][1][0][2],
            e : data[0][i][1][0][3]
        }
    }
    if (data[1] !== undefined) {
        let i = 0;
        for (let propertyName in newData.player.pickaxes) {
            if (data[1][0][0][i] !== undefined) newData.player.pickaxes[propertyName] = data[1][0][0][i][1];
            i++;
        }
        newData.player.stats.currentPickaxe = data[1][0][1];
    }
    while (Array.isArray(data[2])) data[2] = data[2][0];
        newData.player.stats.blocksMined = data[2];
    if (data[4] !== undefined) {
        let i = 0;
        for (let propertyName in newData.player.gears) {
            if (data[4][0][i] !== undefined) newData.player.gears[propertyName] = data[4][0][i];
            i++;
        }
    }
    if (data[3] !== undefined) {
        if (data[3][0] != undefined) {
            let i = 0;
            for (let propertyName in newData.player.settings.audioSettings) {
                newData.player.settings.audioSettings[propertyName].canPlay = data[3][0][i];
                newData.player.settings.audioSettings[propertyName].volume = data[3][1][i];
                i++;
            }
        }
        if (data[3][2] != undefined) {
            newData.player.settings.musicSettings.active = !data[3][2];
        }
        if (data[3][3] != undefined) {
            newData.player.settings.musicSettings.volume = data[3][3];
        }
        if (data[3][4] != undefined) {
            newData.player.settings.baseMineCapacity = data[3][4];    
        }
        if (data[3][5] != undefined) {
            newData.player.settings.minSpeed = data[3][5];
        }
        if (data[3][6] != undefined) {
            newData.player.settings.stopOnRare.active = data[3][6];
        }
        if (data[3][7] != undefined) {
            newData.player.settings.stopOnRare.minimum = oreInformation.getTierAt(data[3][7] + 5);
        }
        if (data[3][8] != undefined) {
            newData.player.settings.canDisplay = data[3][8];
        }
        if (data[3][9] != undefined) {
            newData.player.settings.useNumbers = data[3][9];
        }
        if (data[3][10] != undefined) {
            newData.player.settings.inventorySettings.craftingToIndex = data[3][10];
        }
        if (data[3][11] != undefined) {
            newData.player.settings.inventorySettings.invToIndex = data[3][11];
        }
        if (data[3][16] != undefined) {
            newData.player.settings.usePathBlocks = data[3][16];
        }
        if (data[3][17] != undefined) {
            newData.player.settings.cavesEnabled = data[3][17];
        }
        if (data[3][18] != undefined) {
            newData.player.settings.useDisguisedChills = data[3][18]
        }
        if (data[3][19] != undefined) {
            newData.player.settings.usingNewEmojis = data[3][19];
        }
        if (data[3][20] != undefined) {
            newData.player.settings.minRarityNum = data[3][20];
        }
    }
    return newData;
}

function loadNewData(data) {
    try {
        for (let propertyName in data.blocks) {
            if (oreList[propertyName] !== undefined) {
                if (data.blocks[propertyName].normalAmt !== undefined) {
                    oreList[propertyName]["normalAmt"] = data.blocks[propertyName].normalAmt;
                    oreList[propertyName]["electrifiedAmt"] = data.blocks[propertyName].electrifiedAmt;
                    oreList[propertyName]["radioactiveAmt"] = data.blocks[propertyName].radioactiveAmt;
                    oreList[propertyName]["explosiveAmt"] = data.blocks[propertyName].explosiveAmt;
                    inventoryObj[propertyName] = 0;
                } else if (data.blocks[propertyName].n !== undefined) {
                    oreList[propertyName]["normalAmt"] = data.blocks[propertyName].n;
                oreList[propertyName]["electrifiedAmt"] = data.blocks[propertyName].l;
                oreList[propertyName]["radioactiveAmt"] = data.blocks[propertyName].r;
                oreList[propertyName]["explosiveAmt"] = data.blocks[propertyName].e;
                inventoryObj[propertyName] = 0;
                }
                
            }
        }
        data = data.player;
        if (data.wasUsing !== undefined) {
            data.stats.currentPickaxe = data.wasUsing;
        }
        if (data.powerupVariables !== undefined && data.powerupVariables.fakeEquipped !== undefined && data.powerupVariables.fakeEquipped.item !== undefined) {
            let item = data.powerupVariables.fakeEquipped.item;
            if (player.gears[item] !== undefined) data.gears[item] = false;
            if (player.pickaxes[item] !== undefined) {
                data.pickaxes[item] = false;
                if (data.wasUsing === undefined) data.stats.currentPickaxe = data.powerupVariables.fakeEquipped.originalState;
            }
        }
        if (data.gears !== undefined && player.gears !== undefined) {
            for (let propertyName in data.gears) if (player.gears[propertyName] !== undefined) player.gears[propertyName] = data.gears[propertyName];
        }
        if (data.pickaxes !== undefined && player.pickaxes !== undefined) {
            for (let propertyName in data.pickaxes) if (player.pickaxes[propertyName] !== undefined) player.pickaxes[propertyName] = data.pickaxes[propertyName];
        }
        if (data.stats.currentPickaxe !== undefined) player.stats.currentPickaxe = data.stats.currentPickaxe;
        if (player.stats.currentPickaxe === 27) player.stats.currentPickaxe = 0;
        if (data.stats.blocksMined !== undefined) player.stats.blocksMined = data.stats.blocksMined;
        if (data.stats.cavesGenerated !== undefined) player.stats.cavesGenerated = data.stats.cavesGenerated;
        if (data.stats.timePlayed !== undefined) player.stats.timePlayed = data.stats.timePlayed;
        if (data.stats.minesReset !== undefined) player.stats.minesReset = data.stats.minesReset;
        player.startingResets = player.stats.minesReset;
        data.stats.furthestNegX ??= 1000000000;
        data.stats.furthestPosX ??= 1000000000;
        data.stats.furthestY ??= 0;
        player.stats.furthestNegX = data.stats.furthestNegX;
        player.stats.furthestPosX = data.stats.furthestPosX;
        player.stats.furthestY = data.stats.furthestY;
        document.getElementById("blocksMined").innerText = `${player.stats.blocksMined.toLocaleString()} Blocks Mined.`;
        if (data.settings.audioSettings !== undefined) {
            for (let propertyName in data.settings.audioSettings) {
                player.settings.audioSettings[propertyName].canPlay = data.settings.audioSettings[propertyName].canPlay;
                player.settings.audioSettings[propertyName].volume = data.settings.audioSettings[propertyName].volume;
                let text = document.getElementById(`mute${propertyName}`).innerText;
                text = text.substring(text.indexOf(" ") + 1);
                if (!(player.settings.audioSettings[propertyName].canPlay)) document.getElementById(`mute${propertyName}`).innerText = `Unmute ${text}`;
                let elements = document.getElementsByClassName("spawnVolume");
                for (let i = 0; i < elements.length; i++) {
                    if (String(elements[i].onchange).indexOf(propertyName) > -1) {
                        elements[i].value = player.settings.audioSettings[propertyName].volume;
                        changeSpawnVolume(elements[i].value, propertyName);
                    }
                }
            }
        }
        data.settings.baseMineCapacity ??= 250000;
        player.settings.baseMineCapacity = (data.settings.baseMineCapacity < 250 ? 250 : data.settings.baseMineCapacity);
        mineCapacity = player.settings.baseMineCapacity;
        mineCapacity = mineCapacity < 250 ? 250 : mineCapacity;
        document.getElementById("resetNumber").innerText = `0/${player.settings.baseMineCapacity.toLocaleString()} Blocks Revealed This Reset.`;
        data.settings.canDisplay ??= true;
        if (!data.settings.canDisplay) changeCanDisplay(document.getElementById("blockUpdates"));
        data.settings.cavesEnabled ??= true;
        if (!data.settings.cavesEnabled) toggleCaves(document.getElementById("caveToggle"));
        data.settings.inventorySettings ??= {invToIndex: true, craftingToIndex: true};
        if (!data.settings.inventorySettings.invToIndex) switchToIndex(document.getElementById("invIndex"), 0);
        if (!data.settings.inventorySettings.craftingToIndex) switchToIndex(document.getElementById("craftIndex"), 1);
        data.settings.spawnMessageTiers ??= ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary"];
        player.settings.spawnMessageTiers = data.settings.spawnMessageTiers;
        applySpawnMessageData();
        data.settings.automineUpdate ??= 25;
        player.settings.automineUpdate = data.settings.automineUpdate;
        data.settings.minSpeed ??= 0;
        player.settings.minSpeed = data.settings.minSpeed;
        data.settings.useNewMusic ??= true;
        if (!data.settings.useNewMusic) switchMusicType();
        player.settings.musicSettings.volume = data.settings.musicSettings.volume;
        document.getElementById("musicVolume").value = data.settings.musicSettings.volume;
        if (player.settings.useNewMusic) {changeNewMusicVolume(player.settings.musicSettings.volume); selectSong();}
        else {changeMusicVolume(player.settings.musicSettings.volume); keepRunning();}
        data.settings.musicSettings ??= {active: true, volume: 100};
        if (!data.settings.musicSettings.active) document.getElementById("musicButton").click();
        data.settings.stopOnRare ??= {active: true, allowList: []};
        data.settings.stopOnRare.allowList ??= ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary"];
        player.settings.stopOnRare.allowList = data.settings.stopOnRare.allowList;
        player.settings.stopOnRare.active = data.settings.stopOnRare.active;
        if (!player.settings.stopOnRare.active) document.getElementById("stopOnRare").style.backgroundColor = "#FF3D3D";
        applyStopOnRareData();
        data.settings.useDisguisedChills ??= false;
        if (data.settings.useDisguisedChills) enableDisguisedChills();
        data.settings.useNumbers ??= false;
        if (data.settings.useNumbers) changeUseNumbers(document.getElementById("useNumbers"));
        data.settings.usePathBlocks ??= true;
        if (!data.settings.usePathBlocks) togglePathBlocks();
        data.settings.usingNewEmojis ??= false;
        if (data.settings.usingNewEmojis) switchFont();
        data.settings.highRarityLogs ??= false;
        if (data.settings.highRarityLogs) switchHighRarity(document.getElementById("highRarity"));
        data.settings.doSpawnEffects ??= true;
        if (!data.settings.doSpawnEffects) toggleSpawnEffects(document.getElementById("spawnEffects"));
        data.settings.latestLength ??= 10;
        player.settings.latestLength = data.settings.latestLength;
        data.settings.automineProtection ??= false;
        data.settings.useNyerd ??= false;
        if (data.settings.useNyerd) toggleNyerd(document.getElementById("toggleNyerd"));
        if (data.settings.automineProtection) toggleAutomineProtection(document.getElementById("automineProtection"));
        data.settings.lastWorld ??= 1;
        player.settings.lastWorld = data.settings.lastWorld;
        if (data.powerupCooldowns !== undefined) {
            for (let property in data.powerupCooldowns) {
                if (data.powerupCooldowns[property] !== undefined && player.powerupCooldowns[property] !== undefined) {
                    if (data.powerupCooldowns[property].cooldown !== undefined)
                        player.powerupCooldowns[property].cooldown = data.powerupCooldowns[property].cooldown;
                    if (data.powerupCooldowns[property].unlocked !== undefined)
                        player.powerupCooldowns[property].unlocked = data.powerupCooldowns[property].unlocked;
                }
            }
        }
        if (data.upgrades !== undefined) {
            if (data.upgrades["pickaxe27"] !== undefined) {player.upgrades["pickaxe27"].level = data.upgrades["pickaxe27"].level; player.upgrades["pickaxe27"].bought = data.upgrades["pickaxe27"].bought}
        }
        data.sr1Unlocked ??= false;
        player.sr1Unlocked = data.sr1Unlocked;
        //unlock locked features
        if (player.gears["gear0"]) document.getElementById("trackerLock").style.display = "none";
        if (indexHasOre("🎂") || player.gears["gear9"]) document.getElementById("sillyRecipe").style.display = "block";
        if (data.webHook !== undefined) {
            if (data.webHook.active === true) {
                player.webHook.active = data.webHook.active;
                player.webHook.link = data.webHook.link;
                if (data.webHook.ids !== undefined) {
                    for (let id in data.webHook.ids) {
                        player.webHook.ids[id] = data.webHook.ids[id];
                    }
                }
            }
        }
        data.faqOffered ??= false;
        data.luna ??= {
            layer: Math.round(Math.random() * 100000),
            lastAddedOn: new Date().getDate()
        }
        
        if (new Date().getDate() !== data.luna.lastAddedOn) {
            player.luna.layer = Math.round(Math.random() * 100000);
            player.luna.lastAddedOn = new Date().getDate();
        } else {
            player.luna.layer = data.luna.layer;
            player.luna.lastAddedOn = data.luna.lastAddedOn;
        }
        switchWorld(player.settings.lastWorld, true)
        data.name ??= "Cat";
        player.name = data.name;
        data.viewedMessages ??= {};
        player.viewedMessages = data.viewedMessages;
        if (data.faqOffered) player.faqOffered = true;
        for (let message in dailyMessages) checkMessages(message);
        showNextInQueue();
    } catch (err) {
        window.alert(`DATA CORRUPTION DETECTED, CONTACT A MODERATOR IN THE DISCORD, ${err}, ${console.log(err)}`);
    }
}
function applyStopOnRareData() {
    const elementList = document.getElementsByClassName("stopOnRareTier");
    for (let i = 0; i < elementList.length; i++) {
        const tier = elementList[i].textContent;
        elementList[i].style.backgroundColor = oreInformation.getColors(tier)["backgroundColor"];
        if (stopIncluded(tier)) elementList[i].style.color = "#6BC267";
        else elementList[i].style.color = "#FF3D3D";
    }
}
function stopIncluded(tier) {
    const list = player.settings.stopOnRare.allowList;
    for (let i = 0; i < list.length; i++) if (tier === list[i]) return true;
    return false;
}
function applySpawnMessageData() {
    const elementList = document.getElementsByClassName("spawnMessageTier");
    for (let i = 0; i < elementList.length; i++) {
        const tier = elementList[i].textContent;
        elementList[i].style.backgroundColor = oreInformation.getColors(tier)["backgroundColor"];
        if (messageIncluded(tier)) elementList[i].style.color = "#6BC267";
        else elementList[i].style.color = "#FF3D3D";
    }
}
function messageIncluded(tier) {
    const list = player.settings.spawnMessageTiers;
    for (let i = 0; i < list.length; i++) if (tier === list[i]) return true;
    return false;
}
const dailyMessages = {
    "newPlayer" : {
        showUntil : "June 15, 9999",
    },
    "chooseName" : {
        showUntil : "June 15, 9999",
    },
    "portalUpdate" : {
        showUntil : "June 25, 2024",
    },
    "sr1Unlocked" : {
        showUntil : "June 25, 0000",
    }
}
function checkMessages(message) {
    if (message === "newPlayer" && player.faqOffered) return;
    if (dailyMessages[message] !== undefined) {
        const dateUsing = new Date();
        const dateChecking = new Date(dailyMessages[message].showUntil)
        if (dateUsing < dateChecking && !player.viewedMessages[message]) addMessageToQueue(message);
    }
}
const messageQueue = [];
let currentDisplayedMessage = {id: undefined, num: undefined};
function addMessageToQueue(messageId) {
    if (messageQueue.indexOf(messageId === -1)) messageQueue.push(messageId);
}
function showNextInQueue() {
    if (dailyMessages[currentDisplayedMessage.id] !== undefined) player.viewedMessages[currentDisplayedMessage.id] = true;
    currentDisplayedMessage.num ??= -1;
    currentDisplayedMessage.num++;
    if (currentDisplayedMessage.id !== undefined) get(`${currentDisplayedMessage.id}`).style.display = "none";
    currentDisplayedMessage.id = messageQueue[currentDisplayedMessage.num];
    if (currentDisplayedMessage.id === undefined) {get("dailyMessages").style.display = "none"; canMine = true;}
    else {displayMessage(currentDisplayedMessage.id); canMine = false;}
}
function displayMessage(id) {
    const elementsToRemove = document.getElementsByClassName("dailyMessage");
    for (let i = 0; i < elementsToRemove.length; i++) elementsToRemove[i].style.display = "none";
    get("dailyMessages").style.display = "block";
    get(`${id}`).style.display = "block";
}
function saveNewData(obj) {
    try {
        let data = {blocks: {}, player: player};
        for (let propertyName in oreList) {
            data.blocks[propertyName] = {
                n: oreList[propertyName]["normalAmt"],
                l: oreList[propertyName]["electrifiedAmt"],
                r: oreList[propertyName]["radioactiveAmt"],
                e: oreList[propertyName]["explosiveAmt"]
            };
        }
        if (obj.override !== undefined) data.player = obj.override;
        if (!debug) localStorage.setItem("newPlayerData", JSON.stringify(data));
        else localStorage.setItem("newTestingData", JSON.stringify(data));
        if (obj.return) return data;
    } catch (err) {
        console.log(err);
        window.alert(`DATA CORRUPTION DETECTED, CONTACT A MODERATOR IN THE DISCORD, ${err}`);
    }
}
