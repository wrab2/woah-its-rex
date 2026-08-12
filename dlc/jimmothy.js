const jimmothy = {
    opened: false,
    automationActive: false,
}

const jimmothyMessages = [
    "Jimmothy: *twitches caffeinated* Hello there, I'm Jimmothy! Want to automate EVERYTHING?",
    "Jimmothy: For just $5.99 a month, I can make your game run itself!",
    "Jimmothy: Auto-mining, auto-upgrades, auto-quests - all on autopilot, baby!",
    "Jimmothy: Subscribe to Jimmothy Premium™ and never lift a finger again!"
]

const jimmothyAutomationIntervals = {
    autoMining: null,
    autoUpgrades: null,
    autoQuests: null
}

function jimmothyOpen() {
    if (!player.jimmothy.spokeWith) player.jimmothy.spokeWith = true;
    jimmothyRefresh()
    get("jimmothy-window-main").style.visibility = "visible"
    jimmothy.opened = true
}

function jimmothyClose() {
    get("jimmothy-window-main").style.visibility = "hidden"
    jimmothy.opened = false
}

function jimmothyNext() {
    player.jimmothy.stage = (player.jimmothy.stage + 1) % jimmothyMessages.length
    jimmothyRefresh()
}

function jimmothyRefresh() {
    const stage = Math.min(player.jimmothy.stage, jimmothyMessages.length - 1)
    get("jimmothy-dialogue").textContent = jimmothyMessages[stage]
    get("jimmothy-status").textContent = `Jimmothy • ${stage + 1}/${jimmothyMessages.length}`
    
    const subButton = get("jimmothy-subscribe-button")
    const toggleButton = get("jimmothy-toggle-button")
    
    if (player.jimmothy.subscribed) {
        subButton.textContent = "Subscribed! ($5.99/month)"
        subButton.style.backgroundColor = "#6BC267"
        toggleButton.style.display = "block"
    } else {
        subButton.textContent = "Subscribe ($5.99/month)"
        subButton.style.backgroundColor = "#FF3D3D"
        toggleButton.style.display = "none"
    }
    
    if (player.jimmothy.automationEnabled) {
        toggleButton.textContent = "🤖 Automation: ON"
        toggleButton.style.backgroundColor = "#00FF00"
    } else {
        toggleButton.textContent = "🤖 Automation: OFF"
        toggleButton.style.backgroundColor = "#505050"
    }
}

function jimmothySubscribe() {
    if (player.jimmothy.subscribed) {
        jimmothySay("Jimmothy: You're already subscribed! Thanks for your support!")
        return
    }
    player.jimmothy.subscribed = true
    jimmothySay("Jimmothy: WELCOME TO JIMMOTHY PREMIUM™! Your automation journey begins NOW!")
    jimmothyRefresh()
}

function jimmothySay(text) {
    get("jimmothy-message").textContent = text
    get("jimmothy-message").style.visibility = "visible"
    setTimeout(() => {
        get("jimmothy-message").style.visibility = "hidden"
    }, 5000)
}

function jimmothyToggleAutomation() {
    if (!player.jimmothy.subscribed) {
        jimmothySay("Jimmothy: You gotta subscribe first, buddy!")
        return
    }
    
    player.jimmothy.automationEnabled = !player.jimmothy.automationEnabled
    
    if (player.jimmothy.automationEnabled) {
        jimmothySay("Jimmothy: AUTOMATION ACTIVATED! Sit back and watch the magic happen!")
        jimmothyStartAutomation()
    } else {
        jimmothySay("Jimmothy: Automation deactivated. Back to manual grinding!")
        jimmothyStopAutomation()
    }
    
    jimmothyRefresh()
}

function jimmothyStartAutomation() {
    const miningInterval = player.jimmothy.boostActive ? 25 : 50
    const upgradeInterval = player.jimmothy.boostActive ? 1000 : 2000
    const questInterval = player.jimmothy.boostActive ? 2500 : 5000
    
    // Auto-mining
    if (!jimmothyAutomationIntervals.autoMining) {
        jimmothyAutomationIntervals.autoMining = setInterval(() => {
            if (player.jimmothy.automationEnabled && canMine) {
                mineBlock(curX, curY);
            }
        }, miningInterval);
    }
    
    // Auto-upgrades (buys best available upgrades)
    if (!jimmothyAutomationIntervals.autoUpgrades) {
        jimmothyAutomationIntervals.autoUpgrades = setInterval(() => {
            if (player.jimmothy.automationEnabled) {
                jimmothyAutoBuyUpgrades()
            }
        }, upgradeInterval);
    }
    
    // Auto-quests (completes John's quests automatically when possible)
    if (!jimmothyAutomationIntervals.autoQuests) {
        jimmothyAutomationIntervals.autoQuests = setInterval(() => {
            if (player.jimmothy.automationEnabled && player.john.spokeWith) {
                jimmothyAutoCompleteQuest()
            }
        }, questInterval);
    }
}

function jimmothyStopAutomation() {
    if (jimmothyAutomationIntervals.autoMining) {
        clearInterval(jimmothyAutomationIntervals.autoMining)
        jimmothyAutomationIntervals.autoMining = null
    }
    if (jimmothyAutomationIntervals.autoUpgrades) {
        clearInterval(jimmothyAutomationIntervals.autoUpgrades)
        jimmothyAutomationIntervals.autoUpgrades = null
    }
    if (jimmothyAutomationIntervals.autoQuests) {
        clearInterval(jimmothyAutomationIntervals.autoQuests)
        jimmothyAutomationIntervals.autoQuests = null
    }
}

function jimmothyAutoBuyUpgrades() {
    // Try to buy the most expensive available gears and pickaxes
    const allRecipes = Object.keys(recipes)
    
    for (const recipeId of allRecipes) {
        const recipe = recipes[recipeId]
        
        // Skip if already owned
        if (player.pickaxes[recipeId] || player.gears[recipeId]) continue
        
        // Check if this recipe can be crafted in current world
        if (!recipe.active.includes(currentWorld)) continue
        
        let canCraft = true
        let recipe_items = recipe.recipe
        
        // Check if we have all needed items
        for (let item of recipe_items) {
            if (playerInventory[item.ore]["normalAmt"] < item.amt) {
                canCraft = false
                break
            }
        }
        
        // If we can craft, do it
        if (canCraft) {
            craftPickaxe(recipeId)
            return // Only craft one per cycle
        }
    }
}

function jimmothyAutoCompleteQuest() {
    const currentQuest = johnQuests[player.john.currentQuest]
    if (!currentQuest) return
    
    const ore = currentQuest.ore
    const needed = currentQuest.amount
    const have = playerInventory[ore]["normalAmt"]
    
    // If we have enough ore, complete the quest
    if (have >= needed) {
        completeQuest()
    }
}
