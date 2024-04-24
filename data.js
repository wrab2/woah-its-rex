/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
function saveAllData(forceCloudSave=false) {
    let data = JSON.stringify(saveNewData({override: undefined, return: true}));
	cloudSave(data,forceCloudSave)
    return;
}
function loadAllData() {
        let data;
        if (!debug) {
            if (localStorage.getItem("newPlayerData") !== null) {
                try {
                    localStorage.setItem("dataBackup", localStorage.getItem("newPlayerData"));
                    loadNewData(JSON.parse(localStorage.getItem("newPlayerData")));
                    localStorage.removeItem("dataBackup");
                    return true;
                } catch (error) {
                    console.log(error);
                    localStorage.setItem("newPlayerData", localStorage.getItem("dataBackup"));
                    window.alert("DATA CORRUPTION DETECTED, EXPORT YOUR SAVE FILE AND CONTACT A MODERATOR IN THE DISCORD");
                    localStorage.removeItem("dataBackup");
                    return false;
                }
            } else {
                data = JSON.parse(localStorage.getItem("playerData"));
            }
        } else {
            if (localStorage.getItem("newTestingData") !== null) {
                try {
                    localStorage.setItem("dataBackup", localStorage.getItem("newTestingData"));
                    loadNewData(JSON.parse(localStorage.getItem("newTestingData")));
                    localStorage.removeItem("dataBackup");
                    return true;
                } catch (error) {
                    console.log(error);
                    localStorage.setItem("newTestingData", localStorage.getItem("dataBackup"));
                    window.alert("DATA CORRUPTION DETECTED, EXPORT YOUR SAVE FILE AND CONTACT A MODERATOR IN THE DISCORD");
                    localStorage.removeItem("dataBackup");
                    return false;
                }
            } else {
                data = JSON.parse(localStorage.getItem("testingData"));
            }
        }
        if (Array.isArray(data)) {
            try {
                if (!debug)  localStorage.setItem("dataBackup", localStorage.getItem("playerData"));
                else  localStorage.setItem("dataBackup", localStorage.getItem("testingData"));
                data = oldDataToNew(data);
                saveNewData({override: data, return: false});
                loadNewData(data);
                localStorage.removeItem("dataBackup");
                return true;
            } catch (error) {
                console.log(error);
                if (!debug) localStorage.setItem("playerData", localStorage.getItem("dataBackup"));
                else localStorage.setItem("testingData", localStorage.getItem("dataBackup"));
                window.alert("DATA CORRUPTION DETECTED, EXPORT YOUR SAVE FILE AND CONTACT A MODERATOR IN THE DISCORD");
                return false;
            }
        }  
        if (data === null) return true;
}


let dataTimer = null;
let dataLooping = false;
function repeatDataSave() {
    dataTimer = setInterval(saveAllData, 3000);
}
function toBinary(string) {
    const codeUnits = new Uint16Array(string.length);
    for (let i = 0; i < codeUnits.length; i++)
        codeUnits[i] = string.charCodeAt(i);
    return btoa(String.fromCharCode(...new Uint8Array(codeUnits.buffer)));
}

function fromBinary(encoded) {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++)
        bytes[i] = binary.charCodeAt(i);
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
}

function exportData() {
    let data;
    if (!debug && localStorage.getItem("newPlayerData") !== null) data = toBinary(localStorage.getItem("newPlayerData"));
    else if (localStorage.getItem("newTestingData") !== null) data = toBinary(localStorage.getItem("newTestingData"));
    else data = !debug ? (toBinary(localStorage.getItem("playerData"))) : (toBinary(localStorage.getItem("testingData")));
    let textField = document.getElementById("dataText");
    textField.value = data;
    if (confirm("Download save data as file?"))
        exportDataAsFile(data, "data.txt", "text/plain");
    else {
        textField.select();
        textField.setSelectionRange(0, 99999);
        alert("The textbox has been selected for you; make sure to copy your data to your clipboard so you don't lose it!");
    }
}

