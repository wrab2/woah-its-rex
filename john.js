

const john = { //this doesn't presist between refreshes
	opened: false,
	rejectedQuests: 0,
}

const johnRewards = { //shortcut for how many quests you need to complete to get it
	"naval events": 1,
	"heirloom": 3,
	"hat": 5,
	"hypermark_checkminator": 10,
	"water_polo_ball": 15,
	"house_keys": 19,
	"ring_enabler": 20,
}
function johnRewarded(reward) {
	if(player.john.questsCompleted.length >= johnRewards[reward]) return true
	return false
}
const QuestTiers = [
	"Antique",
	"Flawless",
	"Metaversal",
	"Hyperdimensional",
	"Polychromatical",
    "Johnical"
]
const johnQuests = [
	{
		story:"my old coworker johan, please go find him, hes currently taking care of all the doors, but he forgot to give me back my 20 bucks so please bring back 5 of him (so i get 120 dollars 🤑)",
		ore_stry:"jonah is found in the door layer in W2",
		ore:"🤽🏻",
		amount:5,
		cave: false,
		layers:["doorLayer"],
		order:1,
		tier: QuestTiers.indexOf("Polychromatical")
	},
	{
		story:"please help me find jackson, i need to tell him about the WCP, get me 2 of him, (so that i can get his reaction twice)",
		ore_stry:"jackson is found in the europe layer (vatican city) in SR1",
		ore:"🤽🏼",
		amount:2,
		cave: false,
		layers:["vaLayer"],
		order:2,
		tier: QuestTiers.indexOf("Flawless")
	},
	{
		story:"locate noah, he was really nice to me when i visited his library and i want to thank him for introducing me to checkmarxism, get me 5 of him though because 5 is better than 1",
		ore_stry:"noah is found in the chess layer in W2",
		ore:"🤽🏽",
		amount:5,
		cave: false,
		layers:["chessLayer"],
		order:3,
		tier: QuestTiers.indexOf("Metaversal")
	},
	{
		story:"help me find ron, im pretty sure hes still sleeping at his house, ever since i kicked him out of the WCP he became a alcoholic (get me 10 of him so i can make fun of him tenfold)",
		ore_stry:"ron is found in the tv layer in W2",
		ore:"🤽🏾",
		amount:10,
		cave: false,
		layers:["tvLayer"],
		order:4,
		tier: QuestTiers.indexOf("Hyperdimensional")
	},
	{
		story:"get me johan, i need to ask him if he still has the receipt for the suit he bought me (get me 5 of him though because he might not have the full receipt)",
		ore_stry:"johan is is a multidimensional beeing found in the grass layer in W2 and W1",
		ore:"🤽🏿",
		amount:5,
		cave: false,
		layers:["grassLayer"],
		order:5,
		tier: QuestTiers.indexOf("Antique")
	},
	{
		story:"im really hungry right now so can you get me 10 shawns, theyre currently holding a party, i need to ask them if they can give me a spare slice of cake",
		ore_stry:"shawn is found in the cake (silly) layer in W1",
		ore:"🤽🏻‍♂️",
		amount:10,
		cave: false,
		layers:["sillyLayer"],
		order:6,
		tier: QuestTiers.indexOf("Metaversal")
	},
	{
		story:"i want to catch up with jay, after i took over the feline empire they went off to conquer the cactus layer (like any true cactus monarch #reference), thankfully though you only need one as hes a dictator he does not have anyone else in power other than him",
		ore_stry:"jay is found in the cactus layer in W1",
		ore:"🤽🏼‍♂️",
		amount:1,
		cave: false,
		layers:["cactusLayer"],
		order:7,
		tier: QuestTiers.indexOf("Metaversal")
	},
	{
		story:"pick up 5 rowans please, i need them for a very important deal",
		ore_stry:"rowan is found in the jim layer in watr world",
		ore:"🤽🏽‍♂️",
		amount:5,
		cave: false,
		layers:["jimLayer"],
		order:8,
		tier: QuestTiers.indexOf("Metaversal")
	},
	{
		story:"i need you to find me 5 hundred dons, NOW, my nuclear reactors are not functioning correctly without them nearby (they are highly radioactive)",
		ore_stry:"don is found in the radioactive layer in W1",
		ore:"🤽🏾‍♂️",
		amount:500,
		cave: false,
		layers:["radioactiveLayer"],
		order:9,
		tier: QuestTiers.indexOf("Flawless")
	},
	{
		story:"find me jordan (not the country), they need to show up to my housewarming party get me 10 of them though because thats not a power of 3",
		ore_stry:"jordan is found in the seychelles layer (africa) in SR1",
		ore:"🤽🏿‍♂️",
		amount:10,
		cave: false,
		layers:["scLayer"],
		order:10,
		tier: QuestTiers.indexOf("Hyperdimensional")
	},
	{
		story:"janine is my sister (jane)'s bestie, please find 1 of her",
		ore_stry:"janine is found in the bacteria caves",
		ore:"🤽🏻‍♀️",
		amount:1,
		cave: true,
		layers:["bacteriaCave"],
		order:11,
		tier: QuestTiers.indexOf("Hyperdimensional")
	},
	{
		story:"me and joan were planning on going to the new adachi rei concert, please Find her so she can give me my ticket",
		ore_stry:"joan is found in the music caves",
		ore:"🤽🏼‍♀️",
		amount:1,
		cave: true,
		layers:["musicCave"],
		order:12,
		tier: QuestTiers.indexOf("Hyperdimensional")
	},
	{
		story:"holdon i brb rq my cat can tell you about johanna (joans sister) JHhhhhhhhhhHHN BNJHU8I97U0-OI999999999999999999999,fssssssssssssssssssssssssssssssssssswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww99999999999999999999999999999999999999999999999999999999UUUUUUUUUUUUUUUUUUUUUUUUUUUU",
		ore_stry:"johanna is found in the abysstone caves",
		ore:"🤽🏽‍♀️",
		amount:1,
		cave: true,
		layers:["abysstoneCave"],
		order:13,
		tier: QuestTiers.indexOf("Polychromatical")
	},
	{
		story:"i was jocelyns successor in the WCP, so please get me her",
		ore_stry:"jocelyn is found in the jane caves (found in watr world)",
		ore:"🤽🏾‍♀️",
		amount:1,
		cave: true,
		layers:["janeCave"],
		order:14,
		tier: QuestTiers.indexOf("Hyperdimensional")
	},
	{
		story:"this is rowen's cousin, please get me 1 of her",
		ore_stry:"rowhen is found in the biohazard caves",
		ore:"🤽🏿‍♀️",
		amount:1,
		cave: true,
		layers:["biohazardCave"],
		order:15,
		tier: QuestTiers.indexOf("Hyperdimensional")
	},
	{
		story:"can you please please please please please get me my water buffalo back, hes our family pet, i miss him so much i would be eternally greatful if you did, i remember all my good times with him, we always called him water buffalo 🐃",
		ore_stry:"water buffalo 🐃 is found in the forge, you might want to do this one last as its the hardest by far (and you cant do it before 10 requests)",
		ore:"🐃",
		amount:1,
		cave: false,
		layers:[""], // Hes in the forge
		order:16,
		tier: QuestTiers.indexOf("Johnical")
	},
	{
		story:"please get me uhh... who the hell is this?",
		ore_stry:"Evil John is found in ??? (you might want to check milestones)",
		ore:"evilJohn",
		amount:10,
		cave: false,
		layers:[""], // Hes a CLT from denying 50 john requests, but once you get him you can get him anytime (so you dont get softlocked(no you can't but you will not get softlocked anyways))
		order:17,
		tier: QuestTiers.indexOf("Flawless")
	},
	{
		story:"i lost my roomate, i cant find him anywhere so you gotta find him for me",
		ore_stry:"josh is found in the john layer (sometimes)",
		ore:"josh",
		amount:10,
		cave: false,
		layers:["johnLayer_CLT"], // repeating john layer CLT
		order:18,
		tier: QuestTiers.indexOf("Metaversal")
	},
	{
		story:"i dropped my wallet yesterday, can you go get jack (hes the one who got my wallet)",
		ore_stry:"jack is found in the deep water layer",
		ore:"jack",
		amount:1,
		cave: false,
		layers:["deepWaterLayer"],
		order:19,
		tier: QuestTiers.indexOf("Polychromatical")
	},
	{
		story:"please get me 10 heavenly johns, i need to attone for my sins",
		ore_stry:"heavenly john is found in the cloud layer",
		ore:"heavenlyJohn",
		amount:10,
		cave: false,
		layers:["cloudLayer", "cloudLayer2"],
		order:20,
		tier: QuestTiers.indexOf("Polychromatical")
	},
]

