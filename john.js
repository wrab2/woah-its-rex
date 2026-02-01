
player.john = {
		spokeWith: true,
		questsCompleted: [],
		currentQuest: 11,
	}

const john = { //this doesn't presist between refreshes
	opened: false,
	rejectedQuests: 0,
}
const johnQuests = [
	{
		story:"my old coworker johan, please go find him, hes currently taking care of all the doors, but he forgot to give me back my 20 bucks so please bring back 5 of him (so i get 120 dollars 🤑)",
		ore_stry:"jonah is found in the door layer in W2",
		ore:"🤽🏻",
		amount:5,
		cave: false,
		layers:["doorLayer"],
		order:1  
	},
	{
		story:"please help me find jackson, i need to tell him about the WCP, get me 2 of him, (so that i can get his reaction twice)",
		ore_stry:"jackson is found in the europe layer (vatican city) in SR1",
		ore:"🤽🏼",
		amount:2,
		cave: false,
		layers:["vaLayer"],
		order:2  
	},
		{
		story:"locate noah, he was really nice to me when i visited his library and i want to thank him for introducing me to checkmarxism, get me 5 of him though because 5 is better than 1",
		ore_stry:"noah is found in the chess layer in W2",
		ore:"🤽🏽",
		amount:5,
		cave: false,
		layers:["chessLayer"],
		order:3  
	},
		{
		story:"help me find ron, im pretty sure hes still sleeping at his house, ever since i kicked him out of the WCP he became a alcoholic (get me 5 of him so i can make fun of him frice)",
		ore_stry:"ron is found in the tv layer in W2",
		ore:"🤽🏾",
		amount:5,
		cave: false,
		layers:["tvLayer"],
		order:4  
	},
		{
		story:"get me johan, i need to ask him if he still has the receipt for the suit he bought me (get me 5 of him though because he might not have the full receipt)",
		ore_stry:"johan is found in the barrier layer (the black X) in W2",
		ore:"🤽🏿",
		amount:5,
		cave: false,
		layers:["barrierLayer"],
		order:5  
	},
		{
		story:"im really hungry right now so can you get me 5 shawns, theyre currently holding a party, i need to ask them if they can give me a spare slice of cake",
		ore_stry:"shawn is found in the cake (silly) layer in W1",
		ore:"🤽🏻‍♂️",
		amount:5,
		cave: false,
		layers:["sillyLayer"],
		order:6  
	},
		{
		story:"i want to catch up with jay, after i took over the feline empire they went off to conquer the cactus layer (like any true cactus monarch #reference), please get me 5 of them though because thats a prime number",
		ore_stry:"jay is found in the cactus layer in W1",
		ore:"🤽🏼‍♂️",
		amount:5,
		cave: false,
		layers:["cactusLayer"],
		order:7  
	},
		{
		story:"pick up 5 rowans please, i need them for a very important deal",
		ore_stry:"rowan is found in the jim layer in watr world",
		ore:"🤽🏽‍♂️",
		amount:5,
		cave: false,
		layers:["jimLayer"],
		order:8  
	},
		{
		story:"i need you to find me 5 dons, NOW, my nuclear reactors are not functioning correctly without them nearby (they are highly radioactive)",
		ore_stry:"ron is found in the radioactive layer in W1",
		ore:"🤽🏾‍♂️",
		amount:5,
		cave: false,
		layers:["radioactiveLayer"],
		order:9  
	},
		{
		story:"find me jordan (not the country), they need to show up to my housewarming party get me 2 of them though because thats not a power of 3",
		ore_stry:"jordan is found in the seychelles layer (africa) in SR1",
		ore:"🤽🏿‍♂️",
		amount:2,
		cave: false,
		layers:["scLayer"],
		order:10  
	},
		{
		story:"janine is my sister (jane)'s bestie, please find 1 of her",
		ore_stry:"janine is found in the bacteria caves",
		ore:"🤽🏻‍♀️",
		amount:1,
		cave: true,
		layers:["bacteriaCave"],
		order:11 
	},
		{
		story:"me and joan were planning on going to the new adachi rei concert, please Find her so she can give me my ticket",
		ore_stry:"joan is found in the music caves",
		ore:"🤽🏼‍♀️",
		amount:1,
		cave: true,
		layers:["musicCave"],
		order:12 
	},
		{
		story:"holdon i brb rq my cat can tell you about johanna (joans sister) JHhhhhhhhhhHHN BNJHU8I97U0-OI999999999999999999999,fssssssssssssssssssssssssssssssssssswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww99999999999999999999999999999999999999999999999999999999UUUUUUUUUUUUUUUUUUUUUUUUUUUU",
		ore_stry:"johanna is found in the abysstone caves",
		ore:"🤽🏽‍♀️",
		amount:1,
		cave: true,
		layers:["abysstoneCave"],
		order:13 
	},
		{
		story:"i was jocelyns successor in the WCP, so please get me her",
		ore_stry:"jocelyn is found in the jane caves (found in watr world)",
		ore:"🤽🏾‍♀️",
		amount:1,
		cave: true,
		layers:["janeCave"],
		order:14 
	},
		{
		story:"this is rowen's cousin, please get me 1 of her",
		ore_stry:"rowhen is found in the biohazard caves",
		ore:"🤽🏿‍♀️",
		amount:1,
		cave: true,
		layers:["biohazardCave"],
		order:15 
	},
			{
		story:"can you please please please please please get me my water buffalo back, hes our family pet, i miss him so much i would be eternally greatful if you did, i remember all my good times with him, we always called him water buffalo 🐃",
		ore_stry:"water buffalo 🐃 is found in the forge, you might want to do this one last as its the hardest by far (and you cant do it before 10 requests)",
		ore:"🐃",
		amount:1,
		cave: false,
		layers:[""], // Hes in the forge
		order:16 
	},
			{
		story:"please get me uhh... who the hell is this?",
		ore_stry:"Evil John is found in ??? (you might want to check milestones)",
		ore:"evilJohn",
		amount:10,
		cave: false,
		layers:[""], // Hes a CLT from denying 5 john requests, but once you get him you can get him anytime (so you dont get softlocked)
		order:17 
	},
			{
		story:"i lost my roomate, i cant find him anywhere so you gotta find him for me",
		ore_stry:"josh is found in the john layer (sometimes)",
		ore:"josh",
		amount:10,
		cave: false,
		layers:[""], // repeating john layer CLT
		order:18 
	},
]

