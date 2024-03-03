/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
let oreList = {
    '🐱': { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✈️': { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💗': { 'decimalRarity': 1 / 150000000000, 'numRarity': 150000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❤️‍🔥': { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '😻': { 'decimalRarity': 1 / 5000000005, 'numRarity': 5000000005, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏝️': { 'decimalRarity': 1 / 275320000, 'numRarity': 275320000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✨': { 'decimalRarity': 1 / 240800000, 'numRarity': 240800000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛄': { 'decimalRarity': 1 / 183640000, 'numRarity': 183640000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🌳': { 'decimalRarity': 1 / 9250000000, 'numRarity': 9250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 1, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💐': { 'decimalRarity': 1 / 3750000000, 'numRarity': 3750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥬': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥗': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌪️': { 'decimalRarity': 1 / 247010000, 'numRarity': 247010000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌏': { 'decimalRarity': 1 / 213200000, 'numRarity': 213200000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌲': { 'decimalRarity': 1 / 71000000, 'numRarity': 71000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌲 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎃': { 'decimalRarity': 1 / 69000000, 'numRarity': 69000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎃 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎍': { 'decimalRarity': 1 / 35000000, 'numRarity': 35000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎍 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎄': { 'decimalRarity': 1 / 12500000, 'numRarity': 12500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎄 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪵': { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪵 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌻': { 'decimalRarity': 1 / 9500000, 'numRarity': 9500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌻 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍁': { 'decimalRarity': 1 / 8900000, 'numRarity': 8900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍁 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🏰': { 'decimalRarity': 1 / 8888888888, 'numRarity': 8888888888, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌇': { 'decimalRarity': 1 / 4300000000, 'numRarity': 4300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥉': { 'decimalRarity': 1 / 444444444, 'numRarity': 444444444, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪞': { 'decimalRarity': 1 / 426800050, 'numRarity': 426800050, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔩': { 'decimalRarity': 1 / 420836000, 'numRarity': 420836000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧲': { 'decimalRarity': 1 / 43500000, 'numRarity': 43500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧲 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪬': { 'decimalRarity': 1 / 37000000, 'numRarity': 37000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪬 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧨': { 'decimalRarity': 1 / 31500000, 'numRarity': 31500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧨 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔗': { 'decimalRarity': 1 / 25000000, 'numRarity': 25000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔗 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪙': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪙 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🗿': { 'decimalRarity': 1 / 12000000, 'numRarity': 12000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗿 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪚': { 'decimalRarity': 1 / 9600000, 'numRarity': 9600000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪚 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪜': { 'decimalRarity': 1 / 7950000, 'numRarity': 7950000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪜 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🚿': { 'decimalRarity': 1 / 6000000000, 'numRarity': 6000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👁️': { 'decimalRarity': 1 / 1920000000, 'numRarity': 1920000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💸': { 'decimalRarity': 1 / 754000000, 'numRarity': 754000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⌛': { 'decimalRarity': 1 / 750000000, 'numRarity': 750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧵': { 'decimalRarity': 1 / 201061929, 'numRarity': 201061929, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕯️': { 'decimalRarity': 1 / 62500000, 'numRarity': 62500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🕯️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕋': { 'decimalRarity': 1 / 55000000, 'numRarity': 55000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🕋 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎨': { 'decimalRarity': 1 / 44000000, 'numRarity': 44000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎨 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎴': { 'decimalRarity': 1 / 13450000, 'numRarity': 13450000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎴 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥽': { 'decimalRarity': 1 / 12350000, 'numRarity': 12350000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🥽 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪄': { 'decimalRarity': 1 / 9460000, 'numRarity': 9460000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪄 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎭': { 'decimalRarity': 1 / 7650000, 'numRarity': 7650000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎭 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🐋': { 'decimalRarity': 1 / 8000000000, 'numRarity': 8000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💫': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪩': { 'decimalRarity': 1 / 999999999, 'numRarity': 999999999, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👿': { 'decimalRarity': 1 / 750000000, 'numRarity': 750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌀': { 'decimalRarity': 1 / 618000000, 'numRarity': 618000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔱': { 'decimalRarity': 1 / 70000000, 'numRarity': 70000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔱 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👑': { 'decimalRarity': 1 / 65000000, 'numRarity': 65000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '👑 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🐟': { 'decimalRarity': 1 / 26000000, 'numRarity': 26000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🐟 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🫧': { 'decimalRarity': 1 / 8750000, 'numRarity': 8750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🫧 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🤿': { 'decimalRarity': 1 / 8670000, 'numRarity': 8670000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤿 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎣': { 'decimalRarity': 1 / 8230000, 'numRarity': 8230000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎣 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛵': { 'decimalRarity': 1 / 7895000, 'numRarity': 7895000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛵ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🏔️': { 'decimalRarity': 1 / 5500000000, 'numRarity': 5500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌈': { 'decimalRarity': 1 / 2750000000, 'numRarity': 2750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧊': { 'decimalRarity': 1 / 583000000, 'numRarity': 583000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❄️': { 'decimalRarity': 1 / 386500000, 'numRarity': 386500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💎': { 'decimalRarity': 1 / 170000000, 'numRarity': 170000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☄️': { 'decimalRarity': 1 / 72500000, 'numRarity': 72500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '☄️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔮': { 'decimalRarity': 1 / 60000000, 'numRarity': 60000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔮 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔋': { 'decimalRarity': 1 / 36000000, 'numRarity': 36000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔋 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💍': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💍 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥏': { 'decimalRarity': 1 / 8000000, 'numRarity': 8000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🥏 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚜️': { 'decimalRarity': 1 / 6250000, 'numRarity': 6250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚜️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💠': { 'decimalRarity': 1 / 6000000, 'numRarity': 6000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💠 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '⚠️': { 'decimalRarity': 1 / 6666666666, 'numRarity': 6666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎆': { 'decimalRarity': 1 / 3000000000, 'numRarity': 3000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧀': { 'decimalRarity': 1 / 618000001, 'numRarity': 618000001, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌌': { 'decimalRarity': 1 / 550000000, 'numRarity': 550000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥀': { 'decimalRarity': 1 / 538000000, 'numRarity': 538000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎇': { 'decimalRarity': 1 / 67500000, 'numRarity': 67500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎇 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔳': { 'decimalRarity': 1 / 46000000, 'numRarity': 46000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔳 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏹️': { 'decimalRarity': 1 / 29000000, 'numRarity': 29000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏹️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧩': { 'decimalRarity': 1 / 14500000, 'numRarity': 14500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧩 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔔': { 'decimalRarity': 1 / 12250000, 'numRarity': 12250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔔 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚗️': { 'decimalRarity': 1 / 9750000, 'numRarity': 9750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚗️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧪': { 'decimalRarity': 1 / 7500000, 'numRarity': 7500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧪 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🐪': { 'decimalRarity': 1 / 7800000000, 'numRarity': 7800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏵️': { 'decimalRarity': 1 / 2600000000, 'numRarity': 2600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪐': { 'decimalRarity': 1 / 709000750, 'numRarity': 709000750, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💥': { 'decimalRarity': 1 / 375000000, 'numRarity': 375000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔥': { 'decimalRarity': 1 / 160000000, 'numRarity': 160000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔆': { 'decimalRarity': 1 / 75000000, 'numRarity': 75000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔆 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⭐': { 'decimalRarity': 1 / 70600600, 'numRarity': 70600600, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⭐ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎀': { 'decimalRarity': 1 / 31000000, 'numRarity': 31000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎀 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🗡️': { 'decimalRarity': 1 / 13000000, 'numRarity': 13000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗡️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📟': { 'decimalRarity': 1 / 8750000, 'numRarity': 8750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📟 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚱️': { 'decimalRarity': 1 / 7467000, 'numRarity': 7467000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚱️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖍️': { 'decimalRarity': 1 / 6800000, 'numRarity': 6800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖍️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '💵': { 'decimalRarity': 1 / 8900000000, 'numRarity': 8900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪅': { 'decimalRarity': 1 / 3250000000, 'numRarity': 3250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👀': { 'decimalRarity': 1 / 955200890, 'numRarity': 955200890, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌟': { 'decimalRarity': 1 / 257280000, 'numRarity': 257280000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📝': { 'decimalRarity': 1 / 200000000, 'numRarity': 200000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⌚': { 'decimalRarity': 1 / 52000000, 'numRarity': 52000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⌚ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏆': { 'decimalRarity': 1 / 38000000, 'numRarity': 38000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🏆 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🗜️': { 'decimalRarity': 1 / 42000000, 'numRarity': 42000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗜️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎲': { 'decimalRarity': 1 / 7777777, 'numRarity': 7777777, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎲 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✂️': { 'decimalRarity': 1 / 7000000, 'numRarity': 7000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '✂️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🃏': { 'decimalRarity': 1 / 5500000, 'numRarity': 5500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🃏 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚙️': { 'decimalRarity': 1 / 5000000, 'numRarity': 5000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚙️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🫶': { 'decimalRarity': 1 / 1000000000000, 'numRarity': 1000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎉': { 'decimalRarity': 1 / 1000000000000, 'numRarity': 1000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧌': { 'decimalRarity': 1 / 696969696969, 'numRarity': 696969696969, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '♾️': { 'decimalRarity': 1 / 75000000000, 'numRarity': 75000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💅': { 'decimalRarity': 1 / 11201200200, 'numRarity': 11201200200, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '😁': { 'decimalRarity': 1 / 9000000000, 'numRarity': 9000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪢': { 'decimalRarity': 1 / 8181818181, 'numRarity': 8181818181, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🫃': { 'decimalRarity': 1 / 6600000000, 'numRarity': 6600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🪽': { 'decimalRarity': 1 / 260000000000, 'numRarity': 260000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍃': { 'decimalRarity': 1 / 13500000000, 'numRarity': 13500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪶': { 'decimalRarity': 1 / 2060000000, 'numRarity': 2060000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌦️': { 'decimalRarity': 1 / 275000000, 'numRarity': 275000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌩️': { 'decimalRarity': 1 / 175000000, 'numRarity': 175000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛈️': { 'decimalRarity': 1 / 74000000, 'numRarity': 74000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛈️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪁': { 'decimalRarity': 1 / 45500000, 'numRarity': 45500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪁 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪂': { 'decimalRarity': 1 / 30000000, 'numRarity': 30000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪂 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌨️': { 'decimalRarity': 1 / 25000000, 'numRarity': 25000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌨️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌥️': { 'decimalRarity': 1 / 14400000, 'numRarity': 14400000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌥️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌤️': { 'decimalRarity': 1 / 7800000, 'numRarity': 7800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌤️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌧️': { 'decimalRarity': 1 / 7000000, 'numRarity': 7000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌧️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎐': { 'decimalRarity': 1 / 5500000, 'numRarity': 5500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎐 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🔫': { 'decimalRarity': 1 / 615000000000, 'numRarity': 615000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👾': { 'decimalRarity': 1 / 9000000000, 'numRarity': 9000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏹': { 'decimalRarity': 1 / 4210000000, 'numRarity': 4210000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💣': { 'decimalRarity': 1 / 771100000, 'numRarity': 771100000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔨': { 'decimalRarity': 1 / 540000000, 'numRarity': 540000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪓': { 'decimalRarity': 1 / 82000000, 'numRarity': 82000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪓 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪃': { 'decimalRarity': 1 / 12210000, 'numRarity': 12210000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪃 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛡️': { 'decimalRarity': 1 / 9980000, 'numRarity': 9980000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🛡️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🗝️': { 'decimalRarity': 1 / 420000000000, 'numRarity': 420000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪝': { 'decimalRarity': 1 / 75000000000, 'numRarity': 75000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪡': { 'decimalRarity': 1 / 23000000000, 'numRarity': 23000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛎️': { 'decimalRarity': 1 / 4730000000, 'numRarity': 4730000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚧': { 'decimalRarity': 1 / 1100000000, 'numRarity': 1100000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛓️': { 'decimalRarity': 1 / 345000000, 'numRarity': 345000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔏': { 'decimalRarity': 1 / 243800000, 'numRarity': 243800000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖇️': { 'decimalRarity': 1 / 31337000, 'numRarity': 31337000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖇️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔑': { 'decimalRarity': 1 / 12700000, 'numRarity': 12700000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔑 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔒': { 'decimalRarity': 1 / 9900000, 'numRarity': 9900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔒 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '💰': { 'decimalRarity': 1 / 857000000000, 'numRarity': 857000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚽': { 'decimalRarity': 1 / 20240000000, 'numRarity': 20240000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📽️': { 'decimalRarity': 1 / 3780000000, 'numRarity': 3780000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧂': { 'decimalRarity': 1 / 1337000000, 'numRarity': 1337000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔪': { 'decimalRarity': 1 / 632000000, 'numRarity': 632000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💔': { 'decimalRarity': 1 / 155000000, 'numRarity': 155000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💔 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍆': { 'decimalRarity': 1 / 69696969, 'numRarity': 69696969, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍆 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖱️': { 'decimalRarity': 1 / 11101000, 'numRarity': 11101000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖱️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⌨️': { 'decimalRarity': 1 / 10010000, 'numRarity': 10010000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⌨️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💻': { 'decimalRarity': 1 / 6320000, 'numRarity': 6320000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💻 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '⚖️': { 'decimalRarity': 1 / 123321000000, 'numRarity': 123321000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎓': { 'decimalRarity': 1 / 7900000000, 'numRarity': 7900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📍': { 'decimalRarity': 1 / 4321000000, 'numRarity': 4321000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📌': { 'decimalRarity': 1 / 1230000000, 'numRarity': 1230000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔎': { 'decimalRarity': 1 / 725000000, 'numRarity': 725000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖊️': { 'decimalRarity': 1 / 165000000, 'numRarity': 165000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📚': { 'decimalRarity': 1 / 48100000, 'numRarity': 48100000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📚 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📐': { 'decimalRarity': 1 / 34000000, 'numRarity': 34000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📐 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📖': { 'decimalRarity': 1 / 16000000, 'numRarity': 16000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📖 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧠': { 'decimalRarity': 1 / 15500000, 'numRarity': 15500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧠 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✏️': { 'decimalRarity': 1 / 8200000, 'numRarity': 8200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '✏️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🩸': { 'decimalRarity': 1 / 13000000000000, 'numRarity': 13000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚫': { 'decimalRarity': 1 / 666666666666, 'numRarity': 666666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💢': { 'decimalRarity': 1 / 26000000000, 'numRarity': 26000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔇': { 'decimalRarity': 1 / 3300000000, 'numRarity': 3300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛑': { 'decimalRarity': 1 / 1000000000, 'numRarity': 1000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⭕': { 'decimalRarity': 1 / 600000000, 'numRarity': 600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔕': { 'decimalRarity': 1 / 225000000, 'numRarity': 225000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '⚕️': { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌙': { 'decimalRarity': 1 / 2626262626, 'numRarity': 2626262626, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪔': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎷': { 'decimalRarity': 1 / 2500000000, 'numRarity': 2500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧫': { 'decimalRarity': 1 / 4000000000, 'numRarity': 4000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🩺': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌡️': { 'decimalRarity': 1 / 3000000000, 'numRarity': 3000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛸': { 'decimalRarity': 1 / 1000000000, 'numRarity': 1000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪘': { 'decimalRarity': 1 / 500000000, 'numRarity': 500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💱': { 'decimalRarity': 1 / 180000000, 'numRarity': 180000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💊': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍄': { 'decimalRarity': 1 / 250000000, 'numRarity': 250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥁': { 'decimalRarity': 1 / 100000000, 'numRarity': 100000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕸️': { 'decimalRarity': 1 / 40000000, 'numRarity': 40000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔭': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪇': { 'decimalRarity': 1 / 20000000, 'numRarity': 20000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧬': { 'decimalRarity': 1 / 70000000, 'numRarity': 70000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📡': { 'decimalRarity': 1 / 8000000, 'numRarity': 8000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '📡 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎹': { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '🎹 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💉': { 'decimalRarity': 1 / 17500000, 'numRarity': 17500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '💉 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍥': { 'decimalRarity': 1 / 27500000, 'numRarity': 27500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '🍥 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    '🍀': { 'decimalRarity': 1 / 444400000000000, 'numRarity': 444400000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☘️': { 'decimalRarity': 1 / 33300000000000, 'numRarity': 33300000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    '🤍': { 'decimalRarity': 1 / 2000000, 'numRarity': 2000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤍 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖤': { 'decimalRarity': 1 / 1750000, 'numRarity': 1750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖤 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🤎': { 'decimalRarity': 1 / 1500000, 'numRarity': 1500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤎 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💜': { 'decimalRarity': 1 / 1250000, 'numRarity': 1250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💜 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❤️': { 'decimalRarity': 1 / 1000000, 'numRarity': 1000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '❤️ Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧡': { 'decimalRarity': 1 / 950000, 'numRarity': 950000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧡 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💛': { 'decimalRarity': 1 / 900000, 'numRarity': 900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💛 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💙': { 'decimalRarity': 1 / 800000, 'numRarity': 800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💙 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💚': { 'decimalRarity': 1 / 750000, 'numRarity': 750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💚 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚫': { 'decimalRarity': 1 / 100, 'numRarity': 100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚫ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟤': { 'decimalRarity': 1 / 90, 'numRarity': 90, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🟤 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟣': { 'decimalRarity': 1 / 80, 'numRarity': 80, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🟣 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔴': { 'decimalRarity': 1 / 70, 'numRarity': 70, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔴 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟠': { 'decimalRarity': 1 / 60, 'numRarity': 60, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🟠 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟡': { 'decimalRarity': 1 / 55, 'numRarity': 55, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🟡 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔵': { 'decimalRarity': 1 / 50, 'numRarity': 50, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔵 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟢': { 'decimalRarity': 1 / 45, 'numRarity': 45, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🟢 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟪': { 'decimalRarity': 1 / 40, 'numRarity': 40, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🟪 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟥': { 'decimalRarity': 1 / 35, 'numRarity': 35, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🟥 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟧': { 'decimalRarity': 1 / 30, 'numRarity': 30, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🟧 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '📘': { 'decimalRarity': 1 / 1900000, 'numRarity': 1900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📘 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📙': { 'decimalRarity': 1 / 1500500, 'numRarity': 1500500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📙 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📕': { 'decimalRarity': 1 / 1230560, 'numRarity': 1230560, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📕 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📗': { 'decimalRarity': 1 / 854000, 'numRarity': 854000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📗 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏏️': { 'decimalRarity': 1 / 300000, 'numRarity': 300000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏏️ Has Spawned!', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '▶️': { 'decimalRarity': 1 / 250000, 'numRarity': 250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '▶️ Has Spawned!', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✴️': { 'decimalRarity': 1 / 200000, 'numRarity': 200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '✴️ Has Spawned!', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏸️': { 'decimalRarity': 1 / 200000, 'numRarity': 200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏸️ Has Spawned!', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏯️': { 'decimalRarity': 1 / 175000, 'numRarity': 175000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏯️ Has Spawned!', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏺️': { 'decimalRarity': 1 / 100000, 'numRarity': 100000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏺️ Has Spawned!', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏭️': { 'decimalRarity': 1 / 90000, 'numRarity': 90000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏭️ Has Spawned!', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏮️': { 'decimalRarity': 1 / 75000, 'numRarity': 75000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏮️ Has Spawned!', 'oreTier': 'Master', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏩': { 'decimalRarity': 1 / 70000, 'numRarity': 70000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏩ Has Spawned!', 'oreTier': 'Master', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏪': { 'decimalRarity': 1 / 60000, 'numRarity': 60000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏪ Has Spawned!', 'oreTier': 'Master', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏬': { 'decimalRarity': 1 / 50000, 'numRarity': 50000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏬ Has Spawned!', 'oreTier': 'Master', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏫': { 'decimalRarity': 1 / 25000, 'numRarity': 25000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏫ Has Spawned!', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '◀️': { 'decimalRarity': 1 / 20000, 'numRarity': 20000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '◀️ Has Spawned!', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔼': { 'decimalRarity': 1 / 17500, 'numRarity': 17500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔼 Has Spawned!', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔽': { 'decimalRarity': 1 / 15000, 'numRarity': 15000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔽 Has Spawned!', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '➡️': { 'decimalRarity': 1 / 10000, 'numRarity': 10000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '➡️ Has Spawned!', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↖️': { 'decimalRarity': 1 / 9000, 'numRarity': 9000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '↖️ Has Spawned!', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↘️': { 'decimalRarity': 1 / 5000, 'numRarity': 5000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '↘️ Has Spawned!', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⬇️': { 'decimalRarity': 1 / 3000, 'numRarity': 3000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⬇️ Has Spawned!', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⬆️': { 'decimalRarity': 1 / 2500, 'numRarity': 2500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⬆️ Has Spawned!', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⬅️': { 'decimalRarity': 1 / 1750, 'numRarity': 1750, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⬅️ Has Spawned!', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↪️': { 'decimalRarity': 1 / 1500, 'numRarity': 1500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '↪️ Has Spawned!', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↩️': { 'decimalRarity': 1 / 1250, 'numRarity': 1250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '↩️ Has Spawned!', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⤴️': { 'decimalRarity': 1 / 1000, 'numRarity': 1000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⤴️ Has Spawned!', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⤵️': { 'decimalRarity': 1 / 750, 'numRarity': 750, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⤵️ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔀': { 'decimalRarity': 1 / 500, 'numRarity': 500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔀 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔁': { 'decimalRarity': 1 / 300, 'numRarity': 300, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔁 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔂': { 'decimalRarity': 1 / 250, 'numRarity': 250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔂 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔄': { 'decimalRarity': 1 / 175, 'numRarity': 175, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔄 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔃': { 'decimalRarity': 1 / 100, 'numRarity': 100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔃 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🟫': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🟫 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧱': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧱 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌫️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌫️ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌊': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌊 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪨': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪨 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☢️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '☢️ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌵': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌵 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📰': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📰 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎂': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎂 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪈': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪈 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🦠': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🦠 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☣️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '☣️ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎵': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎵 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❓': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '❓ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☁️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '☁️ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📺': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📺 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚪': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🚪 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌐': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌐 Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '♟️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '♟️ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✖️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': '✖️ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❌': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '❌ Has Spawned!', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },


    "⛏️": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "⚪": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🟩": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 }
}
let variantInvNames = ["normalAmt", "electrifiedAmt", "radioactiveAmt", "explosiveAmt"];
//ALL LAYERS
const dirtLayer = {
    //"🍓": 1/560000000000,
    "🌳": 1/9250000000,
    //"😻": 1/5000000005,
    "💐": 1/3750000000,
    "🥗": 1/800000000,
    "🌪️": 1/247010000,
    "🌏": 1/213200000,
    //"⛄": 1/183640000,
    "🌲": 1/71000000,
    "🎃": 1/69000000,
    "🎍": 1/35000000,
    "🎄": 1/12500000,
    "🪵": 1/10000000,
    "🌻": 1/9500000,
    "🍁": 1/8900000,
    "🟫": 1/1
},

dirtLayer2 = {
    //"🍓": 1/560000000000,
    "🌳": 1/9250000000,
    //"😻": 1/5000000005,
    "💐": 1/3750000000,
    "🥬": 1/2000000000,
    "🥗": 1/800000000,
    "🌪️": 1/247010000,
    "🌏": 1/213200000,
    //"⛄": 1/183640000,
    "🌲": 1/71000000,
    "🎃": 1/69000000,
    "🎍": 1/35000000,
    "🎄": 1/12500000,
    "🪵": 1/10000000,
    "🌻": 1/9500000,
    "🍁": 1/8900000,
    "🟫": 1/1
},

brickLayer = {
    //"🏯": 1/430000000000,
    "🏰": 1/8888888888,
    //"😻": 1/5000000005,
    "🌇": 1/4300000000,
    "🥉": 1/444444444,
    "🪞": 1/426800050,
    "🔩": 1/420836000,
    //"⛄": 1/183640000,
    "🧲": 1/43500000,
    "🪬": 1/37000000,
    "🧨": 1/31500000,
    "🔗": 1/25000000,
    "🪙": 1/15000000,
    "🗿": 1/12000000,
    "🪚": 1/9600000,
    "🪜": 1/7950000,
    "🧱": 1/1
},

foggyLayer = {
    //"🦚": 1/245000000000,
    "❤️‍🔥" : 1/50000000000,
    "🚿": 1/6000000000,
    //"😻": 1/5000000005,
    "👁️": 1/1920000000,
    "💸": 1/754000000,
    "⌛": 1/750000000,
    "🧵": 1/201061929,
    //"⛄": 1/183640000,
    "🕯️": 1/62500000,
    "🕋": 1/55000000,
    "🎨": 1/44000000,
    "🎴": 1/13450000,
    "🥽": 1/12350000,
    "🪄": 1/9460000,
    "🎭": 1/7650000,
    "🌫️": 1/1
},

waterLayer = {
    //"👽": 1/750000000000,
    "🐋": 1/8000000000,
    //"😻": 1/5000000005,
    "💫": 1/2000000000,
    "🪩": 1/999999999,
    "👿": 1/750000000,
    "🌀": 1/618000000,
    //"⛄": 1/183640000,
    "🔱": 1/70000000,
    "👑": 1/65000000,
    "🐟": 1/26000000,
    "🫧": 1/8750000,
    "🤿": 1/8670000,
    "🎣": 1/8230000,
    "⛵": 1/7895000,
    "🌊": 1/1
},

rockLayer = {
    //"🪤": 1/800000000000,
    "🏔️": 1/5500000000,
    //"😻": 1/5000000005,
    "🌈": 1/2750000000,
    "🧊": 1/583000000,
    "❄️": 1/386500000,
    //"🏝️": 1/275320000,
    //"✨": 1/240800000,
    //"⛄": 1/183640000,
    "💎": 1/170000000,
    "☄️": 1/72500000,
    "🔮": 1/60000000,
    "🔋": 1/36000000,
    "💍": 1/15000000,
    "🥏": 1/8000000,
    "⚜️": 1/6250000,
    "💠": 1/6000000,
    "🪨": 1/1
},

radioactiveLayer = {
    //"🤖": 1/640000000000,
    "⚠️": 1/6666666666,
    //"😻": 1/5000000005,
    "🎆": 1/3000000000,
    "🧀": 1/618000001,
    "🌌": 1/550000000,
    "🥀": 1/538000000,
    //"⛄": 1/183640000,
    "🎇": 1/67500000,
    "🔳": 1/46000000,
    "⏹️": 1/29000000,
    "🧩": 1/14500000,
    "🔔": 1/12250000,
    "⚗️": 1/9750000,
    "🧪": 1/7500000,
    "☢️": 1/1
},

cactusLayer = {
    //"🦴" : 1/175000000000,
    "💗": 1/150000000000,
    "🐪": 1/7800000000,
    //"😻": 1/5000000005,
    "🏵️": 1/2600000000,
    "🪐": 1/709000750,
    "💥": 1/375000000,
    //"⛄": 1/183640000,
    "🔥": 1/160000000,
    "🔆": 1/75000000,
    "⭐": 1/70600600,
    "🎀": 1/31000000,
    "🗡️": 1/13000000,
    "📟": 1/8750000,
    "⚱️": 1/7467000,
    "🖍️": 1/6800000,
    "🌵": 1/1
},

paperLayer = {
    //"🎩" : 1/300500000000,
    "💵": 1/8900000000,
    //"😻": 1/5000000005,
    "🪅": 1/3250000000,
    "👀": 1/955200890,
    "🌟": 1/257280000,
    "📝": 1/200000000,
    //"⛄": 1/183640000,
    "⌚": 1/52000000,
    "🗜️": 1/42000000,
    "🏆": 1/38000000,
    "🎲": 1/7777777,
    "✂️": 1/7000000,
    "🃏": 1/5500000,
    "⚙️": 1/5000000,
    "📰": 1/1
},

worldOneCommons = {
    "🤍": 1/2000000,
    "🖤": 1/1750000,
    "🤎": 1/1500000,
    "💜": 1/1250000,
    "❤️": 1/1000000,
    "🧡": 1/950000,
    "💛": 1/900000,
    "💙": 1/800000,
    "💚": 1/750000,
    "⚫": 1/100,
    "🟤": 1/90,
    "🟣": 1/80,
    "🔴": 1/70,
    "🟠": 1/60,
    "🟡": 1/55,
    "🔵": 1/50,
    "🟢": 1/45,
    "🟪": 1/40,
    "🟥": 1/35,
    "🟧": 1/30,
},

sillyLayer = {
    "🎉" : 1/1000000000000,
    "🧌": 1/696969696969,
    "♾️": 1/75000000000,
    "💅": 1/11201200200,
    "😁": 1/9000000000,
    "🪢": 1/8181818181,
    "🫃": 1/6600000000,
    //"⛄": 1/183640000,
    "🎂": 1/1
},

fluteLayer = {
    "🫶": 1/1000000000000,
    "🪈": 1/1
},
cloudLayer = {
    "☘️" : 1/33300000000000,
    "🪽" : 1/260000000000,
    "🍃" : 1/13500000000,
    "🪶" : 1/2060000000,
    "🌦️" : 1/275000000,
    "🌩️" : 1/175000000,
    "⛈️" : 1/74000000,
    "🪁" : 1/45500000,
    "🪂" : 1/30000000,
    "🌨️" : 1/25000000,
    "🌥️" : 1/14400000,
    "🌤️" : 1/7800000,
    "🌧️" : 1/7000000,
    "🎐" : 1/5500000,
    "☁️" : 1/1,
},

tvLayer = {
    "☘️" : 1/33300000000000,
    "🔫" : 1/615000000000,
    "👾" : 1/9000000000,
    "🏹" : 1/4210000000,
    "💣" : 1/771100000,
    "🔨" : 1/540000000,
    "🪓" : 1/82000000,
    "🪃" : 1/12210000,
    "🛡️" : 1/9980000,
    "📺" : 1/1,
},

doorLayer = {
    "☘️" : 1/33300000000000,
    "🗝️" : 1/420000000000,
    "🪝" : 1/75000000000, //75b
    "🪡" : 1/23000000000, //23b
    "🛎️" : 1/4730000000,
    "🚧" : 1/1100000000,
    "⛓️" : 1/345000000,
    "🔏" : 1/243800000,
    "🖇️" : 1/31337000,
    "🔑" : 1/12700000,
    "🔒" : 1/9900000,
    "🚪" : 1/1,
},

globeLayer = {
    "☘️" : 1/33300000000000,
    "💰" : 1/857000000000,
    "🚽" : 1/20240000000,
    "📽️" : 1/3780000000,
    "🧂" : 1/1337000000,
    "🔪" : 1/632000000,
    "💔" : 1/155000000,
    "🍆" : 1/69696969,
    "🖱️" : 1/11101000,
    "⌨️" : 1/10010000,
    "💻" : 1/6320000,
    "🌐" : 1/1,
}, 

chessLayer = {
    "☘️" : 1/33300000000000,
    "⚖️" : 1/123456654321,
    "🎓" : 1/7900000000, //7.9b
    "📍" : 1/4321000000,
    "📌" : 1/1230000000,
    "🔎" : 1/725000000,
    "🖊️" : 1/165000000,
    "📚" : 1/48100000,
    "📐" : 1/34000000,
    "📖" : 1/16000000,
    "🧠" : 1/15500000,
    "✏️" : 1/8200000,
    "♟️" : 1/1,
},

barrierLayer = {
    "☘️" : 1/33300000000000,
    "✴️" : 1/200000,
    "✖️" : 1/1
},

borderLayer = {
    "☘️" : 1/33300000000000,
    "🩸" : 1/13000000000000,
    "🚫" : 1/666666666666,
    "💢" : 1/26000000000,
    "🔇" : 1/3300000000,
    "🛑" : 1/1000000000,
    "⭕" : 1/600000000,
    "🔕" : 1/225000000,
    "❌" : 1/1,
},  

worldTwoCommons = {
    "📘" : 1/1900000,
    "📙" : 1/1500500,
    "📕" : 1/1230560,
    "📗" : 1/854000,
    "⏏️" : 1/300000,
    "▶️" : 1/250000,
    "⏸️" : 1/200000,
    "⏯️" : 1/175000,
    "⏺️" : 1/100000,
    "⏭️" : 1/90000,
    "⏮️" : 1/75000,
    "⏩" : 1/70000,
    "⏪" : 1/60000,
    "⏬" : 1/50000,
    "⏫" : 1/25000,
    "◀️" : 1/20000,
    "🔼" : 1/17500,
    "🔽" : 1/15000,
    "➡️" : 1/10000,
    "↖️" : 1/9000,
    "↘️" : 1/5000,
    "⬇️" : 1/3000,
    "⬆️" : 1/2500,
    "⬅️" : 1/1750,
    "↪️" : 1/1500,
    "↩️" : 1/1250,
    "⤴️" : 1/1000,
    "⤵️" : 1/750,
    "🔀" : 1/500,
    "🔁" : 1/300,
    "🔂" : 1/250,
    "🔄" : 1/175,
    "🔃" : 1/100
};
let worldOneLayers = [dirtLayer, brickLayer, foggyLayer, waterLayer, rockLayer, radioactiveLayer, cactusLayer, paperLayer];
let worldTwoLayers = [cloudLayer, tvLayer, doorLayer, globeLayer, chessLayer];
let specialLayers = [sillyLayer, fluteLayer, dirtLayer2, barrierLayer, borderLayer];
let allLayers = [dirtLayer, brickLayer, foggyLayer, waterLayer, rockLayer, radioactiveLayer, cactusLayer, paperLayer];
//
const customMessages = {
    "📽️" : "You're alone, and yet you feel the eyes of millions stare upon you through a peculiar lens...",
    "🎓" : "An influx of knowledge passes you by as you reap the reward of years of turmoil...",
    "🔎" : "Through the glass, you gain a feeling of omniscience as your vision achieves clarity...",
    "🚧" : "A feeling of authorisation stops you in your tracks, giving you the inclination to turn back...",
    "🍃" : "Leaves of green elegantly glide through the sky to wherever their aerial current leads...",
    "👾" : "A wave of nostalgia sweeps over you as 8-bit sound effects take you back to where it all began...",
    "🪡" : "Why did you make a lacklustre key to this world when you could've just lockpicked it? Minimal brain cells I swear...",
    "🪝" : "As graceful as a key may look, breaking a lock with this is infinitely cooler...",
    "🔇" : "Do not speak further, for I know your determination will falter...",
    "📍" : "Mark after mark, record after record, the earth below unfolds its interior on paper before you...",
    "🧂" : "As if on the seaside, the air tastes of salt, yet there's the faint sound of yelling and profanity in the distance...",
    "🎉" : "YIPPEEEE YIPEYIPEYIPEYIPE YIIIPPPPEEEEEEEEEE!!!...",
    "😁" : "Nothing bad was ever in this layer...",
    "🩸" : "You.. would t- take my life as a t- trophy..? So be it..! Clover.. I wish y- you all the luck you b- bestowed upon me back. ..You'll n- need it...",
    "🍀" : "This is it..? The symbol of luck itself, a simple four-leafed clover..?",
    "🔕" : "You shouldn't be here. Turn back while you still can..." ,
    "⭕" : "You're still here? Very well. Do not say you were never warned...",
    "🛑" : "A defence breach?! No.. you have not infiltrated me yet...",
    "💢" : "Why do you persist? What are you trying to prove?! I don't want to have to use my final gambit.. but I will if I have to...",
    "🚫" : "That's not.. possible.. how? What do you want from me? I.. don't have anything more to offer you...",
    "🖊️" : "A mystical object of creativity draws in a reality of imagination...",
    "📌" : "You briefly see the mine in all its splendor, as if all its intricacies had been mapped to a tee...",
    "⚖️" : "You feel your fate hang in the balance, as every one of your actions are weighed against one another...",
    "🔪" : "Life is a beautiful thing, and all it takes is a sharp slash of steel to take...",
    "🚽" : "Don't even THINK about it...",
    "💰" : "A silky bag showers you with money, scattering riches all around...",
    "🔏" : "An unknown mystery is revealed as a key is summoned to you...",
    "⛓️" : "Silver nuggets conjugate to lock an eternal presence from you...",
    "🛎️" : "A timeless ringing severes your hearing...",
    "🗝️" : "You thought the key to this world was special? Just you wait until this one finds its designated lock...",
    "🔨" : "Where scents of sawdust mingled with the sharp tang of metal, there lie a beautiful hammer...",
    "💣" : "Fuse lighted, explosive placed, all that's left is to wait for chaos and catastrophe to ensue...",
    "🏹" : "A bow fires an arrow, whistling through the wind as it's poised to pierce its target...",
    "🔫" : "Your nerves spike to an all time high as your body starts to tremble in fear...",
    "🌩️" : "The sky darkens, yet beautiful streaks of electrical light zap the ground below...",
    "🌦️" : "As the storm dissipates, a bright light shines upon you...",
    "🪶" : "Dancing on the air, this feather is one of the many as part of something much greater...",
    "🪽" : "The wings of glory travelled with you to this world, but are now free to roam the skies...",
    "☘️" : "A peculiar three-leafed clover.. there must be more to this strange aura it emanates, this feels.. incomplete..",
    "🌙": "Lunar rays of light dance upon your iris, captivating your adoring gaze..",
    "🫶": "A heartfelt gesture beckons you closer, both physically and mentally...",
    "💗": "A distant pulse resonates with your heart, synchronising its beat with yours...",
    "❤️‍🔥": "A compassionate warmth envelops your heart in a fiery yet comforting embrace...",
    "🧌": "WHAT ARE YOU DOING IN MY SWAMP?!!",
    "♾️": "life goes on and on and on and on and on and on and on and on...",
    "⚕️": "Gently materializing, a healing symbol radiates a serene energy, offering tranquility...",
    "💅": "GURLLLLLLL NO WAYYYYYYYY OMGGGGGGGGG...",
    "🌳": "CAKECORE13...",
    "💵": "MONEY MONEY KACHINGGGG JACKPOT...",
    "🏰": "An essence of royalty graces the air of majestic opulence...",
    "🪢": "Halfheartedly sauntering into existence, a lackluster piece of twine makes a feeble attempt at garnering attention, or not...",
    "🐋": "In the vast expanse of the ocean, where the horizon stretches endlessly and the waters teem with life, a beautiful whale emerges from the depths...",
    "🐪": "A camel walks across the huge Sahara...",
    "⚠️": "EXTREMELY LOUD INCORRECT BUZZER...",
    "🫃": "Why did I let someone convince me to add this...",
    "🚿": "A refreshing cascade rejuvenates the area...",
    "🏔️": "A tear comes to your eye as you gaze upon a beautiful landscape...",
    "😻": "holy shit is this a real cat??",
    "🌇": "The city shines bright as the rising sun illuminates it...",
    "💐": "From the depths of nature's embrace, a delicate bloom unfurls, casting a fragrant aura upon its surroundings...",
    "🪅": "Effervescently, festive confetti materializes bringing bursts of celebratory charm to the surroundings...",
    "🎆": "A sparkling burst appears as dazzling fireworks lights up the scene...",
    "🌈": "A vivid spectrum bursts forth, painting the surroundings with radiant color...",
    "🏵️": "A flower imparts a fleeting beauty to the terrain...",
    "🥬": "A leafy green surprise decides to join the vegetable party...",
    "💫": "Celestial bodies collide illuminating the depths with cosmic enchantment...",
    "👁️": "A cosmic anomaly of nothingness emerges past the boundaries of an unseen realm...",
    "🪩": "Your vision expands as your head spikes with an adrenaline rush...",
    "👀": "In this tumultuous symphony of the senses, time loses its meaning, and everything becomes a mere illusion...",
    "🥗": "A state of alignment with the natural rhythms of life, sings a harmony that resonates from the inside out...",
    "💸": "Softly descending, celestial radiance brings serenity to the infinite depths...",
    "👿": "Cosmic energies radiate from the depths, casting an enigmatic darkness...",
    "⌛": "Seconds pass, centuries pass, what's the difference? We are all mere specks of life in the concept of eternity.,,",
    "🪐": "Like tendrils of gentle embrace, a serene mist glides through the air...",
    "🧀": "As the scent envelops you, your mouth may water in anticipation of the delectable flavors that await...",
    "🌀": "A giant celestial body emerges, releasing cosmic energy that absorbs nearby quasars...",
    "🧊": "A frigid touch brings an icy embrace from the depths...",
    "🌌": "An infinite collection of galaxies converge creating an enchanting radiance...",
    "🥀": "With bated breath, you stand paralyzed, engulfed by the suffocating grip of fear as the terrible beast's gaze falls upon you...",
    "🥉": "turn the shower off...",
    "🪞": "You embrace the beauty of the grayscale world, where light and shadow dance in a timeless symphony of existence...",
    "🔩": "Your consciousness expands, transcending the limitations of mortal perception...",
    "❄️": "The world around you takes on a surreal quality as if draped in a cloak of frozen silence...",
    "💥": "Chaos reigns supreme as the forces of destruction sweep across the land...",
    "🏝️": "Huge, beaming crystals emerge from the ground, creating an ephemeral atmosphere...",
    "🌟": "In the far reaches of outer space, a gleaming light catches your attention...",
    "🌪️": "As the vortex descends from the heavens, the atmosphere trembles with its raw power...",
    "✨": "From every corner of festive depths, bursts of color erupt like fireworks against the velvet sky...",
    "🌏": "Ancient energies resonate in the depths with the essence of primordial earth...",
    "🧵": "A geometrical marvel adds an element of mathematical elegance...",
    "📝": "In this wondrous realm, the lines between fantasy and reality blur...",
    "⛄": "In the quiet solitude of a winter landscape, a seed of ice blossoms into a testament to resilience and renewal...",
    "💱": "Essences of exchange and trade fall through the depths, filling the cosmos with currency...",
    "💎": "Unearthed from the abyss, a dazzling gemstone emerges, casting a mesmerizing glow upon you...",
    "🔥": "oh wow 🔥🔥🔥",
    "🪔": "A lamp illuminates everything around you...",
    "🩺": "The heartbeats grow louder...",
    "🔭": "Unveiling cosmic wonders, an unknown gadget reveals the unseen...",
    "🎷": "A jazzed melody fills the room with rhythmic notes...",
    "🪘": "The bass of drums grow increasingly louder and louder...",
    "🥁": "The drums of liberation echo closer and closer...",
    "🪇": "Rhythmic and lively beats infuse the air with a festive atmosphere...",
    "🧫": "Under the watchful gaze, the bacteria undergo a myriad of transformations...",
    "🛸": "The sky becomes a canvas of extraterrestrial wonder as aliens fly everywhere...",
    "🍄": "OH MY GOD ITS THE LAST OF US PART 2024 SOMEONE SAVE US...",
    "🕸️": "As you struggle against the silken embrace of the web, you feel its delicate fibers tightening around you...",
    "🌡️": "As you stand amid an increasingly sweltering atmosphere, the air grows hotter and hotter...",
    "💊": "Taking this will for sure get you dizzy...",
    "🧬": "Mysteriously emerging, a double-helix subtly unveils the secrets encoded within the fabric of existence...",
}

//SETTING LAYERS

let lastLayerChange = 6000;
let currentLayer;
function setLayer(y) {
    if (currentWorld === 1) {
        let tempNum = y;
        if (tempNum < 16000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                currentLayerNum = tempNum;
                let layerMaterial = Object.keys(allLayers[tempNum]);
                layerMaterial = layerMaterial[layerMaterial.length - 1];
                let craftedLayer = {...allLayers[tempNum]};
                delete craftedLayer[layerMaterial];
                Object.assign(craftedLayer, worldOneCommons);
                craftedLayer[layerMaterial] = 1/1;
                currentLayer = craftedLayer;
            }
        } else {
            if (tempNum > (lastLayerChange + 10000)) {
                lastLayerChange += 10000;
                if (Math.round(Math.random() * 77) === 33)
                    currentLayer = specialLayers[0];
                else if (Math.round(Math.random() * 40) === 20)
                    currentLayer = specialLayers[1];
                else {
                    let num = Math.floor(Math.random() * 8)
                    currentLayerNum = num;
                    let layerMaterial = Object.keys(allLayers[num]);
                    layerMaterial = layerMaterial[layerMaterial.length - 1];
                    let craftedLayer = {...allLayers[tempNum]};
                    delete craftedLayer[layerMaterial];
                    Object.assign(craftedLayer, worldOneCommons);
                    craftedLayer[layerMaterial] = 1/1;
                    currentLayer = craftedLayer;
                }
            }
        }
    } else {
        let tempNum = y;
        if (tempNum < 10000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                currentLayerNum = tempNum;
                let layerMaterial = Object.keys(allLayers[tempNum]);
                layerMaterial = layerMaterial[layerMaterial.length - 1];
                let craftedLayer = {...allLayers[tempNum]};
                delete craftedLayer[layerMaterial];
                Object.assign(craftedLayer, worldTwoCommons);
                craftedLayer[layerMaterial] = 1/1;
                currentLayer = craftedLayer;
            }
        } else {
            if (currentLayer != borderLayer) {
                currentLayer = borderLayer;
                currentLayerNum = 5;
            }
        }
    }

}
/*
for (let propertyName in temp) {
    for (let j = 0; j < 4; j++) {
        oreList[propertyName][1][j] += temp[propertyName][j]
    }
}
*/