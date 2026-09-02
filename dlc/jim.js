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
	jimSay("the fumodex is quite simple, theres 3 categories (each one levels up a different part of the skill tree, music is important early on), you can see the fumo levels with the circle above them, it increases each time you collect it")
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
		thisCard.getElementsByClassName("fumo-name")[0].textContent = fumo.name.replace(/_/g, " ")
		thisCard.getElementsByClassName("fumo-level")[0].textContent = player.fumos[fumo.name][fumoStats.level]
		thisCard.getElementsByClassName("fumo-image")[0].src = `media/fumo_fishing/${this.tab}/${fumo.name}.webp`
		thisCard.getElementsByClassName("fumo-location")[0].innerHTML = `found in ${fumo.layer}`

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