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
        fromCave = fromCave === undefined ? [false, 1, "none"] : fromCave;
        let luckModifier = (this.#maxLuck[player.stats.currentPickaxe] + (player.gears["gear18"] ? 2.5 : 0) + (player.gears["gear12"] ? 0.35 : 0) + (player.gears["gear10"] ? 0.25 : 0)) * ((player.gears["gear1"] ? 1.1 : 1) * (player.gears["gear5"] ? 1.6 : 1)) * (player.gears["gear20"] ? ((verifiedOres.getLuckBoosts()[player.stats.currentPickaxe] * 0.05) + 1) : 1) * 10;
        luckModifier *= 1.5;
        const maxLuck = luckModifier;
        let luck;
        if (fromCave[0]) {
            if (caveLuck > 2) {
                console.log("failed to create, ", obj.stack, caveLuck);
                return;
            } else {
                luck = 1;
            }
        } else {
            luck = oreList[intended]["numRarity"] * oreList[intended]["decimalRarity"];
        }
        if (((obj.stack.includes("mine.js") || obj.stack.includes("caves.js")) && luck <= maxLuck) || debug) {
            this.#spawnLogs.push({x: c, y: r, block: intended, luck: luck, caveInfo: fromCave})
        } else {
            console.log("failed to create, ", obj.stack, luck, maxLuck);
        }
    }
    verifyLog(r, c) {
        for (let i = 0; i < this.#spawnLogs.length; i++) {
            if (this.#spawnLogs[i].y === r && this.#spawnLogs[i].x === c) {
                if (mine[r][c] === this.#spawnLogs[i].block) {
                    let rng;
                    if (this.#spawnLogs[i].caveInfo[0]) rng = 1/oreList[this.#spawnLogs[i].block]["numRarity"];
                    else rng = oreList[this.#spawnLogs[i].block]["decimalRarity"];
                    this.#verifiedLogs["All"].push({block: this.#spawnLogs[i].block, y: r, x: c, time: Date.now() - this.#startTime, mined: false, variant: "Normal", luck: this.#spawnLogs[i].luck, caveInfo: this.#spawnLogs[i].caveInfo, rarity: rng})
                    this.#spawnLogs.splice(i, 1);
                    break;
                } else {
                    console.log('failed to verify', r, c);
                }
            }
        }
    }
    verifyFind(block, r, c, variant) {
        let verified = false;
        for (let i = this.#verifiedLogs["All"].length - 1; i >= 0; i--) {
            if (this.#verifiedLogs["All"][i].y === r && this.#verifiedLogs["All"][i].x === c) {
                if (block === this.#verifiedLogs["All"][i].block) {
                    const log = this.#verifiedLogs["All"][i];
                    if (log.mined != true) {
                        log.mined = true;
                        log.variant = variant;
                        if (log.caveInfo[1] > 1) {
                            let something;
                            if (oolProbabilities[log.block] !== undefined && log.caveInfo[2] !== "type5Ores") something = oolProbabilities[this.#verifiedLogs[i].block];
                            else something = 1/oreList[log.block]["numRarity"];
                            something /= log.caveInfo[1];
                            log.rarity = something;
                        }
                        log.rarity /= multis[names.indexOf(variant)];
                        //const webhookString = `has found ${this.#verifiedLogs[i].variant} ${this.#verifiedLogs[i].block} with a rarity of 1/${Math.round(1/this.#verifiedLogs[i].rarity).toLocaleString()} ${this.#verifiedLogs[i].caveInfo[0] ? (this.#verifiedLogs[i].caveInfo[1] > 1 ? "(" + caveList[this.#verifiedLogs[i].caveInfo[2]].slice(-1) + " Cave)" : "(Layer Cave)") : ""} at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(this.#verifiedLogs[i].x - 1000000000).toLocaleString()}, Y: ${(-1 *this.#verifiedLogs[i].y).toLocaleString()}`
                        if (player.settings.highRarityLogs && log.rarity > 1/250000000) {
                            this.#verifiedLogs.splice(i, 1);
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
                    console.log("failed to verify find", block, this.#verifiedLogs[i][0]);
                }
            }
        }
        if (!verified) {
            console.log("log not found, failed to verify if found, block mined")
        }
    }
    showLogs() {
        if (document.getElementById("frame-logs").style.display === "block") {
                clearInterval(this.#logsTimer);
                this.#logsTimer = null;
                let element = document.createElement("p");
                if (document.getElementById("generatedLogs") !== null)
                    document.getElementById("generatedLogs").remove();
                element.id = "generatedLogs";
                document.getElementById("logHolder").appendChild(element);
                let output = "";
                const list = this.#verifiedLogs[document.getElementById("logSort").value];
                for (let i = 0; i < list.length; i++) {
                    let times;
                    if (list[i - 1] !== undefined) times =list[i].time - list[i - 1].time;
                    else times = list[i].time;
                    output += `${list[i].block}, ${list[i].time}, ${times}, ${list[i].mined}, ${list[i].variant}, `;
                    output += `${list[i].caveInfo[0] === true ? "Cave, " : ""} ${list[i].y}, `
                    output += `${Math.round(1/(list[i].rarity)).toLocaleString()}, `;
                    output += (Math.log10(list[i].luck * (list[i].y + 1))) * 2 + "<br>";
                }
                this.#logsTimer = setInterval(this.#reloadLogs, 500, output!==""?output:"none");
        } else {
            clearInterval(this.#logsTimer);
            this.#logsTimer = null;
            if (document.getElementById("generatedLogs") !== null)
                document.getElementById("generatedLogs").remove();
        }
    }
    #reloadLogs(output) {
        document.getElementById("generatedLogs").innerHTML = output;
    }
    getLuckBoosts() {
        return this.#maxLuck;
    }
    getCurrentLuck() {
        let luck = this.#maxLuck[player.stats.currentPickaxe];
        luck += (player.gears["gear18"] ? 2.5 : 0) + (player.gears["gear12"] ? 0.35 : 0) + (player.gears["gear10"] ? 0.25 : 0);
        if (currentWorld === 1)
            luck *= (player.gears["gear1"] ? 1.1 : 1) * (player.gears["gear5"] ? 1.6 : 1);
        luck *= (player.gears["gear20"] ? ((verifiedOres.getLuckBoosts()[player.stats.currentPickaxe] * 0.05) + 1) : 1);
        luck *= 1.5;
        return luck;
    }
    getStartTime() {
        return this.#startTime;
    }
}
let verifiedOres = new secureLogs();
