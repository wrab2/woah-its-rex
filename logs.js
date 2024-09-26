
const debug = (document.location.href.includes("W5EJ")) || (document.location.href.includes('http://127.0.0.1:5500/'));
const logCreated = {}
class secureLogs {
    #spawnLogs;
    #verifiedLogs;
    #logsTimer;
    #startTime = Date.now();
    #isRightPickaxe;
    #canGenCaves;
    #isLoaded;
    constructor() {
        if (logCreated["created"]) location.reload();
        this.#spawnLogs = [];
        this.#verifiedLogs = {
            "All" : [],
            "Cave" : [],
            "Normal" : [],
            "Electrified" : [],
            "Radioactive" : [],
            "Explosive" : [],
        };
        this.#logsTimer = null;
        this.#isRightPickaxe = true;
        this.#canGenCaves = false;
        this.#onLoad()
    }
    createLog(r, c, intended, obj, fromCave) {
        if (Math.random.toString().replace(/\n|\r| /g, "") !== "functionrandom(){[nativecode]}") {if (debug) window.alert(Math.random.toString().replace(/\n|\r| /g, "")); return;}
        const ore = intended.ore === undefined ? intended : intended.ore;
        const variant = intended.variant === undefined ? undefined : intended.variant;
        fromCave = fromCave === undefined ? [false, 1, "none"] : fromCave;
        let luck;
        if (fromCave[1] > 1) {
            luck = this.getCaveLuck();
        } else {
            luck = oreList[ore]["numRarity"] * oreList[ore]["decimalRarity"];
        }
        let rng;
        if (fromCave[1] > 1) {
            if (oolProbabilities[ore] !== undefined && fromCave[2] !== "abysstoneCave") {
                rng = oolProbabilities[ore];
            } else if (fromCave[2] === "abysstoneCave") {
                rng = gsProbabilities[caveList["abysstoneCave"].indexOf(ore)];
            } else {
                rng = 1/oreList[ore]["numRarity"];
            }
            rng /= fromCave[1];
            rng *= fromCave[3];
        } else {
            rng = oreList[ore]["decimalRarity"];
        }
        rng /= multis[variant - 1];
        if (((obj.stack.includes("mine.js") || obj.stack.includes("caves.js")))) {
            this.#spawnLogs.push({
                x: c,
                y: r, 
                block: ore, 
                luck: luck, 
                rng: rng,
                caveInfo: fromCave, 
                variant: variant, 
                avgSpeed: player.avgSpeed, 
                paradoxical: player.powerupVariables.fakeEquipped.item, 
                genAt: Date.now(),
                withPickaxe: recipes[player.stats.currentPickaxe].name,
                withEvent: (currentActiveEvent !== undefined ? events[currentActiveEvent.name].ore : "None"),
                world: currentWorld
            })
            Object.freeze(this.#spawnLogs[this.#spawnLogs.length - 1])
        } else {
            console.log("failed to create, ", obj.stack, luck);
            if (debug) window.alert(obj.stack, luck)
        }
    }
    verifyLog(r, c) {
        for (let i = 0; i < this.#spawnLogs.length; i++) {
            if (this.#spawnLogs[i].y === r && this.#spawnLogs[i].x === c) {
                const block = mine[r][c].ore === undefined ? mine[r][c] : mine[r][c].ore;
                if (block === this.#spawnLogs[i].block) {
                    const log = this.#clone(this.#spawnLogs[i]);
                    this.#verifiedLogs["All"].push({
                        y: r, 
                        x: c, 
                        block: log.block, 
                        genAt: log.genAt,
                        variant: log.variant, 
                        luck: log.luck, 
                        rng: log.rng,
                        caveInfo: log.caveInfo, 
                        avgSpeed: log.avgSpeed, 
                        paradoxical: log.paradoxical, 
                        world: log.world,
                        withPickaxe: log.withPickaxe,
                        withEvent: log.withEvent,
                        mined: false, 
                    })
                    Object.freeze(this.#verifiedLogs["All"][this.#verifiedLogs["All"].length - 1])
                    this.#spawnLogs.splice(i, 1);
                    break;
                } else {
                    console.log('failed to verify', r, c);
                }
            }
        }
    }
    verifyFind(block, r, c, variant, amt) {
        block = block.ore === undefined ? block : block.ore;
        let verified = false;
        for (let i = this.#verifiedLogs["All"].length - 1; i >= 0; i--) {
            if (this.#verifiedLogs["All"][i].y === r && this.#verifiedLogs["All"][i].x === c) {
                if (block === this.#verifiedLogs["All"][i].block) {
                    const log = this.#clone(this.#verifiedLogs["All"][i]);
                    log.amt = amt;
                    if (log.mined !== true) {
                        log.mined = true;
                        if (log.amt > 1) log.rng/=10;
                        if (log.variant === undefined) log.variant = variant;
                        if (Object.keys(player.webHook.ids).length > 0) webHook(log, player.stats.blocksMined);
                        if (log.rng < 1/5000000000 && player.serverHook !== undefined && !debug) serverWebhook(log, player.stats.blocksMined);
                        const webhookString = `${player.name} has found ${names[log.variant - 1]} ${log.block} ${log.amt > 1 ? `(x${log.amt}) ` : ""}with a rarity of 1/${Math.round(1/log.rng).toLocaleString()} ${log.caveInfo[0] ? (log.caveInfo[1] > 1 ? "(" + caveList[log.caveInfo[2]].slice(-1) + " Cave)" : "(Layer Cave)") : ""} at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(log.x - 1000000).toLocaleString()}, Y: ${(-1 * log.y).toLocaleString()}${(log.paradoxical === "pickaxe26" ? " " : "")}`;           
                        log.output = webhookString;
                        this.#verifiedLogs["All"][i] = log;
                        Object.freeze(log);
                        if (log.rng > 1/player.settings.minLogRarity) {
                            this.#verifiedLogs["All"].splice(i, 1);
                        } else {
                            if (log.caveInfo[0]) this.#verifiedLogs["Cave"].push(log);
                            if (log.variant === 1) this.#verifiedLogs["Normal"].push(log);
                            else if (log.variant === 2) this.#verifiedLogs["Electrified"].push(log);
                            else if (log.variant === 3) this.#verifiedLogs["Radioactive"].push(log);
                            else if (log.variant === 4) this.#verifiedLogs["Explosive"].push(log);
                        }
                        verified = true;
                        break;
                    }
                } else {
                    console.log("failed to verify find", block, this.#verifiedLogs["All"][i].luck);
                }
            }
        }
        if (!verified) {
            console.log("log not found, failed to verify if found, block mined", block, r, c)
        }
    }
    createBulkLog(log) {
        log.x = "Err";
        log.y = `${-1*curY}?`;
        log.withEvent ??= "None";
        const curCaveLuck = this.getCaveLuck();
        if (log.caveInfo !== undefined) {
            const oldInfo = log.caveInfo;
            log.caveInfo = [true, getCaveMulti(oldInfo.type), oldInfo.type, curCaveLuck];
            log.luck = curCaveLuck;
        }
        log.caveInfo ??= [false, 1, "none", curCaveLuck];
        log.output = `${player.name} has found ${names[log.variant - 1]} ${log.block} ${log.amt > 1 ? `(x${log.amt}) ` : ""}with a rarity of 1/${Math.round(1/log.rng).toLocaleString()} ${log.caveInfo[0] ? "(" + caveList[log.caveInfo[2]].slice(-1) + " Cave)" : ""} at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(log.x)}, Y: ${(log.y).toLocaleString()}`;           
        log.from = (log.from.stack.indexOf("mine.js") > -1);
        Object.freeze(log);
        this.#verifiedLogs["All"].push(log);
        if (log.caveInfo[0]) this.#verifiedLogs["Cave"].push(log);
        if (log.variant === 1) this.#verifiedLogs["Normal"].push(log);
        else if (log.variant === 2) this.#verifiedLogs["Electrified"].push(log);
        else if (log.variant === 3) this.#verifiedLogs["Radioactive"].push(log);
        else if (log.variant === 4) this.#verifiedLogs["Explosive"].push(log);
        if (log.rng <= 1/5000000000 && player.serverHook !== undefined && !debug) serverWebhook(log, player.stats.blocksMined);
        if (Object.keys(player.webHook.ids).length > 0) webHook(log, player.stats.blocksMined);
    }
    showLogs() {
        if (document.getElementById("menuSelectionContainer").style.display !== "none") {
                this.#clearLogs()
                let element = document.createElement("p");
                if (document.getElementById("generatedLogs") !== null)
                    document.getElementById("generatedLogs").remove();
                element.id = "generatedLogs";
                document.getElementById("logHolder").appendChild(element);
                let output = "";
                const list = this.#verifiedLogs[document.getElementById("logSort").value];
                for (let i = 0; i < list.length; i++) {
                    if (list[i].output === undefined) {
                        output += `<span  style="color:${variantInformation[names[list[i].variant - 1]].color};">${player.name} has NOT found ${names[list[i].variant - 1]} ${list[i].block} (Voided).</span> Verification: `
                    } else {
                        output += `<span  style="color:${variantInformation[names[list[i].variant - 1]].color};">${list[i].output}.</span> Verification: `;
                    }
                    let times;
                    
                    if (list[i - 1] !== undefined) times = list[i].genAt - list[i - 1].genAt;
                    else times = list[i].genAt;
                    if (times === 0) times = 1;
                    output += `<span><span style="font-size:0vw;">${encryptLogData(list[i], times)}</span><span onclick="copyText(this.parentElement.children[0]); copiedLog(this);" oncontextmenu="saveLogToStorage(decryptLogData(this.parentElement.children[0].textContent)); return false;">Left Click Me To Copy Verification | Right Click Me To Save Me</span></span><br>`
                }
                if (document.getElementById("generatedLogs") !== undefined) document.getElementById("generatedLogs").innerHTML = output;
        } else {
            this.#clearLogs();
        }
    }
    filterByRarity(num) {
        let rarity = Number(num);
        if (rarity < 1 || isNaN(rarity)) return;
        rarity = Math.floor(rarity);
        const list = this.#verifiedLogs;
        for (let subList in list) {
            for (let i = list[subList].length - 1; i >= 0; i--) {
                const log = list[subList][i];
                if (log.rng > 1/rarity) {
                    list[subList].splice(i, 1);
                }
            }
        }
        this.#clearLogs();
        this.showLogs();
    }
    #clone(obj){
        if(obj == null || typeof(obj) != 'object')
           return obj;
     
        var temp = obj.constructor();
     
        for(var key in obj)
            temp[key] = this.#clone(obj[key]);
        return temp;
    }
    #clearLogs() {
        clearInterval(this.#logsTimer);
        this.#logsTimer = null;
        if (document.getElementById("generatedLogs") !== null)
            document.getElementById("generatedLogs").remove();
    }
    getCurrentLuck() {
        let baseLuck = this.getBaseLuck(player.stats.currentPickaxe);
        baseLuck += player.gears["gear30"] ? 0.3 : 0;
        baseLuck += getRewardTypes("luck", "add");
        baseLuck *= getRewardTypes("luck", "multiply");
        if (player.gears["gear40"]) baseLuck *= 1.5;
        let luck = baseLuck;
        if (currentWorld === 1.1) {
            if (player.gears["gear20"]) luck *= ((baseLuck * 0.05) + 1);
            if (player.gears["gear37"]) luck = luck ** 1.035;
            luck *= 1.2;
            if (randBuff.luck) luck *= 1.4;
            if (isNaN(luck)) return 1;
            else return luck;
        }
        if (player.stats.currentPickaxe === "pickaxe27" && !player.trophyProgress["subrealmOneCompletion"].trophyOwned) {player.stats.currentPickaxe = "pickaxe0"; baseLuck = 1;}
        luck += (player.gears["gear18"] ? 2.5 : 0) + (player.gears["gear12"] ? 0.35 : 0) + (player.gears["gear10"] ? 0.25 : 0);
        if (currentWorld < 2) luck *= (player.gears["gear1"] ? 1.1 : 1) * (player.gears["gear5"] ? 1.6 : 1);
        if (player.gears["gear20"]) luck *= (baseLuck * 0.05) + 1;
        if (player.gears["gear37"]) luck = luck ** 1.035;
        luck *= 1.2;
        if (randBuff.luck) luck *= 1.4;
        if (isNaN(luck)) return 1;
        else return luck;
    }
    getBaseLuck(pickaxe) {
        if (pickaxe === "pickaxe27") {
            const pickaxe = player.upgrades["pickaxe27"];
            return pickaxe.levelLuck[pickaxe.level];
        }
        return pickaxeStats[pickaxe].luck;
    }
    getStartTime() {
        return this.#startTime;
    }
    isRightPickaxe() {
        return this.#isRightPickaxe;
    }
    checkPickaxe() {
        if (!this.#isLoaded) this.#isRightPickaxe = false;
        if (pickaxeStats[player.stats.currentPickaxe].canMineIn.includes(currentWorld)) this.#isRightPickaxe = true;
        else this.#isRightPickaxe = false;
    }
    checkCaves() {
        const canSpawnNormally = pickaxeStats[player.stats.currentPickaxe].canSpawnCaves.includes(currentWorld);
        if (currentWorld < 2 && canSpawnNormally) this.#canGenCaves = true;
        else if (currentWorld === 2 && canSpawnNormally && player.gears["gear14"]) this.#canGenCaves = true;
        else this.#canGenCaves = false;
    }
    canGenerateCaves() {
        return this.#canGenCaves;
    }
    #onLoad() {

    }
    gameLoaded() {
        this.#isLoaded = true;
    }
    isLoaded() {
        return this.#isLoaded;
    }
    displaySavedLogs() {
        this.#clearLogs();
        let element = document.createElement("p");
        if (document.getElementById("generatedLogs") !== null)
            document.getElementById("generatedLogs").remove();
        element.id = "generatedLogs";
        document.getElementById("logHolder").appendChild(element);
        const toDisplay = JSON.parse(localStorage.getItem("SillyCavernsLogStorage"));
        let output = "";
        for (let log in toDisplay) {
            if (toDisplay[log].toDelete) {
                fullDeleteLog(log);
            } else {
                const data = decryptLogData(toDisplay[log]);
                output += `<span><span style="display:none;">${toDisplay[log]}</span>SAVED LOG ${namesemojis[data[2] - 1]}${data[0]}, 1/${Math.round(1/data[4]).toLocaleString()}: <span onclick="navigator.clipboard.writeText(this.parentElement.children[0].textContent); copiedLog(this);">Click me to copy verification!</span> | <span onclick="removeLogFromStorage('${log}', this); return false;">Click me to delete log!</span></span><br>`;
            }
        }
        if (document.getElementById("generatedLogs") !== null) document.getElementById("generatedLogs").innerHTML = output;
    }
    getCaveLuck() {
        let tempLuck = 1;
        if (player.powerupVariables.caveBoosts.active = true) tempLuck++;
        if (player.stats.currentPickaxe === "pickaxe33") tempLuck += 1.5;
        return tempLuck;
    }
    getCaveTypeLuck() {
        let tempLuck = 1;
        if (player.stats.currentPickaxe === "pickaxe12") tempLuck *= 2;
        if (player.stats.currentPickaxe === "pickaxe33") tempLuck *= 2.25;
        if (player.gears["gear27"]) tempLuck *= 1.75;
        return tempLuck;
    }
}
//i lost the original code for this so gl :3c
const ignoreProperties = ["output", "x", "y"]
function encryptLogData(log) {
    const newObj = {};
    let i = 0;
    for (let property in log) {
        if (ignoreProperties.indexOf(property) === -1) {newObj[i] = log[property]; i++;}
    }
    return toBinary(JSON.stringify(newObj));
}
function decryptLogData(log) {
    return JSON.parse(fromBinary(log));
}
function roundNumberToMillionth(num) {
    return Math.round(num * 1000000) / 1000000;
}
function webHook(log, mined) {
    const currentWebhook = getCurrentWebhookId(Math.floor(1/log.rng));
    if (!currentWebhook.valid) return;
    const webhookInfo = player.webHook.ids[currentWebhook.id];
    const webhookName = webhookInfo.name;
    const webhookLink = webhookInfo.link;
    const color = parseInt(oreInformation.getColors(oreList[log.block]["oreTier"])["backgroundColor"].substring(1), 16);
    fetch(webhookLink, {
    body: JSON.stringify({
        "embeds": [{
            "color": `${color}`,
            "fields" : [
                {
                    "name": ` `,
                    "value": `${webhookName} has found ${names[log.variant - 1]} ${log.block}! ${log.caveInfo[1] > 1 ? `(${caveList[log.caveInfo[2]].slice(-1)} Cave)` : ""}`,
                    "inline": false
                },
                {
                    "name": `${worlds[log.world]}`,
                    "value": ` `,
                    "inline": false
                },
                {
                    "name": "Rarity",
                    "value": `1/${formatNumber(Math.round(1/(log.rng)), 3)}${log.caveInfo[1] > 1 ? " Adjusted " : " "}${log.amt > 1 ? `(x${log.amt})` : ""}`,
                    "inline": true
                },
                {
                    "name": "Blocks Mined",
                    "value": `${formatNumber(mined, 3)}`,
                    "inline": true
                },
                {
                    "name": "Pickaxe",
                    "value": `${log.withPickaxe}`,
                    "inline": true
                },
                {
                    "name": "Event",
                    "value": `${log.withEvent}`,
                    "inline": true
                },
                {
                    "name": "Paradoxical",
                    "value": `${log.paradoxical !== undefined ? recipes[log.paradoxical].name : "None"}`,
                    "inline": true
                },
                {
                    "name": "Luck",
                    "value": `${(Math.round(log.luck*1000)/1000).toLocaleString()}x`,
                    "inline": true
                },
            ]
        }]
        }),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    })
    .then(function (res) {
                 
    })
    .catch(function (res) {
        console.log(res);
    });
}
const worlds = {
    1 : "W1",
    1.1: "SR1",
    1.2: "WW",
    2: "W2",
    0.9: "Galactica"
}
function serverWebhook(log, mined) {
    const color = parseInt(oreInformation.getColors(oreList[log.block]["oreTier"])["backgroundColor"].substring(1), 16);
    fetch(player.serverHook, {
        body: JSON.stringify({
        "embeds": [{
            "title": `${player.serverHookName === undefined ? player.name : player.serverHookName} has found ${names[log.variant - 1]} ${oreList[log.block]["eId"] ? oreList[log.block]["eId"] : log.block} ${log.amt > 1 ? `(x${log.amt})` : ""}! ${log.caveInfo[1] > 1 ? `(${caveList[log.caveInfo[2]].slice(-1)} Cave)` : ""}`,
            "color": `${color}`,
            "description": `${worlds[log.world]}`,
            "fields" : [
                {
                    "name": "Rarity",
                    "value": `1/${formatNumber((Math.round(1/(log.rng))), 3)}${log.caveInfo[1] > 1 ? " Adjusted " : " "}`,
                    "inline": true
                },
                {
                    "name": "Blocks Mined",
                    "value": `${formatNumber(mined, 3)}`,
                    "inline": true
                },
                {
                    "name": "Pickaxe",
                    "value": `${log.withPickaxe} ${log.withPickaxe === "The Tree of Life" ? `L${player.upgrades["pickaxe27"].level}` : ""}`,
                    "inline": true
                },
                {
                    "name": "Event",
                    "value": `${log.withEvent}`,
                    "inline": true
                },
                {
                    "name": "Paradoxical",
                    "value": `${log.paradoxical !== undefined ? recipes[log.paradoxical].name : "None"}`,
                    "inline": true
                },
                {
                    "name": "Luck",
                    "value": `${(Math.round(log.luck*1000)/1000).toLocaleString()}x`,
                    "inline": true
                },
            ]
        }],
        "allowed_mentions" : {
            "parse" : []
        }
        }),
        headers: {
            "Content-Type": "application/json",
                },
        method: "POST",
        })
        .then(function (res) {
                     
        })
        .catch(function (res) {
            console.log(res);
        });
}
function getCurrentWebhookId(num) {
    const list = player.webHook.ids;
    let currentValue = 0;
    let returnValue = {valid: false, id: ""};
    for (let id in list) {
        if (num >= list[id].rarity && list[id].rarity > currentValue) {
            returnValue.valid = true; 
            returnValue.id = id;
            currentValue = list[id].rarity;
        }
    }
    return returnValue;
}
function copyText(element) {
    navigator.clipboard.writeText(element.textContent);
}
function copiedLog(element) {
    element.style.animation = "";
    setTimeout(() => {
        element.style.animation = "textGreen 1s linear 1";
    }, 25);
}
function saveLogToStorage(log) {
    let curObj = localStorage.getItem("SillyCavernsLogStorage");
    if (curObj === null) curObj = {};
    else curObj = JSON.parse(curObj);
    const identifier = `${log[0]}+${performance.now()}`;
    curObj[identifier] ??= encryptLogData(log);
    localStorage.setItem("SillyCavernsLogStorage", JSON.stringify(curObj));
}
function removeLogFromStorage(identifier, element) {
    let curObj = JSON.parse(localStorage.getItem("SillyCavernsLogStorage"));
    if (curObj === null) return;
    if (curObj[identifier].toDelete) {
        curObj[identifier] = curObj[identifier].log;
        element.textContent = "Click me to delete log!";
        element.style.color = "white";
    } else {
        curObj[identifier] = {log: curObj[identifier], toDelete: true}
        element.style.color = "red";
        element.textContent = "Click me to restore log!";
    }
    localStorage.setItem("SillyCavernsLogStorage", JSON.stringify(curObj));  
}
function fullDeleteLog(identifier) {
    let curObj = JSON.parse(localStorage.getItem("SillyCavernsLogStorage"));
    if (curObj === null) return;
    delete curObj[identifier];
    localStorage.setItem("SillyCavernsLogStorage", JSON.stringify(curObj));
}
const verifiedOres = new secureLogs();
Object.preventExtensions(verifiedOres);
Object.defineProperty(logCreated, "created", {
    value: true,
    writable: false,
});
Object.preventExtensions(logCreated);