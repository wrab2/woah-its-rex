/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
class secureLogs {
    #spawnLogs;
    #verifiedLogs;
    #logsTimer;
    #startTime = Date.now();
    #maxLuck = [1, 1.2, 1.35, 1.8, 2, 5, 10, 3, 4, 20, 17.5, 30, 75, 1, 1.05, 1.075, 1.3, 1, 1.5, 2, 3.16, 1.25, 4, 5, 11, 50, 175];
    constructor() {
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
    }
    createLog(r, c, intended, obj, fromCave) {
        const ore = intended.ore === undefined ? intended : intended.ore;
        const variant = intended.variant === undefined ? undefined : intended.variant;
        fromCave = fromCave === undefined ? [false, 1, "none"] : fromCave;
        let luckModifier;
        if (player.stats.currentPickaxe === 27 || currentWorld === 1.1) {
            const pickaxe = player.upgrades["pickaxe27"];
            luckModifier = pickaxe.levelLuck[pickaxe.level];
            if (player.gears["gear20"]) luckModifier *= ((pickaxe.levelLuck[pickaxe.level] * 0.05) + 1);
            if (isNaN(luckModifier)) luckModifier = 1;
        } else {
            luckModifier = (this.#maxLuck[player.stats.currentPickaxe] + (player.gears["gear18"] ? 2.5 : 0) + (player.gears["gear12"] ? 0.35 : 0) + (player.gears["gear10"] ? 0.25 : 0)) * ((player.gears["gear1"] ? 1.1 : 1) * (player.gears["gear5"] ? 1.6 : 1)) * (player.gears["gear20"] ? ((verifiedOres.getLuckBoosts()[player.stats.currentPickaxe] * 0.05) + 1) : 1) * 10;
        }
        luckModifier *= 1.5;
        const maxLuck = luckModifier;
        let luck;
        if (fromCave[1] > 1) {
            if (caveLuck > 50000000) {
                console.log("failed to create, ", obj.stack, caveLuck);
                return;
            } else {
                luck = 1;
            }
        } else {
            luck = oreList[ore]["numRarity"] * oreList[ore]["decimalRarity"];
        }
        if (((obj.stack.includes("mine.js") || obj.stack.includes("caves.js")) && luck <= maxLuck) || debug) {
            this.#spawnLogs.push({x: c, y: r, block: ore, luck: luck, caveInfo: fromCave, variant: variant})
        } else {
            console.log("failed to create, ", obj.stack, luck, maxLuck);
        }
    }
    verifyLog(r, c) {
        for (let i = 0; i < this.#spawnLogs.length; i++) {
            if (this.#spawnLogs[i].y === r && this.#spawnLogs[i].x === c) {
                const block = mine[r][c].ore === undefined ? mine[r][c] : mine[r][c].ore;
                if (block === this.#spawnLogs[i].block) {
                    let rng;
                    if (this.#spawnLogs[i].caveInfo[1] > 1) {
                        if (oolProbabilities[block] !== undefined && this.#spawnLogs[i].caveInfo[2] !== "abysstoneCave") {
                            rng = oolProbabilities[block];
                        } else if (this.#spawnLogs[i].caveInfo[2] === "abysstoneCave") {
                            rng = gsProbabilities[caveList["abysstoneCave"].indexOf(log.block)];
                        } else {
                            rng = 1/oreList[this.#spawnLogs[i].block]["numRarity"];
                        }
                        rng /= this.#spawnLogs[i].caveInfo[1];
                        rng *= this.#spawnLogs[i].caveInfo[3];
                    } else {
                        rng = oreList[this.#spawnLogs[i].block]["decimalRarity"];
                    }
                    let variant = this.#spawnLogs[i].variant === undefined ? "Normal" : this.#spawnLogs[i].variant;
                    rng /= multis[variant - 1];
                    variant = names[variant - 1];
                    this.#verifiedLogs["All"].push({block: this.#spawnLogs[i].block, y: r, x: c, time: Date.now() - this.#startTime, mined: false, variant: variant, luck: this.#spawnLogs[i].luck, caveInfo: this.#spawnLogs[i].caveInfo, rarity: rng})
                    this.#spawnLogs.splice(i, 1);
                    break;
                } else {
                    console.log('failed to verify', r, c);
                }
            }
        }
    }
    verifyFind(block, r, c, variant) {
        block = block.ore === undefined ? block : block.ore;
        let verified = false;
        for (let i = this.#verifiedLogs["All"].length - 1; i >= 0; i--) {
            if (this.#verifiedLogs["All"][i].y === r && this.#verifiedLogs["All"][i].x === c) {
                if (block === this.#verifiedLogs["All"][i].block) {
                    const log = this.#verifiedLogs["All"][i];
                    if (log.mined != true) {
                        log.mined = true;
                        if (log.variant === undefined) log.variant = variant;
                        if (player.webHook.active) webHook(log);
                        const webhookString = `Cat has found ${log.variant} ${log.block} with a rarity of 1/${Math.round(1/log.rarity).toLocaleString()} ${log.caveInfo[0] ? (log.caveInfo[1] > 1 ? "(" + caveList[log.caveInfo[2]].slice(-1) + " Cave)" : "(Layer Cave)") : ""} at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(log.x - 1000000000).toLocaleString()}, Y: ${(-1 * log.y).toLocaleString()}`            
                        log.output = webhookString;
                        if (player.settings.highRarityLogs && log.rarity > 1/250000000) {
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
                        output += `Cat has NOT found ${list[i].variant} ${list[i].block} (Voided). Verification: `
                    } else {
                        output += `${list[i].output}. Verification: `;
                    }
                    let times;
                    if (list[i - 1] !== undefined) times = list[i].time - list[i - 1].time;
                    else times = list[i].time;
                    output += `${list[i].time}, ${times}, `;
                    output += (Math.log10(list[i].luck * (list[i].y + 1))) * 2 + "<br>";
                }
                this.#logsTimer = setInterval(this.#reloadLogs, 500, output!==""?output:"none");
        } else {
            this.#clearLogs();
        }
    }
    #reloadLogs(output) {
        if (document.getElementById("generatedLogs") !== undefined)
            document.getElementById("generatedLogs").innerHTML = output;
    }
    #clearLogs() {
        clearInterval(this.#logsTimer);
        this.#logsTimer = null;
        if (document.getElementById("generatedLogs") !== null)
            document.getElementById("generatedLogs").remove();
    }
    getLuckBoosts() {
        return this.#maxLuck;
    }
    getCurrentLuck() {
        if (player.stats.currentPickaxe === 27 || currentWorld === 1.1) {
            const pickaxe = player.upgrades["pickaxe27"];
            let luck = pickaxe.levelLuck[pickaxe.level];
            if (player.gears["gear20"]) luck *= ((pickaxe.levelLuck[pickaxe.level] * 0.05) + 1);
            if (isNaN(luck)) return 1;
            else return luck;
        }
        if (player.stats.currentPickaxe === 27) player.stats.currentPickaxe = 0;
        let luck = this.#maxLuck[player.stats.currentPickaxe];
        luck += (player.gears["gear18"] ? 2.5 : 0) + (player.gears["gear12"] ? 0.35 : 0) + (player.gears["gear10"] ? 0.25 : 0);
        if (currentWorld < 2)
            luck *= (player.gears["gear1"] ? 1.1 : 1) * (player.gears["gear5"] ? 1.6 : 1);
        luck *= (player.gears["gear20"] ? ((verifiedOres.getLuckBoosts()[player.stats.currentPickaxe] * 0.05) + 1) : 1);
        if (isNaN(luck)) return 1;
        else return luck;
    }
    getStartTime() {
        return this.#startTime;
    }
}
let verifiedOres = new secureLogs();
function webHook(log) {
    const currentWebhook = getCurrentWebhookId(Math.floor(1/log.rarity));
    if (!currentWebhook.valid) return;
    const webhookInfo = player.webHook.ids[currentWebhook.id];
    const webhookName = webhookInfo.name;
    let webhookContent = webhookInfo.customString;
    const webhookString = `${webhookName} has found ${log.variant} ${log.block} with a rarity of 1/${Math.round(1/log.rarity).toLocaleString()} ${log.caveInfo[0] ? (log.caveInfo[1] > 1 ? "(" + caveList[log.caveInfo[2]].slice(-1) + " Cave)" : "(Layer Cave)") : ""} at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(log.x - 1000000000).toLocaleString()}, Y: ${(-1 * log.y).toLocaleString()}`            
    webhookContent = webhookContent === "`normal`" ? webhookString : webhookContent;
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
