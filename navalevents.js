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

function fillCurrentEventInfo(){
	const battleshipIcon = get("displayShipIcon")
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
	const battleshipIcon = get("displayShipIcon")

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
		currentNavalEvent = availableNavalEvents[Math.floor(Math.random() * availableNavalEvents.length)]
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
const contribRNG = new Math.seedrandom("hi this is again me john 🤽‍♂️, seeding 🌱🫘 the rng 🔢🤽‍♂️🤽‍♂️")

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
			contribution: johnContributions[Math.floor(contribRNG()*johnContributions.length)],
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
	"john opened his fridge, freezing over the world causing $loser's ships to get stuck in ice",
	"john played water polo with $winner's crew really raising their motivation",
	"john was forced to Add Four Thousand naval battles, and out of spite they killed $loser's crew",
	"john dug a really big hole sinking $loser's ships",
	"john created a slipstream in front of a $winner's fleet which allowed them to sail a lot quicker", 
	"john lured $loser's fleet in subrealm one without infinity collector and they decided to quit", // smh i did sr1 without any gears imagine being $loser in this
	"john took all of $loser's hyperdimensionals causing them to be very sad because they were sentimental of them frfr",
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
	"awesome naval battle x1",
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
	"awesome naval battle x2",
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
	"awesome naval battle x3",
	"",
	"Frisians", "Vikings"
)
new navalEvent(
	"Battle of Milazzo",
	"",
	"Aghlabids", "Byzantines"
)
new navalEvent(
	"awesome naval battle x4",
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
	"awesome naval battle x5",
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
	"awesome naval battle x6",
	"",
	"Venetians under Orseolo", "Narentan pirates"
)
new navalEvent(
	"Battle of Swold",
	"",
	"Swedes and Danes", "Norwegians"
)
new navalEvent(
	"awesome naval battle x7",
	"",
	"Venetians under Pietro Orseolo II", "Arabs"
)
new navalEvent(
	"awesome naval battle x8",
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
	"awesome naval battle x9",
	"",
	"Byzantine-Ragusan squadron", "Muslim corsair fleet"
)
new navalEvent(
	"Battle at Iron Gate",
	"",
	"Estonians", "Novgorod"
)
new navalEvent(
	"awesome naval battle x10",
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
	"Battle of Dyrrhachium",
	"",
	"Venetian-Byzantine fleet", "Normans"
)
new navalEvent(
	"awesome naval battle x10.5",
	"",
	"Normans under Robert Guiscard (20 vessels?)", "Venetians or Byzantines"
)
new navalEvent(
	"Battle of Ibelin",
	"",
	"Venetians", "Fatimid Egyptians"
)
new navalEvent(
	"Battle of Bigano",
	"",
	"Venetians", "Normans/Roger II of Sicily"
)
new navalEvent(
	"Battle of Cape Malea",
	"",
	"Venetians and Byzantine Greeks", "Normans"
)
new navalEvent(
	"Siege of Ascalon",
	"",
	"Venetians", "Fatimid Arabs"
)
new navalEvent(
	"awesome naval battle x11 (not wayland)",
	"",
	"Celtic ships", "Viking squadron"
)
new navalEvent(
	"Battle of Tangdao",
	"",
	"Song forces", "Jin forces"
)
new navalEvent(
	"Battle of Caishi",
	"",
	"Song forces", "Jin forces"
)
new navalEvent(
	"awesome naval battle x12",
	"",
	"Venetians and the Vatican", "Genoese and Pisans"
)
new navalEvent(
	"Battle of Mizushima",
	"",
	"Taira clan", "Minamoto clan"
)
new navalEvent(
	"Battle of Fimreite",
	"",
	"Birkebeiners", "Norway"
)
new navalEvent(
	"Battle of Yashima",
	"",
	"Minamoto clan", "Taira clan"
)
new navalEvent(
	"Battle of Dan-no-ura",
	"",
	"Minamoto clan", "Taira clan"
)
new navalEvent(
	"Battle of Demetritzes",
	"",
	"Byzantines under Alexios Branas", "Normans"
)
new navalEvent(
	"Battle of Damme",
	"",
	"English under William Longsword", "French under King Philip II"
)
new navalEvent(
	"Second Battle of Dover",
	"24 Aug, off Dover; AKA The \"Fight off Sandwich\". ",
	"English under Hubert de Burgh", "French under Eustace the Monk"
)
new navalEvent(
	"First Battle of Meloria",
	"",
	"Pisans under Ansaldo de Mari", "Genoese"
)
new navalEvent(
	"Battle of Acre",
	"",
	"Venetians", "Genoese"
)
new navalEvent(
	"Battle of Settepozzi",
	"",
	"A Venetian fleet of 38 ships under Gilberto Dandolo", "Byzantine-Genoese fleet of 48 ships"
)
new navalEvent(
	"Battle of Saseno",
	"",
	"Genoese", "Venetians"
)
new navalEvent(
	"Battle of Trapani",
	"",
	"Venetians", "Genoese"
)
new navalEvent(
	"Battle of Demetrias",
	"",
	"Byzantines", "Coalition of Lombard and Venetian lords of Euboea and Crete"
)
new navalEvent(
	"Algeciras",
	"",
	"Morocco and Granada", "Castilians"
)
new navalEvent(
	"awesome naval battle x13",
	"",
	"Conrad Lancia", "Muslims"
)
new navalEvent(
	"Yamen",
	"",
	"Yuan dynasty", "Song dynasty"
)
new navalEvent(
	"Action of 11 October 1282",
	"",
	"Peter de Queralt", "Angevin fleet"
)
new navalEvent(
	"Battle of Nicotera",
	"",
	"Peter de Queralt", "Angevin fleet"
)
new navalEvent(
	"Battle of Malta",
	"",
	"Aragonese-Sicilians under Roger of Lauria", "Angevins"
)
new navalEvent(
	"Battle of the Gulf of Naples",
	"",
	"Aragonese-Sicilians under Roger of Lauria", "Neapolitans"
)
new navalEvent(
	"Second Battle of Meloria",
	"",
	"Genoese", "Pisan fleet"
)
new navalEvent(
	"awesome naval battle x14",
	"",
	"11 Catalan galleys", "25 French galleys under Guillaume de Lodève"
)
new navalEvent(
	"Battle of Les Formigues",
	"",
	"Aragonese-Sicilians under Roger of Lauria", "French under di Mari and de Orreo"
)
new navalEvent(
	"Battle of the Counts",
	"",
	"Aragonese-Sicilians under Roger of Lauria", "Angevins"
)
new navalEvent(
	"Third Battle of Bach Dang",
	"",
	"Vietnamese", "Mongols"
)
new navalEvent(
	"Battle of Laiazzo",
	"",
	"Genoese", "Venetians"
)
new navalEvent(
	"Battle of Curzola",
	"",
	"Genoese fleet under Lamba Doria", "Venetians under Andrea Dandolo"
)
new navalEvent(
	"Battle of Cape Orlando",
	"",
	"Angevins under Roger of Lauria", "Sicilians under d'Oria"
)
new navalEvent(
	"Battle of Ponza",
	"",
	"Angevins under Roger of Lauria", "Sicilians under d'Oria"
)
new navalEvent(
	"Battle of Zierikzee",
	"",
	"French fleet under Genoese admiral Renier Grimaldi", "Flemish fleet"
)
new navalEvent(
	"Battle of Chios",
	"",
	"Knights Hospitaller and Genoese of the Lordship of Chios", "Aydinid fleet"
)
new navalEvent(
	"Battle of Arnemuiden",
	"",
	"Philip VI of France", "English fleet of Edward III of England"
)
new navalEvent(
	"Battle of Sluys",
	"",
	"Edward III of England", "Franco-Genoese fleet of Philip VI of France"
)
new navalEvent(
	"Battle of L'Espagnols-sur-Mer",
	"",
	"50 English ships under Edward III and the Black Prince", "40 Castilian ships"
)
new navalEvent(
	"Battle of La Loiera",
	"",
	"Venetians and Aragonese", "Genoese"
)
new navalEvent(
	"Battle of Sapienza",
	"",
	"Genoese under Paganino Doria", "Venetians under Niccolò Pisani"
)
new navalEvent(
	"Battle of Lake Poyang",
	"",
	"Mings under Zhu Yuanzhang", "Hans under Chen Youliang"
)
new navalEvent(
	"Battle of La Rochelle",
	"",
	"Castilian fleet", "English fleet"
)
new navalEvent(
	"Action of 30 May 1378",
	"",
	"Venetians under Vettor Pisani", "Genoese"
)
new navalEvent(
	"Battle of Pola",
	"",
	"Genoese under Luciano Doria", "Venetians under Vittore Pisani"
)
new navalEvent(
	"Battle of Chioggia",
	"",
	"Venetians under Andrea Contarini", "Genoese"
)
new navalEvent(
	"Battle of Margate",
	"",
	"English fleet under Richard, Earl of Arundel", "Franco-Castilian-Flemish wine fleet under Sir Jean de Bucq"
)
new navalEvent(
	"Battle of Modon",
	"",
	"Venetians under Carlo Zeno", "Genoese fleet under the French Marshal Boucicaut"
)
new navalEvent(
	"Battle of Gallipoli",
	"",
	"Venetians", "Ottoman Turks"
)
new navalEvent(
	"Battle of Harfleur",
	"",
	"English", "French"
)
new navalEvent(
	"awesome naval battle x15",
	"",
	"English under the Earl of Huntingdon", "French and Genoese"
)
new navalEvent(
	"Battle of La Rochelle",
	"",
	"Castilians", "Flemish-Hanseatic fleet"
)
new navalEvent(
	"Battle of Wieringen",
	"",
	"Burgundian fleet", "Fleet of Jacqueline of Bavaria"
)
new navalEvent(
	"Battle of the Echinades",
	"",
	"Byzantines", "Fleet of Carlo I Tocco"
)
new navalEvent(
	"awesome naval battle x16",
	"",
	"Venetians and Florentines under Pietro Loredano and Paolodi Vanni Rucellai", "Genoans under Francesco Spinola"
)
new navalEvent(
	"Battle of San Vincenzo",
	"",
	"Neapolitans", "Florentines"
)
new navalEvent(
	"Fall of Constantinople",
	"",
	"Ottoman Turks", "Byzantines"
)
new navalEvent(
	"Fall of Constantinople the second",
	"",
	"Genoese", "Turks"
)
new navalEvent(
	"Battle of Bornholm",
	"",
	"3 Polish ships", "Danish-Livonian fleet"
)
new navalEvent(
	"Battle of Vistula Lagoon",
	"",
	"Polish and Prussian Confederation", "Teutonic Order fleet"
)
new navalEvent(
	"awesome naval battle x17",
	"",
	"French", "Genoese"
)
new navalEvent(
	"Battle of Guinea",
	"",
	"11 Portuguese ships", "35 Castilian ships"
)
new navalEvent(
	"Battle of Rapallo",
	"",
	"Genoese fleet under Francesco Spinola", "French fleet under de Miolans"
)
new navalEvent(
	"Battle of Zonchio",
	"",
	"Turks under Daoud Pasha", "Venetians under Antonio Grimani"
)
new navalEvent(
	"Second Battle of Lepanto",
	"",
	"Turks under Kemal Reis", "Venetians"
//thats all for medival, oh god im only like 10% through the page
)
new navalEvent(
	"Battle of Chaul",
	"",
	"Alliance of Mamluk, Gujrat and Calicut", "Portuguese"
)
new navalEvent(
	"Battle of Diu",
	"",
	"Portugal's Indian viceroy", "Combined Egyptian-Gujarat Sultanate fleet"
)
new navalEvent(
	"awesome naval battle x18",
	"",
	"Maltese under Prégent de Bidoux", "Venetians"
)
new navalEvent(
	"awesome naval battle x19",
	"",
	"Genoese under Andrea Doria", "Moors"
)
new navalEvent(
	"Battle of St. Mathieu",
	"",
	"English", "French"
)
new navalEvent(
	"Battle of Tunmen",
	"",
	"Ming Chinese", "Portuguese"
)
new navalEvent(
	"Battle of Xicaowan",
	"",
	"Ming Chinese", "Portuguese"
)
new navalEvent(
	"awesome naval battle x20",
	"",
	"Swedes and Lübeckers", "Pirates"
)
new navalEvent(
	"awesome naval battle x21",
	"",
	"Ottoman Turks under Barbarossa", "Spanish"
)
new navalEvent(
	"awesome naval battle x22",
	"",
	"Swedes/Danes/Prussians", "9 Lübeck ships"
)
new navalEvent(
	"awesome naval battle x23",
	"",
	"Swedes/Danes/Prussians", "10 Lübeck ships"
)
new navalEvent(
	"Battle of Preveza",
	"",
	"Ottoman Turks under Barbarossa", "Spanish-Venetian-Papal fleet"
)
new navalEvent(
	"Raid on Ōmishima",
	"",
	"Tsuruhime", "Ōuchi Yoshitaka"
)
new navalEvent(
	"Ningbo Massacre",
	"",
	"Ningbo Massacre", "Portugal"
)
new navalEvent(
	"Battle of the Solent",
	"",
	"English", "French"
)
new navalEvent(
	"Battle of Ponza",
	"",
	"Ottoman Turks under Sinan Pasha", "Genoese under Andrea Doria"
)
new navalEvent(
	"awesome naval battle x24",
	"",
	"Portuguese", "English and French"
)
new navalEvent(
	"Battle of Gravelines",
	"",
	"English under Count Egmont", "French under Marshal de Thermes"
)
new navalEvent(
	"Battle of Djerba",
	"",
	"Turks", "Christians"
)
new navalEvent(
	"Action of 30 May",
	"",
	"Swedes", "Danes"
)
new navalEvent(
	"Action of 30 May",
	"",
	"Danes/Lübeckers under Trolle", "Swedes under Bagge "
)
new navalEvent(
	"Action of 12 July",
	"",
	"Danish", "Swedish"
)
new navalEvent(
	"Action of 12 August",
	"",
	"Swedes under Klas Horn", "Danes under Herluf Trolle"
)
new navalEvent(
	"Action of 7 July",
	"",
	"Swedes", "Danes/Lübeckers"
)
new navalEvent(
	"Battle of Fukuda Bay",
	"",
	"Portuguese", "Matsura clan"
)
new navalEvent(
	"Action of 26 July",
	"",
	"Swedes", "Danes/Lübeckers"
)
new navalEvent(
	"awesome naval battle x25",
	"",
	"Swedes", "Polish"
)
new navalEvent(
	"Encounter in San Juan de Ulúa",
	"",
	"Spanish under Martin Enriquez", "English under Hawkins"
)
new navalEvent(
	"awesome naval battle x26",
	"",
	"English under Burrough and Hodsdon", "Danes"
)
new navalEvent(
	"Battle of Gozo",
	"",
	"Turkish under Uluch Ali", "Maltese under Saint-Clement"
)
new navalEvent(
	"Siege of Famagusta",
	"",
	"Venetians under Marco Querini", "Turks"
)
new navalEvent(
	"Battle of Lepanto",
	"",
	"Christian coalition", "Ottoman Turks"
)
new navalEvent(
	"Battle of Flushing",
	"",
	"Sea Beggars", "Spanish under Sancho d'Avila"
)
new navalEvent(
	"Battle of Borsele",
	"",
	"Sea Beggars", "Spanish under Sancho d'Avila"
)
new navalEvent(
	"Battle of Haarlemmermeer",
	"",
	"Spanish under Bossu", "Sea Beggars"
)
new navalEvent(
	"Battle on the Zuiderzee",
	"",
	"Sea Beggars under Cornelis Dirkszoon", "Spanish under Bossu"
)
new navalEvent(
	"Battle of Reimerswaal",
	"",
	"Sea Beggars under Willem Boisot", "Spanish under Luis de Resquesens"
)
new navalEvent(
	"Battle of lillo",
	"",
	"Sea Beggars under Willem Boisot", "Spanish fleet"
)
new navalEvent(
	"awesome naval battle x27",
	"",
	"Swedes", "Lübeckers"
)
new navalEvent(
	"First Battle of Kizugawaguchi",
	"",
	"Mōri Terumoto", "Oda Nobunaga"
)
new navalEvent(
	"Second Battle of Kizugawaguchi",
	"",
	"Oda Nobunaga", "Mōri Terumoto "
)
new navalEvent(
	"Battle of Terceira",
	"",
	"Spanish under Alvaro de Bazán", "French, Portuguese, Dutch and English under Filippo Strozzi"
)
new navalEvent(
	"Battle of Vila Franca",
	"",
	"Spanish under Alvaro de Bazán", "French, Portuguese, Dutch and English under Filippo Strozzi"
)
new navalEvent(
	"awesome naval battle x28",
	"",
	"Venetians", "Maltese under Avogadro"
)
new navalEvent(
	"awesome naval battle x29",
	"",
	"Maltese", "Turkish"
)
new navalEvent(
	"Japanese landing in Vietnam",
	"",
	"Nguyen Lord navy", "Shirahama Kenki pirates"
)
new navalEvent(
	"Battle of Pantelleria",
	"",
	"English under Edward Wilkinson", "Spanish and Maltese under Pedro de Gamboa y Leyva"
)
new navalEvent(
	"Battle of Gravelines",
	"",
	"English", "Spain and Portugal"
)
new navalEvent(
	"Battle of Gravelines",
	"",
	"English", "Spain and Portugal"
)
new navalEvent(
	"Spanish Armada in Ireland",
	"",
	"Irish", "Spain and Portugal"
)
new navalEvent(
	"Defeat of the English Armada",
	"",
	"Spanish", "English"
)
new navalEvent(
	"Battle of Flores",
	"",
	"Spanish", "English"
)
new navalEvent(
	"Battle of Okpo",
	"",
	"Korean navy under Yi Sun-sin", "Japanese navy under Todo Takatora"
)
new navalEvent(
	"Battle of Sacheon",
	"",
	"Korean navy under Yi Sun-sin", "Japanese"
)
new navalEvent(
	"Battle of Hansan Island",
	"",
	"Korean navy under Yi Sun-sin", "Japanese"
)
new navalEvent(
	"Battle of Busan",
	"",
	"Korean navy under Yi Sun-sin", "Japanese"
)
new navalEvent(
	"Action of San Mateo Bay",
	"",
	"Spanish", "English"
)
new navalEvent(
	"Action of 1595",
	"",
	"Bizertans", "Maltese"
)
new navalEvent(
	"Drake's Assault on Panama",
	"",
	"Spanish", "English"
)
new navalEvent(
	"Battle of Chilchonryang",
	"",
	"Japanese Navy and Japanese army", "Korean Navy under Wŏn Kyun"
)
new navalEvent(
	"Battle of Myeongnyang",
	"",
	"13 Korean ships under Yi Sun-sin", "330 Japanese ships"
)
new navalEvent(
	"Islands Voyage",
	"",
	"Spanish", "English"
)
new navalEvent(
	"Battle of Noryang",
	"",
	"Chinese under Chen Lin and Koreans under Yi Sun-sin", "Japanese"
)
//thats all for the 16th century, now for the 17th century.....
new navalEvent(
	"Battle of Bantam",
	"",
	"Dutch", "Portuguese"
)
new navalEvent(
	"Battle of the Narrow Seas",
	"",
	"Dutch under van Duivenvoorde", "Spanish under Spinola"
)
new navalEvent(
	"Battle of Sluis",
	"",
	"Dutch under de Moor", "Spanish under Spinola"
)
new navalEvent(
	"Action of October 1604",
	"",
	"Tuscans", "Tunisians"
)
new navalEvent(
	"Battle of the Channel",
	"",
	"Dutch under Haultain", "Spanish fleet of transport ships"
)
new navalEvent(
	"Attack on Salinas de Araya",
	"",
	"Spanish under Fajardo", "Dutch smugglers and privateers"
)
new navalEvent(
	"Battle of Cape St. Vincent",
	"",
	"Spanish under Fajardo", "Dutch under Haultain"
)
new navalEvent(
	"Battle of Cape Rachado",
	"",
	"Portuguese fleet under Castro", "Dutch under de Jonge"
)
new navalEvent(
	"Second battle of Cape Rachado",
	"",
	"Dutch under de Jonge", "Portuguese"
)
new navalEvent(
	"Battle of Gibraltar",
	"",
	"Dutch under van Heemskerk", "Spanish"
)
new navalEvent(
	"Action of 20 October",
	"",
	"Tuscans under Beauregard", "Turkish trade fleet"
)
new navalEvent(
	"Raid on La Goulette",
	"",
	"Spanish-French", "Tunis"
)
new navalEvent(
	"Action of 1609",
	"",
	"Venetians", "Turks"
)
new navalEvent(
	"Battle of Paphos",
	"",
	"Turks under Khalil", "French under Fressinet"
)
new navalEvent(
	"Nossa Senhora da Graça incident",
	"",
	"Portuguese", "Japanese"
)
new navalEvent(
	"Raid on La Goulette",
	"",
	"Sicilian-Spanish galley fleet", "Tunisians"
)
new navalEvent(
	"Battle of Swally",
	"",
	"British East India Company", "Portuguese"
)
new navalEvent(
	"Battle of Cape Corvo",
	"",
	"Sicilian-Spanish galley fleet under d'Aragona", "Turkish trade fleet"
)
new navalEvent(
	"awesome naval battle x30",
	"",
	"English", "Portuguese"
)
new navalEvent(
	"Action of 17 July",
	"",
	"Dutch under Spilbergen", "Spanish under Pulgar"
)
new navalEvent(
	"Raid on La Goulette",
	"",
	"Sicilian-Spanish galley fleet under Ribera", "Tunisans"
)
new navalEvent(
	"Action of 29 April",
	"",
	"Tuscans under Inghirami", "Turks"
)
new navalEvent(
	"Battle of Cape Celidonia",
	"",
	"Spanish-Neapolitans under Ribera", "Turks"
)
new navalEvent(
	"awesome naval battle x31",
	"",
	"Neapolitans/Sicilian galleys", "Larger Turkish galley fleet"
)
new navalEvent(
	"Battle of Ragusa",
	"",
	"Spanish under Ribera", "Venetians"
)
new navalEvent(
	"Battle of Playa Honda",
	"",
	"Spanish", "Dutch"
)
new navalEvent(
	"Battle of Cape Palos",
	"",
	"Algerines", "Spanish"
)
new navalEvent(
	"Raid on La Goulette",
	"",
	"Spanish under d'Aragona", "Tunisians"
)
new navalEvent(
	"Action of 2 July",
	"",
	"Dutch under Lambert and Spanish under Vidazábal", "Algerines"
)
new navalEvent(
	"Action of 19 February",
	"",
	"Danish", "French pirates"
)
new navalEvent(
	"Capture of Nassau Huis",
	"",
	"English", "Dutch East India Company"
)
new navalEvent(
	"awesome naval battle x32",
	"",
	"Dutch", "French"
)
new navalEvent(
	"awesome naval battle x33",
	"",
	"English", "Portuguese"
)
new navalEvent(
	"Action of 11 May",
	"",
	"Venetians under Nani", "Spanish under Silva"
)
new navalEvent(
	"Action of 26 June",
	"",
	"Tuscans", "Bizertans"
)
new navalEvent(
	"awesome naval battle x34",
	"",
	"British East India Company", "Portuguese"
)
new navalEvent(
	"Battle of Macau",
	"",
	"Portuguese", "Dutch East India Company"
)
new navalEvent(
	"awesome naval battle x35",
	"",
	"English and Dutch", "Portuguese"
)
new navalEvent(
	"awesome naval battle x36",
	"",
	"Dutch ships under Swartenhondt", "Spanish squadron"
)
new navalEvent(
	"Action of 3 October",
	"",
	"A combined squadron of fifteen Neapolitan (Spain), Tuscan, and Papal galleys", "A squadron of six Algerian ships"
)
new navalEvent(
	"Battle of Blavet",
	"",
	"French Rochellais rebels", "French"
)
new navalEvent(
	"Battle off Hormuz",
	"",
	"Portuguese", "English and Dutch"
)
new navalEvent(
	"Action of 26 June",
	"",
	"Bizertans", "Maltese"
)
new navalEvent(
	"Naval battle of Pertuis Breton",
	"",
	"French Huguenot under Soubise", "French Royalists with hired Dutch ships"
)
new navalEvent(
	"Naval battle of Saint-Martin de Ré",
	"",
	"French Royalists under Montmorency with hired English and Dutch ships", "French Huguenots under Guiton and Soubise"
)
new navalEvent(
	"Action of 1626",
	"",
	"Danes", "Dunkirkers"
)
new navalEvent(
	"Battle of Oliwa",
	"",
	"Poles", "Swedes"
)
new navalEvent(
	"Action of 21 June",
	"",
	"English", "Venetians/French"
)
new navalEvent(
	"Capture of the Honduran treasure fleet",
	"",
	"Dutch ships under Ita", "2 Spanish treasure ships"
)
new navalEvent(
	"Battle in the Bay of Matanzas",
	"",
	"Dutch ships under Ita", "Spanish treasure fleet "
)
new navalEvent(
	"Third La Rochelle expedition",
	"",
	"French Royalists", "English"
)
new navalEvent(
	"Battle of Dungeness",
	"",
	"Dutch under Hein", "Dunkirkers"
)
new navalEvent(
	"Battle of Duyon River",
	"",
	"Portuguese", "Acehnese"
)
new navalEvent(
	"Action of 16 September",
	"",
	"Swedes", "Holy Roman Empire"
)
new navalEvent(
	"Action of 4 September",
	"",
	"Danes", "Hanseatics"
)
new navalEvent(
	"Battle of the Slaak",
	"",
	"Dutch Zeeland fleet under Hollare", "Spanish invasion fleet"
)
new navalEvent(
	"Battle of Liaoluo Bay",
	"",
	"Ming China", "Allied fleet of Dutch East India Company and Chinese pirates"
)
new navalEvent(
	"awesome naval battle x37",
	"",
	"Maltese galleys", "Turkish vessels"
)
new navalEvent(
	"awesome naval battle x38",
	"",
	"Maltese galleys under Valdina", "Tripolitans"
)
new navalEvent(
	"awesome naval battle x39",
	"",
	"Maltese under Villages", "Turks"
)
new navalEvent(
	"awesome naval battle x40",
	"",
	"Maltese privateers", "Turks"
)
new navalEvent(
	"awesome naval battle x41",
	"",
	"Dunkirkers squadron under Collaart", "Dutch guardships"
)
new navalEvent(
	"awesome naval battle x42",
	"",
	"Spanish", "Dutch West India Company convoy"
)
new navalEvent(
	"awesome naval battle x43",
	"",
	"Dutch Zeeland squadron under Evertsen", "Dunkirkers under Collaart"
)
new navalEvent(
	"Battle off Lizard Point",
	"",
	"8 Spanish ships under Horna", "Dutch convoy and escort"
)
new navalEvent(
	"awesome naval battle x44",
	"",
	"Spanish under Hoces", "Dutch"
)
new navalEvent(
	"awesome naval battle x45",
	"",
	"Maltese galleys", "Tripolitan sailing ships"
)
new navalEvent(
	"awesome naval battle x46",
	"",
	"Venetians under Capello", "Algerines"
)
new navalEvent(
	"Battle of Getaria",
	"",
	"French under de Sourdis", "Spanish galleons under Hoces"
)
new navalEvent(
	"Battle of Cabañas",
	"",
	"Spanish treasure fleet", "Dutch under Jol"
)
new navalEvent(
	"Battle of Vado",
	"",
	"French", "Spanish"
)
new navalEvent(
	"Battle of Goa",
	"",
	"Portuguese", "Dutch East India Company"
)
new navalEvent(
	"Action of 18 February",
	"",
	"Dutch under Tromp", "Dunkirk fleet under Miguel de Horna"
)
new navalEvent(
	"Action of 30 September",
	"",
	"Dutch", "Portuguese"
)
new navalEvent(
	"Battle of the Downs",
	"",
	"Dutch under Tromp", "Spanish under de Oquendo"
)
new navalEvent(
	"awesome naval battle x47",
	"",
	"Spanish under Horna", "Stronger French force"
)
new navalEvent(
	"Action of 12–17 January",
	"",
	"Dutch fleet under Loos", "Spanish/Portuguese fleet under de Mascarenhas"
)
new navalEvent(
	"Action of 15 June",
	"",
	"Dunkirkers", "Dutch"
)
new navalEvent(
	"Battle of Cádiz",
	"",
	"French under Brézé", "Spanish under Gomez de Sandoval"
)
new navalEvent(
	"awesome naval battle x48",
	"",
	"Spanish", "French"
)
new navalEvent(
	"Second Battle of Tarragona",
	"",
	"French under de Sourdis", "Spanish"
)
new navalEvent(
	"Third Battle of Tarragona",
	"",
	"Spanish", "French"
)
new navalEvent(
	"awesome naval battle x49",
	"",
	"Spanish under Pietersen", "French and Portuguese"
)
new navalEvent(
	"Battle of Cape St. Vincent",
	"",
	"Spanish", "Dutch under Gijssels"
)
new navalEvent(
	"Battle of Barcelona",
	"",
	"French under Brézé", "Spanish under Ciudad Real"
)
new navalEvent(
	"awesome naval battle x50",
	"",
	"Portuguese", "Spanish"
)
new navalEvent(
	"Battle of the Gianh River",
	"",
	"Nguyễn navy", "Dutch East India Company"
)
new navalEvent(
	"Battle of Cartagena",
	"",
	"French", "Spanish"
)
new navalEvent(
	"Action of 16 May",
	"",
	"Danes", "Dutch ships hired to support Sweden"
)
new navalEvent(
	"awesome naval battle x51",
	"",
	"Danes", "33 hired Dutch ships"
)
new navalEvent(
	"Action of 7 July",
	"",
	"Danes", "Swedes"
)
new navalEvent(
	"Action of 28 September",
	"",
	"Maltese galleys", "Turkish sailing ships"
)
new navalEvent(
	"Battle of Femern",
	"",
	"Swedish/Dutch", "Danish"
)
//thats all for early 17th century
new navalEvent(
	"Battle of Tamandare Bay",
	"",
	"Dutch under Lichthart", "Portuguese under Paiva"
)
new navalEvent(
	"awesome naval battle x52",
	"",
	"Scottish", "Algerian Barbary pirates"
)
new navalEvent(
	"Action of September 1645",
	"",
	"Ottomans", "Combined Christian fleet"
)
new navalEvent(
	"Action of 1 October",
	"",
	"Combined Christian fleets", "Turks"
)
new navalEvent(
	"awesome naval battle x53",
	"",
	"French under du Mé", "Spanish"
)
new navalEvent(
	"Battles of La Naval de Manila",
	"",
	"Two Spanish galleons with Spanish and Filipino crew", "Dutch invasion fleet"
)
new navalEvent(
	"Action of 26 May",
	"",
	"Venetians", "Turks"
)
new navalEvent(
	"Battle of Orbetello",
	"",
	"Spanish", "French invasion fleet commanded by Brézé"
)
new navalEvent(
	"Action of 27 January",
	"",
	"Venetians under Morosini", "45 Ottoman galleys under Koca Musa Pasha"
)
new navalEvent(
	"Battle of Puerto de Cavite",
	"",
	"Spanish", "Dutch"
)
new navalEvent(
	"Establishment of the Neapolitan Republic",
	"",
	"Spanish", "French"
)
new navalEvent(
	"Battle of Focchies",
	"",
	"Venetians", "Large Turkish fleet "
)
new navalEvent(
	"awesome naval battle x54",
	"",
	"Parliamentarians", "French"
)
new navalEvent(
	"Action of 23 November",
	"",
	"Spanish", "French"
)
new navalEvent(
	"Action of 10 July",
	"",
	"Venetians under Mocenigo", "Turks"
)
new navalEvent(
	"Battle of Plymouth",
	"plymouth the sddm !?",
	"de Ruyter's 36 men-of-war", "Ayscue's 45 men-of-war"
)
new navalEvent(
	"Battle of Elba",
	"",
	"Dutch under van Galen", "English under Badiley "
)
new navalEvent(
	"Battle of the Kentish Knock",
	"",
	"English under Blake", "Dutch under de With "
)
new navalEvent(
	"Battle of Dungeness",
	"",
	"Dutch under Tromp", "English under Blake "
)
new navalEvent(
	"Battle of Portland",
	"",
	"English under Blake", "Dutch under Tromp"
)
new navalEvent(
	"Battle of Leghorn",
	"",
	"Dutch under Johan van Galen", "English under Badiley and Appleton"
)
new navalEvent(
	"Battle of the Gabbard",
	"",
	"English", "Dutch"
)
new navalEvent(
	"Battle of Scheveningen",
	"",
	"Dutch under Tromp", "English blockading fleet under Albemarle"
)
new navalEvent(
	"awesome naval battle x55",
	"",
	"Maltese privateers", "Turks"
)
new navalEvent(
	"Action of 2 May",
	"",
	"Dutch", "Portuguese"
)
new navalEvent(
	"First Battle of the Dardanelles",
	"",
	"Turks under Murat", "Venetians under Delfino"
)
new navalEvent(
	"awesome naval battle x56",
	"",
	"Venetians", "Turks"
)
new navalEvent(
	"Bombardment of Algiers",
	"",
	"English", "Algerines"
)
new navalEvent(
	"Action of 14 April",
	"",
	"English under Blake", "Barbary ships"
)
new navalEvent(
	"Second Battle of the Dardanelles",
	"",
	"Venetians under Mocenigo", "Turks under Mustafa"
)
new navalEvent(
	"awesome naval battle x57",
	"",
	"French under Vendôme", "Spanish"
)
new navalEvent(
	"Battle of Kotlin",
	"kothlin the java thing !?",
	"Russia", "Sweden"
)
new navalEvent(
	"Third Battle of the Dardanelles",
	"",
	"Venetians and Maltese under Marcello", "Turks under Chinam Pasha"
)
new navalEvent(
	"Battle of Nöteborg",
	"",
	"Swedish", "Russians"
)
new navalEvent(
	"Battle of Santa Cruz de Tenerife",
	"",
	"English under Blake", "Spanish"
)
new navalEvent(
	"Action of 3 May",
	"",
	"Venetians under Mocenigo", "Algerines"
)
new navalEvent(
	"Action of 18 May",
	"",
	"Venetians under Mocenigo", "Turks and Algerines"
)
new navalEvent(
	"Fourth Battle of the Dardanelles",
	"",
	"Venetians, Maltese and Papal forces under Mocenigo", "Turks"
)
new navalEvent(
	"Siege of Lemnos",
	"",
	"Ottomans", "Venetians"
)
new navalEvent(
	"awesome naval battle x58",
	"",
	"Venetians under Contarini", "Turks"
)
new navalEvent(
	"Battle of the Sound",
	"",
	"Danish-allied Dutch", "Swedish"
)
new navalEvent(
	"Capture of Kalamata",
	"",
	"Venetians", "Ottomans"
)
new navalEvent(
	"Battle of Ebeltoft",
	"",
	"Swedish", "Dutch/Danes"
)
new navalEvent(
	"Battle of Nyborg",
	"",
	"Dutch/Danes under de Ruyter", "Swedes"
)
new navalEvent(
	"awesome naval battle x59",
	"",
	"Venetians", "Turks"
)
new navalEvent(
	"Action of 27 August",
	"",
	"Venetians and Maltese", "Turks"
)
new navalEvent(
	"Action of 29 September",
	"",
	"Venetians", "Turkish \"Alexandria Caravan\""
)
new navalEvent(
	"Action of 29 December",
	"",
	"English squadron under Allin", "Dutch merchant fleet"
)
new navalEvent(
	"Action of March 1665",
	"",
	"French under Beaufort", "Algerines"
)
new navalEvent(
	"Battle of Lowestoft",
	"",
	"English under York", "Dutch under Van Wassenaer"
)
new navalEvent(
	"Battle of Vågen",
	"",
	"Dutch merchant fleet", "English"
)
new navalEvent(
	"Battle of Cherchell",
	"",
	"French under Beaufort", "Algerines"
)
new navalEvent(
	"Battle of Port Delphino",
	"",
	"French under d'Escrainville", "Turks"
)
new navalEvent(
	"Four Days Battle",
	"",
	"Dutch under de Ruyter", "English under Albemarle and Rupert"
)
new navalEvent(
	"St James's Day Battle",
	"",
	"English under Albemarle and Rupert", "Dutch under de Ruyter"
)
new navalEvent(
	"Action of 25 February",
	"",
	"Venetians under Molin", "Turks and Tunisians"
)
new navalEvent(
	"Invasion of Surinam",
	"",
	"Dutch under Crijnssen", "English under Byam"
)
new navalEvent(
	"Battle of the James River",
	"",
	"Dutch under Crijnssen", "Virginia tobacco fleet"
)
new navalEvent(
	"Raid on the Medway",
	"",
	"Dutch", "English"
)
new navalEvent(
	"Battle of Martinique",
	"",
	"English under Harman", "French"
)
new navalEvent(
	"Action of 8 March",
	"",
	"Venetians", "Turks"
)
new navalEvent(
	"Action of 2 May",
	"",
	"French", "Turks"
)
new navalEvent(
	"Action of 1668",
	"",
	"Barbary \"Turks\"", "Venetians"
)
new navalEvent(
	"Action of June 1669",
	"",
	"Privateers", "\"Alexandria Caravan\" escort"
)
new navalEvent(
	"Battle of Cádiz",
	"",
	"English Mary Rose", "Algerines"
)
new navalEvent(
	"Action of 28-29 December",
	"",
	"English Mary Rose", "Algerines"
)
new navalEvent(
	"Action of 17 August",
	"",
	"English/Dutch ships", "Algerines"
)
new navalEvent(
	"Battle of Saraighat",
	"",
	"Ahom Kingdom", "Mughals"
)
new navalEvent(
	"awesome naval battle x60",
	"",
	"Privateers", "Turkish galleys"
)
new navalEvent(
	"Action of 12 March",
	"",
	"English under Holmes", "Dutch merchant fleet"
)
new navalEvent(
	"First Battle of Schooneveld",
	"",
	"Dutch", "England/France"
)
new navalEvent(
	"Second Battle of Schooneveld",
	"",
	"Dutch", "England/France"
)
new navalEvent(
	"Battle of Texel",
	"",
	"Dutch", "England/France"
)
new navalEvent(
	"Battle of Masulipatnam",
	"",
	"Dutch East India Company", "English East India Company "
)
new navalEvent(
	"Battle of Ronas Voe",
	"",
	"English Navy", "Dutch East India Company"
)
new navalEvent(
	"Battle of the Lipari Islands",
	"",
	"French under Vivonne", "Spanish under de la Cueva"
)
new navalEvent(
	"awesome naval battle x61",
	"",
	"English", "Tripolitans"
)
new navalEvent(
	"Attack on Shipping in Tripoli",
	"",
	"English", "Tripolitans"
)
new navalEvent(
	"Battle of Palermo",
	"",
	"French under Vivonne", "Dutch/Spanish under de la Cerda and den Haen"
)
new navalEvent(
	"Battle of Bornholm",
	"",
	"Dutch/Danish under Iuel", "Swedes under Creutz"
)
new navalEvent(
	"Battle of Öland",
	"",
	"Dutch/Danish under Iuel", "Swedes under Creutz"
)
new navalEvent(
	"First Battle of Tobago",
	"",
	"Dutch under Binckes", "French under d'Estrées"
)
new navalEvent(
	"Battle of Møn",
	"",
	"Danes", "Swedes"
)
new navalEvent(
	"Battle of Køge Bay",
	"",
	"Danes and Dutch", "Swedes"
)
new navalEvent(
	"Second Battle of Tobago",
	"",
	"French under d'Estrées", "Dutch under Binckes"
)
new navalEvent(
	"Bombardment of Chios",
	"",
	"French", "Tripolitans"
)
new navalEvent(
	"Action of 30 September",
	"",
	"Spanish", "Brandenburgers"
)
new navalEvent(
	"Bombardment of Algiers",
	"",
	"Algerines", "French"
)
new navalEvent(
	"Battle of Penghu",
	"",
	"Qing dynasty", "Kingdom of Tungning"
)
new navalEvent(
	"Bombardment of Tripoli",
	"",
	"French under d'Estrées", "Tripolitans"
)
new navalEvent(
	"awesome naval battle x62",
	"",
	"Turks and Algerines under Mezzomorto", "Venetians"
)
new navalEvent(
	"Bombardment of Algiers",
	"",
	"Algerines", "French"
)
new navalEvent(
	"Battle of Bantry Bay",
	"",
	"French", "English"
)
new navalEvent(
	"Action of 26 March",
	"",
	"Turks and Algerines under Mezzomorto", "Venetians under Valier"
)
new navalEvent(
	"Battle of Beachy Head",
	"",
	"French", "Anglo-Dutch"
)
new navalEvent(
	"Naval battle off St. John",
	"",
	"French", "English"
)
new navalEvent(
	"Battle of Barfleur and La Hougue",
	"",
	"French", "English"
)
new navalEvent(
	"Battle of Barfleur and La Hougue",
	"",
	"English/Dutch", "French"
)
new navalEvent(
	"awesome naval battle x63",
	"",
	"French", "Spanish"
)
new navalEvent(
	"awesome naval battle x64",
	"",
	"French", "Tripolitans"
)
new navalEvent(
	"Battle of Daman",
	"",
	"Portuguese", "Omani"
)
new navalEvent(
	"Battle of Texel",
	"",
	"French under Bart", "Dutch under de Vries and others"
)
new navalEvent(
	"Battle of the Oinousses Islands",
	"",
	"Turkish", "Venetians under Zeno"
)
new navalEvent(
	"Action of 16 April",
	"",
	"French", "English"
)
new navalEvent(
	"Action of 18 April",
	"",
	"Dano-Swedish", "English"
)
new navalEvent(
	"Action of 10 August",
	"",
	"English", "Swedish"
)
new navalEvent(
	"Battle of Zeytinburnu",
	"",
	"Turks under Mezzomorto", "Venetians under Contarini"
)
new navalEvent(
	"Anglo-Swedish skirmish",
	"",
	"English", "Swedish"
)
new navalEvent(
	"Battle of Dogger Bank",
	"",
	"French", "Dutch"
)
new navalEvent(
	"Second Azov campaign",
	"",
	"Russians", "Ottomans"
)
new navalEvent(
	"Battle of Mamora",
	"",
	"Portugal", "Morocco"
)
new navalEvent(
	"Action of 14 July 1696",
	"",
	"French under D'Iberville", "English"
)
new navalEvent(
	"Siege of Pemaquid",
	"",
	"French and Abenaki", "English"
)
new navalEvent(
	"Battle of Hudson's Bay",
	"",
	"French", "English"
)
// NOW 18th century :sob:
new navalEvent(
	"War of the Spanish Succession",
	"",
	"Anglo-Dutch", "French and Spanish"
)
new navalEvent(
	"War of the Spanish Succession",
	"",
	"French under Coëtlogon", "Anglo-Dutch merchant fleet under Vlacq"
)
new navalEvent(
	"Battle of Orford Ness",
	"",
	"English under Whetstone", "Swedish under Psilander"
)
new navalEvent(
	"Battle of Cabrita Point",
	"",
	"English, Portuguese and Dutch under Leake", "Spanish and French under Desjean"
)
new navalEvent(
	"Battle of Hogland",
	"",
	"Sweden under Anckarstjerna", "Russia"
)
new navalEvent(
	"Battle of Santa Cruz de Tenerife",
	"",
	"Bourbon Spanish", "English under Jennings"
)
new navalEvent(
	"Action of 2 May",
	"",
	"French under Forbin", "English"
)
new navalEvent(
	"Battle at The Lizard",
	"",
	"2 French squadrons under Forbin and Duguay-Trouin", "British convoy and escort under Edwards"
)
new navalEvent(
	"Wager's Action",
	"",
	"British under Wager", "French-Spanish under du Casse and Fernández de Santillán"
)
new navalEvent(
	"Action of 25 June",
	"",
	"Maltese", "Tripolitans"
)
new navalEvent(
	"Capture of the galleon San Joaquin",
	"",
	"British under Littleton", "Spanish under Villanueva"
)
new navalEvent(
	"Battle of Rio de Janeiro",
	"",
	"French under Duguay-Trouin", "Portuguese"
)
new navalEvent(
	"awesome naval battle x65",
	"",
	"Maltese", "Algerines"
)
new navalEvent(
	"Action of 1713",
	"",
	"Portuguese", "Indians"
)
new navalEvent(
	"Battle of Gangut",
	"",
	"Russians under Apraksin", "Swedish"
)
new navalEvent(
	"Battle of Fehmarn",
	"",
	"Danes under Gabel", "Swedish under Wachtmeister"
)
new navalEvent(
	"Battle of Dynekilen",
	"",
	"Danes under Tordenskjold", "Swedish under Strömstierna"
)
new navalEvent(
	"Battle of Gothenburg",
	"",
	"Swedish under Strömstierna", "Danish under Tordenskjold "
)
new navalEvent(
	"Battle of Slankamen",
	"",
	"Ottomans", "Austrians"
)
new navalEvent(
	"Battle of Matapan",
	"",
	"Catholic coalition of Venice, Portugal, Malta and the Papal States", "Turks"
)
new navalEvent(
	"Battle of Strömstad",
	"",
	"Swedish under Giertta", "Danish under Tordenskjold"
)
new navalEvent(
	"Action of 1718",
	"",
	"Portuguese", "Indians"
)
new navalEvent(
	"Battle of Cape Passaro",
	"",
	"British under Byng", "Spanish under de Gaztañeta"
)
new navalEvent(
	"awesome naval battle x66",
	"",
	"Swedes under King Carl XII", "Danes under Paulssen"
)
new navalEvent(
	"Battle of Cape Fear River",
	"",
	"British under Rhett", "Pirates under Bonnet"
)
new navalEvent(
	"Battle of Ocracoke",
	"",
	"British Navy", "Blackbeard"
)
new navalEvent(
	"Capture of Eilean Donan Castle",
	"",
	"British Government", "Jacobites"
)
new navalEvent(
	"Battle of Ösel Island",
	"",
	"Russians under Senyavin", "Swedes under Wrangel"
)
new navalEvent(
	"Assault on Strömstad",
	"",
	"Danes under Rosenpalm", "Swedish under Örnfelt"
)
new navalEvent(
	"Battle of Cape St. Vincent",
	"",
	"Spanish under Torres", "English under Cavendish"
)
new navalEvent(
	"Raid on Nassau",
	"",
	"British under Rogers", "Spanish under Cornejo"
)
new navalEvent(
	"Capture of John Rackham",
	"",
	"British", "Pirates"
)
new navalEvent(
	"Battle of Cape Lopez",
	"",
	"British", "Pirates"
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"",
	"",
	"", ""
)
new navalEvent(
	"Action of 1 January",
	"",
	"Americans", "French under Rigaud"
)
new navalEvent(
	"Action of 31 March",
	"",
	"British under Dixon", "French under Decrès"
)
new navalEvent(
	"Action of 7 April",
	"",
	"British under Duckworth", "Spanish"
)
new navalEvent(
	"Battle of Puerto Plata Harbor",
	"",
	"Americans under Talbot and Hull", "French-Spanish"
)
new navalEvent(
	"Raid on Dunkirk",
	"",
	"British under Inman", "French"
)
new navalEvent(
	"Invasion of Curaçao",
	"",
	"Batavian-American-British", "French"
)
new navalEvent(
	"Action of 4 August",
	"",
	"British under Meriton", "French under Landolphe"
)
new navalEvent(
	"USS Boston vs Berceau",
	"",
	"Americans under Little", "French under Senez"
)
new navalEvent(
	"USS Enterprise vs Flambeau",
	"",
	"Americans under Shaw", "French"
)
new navalEvent(
	"Action of 10 December",
	"",
	"Spanish", "British"
)
new navalEvent(
	"Action of 19 February",
	"",
	"British under Barlow", "French"
)
new navalEvent(
	"Battle of West Kay",
	"",
	"Danish under Jessen", "British under Perkins"
)
new navalEvent(
	"Battle of Abukir (1801)",
	"",
	"British", "French"
)
new navalEvent(
	"Battle of Alexandria (1801)",
	"",
	"British", "French"
)
new navalEvent(
	"First Battle of Copenhagen",
	"British and john prevented France taking over Danish",
	"British under Nelson", "Danish under Fischer"
)
new navalEvent(
	"Action of 6 May",
	"",
	"British under Cochrane", "Spanish"
)
new navalEvent(
	"Action of 24 June",
	"",
	"French under Ganteaume", "British under Hallowell"
)
new navalEvent(
	"First Battle of Algeciras",
	"",
	"French-Spanish under Linois", "British under Saumarez"
)
new navalEvent(
	"Second Battle of Algeciras",
	"",
	"Anglo-Portuguese under Saumarez", "French-Spanish under Linois"
)
new navalEvent(
	"Action of 1 August",
	"",
	"Americans under Sterett", "Tripolitanians"
)
new navalEvent(
	"Raids on Boulogne",
	"",
	"French under Latouche Tréville", "British under Nelson"
)
new navalEvent(
	"Battle of Mahé",
	"",
	"British under Adam", "French"
)
new navalEvent(
	"Action of 27 May",
	"",
	"Algerines under Raïs Hamidou", "Portuguese"
)
new navalEvent(
	"Action of 17 June",
	"",
	"Tripolitanians", "Americans"
)
new navalEvent(
	"Action of 2 June",
	"",
	"Tripolitanians", "Americans under Porter"
)
new navalEvent(
	"Action of 22 June",
	"",
	"Americans under Rodgers", "Tripolitanians"
)
new navalEvent(
	"Action of 31 October",
	"",
	"Tripolitanians", "Americans under Porter and Bainbridge"
)
new navalEvent(
	"Blockade of Saint-Domingue",
	"to clear up any confusion it happened Near Santo Domingo",
	"British under Duckworth", "French under Rochambeau"
)
new navalEvent(
	"Battle of Pulo Aura",
	"",
	"British under Dance", "French under Linois"
)
new navalEvent(
	"Action of 7 July",
	"",
	"Tripolitanians", "Americans under Caldwell"
)
new navalEvent(
	"Action of 11 July",
	"",
	"British", "French"
)
new navalEvent(
	"Second Battle of Tripoli Harbor",
	"",
	"Tripolitanians", "Americans and Sicilians under Preble and Decatur"
)
new navalEvent(
	"Action of 5 October",
	"",
	"British under Moore", "Spanish under Bustamente"
)
new navalEvent(
	"Action of 25 November",
	"",
	"British under Strachan", "Spanish"
)
new navalEvent(
	"Action of 7 December",
	"",
	"British under Lawford and Hamond", "Spanish"
)
new navalEvent(
	"Battle of Diamond Rock",
	"",
	"French and Spanish under Cosmao", "British under Maurice"
)
new navalEvent(
	"Action of 4 July",
	"",
	"2 Russian ships", "French gunboat force"
)
new navalEvent(
	"Action of 15 July",
	"",
	"French", "British"
)
new navalEvent(
	"Battle of Blanc-Nez and Gris-Nez",
	"",
	"Dutch and French under Ver Huell", "Superior British squadron under Lord Keith"
)
new navalEvent(
	"Battle of Cape Finisterre",
	"",
	"British under Calder", "French under Villeneuve"
)
new navalEvent(
	"Action of 10 August",
	"",
	"British under Baker", "French"
)
new navalEvent(
	"Battle of Trafalgar",
	"unlike john, Nelson is later killed",
	"British under Nelson", "Franco-Spanish fleet under Villeneuve"
)
new navalEvent(
	"Battle of Cape Ortegal",
	"British capture 4 French battleship survivors from Trafalgar",
	"British under Strachan", "French under Pelley"
)
new navalEvent(
	"Battle of Blaauwberg",
	"British occupy Dutch Cape Colony",
	"British under Baird", "Batavians and French under Janssens"
)
new navalEvent(
	"Battle of San Domingo",
	"📴 Santo Domingo",
	"British under Duckworth", "French under Leissègues"
)
new navalEvent(
	"Action of 13 March",
	"",
	"British under Warren", "French under Linois"
)
new navalEvent(
	"Action of 4 July",
	"In Narenta Channel",
	"Russians", "French"
)
new navalEvent(
	"Action of 9 July",
	"",
	"British under Plampin", "French under Perroud"
)
new navalEvent(
	"Action of 26 July",
	"",
	"British", "Dutch under Aalbers"
)
new navalEvent(
	"Action of 23 August",
	"",
	"British under Lydiard and Brisbane", "Spanish"
)
new navalEvent(
	"Action of 25 September",
	"",
	"British battleships under Hood", "French frigate force under Soleil"
)
new navalEvent(
	"Action of 18 October",
	"",
	"British under Rainier", "Dutch"
)
new navalEvent(
	"Raid on Batavia",
	"",
	"British under Pellew", "Dutch"
)
new navalEvent(
	"Dardanelles operation",
	"unsurprisingly it happened in Dardanelles",
	"British under Duckworth", "Turkish under Selim III"
)
new navalEvent(
	"Battle of the Dardanelles",
	"near Cape Janizary",
	"Russians under Seniavin", "Turkish under Seydi Ali Pasha"
)
new navalEvent(
	"Action of 2 June",
	"",
	"Spanish", "British"
)
new navalEvent(
	"Battle of Athos",
	"happened at old john's house in northern Aegean",
	"Russians under Seniavin", "Turkish under Seydi Ali Pasha"
)
new navalEvent(
	"Second Battle of Copenhagen",
	"",
	"British under Gambier and Cathcart", "Danish under Peymann"
)
new navalEvent(
	"Capture of the Jeune Richard",
	"",
	"British", "French"
)
new navalEvent(
	"Battle of Zealand Point",
	"",
	"British under Parker", "Danish under Jessen"
)
new navalEvent(
	"Action of 4 April",
	"",
	"British under Maxwell", "Spanish"
)
new navalEvent(
	"Battle of Furuholm",
	"",
	"Swedish", "Danish under Fisker"
)
new navalEvent(
	"Battle of Saltholm",
	"",
	"Danish", "British"
)
new navalEvent(
	"awesome naval battle x67",
	"Atlas is captured",
	"Spanish", "French (Atlas)"
)
new navalEvent(
	"Capture of the Rosily Squadron",
	"",
	"Spanish", "French under Rosily"
)
new navalEvent(
	"Action of 10 November",
	"",
	"British under Seymour", "French under Pinsum"
)
new navalEvent(
	"Action of 22 January",
	"",
	"British under Pechell", "French under Lahalle"
)
new navalEvent(
	"Action of 10 February",
	"",
	"British under Pigot", "French under Rousseau"
)
new navalEvent(
	"Battle of Les Sables-d'Olonne",
	"",
	"British under Stopford", "French under Jurien"
)
new navalEvent(
	"Action of 27 February",
	"",
	"French under Dubourdieu", "British"
)
new navalEvent(
	"Action of 6 April",
	"",
	"British under Seymour", "French under Dupotet"
)
new navalEvent(
	"Battle of the Basque Roads",
	"",
	"British under Gambier", "French under Allemand"
)
new navalEvent(
	"Action of 14–17 April",
	"French battleship captured",
	"British under Cochrane", "French under Troude"
)
new navalEvent(
	"Action of 31 May",
	"",
	"French under Féretier", "East India Company"
)
new navalEvent(
	"Actions of 14–18 June and 6 July",
	"",
	"British under Mounsey", "France"
)
new navalEvent(
	"Battle of Maguelone",
	"",
	"British under Collingwood", "French under Baudin"
)
new navalEvent(
	"Action of 18 November",
	"",
	"French under Hamelin", "British East Indiamen"
)
new navalEvent(
	"Action of 13 December",
	"",
	"French under Roquebert", "British under Shortland"
)
new navalEvent(
	"Battle of Dawanshan Island",
	"",
	"Pirates", "Chinese Navy"
)
new navalEvent(
	"Boyd massacre",
	"",
	"Maori", "British brigantine Boyd"
)
new navalEvent(
	"Action of 3 May",
	"",
	"British under Brenton", "French under Cosa"
)
new navalEvent(
	"Action of 3 July",
	"in Mozambique Channel, one of the favorite spots of water buffalo 🐃",
	"French under Duperré", "British East Indiamen under Meriton"
)
new navalEvent(
	"Battle of Silda",
	"",
	"British under Byron", "Danish"
)
new navalEvent(
	"Battle of Grand Port",
	"",
	"French under Duperré", "British under Pym"
)
new navalEvent(
	"Action of 13 September",
	"",
	"French under Bouvet", "British under Corbet"
)
new navalEvent(
	"Action of 18 September",
	"",
	"British under Gordon and Rowley", "French under Hamelin"
)
new navalEvent(
	"Action of 15 November",
	"",
	"British under Malcolm", "French"
)
new navalEvent(
	"Battle of San Nicolás",
	"",
	"Spanish", "Argentines under Azopardo"
)
new navalEvent(
	"Battle of Lissa",
	"",
	"British under Hoste", "Larger Franco-Venetian squadron under Dubordieu"
)
new navalEvent(
	"Action of 24 March",
	"",
	"British under Macnamara", "French"
)
new navalEvent(
	"Battle of Khakeekera",
	"",
	"Bahrainis/Kuwaitis under Al Khalifa and Al-Sabah", "Saudis under al-Jalhami and Ibn Ufaysan"
)
new navalEvent(
	"Little Belt affair",
	"",
	"Americans under Rodgers", "British under Bingham"
)
new navalEvent(
	"Battle of Tamatave",
	"",
	"British under Schomberg", "French under Roquebert"
)
new navalEvent(
	"Action of 22 May",
	"",
	"Algerines under Hamidou ben Ali", "Tunisians"
)
new navalEvent(
	"Battle of Woody Point",
	"",
	"Battle of Woody Point", "Pacific Fur Company under Thorn"
)
new navalEvent(
	"Action of 31 July",
	"",
	"British under Maunsell", "French"
)
new navalEvent(
	"Action of 29 November",
	"",
	"British under Maxwell", "French under Montfort"
)
new navalEvent(
	"Action of 3 February",
	"",
	"British under Yeo", "Haitians"
)
new navalEvent(
	"Battle of Pirano",
	"",
	"British under Talbot", "French under Barré"
)
new navalEvent(
	"Allemand's escape from Lorient",
	"",
	"French under Allemand", "British under Gore"
)
new navalEvent(
	"Action of 22 May",
	"",
	"British under Hotham", "French under Féretier"
)
new navalEvent(
	"Battle of Lyngør",
	"",
	"British", "Danish under Holm"
)
new navalEvent(
	"First Battle of Sacket's Harbor",
	"",
	"Americans", "British under Woolsey"
)
new navalEvent(
	"USS Essex vs HMS Alert",
	"",
	"Americans under Porter", "British"
)
new navalEvent(
	"USS Constitution vs HMS Guerriere",
	"",
	"Americans under Hull", "British under Dacres"
)
new navalEvent(
	"USS United States vs HMS Macedonian",
	"",
	"Americans under Decatur", "British under Carden"
)
new navalEvent(
	"Battle of La Guaira",
	"",
	"Americans under Wooster", "British"
)
new navalEvent(
	"Sinking of HMS Peacock",
	"",
	"Americans under Lawrence", "British"
)
new navalEvent(
	"Battle of Rappahannock River",
	"",
	"British", "Americans under Stafford"
)
new navalEvent(
	"Action off James Island",
	"",
	"Americans under Downes", "British"
)
new navalEvent(
	"Second Battle of Sacket's Harbor",
	"",
	"Americans under Brown", "British under Prevost"
)
new navalEvent(
	"Battle of Boston Harbor",
	"",
	"British under Broke", "Americans under Lawrence"
)
new navalEvent(
	"Action off Charles Island",
	"",
	"Americans under Porter", "British"
)
new navalEvent(
	"Capture of HMS Dominica",
	"",
	"Americans", "British"
)
new navalEvent(
	"Capture of HMS Boxer",
	"",
	"Americans under Burrows", "British under Blyth"
)
new navalEvent(
	"Battle of Lake Erie",
	"",
	"Americans under Perry", "British under Barclay"
)
new navalEvent(
	"Nuku Hiva Campaign",
	"",
	"US", "Tai Pī (province)"
)
new navalEvent(
	"Canoe Fight",
	"",
	"Americans under Dale", "Creeks"
)
new navalEvent(
	"Battle of Martín García",
	"",
	"Argentines under Brown", "Spanish under Romarate"
)
new navalEvent(
	"Battle of Jobourg",
	"",
	"British under Seymour and Palmer", "French under Philibert and du Petit-Thouars"
)
new navalEvent(
	"Battle of Valparaíso",
	"",
	"British under Hillyar", "Americans under Porter"
)
new navalEvent(
	"Capture of HMS Epervier",
	"",
	"Americans under Warrington", "British"
)
new navalEvent(
	"Battle of Fort Oswego",
	"",
	"British under Yeo", "Americans under Mitchell"
)
new navalEvent(
	"Battle of Buceo",
	"",
	"Argentines under Brown", "Spanish"
)
new navalEvent(
	"Sinking of HMS Reindeer",
	"",
	"Americans under Blakely", "British"
)
new navalEvent(
	"Sinking of HMS Avon",
	"",
	"Americans under Blakely", "British under Arbuthnot"
)
new navalEvent(
	"Battle of Hampden",
	"",
	"British under Barrie and Sherbrooke", "Americans under Morris"
)
new navalEvent(
	"Battle of Plattsburgh",
	"",
	"Americans under Macdonough", "British under George Downie"
)
new navalEvent(
	"Battle of Fayal",
	"",
	"Americans under Reid", "British"
)
new navalEvent(
	"Battle of Lake Borgne",
	"",
	"British under Jones", "Americans"
)
new navalEvent(
	"Capture of USS President",
	"",
	"British under Hayes", "Americans under Decatur"
)
new navalEvent(
	"Capture of HMS Cyane and HMS Levant",
	"",
	"Americans under Stewart", "British under Falcon and Douglas"
)
new navalEvent(
	"Capture of HMS Penguin",
	"",
	"Americans under Biddle", "British"
)
new navalEvent(
	"Battle off Cape Gata",
	"",
	"Americans under Decatur", "Algerines under Raïs Hamidou"
)
new navalEvent(
	"Battle of Cape Palos",
	"",
	"Americans under Decatur", "Algerines"
)
new navalEvent(
	"Capture of East India Company ship Nautilus",
	"",
	"Americans under Warrington", "East India Company"
)
new navalEvent(
	"Bombardment of Algiers",
	"",
	"Anglo-Dutch under Pellew", "Algerines under Agha"
)
new navalEvent(
	"Battle of Pagallos",
	"",
	"Venezuelan Patriots", "Spanish"
)
new navalEvent(
	"Capture of the frigate Esmeralda",
	"",
	"Chileans under Cochrane", "Spanish"
)
new navalEvent(
	"Burning of the Ottoman flagship off Chios",
	"",
	"Greek under Kanaris", "Ottomans under Ali Pasha"
)
new navalEvent(
	"Battle of Nauplia",
	"",
	"Greeks under Miaoulis", "Ottomans under Mehmet Pasha"
)
new navalEvent(
	"Battle of Itaparica",
	"",
	"Brazilians", "Portuguese"
)
new navalEvent(
	"Battle of Montevideo",
	"",
	"Brazilians", "Portuguese"
)
new navalEvent(
	"Battle of Samos",
	"",
	"Greeks under Sachtouris", "Ottomans under Hüsrev Pasha"
)
new navalEvent(
	"Battle of Gerontas",
	"",
	"Greeks under Miaoulis and Papanikolis", "Ottomans under Mehmed Pasha"
)
new navalEvent(
	"Third siege of Missolonghi",
	"",
	"Egyptians and Ottomans under Ibrahim Pasha", "Greeks"
)
new navalEvent(
	"Battle of Sphacteria",
	"",
	"Egyptians under Ibrahim Pasha", "Greeks under Tsamados"
)
new navalEvent(
	"Battle of Maniaki",
	"",
	"Egyptians under Ibrahim Pasha", "Greeks under Papaflessas"
)
new navalEvent(
	"Battle of Andros",
	"",
	"Greeks under Sachtouris", "Ottomans under Hüsrev Pasha"
)
new navalEvent(
	"Battle of Tripoli",
	"",
	"Sardinians under Sivori", "Tripolitanians under Karamanli"
)
new navalEvent(
	"Battle of Punta Colares",
	"",
	"Slaves", "Slave traders"
)
new navalEvent(
	"Battle of Los Pozos",
	"",
	"11 Argentine vessels under Brown", "31 Brazilian vessels"
)
new navalEvent(
	"Battle of Quilmes",
	"",
	"Brazilians under Norton", "Argentines under Brown"
)
new navalEvent(
	"Battle of Juncal",
	"",
	"15 Argentines ships under Brown", "17 Brazilians under Pereira"
)
new navalEvent(
	"Battle of Monte Santiago",
	"",
	"Brazilians under Norton", "Argentines under Brown"
)
new navalEvent(
	"Battle of Itea",
	"",
	"Greeks under Hastings", "Turks"
)
new navalEvent(
	"Battle of Doro Passage",
	"",
	"Americans", "Greek pirates"
)
new navalEvent(
	"Battle of Navarino",
	"",
	"British, French and Russian under Codrington, de Rigny and van Heiden", "Turkish, Egyptians and Tunisians"
)
new navalEvent(
	"Action at Grambusa",
	"",
	"British and French", "Greek pirates"
)
new navalEvent(
	"Battle of Mariel",
	"",
	"Spanish under Pérez", "Mexicans"
)
new navalEvent(
	"awesome naval battle x68",
	"",
	"Russians", "Turks"
)
new navalEvent(
	"Bombardment of Tripoli",
	"",
	"Tripolitanians under Karamanli", "Sicilians"
)
new navalEvent(
	"Battle of Punta Malpelo",
	"",
	"Peruvians", "Colombians"
)
new navalEvent(
	"Battle of Cruces",
	"",
	"Peruvians under Guisse", "Colombians under Wright"
)
new navalEvent(
	"Battle of Praia da Vitória",
	"",
	"Portuguese liberals under Terceira", "Miguelists"
)
new navalEvent(
	"Capture of the Veloz Passagera",
	"",
	"British", "Slave trader"
)
new navalEvent(
	"Bombardment of Antwerp",
	"",
	"Dutch under Chassé", "Belgians"
)
new navalEvent(
	"Battle of the Tagus",
	"",
	"French under Roussin", "Portuguese Miguelists"
)
new navalEvent(
	"Capture of the brig Brillante",
	"",
	"British", "Slave trader"
)
new navalEvent(
	"Battle of Cape St. Vincent",
	"",
	"Portuguese under Napier", "Portuguese Miguelites"
)
//next is late 18th century
new navalEvent(
	"Action of 28 November",
	"",
	"Spanish under Stuart", "Algerines"
)
new navalEvent(
	"Battle of Calicut",
	"",
	"Portuguese", "Marathas"
)
new navalEvent(
	"Action of 16 April",
	"",
	"Spanish", "Algerines"
)
new navalEvent(
	"Action of 8 June 1755",
	"",
	"British under Boscawen", "French under Hocquart"
)
new navalEvent(
	"Battle of Minorca",
	"",
	"French under La Galissonnière", "British under Byng"
)
new navalEvent(
	"Battle of Chandannagar",
	"",
	"British under Clive and Watson", "French Indies Company"
)
new navalEvent(
	"Battle of Cartagena",
	"",
	"British under Osborn", "French under Duquesne"
)
new navalEvent(
	"Action oF 29 April",
	"",
	"British under Denis", "French under Rohan"
)
new navalEvent(
	"BAttle of Cuddalore",
	"",
	"British under Pocock", "French under d'Aché"
)
new navalEvent(
	"Battle of Cape Palos",
	"",
	"Spanish", "AlGerines"
)
new navalEvent(
	"Battle of NeGapatam",
	"",
	"British under POcock", "French under d'Aché"
)
new navalEvent(
	"Le Havre raid",
	"",
	"British under Rodney", "French under Charles, Prince of Soubise"
)
new navalEvent(
	"BaTtle of Lagos",
	"",
	"British under Boscawen", "French under La Clue-Sabran"
)
new navalEvent(
	"Battle of Frisches Haff",
	"",
	"Swedish", "Prussians"
)
new navalEvent(
	"Battle of Quiberon Bay",
	"",
	"British under Hawke", "French under Brienne"
)
new navalEvent(
	"Battle of Bishops Court",
	"",
	"British under Elliot", "French under Thurot"
)
new navalEvent(
	"Battle of Pointe-aux-Trembles",
	"",
	"British under Swanton", "French under Vauquelin"
)
new navalEvent(
	"Battle of Restigouche",
	"",
	"British under Byron", "French relief force"
)
new navalEvent(
	"Battle of the Windward Passage",
	"",
	"British under Holmes", "French"
)
new navalEvent(
	"Action of 17 July",
	"",
	"British", "French"
)
new navalEvent(
	"Battle of Cape Finisterre",
	"",
	"British", "French"
)
new navalEvent(
	"Action of 31 May",
	"",
	"British under Sawyer and Pownoll", "Spanish"
)
new navalEvent(
	"Siege of Havana",
	"",
	"British", "Spanish"
)
new navalEvent(
	"Action of 30 October",
	"",
	"British under Parker", "Spanish"
)
new navalEvent(
	"Siege of Colónia do Sacramento",
	"",
	"Spanish under Cevallos", "Portuguese"
)
new navalEvent(
	"Second Siege of Colónia do Sacramento",
	"",
	"Spanish under Cevallos", "Portuguese"
)
new navalEvent(
	"Larache expedition",
	"",
	"Moroccans under Mohammed III", "French under du Chaffault"
)
new navalEvent(
	"Battle of Nauplia",
	"",
	"Turks", "Russians"
)
new navalEvent(
	"Battle of Chesma",
	"",
	"Russians", "Turkish"
)
new navalEvent(
	"Battle of Patras",
	"",
	"Russians", "Turkish"
)
new navalEvent(
	"First Battle of Kerch Strait",
	"",
	"Russians under Tchitchagov and Seniavin", "Turks"
)
new navalEvent(
	"Battle of Machias",
	"",
	"Americans under O'Brien", "British"
)
new navalEvent(
	"Raid on Saint John",
	"",
	"Americans under O'Brien", "British"
)
new navalEvent(
	"Raid of Nassau",
	"",
	"Americans under Hopkins and Nicholas", "British under Browne"
)
new navalEvent(
	"Battle of Block Island",
	"BFDI reference ??",
	"British", "Americans under Hopkins"
)
new navalEvent(
	"Battle of Turtle Gut Inlet",
	"",
	"Americans under Barry", "British under Hudson and Graeme"
)
new navalEvent(
	"The great john war V1",
	"very awesome battle",
	"John, Jim, Jane", "Evil John"
)
new navalEvent(
	"Raid on Canso",
	"",
	"Americans under Jones", "British"
)
new navalEvent(
	"Battle of Valcour Island",
	"",
	"British under Carleton", "Americans under Arnold"
)
new navalEvent(
	"Battle off Yarmouth",
	"",
	"British", "Americans"
)
new navalEvent(
	"Capture of USS Hancock",
	"",
	"British", "Americans"
)
new navalEvent(
	"Siege of Fort Mifflin",
	"",
	"British under Howe", "Americans under Hazelwood"
)
new navalEvent(
	"Battle off Barbados",
	"",
	"British under Biddle", "Americans"
)
new navalEvent(
	"Frederica Naval Action",
	"",
	"Americans", "British under Elbert"
)
new navalEvent(
	"North Channel Naval Duel",
	"",
	"Americans under Jones", "British"
)
new navalEvent(
	"Battle off Liverpool",
	"",
	"British", "French"
)
new navalEvent(
	"Action of 11 September",
	"",
	"French", "British"
)
new navalEvent(
	"Battle of St. Lucia",
	"",
	"British under Barrington", "French under d'Estaing"
)
new navalEvent(
	"Action of 31 January",
	"",
	"British under Pownoll", "French"
)
new navalEvent(
	"Action of 13 May",
	"",
	"British under Wallace", "French"
)
new navalEvent(
	"Battle of Grenada",
	"",
	"French under d'Estaing", "British under Byron"
)
new navalEvent(
	"Penobscot Expedition",
	"",
	"British under Collier", "Americans under Lovell and Saltonstall"
)
new navalEvent(
	"Battle of Lake Pontchartrain",
	"",
	"American-Spanish under Pickles", "British"
)
new navalEvent(
	"Action of 11 Sep",
	"911 :joy:",
	"French", "British under Mackenzie"
)
new navalEvent(
	"Action of 14 September",
	"",
	"British under Montagu", "Spanish"
)
new navalEvent(
	"Action of 6 October",
	"",
	"French", "British under Farmer"
)
new navalEvent(
	"Action of 11 November",
	"",
	"British under Graeme", "Spanish"
)
new navalEvent(
	"Action of 20 November",
	"",
	"British", "Spanish"
)
new navalEvent(
	"Action of 12 December",
	"",
	"British under Inglis", "Spanish"
)
new navalEvent(
	"John War V2 (theres no johns in this one but instead our cats)",
	"",
	"Silly", "Masa"
)
new navalEvent(
	"Battle of Martinique",
	"",
	"British under Parker", "French under Lamotte"
)
new navalEvent(
	"Battle of Guadeloupe",
	"",
	"British under Rowley", "French"
)
new navalEvent(
	"Action of 8 January",
	"",
	"British under Rodney", "Spanish"
)
new navalEvent(
	"Battle of Cape St. Vincent",
	"",
	"British under Rodney", "Spanish under Lángara"
)
new navalEvent(
	"Battle of Martinique",
	"",
	"French under de Guichen", "British under Rodney"
)
new navalEvent(
	"Action of 15 June",
	"",
	"British under Pownoll", "French"
)
new navalEvent(
	"Action of 9 August",
	"",
	"Spanish-French under Córdova", "British under Moutray"
)
new navalEvent(
	"Action of 10 August",
	"",
	"British under Williams", "French under Rumain"
)
new navalEvent(
	"Action of 13 August",
	"",
	"British under MacBride", "French under Clonard"
)
new navalEvent(
	"Action of 30 September",
	"",
	"British under Montagu", "French"
)
new navalEvent(
	"awesome naval battle x69",
	"",
	"Spanish-French under Córdova", "British"
)
new navalEvent(
	"Action of 4 January",
	"",
	"British under Goodall and Mulgrave", "French under Tanouarn and Grimouard"
)
new navalEvent(
	"Action of 4 February",
	"",
	"British under Moreton", "Dutch under Krul"
)
new navalEvent(
	"Action of 25 February",
	"",
	"British under Mann", "Spanish"
)
new navalEvent(
	"Battle of Fort Royal",
	"",
	"French under de Grasse", "British under Hood"
)
new navalEvent(
	"Action of 1 May",
	"",
	"British under Collier", "Spanish under Winthuysen"
)
new navalEvent(
	"Battle of Blomindon",
	"",
	"British", "Americans"
)
new navalEvent(
	"Action of 30 May",
	"",
	"British under Williams and Pakenham", "Dutch under Oorthuys and Melvill"
)
new navalEvent(
	"Naval battle off Cape Breton",
	"",
	"French under La Pérouse and Latouche", "British convoy"
)
new navalEvent(
	"Battle of Saldanha Bay",
	"",
	"British under Johnstone", "Dutch"
)
new navalEvent(
	"Action of 2 September",
	"",
	"British under Douglas", "French"
)
new navalEvent(
	"Battle of the Chesapeake",
	"",
	"French under de Grasse", "British under Graves"
)
new navalEvent(
	"Capture of HMS Savage",
	"",
	"Americans", "British under Stirling"
)
new navalEvent(
	"Second Battle of Ushant",
	"",
	"British under Kempenfelt", "French under de Guichen"
)
new navalEvent(
	"Action of 15 January",
	"",
	"British", "Spanish"
)
new navalEvent(
	"Battle of St. Kitts",
	"",
	"British under Hood", "French under de Grasse"
)
new navalEvent(
	"Action of 16 March",
	"",
	"British under Pole", "Spanish"
)
new navalEvent(
	"Battle of Delaware Bay",
	"",
	"Americans under Barney", "British under Mason and Rogers"
)
new navalEvent(
	"Battle of the Saintes",
	"",
	"British under Rodney", "French under de Grasse"
)
new navalEvent(
	"Battle of the Mona Passage",
	"",
	"British under Hood", "French under Framond"
)
new navalEvent(
	"Battle of Ushant",
	"",
	"British under Barrington, Jervis and Maitland", "French"
)
new navalEvent(
	"Battle off Halifax",
	"",
	"British", "Americans under Ropes"
)
new navalEvent(
	"Action of 4 September",
	"",
	"British under Trollope", "French"
)
new navalEvent(
	"Action of 15 September",
	"",
	"British under Elphinstone", "French under Latouche"
)
new navalEvent(
	"Battle of Kedges Strait",
	"",
	"British", "Americans"
)
new navalEvent(
	"Action of 6 December",
	"",
	"British", "French under de Borda"
)
new navalEvent(
	"Action of 12 December",
	"",
	"British under Luttrell", "Americans and French under Baudin"
)
new navalEvent(
	"Battle of the Delaware Capes",
	"",
	"British under Frederick", "Americans"
)
new navalEvent(
	"Action of 22 January",
	"",
	"British under Russell", "French under Kergariou-Locmaria"
)
new navalEvent(
	"Action of 15 February",
	"",
	"British under Linzee", "French"
)
new navalEvent(
	"Action of 17 February",
	"",
	"British", "French"
)
new navalEvent(
	"Action of 11 April",
	"",
	"British under Graves", "French under Villaret de Joyeuse"
)
new navalEvent(
	"Battle of Cuddalore",
	"",
	"French under Suffren", "British under Hughes"
)
new navalEvent(
	"Bombardment of Algiers",
	"",
	"Algerines under Mohammed V", "Spanish under Barceló"
)
new navalEvent(
	"Bombardment of Algiers",
	"",
	"Algerines under Mohammed V", "Spanish-Neapolitan-Maltese-Portuguese under Barceló and Mazarredo"
)
new navalEvent(
	"awesome naval battle x70",
	"",
	"Russians", "Turks"
)
new navalEvent(
	"Siege of Ochakov",
	"",
	"Russians under Nassau-Siegen and Jones", "Turkish under Hüseyin Pasha and Hasan Pasha"
)
new navalEvent(
	"Battle of Fidonisi",
	"",
	"Russians under Voinovich", "Ottomans under Hasan Pasha"
)
new navalEvent(
	"Battle of Ochakov",
	"",
	"Russians under Potemkin", "Turkish under Hüseyin Pasha and Hasan Pasha"
)
new navalEvent(
	"Action of 26 May",
	"",
	"Portuguese", "Algerines"
)
new navalEvent(
	"Action of 2 June",
	"",
	"Russians", "Turks"
)
new navalEvent(
	"Battle of Svensksund",
	"",
	"Russians under Nassau-Siegen", "Swedes under Ehrensvärd"
)
new navalEvent(
	"awesome naval battle x71",
	"",
	"Russians", "Swedes"
)
new navalEvent(
	"Battle of Elgsö",
	"",
	"Swedes under Armfelt", "Russians under Treneven"
)
new navalEvent(
	"Battle of Reval",
	"",
	"Russians under Chichagov", "Swedes under Charles XIII"
)
new navalEvent(
	"Battle of Fredrikshamn",
	"",
	"Swedes under Gustav III", "Russians"
)
new navalEvent(
	"Battle of Andros",
	"",
	"Ottomans and Algerians", "Russians under Katsonis"
)
new navalEvent(
	"Battle of Björkösund",
	"",
	"Swedish", "Russians under Nassau-Siegen"
)
new navalEvent(
	"Battle of Svensksund",
	"The largest naval battle in the Baltic Sea of all times; extremely heavy losses by Russians ",
	"Swedish under Gustav III and Cronstedt", "Russians under Nassau-Siegen"
)
new navalEvent(
	"Battle of Kerch Strait",
	"",
	"Russians under Ushakov", "Turks"
)
new navalEvent(
	"Battle of the Sulina",
	"",
	"Russians", "Turks"
)
new navalEvent(
	"Battle of Tulcea",
	"",
	"Russians", "Turks"
)
new navalEvent(
	"Siege of Izmail",
	"",
	"Russians under Suvorov", "Turks under Mehmed Pasha"
)
new navalEvent(
	"Battle of Măcin",
	"",
	"Russians under Repnin", "Turkish rowing vessels under Yusuf Pasha"
)
new navalEvent(
	"Battle of Cape Kaliakra",
	"",
	"Russians under Ushakov", "Turks"
)
new navalEvent(
	"Bombardment of Tangier",
	"",
	"Morocco", "Spain"
)
new navalEvent(
	"Battle of Tellicherry",
	"",
	"British under Strachan", "French"
)
new navalEvent(
	"Action of 18 June",
	"",
	"British under Pellew", "French"
)
new navalEvent(
	"Siege of Toulon",
	"",
	"French Republicans under Napoleon", "French Royalists"
)
new navalEvent(
	"Raid on Genoa",
	"",
	"British under Gell", "French"
)
new navalEvent(
	"Action of 20 October",
	"",
	"British under Saumarez", "French"
)
new navalEvent(
	"Action of 24 October",
	"",
	"French", "British"
)
new navalEvent(
	"Siege of San Fiorenzo",
	"",
	"Anglo-Corsican", "French"
)
new navalEvent(
	"Siege of Bastia",
	"",
	"Anglo-Corsican", "French"
)
new navalEvent(
	"Action of 23 April",
	"",
	"British under Warren", "French"
)
new navalEvent(
	"Action of 5 May",
	"",
	"British", "French"
)
new navalEvent(
	"Action of 7 May",
	"",
	"British under Boyles", "French under Linois"
)
new navalEvent(
	"Frigate action of 29 May",
	"",
	"British under Laforey", "French"
)
new navalEvent(
	"The Glorious First of June",
	"",
	"British under Howe", "French under Villaret de Joyeuse"
)
new navalEvent(
	"Action of 8 June",
	"",
	"French under Martin", "Sardinians"
)
new navalEvent(
	"Battle of Mykonos",
	"",
	"British under Paget", "French"
)
new navalEvent(
	"Siege of Calvi",
	"",
	"Anglo-Corsican under Hood, Nelson and Stuart", "French under Casabianca"
)
new navalEvent(
	"awesome naval battle x72",
	"",
	"British", "French"
)
new navalEvent(
	"Action of 21 October",
	"",
	"British under Pellew", "French under Thévenard"
)
new navalEvent(
	"Action of 6 November",
	"",
	"French under Nielly", "British under Bligh"
)
new navalEvent(
	"Croisière du Grand Hiver",
	"",
	"British under Smith", "French under Villaret de Joyeuse"
)
new navalEvent(
	"Capture of the Dutch fleet at Den Helder",
	"",
	"French", "Dutch under de Winter"
)
new navalEvent(
	"Battle of the Gulf of Roses",
	"",
	"Spanish under Lángara", "French"
)
new navalEvent(
	"Action of 8 March",
	"",
	"British", "French under Lejoille"
)
new navalEvent(
	"Battle of Genoa",
	"",
	"Anglo-Neapolitans under Hotham", "French under Martin"
)
new navalEvent(
	"Action of 10 April",
	"",
	"British under Colpoys", "French"
)
new navalEvent(
	"Biscay campaign of June 1795",
	"",
	"British under Cornwallis", "French under Vence"
)
new navalEvent(
	"Cornwallis's Retreat",
	"",
	"British under Cornwallis", "French under Villaret de Joyeuse"
)
new navalEvent(
	"Battle of Groix",
	"",
	"British under Hood", "French under Villaret de Joyeuse"
)
new navalEvent(
	"Action of 24 June",
	"",
	"British under Towry", "French under Perrée"
)
new navalEvent(
	"Battle of the Hyères Islands",
	"",
	"Anglo-Neapolitans under Hotham and Nelson", "French under Martin"
)
new navalEvent(
	"Action of 22 August",
	"",
	"British under Alms", "Batavians"
)
new navalEvent(
	"Battle of the Levant Convoy",
	"",
	"French under Richery", "British"
)
new navalEvent(
	"Action of 12 May",
	"",
	"British under Halsted", "Batavians"
)
new navalEvent(
	"Action of 31 May",
	"",
	"British under Nelson", "French"
)
new navalEvent(
	"Atlantic raid of June 1796",
	"",
	"British under Williams", "French"
)
new navalEvent(
	"Action of 13 October",
	"",
	"British under Bowen", "Spanish"
)
new navalEvent(
	"Action of 13 January",
	"",
	"British under Pellew and Reynolds", "French under Lacrosse"
)
new navalEvent(
	"Action of 25 January",
	"",
	"Spanish", "British under Lord Garlies"
)
new navalEvent(
	"Bali Strait incident",
	"",
	"British", "French under Sercey"
)
new navalEvent(
	"Battle of Cape St. Vincent",
	"",
	"British under Jervis", "Spanish under Córdoba"
)
new navalEvent(
	"Invasion of Trinidad",
	"",
	"British under Abercromby", "Spanish under Chacón"
)
new navalEvent(
	"Action of 26 March",
	"",
	"Austrians and Venetians", "French"
)
new navalEvent(
	"Battle of Jean-Rabel",
	"",
	"British", "French"
)
new navalEvent(
	"Action of 26 April",
	"",
	"British under Martin", "Spanish"
)
new navalEvent(
	"Action of 16 May",
	"",
	"Danish under Bille", "Tripolitans under Yusuf Karamanli"
)
new navalEvent(
	"Assault on Cádiz",
	"",
	"Spanish under Mazzarredo and Gravina", "British under Nelson and Jervis"
)
new navalEvent(
	"Battle of Santa Cruz de Tenerife",
	"",
	"Spanish under Gutiérrez", "British under Nelson"
)
new navalEvent(
	"Battle of Camperdown",
	"",
	"British under Duncan", "Dutch under de Winter"
)
new navalEvent(
	"Battle of the Raz de Sein",
	"",
	"British under Hood", "French under Lhéritier"
)
new navalEvent(
	"Action of 30 May",
	"",
	"British under Laforey", "French"
)
new navalEvent(
	"Action of 27 June",
	"",
	"British under Foote", "French"
)
new navalEvent(
	"Action of 30 June",
	"",
	"British under Stirling ", "French"
)
new navalEvent(
	"Capture of La Croyable",
	"",
	"Americans under Decatur", "French"
)
new navalEvent(
	"Action of 15 July",
	"",
	"British under Dixon", "Spanish"
)
new navalEvent(
	"Battle of the Nile",
	"",
	"British under Nelson", "Moored French fleet under Brueys"
)
new navalEvent(
	"Action of 18 August",
	"",
	"French under Lejoille", "British under Thompson"
)
new navalEvent(
	"Action of 12 October",
	"",
	"British under Warren", "French invasion force under Bompart"
)
new navalEvent(
	"Action of 24 October",
	"",
	"British under King", "Batavians"
)
new navalEvent(
	"deltarune chapter 2 acid tunnel battle",
	"",
	"kris and ralsei", "rouxls kaard"
// i HAD to add this fr
)
new navalEvent(
	"Action of 14 December",
	"",
	"French", "British"
)
new navalEvent(
	"Action of 19 January",
	"",
	"Spanish under Mourelle", "British"
)
new navalEvent(
	"Action of 6 February",
	"",
	"British under Bowen", "Spanish"
)
new navalEvent(
	"Action of 9 February",
	"",
	"British under Ball", "French"
)
new navalEvent(
	"USS Constellation vs L'Insurgente",
	"dumb name for a battle",
	"Americans under Truxton", "French"
)
new navalEvent(
	"Action of 28 February",
	"",
	"British under Cooke", "French under Beaulieu"
)
new navalEvent(
	"Battle of Qena",
	"dude they forgot to capitalize Ottoman thats embarassing as hell",
	"ottoman empire, Arab forces from Hijaz and Egyptian Fellahin", "France under Captain Morandi"
)
new navalEvent(
	"Action of 18 June",
	"",
	"British under Lord Keith", "French under Perrée"
)
new navalEvent(
	"Action of 7 July",
	"",
	"Spanish", "British under Maitland"
)
new navalEvent(
	"Battle of Abukir (1799)",
	"",
	"French", "Ottomans"
)
new navalEvent(
	"Action of 15 August",
	"",
	"Algerines", "Portuguese"
)
new navalEvent(
	"Action of 16 October",
	"",
	"British under Pierrepont", "Spanish"
)
new navalEvent(
	"Cutting out of the Hermione",
	"",
	"British under Hamilton", "Spanish"
)
new navalEvent(
	"Battle of Port Louis",
	"",
	"British", "French under l'Hermite"
)
new navalEvent('Convoy de la Victoria','Republicans fail to stop Nationalist convoy','Spanish Nationalists','Spanish Republicans (Alcalá Galiano)')
new navalEvent('Action of 8 August','Blue Shadow is sunk','Spanish Nationalists (Almirante Cervera)','British (Blue Shadow)')
new navalEvent('Battle of Majorca','Republican amphibious assault fails','Spanish Nationalists','Spanish Republicans')
new navalEvent('Spanish Guinea uprising','Republican prison ship is sunk','','')
new navalEvent('Battle of Cape Espartel','Almirante Ferrándiz is sunk','','Spanish Republicans (Almirante Ferrándiz)')
new navalEvent('Action of 14 December','Komsomol is sunk off Oran','Spanish Nationalists (Canarias)','Soviets (Komsomol)')
new navalEvent('Action of 10 January','Smidovich is captured','Spanish Nationalists (Velasco)','Soviets (Smidovich)')
new navalEvent('Action of 28 March','Gardelaki is captured','Spanish Nationalists (Uad Kert)','Greeks (Gardelaki)')
new navalEvent('Action of 2 April','Poli is sunk','Spanish Nationalists (Baleares)','Greeks (Poli)')
new navalEvent('Action of 4 April','Janu is captured','Spanish Nationalists (Huelva)','Panamanians (Janu)')
new navalEvent('Action of 5 April','Nagos is captured','Spanish Nationalists (Maria Teresa)','Greeks (Nagos)')
new navalEvent('Action of 6 April','Andra is sunk','Spanish Nationalists (Galerna)','Panamanians (Andra)')
new navalEvent('Action of 16 April','Hordena is captured','Spanish Nationalists (Almirante Cervera)','Panamanians (Hordena)')
new navalEvent('Attack on the Barletta','Barletta is bombed; six Italian sailors are killed','Spanish Republicans','Italians (Barletta)')
new navalEvent('Attack on the Albatros','No casualties','','Germans (Albatros)')
new navalEvent('Deutschland incident','Thirty-one aboard the Deutschland are killed and 74 are injured','Spanish Republicans and Soviets','Germans (Deutschland)')
new navalEvent('Bombardment of Almería','Retaliation for attack on Admiral Scheer','Germans (Admiral Scheer)','Spanish Republicans')
new navalEvent('Action of 7 July','Liberte is captured','Spanish Nationalists (Almirante Cervera)','French (Liberte)')
new navalEvent('Action of 14 July','Molton seized off Santander','Spanish Nationalists (Almirante Cervera and Galerna)','British (Molton and Royal Oak)')
new navalEvent('Battle of Shanghai','In the Yangtze River; Japanese capture Shanghai[8]','Japanese','Chinese')
new navalEvent('Action of 15 August','George W. McKnight is disabled','Italians (Freccia)','Panamanians (George W. McKnight)')
new navalEvent('Action of 11 August 1937','Campeador is sunk','Italians (Saetta)','Spanish Republicans (Campeador)')
new navalEvent('Action of 31 August','Timiryazev is sunk','Italians (Turbine)','Soviets (Timiryazev)')
new navalEvent('Action of 1 September','Woodford is sunk','Italians (Diaspro)','British (Woodford)')
new navalEvent('Action of 3 September','Blagoev is sunk','Italians (Luigi Settembrini)','Soviets (Blagoev)')
new navalEvent('Action of 12 December','Sydney is captured','Spanish Nationalists (Lazaro)','French (Sydney)')
new navalEvent('USS Panay incident','Panay sunk','Japanese under Murata and Okumiya','Americans (Panay)')
new navalEvent('Action of 21 September','Francois is captured','Spanish Nationalists (Mallorca)','French (Francois)')
new navalEvent('Sinking of the Endymion','Endymion is sunk','Spanish Nationalists (General Sanjurjo)','British (Endymion)')
new navalEvent('Capture of the Pomaron','Pomaron captured','Spanish Nationalists (Vincente Puchol)','Estonians (Pomaron)')
new navalEvent('Action of 22 January','Juss is captured','Spanish Nationalists (Mallorca)','Estonians (Juss)')
new navalEvent('Action of 19 March','Lensovet is captured','Spanish Nationalists','Soviets (Lensovet)')
new navalEvent('Capture of the Alix','Alix is captured','Spanish Nationalists (Huevla)','Norwegians (Alix)')
new navalEvent('Action of 19 May','Ellinico Vuono is captured','Spanish Nationalists (Canarias)','Greeks (Ellinico Vuono)')
new navalEvent('Capture of the Stepanov','Skvortzov Stepanov is captured','','Soviets (Skvortzov Stepanov)')
new navalEvent('Capture of the Jan','Jan is captured','Spanish Nationalists (Iñasi)','Danish (Jan)')
new navalEvent('Action of 30 May','Wintonia is captured','Spanish Nationalists','Panamanians (Wintonia)')
new navalEvent('Action of 31 May','Potishev is captured','Spanish Nationalists (Vicente Puchol)','Soviets (Potishev)')
new navalEvent('Battle of Wuhan','Japanese capture Wuhan','Japanese','Chinese')
new navalEvent('Action of 21 July','Skulda is captured','Spanish Nationalists','Norwegians (Skulda)')
new navalEvent('Action of 17 October','Katayama is captured','Spanish Nationalists (Vulcano)','Soviets (Katayama)')
new navalEvent('Action of 23 October','Tsyurupa is captured','Spanish Nationalists (Almirante Cervera)','Soviets (Tsyurupa)')
new navalEvent('Action of 2 November','Max Hoels is captured','Spanish Nationalists (Vulcano)','Soviets (Max Hoels)')
new navalEvent('Action of 9 November','Nicolau Eleni is captured','Spanish Nationalists','Greeks (Nicolau Eleni)')
new navalEvent('Capture of the Victoria','Victoria is captured','Spanish Nationalists (Mar Cantábrico)','Greeks (Victoria)')
new navalEvent('Sinking of the Hanna','Hanna is sunk','Spanish Nationalists (General Mola)','Dutch (Hanna)')
new navalEvent('Action of 19 November','Everards is captured','Spanish Nationalists','Latvians (Everards)')
new navalEvent('Action of 15 January','Aunis is captured','Spanish Nationalists (Dato)','French (Aunis)')
new navalEvent('Action of 28 January','Lake Lugano is sunk','Spanish Nationalists (Mar Negro)','British (Lake Lugano)')
new navalEvent('Battle of Hel','All Polish ships are sunk or captured','Germans under Eberhardt','Polish under Steyer')
new navalEvent('Battle of Russarö','Finnish coastal guns damage Soviet warships, forcing their retreat','Finnish','Soviets (Kirov, Stremitelny and Smetlivy)')
new navalEvent('Battle of the River Plate','Admiral Graf Spee is damaged and later scuttled','British and New Zealanders under Harwood','Germans under Langsdorff (Admiral Graf Spee)')
new navalEvent('Battle of Utö','Finnish repel Soviets from attacking a lighthouse','Finnish','Soviets')
new navalEvent('Action of 8 April 1940','Glowworm is sunk','Germans (Admiral Hipper)','British (Glowworm)')
new navalEvent('Preceding Battle of Narvik','Norwegian coastal defense ships are sunk','Germans','Norwegians (Norge and Eidsvold)')
new navalEvent('Battle of Drøbak Sound','Blücher is sunk near Oscarsborg Fortress','Norwegians','Germans (Blücher)')
new navalEvent('Battle of Horten Harbour','Norwegian minesweepers attempt to defend the naval base in Horten but fail','Germans under Strelow and Wilcke (Emden)','Norwegians')
new navalEvent('Battle of Kristiansand','Germans successfully take Odderøya Fortress','Germans (Karlsruhe and Seattle)','')
new navalEvent('Capture of Arendal','Germans take Arendal in a bloodless engagement','Germans (Greif)','Norwegians under Holthe (Jo)')
new navalEvent('First Battle of Narvik','Two German destroyers and a flotilla of merchant ships are destroyed','British','Germans')
new navalEvent('Sinking of the Rio de Janeiro','Rio de Janeiro is sunk','Polish (Orzel)','Germans (Rio de Janeiro)')
new navalEvent('Second Battle of Narvik','All remaining German destroyers in Narvik are sunk','British under Whitworth (Warspite)','Germans under Bey')
new navalEvent('Dunkirk evacuation','More than 338,000 Allied soldiers are evacuated','Allies (British, French, Polish, Dutch, & Belgians)','Germans')
new navalEvent('Operation Juno','Glorious and to destroyers are sunk','Germans under Marschall (Scharnhorst and Gneisenau)','British under D\'Oyly-Hughes (Glorious)')
new navalEvent('Italian invasion of France','Italian occupied zone is created in southern France','Italians','French')
new navalEvent('Convoy HX 47','Two British merchant ships are sunk','Germans under Dönitz','British')
new navalEvent('Convoy HX 49','Three British merchant ships are sunk','','')
new navalEvent('Attack on Mers-el-Kebir','Controversial attack on neutral French fleets','British under Somerville','Vichy French under Darlan')
new navalEvent('Convoy OA 178','British merchant ships are sunk or damaged in the English Channel','Germans','British')
new navalEvent('Battle of Cape Spada','Off Crete','British & Australians under Collins (Sydney)','Italians under Casardi (Bartolomeo Colleoni)')
new navalEvent('Sinking of the Elli','Elli is sunk','Italians (Delfino)','Greeks (Elli)')
new navalEvent('Convoy HX 65','Canadians & British','','Germans under Dönitz')
new navalEvent('Convoy FS 271','Five British merchant ships are sunk','British','')
new navalEvent('Convoy SC 2','Three Allied merchant ships are sunk','Canadians and British','')
new navalEvent('Convoy HX 72','Eleven British ships sunk in the North Atlantic','British','')
new navalEvent('Battle of Dakar','Vichy French fight off Allied landing at Dakar','Vichy French','British, Free French and Australians')
new navalEvent('Battle of Cape Passero','Three Italian destroyers are sunk','British under McCarthy (Ajax and York)','Italians')
new navalEvent('Convoy SC 7','20 ships sunk in North Atlantic','Germans under Dönitz','British under Mackinnon')
new navalEvent('Convoy HX 79','Twelve ships sunk in North Atlantic','','British')
new navalEvent('Attack on Convoy BN 7','One Italian destroyer is sunk','Allies (British, Indians, Australians, & New Zealanders) under Rivett-Carnac','Italians under Borsini')
new navalEvent('Convoy HX 84','Five ships sunk in North Atlantic','Germans under Krancke','British under Fegen')
new navalEvent('Battle of Gabon','Bougainville is sunk','Free Frenchunder d\'Argenlieu (Savorgnan de Brazza)','Vichy French (Bougainville)')
new navalEvent('Battle of Taranto','Air attack on Italians anchored at Taranto, inspiring the Japanese attack on Pearl Harbor','British under Cunningham and Lyster','Italins under Campioni')
new navalEvent('Battle of the Strait of Otranto','Italian convey is destroyed','British and Australians','Italians')
new navalEvent('Patria disaster','Haganah sinks a British ship intended to deport Jews killing over 200 Jewish refugees plus 50 crew and British soldiers.','Haganah','British')
new navalEvent('Operation Nordseetour','Two British ships are damaged and one is sunk in the North Atlantic','Germans under Meisel (Admiral Hipper)','British')
new navalEvent('Convoy HX 90','Eleven ships sunk in North Atlantic','Germans and Italians under Dönitz','British and Canadians')
new navalEvent('German attacks on Nauru','Germans destroy Allied merchant ships off Nauru','Germans under Eyssen','Australians, British and Norwegians')
new navalEvent('Operation Excess','Royal Navy engages maritime strike Luftwaffe','British and Australians','Italians and Germans')
new navalEvent('Convoy SC 19','Four Allied merchant ships are sunk','Germans under Dönitz','British & Canadians')
new navalEvent('Convoy SC 20','Five Allied merchant ships are sunk','Germans under Dönitz','British & Canadians')
new navalEvent('Operation Berlin','Twenty-two British merchant ships are sunk or captured','Germans under Lütjens (Scharnhorst and Gneisenau)','British under Tovey')
new navalEvent('Convoy HX 106','Two British merchant ships are sunk','Germans under Lütjens and Dönitz (Scharnhorst and Gneisenau)','British & Canadians')
new navalEvent('Attack on Convoy AN 14','Allied merchant ship disabled','Italians under Mimbelli','Allies (British, Australians, & Greeks) under Packer')
new navalEvent('Convoy HG 53','Nine ships sunk and one German Fw 200 Condor shot down','Germans','British')
new navalEvent('Operation Abstention','British are prevented from landing on Italian-occupied Kastelorizo','Italians under Biancheri and Mimbelli','British under Cunningham')
new navalEvent('Action of 27 February','Ramb I is sunk','New Zealanders (Leander)','Italians (Ramb I)')
new navalEvent('Convoy OB 293','Three ships and two U-boats sunk in North Atlantic','British','Germans under Dönitz')
new navalEvent('Operation Claymore','British raid a fish oil plant in occupied Norway, sinking several German merchant ships','British and Norwegians','Germans')
new navalEvent('Convoy HX 112','U-boats attack Allied convoy; Allies suffer minimal losses and sink two U-boats','British & Canadians','Germans under Dönitz')
new navalEvent('Raid on Souda Bay','York and Pericles are sunk','Italians under Faggioni','British (York) Norwegians (Pericles) under Portal')
new navalEvent('Convoy SC 26','Ten ships sunk and one U-boat destroyed in North Atlantic','Germans under Dönitz','British')
new navalEvent('Action of 4 April','Voltair sunk','Germans under Kähler (Thor)','British (Voltair)')
new navalEvent('Invasion of Yugoslavia','Yugoslav Fleet attempts to repel Axis air attacks and river operations, most Yugoslav ships are sunk or captured.','Germans, Italians, & Hungarians','Yugoslavs')
new navalEvent('Battle of the Tarigo Convoy','Duisburg, Lampo, Luca Tarigo, Baleno and Mohawk are sunk','British under Mack (Mohawk)','Italians under Cristofaro (Duisburg, Lampo, Luca Tarigo and Baleno)')
new navalEvent('Convoy OB 318','Seven ships sunk and one U-boat captured in North Atlantic','British','Germans under Dönitz')
new navalEvent('Action of 8 May','Pinguin is sunk','British (Cornwall)','Germans under Krüder (Pinguin)')
new navalEvent('Convoy HX 126','Nine merchant ships sunk','Germans under Dönitz','British')
new navalEvent('Battle of Crete','Royal Navy loses three cruisers and six destroyers to Axis air attacks; Axis occupies Crete and establishes Fortress Crete','Germans & Italians','British & Australians')
new navalEvent('Battle of the Denmark Strait','Hood is sunk','Germans (Bismarck and Prinz Eugen)','British (Hood and Prince of Wales)')
new navalEvent('Bismarck Chase','Bismarck is sunk','British and Polish under Tovey','Germans under Lütjens (Bismarck)')
new navalEvent('Battle of the Litani River','Vichy French are chased away by Allied ships','Australians & British','Vichy French')
new navalEvent('Convoy HX 133','Six Allied merchant ships sunk','Germans under Dönitz','British & Canadians')
new navalEvent('Convoy SL 78','Four German U-boats sink eight Allied merchant ships','Norwegians & British','Germans')
new navalEvent('Gulf of Riga campaign','Series of light engagements between German and Soviet ships, results in German control of the Gulf of Riga','Germans under Schmunt','Soviets under Tributs')
new navalEvent('Western Black Sea raids','Series of raids conducted by the Soviets along Romanian and Bulgarian coasts fails to disrupt Axis shipping','Axis (Germans, Romanians, & Bulgarians) under Macellariu','Soviets under Oktyabrskiy')
new navalEvent('Raid on Constanța','Soviets are successfully repelled by Romanian destroyers','Romanians and Germans','')
new navalEvent('Action of 26 June','One Soviet gunboat captured and damaged','Romanians','Soviets')
new navalEvent('Action of 9 July','Off Mangalia','','')
new navalEvent('Operation Substance','Italians attack British convoy while en route to Malta','British & Australians under Somerville (Force H)','Italians')
new navalEvent('Convoy OG 69','Submarines inflict heavy casualties on British convoy','Germans and Italians under Dönitz','British')
new navalEvent('Battle of Bengtskär','Finnish gunboats sink a Soviet patrol boat during an attempted invasion of Bengtskär','Finnish','Soviets')
new navalEvent('Convoy HG 70','Minimal losses on both sides','British','Germans and Italians under Dönitz')
new navalEvent('Convoy OG 71','Ten ships sunk in North Atlantic','Germans under Dönitz','British and Norwegians')
new navalEvent('Battle of Khuzestan','Babr and Palang are sunk','British and Australians','Iranians (Babr and Palang)')
new navalEvent('Capture of U-570','Allies capture U-570','British and Canadians','Germans (U-570)')
new navalEvent('Convoy SC 42','Fourteen ships and two U-boats sunk in North Atlantic','Germans under Dönitz','British and Canadians')
new navalEvent('Convoy HG 73','Nine ships sunk in North Atlantic','','British')
new navalEvent('Convoy SC 48','Eleven ships sunk in North Atlantic','Germans under Dönitz','British and Canadians')
new navalEvent('Siege of Sevastopol','Soviet Black Sea Fleet fails to defend Sevastopol from Axis','Italians, Germans (air support), & Romanians (air support)','Soviets under Oktyabrskiy and Levchenko')
new navalEvent('Sinking of Uralets','Uralets sunk','Romanians (Delfinul)','Soviets (Uralets)')
new navalEvent('Battle of the Duisburg Convoy','Italian convoy destroyed','British under Agnew','Italians under Brivonesi')
new navalEvent('Pearl Harbor','Started the Pacific War; Japanese launch surprise raid on American naval base, forcing United States to enter World War II','Japanese under Yamamoto and Nagumo','Americans under Kimmel and Short')
new navalEvent('Battle of Wake Island','American coastal and air defenses at Wake Island hold off Japanese invasion for 15 days','Japanese','Americans')
new navalEvent('Battle of Hong Kong','Japanese occupy Hong Kong','Japanese under Niimi','British & Indians')
new navalEvent('Sinking of Prince of Wales and Repulse','Prince of Wales and Repulse are sunk by Japanese air attack in the South China Sea','Japanese','British (Prince of Wales and Repulse)')
new navalEvent('Battle of Borneo','Japanese occupy British and Dutch Borneo','Japanese','British and Dutch')
new navalEvent('Battle of Jibrieni','Soviets lose a submarine','Romanians, Bulgarians, & Hungarians','Soviets')
new navalEvent('Raid on Alexandria','In Alexandria Harbor','Italians under Borghese','British under Morgan')
new navalEvent('Convoy HG 76','Four ships sunk and five U-boats destroyed','British','Germans under Dönitz')
new navalEvent('Action of 12 January','Minelayer Prins van Oranje is intercepted and sunk','Japanese (Yamakaze)','Dutch (Prins van Oranje)')
new navalEvent('Operation Postmaster','Allies capture three Axis merchant ships in Santa Isabel','British under March-Phillipps','Germans and Italians')
new navalEvent('Battle of Balikpapan','Several Japanese ships are sunk but the Allies fail to stop them from occupying Balikpapan','Japanese','Americans and Dutch')
new navalEvent('Battle off Endau','Vampire is sunk','Japanese under Hashimoto','Australians (Vampire)')
new navalEvent('Battle of Ambon','Japanese invade Ambon Island; W-9 is sunk and Heron is damaged but survives. Dutch and Australian prisoners of war of massacred.','Japanese under Takagi and Itō (W-9)','Americans, Australians, & Dutch (Heron)')
new navalEvent('Marshalls-Gilberts raids','Japanese bases endure minor damage','Americans, Gilbertese and Elliceans under Halsey and Fletcher','Japanese under Inoue and Gotō')
new navalEvent('Channel Dash','Major Kriegsmarine surface units escape from occupied France to Germany; British attempt to intercept with disastrous results','Germans under Ciliax','British under Ramsay')
new navalEvent('Battle of Palembang','Li Wo sinks a Japanese transport, but is later sunk herself','Japanese','British (Li Wo)')
new navalEvent('Attack on Aruba','Several German U-boats sink several Allied oil tankers in coordinated attack','Germans and Italians under Hartenstein','Dutch and Americans under Andrews')
new navalEvent('Operation Neuland','In the Caribbean Sea','Germans and Italians under Dönitz and Polacchini','Americans under Hoover')
new navalEvent('Battle of Badung Strait','Allies lose a destroyer','Japanese','Americans, British and Dutch under Doorman')
new navalEvent('Bombing of Darwin','Japanese attack Australia','Japanese under Nagumo and Fuchida','Australians and Americans')
new navalEvent('Convoy ON 67','Eight ships sunk in North Atlantic','Germans under Dönitz','Americans and Canadians')
new navalEvent('Sinking of the Langley','Langley is severely damaged and forced to be scuttled.','Japanese','Americans (Langley)')
new navalEvent('Battle of Sunda Strait','Continuation of the Battle of the Java Sea; Houston and Perth are sunk','','Americans, Australians, & Dutch under Waller and Rooks (Houston, Perth and Evertsen)')
new navalEvent('Second Battle of the Java Sea','Continuation of the Battle of the Java Sea; Exeter, Encounter and Pope are sunk','Japanese under Takagi and Takahashi','British and Americans under Gordon (Exeter, Encounter and Pope)')
new navalEvent('Scuttling of USS Perch','Perch is damaged and scuttled; crew is later captured','Japanese','Americans (Perch)')
new navalEvent('Last Stand of HMAS Yarra','While escorting a small convoy, Yarra is intercepted by Japanese and sunk','','Australians (Yarra)')
new navalEvent('Second Battle of Sirte','Italians fail to sink British cargo ships; delay of the convoy led to the loss of four freighters by air attack','British under Vian','Italians under Iachino')
new navalEvent('Action of 27 March','Atik is sunk','Germans under Hardegen (U-123)','Americans (Atik)')
new navalEvent('St Nazaire Raid','British crash into Normandie dry dock, rending it useless for the rest of the war','British under Ryder and Beattie (Campbelltown)','Germans under Mecke, Schulz and Sohler')
new navalEvent('Convoy PQ 13','Trinidad is damaged','Germans','British, Soviets, & Polish (Trinidad)')
new navalEvent('Battle of Christmas Island','Naka is damaged; Japan invades and occupies Christmas Island','Japanese under Nishimura (Naka)','Americans (Seawolf) & British')
new navalEvent('Indian Ocean Raid','Japanese attack Ceylon','Japanese under Nagumo and Fuchida','British & Canadians (air support) under Somerville')
new navalEvent('Convoy OG 82','One U-boat sunk','British','Germans under Dönitz')
new navalEvent('Bombardment of Curaçao','Germans attempt to shell Dutch oil refinery on Curaçao; U-130is engaged by Dutch shore batteries, but escapes','Dutch','Germans under Kals (U-130)')
new navalEvent('Invasion of Tulagi','Allies sink several small warships but fail to prevent the capture of Tulagi','Japanese under Yamamoto, Inoue, Gotō and Shima','Americans & Australians (air support) under Fletcher (Yorktown)')
new navalEvent('Battle of Madagascar','Allies engage Vichy French and Japanese warships before securing the island for Free French','Allies (British, Australians, Dutch, & Polish) under Sturges and Syfret','Vichy French')
new navalEvent('Convoy ON 92','Allied convoy sustains heavy casualties','Germans under Dönitz','Americans & Canadians')
new navalEvent('Battle of the Coral Sea','Japanese invasion convoy turned back by US carrier aircraft; first carrier battle in history.','Mixed results: Tactical victory for Japanese (Sōhō and Shōkaku); strategic victory for Americans & Australians (Lexington and Yorktown)','')
new navalEvent('Action of 22 May','Comandante Lyra is sunk, causing Brazilian Navy B-25s to give chase for five days, but eludes destruction','Italians (Barbarigo)','Brazilians (Comandante Lyra)')
new navalEvent('Battle of the St. Lawrence','German U-Boats campaign in Gulf of St. Lawrence','Canadians & British under Nelles and Murray','Germans under Dönitz')
new navalEvent('Battle of Midway','Americas sink four Japanese carriers and one heavy cruiser','Americans under Nimitz, Fletcher and Spruance','Japanese under Yamamoto, Kondō, Nagumo and Yamaguchi')
new navalEvent('Action of 6 June','Stanvac Calcutta is sunk','Germans (Stier)','Americans (Stanvac Calcutta)')
new navalEvent('Operation Vigorous','Six ships sunk from convoy to Malta','Italians under Iachino','British, Polish, & Greek (air support) under Vian')
new navalEvent('Convoy PQ 17','24 ships sunk from Arctic convoy to Soviet Union','Germans under Raeder, Dönitz and Stumpff','Allies (British, Americans, Free French, & Soviets) under Tovey, Pound, Hamilton, Broome and Dowding')
new navalEvent('Action of 5 July','Arare is sunk','Americans (Growler)','Japanese (Arare)')
new navalEvent('Convoy QS-15','Three merchant ships are sunk','Germans (U-132)','Canadians')
new navalEvent('Battle of Someri','Soviet gunboats engaged and sunk','Finnish and Germans','Soviets under Levechenko')
new navalEvent('Convoy ON 113','Five Allied merchant ships are sunk','Germans under Dönitz','British & Canadians')
new navalEvent('Convoy ON 115','Three Allied merchant ships and one German U-boat are sunk','Germans','British & Canadians')
new navalEvent('Attack on the Dureenbee','Dureenbee is damaged beyond repair','Japanese (I-175)','Australians (Dureenbee)')
new navalEvent('Action of 3 August','U-335 is sunk','British (Saracen)','German (U-335)')
new navalEvent('Convoy SC 94','Eleven ships and two U-boats sunk in North Atlantic','Germans under Dönitz','Canadians, British, & Polish')
new navalEvent('Battle of Savo Island','Japanese sink four cruisers escorting Guadalcanal invasion convoy','Japanese under Mikawa','Americans & Australians under Turner and Crutchley')
new navalEvent('Operation Wunderland','Germans successfully raid Soviet shipping in the Kara Sea, sinking several ships','Germans under Schmundt and Meendsen-Bohlken','Soviets under Golovko, Kacharava and Baluntsev')
new navalEvent('Convoy ON 122','German U-boats inflict casualties on Allied convoy, demonstrated importance of radar','Germans under Dönitz','British & Norwegians')
new navalEvent('Battle of the Eastern Solomons','Ryujo sunk while attacking Guadalcanal','Americans under Fletcher and Kinkaid','Japanese under Kondō, Nagumo, Abe, Hara and Mikawa (Ryujo)')
new navalEvent('Convoys SG-6/LN-6','Two German submarines sink two Allied merchant ships.','Germans under Dönitz','Americans & Canadians')
new navalEvent('Operation Orator','Allies defend Convoy PQ 18 from German attacks, losing 13 merchant ships to Germany\'s loss of four U-boats; majority of convoy makes it to Arkhangelsk','Allies (British, Norwegians, Soviets, & Free French) under Hopps','Germans under Carls')
new navalEvent('Convoy QS-33','Two German submarines sink four Allied merchant ships and one Canadian armed yacht','Germans under Dönitz','Canadians')
new navalEvent('Convoy ON 127','Seven ships sunk in North Atlantic','Germans','Canadians & British')
new navalEvent('Convoy SQ-36','Two German submarines sink three Allied merchant ships','Germans','Canadians & British')
new navalEvent('Convoy TAG 5','Two ships sunk in Caribbean Sea','Germans under Dönitz and Krech','Americans & Canadians')
new navalEvent('Laconia Incident','Laconia sunk by U-156; Axis submarines and warships attempt to rescue survivors before being attacked by American aircraft, and forced to call off rescue efforts. This resulted in the issuance of the Laconia Order, which forbade the Kriegsmarine from rescuing Allied survivors.','British, Polish, & Americans under Sharp and Richardson (Laconia)','Germans, Italians, & Vichy French under Hartenstein and Würdemann (U-156)')
new navalEvent('Convoy SC 100','Five Allied merchant ships are sunk','Germans under Dönitz','Allies (Americans, British, Canadians, & Polish)')
new navalEvent('Operation Agreement','Five Allied ships sunk; one German U-boat sunk and five damaged off Tobruk','Germans under Lombardi','Americans')
new navalEvent('Convoy QP 14','Germans sink five Allied ships; Allies sink one U-boat and damage five','Germans under Dönitz','British under Dowding')
new navalEvent('Battle of Cape Burnas','Romanian gunboats engage and sink Soviet submarine after it sank a German transport','Romanians & Germans (air support)','Soviets')
new navalEvent('Battle of Cape Esperance','Americans intercept Japanese approaching Guadalcanal','Americans under Scott','Japanese under Gotō and Jōjima')
new navalEvent('Convoy SC 104','Eight ships and two U-boats sunk in North Atlantic','Germans under Dönitz','British')
new navalEvent('Battle of Sukho Island','Germany attempts amphibious invasion of Sukho, but are repelled','Soviets','Germans, Italians, & Finnish (air support)')
new navalEvent('Battle of the Santa Cruz Islands','Hornet is sunk in aircraft carrier battle','Japanese under Kondō, Nagumo, Abe, Kakuta','Americans under Halsey, Kinkaid, Murray and Mason (Hornet)')
new navalEvent('Convoy HX 212','Six ships sunk in North Atlantic','Germans under Dönitz','Americans, British, & Canadians')
new navalEvent('Convoy SL 125','Eleven ships sunk decoying U-boats away from Operation Torch','Germans','British, New Zealanders, & Free French')
new navalEvent('Convoy SC 107','Fifteen ships and one U-boat sunk in North Atlantic','Germans under Dönitz','British, Canadians, & Americans')
new navalEvent('Convoy TAG 18','Six Allied ships sunk in Caribbean Sea','Germans under Dönitz, Lassen and Witt','Americans')
new navalEvent('Convoy TAG 19','Two ships sunk in Caribbean Sea','Germans under Dönitz and Staats','Americans & British')
new navalEvent('Naval Battle of Casablanca','French fleet in harbour and shore batteries fail to defend Moroccan neutrality','Americans under Hewitt','Vichy France and Germany under Michelier and Kals')
new navalEvent('Attack on the Ondina','Allied oil tanker and its escort defend themselves against two Japanese merchant raiders, sinking one of them','Japanese (Hōkoku Maru and Aikoku Maru)','Dutch and Indians (Ondina and Bengal)')
new navalEvent('Naval Battle of Guadalcanal','Last offensive Japanese attempted in the Guadalcanal campaign; eleven transports and two battleships sunk and both sides incur heavy losses','Americans under Halsey, Callaghan, Scott and Lee','Japanese under Yamamoto, Abe, Kondō, Tanaka, Kakuta and Mikawa')
new navalEvent('Convoy ON 144','German U-boats inflict high casualties upon an Allied convoy','Germans under Dönitz','Americans, British, & Norwegians')
new navalEvent('Battle of Tassafaronga','Americans intercept Japanese destroyers resupplying Guadalcanal, but suffer heavy losses from torpedo attack','Japanese under Tanaka, Sato and Nakahara','Americans under Wright, Tisdale, Cole and Abercrombie')
new navalEvent('Battle of Skerki Bank','Allied fleet intercepts Italian convoy and sinks all four transport ships and most of their escorting destroyers','British & Australians under Harcourt','Italians & Germans under Cocchia')
new navalEvent('Convoy ON 153','Three Allied merchant ships sunk','Germans under Dönitz','British & Canadians')
new navalEvent('Operation Lilliput','Australians provides escort to New Guinea convoys, defends them from Japanese air attacks','Australians & Americans','Japanese')
new navalEvent('Convoy ON 154','Fourteen ships and one U-boat sunk in North Atlantic','Germans under Dönitz','British, Canadians, & Americans under Egerton and Windeyer')
new navalEvent('Convoy TM 1','Seven ships sunk in North Atlantic','Germans','British & Belgians')
new navalEvent('Operation Ke','Japan withdraws from the Solomon Islands; Allied and Japanese fleets conduct final engagements of the Guadalcanal campaign','Japanese under Yamamoto and Imamura','Americans, Australians, & New Zealanders under Halsey and Patch')
new navalEvent('Battle off Zuwarah','British sink Italian minesweepers','British','Italians under Di Bartolo')
new navalEvent('Convoy SG-19','Dorchester is sunk with a loss of 674 out of 904 of her crew, the greatest American loss of life from a single ship in a convoy','Germans (U-223)','Americans (Dorchester)')
new navalEvent('Battle of Rennell Island','Chicago is lost','Japanese','Americans under Halsey (Chicago)')
new navalEvent('Convoy SC 118','Eight ships and one U-boat sunk in North Atlantic','Germans under Dönitz','Americans, British, & Free French')
new navalEvent('Convoy ON 166','Eleven ships and two U-boats sunk in North Atlantic','Germans','Americans, British, Canadians, & Polish')
new navalEvent('Battle of the Bismarck Sea','Twelve Japanese ships are sunk en route to New Guinea','Americans & Australians (air support) under Whitehead and Hewitt','Japanese under Mikawa and Kimura')
new navalEvent('Battle of Blackett Strait','Americans intercept and sink two Japanese destroyers','Americans under Merrill','Japanese')
new navalEvent('Convoy SC 121','Seven ships sunk in North Atlantic','Germans under Dönitz','Americans, British, & Canadians under Birnie and Heineman')
new navalEvent('Convoys HX 229/SC 122','22 ships and one U-boat sunk in largest North Atlantic U-boat wolfpack attack','Germans under Dönitz','Allies (British, Americans, Canadians, & Belgians)')
new navalEvent('Battle of the Komandorski Islands','Americans intercept Japanese Aleutian Islands convoy','Americans under McMorris','Japanese under Hosogaya')
new navalEvent('Convoy RS 3','Germans destroy Convoy RS 3','Germans under Dönitz','British & Americans (air support)')
new navalEvent('Battle of the Cigno Convoy','Italians fight off British attack','Italians','British')
new navalEvent('Convoy ONS 5','Twelve ships and six U-boats sunk in last major North Atlantic U-boat wolfpack attack','British & Canadians (air support)','Germans under Dönitz')
new navalEvent('Convoy TS 37','Seven Allied merchant ships','Germans under Dönitz and Henke (U-515)','British under Pegram and Gill')
new navalEvent('Battle of the Campobasso Convoy','British destroyers sink Italian transport and destroyer','British under Holland-Martin','Italians under Marotta')
new navalEvent('Convoy SC 129','Three U-boats sunk','British','Germans under Dönitz')
new navalEvent('Attack on AHS Centaur','Japanese submarine sink Australian hospital ship with a heavy loss of life','Japanese (I-177)','Australians (Centaur)')
new navalEvent('Sinking of U-176','U-176 is sunk off Cuba','Cubans','Germans (U-176)')
new navalEvent('Convoy SC 130','Three U-boats sunk in North Atlantic','British & Canadians','Germans under Dönitz')
new navalEvent('Convoy GP55','One Allied transport ship and one Allied LST are damaged','Japanese (I-174)','Australians & Americans (Portmar and LST-469)')
new navalEvent('Convoy Faith','German aircraft attack Allied convoy, sinking two Allied troopships with heavy casualties','Germans','British & Americans (air support)')
new navalEvent('Allied Invasion of Sicily','Allied amphibious assault on Sicily','Americans, British, Canadians, Australians, & Indians','Italians & Germans')
new navalEvent('Battle of Gela','Allies engage Italian coastal batteries during the Allied Invasion of Sicily','Americans & British','Italians & Germans')
new navalEvent('Operation Scylla','Italians repel attack by British torpedo boats, sinking one','Italians (Scipione Africano)','British')
new navalEvent('Action of 31 July','U-199 is sunk off Rio de Janeiro','Americans and Brazilians','Germans (U-199)')
new navalEvent('Battle of Vella Gulf','American destroyers intercept the "Tokyo Express" and sink 3 Japanese destroyers','Americans under Moosbrugger','Japanese under Sugiura')
new navalEvent('Battle off Horaniu','Japanese convoy evacuation succeeds','Japanese under Ijuin','Americans under Ryan')
new navalEvent('Battle of Isefjord','Niels Juel\' is sunk while attempting to flee to Sweden','Germans','Danish (Niels Juel)')
new navalEvent('Operation Zitronella','Germans destroy Norwegian coastal defenses in Svalbard','Germans under Hüffmeier (Tirpitz and Scharnhorst)','Free Norway under Bredsdorff')
new navalEvent('Dodecanese campaign','Germans invade and occupy the Italian Dodecanese islands; Allied and Italian fleets take heavy losses','Germans','Italians, British, Greeks, & Polish under Campioni')
new navalEvent('Action off Bastia','All ships in the German auxiliary fleet were sunk','Italians under di Cossato','Germans')
new navalEvent('Battle of the Straits of Bonifacio','Main Italian fleet attempts to sail to Sardinia following Armistice; Roma is sunk by German aircraft with a Fritz X radio-controlled bomb','Germans','Italians (Roma)')
new navalEvent('Convoys ONS 18/ON 202','German U-boats simultaneously attack two convoys but are defeated','British & Canadians','Germans under Dönitz')
new navalEvent('Convoy SC 143','Allies sink three U-boats after Germans attack the convoy','British, Polish, & Canadians (air support)','Germans')
new navalEvent('Convoys ONS 20/ON 206','Only one Allied ship is lost during a large U-boat attack','British & Canadians','Germans under Dönitz')
new navalEvent('Convoy ON 207','Three U-boats sunk by a combination of air and naval support in the North Atlantic','British & Canadians','Germans under Dönitz')
new navalEvent('Convoy SL 138/MKS 28','One ship and one U-boat destroyed in North Atlantic','British','')
new navalEvent('Action off Cape Bougaroun','Several Allied ships are sunk by Germans','Germans','Americans, British, & Greeks')
new navalEvent('Action of 13 November','I-34 is sunk','British under Wingfield (Taurus)','Japanese (I-34)')
new navalEvent('Convoy SL 139/MKS 30','One ship and three U-boats sunk','British & Canadians (air support)','Germans under Dönitz')
new navalEvent('Convoy SL 140/MKS 31','Allie sink six U-boats','British & Americans','Germans')
new navalEvent('Battle of Cape St. George','American destroyers intercept the "Tokyo Express" and sink three Japanese destroyers','Americans under Burke','Japanese under Kagawa')
new navalEvent('Action off Silba','Three British torpedo boats attack and permanently disable Zniam','British','Croatians (Zniam)')
new navalEvent('Operation Stonewall','Allied ships and aircraft sink three German destroyers in the Bay of Biscay','Allies - Americans, British, New Zealanders, Free French, Italians, Canadians (air support), Australians (air support), Brazilians (air support), & Czechoslovaks (air support) under Leatham','Germans under Dönitz')
new navalEvent('Action of 11 January','Tally-Ho sinks Kuma off Penang','British under Bennington (Tally-Ho)','Japanese (Kuma and Urunami)')
new navalEvent('Action off Visakhapatnam','Indian sloop HMIS Jumna and Australian corvettes HMAS Launceston & HMAS Ipswich sink Japanese submarine Ro-110 with depth charges.','Indians & Australians','Japanese')
new navalEvent('Action of 14 February','Tally-Ho sinks UIT-23 off Penang','British under Bennington (Tally-Ho)','Germans (UIT-23)')
new navalEvent('Operation Hailstone','Allied fleet attacks former Japanese naval stronghold at Truk Lagoon; Japanese defenders lose many aircraft and merchant ships','Americans under Mitscher','Japanese under Kobayashi')
new navalEvent('Battle of Ist','Free French destroyers intercept German convoy and sink a corvette and freighter','Free French','Germans')
new navalEvent('Action of 29 March','U-154 attacks a convoy but Caldas damages her','Colombians (Caldas)','Germans (U-154)')
new navalEvent('Action of 19 April','U-974 sunk','Norwegians (Ula)','Germans (U-974)')
new navalEvent('Convoy UGS-40','German aircraft attack convoy in Mediterranean, but fail to score a single hit; Allies suffer no losses, while Germany loses 19 aircraft','Americans, British, & Free French','Germans')
new navalEvent('Action of 26 April','T29 is sunk','British & Canadians (Black Prince, Ashanti, Athabaskan, Haida and Huron)','Germans (T24, T27 and T29)')
new navalEvent('Battle of Lyme Bay','German E-boats raid Lyme Bay and sink two LSTs','Germans under Klug','British and Americans')
new navalEvent('Action of 6 May','U-66 is sunk by aircraft from USS Block Island (CVE-21) and rammed by USS Buckley (DE-51)','Americans (Block Island and Buckley)','Germans (U-66)')
new navalEvent('Action of 13 May','Ro-501 is sunk off the Azores','Americans','Japanese (Ro-501)')
new navalEvent('Operation Transom','Joint Allied-carrier operations destroy Japanese oil refineries','Allies (Americans, British, Australians, New Zealanders, Dutch, & Free French','Japanese')
new navalEvent('Capture of U-505','U-505 is captured','Americans (Guadalcanal)','Germans (U-505)')
new navalEvent('Invasion of Normandy','Allied fleets launch the largest amphibious invasion ever conducted in occupied France. Allied warships battle German coastal defenses and torpedo boats, losing several warships in the invasion.','Allies - Americans, British, Canadians, Free French, Norwegians, Polish, Greeks, Dutch, Australians (air support), & Southern Rhodesians (air support) under Ramsay','Germans')
new navalEvent('Capture of U-744','U-744 is captured and later scuttled','British and Canadians','Germans (U-744)')
new navalEvent('Battle of the Philippine Sea','US invasion of Saipan initiates the largest aircraft carrier battle in history; this battle included the air conflict nicknamed The Great Marianas Turkey Shoot','Americans under Spruance and Mitscher','Japanese under Ozawa, Kurita, Takagi and Kakuta')
new navalEvent('Battle of Nerva Island','Soviets repel German attack; T31 is sunk','Soviets','Germans (T30 and T31)')
new navalEvent('Action off Murter Island','T7 is damaged and beached off Murter Island','British','Germans & Croatians (T7)')
new navalEvent('Action of 17 July','I-166 is sunk off Penang','British under King (Telemachus)','Japanese (I-166)')
new navalEvent('Operation Mascot','Royal Navy launches carrier assault against Tirpitz, but fails','Germans under Junge (Tirpitz)','British under Moore')
new navalEvent('Convoy HX 300','Largest convoy of the war, despite German U-boat attacks, Allies successfully defend merchant ships with no losses.','Allies (Americans, British, Canadians, & Norwegians)','Germans')
new navalEvent('Action of 12 August 1944','Indian sloop HMIS Godavari & British frigate HMS Findhorn sink German submarine U-198 with depth charges.','Indians & British','Germans')
new navalEvent('Battle of Port Cros','UJ6081 and SG21 sunk','Americans (Somers)','Germans (UJ6081 and SG21)')
new navalEvent('Operation Dragoon','Combined Allied fleet launches amphibious assault resulting in Germany\'s withdrawal from most of Southern France','Allies - Americans, British, Canadians, Greeks, Free French, Australians (air support), & South Africans (air support) under Hewitt','Germans')
new navalEvent('Convoy Hi-71','Americans attack Japanese convoy and sink nine ships and damage another three','Americans under Donaho','Japanese (Taiyō)')
new navalEvent('Shin\'yo Maru Incident','Americans sink Shin\'yo Maru, killing 688 Allied POWs','Americans (Paddle)','Japanese (Shin\'yo Maru)')
new navalEvent('Operation Tanne Ost','Germans attempt to capture Suursaari Island from Finland, but are repelled. Starts the Lapland War.','Finnish','Germans')
new navalEvent('Battle of Tornio','Finnish gunboats engage German coastal batteries and cover troop landings.','Finnish','Germans')
new navalEvent('Action of 6 October','U-168 is sunk in the Java Sea','Dutch (Zwaardvisch)','Germans (U-168)')
new navalEvent('Formosa Air Battle','American carrier-based aircraft and Japanese naval aircraft battle over Formosa','Americans under Halsey and Mitscher','Japanese under Kusaka and Fukudome')
new navalEvent('Battle of Maun Island','Yugoslav Partisan Navy engages two German submarine chasers in a minor skirmish; Yugoslavs retreat after taking damage','Germans','Yugoslavs')
new navalEvent('Battle of Leyte Gulf','US invasion of the Philippines produces a decisive battle with the Japanese fleet including four main actions - the Sibuyan Sea, Surigao Straits, off Samar and Cape Engano. First use of Kamikaze tactics by the Japanese.','Americans & Australians under Halsey, Kinkaid, Sprague, Oldendorf and Collins','Japanese under Kurita, Nishimura, Shima, Ozawa and Seki')
new navalEvent('Battle of Pag Island','Allies sink a destroyer and two corvettes','British under Giles','Germans')
new navalEvent('Battle of Ormoc Bay','American destroyers attack sink several Japanese destroyers and merchant ships','Americans under MacArthur','Japanese under Yamashita')
new navalEvent('Action of 10 November','U-537 is sunk in the Java Sea','Americans (Flounder)','Germans (U-537)')
new navalEvent('Convoy Hi-81','Shinyo and Akitsu Maru are sunk','Americans under Underwood and Fluckey','Japanese (Shin\'yō and Akitsu Maru)')
new navalEvent('Convoy WEP 3','Léopoldville is torpedoed and sunk with a loss of 819 lives','British & Belgians (Léopoldville)','Germans (U-486)')
new navalEvent('South China Sea raid','Japanese shipping is disrupted in the South China Sea','Americans under Halsey and McCain','Japanese under Terauchi')
new navalEvent('Sinking of U-174','U-174 is sunk; no survivors','South Africans (Natal)','Germans (U-174)')
new navalEvent('Battle of the Ligurian Sea','British sink two German destroyer escorts','British under Hetherington (Lookout and Meteor)','Germans')
new navalEvent('First Bombing of Kure','American carrier-based aircraft damage Japanese warships at anchor in Kure','Americans','Japanese')
new navalEvent('Battle of Okinawa','The Japanese lose their last significant naval force; large scale systematic kamikaze operations conducted by Japanese air forces','Allies (Americans, British, Canadians, Australians, & New Zealanders) under Spruance, Turner, Rawlings and Mitscher','Japanese under Toyoda and Ōru (Yamato)')
new navalEvent('Operation Kikusui','Kamikaze campaign against Allied warships begins','Americans, British, & Australians under Mitscher','Japanese under Ugaki')
new navalEvent('Capture of U-1024','Two British frigates capture German submarine U-1024 in the Irish Sea','British (Loch Glendhu and Loch More)','Germans (U-1024)')
new navalEvent('Operation Teardrop','Anti-submarine warfare campaign along the North American east coast','British & Norwegians under Ingram','Germans under Godt')
new navalEvent('Action of 16 April','Trombe is destroyed beyond repair off Liguria','Italians','French (Trombe)')
new navalEvent('Action of 23 April','U-183 is sunk in the Java Sea','Americans (Besugo)','Germans (U-183)')
new navalEvent('Battle of Point Judith','U-853 is sunk in the Long Island Sound','Americans','Germans (U-853)')
new navalEvent('Actions of 7-8 May 1945','U-320 sunk, becoming the last U-boat to sunk; Nazi Germany surrenders just hours later','British & Norwegians','Germans (U-320)')
new navalEvent('Battle of the Malacca Strait','Haguro is sunk','British under Power','Japanese under Fukudome (Haguro)')
new navalEvent('Action of 8 June','Ashigara is sunk','British under Hezlet (Trenchant and Stygian)','Japanese (Ashigara and Kamikaze)')
new navalEvent('Attack on Yokosuka','Allied naval aircraft bomb and damage Japanese warships in Yokosuka','Americans & British under Halsey, McCain and Rawlings','Japanese')
new navalEvent('Battle of Sagami Bay','American destroyers intercept Japanese convoy fleeing Tokyo Bay; last surface battle of the war.','Americans','Japanese')
new navalEvent('Action of 24 July','Underhill is sunk by Japanese kaiten (suicide-torpedoes)','Japanese (I-53)','Americans (Underhill)')
new navalEvent('Second Bombing of Kure','Allied naval aircraft sink all remaining Japanese capital ships in Kure','British and Americans under Halsey','Japanese')
new navalEvent('Allied naval bombardments of Japan','Allied warships bombard strategic sites on the Japanese coast','Americans, British, & New Zealanders','Japanese')
new navalEvent('Operation Tiderace','Bloodless reclamation of Singapore','British, Australians, & Free French','Japanese')
new navalEvent('Royal Indian Navy mutiny','Indians fail to achieve independence from Britain peacefully','Colonial British government','Indians')
new navalEvent('Battle of Bali Strait','First amphibious battle of the revolution','Indonesians','Dutch')
new navalEvent('Action of 27 April','Humaitá is disabled by loyalist aircraft and both ships are later recaptured by loyalist warships','Paraguayan loyalists','Paraguayan rebels (Humaitá and Paraguay)')
new navalEvent('Battle of the Cirebon Sea','Small Indonesian squadron engages Dutch destroyer HNLMS Kortenaer, results in loss of training ship KRI Gadjah Mada.','Dutch','Indonesians')
new navalEvent('Altalena Affair','Altalena is shelled to prevent it from delivering its cargo of weapons','Israeli Defense Forces','Irgun (Altalena)')
new navalEvent('Sinking of the Emir Farouk','Emir Farouk is sunk off Gaza','Israelis','Egyptians')
new navalEvent('Amethyst Incident','British warships come under fire by Communist Chinese coastal artillery, forcing more Royal Navy ships to come to their rescue and resulting in Britain withdrawing from the Yangtze River and mainland China','Chinese','British (Amethyst, Consort, London, Black Swan and Concord)')
new navalEvent('Battle of Korea Strait','North Korean steamer is sunk','South Koreans (PC-823)','North Koreans')
new navalEvent('Battle of Chumonchin Chan','US and British cruisers intercept Korean People\'s Navy convoy','United Nations','')
new navalEvent('Battle of Haeju','South Korean patrol ship sinks a North Korean minelayer','','')
new navalEvent('Battle of Incheon','UN Command amphibious invasion; start of the UN offensive into North Korea and the withdrawal of South Koreans from North Korea','South Korea and United Nations','')
new navalEvent('Blockade of Wonsan','Longest naval blockade in modern history at 861 days','United Nations','North Koreans and Chinese')
new navalEvent('USS Walke incident','Walke is damaged by two North Korean submarines','North Koreans','Americans (Walke)')
new navalEvent('Manhattan Rebellion','Sri Ayudhya is sunk by coastal guns and air strikes during a failed coup','Government of Phibun','Rebels from the Royal Thai Navy (Sri Ayudhya)')
new navalEvent('Battle of the Han River','Australians attack Chinese coastal batteries','Australians (Murchison)','Chinese')
new navalEvent('Dongshan Island Campaign','Taiwanese fleet and amphibious forces fail to retake Dongshan Island from China','Chinese Communists under Hu','Chinese Nationalists under Ye and You')
new navalEvent('Sinking of ROCS Tai Ping','Tai Ping is sunk off the Dachen Islands','Chinese Communists','Chinese Nationalists (Tai Ping)')
new navalEvent('Battle off Haifa','Ibrahim el-Awal is captured','Israelis and French','Egyptians (Ibrahim el-Awal)')
new navalEvent('Sinking of the Domiat','Domiat sunk in the northern Red Sea','British (Newfoundland and Diana)','Egyptians (Domiat)')
new navalEvent('First Battle of Jinmen Island','Chinese attack a convoy off Jinmen Island, sinking a transport and damaging a landing ship','Chinese','Taiwanese')
new navalEvent('Battle of Dongding Island','Taiwanese prevent Chinese from landing on Dongding Island; one Taiwanese landing ship is sunk, while another is damaged','Taiwanese','Chinese')
new navalEvent('Mexico-Guatemala conflict','Guatemalan Air Force attacks Mexican civilian fishing boats in Guatemalan territory','Ceasefire between Guatemalans and Mexicans','')
new navalEvent('Bay of Pigs Invasion','Failed attempt to invade Castro\'s Cuba','Cubans','Americans and Cuban exiles')
new navalEvent('Bizerte crisis','Failed attempt to blockade a French naval base in Bizerte','French','Tunisians')
new navalEvent('Naval battle at Mormugao harbour','Afonso de Albuquerque is sunk','Indians (Betwa and Beas)','Portuguese (Afonso de Albuquerque)')
new navalEvent('Naval Action at Diu','Vega sunk','Indians (Delhi)','Portuguese (Vega)')
new navalEvent('Battle of Arafura Sea','Dutch repel Indonesian attack','Dutch','Indonesians under Sudarso')
new navalEvent('El Porteñazo','Rebellion Venezuelan warships exchange fire on loyalist positions','Venezuelan government','Venezuelan military rebels')
new navalEvent('Battle of Tillyria','Cypriot patrol ships engage Turkish Cypriot militia before being sunk by Turkish fighter jets','Turkish Cypriots','Greek Cypriots (Phaethon)')
new navalEvent('Action of 13 December','','Australians (Teal)','Indonesians')
new navalEvent('Vũng Rô Bay incident','North Vietnamese fail to secretly invade South Vietnam\'s water to support Viet Cong escalating the war','South Vietnamese','North Vietnamese')
new navalEvent('Battle of Dongshan','Zhang Jiang and Jiang Men are sunk','Chinese','Taiwanese (Jiang Men and Zhang Jiang)')
new navalEvent('Battle of East Chongwu','Lin Huai is forced to run aground due to damage sustained in battle, while Shan Hai escapes','','Taiwanese (Lin Huai and Shan Hai)')
new navalEvent('Battle of Rumani Coast','Two Egyptian torpedo boats sunk','Israelis (Eilat)','Egyptians')
new navalEvent('Operation Tiger Claw','','Nigerians','Biafrans')
new navalEvent('Sinking of the Eliat','Eilat sunk in the first combat use of P-15 Termit surface-to-surface missiles','Egyptians','Israelis (Eilat)')
new navalEvent('Pueblo incident','North Koreans capture Pueblo','North Koreans under Kim','Americans under Bucher (Pueblo)')
new navalEvent('Action of 1 March','Four North Vietnamese naval trawlers sunk','Americans and South Vietnamese','North Vietnamese')
new navalEvent('Sinking of the El Qaher','El Qaher is sunk off Berenice','Israelis','Egyptians (El Qaher)')
new navalEvent('Operation Green Sea','Portuguese forces manage to destroy 5 Guinean supply ships and numerous government buildings and rescue POWs but fail to overthrow the government.','Portugal','Guinea-Bissau')
new navalEvent('Operation Trident','','Indians under Rao and Yadav','Pakistanis under Lodhi')
new navalEvent('Operation Python','','Indians under Kuruvila','Pakistanis under Ahmed')
new navalEvent('Sinking of Khukri','Khukri is sunk','Pakistanis (Hangor)','Indians (Khukri)')
new navalEvent('First Battle of Quảng Trị','Americans engage in tank and artillery duals at and below DMZ and in defense of Đông Hà Bridge','North Vietnamese','South Vietnamese')
new navalEvent('Battle of Đồng Hới','','','Americans')
new navalEvent('Operation Pocket Money','Americans successfully blockade North Vietnamese at Hai Phong','Americans under Cooper','North Vietnamese')
new navalEvent('Battle of Latakia','','Israelis under Barkai','Syrians')
new navalEvent('Battle of Marsa Talamat','Egyptian patrol boat sunk','Israelis','Egyptians under Zikry')
new navalEvent('Battle of Baltim','','','Egyptians')
new navalEvent('Battle of Latakia','','Syrians','Israelis under Barkai')
new navalEvent('Battle of the Paracel Islands','Chinese take full control of the Paracels Islands','Chinese','Vietnamese')
new navalEvent('Battle of Pentemili beachhead','Two Cypriot torpedo boats are sunk trying to intercept Turkish amphibious assault','Turkish','Cypriots')
new navalEvent('East Sea Campaign','Series of clashes that led to the North Vietnamese capture of the Spratly Islands','South Vietnamese under Chung','North Vietnamese and Viet Cong')
new navalEvent('Mayaguez Incident','Americans rescue Mayaguez and surviving crew after the cargo ship is seized','Americans (Mayaguez, Harold E. Holt)','Khmer Rouge')
new navalEvent('Sinking of the P-11','P-11 is sunk[11]','Eritrean People\'s Liberation Front','Ethiopians (P-11)')
new navalEvent('Operation Lark','Failed attempt to assassinate Robert Mugabe','Robert Mugabe','South Africans')
new navalEvent('Sinking of the HMBS Flamingo','Flamingo is sunk by two Cuban MIG-21s','Cubans','Bahamians (Flamingo)')
new navalEvent('Operation Morvarid','Destruction of 80% of the Iraqi Navy','Iranians under Afzali','Iraqis')
new navalEvent('Sinking of the coaster ship Nellie M','An IRA active service unit hijack a lifeboat at Moville and sink a small cargo ship with an explosive charge','Irish Republicans','British')
new navalEvent('Invasion of South Georgia','','Argentines','British under Mills')
new navalEvent('Operation Paraquet','Santa Fe is severely damaged, sunk and later scuttled','British under Young and Sheridan','Argentines (Santa Fe)')
new navalEvent('Sinking of the ARA General Belgrano','General Belgrano is torpedoed and sunk','British (Conqueror)','Argentines (General Belgrano)')
new navalEvent('Attack on the ARA Alferez Sobral','Two British Westland Lynx HAS.Mk.2/3 helicopters attack Alferez Sobral','British','Argentine (Alferez Sobral)')
new navalEvent('Sinking of HMS Sheffield','Fighter jets sink Sheffield with an Exocet missile','Argentines','British (Sheffield)')
new navalEvent('Battle of San Carlos','Coventry, Ardent and Antelope are sunk during a British landing on the shores of San Carlos Water; British successfully establish a beachhead','British under Woodward, Clapp and Thompson (Coventry, Ardent and Antelope)','Argentines under Menendez and Crespo')
new navalEvent('Battle of Seal Cove','Minor naval clash; Argentine coaster evades capture by two British ships by running aground','Argentines','British')
new navalEvent('Sinking of SS Atlantic Conveyor','Atlantic Conveyor is sunk by two Argentine Exocet missiles fired from fighter jets','','British (Atlantic Conveyor)')
new navalEvent('Bluff Cove air attacks','Argentine aerial bombs destroy Sir Galahad and Sir Tristam; Sir Galad is scuttled on 21 June and Sir Tristam, though seriously damaged, later returns to service','Argentines under Crespo, Menendez and Lombardo','British under Moore, Clapp, Thompson and Wilson (Sir Galahad and Sir Tristam)')
new navalEvent('Battle of Two Sisters','Glamorgan is struck and damaged by an Exocet missile fired from an Argentine land-base launcher','British (Glamorgan)','Argentines')
new navalEvent('Sinking of Transit','Transit is sunk off Tripoli, Lebanon;[12] of the 56 refugees en route to Larnaca, Cyprus, 25 are killed[13]','Israelis','Lebanese')
new navalEvent('Sinking of Milanian and Kahnamoie','Milanian and Kahnmoie are sunk by Exocet missiles[14]','Iraqis','Iranians (Milanian and Kahnamoie)')
new navalEvent('Sinking of the Raffaello','Raffaello is partially sunk by an Exocet missile while in port in Bushehr','','Iranians (Raffaello)')
new navalEvent('Operation Nobilis','South African Navy destroys three Angolan missile boats in Luanda','South Africans','Angolans')
new navalEvent('Action in the Gulf of Sidra','','Americans','Libyans')
new navalEvent('USS Stark incident','Stark is severely damaged by missiles from Iraqi fighter jets','Iraqis','Americans (Stark)')
new navalEvent('Bridgeton incident','American-escorted Kuwaitian convoy is attacked and Bridgeton is mined','Iranians','Americans and Kuwaitians (Bridgeton)')
new navalEvent('Operation Prime Chance','Iran Ajr is attacked and later scuttled','Americans','Iranians (Iran Ajr)')
new navalEvent('Attack on the MV Sea Isle City','Sea Isle City is severely damaged; 18 of her crew are wounded and her captain is blinded','Iranians','Kuwaitians (Sea Isle City)')
new navalEvent('Operation Nimble Archer','US fleet destroys two Iranian oil platforms in retaliation for attacking the Kuwaiti tanker Sea Isle City','Americans','Iranians')
new navalEvent('Johnson South Reef Skirmish','Three Vietnamese transports are sunk; Chinese establish control over Johnson South Reef','Chinese','Vietnamese')
new navalEvent('Operation Praying Mantis','In the largest US naval engagement since World War II, the U.S. Navy retaliates for the mining of the USS Samuel B. Roberts during a patrol mission','Americans under Less','Iranians under Malekzadegan')
new navalEvent('Dahlak Islands Campaign','F-1616 is damaged beyond repair and later scuttled[15]','Eritreans','Ethiopians (F-1616)')
new navalEvent('Iraqi invasion of Kuwait','Most of the Kuwait Naval Force is destroyed by Iraqi air and naval forces, with surviving ships escaping to Bahrain','Iraqis','Kuwaitians')
new navalEvent('RFA Fort Victoria bombing','Fort Victoria bombed and heavily damaged while at dock at Harland & Wolff shipyard','Irish Republicans','British (Fort Victoria)')
new navalEvent('Battle of Ad-Dawrah','Coalition captures Iraqi oil platforms','Coalition (Nicholas and Istiqal)','Iraqis')
new navalEvent('Battle of Assab','Seven Ethiopian warships are sunk in port and the remaining warships flee before the city falls; this is the last combat action of the Ethiopian Navy before its dissolution due to Ethiopia becoming landlocked','Eritreans','Ethiopians')
new navalEvent('Battle of the Dalmatian Channels','Yugoslavs lose three ships','Croatians under Letica','Yugoslavs')
new navalEvent('Sinking of the Sagarawardena','LTTE suicide boats attack and sink Sagarawardena','Liberation Tigers of Tamil Eelam','Sri Lankans (Sagarawardena)')
new navalEvent('Bombing of SLNS Sooraya and SLNS Ranasuru','LTTE frogmen place explosives on Sooraya and Ranasuru, sinking them both with heavy casualties','','Sri Lankans (Sooraya and Ranasuru)')
new navalEvent('Hanish Islands conflict','Eritreans launch amphibious assault on Hanish Islands and successfully occupy them until 1998','Eritreans','Yemenis')
new navalEvent('Battle of Mullaitivu','Ranaviru is attacked and sunk, killing all but two of her crew','Liberation Tigers of Tamil Eelam under Soosai','Sri Lankans (Ranaviru)')