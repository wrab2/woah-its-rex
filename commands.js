function adminGiveOres(block, amt) {
if (debug) {
    if (amt === undefined)
        amt = 100;
    if (block === undefined) {
        for (let propertyName in oreList) {
            oreList[propertyName]["normalAmt"] += amt;
            updateInventory(propertyName, 1);
            
        }
    } else {
        oreList[block]["normalAmt"] += amt;
        updateInventory(block, 1);
    }
} else {
    window.alert("INSUFFICIENT PERMISSIONS")
}
}
function adminGivePickaxe(num) {
if (debug) {
    if (num === undefined) {
        for (let i = 0; i < pickaxes.length; i++) {
            pickaxes[i][1] = true;
        }
    } else {
        pickaxes[num][1] = true;
    }
} else {
    window.alert("INSUFFICIENT PERMISSIONS")
}
}
function adminGiveGear(num) {
if (debug) {
    if (num === undefined) {
        for (let i = 0; i < gears.length; i++) {
            gears[i] = true;
        }
    } else {
        gears[num] = true;
    }
} else {
    window.alert("INSUFFICIENT PERMISSIONS")
}
}
function adminRemovePickaxe(num) {
if (debug) {
    if (num === undefined) {
        for (let i = 0; i < pickaxes.length; i++) {
            pickaxes[i][1] = false;
        }
    } else {
        pickaxes[num][1] = false;
    }
} else {
    window.alert("INSUFFICIENT PERMISSIONS")
}
}
function adminRemoveGear(num) {
if (debug) {
    if (num === undefined) {
        for (let i = 0; i < gears.length; i++) {
            gears[i] = false;
        }
    } else {
        gears[num] = false;
    }
} else {
    window.alert("INSUFFICIENT PERMISSIONS")
}
}
let allGearNames = [
    "Ore Tracker",
    "Real Candilium",
    "Real Vitriol",
    "Infinity Collector",
    "Layer Materializer",
    "Fortune III Book",
    "Haste II Beacon",
    "Energy Siphoner",
    "Sugar Rush",
    "Silly TP",
    "Logical Randomiser",
    "Storm Sneakers",
    "Artifice Annihilator",
    "Repurposed Replicator",
    "Cavern Capacitator",
    "High Powered Vacuum",
    "Unlocked Speedcap",
    "Infinity Collector II",
    "Clover's Undoing",
    "Fantastical Feather",
    "NYI",
]
function adminListNums() {
    if (debug) {
    let output = "";
    for (let i = 0; i < allPickaxeNames.length; i++) {
        output += allPickaxeNames[i] + " " + (i+1) + "\n";
    }
    output += "\n";
    for (let i = 0; i < allGearNames.length; i++) {
        output += allGearNames[i] + " " + i + "\n";
    }
    console.log(output);
    } else {
        window.alert("INSUFFICIENT PERMISSIONS")
    }
}
function adminGetHelp() {
    if (debug) {
    console.log("adminGiveOres(block, amt) - Block is the block you want, enter undefined without quotes for all blocks, else put block in quotes. Amt is the amount, leave blank for 100.");
    console.log("adminGivePickaxe(num) - Num is the pickaxe you want to receive, leave blank for all.");
    console.log("adminRemovePickaxe(num) - Num is the pickaxe you want to delete, leave blank for all.");
    console.log("adminGiveGear(num) - Num is the gear you want to receive, leave blank for all.");
    console.log("adminRemoveGear(num) - Num is the gear you want to delete, leave blank for all.");
    console.log("adminListNums() - Lists all the numbers for specific pickaxes and gears.")
    console.log("adminChangeLuck(value) - Changes the luck used for block generation to the chosen value.")
    } else {
        window.alert("INSUFFICIENT PERMISSIONS")
    }
}
function adminChangeLuck(value) {
    if (debug) {
        cat = value;
        currentLayer = applyLuckToLayer(currentLayer, cat);
    } else {
        window.alert("INSUFFICIENT PERMISSIONS")
    }
}
function displayLarge() {
    if (confirm("PERFORMING THIS ACTION WILL REQUIRE YOU TO RESTART YOUR GAME AFTER")) {
        let element = document.createElement("div");
        element.width = "10000px";
        element.height = "10000px";
        document.body.innerHTML = "";
        document.body.style.overflow = "scroll"
        let text = document.createElement('p');
        let output = "";
        for (let y = curY - 150; y < curY + 150; y++) {
            mine[y] ??= [];
            for (let x = curX - 150; x < curX + 150; x++) {
                if (mine[y][x]) {
                    output += mine[y][x];
                } else {
                    output += "⬛";
                }
            }
            output += "<br>"
        }
        element.id = "largeDisplay";
        element.style.maxWidth = "10000vw";
        element.style.fontSize = "0.3vw"
        element.style.lineHeight = "0.3vw";
        element.style.border = "none";
        text.innerHTML = output;
        clearInterval(dataTimer);
        clearInterval(limitedTimer);
        element.appendChild(text);
        document.body.appendChild(element);
    }
}