function johnActivateQuest() {
	if(player.john.spokeWith && player.john.currentQuest !== undefined){
		const thisQuest = johnQuests[player.john.currentQuest]
		if(thisQuest.cave){
			return insertIntoCaves({"ore":thisQuest.ore, "layers":thisQuest.layers, "useLuck":true});
		}
		if (thisQuest.ore === "🐃") return
		if (thisQuest.ore === "evilJohn") return
		insertIntoLayers({"ore":thisQuest.ore, "layers":thisQuest.layers, "useLuck":true});
	}
}
function johnStopQuest() {
	if(player.john.spokeWith && player.john.currentQuest !== undefined){
		const thisQuest = johnQuests[player.john.currentQuest]
		if(thisQuest.cave){
			return removeFromCaves({"ore":thisQuest.ore, "layers":thisQuest.layers, "useLuck":true});
		}
		if (thisQuest.ore === "🐃") return
		if (thisQuest.ore === "evilJohn") return
		removeFromLayers({"ore":thisQuest.ore, "layers":thisQuest.layers})
	}
}
function selectNextQuest(){
	let questPool = johnQuests.filter((e)=>!player.john.questsCompleted.includes(e.order))
	questPool.splice(player.john.currentQuest,1)
	if(questPool.length === 1){
		player.john.currentQuest = johnQuests.indexOf(questPool[0])
		return
	} else if (questPool.length === 0) return
	questPool.sort((a,b)=>a.tier - b.tier)
	let weights = []
	let totalWeight = 0
	for(const q of questPool){
		let weight = (10 - (q.tier*1.2))**5
		totalWeight += weight
		weights.push(weight)
	}
	let rng = Math.random()*totalWeight
	for(let i=0; i<questPool.length; i++){
		if(rng < weights[0]){
			player.john.currentQuest = johnQuests.indexOf(questPool[i])
			return 
		}else{
			rng -= weights[0]
			weights.shift()
		}
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
		if(player.john.questsCompleted.length === johnRewards["naval events"]){
			johnSay("did you hear 👂👂👂👂 that, it looks like my past sins (war crimes) have come back to haunt me and all the naval events i have participated in have come back")
			setupNavalEvents()
		}
		else if(player.john.questsCompleted.length === johnRewards["heirloom"]){
			johnSay("this is my family's treasure that for thousands of years we passed from one generation to another. But I don't care you can have it. for every naval event you complete it will make it stronger, up to the max of around 11,000x cave luck (the formula is 1.03 ^ (events completed) cave luck but softcaps after 250)")
		}
		else if(player.john.questsCompleted.length === johnRewards["water_polo_ball"]){
			johnSay("one of my friends that you gave to me dropped their water polo ball, honestly you can keep it !")
		}
		else if(player.john.questsCompleted.length === johnRewards["hypermark_checkminator"]){
			johnSay("my buddy, feller, I put a special something deep down in world 2. But you can't mine it. my pet water buffalo 🐃 will be mildly upset if you use offline time to ignore unbreakability of that layer (1m blocks or lower)")
		}
		else if(player.john.questsCompleted.length === johnRewards["hat"]){
			johnSay("my current hat is getting pretty worn out from all this swimming, here. take it !")
		}
		else if(player.john.questsCompleted.length === johnRewards["house keys"]){
			johnSay("thank you thank you thank you so so so much, i dont have anything else to give to you though other than my house.... eh whatever its fine i trust you enough just dont steal anything thanks")
		}
		else if(player.john.questsCompleted.length === johnRewards["ring_enabler"]){
			johnSay("yay!! yippie!! 🥳🥳🥳🎉🎉🎉🎈🎈🎈 all of my friends and family (and water buffalo) are back together again!! here, take this awesome gear that'll let you progress further")
		}

		selectNextQuest()
		playSound("Johnical")
	}
	johnActivateQuest()
	johnRefresh()
	return
}
function rejectQuest(){
	john.rejectedQuests++
	if(john.rejectedQuests < 50)johnSay("haha yes you can always come back to this quest later but don't spawn my evil doppleganger by rejecting quests 50 times in one session")
	else if(john.rejectedQuests === 50){
		johnSay("oh no he is here, and he's in a repeating john layer. ! you might want to watch out 👀👀👀👀")
		insertIntoLayers({"ore":"evilJohn", "layers":["johnLayer","johnLayer_CLT"], "useLuck":true});
	}
	johnStopQuest()
	selectNextQuest()
	johnActivateQuest()
	johnRefresh()
}

