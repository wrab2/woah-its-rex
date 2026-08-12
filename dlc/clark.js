const clark = {
    opened: false,
}

const clarkMessages = [
    "Clark: Greetings, I'm Clark, the architect of this mine. Glad you made it down here.",
    "Clark: I've designed this cavern system to be both challenging and rewarding for miners like you.",
    "Clark: Before you continue, let me introduce you to the NPCs who dwell here.",
    "Clark: First, there's JERRY - he's a skill trainer. Talk to him to learn new abilities and upgrade your talents.",
    "Clark: Jerry provides training in mining, gathering, silliness, and discovery. Spend time with him to level up!",
    "Clark: Next is OLIVER - a family man trying to survive down here. He's good company and tells great stories about his wife and kids.",
    "Clark: Oliver doesn't offer much mechanically, but his presence reminds us why we mine - for those we love.",
    "Clark: Then there's JOHN - the most complex character. He runs a QUEST SYSTEM where you complete objectives for rewards.",
    "Clark: John gives you tasks to find specific ores. Complete quests to unlock powerful gears and items from him.",
    "Clark: Some of John's best rewards: heirlooms, fishing poles, and even the keys to his HOUSE.",
    "Clark: But there's one more... DANIEL. He's... different. He can transform this place into something terrifying.",
    "Clark: Daniel offers a HORROR MODE that fills the mine with darkness, glitches, and psychological scares.",
    "Clark: And JIMMOTHY - the subscription-based automation NPC. For $5.99/month, he can automate mining, upgrades, and quests.",
    "Clark: Jimmothy handles the grind so you can focus on exploration or just relax while your mine runs itself.",
    "Clark: Each NPC serves a different purpose in your mining journey - companionship, skills, quests, scares, and automation.",
    "Clark: Now here's the important part: I've woven all these characters into the very fabric of this mine.",
    "Clark: They're all connected. And there's something special I've prepared for you if you listen to all my words...",
    "Clark: Once you've heard everything I have to say, their abilities will AMPLIFY. They'll become stronger versions of themselves.",
    "Clark: Daniel will be SCARIER. Jerry's skills will be more powerful. Oliver's presence will be more meaningful.",
    "Clark: Jimmothy's automation will be faster, and John's quests will have greater rewards. Now you know the full picture, friend.",
    "Clark: Good luck my friend"
]

function clarkOpen() {
    if (!player.clark.spokeWith) player.clark.spokeWith = true;
    clarkRefresh()
    get("clark-window-main").style.visibility = "visible"
    clark.opened = true
}

function clarkClose() {
    get("clark-window-main").style.visibility = "hidden"
    clark.opened = false
}

function clarkNext() {
    if (player.clark.stage < clarkMessages.length - 1) {
        player.clark.stage = player.clark.stage + 1
        player.clark.linesRead.push(player.clark.stage)
        clarkRefresh()
        
        // Check if all lines have been read
        if (player.clark.stage === clarkMessages.length - 1 && player.clark.linesRead.length === clarkMessages.length) {
            clarkActivateBoost()
        }
    }
}

function clarkRefresh() {
    const stage = Math.min(player.clark.stage, clarkMessages.length - 1)
    get("clark-dialogue").textContent = clarkMessages[stage]
    get("clark-status").textContent = `Clark • ${stage + 1}/${clarkMessages.length}`
    get("clark-progress").textContent = `Lines Read: ${Math.min(player.clark.linesRead.length +1, clarkMessages.length)}/${clarkMessages.length}`
    
    const nextButton = get("clark-next-button")
    if (stage === clarkMessages.length - 1) {
        nextButton.disabled = true
        nextButton.textContent = "✓ Completed!"
        nextButton.style.backgroundColor = "#6BC267"
    }
    
    if (player.clark.boostActive) {
        get("clark-boost-status").textContent = "✨ BOOST ACTIVE - All characters are enhanced! ✨"
        get("clark-boost-status").style.color = "#FFD700"
        get("clark-boost-status").style.visibility = "visible"
    }
}

function clarkActivateBoost() {
    player.clark.boostActive = true
    
    clarkSay("Clark: Excellent! You now understand the full ecosystem. The boost is now active...")
    
    // Enhance Daniel - makes horror effects more frequent and intense
    player.daniel.boostActive = true
    player.daniel.horrorEffectFrequency = 3000 // Every 3 seconds instead of 5
    
    // Enhance Jerry - give all skills a boost
    if (player.jerry.skills) {
        for (const skill in player.jerry.skills) {
            player.jerry.skills[skill].level += 5
        }
    }
    
    // Enhance Oliver's presence
    player.oliver.boostActive = true
    
    // Enhance Jimmothy - faster automation speeds
    player.jimmothy.boostActive = true
    player.jimmothy.autoMiningInterval = 25 // Half the original speed
    player.jimmothy.autoUpgradeInterval = 1000 // Twice as fast
    player.jimmothy.autoQuestInterval = 2500 // Twice as fast
    
    // Enhance John's rewards
    player.john.boostActive = true
    player.john.questRewardMultiplier = 1.5 // 50% more rewards
    
    clarkRefresh()
}

function clarkSay(text) {
    const msg = get("clark-message")
    msg.textContent = text
    msg.style.visibility = "visible"
    msg.style.animation = "none"
    setTimeout(() => {
        msg.style.animation = "clarkFadeIn 0.4s ease-in-out"
    }, 10)
    
    setTimeout(() => {
        msg.style.visibility = "hidden"
    }, 5000)
}
