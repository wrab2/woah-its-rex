const navalEventsList = []
let availableNavalEvents = []
let navalEventEndTime = 0
let currentNavalEvent = {}

function setupNavalEvents(){ //only runs on startup and after getting naval events from john
	if(!johnRewarded("naval events"))return
	get("displayShip").style.display = "block"
	availableNavalEvents = navalEventsList.filter((e)=>!player.john.navalEvents.includes(e.id))
	if(player.john.currentNavalEventId !== -1){ //an event is/was already active
		currentNavalEvent = availableNavalEvents.filter((e)=>e.id === player.john.currentNavalEventId)
		navalEventEndTime = player.john.navalEventStartedTime + currentNavalEvent.duration
	}
	fillCurrentEventInfo()
}

const battleshipIcon = get("displayShipIcon")
function fillCurrentEventInfo(){
	get("navalProgressBar").style.width = player.john.navalEvents.length / navalEventsList.length * 10+"%"
	get("navalProgressBarText").textContent = `${player.john.navalEvents.length}/${navalEventsList.length}`
	
	if(navalEventEndTime === 0){//there is no event no event
		battleshipIcon.classList.remove("navalGreenFlashing")
		battleshipIcon.classList.remove("navalRedFlashing")
		get("navalEventTitle").textContent = "No active event"
		get("navalEventText").textContent = "---"
		get("navalEventLayer").textContent = ""
		get("navalEventTime").textContent = ""
		return
	}
	//event is active
	get("navalEventTitle").textContent = currentNavalEvent.title + ` (#${currentNavalEvent.id})`
	get("navalEventText").textContent = 
		String(`${Math.random()<0.5 ? 
			"👑 $winner vs $loser"
			:"$loser vs 👑 $winner"}, `
		+currentNavalEvent.description+" "+currentNavalEvent.contribution)
		.replace(/\$winner/g, currentNavalEvent.winner)
		.replace(/\$loser/g, currentNavalEvent.loser)

	let questLayerOre = getLayerMaterial(layerDictionary[currentNavalEvent.layer])
	get("navalEventLayer").innerHTML = `Mining in ${oreList[questLayerOre].hasImage?
		'<img src="${oreList[questLayerOre].src}"'
		:questLayerOre
	} layer will accelerate the event`

}

function rollNavalEvent(){ //this runs on every inventory (2 times a second)
	if(!johnRewarded("naval events"))return

	if(Date.now() < navalEventEndTime) { //event is not over
		//update time display
		get("navalEventTime").textContent = "Remaining time: "+longTime((navalEventEndTime - Date.now()))

		if(currentLayer === currentNavalEvent.layer[0]){
			//500ms is base time reduction per update
			//1000 makes event go by 3x faster
			player.john.navalEventStartedTime -= 1000
			navalEventEndTime -= 1000

			battleshipIcon.classList.add("navalGreenFlashing")
			battleshipIcon.classList.remove("navalRedFlashing")
		} else {
			//wrong layer
			battleshipIcon.classList.remove("navalGreenFlashing")
			battleshipIcon.classList.add("navalRedFlashing")
		}
		return
	}
	else if(navalEventEndTime !== 0) { //event is over, reward applies now
		player.john.navalEvents.push(currentNavalEvent.id)
		availableNavalEvents = availableNavalEvents.filter((e)=>e.id !== currentNavalEvent.id)
		currentNavalEvent = {}
		player.john.currentNavalEvent = -1
		player.john.navalEventStartedTime = 0
		navalEventEndTime = 0
		fillCurrentEventInfo()
		return
	}
	//chance is 1/3600 every 500ms which is ~2/hour to get any uncompleted event
	if(availableNavalEvents.length > 0 && Math.random()<1/1){
		//start the event
		currentNavalEvent =availableNavalEvents[0]// availableNavalEvents[Math.floor(Math.random() * availableNavalEvents.length)]
		player.john.currentNavalEvent = currentNavalEvent.id
		player.john.navalEventStartedTime = Date.now()
		navalEventEndTime = Date.now() + currentNavalEvent.duration
		
		//open event info panel after the event has started
		if(!get("navalEventInfo").classList.contains("displayedSideMenu")){
			toggleSideMenu('navalEventInfo')
		} 
		fillCurrentEventInfo()
	}
}


