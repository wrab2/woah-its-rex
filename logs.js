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
        this.#verifiedLogs = [];
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
                    this.#verifiedLogs.push({block: this.#spawnLogs[i].block, y: r, x: c, time: Date.now() - this.#startTime, mined: false, variant: "Normal", luck: this.#spawnLogs[i].luck, caveInfo: this.#spawnLogs[i].caveInfo, rarity: rng})
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
        for (let i = this.#verifiedLogs.length - 1; i >= 0; i--) {
            if (this.#verifiedLogs[i].y === r && this.#verifiedLogs[i].x === c) {
                if (block === this.#verifiedLogs[i].block) {
                    if (this.#verifiedLogs[i].mined != true) {
                        this.#verifiedLogs[i].mined = true;
                        this.#verifiedLogs[i].variant = variant;
                        if (this.#verifiedLogs[i].caveInfo[1] > 1) {
                            let something;
                            if (oolProbabilities[this.#verifiedLogs[i].block] !== undefined && this.#verifiedLogs[i].caveInfo[2] !== "type5Ores") something = oolProbabilities[this.#verifiedLogs[i].block];
                            else something = 1/oreList[this.#verifiedLogs[i].block]["numRarity"];
                            something /= this.#verifiedLogs[i].caveInfo[1];
                            this.#verifiedLogs[i].rarity = something;
                        }
                        this.#verifiedLogs[i].rarity /= multis[names.indexOf(variant)];
                        //const webhookString = `has found ${this.#verifiedLogs[i].variant} ${this.#verifiedLogs[i].block} with a rarity of 1/${Math.round(1/this.#verifiedLogs[i].rarity).toLocaleString()} ${this.#verifiedLogs[i].caveInfo[0] ? (this.#verifiedLogs[i].caveInfo[1] > 1 ? "(" + caveList[this.#verifiedLogs[i].caveInfo[2]].slice(-1) + " Cave)" : "(Layer Cave)") : ""} at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(this.#verifiedLogs[i].x - 1000000000).toLocaleString()}, Y: ${(-1 *this.#verifiedLogs[i].y).toLocaleString()}`
                        if (player.settings.highRarityLogs && this.#verifiedLogs[i].rarity > 1/250000000) this.#verifiedLogs.splice(i, 1)
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
        if (document.getElementById("settingsContainer").style.display === "block") {
                clearInterval(this.#logsTimer);
                this.#logsTimer = null;
                let element = document.createElement("p");
                if (document.getElementById("generatedLogs") !== null)
                    document.getElementById("generatedLogs").remove();
                element.id = "generatedLogs";
                document.getElementById("logHolder").appendChild(element);
                let output = "";
                for (let i = 0; i < this.#verifiedLogs.length; i++) {
                    let times;
                    if (this.#verifiedLogs[i - 1] !== undefined) times = this.#verifiedLogs[i].time - this.#verifiedLogs[i - 1].time;
                    else times = this.#verifiedLogs[i].time;
                    output += `${this.#verifiedLogs[i].block}, ${this.#verifiedLogs[i].time}, ${times}, ${this.#verifiedLogs[i].mined}, ${this.#verifiedLogs[i].variant}, `;
                    output += `${this.#verifiedLogs[i].caveInfo[0] === true ? "Cave, " : ""} ${this.#verifiedLogs[i].y}, `
                    output += `${Math.round(1/(this.#verifiedLogs[i].rarity)).toLocaleString()}, `;
                    output += (Math.log10(this.#verifiedLogs[i].luck * (this.#verifiedLogs[i].y + 1))) * 2 + "<br>";
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
