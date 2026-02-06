const navalEventsList = []
let availableNavalEvents = []
let navalEventEndTime = 0
let currentNavalEvent = {}

function setupNavalEvents(){ //only runs on startup and after getting naval events from john
	if(!johnRewarded("naval events"))return
	availableNavalEvents = navalEventsList.filter((e)=>!player.john.navalEvents.includes(e.id))
	if(player.john.currentNavalEventId !== -1){ //an event is/was already active
		currentNavalEvent = availableNavalEvents.filter((e)=>e.id === player.john.currentNavalEventId)
		navalEventEndTime = player.john.navalEventStartedTime + currentNavalEvent.duration
	}
}

const battleshipIcon = get("displayShipIcon")
function rollNavalEvent(){ //this will run on every inventory update so 2 times a second
	if(!johnRewarded("naval events"))return
	if(Date.now() < navalEventEndTime) { //event is not over
		if(currentLayer === currentNavalEvent.layer[0]){
			//makes event go by 3x faster if you are in its layer
			player.john.navalEventStartedTime -= 1000
			navalEventEndTime -= 1000
			//battleshipIcon style = amazing green flashing animation
		} else {
			//battleshipIcon style = amazing red flashing animation
		}
		//update time display
		get("navalEventTime").textContent = longTime((navalEventEndTime - Date.now()))
		return
	}
	else if(navalEventEndTime !== 0) { //event is over, reward applies now
		player.john.navalEvents.push(currentNavalEvent.id)
		availableNavalEvents = availableNavalEvents.filter((e)=>e.id !== currentNavalEvent.id)
		currentNavalEvent = {}
		player.john.currentNavalEvent = -1
		player.john.navalEventStartedTime = 0
		navalEventEndTime = 0
		//there needs to be something to trigger luck update in logs.js
		//battleshipIcon style = gray
		return
	}
	//chance is 1/3600 every 500ms which is ~2/hour to get any uncompleted event
	if(availableNavalEvents.length > 0 && Math.random()<1/1){
		currentNavalEvent =availableNavalEvents[0]// availableNavalEvents[Math.floor(Math.random() * availableNavalEvents.length)]
		player.john.currentNavalEvent = currentNavalEvent.id
		player.john.navalEventStartedTime = Date.now()
		navalEventEndTime = Date.now() + currentNavalEvent.duration
		
		//notify that the event has started and display it somewhere
		if(!get("navalEventInfo").classList.contains("displayedSideMenu")){
			toggleSideMenu('navalEventInfo')
		} 
		get("navalEventTitle").textContent = currentNavalEvent.title
		get("navalEventText").textContent = 
			String(`${Math.random()<0.5?"👑 $winner vs $loser ":"$loser vs 👑 $winner "}`
			+currentNavalEvent.description)
			.replace(/\$winner/g, currentNavalEvent.winner)
			.replace(/\$loser/g, currentNavalEvent.loser)
		let questLayerOre = getLayerMaterial(layerDictionary[currentNavalEvent.layer])
		if(oreList[questLayerOre].hasImage){
			get("navalEventLayer").innerHTML = `<img src="${oreList[questLayerOre].src}">`
		} else {
			get("navalEventLayer").textContent = getLayerMaterial(layerDictionary[currentNavalEvent.layer])
		}
		
			//battleshipIcon style = amazing red flashing animation
	}
}

let navaleventtempid = 0

class navalEvent {
	constructor(title, text, winner, loser, minutes, fast_layer){
		navaleventtempid++
		navalEventsList.push({
			title: title,
			description: text,
			winner:winner,
			loser:loser,
			duration: minutes*60e3, //converts m to ms
			id: navaleventtempid,
			layer: fast_layer
		})
	}
}

//example events
new navalEvent(
	"bloody sea battle 1999",
	"john helped the $winner fleet win by killing all the fish in the ocean",
	"USS","HMS",30,["waterLayer"]
)