let navaleventtempid = 0

class navalEvent {
	constructor(title, text, winner, loser){
		navaleventtempid++
		let duration = text.length*60000
		//30 minutes - 2 hours, change this later
		duration = Math.min(2*60*60*1000, Math.max(30*60000, duration))
		navalEventsList.push({
			title: title,
			description: text,
			winner:winner,
			loser:loser,
			duration: duration,
			contribution: johnContributions[0],
			id: navaleventtempid,
			layer: ["waterLayer"]
		})
	}
}
//$winner
//$loser
const johnContributions = [
	"john added a few gallons of air nearby causing the air resistance to raise, distracting $loser's crew",
	"john ate all the fish nearby, causing $loser's crew to stave",
	"john threw some plastic in the water, which hurt the flora, causing the $loser's crew to resign out of sadness",
	"john called his doppleganger, evil john who eviscerated $loser's fleet",
	"$loser had stock invested in $winner's stock market, which when john crashed the stock market really crippled $loser",
	"https://files.catbox.moe/ogdpeu.png this happened, but with $loser being john, and $winner being evil john",
	"$loser used notepad++, which when john hijacked the update servers to ship a rat in the files messed up $loser's strategy",
	"john convinced $winner to bet all of their budget on green, which when they won really helped with their victory",
	"john was very intimidating to $loser",
	"john \"wall-tur\" (his full name) built a wall around $loser's ships, trapping them",
	"john convinced $loser's fleet to go on a vacation right before the battle, causing them to miss it entirely",
	"john placed like a LOT of blahajes around the battlefield, which really scared $loser's crew",
	"john poisoned the water supply with estrogen, causing $winner's fleet to be way more prepared (the estrogen was very helpful)",
	"john forced $loser's crew to center a <div>",
	"meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow (my cat while shes in heat)",
	"john trained all of $winner's crew on ultrakill (a very realistic naval battle simulator)",
	"john offered $loser's crew a vinyl in return for them resigning",
	"john kindly asked the ship to sink",
	"john forcefully enabled copilot suggestions on $loser's IDE",
	"john added like a few grams of mass to the $winner's ships which was used as emergency ammo",
	"john got my cat to eat the $loser's wires",
	"john got on $loser's ip and ruined its cloudflare's ip reputation causing it to get 429s (rate limits)",
	"🤽‍♂️💥💥💥💥💥💥💥⛴️🏇",
	"john got a huge magnet to attract the $loser's ships",
	"john forced $loser's crew to play Rex:R",
/*	"", (add more)
	"",
	"",
	"",
	"", 
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"", */
]


