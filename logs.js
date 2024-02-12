/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
class secureLogs {
    #spawnLogs;
    #verifiedLogs;
    #logsTimer;
    #maxLuck = [1, 1.2, 1.35, 1.8, 2, 5, 10, 3, 4, 20, 17.5, 30, 75, 1];
    constructor() {
        this.#spawnLogs = [];
        this.#verifiedLogs = [];
        this.#logsTimer = null;
    }
    createLog(r, c, intended, obj, luck, fromCave) {
        fromCave = fromCave === undefined ? [false, false] : fromCave;
        console.log(fromCave)
        let luckModifier = 1;
        if (currentWorld === 1 && gears[1])
            luckModifier *= 1.1;
        if (currentWorld === 1 && gears[5])
            luckModifier *= 1.6;
        const maxLuck = (this.#maxLuck[currentPickaxe] * luckModifier) + 1;
        if ((obj.stack.includes("mine.js") || obj.stack.includes("caves.js")) && luck <= maxLuck) {
            if (mine[r][c] === undefined)
                this.#spawnLogs.push([r, c, intended, luck, fromCave]);
        } else {
            console.log("failed to create, ", obj.stack, luck, maxLuck);
        }
    }
    verifyLog(r, c) {
        for (let i = 0; i < this.#spawnLogs.length; i++) {
            //console.log(this.#spawnLogs[i][0], this.#spawnLogs[i][1], r, c);
            if (this.#spawnLogs[i][0] === r && this.#spawnLogs[i][1] === c) {
                if (mine[r][c] === this.#spawnLogs[i][2]) {
                    const num = this.#spawnLogs[i][3];
                    const fromCave = this.#spawnLogs[i][4];
                    this.#spawnLogs.splice(i, 1);
                    this.#verifiedLogs.push([mine[r][c], [r, c], new Date(), false, "Normal", num, fromCave]);
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
            if (this.#verifiedLogs[i][1][0] === r && this.#verifiedLogs[i][1][1] === c) {
                if (block === this.#verifiedLogs[i][0]) {
                    if (this.#verifiedLogs[i][3] != true) {
                        this.#verifiedLogs[i][3] = true;
                        this.#verifiedLogs[i][4] = variant;
                        verified = true;
                        break;
                    }
                } else {
                    console.log("failed to verify find", block, this.#verifiedLogs[i][0]);
                }
            }
        }
        console.log(verified);
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
                    let multi = multis[names.indexOf(this.#verifiedLogs[i][4])];
                    output += this.#verifiedLogs[i][0] + ", " + this.#verifiedLogs[i][2] + ", " + this.#verifiedLogs[i][3] + ", " + this.#verifiedLogs[i][4];
                    output += this.#verifiedLogs[i][6][0] === true ? ", Cave, " : ", "
                    output += this.#verifiedLogs[i][1][0] + ", ";
                    if (this.#verifiedLogs[i][6][1]) {
                        let something = getCaveTypeFromOre(this.#verifiedLogs[i][0])[this.#verifiedLogs[i][0]];
                        something /= getCaveMultiFromOre(this.#verifiedLogs[i][0]);
                        output += Math.round(1/something).toLocaleString();
                    } else {
                        output += Math.floor(((1 / oreList[this.#verifiedLogs[i][0]][0]) * multi)/ this.#verifiedLogs[i][5]).toLocaleString();
                    }
                    output += ", " + (Math.log10(this.#verifiedLogs[i][5] * (this.#verifiedLogs[i][1][0] + 1))) * 2 + "<br>";
                    
                }
                this.#logsTimer = setInterval(this.#reloadLogs, 50, output!==""?output:"none");
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
        if (currentWorld === 1) {
            return (this.#maxLuck[currentPickaxe]) * (gears[1] ? 1.1 : 1) * (gears[5] ? 1.6 : 1);
        } else {
            return this.#maxLuck[currentPickaxe];
        }
        
    }
}
let verifiedOres = new secureLogs();