function importData(data) {
    if (data === "") {
        if (confirm("You are importing nothing, this will perform a hard reset on your save file. Are you sure you want to do this?")) {
            if (confirm("YOUR SAVE FILE WILL BE ERASED. PLEASE BE SURE THIS IS WHAT YOU WANT.")) {
                clearInterval(dataTimer);
                if (debug) {
                    localStorage.removeItem("testingData");
                    localStorage.removeItem("newTestingData");
                    localStorage.removeItem("testingPlayedBefore");
                } else {
                    localStorage.removeItem("playerData");
                    localStorage.removeItem("newPlayerData");
                    localStorage.removeItem("playedBefore");
                }
                setTimeout(() => {
                    location.reload();
                }, 1000);
                
            }
        }
    } else {
        if (confirm("Are you sure you want to do this? Any mistakes in imported data will corrupt your savefile.")) {
            if (!debug && localStorage.getItem("newPlayerData") !== null) localStorage.setItem("dataBackup", localStorage.getItem("newPlayerData"));
            else if (!debug && localStorage.getItem("playerData") !== null) localStorage.setItem("dataBackup", localStorage.getItem("playerData"));
            else if (localStorage.getItem("newTestingData") !== null) localStorage.setItem("dataBackup", localStorage.getItem("newTestingData"));
            else localStorage.setItem("dataBackup", localStorage.getItem("playerData"));
            clearInterval(dataTimer);
            try {
                data = fromBinary(data);
                if (checkSaveType(data)) {
                    data = JSON.stringify(oldDataToNew(JSON.parse(data)));   
                }
                if (!debug && localStorage.getItem("newPlayerData") !== null) localStorage.setItem("newPlayerData", data);
                else localStorage.setItem("newTestingData", data);
                setTimeout(() => {
                    location.reload();
                }, 1000);
            } catch(error) {
                console.log(error);
                if (checkSaveType(localStorage.getItem("dataBackup"))) {
                    if (!debug) localStorage.setItem("playerData", localStorage.getItem("dataBackup"));
                    else localStorage.setItem("testingData", localStorage.getItem("dataBackup"));
                } else {
                    if (!debug) localStorage.setItem("newPlayerData", localStorage.getItem("dataBackup"));
                    else localStorage.setItem("newTestingData", localStorage.getItem("dataBackup"));
                }
                window.alert("DATA CORRUPTION DETECTED, CONTACT A MODERATOR IN THE DISCORD");
            }
        }
    }
}
function checkSaveType(data) {
    let parsedData;
    try {
        parsedData = JSON.parse(data);
    } catch {
        parsedData = data;
    }
    if (Array.isArray(parsedData)) {
        return true;
    }
    return false;
}


function exportDataAsFile(textToWrite, fileNameToSaveAs, fileType) {
    const textFileAsBlob = new Blob([textToWrite], { type: fileType });
    let downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';
    if (window.webkitURL !== null)
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}


//galaxy api stuff
let cloudsaving = {
	website_name: "https://galaxy.click", 
	//website_name:"http://localhost:4321",//for testing with local instance of galaxy
	ongalaxy: false, //if the game runs embedded to galaxy or not
	logged_in: false,
	dosave: true, //toggles cloud save if every other condition is met
	save_interval: 900000, //15 minutes, game like this doesn't really need to make backups very often
	next_save_time: Date.now() + 10000 //10s delay
}

function cloudSave(data,forceCloudSave) {
	if(cloudsaving.ongalaxy && cloudsaving.logged_in && ((cloudsaving.dosave && Date.now() >= cloudsaving.next_save_time)||forceCloudSave)){
		//save if the user is on galaxy, logged in and
		//(saving is enabled a minimum save interval is reached)or(forced save parameter is true) 
		//forced save can be used for example to save when some button is clicked manually
		cloudsaving.next_save_time = Date.now() + cloudsaving.save_interval
		//reset interval
		window.top.postMessage({
			action: "save",
			slot: 0,
			label: "Autosave",//how it's going to be called in cloud saves tab in the sidebar
			data: data,
		}, cloudsaving.website_name)

	}
}

window.addEventListener("message", e => {
	if (e.origin === cloudsaving.website_name) {
		//this is the initial message
		if (e.data.type === "info") {
			cloudsaving.ongalaxy = e.data.galaxy
			//it's now known that the player is on galaxy
			if(e.data.logged_in){
				cloudsaving.logged_in = true;
                sinceLastAutosaveTimer = setInterval(timeSinceLastAutosave, 500);
				//user is both on galaxy and logged into their account, post load request
				window.top.postMessage({
					action: "load",
					slot: 0,
				}, cloudsaving.website_name);
			}
		} 
		//this is a response to the load request
		else if (e.data.type === "save_content"){
			if(!e.data.error) {
				let cloud_data = JSON.parse(e.data.content)
				let local_data;
				if (localStorage.getItem("newPlayerData") !== null) {
					local_data = JSON.parse(localStorage.getItem("newPlayerData"));
				} else {
					local_data = (JSON.parse(localStorage.getItem("playerData"))??{blocks: {}, player: player});
					if (checkSaveType(local_data)) local_data = oldDataToNew(local_data);
				}
				if (checkSaveType(cloud_data)) cloud_data = oldDataToNew(cloud_data);
				if((cloud_data.player.stats.blocksMined??0) > (local_data.player.stats.blocksMined??0)){
					localStorage.setItem("newPlayerData", JSON.stringify(cloud_data))
					location.reload()
				}
			}
			else {
				if(e.data.message === "empty_slot"){
					//there's no cloud save, do nothing ig
					//maybe ask if user wants to enable it or not
				}
				else {
					//probably something is wrong with the server, don't save in this session
					cloudsaving.dosave = false
				}
			}
		}
	}
})