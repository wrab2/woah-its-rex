let jerry = {
	opened: false,
	stage: 0,
}

const jerryMessages = [
	"Jerry: hey, I heard you were mining the weird stuff.",
	"Jerry: I collect strange little treasures and I think you might have a few.",
	"Jerry: keep going, and I might have something fun to give you later.",
	"Jerry: I'm Jerry, and I’m here to make the caverns a little sillier."
]

const jerrySkills = {
	mining: {name: "Mining", description: "Makes mining feel smoother and more rewarding.", color: "#7ec8ff"},
	smithing: {name: "Smithing", description: "Improves your ability to shape and sharpen gear.", color: "#b0b0b0"},
	crafting: {name: "Crafting", description: "Boosts your dexterity with handmade tools and trinkets.", color: "#ff9f7a"},
	fishing: {name: "Fishing", description: "Helps you reel in rare catches and odd treasures.", color: "#6be3ff"},
	woodcutting: {name: "Woodcutting", description: "Makes every chop a little more productive.", color: "#8c5a2b"},
	firemaking: {name: "Firemaking", description: "Keeps your flames burning brighter and longer.", color: "#ff6b4a"},
	cooking: {name: "Cooking", description: "Improves the quality of every meal and snack.", color: "#ffd166"},
	farming: {name: "Farming", description: "Makes crops grow with extra vigor.", color: "#7cff7c"},
	herblore: {name: "Herblore", description: "Enhances your potioncraft and herb knowledge.", color: "#9bff9b"},
	agility: {name: "Agility", description: "Lets you move with surprising speed and grace.", color: "#ffe082"},
	thieving: {name: "Thieving", description: "Improves your knack for sneaky gains.", color: "#8d8dff"},
	hunter: {name: "Hunter", description: "Makes your tracking and trapping more effective.", color: "#8aff7a"},
	runecrafting: {name: "Runecrafting", description: "Deepens your connection to strange magical energies.", color: "#b388ff"},
	prayer: {name: "Prayer", description: "Strengthens your focus and spiritual resolve.", color: "#ffffff"},
	magic: {name: "Magic", description: "Makes your spells more potent and precise.", color: "#4fc3f7"},
	ranged: {name: "Ranged", description: "Improves your aim and long-range precision.", color: "#9ccc65"},
	attack: {name: "Attack", description: "Sharpens your edge in close combat.", color: "#ef5350"},
	strength: {name: "Strength", description: "Boosts your raw power and force.", color: "#ff7043"},
	defence: {name: "Defence", description: "Hardens your resilience against harm.", color: "#90caf9"},
	hitpoints: {name: "Hitpoints", description: "Raises your endurance and staying power.", color: "#e57373"},
	slayer: {name: "Slayer", description: "Improves your monster-hunting prowess.", color: "#cfd8dc"},
	construction: {name: "Construction", description: "Builds your ability to craft lasting structures.", color: "#bcaaa4"},
	summoning: {name: "Summoning", description: "Strengthens your bond with summoned allies.", color: "#ce93d8"},
	dungeoneering: {name: "Dungeoneering", description: "Makes you better at surviving dangerous places.", color: "#4db6ac"},
	divination: {name: "Divination", description: "Heightens your intuition for hidden forces.", color: "#80deea"},
	invention: {name: "Invention", description: "Lets you assemble clever devices and tricks.", color: "#ffcc80"},
	archaeology: {name: "Archaeology", description: "Sharpens your eye for relics and buried stories.", color: "#b39ddb"},
	music: {name: "Music", description: "Tunes your rhythm and performance.", color: "#f48fb1"},
	cartography: {name: "Cartography", description: "Improves your grasp of maps and routes.", color: "#90a4ae"},
	astrology: {name: "Astrology", description: "Helps you interpret the patterns above.", color: "#9575cd"},
	geology: {name: "Geology", description: "Makes rock and stone feel a little less mysterious.", color: "#a1887f"},
	brewing: {name: "Brewing", description: "Improves your mastery over potions and drinks.", color: "#ffcc80"},
	alchemy: {name: "Alchemy", description: "Ups your transmutation and transformation craft.", color: "#80cbc4"},
	tinkering: {name: "Tinkering", description: "Boosts your mechanical curiosity and clever fixes.", color: "#b0bec5"},
	surveying: {name: "Surveying", description: "Improves your map-reading and land sense.", color: "#80d8ff"},
	sailing: {name: "Sailing", description: "Makes your seafaring more confident and efficient.", color: "#42a5f5"},
	navigation: {name: "Navigation", description: "Improves your sense of direction and travel.", color: "#64b5f6"},
	trapping: {name: "Trapping", description: "Helps you set up better snares and tricks.", color: "#a5d6a7"},
	beekeeping: {name: "Beekeeping", description: "Makes you more in tune with buzzing little helpers.", color: "#fdd835"},
	puppetry: {name: "Puppetry", description: "Adds flair to your string-pulling and performance.", color: "#ff8a65"},
	choir: {name: "Choir", description: "Improves your voice and harmony.", color: "#f06292"},
	dancing: {name: "Dancing", description: "Boosts your rhythm, grace, and timing.", color: "#ffb74d"},
	riddling: {name: "Riddling", description: "Sharpens your puzzle-solving sense.", color: "#ce93d8"},
	scavenging: {name: "Scavenging", description: "Makes you better at spotting useful scraps.", color: "#9e9e9e"},
	tinkology: {name: "Tinkology", description: "A strange science of clever contraptions.", color: "#ffcc80"},
	starcraft: {name: "Starcraft", description: "Improves your cosmic intuition and exploration.", color: "#8e24aa"},
	gossip: {name: "Gossip", description: "Makes your rumors and social knowledge sharper.", color: "#ffd54f"},
	fortune: {name: "Fortune", description: "Helps you sense luckier opportunities.", color: "#fdd835"},
	silliness: {name: "Silliness", description: "Boosts your chaotic, goofy energy.", color: "#ffb347"},
	discovery: {name: "Discovery", description: "Helps uncover strange secrets and surprises.", color: "#d8a2ff"}
}

