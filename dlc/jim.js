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