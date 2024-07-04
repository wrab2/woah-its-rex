const achievementList = {
    "worldOneCompletion" : {
        name : "World One Completionist",
        requirement: function(get) {
            const blocksMinedNow = player.stats.blocksMined;
            if (player.trophyProgress["worldOneCompletion"].lastPickaxeUsed === "pickaxe12" && player.stats.currentPickaxe === "pickaxe12") {
                const totalMinedWithWOG = blocksMinedNow - player.trophyProgress["worldOneCompletion"].lastMinedAmt;
                player.trophyProgress["worldOneCompletion"].blocksWithWOG += totalMinedWithWOG;
            }
            player.trophyProgress["worldOneCompletion"].lastPickaxeUsed = player.stats.currentPickaxe;
            player.trophyProgress["worldOneCompletion"].lastMinedAmt = player.stats.blocksMined;
            if (get) return `${player.trophyProgress["worldOneCompletion"].blocksWithWOG.toLocaleString()}/1,000,000,000 blocks mined with Wings of Glory.`
            if (player.trophyProgress["worldOneCompletion"].blocksWithWOG > 1000000000) {
                return true;
            }
        },
        reward: {type: "luck", do: "multiply", amt: 1.1},
        icon: "<span class='trophyIcon'>Trophy made by @lxzy.</span>"
    },
    "worldTwoCompletion" : {
        name : "World Two Completionist",
        requirement: function(get) {
            const blocksMinedNow = player.stats.blocksMined;
            if (player.trophyProgress["worldTwoCompletion"].lastPickaxeUsed === "pickaxe25" && player.stats.currentPickaxe === "pickaxe25" && currentWorld === 2) {
                const totalMinedWithCoronary = blocksMinedNow - player.trophyProgress["worldTwoCompletion"].lastMinedAmt;
                player.trophyProgress["worldTwoCompletion"].blocksWithCoronary += totalMinedWithCoronary;
            }
            player.trophyProgress["worldTwoCompletion"].lastPickaxeUsed = player.stats.currentPickaxe;
            player.trophyProgress["worldTwoCompletion"].lastMinedAmt = player.stats.blocksMined;
            if (get) return `${player.trophyProgress["worldTwoCompletion"].blocksWithCoronary.toLocaleString()}/10,000,000,000 blocks mined with Coronary Catastrophe in World 2.<br>Oblivion Fracturer: ${player.gears["gear21"] ? "Obtained." : "Required."}`
            if (player.trophyProgress["worldTwoCompletion"].blocksWithCoronary > 10000000000 && player.gears["gear21"]) {
                return true;
            }
        },
        reward: {type: "luck", do: "multiply", amt: 1.25},
        icon: "<span class='trophyIcon'>Trophy made by @wrab</span>"
    },
    "subrealmOneCompletion" : {
        name : "Subrealm One Completion",
        requirement: function(get) {
            if (get) return `${indexHasOre("🏁")}/1 🏁 found.`
            if (indexHasOre("🏁") > 0) {
                return true;
            }
        },
        reward: {type: "allow", do: "usage", amt: "pickaxe27"},
        icon: "<span class='trophyIcon'>Trophy made by @hulfe</span>"
    },
}
function getUnownedTrophies() {
    const list = [];
    for (let trophy in achievementList) if (!player.trophyProgress[trophy].trophyOwned) list.push(trophy);
    return list;
}
function checkUnlockConditions() {
    updateRequirementAtLocation();
    const trophiesToCheck = getUnownedTrophies();
    for (let i = 0; i < trophiesToCheck.length; i++) {
        const trophy = achievementList[trophiesToCheck[i]];
        if (trophy.requirement()) {
            player.trophyProgress[trophiesToCheck[i]].trophyOwned = true;
            get(`${trophiesToCheck[i]}`).classList.remove("unownedTrophy");
        }
    }
}
function getAchievementRequirement(id) {
    return achievementList[id].requirement(true);
}
let currentInsertedElement;
function displayRequirementAtLocation(child) {
    if (currentInsertedElement !== undefined) {
        const thisId = currentInsertedElement.parentElement.children[0].id;
        currentInsertedElement.parentElement.removeChild(currentInsertedElement);
        currentInsertedElement = undefined;
        if (thisId === child.id) return;
    }
    const areaToInsert = child.parentElement;
    const elementToInsert = get("requirementTextArea").cloneNode(true);
    elementToInsert.style.display = "flex";
    elementToInsert.children[0].innerHTML = `<span class="trophyRequirements">${getAchievementRequirement(child.id)}</span><span class="trophyReward">${formatReward(achievementList[child.id].reward)}</span>${achievementList[child.id].icon}`;
    elementToInsert.setAttribute("onclick", 'displayRequirementAtLocation(this.parentElement)')
    currentInsertedElement = elementToInsert;
    areaToInsert.appendChild(elementToInsert);
}
function updateRequirementAtLocation() {
    if (currentInsertedElement !== undefined) {
        const id = currentInsertedElement.parentElement.children[0].id;
        currentInsertedElement.children[0].innerHTML = `<span class="trophyRequirements">${getAchievementRequirement(id)}</span><span class="trophyReward">${formatReward(achievementList[id].reward)}</span>${achievementList[id].icon}`;
    }
}
function checkAllTrophies() {
    for (let trophy in achievementList) {
        if (player.trophyProgress[trophy].trophyOwned) {
            if (get(`${trophy}`) !== null) {
                get(`${trophy}`).classList.remove("unownedTrophy");
            }
        }
    }
}
function formatReward(reward) {
    let output = "";
    if (reward.type === "luck") {
        if (reward.do === "add") output += "Adds " + reward.amt + " to base luck.";
        else if (reward.do === "multiply") output += "Multiplies base luck by " + reward.amt + "x";
    } else if (reward.type === "allow") {
        if (reward.do === "usage") {
            if (reward.amt === "pickaxe27") output += "Allows usage of the Tree of Life in World 1.";
        }
    }
    return output;
}
function getRewardTypes(affects, type) {
    let num = type === "add" ? 0 : 1;
    for (let trophy in achievementList) {
        const reward = achievementList[trophy].reward;
        if (reward.type === affects && reward.do === type && player.trophyProgress[trophy].trophyOwned) {
            if (type === "add") {
                num += reward.amt;
            } else if (type === "multiply") {
                num *= reward.amt;
            }
        }
    }
    return num;
}
function showTrophyRoom(state) {
    get("blackScreen").style.display = "block";
    get("blackScreen").style.animation = "fadeToBlack 2s linear 1";
    checkUnlockConditions();
    checkAllTrophies();
    setTimeout(() => {
        if (state) {closeMenu(); get("trophyRoom").style.display = "block";}
        else get("trophyRoom").style.display = "none";
    }, 1000);
    setTimeout(() => {
        get("blackScreen").style.display = "none";
    }, 2000);
}
