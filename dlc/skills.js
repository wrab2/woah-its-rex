let tempSkills = {
	skillIdCheck: new Set,
	boundsX: [0,0],
	boundsY: [0,0],
	ctx: undefined,//defined in init()
	spacing: {
		x:400,
		y:180
	},
	openedNode: undefined,
	dragging: 0,
	canvasSize: [0,0],
}

function startSkillTreeDrag() {
	let totalX=0,totalY=0
	let cursorPos=[]
	let totalOffset=[0,0]
	//element position
	const tree = get("skill-tree")
	let rect = tree.getBoundingClientRect()
	let posX = Number(tree.style.left.replace("px",""))
	let posY = Number(tree.style.top.replace("px",""))

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
			tempSkills.dragging = true

			rect = tree.getBoundingClientRect()
			let left = posX + totalOffset[0]
			left = Math.min(0, left)
			left = Math.max(-1*rect.width, left)
			tree.style.left = left
			
			let top = posY + totalOffset[1]
			top = Math.min(0, top)
			top = Math.max(-1*rect.height, top)
			tree.style.top = top
		}
	}

	let leave = ()=>{
		get("skill-tree-window").removeEventListener("pointerup", leave)
		get("skill-tree-window").removeEventListener("pointerleave", leave)
		get("skill-tree-window").removeEventListener("pointermove", move)
		if(tempSkills.dragging === true)tempSkills.dragging = Date.now()
	}

	get("skill-tree-window").addEventListener("pointermove", move)
	get("skill-tree-window").addEventListener("pointerleave",leave)
	get("skill-tree-window").addEventListener("pointerup", leave)

}

let playerSkillObj = []

let skillList = []

function setupSkillTree(){
	for(const skill of skillList){
		const card = get("skill-tree-node-copy")
		let thisCard = card.cloneNode(true)
		thisCard.removeAttribute("id")
		thisCard.getElementsByClassName("skill-tree-node-title")[0].textContent = skill.name
		thisCard.getElementsByClassName("skill-tree-node-level")[0].textContent = "level:0"
		thisCard.getElementsByClassName("skill-tree-node-cost")[0].innerHTML = "fumofumo:1"
		thisCard.style=`
			left: ${tempSkills.spacing.x*(skill.position[0]+Math.abs(tempSkills.boundsX[0]))};
			bottom: ${tempSkills.spacing.y*(skill.position[1]+Math.abs(tempSkills.boundsY[0]))}
		`
		thisCard.addEventListener('click', skill.open)
		get("skill-tree-nodes").append(thisCard)
	}

	//250 and 100 is node dimensions, 400 and 180 is arbitrarily chosen spacing from 5 lines above
	let width = 250+tempSkills.spacing.x*(Math.abs(tempSkills.boundsX[0])+Math.abs(tempSkills.boundsX[1]))
	get("skill-tree-lines").width = width
	tempSkills.canvasSize[0] = width
	get("skill-tree").style.width = width+"px"
	get("skill-tree-nodes").style.width = width+"px"
	let height = 100+tempSkills.spacing.y*(Math.abs(tempSkills.boundsY[0])+Math.abs(tempSkills.boundsY[1]))
	get("skill-tree-lines").height = height
	tempSkills.canvasSize[1] = height
	get("skill-tree").style.height = height+"px"
	get("skill-tree-nodes").style.height = height+"px"
	//focus on 0,0
	get("skill-tree").style.left = `${-1*Math.abs(tempSkills.boundsX[0])*tempSkills.spacing.x-125}px`
	get("skill-tree").style.top = `${-1*Math.abs(tempSkills.boundsY[1])*tempSkills.spacing.y-150}px`
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
		this.open = this.open.bind(this)
	}
	drawConnectors(){
		let ctx = tempSkills.ctx
		for(const parent of this.parents){
			let center = tempSkills.canvasSize[1]/2
			let flipOverX = (point) => {
				return (point-center)*-1+center
			}
			ctx.lineWidth = 25
			ctx.strokeStyle = "blue"
			ctx.beginPath()
			ctx.moveTo(
				125+tempSkills.spacing.x*(Math.abs(tempSkills.boundsX[0])+this.position[0]),
				flipOverX(50+tempSkills.spacing.y*(Math.abs(tempSkills.boundsY[0])+this.position[1]))
			)
			ctx.lineTo(
				125+tempSkills.spacing.x*(Math.abs(tempSkills.boundsX[0])+skillList[parent[0]].position[0]),
				flipOverX(50+tempSkills.spacing.y*(Math.abs(tempSkills.boundsY[0])+skillList[parent[0]].position[1]))
			)
			ctx.stroke()
		}

	}
	open(scope){
		if(tempSkills.dragging === true || Date.now()-tempSkills.dragging < 50)return
		if(tempSkills.openedNode) tempSkills.openedNode.classList.remove("st-opened")
		tempSkills.openedNode = scope.currentTarget
		scope.currentTarget.classList.add("st-opened")
		get("skill-tree-description").textContent = this.description
	}
	lock(){
		//lock the cell if it's not unlocked
	}
	update(){
		//update currencies and effect displays
	}
}
let skills = {
 
}

