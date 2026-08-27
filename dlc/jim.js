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
function startSkillTreeDrag() {
	let totalX=0,totalY=0
	let cursorPos=[]
	let totalOffset=[0,0]
	//element position
	const tree = get("skill-tree")
	let rect = tree.getBoundingClientRect()
	let baseOffset = [
		Number(window.getComputedStyle(get("skill-tree"), 10).marginLeft.replace("px","")),
		Number(window.getComputedStyle(get("skill-tree"), 10).marginTop.replace("px",""))
	]
	let posX = rect.left - baseOffset[0]
	let posY = rect.top - baseOffset[1]

	let move = (e) => {
		if(cursorPos[0] === undefined){
			cursorPos[0] = e.clientX
			cursorPos[1] = e.clientY
		}
		//drag treshold
		if(totalX<15 && totalY<15){
			totalX += Math.abs(e.clientX-cursorPos[0])
			totalY += Math.abs(e.clientY-cursorPos[1])
		}
		totalOffset[0]+=e.clientX-cursorPos[0]
		totalOffset[1]+=e.clientY-cursorPos[1]

		cursorPos[0] = e.clientX
		cursorPos[1] = e.clientY

		if(totalX>15 || totalY>15){
			//this doesn't work very well
			if( 
			baseOffset[0]>posX + totalOffset[0] && 
			rect.width > Math.abs(posX + totalOffset[0] - baseOffset[0])
			){
				tree.style.left = posX + totalOffset[0]
			}
			if( 
			baseOffset[1]>posY + totalOffset[1] && 
			rect.height > Math.abs(posY + totalOffset[1] - baseOffset[1])
			){
				tree.style.top = posY + totalOffset[1]
			}
		}
	}

	let leave = ()=>{
		get("skill-tree-window").removeEventListener("pointerup", leave)
		get("skill-tree-window").removeEventListener("pointerleave", leave)
		get("skill-tree-window").removeEventListener("pointermove", move)
	}

	get("skill-tree-window").addEventListener("pointermove", move)
	get("skill-tree-window").addEventListener("pointerleave",leave)
	get("skill-tree-window").addEventListener("pointerup", leave)

}

let playerSkillObj = []

let tempSkills = {
	skillIdCheck: new Set,
	boundsX: [0,0],
	boundsY: [0,0],
	ctx: undefined,//defined in init()
}
let skillList = []

function resizeSkillTree(){
	for(const skill of skillList){
		const card = get("skill-tree-node-copy")
		let thisCard = card.cloneNode(true)
		thisCard.removeAttribute("id")
		thisCard.getElementsByClassName("skill-tree-node-title")[0].textContent = skill.name
		thisCard.getElementsByClassName("skill-tree-node-level")[0].textContent = "level:0"
		thisCard.getElementsByClassName("skill-tree-node-cost")[0].innerHTML = "fumofumo:1"
		thisCard.style=`
				left: ${400*(skill.position[0]+Math.abs(tempSkills.boundsX[0]))};
				bottom: ${180*(skill.position[1]+Math.abs(tempSkills.boundsY[0]))}
		`
		get("skill-tree-nodes").append(thisCard)
	}

	//250 and 100 is node dimensions, 400 and 180 is spacing from 5 lines above
	let width = 250+400*(Math.abs(tempSkills.boundsX[0])+Math.abs(tempSkills.boundsX[1]))
	get("skill-tree-lines").width = width
	get("skill-tree").style.width = width+"px"
	get("skill-tree-nodes").style.width = width+"px"
	let height = 100+180*(Math.abs(tempSkills.boundsY[0])+Math.abs(tempSkills.boundsY[1]))
	get("skill-tree-lines").height = height
	get("skill-tree").style.height = height+"px"
	get("skill-tree-nodes").style.height = height+"px"
	get("skill-tree").style.left = `${-1*Math.abs(tempSkills.boundsX[0])*400+125}px`
	get("skill-tree").style.top = `${-1*Math.abs(tempSkills.boundsY[1])*180}px`
}

function updateSkillTreeLines(){
	tempSkills.ctx.clearRect(0,0,get("skill-tree-lines").width,get("skill-tree-lines").height)
	for(const skill of skillList){
		skill.drawConnectors()
	}
}

class Skill {
	constructor(skill){
		if(tempSkills.skillIdCheck.has(skill.id)){
			alert(`a very bad thing has happened with skill id ${skill.id} (it's duplicated)`)
		}
		playerSkillObj.push(0)
		this.id = skill.id
		tempSkills.skillIdCheck.add(this.id)
		this.name = skill.name
		this.description = skill.description
		this.cost = skill.cost
		this.maxLevel = skill.maxLevel
		this.position = skill.position
		this.parents = skill.parents

		tempSkills.boundsX[0] = Math.min(this.position[0], tempSkills.boundsX[0])
		tempSkills.boundsX[1] = Math.max(this.position[0], tempSkills.boundsX[1])
		tempSkills.boundsY[0] = Math.min(this.position[1], tempSkills.boundsY[0])
		tempSkills.boundsY[1] = Math.max(this.position[1], tempSkills.boundsY[1])
		
		skillList[this.id] = this

	}
	drawConnectors(){
		//add lines to the background
		let ctx = tempSkills.ctx
		for(const parent of this.parents){
			ctx.lineWidth = 25
			ctx.strokeStyle = "blue"
			ctx.beginPath()
			ctx.moveTo(
				125+400*(Math.abs(tempSkills.boundsX[0])+this.position[0]),
				-300+180*(Math.abs(tempSkills.boundsY[1])+this.position[1])
			)
			ctx.lineTo(
				125+400*(Math.abs(tempSkills.boundsX[0])+skillList[parent[0]].position[0]),
				-300+180*(Math.abs(tempSkills.boundsY[1])+skillList[parent[0]].position[1])
			)
			ctx.stroke()
		}

	}
	lock(){
		//lock the cell if it's not unlocked
	}
	update(){
		//update currencies and effect displays
	}
	open(){
		//why did I add these empty functions
	}
}
let skills = {
 
}

new Skill({
	id:0,
	name: "test0",
	description:"an amazing description test",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [0,0],
	parents: [],
})
new Skill({
	id:1,
	name: "test1",
	description:"an amazing description test 2",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [-0.5,1],
	parents: [[0,1]],
})
new Skill({
	id:2,
	name: "test2",
	description:"an amazing description test 3",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [0.5,2],
	parents: [[0,1]],
})
new Skill({
	id:3,
	name: "test3",
	description:"an amazing description test 3",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [-3,-2],
	parents: [[0,1]],
})
new Skill({
	id:4,
	name: "test4",
	description:"an amazing description test 4",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [1.3,4],
	parents: [[2,1]],
})

if(Math.max(...tempSkills.skillIdCheck)+1 !== tempSkills.skillIdCheck.size )alert("some skill id is missing")