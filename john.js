
player.john = {
		spokeWith: false,
		questsCompleted: 0,
	}

const john = {
	opened: false,
	rejQuests: 0,
}

const johnQuests = [
	{
		story:"hi im johm n help me find my family and friends",
		ore_stry:"this feller went there and I need 10 of them back right now",
		ore:"josh emoji",
		amount:10,
		cave: false,
		layers:["dirtLayer", "dirtLayer2"],
		order:0 //just for convenience
	},
/*
	{
		...
		order:1
	},
*/
]

function completeQuest(){
	const thisQuest = johnQuests[player.john.questsCompleted]
	const thisOre = playerInventory[thisQuest.ore]
	const count = (thisOre.normalAmt + thisOre.electrifiedAmt + thisOre.radioactiveAmt + thisOre.explosiveAmt) || 0
	if(count >= thisQuest.amount){
		//yay quest is completed :DDD
		//if(thisQuest.order === 0)johnSay("somrthing is unlocked or now will happen")
		//else if(thisQuest.order === 2)johnSay("etc..")
		player.john.activeQuest++
		playSound("Johnical")
		return 
	}
	//quest is not yet completed :c
	insertIntoLayers({"ore":thisQuest.ore, "layers":thisQuest.layers, "useLuck":false});
	return
}
function rejectQuest(){
	//I have no idea what should happen here and if it should be possible to do at all
	rejQuests++
}

function checkJohn(x,y){
	if (currentWorld!==1.2 || //watr
		y!==(200e6-1) || 
		x!==1e6 //1e6 is actually 0 in game
	) { return false }
	else {
		stopMining()
		if (!player.john.spokeWith) //johnFirstEncounter()
		johnOpen()
		return true
	}
}

function johnOpen(){
	get("john-window-main").style.visibility="visible"
	john.opened = true
}
function johnClose(){
	get("john-window-main").style.visibility="hidden"
	john.opened = false
}

