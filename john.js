
player.john = {
		spokeWith: false,
		questsCompleted: 0,
	}

const john = {
	opened: false,
	rejQuests: 0,
}
// i did everything but put the order cause . ! its gotta be like a slot machine ! ! !
const johnQuests = [
	{
		story:"my old coworker johan, please go find him, hes currently taking care of all the doors, but he forgot to give me back my 20 bucks so please bring back 5 of him (so i get 120 dollars 🤑)",
		ore_stry:"jonah is found in the door layer in W2",
		ore:"🤽🏻",
		amount:5,
		cave: false,
		layers:["doorLayer"],
		order:0 //just for convenience
	},
	{
		story:"please help me find jackson, i need to tell him about the WCP, get me 2 of him, (so that i can get his reaction twice)",
		ore_stry:"jackson is found in the europe layer (vatican city) in SR1",
		ore:"🤽🏼",
		amount:2,
		cave: false,
		layers:["vaLayer"],
		order:0 //just for convenience
	},
		{
		story:"locate noah, he was really nice to me when i visited his library and i want to thank him for introducing me to checkmarxism, get me 5 of him though because 5 is better than 1",
		ore_stry:"noah is found in the chess layer in W2",
		ore:"🤽🏽",
		amount:5,
		cave: false,
		layers:["chessLayer"],
		order:0 //just for convenience
	},
		{
		story:"help me find ron, im pretty sure hes still sleeping at his house, ever since i kicked him out of the WCP he became a alcoholic (get me 5 of him so i can make fun of him frice)",
		ore_stry:"ron is found in the tv layer in W2",
		ore:"🤽🏾",
		amount:5,
		cave: false,
		layers:["tvLayer"],
		order:0 //just for convenience
	},
		{
		story:"get me johan, i need to ask him if he still has the receipt for the suit he bought me (get me 5 of him though because he might not have the full receipt)",
		ore_stry:"ron is found in the barrier layer (the black X) in W2",
		ore:"🤽🏿",
		amount:5,
		cave: false,
		layers:["barrierLayer"],
		order:0 //just for convenience
	},
		{
		story:"im really hungry right now so can you get me 5 shawns, theyre currently holding a party, i need to ask them if they can give me a spare slice of cake",
		ore_stry:"shawn is found in the cake (silly) layer in W1",
		ore:"🤽🏻‍♂️",
		amount:5,
		cave: false,
		layers:["sillyLayer"],
		order:0 //just for convenience
	},
		{
		story:"i want to catch up with jay, after i took over the feline empire they went off to conquer the cactus layer (like any true cactus monarch #reference), please get me 5 of them though because thats a prime number",
		ore_stry:"jay is found in the cactus layer in W1",
		ore:"🤽🏼‍♂️",
		amount:5,
		cave: false,
		layers:["cactusLayer"],
		order:0 //just for convenience
	},
		{
		story:"pick up 5 rowans please, i need them for a very important deal",
		ore_stry:"rowan is found in the jim layer in watr world",
		ore:"🤽🏽‍♂️",
		amount:5,
		cave: false,
		layers:["jimLayer"],
		order:0 //just for convenience
	},
		{
		story:"i need you to find me 5 dons, NOW, my nuclear reactors are not functioning correctly without them nearby (they are highly radioactive)",
		ore_stry:"ron is found in the radioactive layer in W1",
		ore:"🤽🏾‍♂️",
		amount:5,
		cave: false,
		layers:["radioactiveLayer"],
		order:0 //just for convenience
	},
		{
		story:"find me jordan (not the country), they need to show up to my housewarming party get me 2 of them though because thats not a power of 3",
		ore_stry:"jordan is found in the seychelles layer (africa) in SR1",
		ore:"🤽🏿‍♂️",
		amount:2,
		cave: false,
		layers:["scLayer"],
		order:0 //just for convenience
	},
		{
		story:"janine is my sister (jane)'s bestie, please find 1 of her",
		ore_stry:"janine is found in the bacteria caves",
		ore:"🤽🏻‍♀️",
		amount:1,
		cave: true,
		layers:["bacteriaCave"],
		order:0 //just for convenience
	},
		{
		story:"me and joan were planning on going to the new adachi rei concert, please Find her so she can give me my ticket",
		ore_stry:"joan is found in the music caves",
		ore:"🤽🏼‍♀️",
		amount:1,
		cave: true,
		layers:["musicCave"],
		order:0 //just for convenience
	},
		{
		story:"holdon i brb rq my cat can tell you about johanna (joans sister) JHhhhhhhhhhHHN BNJHU8I97U0-OI999999999999999999999,fssssssssssssssssssssssssssssssssssswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww99999999999999999999999999999999999999999999999999999999UUUUUUUUUUUUUUUUUUUUUUUUUUUU",
		ore_stry:"johanna is found in the abysstone caves",
		ore:"🤽🏽‍♀️",
		amount:1,
		cave: true,
		layers:["abysstoneCave"],
		order:0 //just for convenience
	},
		{
		story:"i was jocelyns successor in the WCP, so please get me her",
		ore_stry:"jocelyn is found in the jane caves (found in watr world)",
		ore:"🤽🏾‍♀️",
		amount:1,
		cave: true,
		layers:["janeCave"],
		order:0 //just for convenience
	},
		{
		story:"this is rowen's cousin, please get me 1 of her",
		ore_stry:"rowhen is found in the biohazard caves",
		ore:"",
		amount:1,
		cave: true,
		layers:["biohazardCave"],
		order:0 //just for convenience
	},
			{
		story:"can you please please please please please get me my water buffalo back, hes our family pet, i miss him so much i would be eternally greatful if you did, i remember all my good times with him, we always called him water buffalo 🐃",
		ore_stry:"water buffalo 🐃 is found in the forge, you might want to do this one last as its the hardest by far (and you cant do it before 10 requests)",
		ore:"🐃",
		amount:1,
		cave: false,
		layers:[""], // Hes in the forge
		order:0 //just for convenience
	},
			{
		story:"please get me uhh... who the hell is this?",
		ore_stry:"Evil John is found in ??? (you might want to check milestones)",
		ore:"evilJohn",
		amount:10,
		cave: false,
		layers:[""], // Hes a CLT from denying 5 john requests, but once you get him you can get him anytime (so you dont get softlocked)
		order:0 //just for convenience
	},
			{
		story:"i lost my roomate, i cant find him anywhere so you gotta find him for me",
		ore_stry:"josh is found in the john layer (sometimes)",
		ore:"josh",
		amount:10,
		cave: false,
		layers:[""], // repeating john layer CLT
		order:0 //just for convenience
	},
]

