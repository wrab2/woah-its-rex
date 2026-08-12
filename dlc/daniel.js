const daniel = {
    opened: false,
    horrorMode: false,
}

const danielMessages = [
    "Daniel: Welcome... to the REAL mine.",
    "Daniel: Everything you see here... is watching you.",
    "Daniel: Would you like to... experience TRUE fear?",
    "Daniel: Embrace the darkness... Daniel's here now."
]

function danielOpen() {
    if (!player.daniel.spokeWith) player.daniel.spokeWith = true;
    danielRefresh()
    get("daniel-window-main").style.visibility = "visible"
    get("daniel-window-main").style.animation = "danielAppear 0.8s ease-in-out"
    daniel.opened = true
}

function danielClose() {
    get("daniel-window-main").style.visibility = "hidden"
    get("daniel-window-main").style.animation = ""
    daniel.opened = false
    if (player.daniel.horrorEnabled) {
        danielDisableHorror()
    }
}

function danielNext() {
    player.daniel.stage = (player.daniel.stage + 1) % danielMessages.length
    danielRefresh()
}

function danielRefresh() {
    const stage = Math.min(player.daniel.stage, danielMessages.length - 1)
    const dialogueElem = get("daniel-dialogue")
    dialogueElem.textContent = danielMessages[stage]
    dialogueElem.style.animation = "none"
    setTimeout(() => {
        dialogueElem.style.animation = "danielGlitch 0.3s ease-in-out"
    }, 10)
    
    get("daniel-status").textContent = `Daniel • ${stage + 1}/${danielMessages.length}`
    
    const horrorButton = get("daniel-horror-button")
    
    if (player.daniel.horrorEnabled) {
        horrorButton.textContent = "👻 HORROR MODE: ACTIVE"
        horrorButton.style.backgroundColor = "#8B0000"
        horrorButton.style.color = "#FF0000"
    } else {
        horrorButton.textContent = "👻 ENABLE HORROR MODE"
        horrorButton.style.backgroundColor = "#2A0000"
        horrorButton.style.color = "#FF6666"
    }
}

function danielToggleHorror() {
    if (!player.daniel.spokeWith) {
        danielSay("Daniel: You must speak with me first...")
        return
    }
    
    player.daniel.horrorEnabled = !player.daniel.horrorEnabled
    
    if (player.daniel.horrorEnabled) {
        danielSay("Daniel: The darkness... AWAKENS...")
        danielEnableHorror()
    } else {
        danielSay("Daniel: The light... returns...")
        danielDisableHorror()
    }
    
    danielRefresh()
}

function danielSay(text) {
    const msg = get("daniel-message")
    msg.textContent = text
    msg.style.visibility = "visible"
    msg.style.animation = "none"
    setTimeout(() => {
        msg.style.animation = "danielFlash 0.6s ease-in-out"
    }, 10)
    
    setTimeout(() => {
        msg.style.visibility = "hidden"
    }, 6000)
}

function danielEnableHorror() {
    const body = document.body
    
    // Dark overlay
    let darkOverlay = get("daniel-dark-overlay")
    if (!darkOverlay) {
        darkOverlay = document.createElement("div")
        darkOverlay.id = "daniel-dark-overlay"
        darkOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: 14999;
            pointer-events: none;
            animation: danielFadeIn 1s ease-in-out forwards;
        `
        document.body.appendChild(darkOverlay)
    }
    
    // Creepy text effect on screen
    let creepyText = get("daniel-creepy-text")
    if (!creepyText) {
        creepyText = document.createElement("div")
        creepyText.id = "daniel-creepy-text"
        creepyText.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 4vw;
            font-weight: 900;
            color: rgba(255, 0, 0, 0.1);
            text-shadow: 0 0 20px #FF0000, 0 0 40px #8B0000;
            pointer-events: none;
            z-index: 14998;
            white-space: nowrap;
            font-family: monospace;
            animation: danielRotateText 8s linear infinite;
            letter-spacing: 0.2em;
        `
        creepyText.textContent = "DANIEL WATCHES"
        document.body.appendChild(creepyText)
    }
    
    // Screen glitch effect
    setInterval(() => {
        if (player.daniel.horrorEnabled && Math.random() < 0.15) {
            const glitch = document.createElement("div")
            glitch.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(0deg, rgba(255,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.2) 100%);
                z-index: 14997;
                pointer-events: none;
                animation: danielGlitchFlash 0.1s ease-in-out forwards;
            `
            document.body.appendChild(glitch)
            setTimeout(() => glitch.remove(), 150)
        }
    }, 800)
    
    // Sound effect
    playSound("Polychromatical")
    
    // Start creepy periodic effects
    player.daniel.horrorInterval = setInterval(() => {
        if (player.daniel.horrorEnabled) {
            danielRandomHorrorEffect()
        }
    }, player.daniel.horrorEffectFrequency)
}

function danielDisableHorror() {
    const overlay = get("daniel-dark-overlay")
    if (overlay) {
        overlay.style.animation = "danielFadeOut 1s ease-in-out forwards"
        setTimeout(() => overlay.remove(), 1000)
    }
    
    const text = get("daniel-creepy-text")
    if (text) {
        text.style.animation = "danielFadeOut 0.5s ease-in-out forwards"
        setTimeout(() => text.remove(), 500)
    }
    
    if (player.daniel.horrorInterval) {
        clearInterval(player.daniel.horrorInterval)
        player.daniel.horrorInterval = null
    }
}

function danielRandomHorrorEffect() {
    const effects = [
        () => {
            // Shake screen
            const screen = get("blockContainer")
            if (screen) {
                screen.style.animation = "none"
                setTimeout(() => {
                    screen.style.animation = "danielShake 0.4s ease-in-out"
                }, 10)
            }
        },
        () => {
            // Flash red
            const flash = document.createElement("div")
            flash.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(139, 0, 0, 0.4);
                z-index: 14997;
                pointer-events: none;
                animation: danielFlash 0.5s ease-in-out forwards;
            `
            document.body.appendChild(flash)
            setTimeout(() => flash.remove(), 600)
        },
        () => {
            // Invert colors briefly
            const invert = document.createElement("div")
            invert.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.15);
                z-index: 14997;
                pointer-events: none;
                mix-blend-mode: screen;
                animation: danielInvert 0.3s ease-in-out forwards;
            `
            document.body.appendChild(invert)
            setTimeout(() => invert.remove(), 400)
        },
        () => {
            // Creepy message pop-up
            const messages = [
                "it's getting dark...",
                "can you feel it?",
                "daniel sees you...",
                "turn back...",
                "too late...",
                "welcome home..."
            ]
            const msg = messages[Math.floor(Math.random() * messages.length)]
            
            const popup = document.createElement("div")
            popup.style.cssText = `
                position: fixed;
                top: ${20 + Math.random() * 60}%;
                left: ${20 + Math.random() * 60}%;
                font-size: 2vw;
                color: #FF0000;
                text-shadow: 0 0 10px #8B0000, 0 0 20px #FF0000;
                z-index: 14997;
                pointer-events: none;
                font-weight: bold;
                font-family: monospace;
                animation: danielPop 2s ease-in-out forwards;
                opacity: 0.7;
            `
            popup.textContent = msg
            document.body.appendChild(popup)
            setTimeout(() => popup.remove(), 2500)
        }
    ]
    
    const effect = effects[Math.floor(Math.random() * effects.length)]
    effect()
}