//example events
new navalEvent(
	"Battles of Alashiya",
	"",
	"The Hittite navy","Alashiya"
)
new navalEvent(
	"Battle of the Delta",
	"",
	"Ramesses III","The \"Sea Peoples\""
)
new navalEvent(
	"Egypt invasion of Cyprus",
	"",
	"Ancient Egypt","Cyprus"
)
new navalEvent(
	"Battle of Alalia",
	"",
	"Carthaginians and Etruscans","Greeks"
)
new navalEvent(
	"awesome battle x1",
	"",
	"Ionians", "Phoenicians"
)
new navalEvent(
	"Battle of Lade",
	"",
	"Persians", "Ionians"
)
new navalEvent(
	"Battle of Salamis",
	"",
	"The allied Greek navy", "Persians"
)
new navalEvent(
	"Battle of Cumae",
	"",
	"Syracuse and Cumae", "Etruscans"
)
new navalEvent(
	"Battle of the Eurymedon",
	"",
	"Delian League", "Persians"
)
new navalEvent(
	"Battle of Aegina",
	"",
	"Athenians", "Aegina and the Peloponnesians"
)
new navalEvent(
	"Salamis-in-Cyprus",
	"",
	"Delian League", "Phoenicians and Cilicians"
)
new navalEvent(
	"Battle of Sybota",
	"my cat LOVED this battle so much",
	"Corcyra and Athens", "Corinthians"
)
new navalEvent(
	"Battles of Naupactus",
	"",
	"Athenians", "Spartans and Corinthians"
)
new navalEvent(
	"Battle of Pylos",
	"",
	"Athenians", "Spartans"
)
new navalEvent(
	"Siege of Syracuse",
	"",
	"Syracusans", "Athenians"
)
new navalEvent(
	"Battle of Cynossema",
	"",
	"Athenians", "Spartans"
)
new navalEvent(
	"Battle of Eretria",
	"",
	"Spartans", "Athenians"
)
new navalEvent(
	"Battle of Cyzicus",
	"",
	"Athenians", "Spartans and Peloponnesians"
)
new navalEvent(
	"Battle of Arginusae",
	"",
	"Athenians", "Peloponnesians"
)
new navalEvent(
	"Battle of Notium",
	"",
	"Spartans under Lysander", "Athenians under Antiochus"
)
new navalEvent(
	"Battle of Aegospotami",
	"",
	"Spartans", "Athens"
)
new navalEvent(
	"Battle of Cnidus",
	"",
	"Persians", "Spartans"
)
new navalEvent(
	"Battle of Pharos",
	"",
	"Syracusans", "Liburnians"
)
new navalEvent(
	"Battle of Naxos",
	"",
	"Athenians", "Spartans"
)
new navalEvent(
	"Battle of Amorgos",
	"",
	"Macedonians", "Athenians"
)
new navalEvent(
	"Battle of Salamis in Cyprus",
	"",
	"Demetrius I Poliorcetes", "Menelaeus, brother of Ptolemy I of Egypt"
)
new navalEvent(
	"Battle of the Strait of Messina",
	"",
	"Carthaginians", "Pyrrhus of Epirus"
)
new navalEvent(
	"Battle of Cos",
	"",
	"Antigonus II Gonatas", "Ptolemy II"
)
new navalEvent(
	"Battle of the Lipara Islands",
	"",
	"Carthaginians", "Roman Republic"
)
new navalEvent(
	"Battle of Mylae",
	"",
	"Romans under Duilius", "Carthaginians"
)
new navalEvent(
	"Battle of Ephesus",
	"",
	"Rhodians under Agathostratus", "Ptolemaic fleet under Chremonides"
)
new navalEvent(
	"Battle of Sulci",
	"",
	"Romans under Gaius Sulpicius Paterculus", "Carthaginians under Hannibal Gisco"
)
new navalEvent(
	"Battle of Tyndaris",
	"",
	"Romans under Gaius Atilius Regulus", "Carthaginians under Hamilcar"
)
new navalEvent(
	"Battle of Cape Ecnomus",
	"",
	"Romans", "Carthaginians under Hamilcar"
)
new navalEvent(
	"Battle of Drepana",
	"",
	"Carthaginians", "Romans"
)
new navalEvent(
	"Battle of Andros",
	"",
	"Macedonians", "Egyptians"
)
new navalEvent(
	"Battle of the Aegates Islands",
	"",
	"Romans", "Carthaginians"
)
new navalEvent(
	"Battle of Paxos",
	"",
	"Illyrians", "Corcyraeans"
)
new navalEvent(
	"Battle of Lilybaeum",
	"",
	"Romans under Amellius", "Carthaginians"
)
new navalEvent(
	"Battle of Ebro River",
	"",
	"Romans under Cornelius Scipio", "Carthaginians"
)
new navalEvent(
	"Battle of Carteia",
	"",
	"Romans under Gaius Laelius", "Carthaginians under Adherbal"
)
new navalEvent(
	"Battle of Chios",
	"",
	"Egyptians, Rhodians, and Pergamese", "Philip V of Macedon"
)
new navalEvent(
	"Second Battle of Lade",
	"",
	"Philip V of Macedon", "Rhodians under Cleonaeus"
)
new navalEvent(
	"Battle of the Eurymedon",
	"",
	"Roman forces under Lucius Aemilius Regillus", "Seleucid fleet commanded by Hannibal"
)
new navalEvent(
	"Battle of Myonessus",
	"",
	"Romans under Regillus and Rhodians under Eudoras", "Seleucids under Polyxenidas"
)
new navalEvent(
	"Battle of the Port of Carthage",
	"",
	"Carthaginians under Hasdrubal", "Roman fleet of Lucius Hostilius Mancinus"
)
new navalEvent(
	"Battle of Chalcedon",
	"",
	"Pontians under Mithridates VI", "Roman fleet of Marcus Aurelius Cotta"
)
new navalEvent(
	"Battle of Tenedos",
	"",
	"Romans under Lucullus", "Pontian fleet"
)
new navalEvent(
	"Battle of Korakesion",
	"",
	"Romans under Pompey", "Cilician pirates"
)
new navalEvent(
	"Battle of Morbihan",
	"",
	"Romans under Decius Brutus", "Veneti"
)
new navalEvent(
	"Battle of Naulochus",
	"",
	"Agrippa", "Sextus Pompeius"
)
new navalEvent(
	"Battle of Actium",
	"",
	"Octavian", "Antony and Cleopatra"
)
new navalEvent(
	"Battle of Shaxian",
	"",
	"Wu forces under Sun Ce", "Liu Biao and Huang Zu"
)
new navalEvent(
	"Battle of Red Cliffs",
	"",
	"Combined forces of Liu Bei and Sun Quan", "Fleet under Cao Cao"
)
new navalEvent(
	"Battle of Yiling",
	"",
	"Sun Quan", "Fleet under Liu Bei"
)
new navalEvent(
	"Battle of Dongkou",
	"",
	"Eastern Wu general Lü Fan", "Cao Xiu"
)
new navalEvent(
	"Battle of Xiling",
	"",
	"Lu Kang", "Jin general Bu Chan"
)
// Thats all of the ancient naval battles, now onto the middle ages...
new navalEvent(
	"Battle of Corsica",
	"",
	"Western Roman Empire under Flavius Ricimer", "Vandals"
)
new navalEvent(
	"Battle of Cartagena",
	"",
	"Vandals", "Western Roman Empire"
)
new navalEvent(
	"Battle of Cape Bon",
	"",
	"Vandals", "East and West Romans under Basiliscus"
)
new navalEvent(
	"Battle of Sena Gallica",
	"",
	"Byzantines", "Ostrogoths"
)
new navalEvent(
	"Battle of the Masts",
	"",
	"Arabs under Uthman", "Byzantines under Constans II"
)
new navalEvent(
	"Battle of Baekgang",
	"",
	"Tang China and Silla", "Yamato Japan and Baekje"
)
new navalEvent(
	"Battle of Gibeolpo",
	"",
	"Silla", "Tang China"
)
new navalEvent(
	"First Arab siege of Constantinople",
	"",
	"Byzantines", "Arabs"
)
new navalEvent(
	"Battle of Carthage",
	"",
	"Arabs", "Greeks under John the Patrician"
)
new navalEvent(
	"Second Arab siege of Constantinople",
	"",
	"Byzantines under Leo III the Isaurian", "Arabs"
)
new navalEvent(
	"Battle of Keramaia",
	"",
	"Cibyrrhaeots", "Umayyad Caliphate"
)
new navalEvent(
	"Siege of Constantinople",
	"",
	"Byzantine central imperial fleet", "Rebel provincial fleets"
)
new navalEvent(
	"Battle of Thasos",
	"",
	"Cretan Saracens", "Byzantines"
)
new navalEvent(
	"awesome battle x2",
	"",
	"Arabs", "Venetian squadron"
)
new navalEvent(
	"Battle of Ostia",
	"",
	"Italian city-states", "Muslims"
)
new navalEvent(
	"Battle of Sandwich",
	"",
	"Kentishmen under Æthelstan", "Viking fleet"
)
new navalEvent(
	"Battle of Kardia",
	"",
	"Byzantine admiral Niketas Ooryphas", "Cretan Saracens under the renegade Photios"
)
new navalEvent(
	"Battle of the Gulf of Corinth",
	"",
	"Byzantine admiral Niketas Ooryphas", "Cretan Saracens under the renegade Photios"
)
new navalEvent(
	"Battle of Cephalonia",
	"",
	"Byzantines under Nasar", "Aghlabids"
)
new navalEvent(
	"Battle of Stelai",
	"",
	"Byzantines under Nasar", "Aghlabids"
)
new navalEvent(
	"awesome battle x3",
	"",
	"Frisians", "Vikings"
)
new navalEvent(
	"Battle of Milazzo",
	"",
	"Aghlabids", "Byzantines"
)
new navalEvent(
	"awesome battle x4",
	"",
	"Byzantines under Himerios", "Arabs"
)
new navalEvent(
	"Battle of Chios",
	"",
	"Syrian-Cilician fleet", "Byzantine squadron under Himerios"
)
new navalEvent(
	"Battle of Lang-shan Jiang",
	"",
	"Wuyue", "Yang Wu"
)
new navalEvent(
	"Rus'-Byzantine War",
	"",
	"Byzantine fleet under Theophanes", "Kievan Rus' fleet under Igor of Kiev"
)
new navalEvent(
	"First Battle of Bach Dang River",
	"",
	"Vietnamese", "Southern Han"
)
new navalEvent(
	"awesome battle x5",
	"",
	"Christians", "Tunisians"
)
new navalEvent(
	"Battle of the Straits",
	"",
	"Fatimid fleet", "Byzantine fleet under Niketas Abalantes"
)
new navalEvent(
	"Battle on the Yangtze",
	"",
	"Song forces", "Tang forces"
)
new navalEvent(
	"Second Battle of Bach Dang",
	"",
	"Vietnamese", "Chinese Song"
)
new navalEvent(
	"awesome battle x6",
	"",
	"Venetians under Orseolo", "Narentan pirates"
)
new navalEvent(
	"Battle of Swold",
	"",
	"Swedes and Danes", "Norwegians"
)
new navalEvent(
	"awesome battle x7",
	"",
	"Venetians under Pietro Orseolo II", "Arabs"
)
new navalEvent(
	"awesome battle x8",
	"pisans had a space in the wikipedia page, how could the editors make this mistake",
	"Pisans", "Arabs"
)
new navalEvent(
	"Battle of Lemnos",
	"",
	"Byzantines", "Rus' fleet"
)
new navalEvent(
	"Battle of the Helgeå",
	"",
	"Danes under Ulf Jarl", "Swedes and Norwegians under Anund Jacob and Olaf II Haraldsson (Olaf the Stout)"
)
new navalEvent(
	"awesome battle x9",
	"",
	"Byzantine-Ragusan squadron", "Muslim corsair fleet"
)
new navalEvent(
	"Battle at Iron Gate",
	"",
	"Estonians", "Novgorod"
)
new navalEvent(
	"awesome battle x10",
	"",
	"Byzantines", "Arabs"
)
new navalEvent(
	"Rus'-Byzantine War",
	"",
	"Byzantines", "Rus' squadron"
)
new navalEvent(
	"Battle of Niså",
	"",
	"Norwegians under Harald Hardrada", "Danes"
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
// this might've been a mistake
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)