function completeQuest(){
	const thisQuest = johnQuests[player.john.questsCompleted]
	const thisOre = playerInventory[thisQuest.ore]
	/*commented out because not working rn
	const count = (thisOre.normalAmt + thisOre.electrifiedAmt + thisOre.radioactiveAmt + thisOre.explosiveAmt) || 0
	if(count >= thisQuest.amount){
		//yay quest is completed :DDD
		//if(thisQuest.order === 0)johnSay("somrthing is unlocked or now will happen")
		//else if(thisQuest.order === 2)johnSay("etc..")
		player.john.activeQuest++
		playSound("Johnical")
		return 
	}
	*/
	//quest is not yet completed :c
	get("john-speech").textContent=`${thisQuest.story}`
	get("john-ore-story").textContent=`${thisQuest.ore_stry}`
	get("john-quest-progress").textContent=`${thisQuest.ore} 0/${thisQuest.amount}`
	//insertIntoLayers({"ore":thisQuest.ore, "layers":thisQuest.layers, "useLuck":false});
	return
}
function rejectQuest(){
	//I have no idea what should happen here and if it should be possible to do at all
	rejQuests++
}

function checkJohn(x,y){
	if (currentWorld!==1.2 || //watr
		y!==(200e3-1) || //temporarily e3, will be e6 
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
	get("john-portrait").style.animationName="john-swim-up"
	get("john-name").style.animationName="john-name-up"
	setTimeout(()=>playSound("Johnical"), 1000)
	john.opened = true
}
function johnClose(){
	get("john-window-main").style.visibility="hidden"
	get("john-portrait").style.animationName=""
	get("john-name").style.animationName=""
	john.opened = false
}