function johnActivateQuest() {
	if(player.john.spokeWith && player.john.currentQuest !== undefined){
		const thisQuest = johnQuests[player.john.currentQuest]
		if(thisQuest.cave){
			return insertIntoCaves({"ore":thisQuest.ore, "layers":thisQuest.layers, "useLuck":false});
		}
		if (thisQuest.ore === "🐃") return
		if (thisQuest.ore === "evilJohn") return
		if (thisQuest.ore === "josh") return
		insertIntoLayers({"ore":thisQuest.ore, "layers":thisQuest.layers, "useLuck":false});
	}
}
function johnStopQuest() {
	if(player.john.spokeWith && player.john.currentQuest !== undefined){
		const thisQuest = johnQuests[player.john.currentQuest]
		if(thisQuest.cave){
			return removeFromCaves({"ore":thisQuest.ore, "layers":thisQuest.layers, "useLuck":false});
		}
		if (thisQuest.ore === "🐃") return
		if (thisQuest.ore === "evilJohn") return
		if (thisQuest.ore === "josh") return
		removeFromLayers({"ore":thisQuest.ore, "layers":thisQuest.layers})
	}
}

function completeQuest(){
	const thisQuest = johnQuests[player.john.currentQuest]//johnQuests.filter((e)=> e.order === player.john.currentQuest)
	const thisOre = playerInventory[thisQuest.ore]
	
	const count = (thisOre.normalAmt + thisOre.electrifiedAmt + thisOre.radioactiveAmt + thisOre.explosiveAmt) || 0
	if(true || count >= thisQuest.amount){
		//yay quest is completed :DDD
        
		player.john.questsCompleted.push(thisQuest.order)
		johnStopQuest()
		/* potentially john will announce his rewards :cat2: !!?? :exploding_head:
		if(player.john.questsCompleted.length === 1)johnSay("somrthing is unlocked or now will happen")
		else if(player.john.questsCompleted.length === 2)johnSay("etc..")
		*/
		let questPool = johnQuests.filter((e)=>!player.john.questsCompleted.includes(e.order))
		if (questPool.length > 0){
			let nextQuest =  questPool[Math.floor(Math.random()*questPool.length)]
			player.john.currentQuest = johnQuests.indexOf(nextQuest)
		}
		playSound("Johnical")
	}
	johnActivateQuest()
	johnRefresh()
	return
}
function rejectQuest(){
	john.rejectedQuests++
}

function checkJohn(x,y){
	if (currentWorld!==1.2 || //watr
		y!==(200-1) || //put it 199, will be at 199,999,999 
		x!==1e6 //1e6 is actually 0 in game
	) { return false }
	else {
		stopMining()
		if (!player.john.spokeWith) johnFirstEncounter()
		johnOpen()
		return true
	}
}

function johnFirstEncounter(){
	player.john.spokeWith = true
	johnActivateQuest()
	johnSay("hi im johm n help me find my famil y and friends")
}

function johnOpen(){
	johnRefresh()
	get("john-window-main").style.visibility="visible"
	get("john-portrait").style.animationName="john-swim-up"
	get("john-name").style.animationName="john-name-up"
	setTimeout(()=>playSound("Johnical"), 1000)
	john.opened = true
}
function johnClose(){
	get("john-window-main").style.visibility="hidden"
	get("sayings-bubble-container").style.visibility = "hidden"
	get("john-portrait").style.animationName=""
	get("john-name").style.animationName=""
	john.opened = false
}

function johnRefresh() { //updates values in john window
	let quest = johnQuests[player.john.currentQuest]
	get("top-john-speech-bubble").textContent=`${quest.story}`
	get("john-ore-story").textContent=`${quest.ore_stry}`
	get("john-quest-progress").textContent=`${quest.ore} ${playerInventory[quest.ore].normalAmt}/${quest.amount}`
}

function johnSay(johnsWisdom){
	get("right-john-speech-bubble").textContent = johnsWisdom
	get("sayings-bubble-container").style.visibility = "visible"
}