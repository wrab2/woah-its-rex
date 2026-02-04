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

function rollNavalEvent(){ //this will run on every inventory update so 2 times a second
	if(!johnRewarded("naval events"))return
	if(Date.now() < navalEventEndTime) { //event is not over
		if(currentLayer == currentNavalEvent.layer){
			//makes event go by 3x faster if you are in its layer
			player.john.navalEventStartedTime -= 1000
			navalEventEndTime -= 1000
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
		//there needs to be something to trigger luck update in logs.js
		return
	}
	//chance is 1/3600 every 500ms which is ~2/hour to get any uncompleted event
	if(availableNavalEvents.length > 0 && Math.random()<1/10){
		currentNavalEvent = availableNavalEvents[Math.floor(Math.random() * availableNavalEvents.length)]
		player.john.currentNavalEvent = currentNavalEvent.id
		player.john.navalEventStartedTime = Date.now()
		navalEventEndTime = Date.now() + currentNavalEvent.duration
		//notify that the event has started and display it somewhere
		//open naval event panel() or whatever
		console.log("john says hi from the past")
	}
}

let navaleventtempid = 0

class navalEvent {
	constructor(text, minutes, fast_layer){
		navaleventtempid++
		navalEventsList.push({
			title: text,
			duration: minutes*60e3, //converts m to ms
			id: navaleventtempid,
			layer: fast_layer
		})
	}
}
//example events
new navalEvent("big sea battle 1 that lasted exactly 3 minutes", 3, ["dirtLayer"])
new navalEvent("big sea battle 2 that lasted exactly 3 minutes", 3, ["dirtLayer"])
new navalEvent("big sea battle 3 that lasted exactly 3 minutes", 3, ["dirtLayer"])
new navalEvent("big sea battle 4 that lasted exactly 3 minutes", 3, ["dirtLayer"])
new navalEvent("big sea battle 5 that lasted exactly 3 minutes", 3, ["dirtLayer"])
new navalEvent("big sea battle 6 that lasted exactly 3 minutes", 3, ["dirtLayer"])
new navalEvent("big sea battle 7 that lasted exactly 3 minutes", 3, ["dirtLayer"])