new Skill({
	id:0,
	name: "Welcome to fumo fishing",
	description:"Unlocks the shop",
	maxLevel:1,
	cost:{
		"Kaito":1,
	},
	position: [0,0],
	parents: [],
})
new Skill({
	id:1,
	name: "fumo-ical speed",
	description:"increases your speed by 1.5x while using a fishing rod",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [-1,1],
	parents: [[0,1]],
})
new Skill({
	id:2,
	name: "tier up",
	description:"increases your tier (every fumo has a tier,  you need to be at that tier or above to find it)",
	maxLevel:7,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [-2,2],
	parents: [[1,1]],
})
new Skill({
	id:3,
	name: "bwa",
	description:"placeholder skill",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [-3,3],
	parents: [[2,1]],
})
new Skill({
	id:4,
	name: "branching out",
	description:"unlocks the gacha and touhou skills",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [-4,4],
	parents: [[3,1]],
})
new Skill({
	id:5,
	name: "beginner bait",
	description:"doubles stock of bait in the shop",
	maxLevel:3,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-5,3],
	parents: [[4,1]],
})
new Skill({
	id:6,
	name: "placeholder",
	description:"s",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Chen":1,
	},
	position: [-3,5],
	parents: [[4,1]],
})
new Skill({
	id:7,
	name: "forbidden knowledge",
	description:"+5% chance to not consume bait (ADDITIVE)",
	maxLevel:5,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-6,4],
	parents: [[5,1]],
})
new Skill({
	id:8,
	name: "forbidden-er knowledge",
	description:"+5% chance to not consume bait (MULTIPLICATIVE)",
	maxLevel:15,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-7,5],
	parents: [[7,3]],
})
new Skill({
	id:9,
	name: "forbidden-est knowledge",
	description:"^1.01 chance to not consume bait",
	maxLevel:3,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-8,6],
	parents: [[8,10]],
})
new Skill({
	id:10,
	name: "bait fortune",
	description:"+10% chance to get 1 extra bait when you find bait",
	maxLevel:10,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-6,2],
	parents: [[5,1]],
})
new Skill({
	id:11,
	name: "bait theivery",
	description:"makes bait fortune also work with the shop",
	maxLevel:3,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-7,1],
	parents: [[10,3]],
})
new Skill({
	id:12,
	name: "scavenge",
	description:"decreases the rarity of bait, by 10,000 each upgrade",
	maxLevel:5,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-8,0],
	parents: [[11,1]],
})
new Skill({
	id:13,
	name: "jims hat",
	description:"gives jim a brand new hat, increases the number of paths active at once by 1, and unlocks more (optional) upgrades",
	maxLevel:1,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-8,3],
	parents: [[12,3],[9,1]],
})
new Skill({
	id:14,
	name: "dark patterns",
	description:"the first time you buy bait from the shop, the amount you earn will be multiplied by 100, furthermore if this is at level 2 this also applies to bait found (both can be triggered daily)",
	maxLevel:2,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-6.5,3],
	parents: [[13,1]],
})
new Skill({
	id:15,
	name: "loyalty points",
	description:"jim airlines promotes you to a platinum customer due to your purchases (decreases cost of bait by 10%)",
	maxLevel:3,
	cost:{
		"Rapunzel":1,
	
	},
	position: [-9,3],
	parents: [[13,1]],
})

if(Math.max(...tempSkills.skillIdCheck)+1 !== tempSkills.skillIdCheck.size )alert("some skill id is missing")