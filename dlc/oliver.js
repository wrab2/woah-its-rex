const oliver = {
    opened: false,
}

const oliverMessages = [
    "Oliver: I’m Oliver M. Emerald, and I’m here to keep the mine feeling a little more human.",
    "Oliver: I came down here with my wife and my three kids, so I’m hoping for a calm day of mining.",
    "Oliver: If you keep digging, I’ll keep talking, and maybe we’ll both make it back out.",
    "Oliver: The caverns are strange, but they’re not half as strange as a family trying to survive them."
]

function oliverOpen() {
    if (!player.oliver.spokeWith) player.oliver.spokeWith = true;
    oliverRefresh()
    get("oliver-window-main").style.visibility = "visible"
    oliver.opened = true
}

function oliverClose() {
    get("oliver-window-main").style.visibility = "hidden"
    oliver.opened = false
}

function oliverNext() {
    player.oliver.stage = (player.oliver.stage + 1) % oliverMessages.length
    oliverRefresh()
}

function oliverRefresh() {
    const stage = Math.min(player.oliver.stage, oliverMessages.length - 1)
    get("oliver-dialogue").textContent = oliverMessages[stage]
    get("oliver-status").textContent = `Oliver • ${stage + 1}/${oliverMessages.length}`
}
