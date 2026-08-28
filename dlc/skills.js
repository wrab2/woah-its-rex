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
	description:"Unlock the shop",
	maxLevel:1,
	cost:{
		"Ikuyo_Kita":1,
		"Kaito":1,
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