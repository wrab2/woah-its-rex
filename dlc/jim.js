let jim = {
	startedTrying: -1,
	opened: false,
	spawnJimNOW: false,
	spawnTimeout: 1000,
	fumodexOpen: false,
}

function spawnJim(){
	if (jim.startedTrying === -1) return jim.spawnJimNOW = false
	if (Date.now() - jim.startedTrying > jim.spawnTimeout) jim.spawnJimNOW = true
	else jim.spawnJimNOW = false
	
	if(jim.spawnJimNOW){
		stopMining()
		jimOpen()
	}
	return jim.spawnJimNOW
}
function tryingJim(stop=false){
	if (stop) jim.startedTrying = -1
	else if (jim.startedTrying === -1) jim.startedTrying = Date.now()
}

function jimSay(jimsWisdom){
	get("jim-speech-bubble").innerHTML = jimsWisdom
	get("jim-sayings-bubble-container").style.visibility = "visible"
}
function jimOpen(){
	//johnRefresh()
	get("jim-window-main").style.display="flex"
	get("jim-portrait").style.animationName="john-swim-up"
	get("jim-name").style.animationName="john-name-up"
	setTimeout(()=>playSound("Johnical"), 1000)
	jim.opened = true
	if(!player.jim.spokeWith) {
		jimSay("hi im JIM im sure you've heard about me im a brother of john, and i like TTO fish")
		player.jim.spokeWith = true
	}
}
function jimClose(){
	get("jim-window-main").style.display="none"
	get("jim-portrait").style.animationName=""
	get("jim-name").style.animationName=""
}

function jimHelpMe() {
	const helpOptions = get("jim-help-options")
	const helpTopics = {
		fumodex: "the fumodex keeps track of every fumo youve found, split into music, gacha, and touhou. the circle above a fumo shows its level, which increases when you collect it",
		skills: "the skill tree has upgrades, you unlock more skills once you hit levels on the skills before them (they cost fumos)",
		paths: "personally i wouldnt touch that 😨😨😨 but it lets you switch between which fumo path (music, touhou, gacha) you can get, you can increase active paths with the skill tree",
		stats: "theres many stats for finding fumos out in the wild, we have: fumo fortune (+1% chance for double drops, at 100 its +1% for triple, and so on), fumo power (its just luck), fumo speed (its just speed), and higher tier rods give you abilities like normal pickaxes",
		shop: "i have no clue what this will do",
		bait: "we have lots of bait over at the shop or something"
	}

	if (helpOptions.style.display === "flex") {
		helpOptions.style.display = "none"
		return
	}

	helpOptions.textContent = ""
	for (const [topic, answer] of Object.entries(helpTopics)) {
		const button = document.createElement("button")
		button.textContent = topic === "skillTree" ? "ask about the skill tree" : `ask about ${topic}`
		button.onclick = () => jimSay(answer)
		helpOptions.append(button)
	}
	helpOptions.style.display = "flex"
	jimSay("what do you want to know about? click one of these buttons")
}

function openFumodex(tab=null){
	if (!this.tab){
		this.tab = "music"
	}
	if (tab!==null){
		this.tab = tab
	}

	const card = get("fumo-card-copy")
	get("fumo-card-container").textContent=""
	for (const fumo of fumos.byType[this.tab]){
		let thisCard = card.cloneNode(true)
		thisCard.removeAttribute("id")
		const fumoName = fumo.name.replace(/_/g, " ")
		const fumoLevel = player.fumos[fumo.name][fumoStats.level]
		const fumoLocation = `found in ${fumo.layer}`
		for (const name of thisCard.getElementsByClassName("fumo-name")) name.textContent = fumoName
		for (const level of thisCard.getElementsByClassName("fumo-level")) level.textContent = fumoLevel
		thisCard.getElementsByClassName("fumo-image")[0].src = `media/fumo_fishing/${this.tab}/${fumo.name}.webp`
		for (const location of thisCard.getElementsByClassName("fumo-location")) location.innerHTML = fumoLocation

		get("fumo-card-container").append(thisCard)
	}
	get("fumodex").style.display="block"
	jim.fumodexOpen = true
}

function closeFumodex(){
	get("fumodex").style.display="none"
	jim.fumodexOpen = false
	jimSay(`by the way have you seen my hat and my polo ball they got stolen recently`)
}

function openSkillTree(){
	updateSkillTreeLines()
	get("skill-tree-window").style.display = "block"
}
function closeSkillTree(){
	get("skill-tree-window").style.display = "none"
}
function openPathSelect(open=true){
	get("path-container").textContent = ""
	if (open) {
		let row = document.createElement("tr")
		for(let i=0; i<3; i++){
			let toggle = document.createElement("td")
			toggle.class = "fumo-path-toggle"
			toggle.innerText = player.activePath[i] ? "Disable":"Enable"
			toggle.onclick = ()=>{toggleFumoPath(i)}
			row.append(toggle)
		}
		get("path-container").append(row)
		row = document.createElement("tr")
		function countFumos(path){
			let x=0
			fumos.byType[path].forEach(fumo => {
				x += player.fumos[fumo.name][fumoStats.found]
			})
			return x
		}
		for(let i=0; i<3; i++){
			let desc = document.createElement("td")
			desc.innerHTML = `
			<div>Path tier: ${player.upgrades2.fishing_rod.fumoPath[i]}</div>
			<div>total fumos found on this path: ${countFumos(fumos.pathNames[i])}</div>
			<div class="fumo-path-${player.activePath[i]?'enabled">ON':'disabled">OFF'}</div>
			`
			
			row.append(desc)
		}
		get("path-container").append(row)
		get("fumo-path-select").style.display = "block"
		return
	}
	get("fumo-path-select").style.display = "none"
}
function toggleFumoPath(path){
	let maxPaths = 1

	if(player.activePath[path] === 1){ 
		player.activePath[path] = 0 
	}
	else{
		let paths = String(player.activePath.join("").match(/1/g))
		if(paths.length < maxPaths || paths === "null"){
			player.activePath[path] = 1
		}
	}
	openPathSelect()
	createGenerationProbabilities();
}