function jerrySkillXpNeeded(level) {
	return 100 * level;
}

function jerryGetSkill(skillId) {
	return player.jerry.skills[skillId];
}

function jerryOpen(){
	if (!player.jerry.spokeWith) {
		player.jerry.spokeWith = true;
	}
	jerryRefresh()
	get("jerry-window-main").style.visibility = "visible"
	get("jerry-portrait").style.animationName = "john-swim-up"
	get("jerry-name").style.animationName = "john-name-up"
	setTimeout(() => playSound("Johnical"), 800)
	jerry.opened = true
}

function jerryClose(){
	get("jerry-window-main").style.visibility = "hidden"
	get("jerry-portrait").style.animationName = ""
	get("jerry-name").style.animationName = ""
	jerry.opened = false
}

function jerryNext(){
	player.jerry.stage = (player.jerry.stage + 1) % jerryMessages.length
	jerryRefresh()
}

function jerryToggleSkillTree(){
	const panel = get("jerry-skill-tree")
	if (panel.style.display === "block") {
		panel.style.display = "none"
	} else {
		panel.style.display = "block"
		jerryRefreshSkillTree()
	}
}

function jerrySelectSkill(skillId){
	player.jerry.activeSkill = skillId
	jerryRefreshSkillTree()
}

function jerryTrainSelectedSkill(){
	const skillId = player.jerry.activeSkill
	const skill = jerryGetSkill(skillId)
	if (skill.level >= 99) {
		jerrySay("Jerry: this skill is already maxed out at 99.")
		return
	}
	const gain = 25 + Math.floor(skill.level * 2)
	skill.xp += gain
	while (skill.xp >= jerrySkillXpNeeded(skill.level + 1)) {
		skill.xp -= jerrySkillXpNeeded(skill.level + 1)
		skill.level += 1
		if (skill.level >= 99) {
			skill.level = 99
			skill.xp = 0
			break
		}
	}
	jerryRefreshSkillTree()
	jerrySay(`Jerry: ${jerrySkills[skillId].name} is now level ${skill.level}!`)
}

function jerryBuildSkillButtons(){
	const container = get("jerry-skill-buttons")
	if (!container) return
	container.innerHTML = ""
	for (const key of Object.keys(jerrySkills)) {
		const skill = jerryGetSkill(key)
		const button = document.createElement("button")
		button.id = `jerry-skill-${key}`
		button.className = "jerry-skill-button"
		button.textContent = `${jerrySkills[key].name} ${skill.level}`
		button.onclick = () => jerrySelectSkill(key)
		container.appendChild(button)
	}
}

function jerryRefreshSkillTree(){
	if (!player.jerry.skills) player.jerry.skills = {}
	for (const key of Object.keys(jerrySkills)) {
		if (!player.jerry.skills[key]) player.jerry.skills[key] = {level: 1, xp: 0}
	}
	if (!player.jerry.activeSkill || !jerrySkills[player.jerry.activeSkill]) player.jerry.activeSkill = Object.keys(jerrySkills)[0]
	jerryBuildSkillButtons()
	const skillId = player.jerry.activeSkill
	const skill = jerryGetSkill(skillId)
	const def = jerrySkills[skillId]
	const nextLevelXp = jerrySkillXpNeeded(skill.level + 1)
	const progress = Math.min(100, Math.max(0, Math.round((skill.xp / nextLevelXp) * 100)))

	get("jerry-skill-title").textContent = `${def.name} • Level ${skill.level}`
	get("jerry-skill-description").textContent = `${def.description}`
	get("jerry-skill-progress").textContent = `${skill.xp}/${nextLevelXp} XP`
	get("jerry-skill-bar").style.width = `${progress}%`
	get("jerry-skill-bar").style.background = def.color
	get("jerry-skill-train-button").textContent = skill.level >= 99 ? "Maxed Out" : `Train ${def.name}`

	for (const key of Object.keys(jerrySkills)) {
		const button = get(`jerry-skill-${key}`)
		if (!button) continue
		button.style.borderColor = player.jerry.activeSkill === key ? "#ffffff" : "#7a7a7a"
		button.style.backgroundColor = player.jerry.activeSkill === key ? "#2d2d2d" : "#1b1b1b"
		button.textContent = `${jerrySkills[key].name} ${jerryGetSkill(key).level}`
	}
}

function jerryRefresh(){
	const messageIndex = Math.min(player.jerry.stage, jerryMessages.length - 1)
	get("jerry-dialogue").textContent = jerryMessages[messageIndex]
	get("jerry-status").textContent = `Jerry • ${messageIndex + 1}/${jerryMessages.length}`
	jerryRefreshSkillTree()
}
