/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
const debug = (document.location.href.includes("testing")) || (document.location.href.includes('http://127.0.0.1:5500/'));
const logCreated = {}
class secureLogs {
    #spawnLogs;
    #verifiedLogs;
    #logsTimer;
    #startTime = Date.now();
    #isRightPickaxe;
    #canGenCaves;
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
        const ore = intended.ore === undefined ? intended : intended.ore;
        const variant = intended.variant === undefined ? undefined : intended.variant;
        fromCave = fromCave === undefined ? [false, 1, "none"] : fromCave;
        let luck;
        if (fromCave[1] > 1) {
            luck = caveLuck;
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
            console.log("failed to create, ", obj.stack, luck, maxLuck);
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
    verifyFind(block, r, c, variant, duped) {
        block = block.ore === undefined ? block : block.ore;
        let verified = false;
        for (let i = this.#verifiedLogs["All"].length - 1; i >= 0; i--) {
            if (this.#verifiedLogs["All"][i].y === r && this.#verifiedLogs["All"][i].x === c) {
                if (block === this.#verifiedLogs["All"][i].block) {
                    const log = this.#clone(this.#verifiedLogs["All"][i]);
                    log.duped = duped;
                    if (log.mined !== true) {
                        log.mined = true;
                        if (log.variant === undefined) log.variant = variant;
                        if (player.webHook.active) webHook(log);
                        if ((log.rng < 1/1000000000 || oreList[log.block]["oreTier"] === "Infinitesimal") && player.serverHook !== undefined) serverWebhook(log, player.stats.blocksMined);
                        const webhookString = `${player.name} has found ${names[log.variant - 1]} ${log.block} ${log.duped ? "(x2) " : ""}with a rarity of 1/${Math.round(1/log.rng).toLocaleString()} ${log.caveInfo[0] ? (log.caveInfo[1] > 1 ? "(" + caveList[log.caveInfo[2]].slice(-1) + " Cave)" : "(Layer Cave)") : ""} at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(log.x - 1000000).toLocaleString()}, Y: ${(-1 * log.y).toLocaleString()} ${(log.paradoxical === "pickaxe26" ? " " : "")}`;           
                        log.output = webhookString;
                        this.#verifiedLogs["All"][i] = log;
                        Object.freeze(log);
                        if (log.rng > 1/player.settings.minLogRarity) {
                            this.#verifiedLogs["All"].splice(i, 1);
                        } else {
                            if (log.caveInfo[0]) this.#verifiedLogs["Cave"].push(log);
                            if (log.variant === "Normal") this.#verifiedLogs["Normal"].push(log);
                            else if (log.variant === "Electrified") this.#verifiedLogs["Electrified"].push(log);
                            else if (log.variant === "Radioactive") this.#verifiedLogs["Radioactive"].push(log);
                            else if (log.variant === "Explosive") this.#verifiedLogs["Explosive"].push(log);
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
                    output += `<span><span style="font-size:0vw;">${encryptLogData(list[i], times)}</span><span onclick="copyText(this.parentElement.children[0]); copiedLog(this);">Click Me To Copy Verification</span></span><br>`
                }
                if (document.getElementById("generatedLogs") !== undefined) document.getElementById("generatedLogs").innerHTML = output;
        } else {
            this.#clearLogs();
        }
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
        let luck = baseLuck;
        if (currentWorld === 1.1) {
            if (player.gears["gear20"]) luck *= ((baseLuck * 0.05) + 1);
            luck *= 1.25;
            if (isNaN(luck)) return 1;
            else return luck;
        }
        if (player.stats.currentPickaxe === "pickaxe27" && !player.trophyProgress["subrealmOneCompletion"].trophyOwned) {player.stats.currentPickaxe = "pickaxe0"; baseLuck = 1;}
        luck += (player.gears["gear18"] ? 2.5 : 0) + (player.gears["gear12"] ? 0.35 : 0) + (player.gears["gear10"] ? 0.25 : 0);
        if (currentWorld < 2) luck *= (player.gears["gear1"] ? 1.1 : 1) * (player.gears["gear5"] ? 1.6 : 1);
        if (player.gears["gear20"]) luck *= (baseLuck * 0.05) + 1;
        luck *= 1.25;
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
}
function encryptLogData(log, times) {
    const key = Math.log10(log.genAt);
    const output = {
        1: key,
        2: Math.pow(Math.log(log.luck), key),
        3: Math.pow(Math.sqrt(1 / log.rng), 1.225),
        4: Math.log2(times),
        5: Math.floor(log.avgSpeed * 1.449),
        6: (log.paradoxical === undefined ? "none" : log.paradoxical),
        7: new Date(log.genAt)
    }
    return toBinary(JSON.stringify(output));
  }
  function decryptLogData(toDecrypt, key) {
    if (key === "GJNT38GREJWEP") {
      toDecrypt = JSON.parse(fromBinary(toDecrypt));
      let paramOne = toDecrypt[1];
      let paramTwo = toDecrypt[2];
      paramTwo = Math.round(Math.pow(Math.E, Math.pow(paramTwo, 1 / paramOne)));
      paramOne = Math.pow(10, paramOne)
      let paramThree = toDecrypt[3];
      paramThree = Math.pow(paramThree, 1/1.225);
      paramThree = Math.round(Math.pow(paramThree, 2));
      let paramFour = toDecrypt[4]
      paramFour = Math.sqrt(paramFour);
      let paramFive = toDecrypt[5];
      paramFive = Math.floor(paramFive / 1.449);
      let paramSix = toDecrypt[6];
      paramSix = paramSix !== "none" ? getItemNameFromParadoxical(paramSix) : "none";
      let paramSeven = toDecrypt[7]
      return "Key: " + paramOne + ", Luck: " + paramTwo + ", RNG: " + paramThree + ", AVG Speed: " + paramFive + ", Time Since Last Log: " + Math.floor(paramFour) + ", Generated At: " + new Date(paramSeven).toUTCString() + ", Paradoxical Item: " + paramSix;
    }
}
function roundNumberToMillionth(num) {
    return Math.round(num * 1000000) / 1000000;
}
function webHook(log) {
    const currentWebhook = getCurrentWebhookId(Math.floor(1/log.rng));
    if (!currentWebhook.valid) return;
    const webhookInfo = player.webHook.ids[currentWebhook.id];
    const webhookName = webhookInfo.name;
    let webhookContent = webhookInfo.customString;
    const webhookString = `${webhookName} has found ${names[log.variant - 1]} ${log.block} ${log.duped ? "(x2) " : ""}with a rarity of 1/${Math.round(1/log.rng).toLocaleString()} ${log.caveInfo[0] ? (log.caveInfo[1] > 1 ? "(" + caveList[log.caveInfo[2]].slice(-1) + " Cave) " : "(Layer Cave) ") : ""}at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(log.x - 1000000).toLocaleString()}, Y: ${(-1 * log.y).toLocaleString()} ${(log.paradoxical === "pickaxe26" ? " " : "")}`;           
    webhookContent = webhookContent === "`normal`" ? webhookString : eval(webhookContent);
    fetch(player.webHook.link, {
    body: JSON.stringify({
    content: webhookContent,
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
}
function serverWebhook(log, mined) {
    const color = parseInt(oreInformation.getColors(oreList[log.block]["oreTier"])["backgroundColor"].substring(1), 16);
    fetch(player.serverHook, {
        body: JSON.stringify({
        "embeds": [{
            "title": `${player.name} has found ${names[log.variant - 1]} ${log.block}! ${log.caveInfo[1] > 1 ? `(${caveList[log.caveInfo[2]].slice(-1)} Cave)` : ""}`,
            "color": `${color}`,
            "description": `${worlds[log.world]}`,
            "fields" : [
                {
                    "name": "Rarity",
                    "value": `1/${formatNumber(Math.round(1/log.rng), 3)}${log.caveInfo[1] > 1 ? " Adjusted " : " "}${log.duped ? "(x2)" : ""}`,
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
                    "value": `${Math.floor(log.luck).toLocaleString()}x`,
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
const verifiedOres = new secureLogs();
Object.preventExtensions(verifiedOres);
Object.defineProperty(logCreated, "created", {
    value: true,
    writable: false,
});
Object.preventExtensions(logCreated);