function checkJohn(x,y){
	if (currentWorld!==1.2 || //watr
		y!==(20e6-1) || //put it 199, will be at 199,999,999 
		x!==1e6 //1e6 is actually 0 in game (thats dumb why did amber do that)
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
	johnSay("hello im john, please help me reunite my family and friends, if help me ill give you my awesome gears, also you might want to skip some of my quests if they take too long (you can always do them later)")
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
	get("john-quest-progress").innerHTML = (oreList[quest.ore].hasImage ? `<img src=${oreList[quest.ore].src}>`: quest.ore) + `${playerInventory[quest.ore].normalAmt}/${quest.amount}`
	let colors = oreInformation.getColors(QuestTiers[quest.tier]);
	get("john-quest-tier").innerHTML = ` ${QuestTiers[quest.tier]}`
	get("john-quest-tier").style.color = colors.backgroundColor
	estimateJohnQuestTime()
}

function johnSay(johnsWisdom){
	get("right-john-speech-bubble").textContent = johnsWisdom
	get("sayings-bubble-container").style.visibility = "visible"
}

function estimateJohnQuestTime(){
	let thisQuest = johnQuests[player.john.currentQuest]
	if (thisQuest.ore === "🐃") time = 0
	else if(thisQuest.cave){
		let time = 1000*caveOreEstimatedTime(thisQuest.ore)*thisQuest.amount
		get("john-quest-eta").textContent=`Estimated time: ${longTime(time)}`
	} else {
		get("john-quest-eta").textContent=`Estimated time: ${ct(true)}`
		return 
	}
}
