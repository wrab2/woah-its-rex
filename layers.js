let oreList = {
    '🐱': {  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  },
    '✈️': {  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'THEY HIT THE PENTAGON😭😭😭', 'oreTier': 'Infinitesimal',  },
    '💗': {  'numRarity': 150000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A distant pulse resonates with your heart, synchronising its beat with yours...', 'oreTier': 'Ethereal',  },
    '❤️‍🔥': {  'numRarity': 50000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A compassionate warmth envelops your heart in a fiery yet comforting embrace...', 'oreTier': 'Sacred',  },
    '😻': {  'numRarity': 5000000005, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'holy shit is this a real cat??', 'oreTier': 'Celestial',  },
    '🐈‍⬛': {  'numRarity': 1e12, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'go to EEP', 'oreTier': 'Celestial',  },
    '🏝️': {  'numRarity': 275320000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Huge, beaming crystals emerge from the ground, creating an ephemeral atmosphere...', 'oreTier': 'Flawless',  },
    '✨': {  'numRarity': 240800000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'From every corner of festive depths, bursts of color erupt like fireworks against the velvet sky...', 'oreTier': 'Flawless',  },
    '⛄': {  'numRarity': 183640000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In the quiet solitude of a winter landscape, a seed of ice blossoms into a testament to resilience and renewal...', 'oreTier': 'Flawless',  },
    '🪷': {  'numRarity': 183640000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In the quiet solitude of a winter landscape, a seed of ice blossoms into a testament to resilience and renewal...', 'oreTier': 'Flawless',  },
    '🦋': {  'numRarity': 12240000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Deep in the temporal limbo where the threads of time coincide, a mystical figure lay guarding their integrity...', 'oreTier': 'Celestial',  },
    '🌹': { 'noLuck': true,  'numRarity': 194308600, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In the grass swaying in the breeze far above the caverns lay a beautiful gift from nature herself...', 'oreTier': 'Celestial',  },
    '🐢': {  'numRarity': 4000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In a decelerating world, this armoured juggernaut dismisses the bindings of time...', 'oreTier': 'Celestial',  },
    '🐰': {  'numRarity': 17800000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🐰 Has Spawned!', 'oreTier': 'Celestial',  },
    '🦾': {  'numRarity': 875000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'You must have an arm of steel to have found this, go and try to use it for something more useful...', 'oreTier': 'Celestial',  },
    '🥇': {  'numRarity': 44444444444, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'turn the shower on PLEASE...', 'oreTier': 'Celestial',  },
    '🩵': {  'numRarity': 800000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🩵 Has Spawned..?', 'oreTier': 'Celestial',  },
    '⏳': {  'numRarity': 750000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '⏳ Has Spawned..?', 'oreTier': 'Celestial',  },
    '🍂': {  'numRarity': 13500000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🍂 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🦿': {  'numRarity': 875000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🦿 Has Spawned..?', 'oreTier': 'Celestial',  },
    '👁‍🗨': {  'numRarity': 955200890000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '👁‍🗨 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🪫': {  'numRarity': 36000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🪫 Has Spawned..?', 'oreTier': 'Celestial',  },
    '📛': {  'numRarity': 256000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '📛 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🌼': {  'numRarity': 9500000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🌼 Has Spawned..?', 'oreTier': 'Celestial',  },
    '✔️': {  'numRarity': 500000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '✔️ Has Spawned..?', 'oreTier': 'Celestial',  },
    '🏳️‍🌈': {  'numRarity': 2750000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🏳️‍🌈 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🎊': {  'numRarity': 1000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🎊 Has Spawned..?', 'oreTier': 'Celestial',  },    
    '💧': {  'numRarity': 13000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '💧 Has Spawned..?', 'oreTier': 'Celestial',  },    
    '❤️‍🩹': {  'numRarity': 155000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '❤️‍🩹 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🌋': {  'numRarity': 5500000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🌋 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🖋️': {  'numRarity': 165000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🖋️ Has Spawned..?', 'oreTier': 'Celestial',  },
    '⛩️': {  'numRarity': 430000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '⛩️ Has Spawned..?', 'oreTier': 'Celestial',  },
    '🌶️': {  'numRarity': 1337000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🌶️ Has Spawned..?', 'oreTier': 'Celestial',  },
    '🎥': {  'numRarity': 3780000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🎥 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🔓': {  'numRarity': 9900000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🔓 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🎖️': {  'numRarity': 7000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Dedication may only get you so far, yet you've proven you're willing to complete the mission..", 'oreTier': 'Sacred',  },
    '🤫' : {  'numRarity': 13370000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "TOP TEN TUTORIAL HOW TO MOG THANK FOR WATCHING...", 'oreTier': 'Celestial',  },
    '🖐' : {  'numRarity': 555555555555, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "high five! no..? ok...", 'oreTier': 'Celestial',  },
    'korosan' : { 'noLuck':true, 'numRarity': 563563563, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Extreme pain tears through your body as your fingers are ripped off one by one...", 'oreTier': 'Celestial',  "hasImage":true, "src" : "media/ores/korosan.png", "oreName":"Korosan", "eId": "<:korosan:1268397967979839610>"},
    'luna' : {  'numRarity': 50000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "You hear a soft meow behind you, followed by the soft crunching of kibble...", 'oreTier': 'Celestial',  "hasImage":true, "src" : "media/ores/luna.png", "oreName":"Luna", "eId":"<:luna:1267217003828088912>"},
    'pixel' : {  'numRarity': 6000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "You seriously cannot be this unlucky... just craft it already...", 'oreTier': 'Celestial',  "hasImage":true, "src" : "media/ores/pixel.webp", "oreName":"Pixel", "eId":"<:pixel:1267217508969091084> "},
    'matrix' : {  'numRarity': 1011010000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Caverns so silly, even the matrix is!...", 'oreTier': 'Interstellar',  "hasImage":true, "src" : "media/ores/matrix.webp", "oreName":"Matrix", "eId":"<:matrix:1267217412747558974>"},
    'apatite' : {  'numRarity': 3250000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "A bright,sparkly, and gleaming crystal illuminates the caverns as it slowly appears...", 'oreTier': 'Metaversal',  "hasImage":true, "src" : "media/ores/apatite.webp", "oreName":"Apatite", "eId": "<:apatite:1268367312881320016>"},
    'draedon' : {  'numRarity': 480000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "An unknown factor - a catalyst is what you are...", 'oreTier': 'Celestial',   "hasImage":true, "src" : "media/ores/draedon.webp", "oreName":"Draedon", "eId":"<:me:1265484170893987890>"},
    'HD 160529' : {  'numRarity': 2500000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Every droplet of water condenses into an unstable singularity...", 'oreTier': 'Hyperdimensional',   "hasImage":true, "src" : "media/ores/HD160529.png", "oreName":"HD 160529", "eId":"<:HD160529:1267216998564233399>"},
    'Goober' : {  'numRarity': 6210000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "You feel the earth shake as the big cate appears...", 'oreTier': 'Infinitesimal', "hasImage":true, "src" : "media/ores/ryouiishereinstead.webp", "oreName":"HOLY SHIT ITS RYOU (from bocchi the rock)???", "eId": "<:goober:1269098402768093225>"},
    'eternalCoral' : {  'numRarity': 50000000000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': "A sea of stars expands across dimensions, opening the gateway to an oceanic anomaly...", 'oreTier': 'Hyperdimensional', "hasImage":true, "src" : "media/ores/eternalCoral.png", "oreName":"Eternal Coral", "eId":"<:eternal_coral:1268367410541367428>"},
    'intercept' : {  'numRarity': 10000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "A shape of seemingly infinite size emerges from the mines, engulfing everything around it...", 'oreTier': 'Infinitesimal', "hasImage":true, "src" : "media/ores/intercept.png", "oreName":"Intercept", "eId": "<:intercept:1268367354870370436>"},
    'aFleetingSoul' : {  'numRarity': 6666000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Hollowed souls howl from their buried tomb, echoing the death of a civilization long lost. The pained cry dissipating as abruptly as it started...", 'oreTier': 'Hyperdimensional', "hasImage":true, "src" : "media/ores/aFleetingSoul.png", "oreName":"A Fleeting Soul", "eId":"<:aFleetingSoul:1267216891777253417>"},
    
    //summer event fuck i forgot my bad chat 
    //🏐🌴🐙🐬🍧🏖️🏄‍♂️🎋☀️
    '🏐' : {  'numRarity': 1475000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': "🏐 Has Spawned!", 'oreTier': 'Antique', },
    '🌴' : {  'numRarity': 10400000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': "🌴 Has Spawned!", 'oreTier': 'Mystical', },
    '🐙' : {  'numRarity': 87500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': "🐙 Has Spawned!", 'oreTier': 'Divine', },
    '🐬' : {  'numRarity': 345975000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "The sound of clicking draws you nearer to the ocean's edge...", 'oreTier': 'Flawless', },
    '🍧' : {  'numRarity': 900350000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "mmmmm tamsty :3...", 'oreTier': 'Interstellar', },
    '🏖️' : {  'numRarity': 4650000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "An umbrella descends from the heavens, providing the perfect amount of shade...", 'oreTier': 'Metaversal', },
    '🏄‍♂️' : {  'numRarity': 50000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "A strange board washes ashore...", 'oreTier': 'Sacred',  "oreName": "why doesnt this have a name lol"},
    '🎋' : {  'numRarity': 150000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "The wishes of billions intertwine, bringing prosperity to all...", 'oreTier': 'Ethereal', },
    '☀️' : {  'numRarity': 2750000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Reality is warped as the birth of a new star brings upon a new age...", 'oreTier': 'Imaginary', },
    

    '🐞': {  'numRarity': 241200000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "In this alternate earth, the keeper of time dons new wings, and sacrifices beauty for survivability...", 'oreTier': 'Celestial',  },
    '🍓': {  'numRarity': 560000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "A sweet aroma guides you to one of nature's finest delicacies...", 'oreTier': 'Ethereal',  },
    '🌳': {  'numRarity': 9250000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'CAKECORE13...', 'oreTier': 'Sacred',  },
    '💐': {  'numRarity': 3750000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "From the depths of nature's embrace, a delicate bloom unfurls, casting a fragrant aura upon its surroundings...", 'oreTier': 'Metaversal',  },
    '🥬': {  'numRarity': 2000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A leafy green surprise decides to join the vegetable party...', 'oreTier': 'Sacred',  },
    '🥗': {  'numRarity': 800000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A state of alignment with the natural rhythms of life, sings a harmony that resonates from the inside out...', 'oreTier': 'Interstellar',  },
    '🌪️': {  'numRarity': 247010000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'As the vortex descends from the heavens, the atmosphere trembles with its raw power...', 'oreTier': 'Flawless',  },
    '🌏': {  'numRarity': 213200000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Ancient energies resonate in the depths with the essence of primordial earth...', 'oreTier': 'Flawless',  },
    '🌲': {  'numRarity': 71000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🌲 Has Spawned!', 'oreTier': 'Divine',  },
    '🎃': {  'numRarity': 69000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎃 Has Spawned!', 'oreTier': 'Divine',  },
    '🎍': {  'numRarity': 35000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎍 Has Spawned!', 'oreTier': 'Divine',  },
    '🎄': {  'numRarity': 12500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎄 Has Spawned!', 'oreTier': 'Mystical',  },
    '🪵': {  'numRarity': 10000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪵 Has Spawned!', 'oreTier': 'Mystical',  },
    '🌻': {  'numRarity': 9500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🌻 Has Spawned!', 'oreTier': 'Mystical',  },
    '🍁': {  'numRarity': 8900000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🍁 Has Spawned!', 'oreTier': 'Mystical',  },
    


    '🥈': {  'numRarity': 444444444444, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'uh.. idk man your choice what you do with the shower...', 'oreTier': 'Celestial',  },
    "🏯": {  'numRarity': 430000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Past architecture laughs in the face of the present and its lack of grandeur...', 'oreTier': 'Ethereal',  },
    '🏰': {  'numRarity': 8888888888, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'An essence of royalty graces the air of majestic opulence...', 'oreTier': 'Sacred',  },
    '🌇': {  'numRarity': 4300000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'The city shines bright as the rising sun illuminates it...', 'oreTier': 'Metaversal',  },
    '🥉': {  'numRarity': 444444444, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'turn the shower off...', 'oreTier': 'Flawless',  },
    '🪞': {  'numRarity': 426800050, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'You embrace the beauty of the grayscale world, where light and shadow dance in a timeless symphony of existence...', 'oreTier': 'Flawless',  },
    '🔩': {  'numRarity': 420836000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A piece to the puzzle of construction, the parts may be different sizes, but all are just as integral to the end result...', 'oreTier': 'Flawless',  },
    '🧲': {  'numRarity': 43500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🧲 Has Spawned!', 'oreTier': 'Divine',  },
    '🪬': {  'numRarity': 37000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪬 Has Spawned!', 'oreTier': 'Divine',  },
    '🧨': {  'numRarity': 31500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🧨 Has Spawned!', 'oreTier': 'Divine',  },
    '🔗': {  'numRarity': 25000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🔗 Has Spawned!', 'oreTier': 'Divine',  },
    '🪙': {  'numRarity': 15000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪙 Has Spawned!', 'oreTier': 'Mystical',  },
    '🗿': {  'numRarity': 12000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🗿 Has Spawned!', 'oreTier': 'Mystical',  },
    '🪚': {  'numRarity': 9600000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪚 Has Spawned!', 'oreTier': 'Mystical',  },
    '🪜': {  'numRarity': 7950000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪜 Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🚬': {  'numRarity': 192000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "In this alternate earth, the air is unbreathable as plumes of toxic fumes overtake the atmosphere...", 'oreTier': 'Celestial',  },
    "🦚": {  'numRarity': 245000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Through the mist, the brief glint of a hundred eyes freezes you dead in your tracks...', 'oreTier': 'Ethereal',  },
    '🚿': {  'numRarity': 6000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A refreshing cascade rejuvenates the area...', 'oreTier': 'Sacred',  },
    '👁️': {  'numRarity': 1920000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A cosmic anomaly of nothingness emerges past the boundaries of an unseen realm...', 'oreTier': 'Metaversal',  },
    '💸': {  'numRarity': 754000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Softly descending, celestial radiance brings serenity to the infinite depths...', 'oreTier': 'Interstellar',  },
    '⌛': {  'numRarity': 750000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Seconds pass, centuries pass, what's the difference? We are all mere specks of life in the concept of eternity...", 'oreTier': 'Flawless',  },
    '🧵': {  'numRarity': 201061929, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A geometrical marvel adds an element of mathematical elegance...', 'oreTier': 'Flawless',  },
    '🕯️': {  'numRarity': 62500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🕯️ Has Spawned!', 'oreTier': 'Divine',  },
    '🕋': {  'numRarity': 55000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🕋 Has Spawned!', 'oreTier': 'Divine',  },
    '🎨': {  'numRarity': 44000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎨 Has Spawned!', 'oreTier': 'Divine',  },
    '🎴': {  'numRarity': 13450000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎴 Has Spawned!', 'oreTier': 'Mystical',  },
    '🥽': {  'numRarity': 12350000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🥽 Has Spawned!', 'oreTier': 'Mystical',  },
    '🪄': {  'numRarity': 9460000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪄 Has Spawned!', 'oreTier': 'Mystical',  },
    '🎭': {  'numRarity': 7650000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎭 Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🪸': {  'numRarity': 750000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "In this alternate earth, the seabed is impossible to access, as living stony vines had colonised the surface of the deep...", 'oreTier': 'Celestial',  },
    "⚓": {  'numRarity': 750000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A mass of iron dropped into the abyss and a chain is all that prevents an indefinite oceanic isolation..,', 'oreTier': 'Ethereal',  },
    '🐋': {  'numRarity': 8000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In the vast expanse of the ocean, where the horizon stretches endlessly and the waters teem with life, a beautiful whale emerges from the depths...', 'oreTier': 'Sacred',  },
    '💫': {  'numRarity': 2000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Celestial bodies collide illuminating the depths with cosmic enchantment...', 'oreTier': 'Metaversal',  },
    '🪩': {  'numRarity': 999999999, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Your vision expands as your head spikes with an adrenaline rush...', 'oreTier': 'Interstellar',  },
    '👿': {  'numRarity': 750000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Cosmic energies radiate from the depths, casting an enigmatic darkness...', 'oreTier': 'Flawless',  },
    '🌀': {  'numRarity': 618000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A giant celestial body emerges, releasing cosmic energy that absorbs nearby quasars...', 'oreTier': 'Flawless',  },
    '🔱': {  'numRarity': 70000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🔱 Has Spawned!', 'oreTier': 'Divine',  },
    '👑': {  'numRarity': 65000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '👑 Has Spawned!', 'oreTier': 'Divine',  },
    '🐟': {  'numRarity': 26000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🐟 Has Spawned!', 'oreTier': 'Divine',  },
    '🫧': {  'numRarity': 8750000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🫧 Has Spawned!', 'oreTier': 'Mystical',  },
    '🤿': {  'numRarity': 8670000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🤿 Has Spawned!', 'oreTier': 'Mystical',  },
    '🎣': {  'numRarity': 8230000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎣 Has Spawned!', 'oreTier': 'Mystical',  },
    '⛵': {  'numRarity': 7895000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⛵ Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🪦': {  'numRarity': 386500000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "In this alternate earth, society is linked between the dead and the living, as humans and spectres live as one...", 'oreTier': 'Celestial',  },
    "🪤": {  'numRarity': 800000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'An extermination held through a siege, as success is just one stakeout away...', 'oreTier': 'Ethereal',  },
    '🏔️': {  'numRarity': 5500000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A tear comes to your eye as you gaze upon a beautiful landscape...', 'oreTier': 'Sacred',  },
    '🌈': {  'numRarity': 2750000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A vivid spectrum bursts forth, painting the surroundings with radiant color...', 'oreTier': 'Metaversal',  },
    '🧊': {  'numRarity': 583000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A frigid touch brings an icy embrace from the depths...', 'oreTier': 'Flawless',  },
    '❄️': {  'numRarity': 386500000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'The world around you takes on a surreal quality as if draped in a cloak of frozen silence...', 'oreTier': 'Flawless',  },
    '💎': {  'numRarity': 170000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Unearthed from the abyss, a dazzling gemstone emerges, casting a mesmerizing glow upon you...', 'oreTier': 'Flawless',  },
    '☄️': {  'numRarity': 72500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '☄️ Has Spawned!', 'oreTier': 'Divine',  },
    '🔮': {  'numRarity': 60000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🔮 Has Spawned!', 'oreTier': 'Divine',  },
    '🔋': {  'numRarity': 36000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🔋 Has Spawned!', 'oreTier': 'Divine',  },
    '💍': {  'numRarity': 15000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '💍 Has Spawned!', 'oreTier': 'Mystical',  },
    '🥏': {  'numRarity': 8000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🥏 Has Spawned!', 'oreTier': 'Mystical',  },
    '⚜️': {  'numRarity': 6250000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⚜️ Has Spawned!', 'oreTier': 'Mystical',  },
    '💠': {  'numRarity': 6000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '💠 Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🚨': {  'numRarity': 666666666666, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "In this alternate earth, those who survived are forced into hiding as the world is overcome with plague...", 'oreTier': 'Celestial',  },
    "🤖": {  'numRarity': 640000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Come to think of it, robots and humans aren't so unalike.. their wires for our veins, their electric current for our bloodstream and their CPU for our brains...", 'oreTier': 'Ethereal',  },
    '⚠️': {  'numRarity': 6666666666, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'EXTREMELY LOUD INCORRECT BUZZER...', 'oreTier': 'Sacred',  },
    '🎆': {  'numRarity': 3000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A sparkling burst appears as dazzling fireworks lights up the scene...', 'oreTier': 'Metaversal',  },
    '🧀': {  'numRarity': 618000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'As the scent envelops you, your mouth may water in anticipation of the delectable flavors that await...', 'oreTier': 'Flawless',  },
    '🌌': {  'numRarity': 550000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'An infinite collection of galaxies converge creating an enchanting radiance...', 'oreTier': 'Flawless',  },
    '🥀': {  'numRarity': 538000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "With bated breath, you stand paralyzed, engulfed by the suffocating grip of fear as the terrible beast's gaze falls upon you...", 'oreTier': 'Flawless',  },
    '🎇': {  'numRarity': 67500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎇 Has Spawned!', 'oreTier': 'Divine',  },
    '🔳': {  'numRarity': 46000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🔳 Has Spawned!', 'oreTier': 'Divine',  },
    '⏹️': {  'numRarity': 29000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⏹️ Has Spawned!', 'oreTier': 'Divine',  },
    '🧩': {  'numRarity': 14500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🧩 Has Spawned!', 'oreTier': 'Mystical',  },
    '🔔': {  'numRarity': 12250000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🔔 Has Spawned!', 'oreTier': 'Mystical',  },
    '⚗️': {  'numRarity': 9750000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⚗️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🧪': {  'numRarity': 7500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🧪 Has Spawned!', 'oreTier': 'Mystical',  },
    
    '😹': {  'numRarity': 950e6, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'my cat got merged with the joy emoji :cry:', 'oreTier': 'Flawless',  },
    '🐈': {  'numRarity': 33333333333333, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meyuriow old year :3', 'oreTier': 'Imaginary',  },
    '🤯': {  'numRarity': 33333333333333, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'happy new year', 'oreTier': 'Imaginary',  },
    '🫃': {  'numRarity': 10000000000005, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'after being kicked from the silly layer, they moved to the checkmark layer...', 'oreTier': 'Imaginary',  },
    '😂': {  'numRarity': 3000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'geforce now', 'oreTier': 'Hyperdimensional',  },
    '🤣': {  'numRarity': 1e21, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'rolling on the floor meowing', 'oreTier': 'Polychromatical',  },


    '🍖': {  'numRarity': 160000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "In this alternate earth, the desert thrived, and is the most habitable environment in this world...", 'oreTier': 'Celestial',  },
    "🦴": {  'numRarity': 175000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Deep within the arid sands lay fossils of an olden age, one can only wonder what beasts roamed the earth back then...', 'oreTier': 'Ethereal',  },
    '🐪': {  'numRarity': 7800000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In the midst of a violent sandstorm, an incredibly durable being treks the desolation of a once fruitful seabed...', 'oreTier': 'Sacred',  },
    '🏵️': {  'numRarity': 2600000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A flower imparts a fleeting beauty to the terrain...', 'oreTier': 'Metaversal',  },
    '🪐': {  'numRarity': 709000750, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Like tendrils of gentle embrace, a serene mist glides through the air...', 'oreTier': 'Flawless',  },
    '💥': {  'numRarity': 375000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Chaos reigns supreme as the forces of destruction sweep across the land...', 'oreTier': 'Flawless',  },
    '🔥': {  'numRarity': 160000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'oh wow 🔥🔥🔥...', 'oreTier': 'Flawless',  },
    '🔆': {  'numRarity': 75000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🔆 Has Spawned!', 'oreTier': 'Divine',  },
    '⭐': {  'numRarity': 70600600, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⭐ Has Spawned!', 'oreTier': 'Divine',  },
    '🎀': {  'numRarity': 31000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎀 Has Spawned!', 'oreTier': 'Divine',  },
    '🗡️': {  'numRarity': 13000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🗡️ Has Spawned!', 'oreTier': 'Mystical',  },
    '📟': {  'numRarity': 8750000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '📟 Has Spawned!', 'oreTier': 'Mystical',  },
    '⚱️': {  'numRarity': 7467000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⚱️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🖍️': {  'numRarity': 6800000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🖍️ Has Spawned!', 'oreTier': 'Mystical',  },
    

    '📜': {  'numRarity': 200000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "In this alternate earth, words of the ancients are heeded, and the world is given a second chance...", 'oreTier': 'Celestial',  },
    "🎩": {  'numRarity': 300500000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'wanna see a magic trick ^w^...', 'oreTier': 'Ethereal',  },
    '💵': {  'numRarity': 8900000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'MONEY MONEY KACHINGGGG JACKPOT...', 'oreTier': 'Sacred',  },
    '🪅': {  'numRarity': 3250000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Effervescently, festive confetti materializes bringing bursts of celebratory charm to the surroundings...', 'oreTier': 'Metaversal',  },
    '👀': {  'numRarity': 955200890, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In this tumultuous symphony of the senses, time loses its meaning, and everything becomes a mere illusion...', 'oreTier': 'Interstellar',  },
    '🌟': {  'numRarity': 257280000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In the far reaches of outer space, a gleaming light catches your attention...', 'oreTier': 'Flawless',  },
    '📝': {  'numRarity': 200000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In this wondrous realm, the lines between fantasy and reality blur...', 'oreTier': 'Flawless',  },
    '⌚': {  'numRarity': 52000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⌚ Has Spawned!', 'oreTier': 'Divine',  },
    '🏆': {  'numRarity': 38000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🏆 Has Spawned!', 'oreTier': 'Divine',  },
    '🗜️': {  'numRarity': 42000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🗜️ Has Spawned!', 'oreTier': 'Divine',  },
    '🎲': {  'numRarity': 7777777, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎲 Has Spawned!', 'oreTier': 'Mystical',  },
    '✂️': {  'numRarity': 7000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '✂️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🃏': {  'numRarity': 5500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🃏 Has Spawned!', 'oreTier': 'Mystical',  },
    '⚙️': {  'numRarity': 5000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⚙️ Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    '🎁': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎁  Has Spawned!', 'oreTier': 'Layer',  },
    '🎮': {  'numRarity': 6890000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎮  Has Spawned!', 'oreTier': 'Mystical',  },
    '🎫': {  'numRarity': 8230000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎫  Has Spawned!', 'oreTier': 'Mystical',  },
    '🚗': {  'numRarity': 12700000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🚗  Has Spawned!', 'oreTier': 'Mystical',  },
    '📢': {  'numRarity': 68900000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '📢  Has Spawned!', 'oreTier': 'Divine',  },
    '🎑': {  'numRarity': 92350200, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎑  Has Spawned!', 'oreTier': 'Divine',  },
    '📿': {  'numRarity': 279000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Magical beads that seem to grant your every wish drop on the ground in front of you...', 'oreTier': 'Flawless',  },
    '🎎': {  'numRarity': 587650200, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'I wonder whats inside...', 'oreTier': 'Flawless',  },
    '🗳️': {  'numRarity': 824900725, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A mysterious box, able to change reality at will through enough votes, appears next to you...', 'oreTier': 'Interstellar',  },
    '⚛️': {  'numRarity': 3333333333, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'The discovery of the Atom shakes the mine to its core...', 'oreTier': 'Metaversal',  },
    '🛢️': {  'numRarity': 11430000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'oil..? DID SOMEOME ASK FOR SOME FREEDOM???...', 'oreTier': 'Sacred',  },
    '💽': {  'numRarity': 290000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'this IS the kessosu band vinyl', 'oreTier': 'Ethereal',  },
    '🍭': {  'numRarity': 2500000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A sweet treat that you have been craving for centuries is finally unearthed...', 'oreTier': 'Imaginary', },

    // 

    '🐸': {  'numRarity': 900000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "hehe.. ribbit...", 'oreTier': 'Celestial',  },
    '🫶': {  'numRarity': 1000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A heartfelt gesture beckons you closer, both physically and mentally...', 'oreTier': 'Imaginary',  },
    '🎉': {  'numRarity': 1000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'YIPPEEEE YIPEYIPEYIPEYIPE YIIIPPPPEEEEEEEEEE!!!...', 'oreTier': 'Imaginary',  },
    '🧌': {  'numRarity': 696969696969, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'WHAT ARE YOU DOING IN MY SWAMP?!!', 'oreTier': 'Ethereal',  },
    '♾️': {  'numRarity': 75000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'life goes on and on and on and on and on and on and on and on...', 'oreTier': 'Sacred',  },
    '💅': {  'numRarity': 11201200200, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'GURLLLLLLL NO WAYYYYYYYY OMGGGGGGGGG...', 'oreTier': 'Sacred',  },
    '😁': {  'numRarity': 9000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Nothing bad was ever in this layer...', 'oreTier': 'Sacred',  },
    '🪢': {  'numRarity': 8181818181, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Halfheartedly sauntering into existence, a lackluster piece of twine makes a feeble attempt at garnering attention, or not...', 'oreTier': 'Sacred',  },
    
    
    '🪽': {  'numRarity': 260000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'The wings of glory travelled with you to this world, but are now free to roam the skies...', 'oreTier': 'Ethereal',  },
    '⚡': {  'numRarity': 96000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Bestowed upon you by the Stormseer himself, as a congratulations for your electrified finds..', 'oreTier': 'Sacred',  },
    '🍃': {  'numRarity': 13500000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Leaves of green elegantly glide through the sky to wherever their aerial current leads...', 'oreTier': 'Sacred',  },
    '🪶': {  'numRarity': 2060000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Dancing on the air, this feather is one of the many as part of something much greater...', 'oreTier': 'Metaversal',  },
    '🌦️': {  'numRarity': 275000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'As the storm dissipates, a bright light shines upon you...', 'oreTier': 'Flawless',  },
    '🌩️': {  'numRarity': 175000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'The sky darkens, yet beautiful streaks of electrical light zap the ground below...', 'oreTier': 'Flawless',  },
    '⛈️': {  'numRarity': 74000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⛈️ Has Spawned!', 'oreTier': 'Divine',  },
    '🪁': {  'numRarity': 45500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪁 Has Spawned!', 'oreTier': 'Divine',  },
    '🪂': {  'numRarity': 30000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪂 Has Spawned!', 'oreTier': 'Divine',  },
    '🌨️': {  'numRarity': 25000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🌨️ Has Spawned!', 'oreTier': 'Divine',  },
    '🌥️': {  'numRarity': 14400000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🌥️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🌤️': {  'numRarity': 7800000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🌤️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🌧️': {  'numRarity': 7000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🌧️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🎐': {  'numRarity': 5500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🎐 Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    
    '🔫': {  'numRarity': 615000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Your nerves spike to an all time high as your body starts to tremble in fear...', 'oreTier': 'Ethereal',  },
    '👾': {  'numRarity': 9000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A wave of nostalgia sweeps over you as 8-bit sound effects take you back to where it all began...', 'oreTier': 'Sacred',  },
    '🏹': {  'numRarity': 4210000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "A bow fires an arrow, whistling through the wind as it's poised to pierce its target...", 'oreTier': 'Metaversal',  },
    '💣': {  'numRarity': 771100000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Fuse lighted, explosive placed, all that's left is to wait for chaos and catastrophe to ensue...", 'oreTier': 'Interstellar',  },
    '🔨': {  'numRarity': 540000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Where scents of sawdust mingled with the sharp tang of metal, there lie a beautiful hammer...', 'oreTier': 'Flawless',  },
    '🪓': {  'numRarity': 82000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪓 Has Spawned!', 'oreTier': 'Divine',  },
    '🪃': {  'numRarity': 12210000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🪃 Has Spawned!', 'oreTier': 'Mystical',  },
    '🛡️': {  'numRarity': 9980000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🛡️ Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    
    '🗝️': {  'numRarity': 420000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'You thought the key to this world was special? Just you wait until this one finds its designated lock...', 'oreTier': 'Ethereal',  },
    '🪝': {  'numRarity': 75000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'As graceful as a key may look, breaking a lock with this is infinitely cooler...', 'oreTier': 'Sacred',  },
    '🪡': {  'numRarity': 23000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Why did you make a lacklustre key to this world when you could've just lockpicked it? Minimal brain cells I swear...", 'oreTier': 'Sacred',  },
    '🛎️': {  'numRarity': 4730000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A timeless ringing severes your hearing...', 'oreTier': 'Metaversal',  },
    '🚧': {  'numRarity': 1100000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A feeling of authorisation stops you in your tracks, giving you the inclination to turn back...', 'oreTier': 'Interstellar',  },
    '⛓️': {  'numRarity': 345000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'An endless intertwining of metal keeps the world safe from otherworldly threats...', 'oreTier': 'Flawless',  },
    '🔏': {  'numRarity': 243800000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'An unknown mystery is revealed as a key is summoned to you...', 'oreTier': 'Flawless',  },
    '🖇️': {  'numRarity': 31337000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🖇️ Has Spawned!', 'oreTier': 'Divine',  },
    '🔑': {  'numRarity': 12700000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🔑 Has Spawned!', 'oreTier': 'Mystical',  },
    '🔒': {  'numRarity': 9900000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🔒 Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    
    '💰': {  'numRarity': 857000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A silky bag showers you with money, scattering riches all around...', 'oreTier': 'Ethereal',  },
    "💞": {  'numRarity': 96300000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Though it was thought impossible, an intertwining aura of love blesses two lucky individuals...', 'oreTier': 'Sacred',  },
    "💘": {  'numRarity': 35000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A deep, sharp sensation pierces your heart, filling your mind with overwhelming thoughts of love...', 'oreTier': 'Sacred',  },
    '🚽': {  'numRarity': 20240000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Don't even THINK about it...", 'oreTier': 'Sacred',  },
    '📽️': {  'numRarity': 3780000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "You're alone, and yet you feel the eyes of millions stare upon you through a peculiar lens...", 'oreTier': 'Metaversal',  },
    '🧂': {  'numRarity': 1337000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "As if on the seaside, the air tastes of salt, yet there's the faint sound of yelling and profanity in the distance...", 'oreTier': 'Interstellar',  },
    '🔪': {  'numRarity': 632000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Life is a beautiful thing, and all it takes is a sharp slash of steel to take...', 'oreTier': 'Flawless',  },
    '💔': {  'numRarity': 155000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '💔 Has Spawned!', 'oreTier': 'Divine',  },
    '🍆': {  'numRarity': 69696969, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🍆 Has Spawned!', 'oreTier': 'Divine',  },
    '🖱️': {  'numRarity': 11101000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🖱️ Has Spawned!', 'oreTier': 'Mystical',  },
    '⌨️': {  'numRarity': 10010000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⌨️ Has Spawned!', 'oreTier': 'Mystical',  },
    '💻': {  'numRarity': 6320000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '💻 Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    
    '⚖️': {  'numRarity': 123321000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'You feel your fate hang in the balance, as every one of your actions are weighed against one another...', 'oreTier': 'Ethereal',  },
    '🌱': {  'numRarity': 83000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Did you know that the mitochondria is the powerhouse of the cell?...', 'oreTier': 'Sacred',  },
    '🎓': {  'numRarity': 7900000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'An influx of knowledge passes you by as you reap the reward of years of turmoil...', 'oreTier': 'Sacred',  },
    '📍': {  'numRarity': 4321000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Mark after mark, record after record, the earth below unfolds its interior on paper before you...', 'oreTier': 'Metaversal',  },
    '📌': {  'numRarity': 1230000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'You briefly see the mine in all its splendor, as if all its intricacies had been mapped to a tee...', 'oreTier': 'Interstellar',  },
    '🔎': {  'numRarity': 725000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Through the glass, you gain a feeling of omniscience as your vision achieves clarity...', 'oreTier': 'Flawless',  },
    '🖊️': {  'numRarity': 165000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A mystical object of creativity draws in a reality of imagination...', 'oreTier': 'Flawless',  },
    '📚': {  'numRarity': 48100000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '📚 Has Spawned!', 'oreTier': 'Divine',  },
    '📐': {  'numRarity': 34000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '📐 Has Spawned!', 'oreTier': 'Divine',  },
    '📖': {  'numRarity': 16000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '📖 Has Spawned!', 'oreTier': 'Mystical',  },
    '🧠': {  'numRarity': 15500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🧠 Has Spawned!', 'oreTier': 'Mystical',  },
    '✏️': {  'numRarity': 8200000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '✏️ Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🍹' : {  'numRarity': 2650000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "this drink has so much vanilla that the 2% alcohol in it WILL make you blackout drunk", 'oreTier': 'Imaginary', },
    "🧜": {  'numRarity': 345000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'this tower SUCKS in btd6', 'oreTier': 'Ethereal',  },
    '🚰': {  'numRarity': 652000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'mraow :3', 'oreTier': 'Flawless',  },
    '🚱': {  'numRarity': 213321000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'oh man im really thirsty, the evil non drinkable water sign:', 'oreTier': 'Ethereal',  },
    '💆': {  'numRarity': 5321000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'jim is currently getting a massage', 'oreTier': 'Metaversal',  },
    //john      
    '⛵': {  'numRarity': 6330000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '⛵ Has Spawned! (why do you have mystical alerts this far into the game)', 'oreTier': 'Mystical',  },
    '🚢' : {  'numRarity': 6666666666666, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "this brings you back to when john caused two thousand naval events", 'oreTier': 'Imaginary', },
    '🚣': {  'numRarity': 97000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'swimming emoji', 'oreTier': 'Sacred',  },
    '🛀': {  'numRarity': 587650200, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meowww :3333', 'oreTier': 'Flawless',  },
    '🚤': {  'numRarity': 5321000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'a deadly vessel, even without its inhibitants its presence still scares you or something idk', 'oreTier': 'Metaversal',  },
    '🏊': {  'numRarity': 166000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'its a shame sr1 has One singular spawn message', 'oreTier': 'Interstellar', },

    
    '🩸': {  'numRarity': 13000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "So be it.. take your blood trophy..! You.. are truly the bane of this world aren't you...- \nMay.. the clover be our final saving grace... from the wielder of the void.....-", 'oreTier': 'Imaginary',  },
    '♨️': {  'numRarity': 6700000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "..I see what you want. I'm in no state to object.. and yet I will do everything in my power to make your life hell...", 'oreTier': 'Imaginary',  },
    '🚫': {  'numRarity': 1660000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "That's not.. possible.. how? What do you want from me? I.. don't have anything more to offer you...", 'oreTier': 'Imaginary',  },
    '🔈': {  'numRarity': 666666666666, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "As you wish. May my silence deafen you further as your search runs dry forevermore...", 'oreTier': 'Ethereal',  },
    '⛔': {  'numRarity': 256000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Another breach?! What are you!? You are no regular entity, perhaps I must tend to you personally...", 'oreTier': 'Ethereal',  },
    '💢': {  'numRarity': 26000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "Why do you persist?! What are you trying to prove!? You're enraging me.. and I will make you suffer...", 'oreTier': 'Sacred',  },
    '🔇': {  'numRarity': 3300000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Do not speak further, for I know your determination will falter...', 'oreTier': 'Metaversal',  },
    '🛑': {  'numRarity': 1000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Curious.. very curious.. you found what you came for, now leave...', 'oreTier': 'Interstellar',  },
    '⭕': {  'numRarity': 600000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "You're still here? Very well. Do not say you were never warned...", 'oreTier': 'Flawless',  },
    '🔕': {  'numRarity': 225000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "You shouldn't be here. Turn back while you still can...", 'oreTier': 'Flawless',  },
    'curry': {  'numRarity': 6666666, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'not as good as lebron james', 'oreTier': 'Hyperdimensional', 'hasImage' : true, "src" : "media/ores/curry.png" },
    '✡️': {  'numRarity': 6666666, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'In a magical zone where all things intertwine, the star of creation itself shines bright...', 'oreTier': 'Celestial',  },
    '🇮🇴': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    '🇻🇬': {  'numRarity': 3130500, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇨🇽': {  'numRarity': 14020000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', },
    '🇯🇪': {  'numRarity': 92890000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇲🇵': {  'numRarity': 495510000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', },
    '🇹🇰': {  'numRarity': 14110000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇻🇮': {  'numRarity': 34177600000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', },
    '🇲🇴': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    
    '🇦🇸': {  'numRarity': 44270000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', },
    '🇨🇰': {  'numRarity': 104600000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇬🇵': {  'numRarity': 395700000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇲🇶': {  'numRarity': 3764000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', },
    '🇵🇳': {  'numRarity': 6700000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇹🇨': {  'numRarity': 45700000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇨🇨': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    
    '🇦🇮': {  'numRarity': 15000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇨🇼': {  'numRarity': 17500000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇬🇺': {  'numRarity': 111000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇾🇹': {  'numRarity': 150000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇷🇪': {  'numRarity': 8590000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇼🇫': {  'numRarity': 15200000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },

    '🇬🇬': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    '🇦🇼': {  'numRarity': 1640000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇮🇪': {  'numRarity': 3628000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', },
    '🇲🇸': {  'numRarity': 63788000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇬🇱': {  'numRarity': 269220000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', },
    '🇧🇱': {  'numRarity': 9131000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', },

    '🇦🇽': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    '🇧🇲': {  'numRarity': 6350000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇬🇫': {  'numRarity': 29400000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇬🇮': {  'numRarity': 32649000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇳🇺': {  'numRarity': 162000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇸🇭': {  'numRarity': 5600000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇧🇶': {  'numRarity': 39424242424, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', },

    '🇫🇴': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    '🇰🇾': {  'numRarity': 6870000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', },
    '🇫🇰': {  'numRarity': 33090000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇳🇫': {  'numRarity': 216900000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇬🇸': {  'numRarity': 819800850, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', },
    '🇵🇲': {  'numRarity': 5888888888, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇮🇲': {  'numRarity': 34500000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', },
    '🇭🇰': {  'numRarity': 734000000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Imaginary', },
    'evilFlag': {  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'this is ALLEGEDLY an ore', 'oreTier': 'Infinitesimal','hasImage' : true, "src" : "media/ores/evil_flag.png","oreName": "evil Flag" },


    '⚕️': {  'numRarity': 50000000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'Gently materializing, a healing symbol radiates a serene energy, offering tranquility...', 'oreTier': 'Sacred',  },
    '🌙': {  'numRarity': 26262626262, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'Lunar rays of light dance upon your iris, captivating your adoring gaze...', 'oreTier': 'Imaginary',  },
    '🪔': {  'numRarity': 2000000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'A lamp illuminates everything around you...', 'oreTier': 'Sacred',  },
    '🎷': {  'numRarity': 2500000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'A jazzed melody fills the room with rhythmic notes...', 'oreTier': 'Sacred',  },
    '🧫': {  'numRarity': 4000000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'Under the watchful gaze, the bacteria undergo a myriad of transformations...', 'oreTier': 'Sacred',  },
    '🩺': {  'numRarity': 800000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'The heartbeats grow louder...', 'oreTier': 'Metaversal',  },
    '🌡️': {  'numRarity': 3000000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'As you stand amid an increasingly sweltering atmosphere, the air grows hotter and hotter...', 'oreTier': 'Metaversal',  },
    '🛸': {  'numRarity': 1000000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'The sky becomes a canvas of extraterrestrial wonder as aliens fly everywhere...', 'oreTier': 'Metaversal',  },
    '🪘': {  'numRarity': 500000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'The bass of drums grow increasingly louder and louder...', 'oreTier': 'Metaversal',  },
    '💱': {  'numRarity': 180000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'Essences of exchange and trade fall through the depths, filling the cosmos with currency...', 'oreTier': 'Interstellar',  },
    '💊': {  'numRarity': 800000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'Taking this will for sure get you dizzy...', 'oreTier': 'Interstellar',  },
    '🍄': {  'numRarity': 250000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'OH MY GOD ITS THE LAST OF US PART 2024 SOMEONE SAVE US...', 'oreTier': 'Interstellar',  },
    '🥁': {  'numRarity': 100000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'The drums of liberation echo closer and closer...', 'oreTier': 'Interstellar',  },
    '🕸️': {  'numRarity': 40000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'As you struggle against the silken embrace of the web, you feel its delicate fibers tightening around you...', 'oreTier': 'Flawless',  },
    '🔭': {  'numRarity': 15000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'Unveiling cosmic wonders, an unknown gadget reveals the unseen...', 'oreTier': 'Flawless',  },
    '🪇': {  'numRarity': 20000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'Rhythmic and lively beats infuse the air with a festive atmosphere...', 'oreTier': 'Flawless',  },
    '🧬': {  'numRarity': 70000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'Mysteriously emerging, a double-helix subtly unveils the secrets encoded within the fabric of existence...', 'oreTier': 'Flawless',  },
    '📡': {  'numRarity': 8000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '📡 Has Spawned!', 'oreTier': 'Divine',  },
    '🎹': {  'numRarity': 10000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '🎹 Has Spawned!', 'oreTier': 'Divine',  },
    '💉': {  'numRarity': 17500000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '💉 Has Spawned!', 'oreTier': 'Divine',  },
    '🍥': {  'numRarity': 27500000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': '🍥 Has Spawned!', 'oreTier': 'Divine',  },
    
    //'' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    //🇳🇬 🇪🇹 🇪🇬 🇨🇩 🇹🇿 🇿🇦 🇰🇪 🇺🇬 🇸🇩 🇩🇿 🇸🇨
    '🇸🇨' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇩🇿' : {  'numRarity': 1000100, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Antique',  },
    '🇸🇩' : {  'numRarity': 1202020, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Antique',  },
    '🇺🇬' : {  'numRarity': 6789000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇰🇪' : {  'numRarity': 7457000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇿🇦' : {  'numRarity': 8673000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇹🇿' : {  'numRarity': 9001400, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇨🇩' : {  'numRarity': 14675000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇪🇬' : {  'numRarity': 17900250, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇪🇹' : {  'numRarity': 20780970, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇳🇬' : {  'numRarity': 24000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    //🇨🇳 🇮🇳 🇮🇩 🇵🇰 🇧🇩 🇯🇵 🇵🇭 🇻🇳 🇮🇷 🇹🇷 🇧🇳
    '🇧🇳' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇹🇷' : {  'numRarity': 26870000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇮🇷' : {  'numRarity': 33568900, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇻🇳' : {  'numRarity': 39832400, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇵🇭' : {  'numRarity': 46630980, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇯🇵' : {  'numRarity': 53900000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇧🇩' : {  'numRarity': 58230475, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇵🇰' : {  'numRarity': 74500670, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇮🇩' : {  'numRarity': 95675090, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇮🇳' : {  'numRarity': 114360780, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇨🇳' : {  'numRarity': 135600980, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    //🇺🇸 🇲🇽 🇨🇦 🇬🇹 🇭🇹 🇨🇺 🇩🇴 🇭🇳 🇳🇮 🇸🇻 🇰🇳
    //160m - 1.5b
    '🇰🇳' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇸🇻' : {  'numRarity': 267890000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Flawless',  },
    '🇳🇮' : {  'numRarity': 376543900, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Flawless',  },
    '🇭🇳' : {  'numRarity': 490870430, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Flawless',  },
    '🇩🇴' : {  'numRarity': 790875100, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇨🇺' : {  'numRarity': 955600700, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇭🇹' : {  'numRarity': 1000250250, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇬🇹' : {  'numRarity': 1057890700, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇨🇦' : {  'numRarity': 1176943540, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇲🇽' : {  'numRarity': 1245965270, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇺🇸' : {  'numRarity': 1489009500, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
   
    //🇷🇺 🇩🇪 🇬🇧 🇫🇷 🇮🇹 🇪🇸 🇵🇱 🇺🇦 🇷🇴 🇳🇱 🇻🇦
    //1.5b - 5b
    '🇻🇦' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇳🇱' : {  'numRarity': 1560943200, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇷🇴' : {  'numRarity': 1890230560, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇺🇦' : {  'numRarity': 2130400290, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇵🇱' : {  'numRarity': 2468900300, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇪🇸' : {  'numRarity': 2678234560, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇮🇹' : {  'numRarity': 2900000120, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇫🇷' : {  'numRarity': 3260870600, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇬🇧' : {  'numRarity': 3790234090, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇩🇪' : {  'numRarity': 4230543650, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇷🇺' : {  'numRarity': 4783285008, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    
    //🇧🇷 🇨🇴 🇦🇷 🇵🇪 🇻🇪 🇨🇱 🇪🇨 🇧🇴 🇵🇾 🇺🇾 🇸🇷
    //5b - 100b
    '🇸🇷' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇺🇾' : {  'numRarity': 7236954010, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇵🇾' : {  'numRarity': 11256256256, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇧🇴' : {  'numRarity': 21455875000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇪🇨' : {  'numRarity': 29599600000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇨🇱' : {  'numRarity': 34100200300, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇻🇪' : {  'numRarity': 44500125090, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇵🇪' : {  'numRarity': 57145672606, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇦🇷' : {  'numRarity': 68154633000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇨🇴' : {  'numRarity': 79233400050, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇧🇷' : {  'numRarity': 92350777000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    
    //🇦🇺 🇵🇬 🇳🇿 🇫🇯 🇸🇧 🇫🇲 🇻🇺 🇵🇫 🇳🇨 🇼🇸 🇹🇻
    //100b+
    '🇹🇻' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇼🇸' : {  'numRarity': 180245870000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇳🇨' : {  'numRarity': 246780900230, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇵🇫' : {  'numRarity': 467900875030, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇻🇺' : {  'numRarity': 590600700800, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇫🇲' : {  'numRarity': 687500020007, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇸🇧' : {  'numRarity': 754478890340, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇫🇯' : {  'numRarity': 899905400025, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇳🇿' : {  'numRarity': 1350883247005, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary',  },
    '🇵🇬' : {  'numRarity': 2690225460780, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary',  },
    '🇦🇺' : {  'numRarity': 5200540900510, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary',  },
    
    //🏳️‍⚧️ 🇺🇳 
    '🇺🇳' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🏁': {  'numRarity': 12500000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary',  },
    '🏳️‍⚧️' : {  'numRarity': 500000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'the woke mind virus in tsc...', 'oreTier': 'Imaginary',  },
    
    '🍀': {  'numRarity': 234000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'This is it..? The symbol of luck itself, a simple four-leafed clover..?', 'oreTier': 'Imaginary',  },
    '☘️': {  'numRarity': 12300000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A peculiar three-leafed clover.. there must be more to this strange aura it emanates, this feels.. incomplete...', 'oreTier': 'Imaginary',  },
    
    
    '🤍': {  'numRarity': 2000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🤍 Has Spawned!', 'oreTier': 'Antique',  },
    '🖤': {  'numRarity': 1750000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🖤 Has Spawned!', 'oreTier': 'Antique',  },
    '🤎': {  'numRarity': 1500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🤎 Has Spawned!', 'oreTier': 'Antique',  },
    '💜': {  'numRarity': 1250000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '💜 Has Spawned!', 'oreTier': 'Antique',  },
    '❤️': {  'numRarity': 1000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '❤️ Has Spawned!', 'oreTier': 'Antique',  },
    '🧡': {  'numRarity': 950000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '🧡 Has Spawned!', 'oreTier': 'Antique',  },
    '💛': {  'numRarity': 900000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '💛 Has Spawned!', 'oreTier': 'Antique',  },
    '💙': {  'numRarity': 800000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '💙 Has Spawned!', 'oreTier': 'Antique',  },
    '💚': {  'numRarity': 750000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '💚 Has Spawned!', 'oreTier': 'Antique',  },
    //🔶🔷🔸🔹🔺🔻🔘🔲🟨🟦⬛⬜🧧◾◽
    '🔶': {  'numRarity': 700000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔷': {  'numRarity': 650000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔸': {  'numRarity': 590000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔹': {  'numRarity': 475000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔺': {  'numRarity': 400000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔻': {  'numRarity': 325000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔘': {  'numRarity': 200000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔲': {  'numRarity': 110000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🟨': {  'numRarity': 65000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '🟦': {  'numRarity': 34000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⬛': {  'numRarity': 12000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '⬜': {  'numRarity': 4000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '🧧': {  'numRarity': 2000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '◾': {  'numRarity': 950, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '◽': {  'numRarity': 785, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '⚫': {  'numRarity': 650, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟤': {  'numRarity': 540, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟣': {  'numRarity': 460, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔴': {  'numRarity': 290, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟠': {  'numRarity': 200, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟡': {  'numRarity': 145, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔵': {  'numRarity': 100, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟢': {  'numRarity': 70, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟪': {  'numRarity': 55, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟥': {  'numRarity': 40, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟧': {  'numRarity': 30, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    //☑️✔️🛄😹🐈🐈‍⬛🤯🫃😂🤣🚁

    '❔' : { 'noLuck': true,  'numRarity': 1111111111, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': ':trol:', 'oreTier': 'Interstellar',  },
    '📘': {  'numRarity': 1900000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '📘 Has Spawned!', 'oreTier': 'Antique',  },
    '📙': {  'numRarity': 1500500, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '📙 Has Spawned!', 'oreTier': 'Antique',  },
    '📕': {  'numRarity': 1230560, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '📕 Has Spawned!', 'oreTier': 'Antique',  },
    '📗': {  'numRarity': 854000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '📗 Has Spawned!', 'oreTier': 'Antique',  },
    '⏏️': {  'numRarity': 300000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '▶️': {  'numRarity': 250000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏸️': {  'numRarity': 200000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏯️': {  'numRarity': 175000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏺️': {  'numRarity': 100000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏭️': {  'numRarity': 90000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏮️': {  'numRarity': 75000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⏩': {  'numRarity': 70000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⏪': {  'numRarity': 60000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⏬': {  'numRarity': 50000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⏫': {  'numRarity': 25000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '✴️': { 'noLuck': true,  'numRarity': 5000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '◀️': {  'numRarity': 20000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '🔼': {  'numRarity': 17500, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '🔽': {  'numRarity': 15000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '➡️': {  'numRarity': 10000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '↖️': {  'numRarity': 9000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '↘️': {  'numRarity': 5000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⬇️': {  'numRarity': 3000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⬆️': {  'numRarity': 2500, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⬅️': {  'numRarity': 1750, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '↪️': {  'numRarity': 1500, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '↩️': {  'numRarity': 1250, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⤴️': {  'numRarity': 1000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⤵️': {  'numRarity': 750, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔀': {  'numRarity': 500, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔁': {  'numRarity': 300, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔂': {  'numRarity': 250, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔄': {  'numRarity': 175, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔃': {  'numRarity': 100, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '☑️': {  'numRarity': 500000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  }, // this isnt a w2 common but it fits in with the rest
    '🛄': {  'numRarity': 450000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  }, //nether is ts
    //😹🐈🐈‍⬛🤯🫃😂🤣


    
    '🤽🏻': {  'numRarity': (1e18-1), 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: oh man you found my good buddy Jonah (not to be confused with johan, i remember that one time we went to home depot and we accidentally bought twenty thousand doors, turns out they were mitosing door, ', 'oreTier': 'Johnical', "oreName" : "Jonah"},
    '🤽🏼': {  'numRarity': 1e14, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: jackson and i were best buddies in school untill he fell into a wormhole that brought him straight to the vatican city, we used to meet up during lunch time to undermine the TnnA fountations authority', 'oreTier': 'Johnical', "oreName" : "Jackson" },
    '🤽🏽': {  'numRarity': 1.1e18, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: noah was who first me to checkmarxism, at his local library i am very greatful for his contributions to the WCP', 'oreTier': 'Johnical', "oreName" : "Noah" },
    '🤽🏾': {  'numRarity': 7e19, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: ron... i still remember when we first thought about the second Miku-Feline war back in the day, he was such a good advisor', 'oreTier': 'Johnical', "oreName" : "Ron" },
    '🤽🏿': {  'numRarity': 8e16, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: johan (not to be confused with jonah) is jonahs brother, i met him once at a wedding, very nice guy', 'oreTier': 'Johnical', "oreName" : "Johan", "oreName" : "Johan" },
    '🤽🏻‍♂️': {  'numRarity': 1.3e18, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: woah they have red velvet cake at the party, truly incredible', 'oreTier': 'Johnical', "oreName" : "Shawn" },
    '🤽🏼‍♂️': {  'numRarity': 1.2e19, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: please make sure that jay does not bring me any bonsai cactus plants, last time it grew so much it blocked an entire room', 'oreTier': 'Johnical', "oreName" : "Jay" },
    '🤽🏽‍♂️': {  'numRarity': 2e18, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: my good buddy rowan (we called him marcus roman in school), he always had the best school projects, once he got a huge ball of plastic and turned it into a maze', 'oreTier': 'Johnical', "oreName" : "Rowan" },
    '🤽🏾‍♂️': {  'numRarity': 2.5e15, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: don and i met at the Communal pit in 1752, they were so good at climbing i instantly gave them a job', 'oreTier': 'Johnical', "oreName" : "Don" },
    '🤽🏿‍♂️': {  'numRarity': 5e19, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: you wont BELIEVE what country jordan and i met', 'oreTier': 'Johnical', "oreName" : "Jordan" },
    '🤽🏻‍♀️': {  'numRarity': 3e15, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'John: i dont have much to say about janine, but thank you for finding her', 'oreTier': 'Johnical', "oreName" : "Janine" },
    '🤽🏼‍♀️': {  'numRarity': 5e12, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'John: me and joan are both mikufans (QwQuiz reference!!!), thats how we met', 'oreTier': 'Johnical', "oreName" : "Joan" },
    '🤽🏽‍♀️': {  'numRarity': 5e11, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'John: okay im back now, johanna is joans sister, she helped me create the WCP, truly an innovator', 'oreTier': 'Johnical', "oreName" : "Johanna" },
    '🤽🏾‍♀️': {  'numRarity': 5e10, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'John: meow :3', 'oreTier': 'Johnical',  "oreName" : "Jocelyn"},
    '🤽🏿‍♀️': {  'numRarity': 2e15, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'John:🤽‍♂️🤽‍♂️🤽‍♂️🤽‍♂️🤽‍♂️🤽‍♂️🤽‍♂️🤽‍♂️🤽‍♂️🤽‍♂️🤽‍♂️', 'oreTier': 'Johnical', "oreName" : "Rowhen", },
    '🐃':{  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'how the hell did you get this as a spawn message :3', 'oreTier': 'Johnical',  },
    'evilJohn' : {  'numRarity': 8e16, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'you quiver in fear at the sight of a familar face but EVIL and RED', 'oreTier': 'Johnical',  'hasImage' : true, "src" : "media/ores/evil_john.png", "oreName" : "Evil John"},
    'josh' : {  'numRarity': 1e18, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Josh: hi im johns roomate, tell him hi for me', 'oreTier': 'Johnical',  'hasImage' : true, "src" : "media/ores/josh.png", "oreName" : "Josh"},
    'jack' : {  'numRarity': 5.5e25, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: what the hell why does he look like that maybe i dont need my wallet back anymore', 'oreTier': 'Johnical',  'hasImage' : true, "src" : "media/ores/jack.png", "oreName" : "Jack"},
    'heavenlyJohn' : {  'numRarity': 2e24, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'John: do you think he accepts bribes', 'oreTier': 'Johnical',  'hasImage' : true, "src" : "media/ores/heavenly_john.png", "oreName" : "Heavenly John"},

    'stars' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', "hasImage":true, "src": "media/ores/stars.png", "oreName": "Stars"},
    "🟩": {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🟫': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🧱': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🌫️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🌊': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🪨': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '☢️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🌵': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '📰': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🎂': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🪈': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🦠': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '☣️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🎵': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '❓': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '☁️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '📺': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🚪': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🌐': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '♟️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '✖️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '❌': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '✅': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🕰️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    'planks' : {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', "hasImage":true, "src": "media/ores/plankTexture.jpg", "oreName": "Planks"},
    '🕳️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',   },
    '🤽‍♂️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer','hasImage' : true, "src" : "media/john/john.svg", "oreName" : "John" },
    '🤽': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer','hasImage' : true, "src" : "media/john/jim.svg", "oreName" : "Jim" },
    '🤽‍♀️': {  'numRarity': 1, 'hasLog': false,  'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',"oreName" : "Jane" },
    'deepWater':{  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  'hasImage' : true, "src" : "media/ores/deepWater.png", "oreName" : "deepWater", "oreName" : "Deep Water"},
	'nebula':{  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  'hasImage' : true, "src" : "media/ores/nebula.png", "oreName" : "Nebula",},

    '🏚️':{  'numRarity': 1e19, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'this is what the house will look like once you PILLAGE it all you monster smhmhmhmhmhmhmhmhmhmhmhmh', 'oreTier': 'Polychromatical'},
    '🏡':{  'numRarity': 1e20, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'with our new advanced technology, we are able to show you where you currently are with one simple emoji', 'oreTier': 'Polychromatical'},
    '🏘️':{  'numRarity': 1e21, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'all of the houses in this neighbourhood are bought out by shell and blackrock!!', 'oreTier': 'Polychromatical'},
    'bitcoin' : {  'numRarity': Infinity, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'erm', 'oreTier': 'Common',  },
    'Nyerd' : {  'numRarity': 450000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "you're a NYERD!!!", 'oreTier': 'Ethereal',  'hasImage' : true, "src" : "media/ores/NYERD.webp", "oreName" : "nyerd", "eId":"<:nyerd:1232461600087343156>"},
    'Fox' : {  'numRarity': 200000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'what the fox is going on here!!', 'oreTier': 'Ethereal',  'hasImage' : true, "src" : "media/ores/STUPID_FOX.webp", "oreName" : "fox",},
    'Bismuth' : {  'numRarity': 830209019000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A vibrant mineral is barely detected due to its nearly unnoticeable α-decay...', 'oreTier': 'Ethereal',  'hasImage' : true, "src" : "media/ores/bismuth.png", "oreName" : "Bismuth", "eId":"<:bismuth:1268369596268941313>"},
    'variousMinerals' : {  'numRarity': 2048000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'bro casually just found the clump of various minerals 🤑🤑...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/clump_of_various_minerals.webp", "oreName" : "Various Minerals", "eId":"<:clump_of_various_minerals:1267218192908947506>"},
    'watermelonDiamond' : {  'numRarity': 170000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '💎 Has Spawned..?', 'oreTier': 'Celestial',  'hasImage' : true, "src" : "media/ores/diamondcelestial.png", "oreName" : "Watermelon Diamond", "eId":"<:diamondcelestial:1267216988196044964>"},
    'godOfTheMine' : {  'numRarity': 1000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'yo pickaxe sucks, mine harder...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/god-export.png", "oreName" : "God of The Mine", "eId":"<:god_of_the_mine:1268342662738481203>"},
    'Omnipotent God of The Mine' : {  'numRarity': 3000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'i didnt mean mine this hard...', 'oreTier': 'Celestial',  'hasImage' : true, "src" : "media/ores/allSeeingGod.webp", "oreName" : "Omnipotent God of The Mine", "eId":"<:omnipotent_gotm:1269139359135698964>"},
    'mushroomCats' : {  'numRarity': 14140000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'In the wild, many poisonous things can ruin your life...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/highcats.png", "oreName" : "Mushroom Cats", "eId":"<:highcats:1267216999935901817>"},
    'jellyfish' : {  'numRarity': 600000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🔮 Has Spawned..?', 'oreTier': 'Celestial',  'hasImage' : true, "src" : "media/ores/jellyfish.png", "oreName" : "Magical Jellyfish", "eId":"<:jellyfish:1267217002586705970>"},
    'kaleidoscope' : {  'numRarity': 9180274130450, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Your vision begins to distort as you hallucinate vibrant colors flying around you...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/kaleidoscope.png", "oreName" : "Kaleidoscope",},
    'qrCode' : {  'numRarity': 281907640568244, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A QR Code has appeared in the mines, I wonder where it leads you?...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/qrcode.png", "oreName" : "QR Code", "eId":"<:qrcode:1267217004834717888>"},
    'mutatedGrowth' : {  'numRarity': 3666006060600, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Thick vines extend throughout the tunnels, covering everything in poison filled thorns...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/silly_mines_flower.png", "oreName" : "Mutated Growth", "eId":"<:silly_mines_flower:1267217643291672618>"},
    'sillyMiner' : {"noLuck": true,  'numRarity': 5000000000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'You found someone else mining. Thou must get rid of competitors...', 'oreTier': 'Celestial',  'hasImage' : true, "src" : "media/ores/sillyminer.png", "oreName" : "Silly Miner", "eId":"<:sillyminer:1267217007741505609>"},
    'starglint' : {  'numRarity': 670000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A vibrant pink and purple diamond shines its hue everywhere in a glorious fashion...', 'oreTier': 'Flawless',  'hasImage' : true, "src" : "media/ores/starglint.png", "oreName" : "Starglint", "eId":"<:starglint:1267217763857076325>"},
    'txtfile' : {  'numRarity': 60000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'IN̷V̷ALI̷D̷A̷TED̷...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/txtfile.png", "oreName" : "txtfile", "eId":"<:invalidated:1268341621238403205>"},
    'unstableCore' : {  'numRarity': 20000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'The space around you starts to deconstruct itself...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/unstableCore.png", "oreName" : "Unstable Core", "eId":"<:unstable_core:1268341714188369971>"},
    'australiumIngot' : {  'numRarity': 450000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'tf2 reference....', 'oreTier': 'Flawless',  'hasImage' : true, "src" : "media/ores/australiumIngot.png", "oreName" : "Australium Ingot"},
    'cosmicIridium':{  'numRarity': 125000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'An elusive material thought to only be legend smashes through the space around you...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/cosmicIridium.png", "oreName" : "Cosmic Iridium", "eId":"<:cosmic_iridium:1268341401666453504>"},
    'ascendedArtifact':{  'numRarity': 30000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'An alien artifact hidden from view for millenium is finally visible to our astronomers...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/ascendedartifact.png", "oreName" : "Ascended Artifact", "eId": "<:ascended_artifact:1269156869667291206>"},
    'J1407b':{  'numRarity': 22000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "You marvel at this celestial giant's stunning, expansive rings, their vibrant colors shimmering in the vastness of space...", 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/J1407b.png", "oreName" : "J1407b",},
    'otherside':{  'numRarity': 58000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Look up at the moon...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/otherside.png", "oreName" : "The Other Side",},
    'UHD':{  'numRarity': 500000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'this cat caused a big problem', 'oreTier': 'Ethereal',  'hasImage' : true, "src" : "media/ores/UHD.png", "oreName" : "Universe Heat Death",},
    'catgirl':{  'numRarity': 1000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'dhjbdfghjgdshbgsdhbgdhg...', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/osaka-sata-andagi.gif", "oreName" : "Ok.",},
    'pleiades':{  'numRarity': 7500000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A brilliant display of blue hues dance in the cosmos, providing a beautiful sight to all who stumble upon it...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/pleidas.webp", "oreName" : "Pleidas",},
    'noradrenaline':{  'numRarity': 999999999999999999, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A chill goes down your spine...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/noradrenaline.gif", "oreName" : "Noradrenaline",},
    /*gif credits: https://rex-reincarnated.fandom.com/wiki/Epinephrine*/
    'singularityEgg':{  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/singularityegg.webp", "oreName" : "Singularity Egg",},
    'orbOfLife':{  'numRarity': 3e20, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore3.gif", "oreName" : "Orb of Life",},
    'orbOfSound':{  'numRarity': 2.5e18, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore5.gif", "oreName" : "Orb of Water",},
    'orbOfTheUnknown':{  'numRarity': 1e18, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore1.gif", "oreName" : "Orb of Time",},
    'orbOfCreation':{  'numRarity': 2e21, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore2.gif", "oreName" : "Orb of Creation",},
    'ah!SoSorgy!':{  'numRarity': 1e20, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'CAPITALISM WILL NOT STOP MY NEED FOR SOUR PATCH KIDS!...', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/HEHEHEHEHE.png", "oreName" : "mmmm yummers chat",},
    'estrogen???':{  'numRarity': 500000000000, 'hasLog': true,  'caveExclusive': true, 'spawnMessage': 'this shit soooo tasty i need more i need more i need more', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/estrogen.gif", "oreName" : "Estrogen",},
    'YourReward':{  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/thankyou.png", "oreName" : "Your Reward!",},
    'luna2':{  'numRarity': 1000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'crunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunch', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/luna2.gif", "oreName" : "Luna 2",},
    'Desolation':{  'numRarity': 247000000423000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A powerful and formidable force drags you into the emptiness of the great void...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/desolation.png", "oreName" : "Desolation",},
    'Sakura':{  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/sakura.png", "oreName" : "Sakura",},
    'Omniscient Clover':{  'numRarity': 3450000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A viridescent clover shines and floats, the luck itself materializes before your eyes...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/omniscientClover.png", "oreName" : "Omniscient Clover",},
    'Koreosensei':{  'numRarity': 153454153454153454153, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'The tentacles asked him "what do you want to be?" and he answered "I want to be weak." He is now here to teach you the truth of the mines.', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/COREosensei.png", "oreName" : "Koreosensei",},
    'Saitamore':{  'numRarity': 100100100010365001000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Ok.', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/Saitamore.gif", "oreName" : "Saitamore",},
    'Hyper':{  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/Hyper.png", "oreName" : "Hyper",},
    'Panselinos':{  'numRarity': 430000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Hidden away from astronomers for centuries, the envenomed planet comes into view at last...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/panselinos.png", "oreName" : "Panselinos",},
    'Real Scribbal':{  'numRarity': 2000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A figment of your imagination springs to life from inside your sketchbook...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/realScribbal.gif", "oreName" : "Real Scribbal",},
    'Temporalite':{  'numRarity': 1000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'As the day became the night, and the night to day, this was found in the centre of the anomaly...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/temporalite.png", "oreName" : "Temporalite",},
    'Chronomorph':{  'numRarity': 4200000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Beneath a forgotten city, an ancient clock tower ticks with unnatural precision, its gears controlling time itself…', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/chronomorph.png", "oreName" : "Chronomorph",},
    'Charybdis':{  'numRarity': 1500000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'A red planet shaped like the eye of a dragon is discovered, a breathtaking cosmic presence that defies all explanation...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/charybdis.png", "oreName" : "",},
    'cateye':{  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'The universal eye of a universal being chooses to spend its existence with you...', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/cateye.png", "oreName" : "CATEYE"},
    'True Infinity':{  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'An incomprehensible thought appears before you in a recognizable shape...', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/trueInfinity.png", "oreName" : "True Infinity",},
    'silly':{  'numRarity': 2000000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meow mrrp nya!!', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/silly.png", "oreName" : "Silly :3",},
    'masa':{  'numRarity': 2000000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/masa.png", "oreName" : "Masa 🤯",},
    'First Anniversary Cake':{  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/cakeeeeeee.png", "oreName" : "First Anniversary Cake",},
    'orbOfFlight':{  'numRarity': 250000000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore6.gif", "oreName" : "Orb of Flight",},
    'orbOfFire':{  'numRarity': 500000000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore7.gif", "oreName" : "Orb of Fire",},
    'Flaroreon':{  'numRarity': 1920000000*1920000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'WHAT! NILNAL! I GOT NILNAL! I GOT NILNAL! I GOT NILNAL ! I GOT NILNAL! I GOT NILNAL! I GOT NILNAL! I GOT IT! I GOT NILNAL! I GOT NILNAL! I GOT NILNAL! OH MY GOD! OH MY GOD! OH MY GOD OH MY GODD BUAHHAHAHHAH! OH MY GODD!! I GOT NILNAL!', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/Flaroreon.png", "oreName" : "Flaroreon",},
    'TheHowlingMoon':{  'numRarity': 29500000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "The Moon's Penumbra turns to Leer at You, its Blue Blood Corrupted...", 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/howlingmoon.png", "oreName" : "The Howling Moon",},
    'Pasta':{  'numRarity': 1000000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Something about pasta...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/pasta.png", "oreName" : "Pasta",},
    'Star Core':{  'numRarity': 950000000000000, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': "The gears spin and spin, generating the energy to make the star's radiant glow...", 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/starcore.png", "oreName" : "Star Core",},
	'🚁':{  'numRarity': 1e24, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'What. The. Hell. ?!?! HOW', 'oreTier': 'Polychromatical'},

    'neru' : {  'numRarity': 1e15, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'neru is lowk boring we have too many yellow vocaloids', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/fumo_fishing/neru.png", "oreName" : "Akita Neru"},
    'miku' : {  'numRarity': 1e15, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'very niche vocaloid not many know her', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/fumo_fishing/miku.png", "oreName" : "Hatsune Miku"},
    'teto' : {  'numRarity': 1e15, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'i was debating putting teto because i dont think anyone likes her (this is a joke)', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/fumo_fishing/teto.png", "oreName" : "Kasane Teto"},
    'hitori' : {  'numRarity': 1e15, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'the pink one from bocchi the rock (and the show is also named after her) lowk like 2nd best out of the band', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/fumo_fishing/hitori_gotoh.png", "oreName" : "Hitori Gotoh"},
    'ryou' : {  'numRarity': 9e14, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'I LOVE RYOU YAMADA SO MUCH SHES SO GOATED!!!', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/fumo_fishing/ryou_yamada.png", "oreName" : "Ryou Yamada"},
    'nijika' : {  'numRarity': 1e15, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'yellow one from bocchi the rock lowk', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/fumo_fishing/nijika_ijichi.png", "oreName" : "Nijika Ijichi"},
    'kita' : {  'numRarity': 1e15, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'red one from bocchi the rock and shes like EVIL and yuriful', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/fumo_fishing/ikuyo_kita.png", "oreName" : "Ikuyo Kita"},
    'rei' : {  'numRarity': 1e15, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'adachi rei is goated asf !!! shes so :3', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/fumo_fishing/adachi_rei.png", "oreName" : "Adachi Rei"},
    'rin' : {  'numRarity': 1e15, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'kagamine rin... more like KETAMINE rin :rofl:', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/fumo_fishing/kagamine_rin.png", "oreName" : "Kagamine Rin"},

    
    "☯️" : {  'numRarity': 987656789, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'Through light and darkness, only one may guide you to the truth...', 'oreTier': 'Celestial',  },
    "⛏️": {  'numRarity': 10000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'Thoughts of what lies on the other side cloud your mind until.. a mirror image appears..?', 'oreTier': 'Celestial',  },
    "⚪": {  'numRarity': 1, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    "🩶": {  'numRarity': 10000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Celestial',  },
    "🩷": {  'numRarity': 10000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Celestial',  },


//vocaloids


}
for (const ore of Object.keys(oreList)){
    oreList[ore].decimalRarity = 1/oreList[ore].numRarity
}

const playerInventory = {

    
}
let variantInvNames = ["normalAmt", "electrifiedAmt", "radioactiveAmt", "explosiveAmt"];
//ALL LAYERS
const layerList = {
"dirtLayer" : ["mutatedGrowth", "sillyMiner", "🍓", "🌳", "💐", "🥗", "🌪️", "🌏", "🌲", "🎃", "🎍", "🎄", "🪵", "🌻", "🍁", "🟫"],
"dirtLayer2" : ["mutatedGrowth", "sillyMiner", "🍓", "🌳", "💐", "🥬", "🥗", "🌪️", "🌏", "🌲", "🎃", "🎍", "🎄", "🪵", "🌻", "🍁", "🟫"],
"dirtLayer3" : ["mutatedGrowth", "sillyMiner", "🍓", "🌳", "💐", "🤫", "🥗", "🌪️", "🌏", "🌲", "🎃", "🎍", "🎄", "🪵", "🌻", "🍁", "🟫"],
"brickLayer" : ["sillyMiner", "🏯", "🏰", "🌇", "🥉", "🪞", "🔩", "🧲", "🪬", "🧨", "🔗", "🪙", "🗿", "🪚", "🪜", "🧱"],
"foggyLayer" : ["sillyMiner", "🦚", "🚿", "👁️", "💸", "⌛", "🧵", "🕯️", "🕋", "🎨", "🎴", "🥽", "🪄", "🎭", "🌫️"],
"waterLayer" : ["sillyMiner", "⚓", "🐋", "💫", "🪩", "👿", "🌀", "🔱", "👑", "🐟", "🫧", "🤿", "🎣", "⛵", "🌊"],
"waterLayer2" : ["HD 160529", "sillyMiner", "⚓", "🐋", "💫", "🪩", "👿", "🌀", "🔱", "👑", "🐟", "🫧", "🤿", "🎣", "⛵", "🌊"],
"rockLayer" : ["apatite", "Star Core", "sillyMiner", "variousMinerals", "🪤", "🏔️", "🌈", "🧊", "❄️", "💎", "☄️", "🔮", "🔋", "💍", "🥏", "⚜️", "💠", "🪨"],
"radioactiveLayer" : ["sillyMiner", "Bismuth", "🤖", "⚠️", "🎆", "🧀", "🌌", "🥀", "🎇", "🔳", "⏹️", "🧩", "🔔", "⚗️", "🧪", "☢️"],
"cactusLayer" : ["sillyMiner", "🦴", "🐪", "🏵️", "🪐", "💥", "🔥", "🔆", "⭐", "🎀", "🗡️", "📟", "⚱️", "🖍️", "🌵", ],
"paperLayer" : ["Real Scribbal", "sillyMiner", "🎩", "💵", "🪅", "👀", "🌟", "📝", "⌚", "🗜️", "🏆", "🎲", "✂️", "🃏", "⚙️", "📰"],
"giftLayer": ["sillyMiner", "🍭", "💽", "🛢️", "⚛️", "🗳️", "🎎", "📿", "🎑", "📢", "🚗", "🎫", "🎮", "🎁"],
"worldOneCommons" : ["godOfTheMine", "🤍", "🖤", "🤎", "💜", "❤️", "🧡", "💛", "💙", "💚", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔘", "🔲", "🟨", "🟦", "⬛", "⬜", "🧧", "◾", "◽", "⚫", "🟤", "🟣", "🔴", "🟠", "🟡", "🔵", "🟢", "🟪", "🟥", "🟧"],
"sillyLayer" : ["ah!SoSorgy!", "Pasta", "sillyMiner", "UHD", "qrCode", "kaleidoscope", "🎉", "🧌", "Nyerd", "Fox", "♾️", "💅", "😁", "🪢", "🎂"],
"fluteLayer" : ["sillyMiner", "mushroomCats", "🫶", "🪈"],
"cloudLayer" : ["TheHowlingMoon", "starglint", "sillyMiner",  "🪽", "⚡", "🍃", "🪶", "🌦️", "🌩️", "⛈️", "🪁", "🪂", "🌨️", "🌥️", "🌤️", "🌧️", "🎐", "☁️"],
"cloudLayer2" : ["TheHowlingMoon", "🖐", "starglint", "sillyMiner",  "🪽", "⚡", "🍃", "🪶", "🌦️", "🌩️", "⛈️", "🪁", "🪂", "🌨️", "🌥️", "🌤️", "🌧️", "🎐", "☁️"],
"tvLayer" : ["sillyMiner", "🔫", "👾", "🏹", "💣", "🔨", "🪓", "🪃", "🛡️", "📺"],
"doorLayer" : ["Chronomorph", "sillyMiner", "🗝️", "🪝", "🪡", "🛎️", "🚧", "⛓️", "🔏", "🖇️", "🔑", "🔒", "🚪"],
"globeLayer" : ["matrix", "sillyMiner", "💰", "💞", "💘", "🚽", "📽️", "🧂", "🔪", "💔", "🍆", "🖱️", "⌨️", "💻", "🌐"],
"chessLayer" : ["sillyMiner", "⚖️", "🌱", "🎓", "📍", "📌", "🔎", "🖊️", "📚", "📐", "📖", "🧠", "✏️", "♟️"],
"barrierLayer" : ["❔",  "✴️", "✖️"],
"borderLayer" : ["sillyMiner", "🩸", "♨️", "🚫", "🔈", "⛔", "💢", "🔇", "🛑", "⭕", "🔕", "❌"],
"checkmarkLayer" : ["sillyMiner", "🤣", "🤯", "😂", "🫃", "🐈‍⬛", "🐈", "😹", "🛄", "✔️", "☑️", "✅"], 
"worldTwoCommons" : ["Omniscient Clover", "🍀", "☘️", "📘", "📙", "📕", "📗", "⏏️", "▶️", "⏸️", "⏯️", "⏺️", "⏭️", "⏮️", "⏩", "⏪", "⏬", "⏫", "◀️", "🔼", "🔽", "➡️", "↖️", "↘️", "⬇️", "⬆️", "⬅️", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "🔄", "🔃"],
"grassLayer" : ["sillyMiner", "🌹", "🟩"],
"unknownLayer" : [],
"scLayer" : ["sillyMiner", '🇳🇬', '🇪🇹', '🇪🇬', '🇨🇩', '🇹🇿', '🇿🇦', '🇰🇪', '🇺🇬', '🇸🇩', '🇩🇿', '🇸🇨'],
"bnLayer" : ["sillyMiner", '🇨🇳', '🇮🇳', '🇮🇩', '🇵🇰', '🇧🇩', '🇯🇵', '🇵🇭', '🇻🇳', '🇮🇷', '🇹🇷', '🇧🇳'],
"knLayer" : ["sillyMiner", '🇺🇸', '🇲🇽', '🇨🇦', '🇬🇹', '🇭🇹', '🇨🇺', '🇩🇴', '🇭🇳', '🇳🇮', '🇸🇻', '🇰🇳'],
"vaLayer" : ["sillyMiner", '🇷🇺', '🇩🇪', '🇬🇧', '🇫🇷', '🇮🇹', '🇪🇸', '🇵🇱', '🇺🇦', '🇷🇴', '🇳🇱', '🇻🇦'],
"srLayer" : ["sillyMiner", '🇧🇷', '🇨🇴', '🇦🇷', '🇵🇪', '🇻🇪', '🇨🇱', '🇪🇨', '🇧🇴', '🇵🇾', '🇺🇾', '🇸🇷'],
"ocLayer" : ["sillyMiner", '🇦🇺', '🇵🇬', '🇳🇿', '🇫🇯', '🇸🇧', '🇫🇲', '🇻🇺', '🇵🇫', '🇳🇨', '🇼🇸', '🇹🇻'],
"catcatLayer" : [ '🏳️‍⚧️', '🏁', '🇺🇳'],
"starLayer" : ["Koreosensei", "Panselinos", "txtfile", "cosmicIridium", "unstableCore", "pleiades", "australiumIngot", "stars"],
"nebulaLayer" : ["Koreosensei", "noradrenaline", "Desolation", "otherside", "ascendedArtifact", "J1407b", "Charybdis", "nebula"],
"deepWaterLayer" : ["miku", "teto", "neru", "rei", "rin", "hitori", "nijika", "kita", "ryou", "deepWater"],
"jimLayer":["sillyMiner","💆","🚱","🚰","🧜","🍹",'🤽'], 
"johnLayer":["sillyMiner",'🤽‍♂️', "silly", "masa","⛵","🚢","🚣","🛀","🚤","🏊"],
"johnLayer_CLT":['🤽‍♂️'],
"johnMetaLayer":['🤽🏻','🤽🏼','🤽🏽','🤽🏾','🤽🏿','🤽🏻‍♂️','🤽🏼‍♂️','🤽🏽‍♂️','🤽🏾‍♂️','🤽🏿‍♂️','🤽🏻‍♀️','🤽🏼‍♀️','🤽🏽‍♀️','🤽🏾‍♀️','🤽🏿‍♀️','🐃','evilJohn','josh', '🤽', '🤽‍♀️', '🤽‍♂️', "heavenlyJohn", "jack"],
"plankLayer":['australiumIngot','🏚️','🏘️', "🏡", '🤽🏻','🤽🏼','🤽🏽','🤽🏾','🤽🏿','🤽🏻‍♂️','🤽🏼‍♂️','🤽🏽‍♂️','🤽🏾‍♂️','🤽🏿‍♂️','🤽🏻‍♀️','🤽🏼‍♀️','🤽🏽‍♀️','🤽🏾‍♀️','🤽🏿‍♀️','evilJohn','josh', "heavenlyJohn", "jack","planks"],

}


layerList.johnLayer_CLT = structuredClone(layerList.johnLayer)

const createdLayers = {

}
let worldOneLayers = ["dirtLayer", "brickLayer", "foggyLayer", "waterLayer", "rockLayer", "radioactiveLayer", "cactusLayer", "paperLayer", "giftLayer"];
let worldTwoLayers = ["cloudLayer", "tvLayer", "doorLayer", "globeLayer", "chessLayer", "borderLayer"];
let galacticaLayers = ["starLayer", "nebulaLayer"]
let subRealmOneLayers = ["scLayer", "bnLayer", "knLayer", "vaLayer", "srLayer", "ocLayer", "catcatLayer",];
let waterWorldLayers = ["waterLayer2"] // i feel like jim should be here //idk it doesn't seem to affect enything
let specialLayers = ["sillyLayer", "fluteLayer", "grassLayer", "dirtLayer2", "dirtLayer3", "barrierLayer", "borderLayer", "johnLayer", "checkmarkLayer"]
let allLayers = structuredClone(worldOneLayers)

const unbreakable = ["✖️","❔","⛏️","deepWater", "✅"]
//required tier to break the unbreakable
const unbreakableTiers = [20, 20, 20, 13, 15]
//SETTING LAYERS
const layerDictionary = {
    //{layer : [], num : 0}
}
const repeatingLayers = {

}
const waterRepeatingLayers = []
waterRepeatingLayers[189] = "deepWaterLayer"
waterRepeatingLayers[190] = "deepWaterLayer"
//^ to prevent refresh exploit to get celestial layer trigger
const w2RepeatingLayers = []
const layerIndex = {
    worldOne : {
        0 : "dirtLayer",
        1 : "brickLayer",
        2 : "foggyLayer",
        3 : "waterLayer",
        4 : "rockLayer",
        5 : "radioactiveLayer",
        6 : "cactusLayer",
        7 : "paperLayer",
        8 : "giftLayer",
        4000 : "fluteLayer",
        7777 : "sillyLayer",
        1337 : "unknownLayer"
    },
    worldTwo : {
        0 : "cloudLayer",
        1 : "tvLayer",
        2 : "doorLayer",
        3 : "globeLayer",
        4 : "chessLayer",
        5 : "borderLayer",
        6 : "barrierLayer",
        10 : "checkmarkLayer" // because 10 is better than 7 //so is 11
    },
    subrealmOne : {
        0 : "scLayer",
        1 : "bnLayer",
        2 : "knLayer",
        3 : "vaLayer",
        4 : "srLayer",
        5 : "ocLayer",
        6 : "catcatLayer"
    },
    waterWorld: [
        "waterLayer2",
		"deepWaterLayer",
		"johnLayer",
		"jimLayer",
        "johnLayer_CLT"
    ],
	galacticaLayers : {
		0 : "starLayer",
		1 : "nebulaLayer",
	},
	johnHouse: [
		"plankLayer",
	]
}
let lastRepeatedLayer = -1;
let currentLayer = "dirtLayer";
function setLayer(y) {
    if (currentWorld === 1) {
        let tempNum = y;
        if (tempNum < 18000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                a88();
                currentLayerNum = tempNum;
                currentLayer = allLayers[tempNum];
                lastRepeatedLayer = -1;
            }
        } else {
            const repeatingLayerNum = Math.floor((y - 18000) / 10000);
            if (repeatingLayerNum !== lastRepeatedLayer && repeatingLayers[repeatingLayerNum] === undefined) {
                milestoneVariables.inRepeating = true;
                a88();
                let force = false;
                if (Math.random() < 1/1337) {
                    currentLayerNum = 1337;
                    updateAllLayers();
                    currentLayer = "unknownLayer";
                    specialLayerLocations["unknownLayer"] ??= tempNum;
                    milestoneVariables.unknownFound = true;
                } else if (Math.random() < 1/77) {
                    currentLayerNum = 7777;
                    force = a87(7777)
                    currentLayer = "sillyLayer";
                    specialLayerLocations["sillyLayer"] ??= tempNum;
                } else if (Math.random() < 1/40) {
                    currentLayerNum = 4000;
                    currentLayer = "fluteLayer";
                    specialLayerLocations["fluteLayer"] ??= tempNum;
                } else {
                    let num = Math.floor(Math.random() * 8)
                    currentLayerNum = num;
                    force = a87(num);
                    currentLayer = allLayers[num];
                }
                repeatingLayers[repeatingLayerNum] ??= {layer: currentLayerNum, force: force};
                lastRepeatedLayer = repeatingLayerNum;
                specialLayerLocations["lastLayer"] = {y: tempNum, num: repeatingLayerNum};
                rebuildSpecialLayerObject();
            } else {
                if (lastRepeatedLayer !== repeatingLayerNum) {
                    lastRepeatedLayer = repeatingLayerNum;
                    a88();
                    currentLayerNum = repeatingLayers[repeatingLayerNum].layer;
                    currentLayer = layerIndex.worldOne[currentLayerNum];
                    if (repeatingLayers[repeatingLayerNum].force) a87(currentLayerNum, repeatingLayers[repeatingLayerNum].force)
                }
            }
        }
    } 
	else if (currentWorld === 1.1) {
        let tempNum = Math.floor(y / 2000);
        tempNum = tempNum > allLayers.length - 1 ? allLayers.length - 1 : tempNum;
        currentLayer = layerIndex.subrealmOne[tempNum];
    } 
    else if (currentWorld === 1.2) {
        if(y < 100e3) currentLayer = "waterLayer2";
        else {
            currentLayer = "deepWaterLayer";
            if(y >= 1e6){
                let layerNum = Math.floor((y-1e6)/100e3)
                if(waterRepeatingLayers[layerNum] !== undefined) return
                if(player.john.spokeWith){ // post-john meetup layers
                    let layerRng = Math.random()
                    if(layerRng < 1/10) { //john
                        if(specialLayerLocationsWW.filter((e)=>e.layer === "johnLayer").length === 0){
                            specialLayerLocationsWW.push({layer:"johnLayer", distance: (layerNum * 100e3 + 1e6 + 50000)})
                            specialLayerLocationsWW.sort( (a, b) => specialOrderWW.indexOf(a.layer) >  specialOrderWW.indexOf(b.layer) )
                        }
                        if(Math.random()<1/20) {
                            currentLayer = "johnLayer_CLT"
                            eventSpawn.play()
                        }
                        else currentLayer = "johnLayer"
                    }
                    else if(layerRng < 1/3 + 1/10) {
                        if(specialLayerLocationsWW.filter((e)=>e.layer === "jimLayer").length === 0){
                            specialLayerLocationsWW.push({layer:"jimLayer", distance: (layerNum * 100e3 + 1e6 + 50000)})
                            specialLayerLocationsWW.sort((a, b)=>specialOrderWW.indexOf(a.layer) >  specialOrderWW.indexOf(b.layer))
                        }
                        currentLayer = "jimLayer"
                    }
                }
                waterRepeatingLayers[layerNum] = currentLayer
            }
		}
    } 
	else if (currentWorld === 2){
		if (y>10e3 && y<1.002e6) return layerDictionary["borderLayer"]
		else if(y<=10e3)return currentLayer = allLayers[Math.floor(y / 2000)]
		//150k depth per layer
		let layerNum = Math.floor((y-1.002e6)/150e3)
		if(w2RepeatingLayers[layerNum] !== undefined)return
		if (johnRewarded("hypermark_checkminator")){
			let layerRng = Math.random()
			if (layerRng < 1/40) { //checkmarkLayer
				if(specialLayerLocationsW2.filter((e)=>e.layer === "checkmarkLayer").length === 0){
					specialLayerLocationsW2.push({layer:"checkmarkLayer", distance: (layerNum * 150e3 + 1.002e6 + 75e3)})
					specialLayerLocationsW2.sort((a, b)=>specialOrderW2.indexOf(a.layer) >  specialOrderW2.indexOf(b.layer))
				}
				return w2RepeatingLayers[layerNum] = "checkmarkLayer"
			}
		} 
		return w2RepeatingLayers[layerNum] = "borderLayer"
	}
	else if (currentWorld === 3){//john's house
		//nothing
	}
    else {
        let tempNum = y;
        if (tempNum < 10000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                currentLayerNum = tempNum;
                currentLayer = allLayers[tempNum];
            }
        } else {
            if (currentLayer != layerList["borderLayer"]) {
                currentLayer = "borderLayer";
                currentLayerNum = 5;
            }
        }
    }
}

function getLayer(y) {
    if (currentWorld === 1) {
        if (y < 18000) {
            if (y === 0) return layerDictionary["grassLayer"];
            if (y === 1) return layerDictionary["dirtLayer2"];
            if (y === 1337 && hasConverted) return layerDictionary["dirtLayer3"]
            return layerDictionary[layerIndex.worldOne[Math.floor(y / 2000)]];
        } else {
            const num = Math.floor((y - 18000) / 10000);
            if (repeatingLayers[num] === undefined) setLayer(y);
            return layerDictionary[layerIndex.worldOne[repeatingLayers[num].layer]];
        }
    } else if (currentWorld === 2) {
        if (y < 10000) {
            if (y === 0) return layerDictionary["cloudLayer2"];
            if (y === 2000) return layerDictionary["grassLayer"];
            else return layerDictionary[layerIndex.worldTwo[Math.floor(y / 2000)]];
        } else {
            if (y === 10000) return layerDictionary["barrierLayer"];
            else if (curY < 10000 && y < 1.002e6) return layerDictionary["chessLayer"];
            else if (y < 1.002e6) return layerDictionary["borderLayer"];
			else {
				layerNum = Math.floor((y-1.002e6)/150e3)
				if (w2RepeatingLayers[layerNum] === undefined){
					setLayer(y)
				}
				return layerDictionary[w2RepeatingLayers[layerNum]]
			}
        }
    } else if (currentWorld === 1.1) {
        if (y === 0) return layerDictionary["grassLayer"];
        if (y < 14000) {
            return layerDictionary[layerIndex.subrealmOne[Math.floor(y / 2000)]];
        } else {
            return layerDictionary[layerIndex.subrealmOne[6]];
        }
        
    } else if (currentWorld === 1.2) {
        if (y < 100000) return layerDictionary["waterLayer2"];
		else if(y >= 1e6) {
            const layerNum = Math.floor((y-1e6)/100e3)
			if(waterRepeatingLayers[layerNum] == undefined)setLayer(y)

            try{
                if(waterRepeatingLayers[layerNum].includes("CLT")) layerIsTriggered=true
                else layerIsTriggered=false
            } catch {
                layerIsTriggered=false
            }

		return layerDictionary[ waterRepeatingLayers[layerNum] ]	
		}
		else return layerDictionary["deepWaterLayer"];
    } else if (currentWorld === 0.9) {
        if (y === 0) return layerDictionary["starLayer"];
        if (y < galacticaLayers.length*2000) return layerDictionary[layerIndex.galacticaLayers[Math.floor(y / 2000)]];
        else return layerDictionary[layerIndex.galacticaLayers[galacticaLayers.length-1]];
    } else if (currentWorld === 3){//john's house
		return layerDictionary["plankLayer"]
	}
}
let layerIsTriggered = false
function a87(num, force, g) {
    force ??= true;
    let added = false;
    let korone = false;
    switch (num) {
        case 0:
            if (Math.random() < 1/29 || force) {
                if (g) return "dirtLayer";
                insertIntoLayers({"ore":"🐞", "layers":["dirtLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 1:
            if (Math.random() < 1/25 || force) {
                if (g) return "brickLayer";
                insertIntoLayers({"ore":"🥈", "layers":["brickLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 2:
            if (Math.random() < 1/17 || force) {
                if (g) return "foggyLayer";
                insertIntoLayers({"ore":"🚬", "layers":["foggyLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 3:
            if (Math.random() < 1/40 || force) {
                if (g) return "waterLayer";
                insertIntoLayers({"ore":"🪸", "layers":["waterLayer", "waterLayer2"], "useLuck":true});
                added = true;
            }
            break;
        case 4:
            if (Math.random() < 1/15 || force) {
                if (g) return "rockLayer";
                insertIntoLayers({"ore":"🪦", "layers":["rockLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 5:
            if (Math.random() < 1/27 || force) {
                if (g) return "radioactiveLayer";
                insertIntoLayers({"ore":"🚨", "layers":["radioactiveLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 6:
            if (Math.random() < 1/19 || force) {
                if (g) return "cactusLayer";
                insertIntoLayers({"ore":"🍖", "layers":["cactusLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 7:
            if (Math.random() < 1/35 || force) {
                if (g) return "paperLayer";
                insertIntoLayers({"ore":"📜", "layers":["paperLayer"], "useLuck":true});
                added = true;
            }
        case 8:
            if (Math.random() < 1/10 || force) {
                if (g) return "johnLayer";
                insertIntoLayers({"ore":"josh", "layers":["johnLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 7777:
            const sillyRandom = Math.random();
            if (sillyRandom < 1/563 || force === "KORONE") {
                if (g) return "sillyLayer";
                insertIntoLayers({"ore":"korosan", "layers":["sillyLayer"], "useLuck":true});
                added = true;
                korone = true;
            }
            else if (sillyRandom < 1/13 || force) {
                if (g) return "sillyLayer";
                insertIntoLayers({"ore":"🐸", "layers":["sillyLayer"], "useLuck":true});
                added = true;
            }
            break;
    }
    if (g) return undefined;
    if (added) {
        milestoneVariables.triggerFound = true;
        if (korone) typeWriter("<i>An unusual presence lurks within the silly layer, making your body feel numb...</i>", get("spawnMessage"), 3);
        else typeWriter("<i>In the endless depths of the world, repetitions of earlier environments make up the lower earth, and yet.. a strange sense of unfamiliarity consumes you...</i>", 3);
        eventSpawn.currentTime = 0;
        eventSpawn.play();
        layerIsTriggered = true
    }
    return (korone ? "KORONE" : added);
}
function a88() {
    const toRemove = ["🐞","🥈","🚬","🪸","🪦","🚨","🍖","📜","🐸"];
    for (let i = 0; i < worldOneLayers.length; i++) {
        removeFromLayers({"ore":toRemove[i], "layers":[worldOneLayers[i]]})
    }
    removeFromLayers({"ore":toRemove[8], "layers":["sillyLayer"]})
    removeFromLayers({"ore":"korosan", "layers":["sillyLayer"]})
    layerIsTriggered = false
}
function a89() {
    const addLuck = ["🐞","🥈","🚬","🪸","🪦","🚨","🍖","📜","🐸"];
    const luck = verifiedOres.getCurrentLuck();
    for (let i = 0; i < addLuck.length; i++) {
        oreList[addLuck[i]]["decimalRarity"] = 1/(oreList[addLuck[i]]["numRarity"]/luck);
    }
}
function createLayer(layers) {
    let output = [];
    for (let i = 0; i < layers.length; i++) {
        output = output.concat(layers[i]);
    }
    output = applyLuckToLayer(output, verifiedOres.getCurrentLuck());
    return output;
}
function createAllLayers() {
    for (let i = 0; i < worldOneLayers.length; i++) layerDictionary[worldOneLayers[i]] = {layer: createLayer([layerList[worldOneLayers[i]], layerList["worldOneCommons"]]), probabilities: [], layerMat: layerFromArr(layerList[worldOneLayers[i]])};
    for (let i = 0; i < worldTwoLayers.length; i++) layerDictionary[worldTwoLayers[i]] = {layer: createLayer([layerList[worldTwoLayers[i]], layerList["worldTwoCommons"]]), probabilities: [], layerMat: layerFromArr(layerList[worldTwoLayers[i]])};
    for (let i = 0; i < subRealmOneLayers.length; i++) layerDictionary[subRealmOneLayers[i]] = {layer: createLayer([layerList[subRealmOneLayers[i]]]), probabilities: [], layerMat: layerFromArr(layerList[subRealmOneLayers[i]])};
    for (let i = 0; i < galacticaLayers.length; i++) layerDictionary[galacticaLayers[i]] = {layer: createLayer([layerList[galacticaLayers[i]]]), probabilities: [], layerMat: layerFromArr(layerList[galacticaLayers[i]])};
    for (let i = 0; i < specialLayers.length; i++) layerDictionary[specialLayers[i]] = {layer: layerList[specialLayers[i]], probabilities: [], layerMat: layerFromArr(layerList[specialLayers[i]])};
 	layerDictionary["dirtLayer2"] = {layer: createLayer([layerList["dirtLayer2"], layerList["worldOneCommons"]]), probabilities: [], layerMat: layerFromArr(layerList["dirtLayer"])};
    layerDictionary["dirtLayer3"] = {layer: createLayer([layerList["dirtLayer3"], layerList["worldOneCommons"]]), probabilities: [], layerMat: layerFromArr(layerList["dirtLayer"])};
    layerDictionary["cloudLayer2"] = {layer: createLayer([layerList["cloudLayer2"], layerList["worldTwoCommons"]]), probabilities: [], layerMat: layerFromArr(layerList["cloudLayer"])};
    layerDictionary["deepWaterLayer"] = {layer: createLayer([layerList["deepWaterLayer"]]), probabilities: [], layerMat: layerFromArr(layerList["deepWaterLayer"])};
	layerDictionary["jimLayer"] = {layer: createLayer([layerList["jimLayer"]]), probabilities: [], layerMat: layerFromArr(layerList["jimLayer"])};
	layerDictionary["johnLayer"] = {layer: createLayer([layerList["johnLayer"]]), probabilities: [], layerMat: layerFromArr(layerList["johnLayer"])};
    layerDictionary["johnMetaLayer"] = {layer: createLayer([layerList["johnMetaLayer"]]), probabilities: [], layerMat: layerFromArr(layerList["johnMetaLayer"])};
    layerDictionary["johnLayer_CLT"] = {layer: createLayer([layerList["johnLayer_CLT"]]), probabilities: [], layerMat: layerFromArr(layerList["johnLayer_CLT"])};
    for (const i of layerIndex.waterWorld) layerDictionary[i] = {layer: createLayer([layerList[i]]), probabilities: [], layerMat: layerFromArr(layerList[i])};
    for (const i of layerIndex.johnHouse) layerDictionary[i] = {layer: createLayer([layerList[i]]), probabilities: [], layerMat: layerFromArr(layerList[i])};
	let tier = "Uncommon";
    let arr = [];
    while (!(oreInformation.tierGrOrEqTo({"tier1":tier, "tier2":"Antique"}))) {
        let tierOres = oreInformation.getOresByTier(tier);
        for (let i = 0; i < tierOres.length; i++)
            arr.push(tierOres[i]);
            tier = oreInformation.getNextTier(tier);
    }
    arr.splice(tier.indexOf("✴️"), 1);
    const unknownLayer = createLayer([arr, ["🥇", "🟩"], ["Saitamore", "Temporalite"]]);
    layerDictionary["unknownLayer"] = {layer: unknownLayer, probabilities: [], layerMat: "🟩"}
    layerList["unknownLayer"] = [...unknownLayer];
    createGenerationProbabilities();
    caveList["abysstoneCave"] = createGsCave();
    //for (let i = 0; i < worldOneLayers.length; i++) layerDictionary[worldOneLayers[i]] = createLayer([layerList[worldOneLayers[i]], layerList["worldOneCommons"]]);
}
function layerFromArr(arr) {
    for (let i = arr.length-1; i >= 0; i--) if (oreList[arr[i]]["oreTier"] === "Layer") return arr[i];
}
function updateAllLayers() {
    const luck = verifiedOres.getCurrentLuck();
    for (let layer in layerDictionary) {
        if(layer !== "johnMetaLayer"){
            layerDictionary[layer].layer = applyLuckToLayer(layerDictionary[layer].layer, luck);
        }
    }
    oreList["luna"]["decimalRarity"] = 1/(oreList["luna"]["numRarity"] / luck);
    createGenerationProbabilities();
}
function createGenerationProbabilities() {
    for (let layer in layerDictionary) {
        let temp = 0;
        let tempArr = [];
        let tempLayer = layerDictionary[layer].layer;
        const sim = (player.settings.simulatedRng || pickaxeStats[player.stats.currentPickaxe].isDimensional);
        for (let i = 0; i < tempLayer.length; i++) {
            if (sim) temp = oreList[tempLayer[i]]["decimalRarity"];
            else temp += oreList[tempLayer[i]]["decimalRarity"];
            tempArr[i] = temp;
        }
        layerDictionary[layer].probabilities = tempArr;
    }
}
function sortLayerRarities(arr) {
    arr.sort((a,b)=>oreList[a]["decimalRarity"] - oreList[b]["decimalRarity"])
    return arr;
}
function sortLayerBase(arr) {
    arr.sort((a,b)=>oreList[a]["numRarity"] - oreList[b]["numRarity"])
    return arr;
}
let commons = ["Common","Uncommon","Rare","Legendary","Godly"];
function applyLuckToLayer(layer, luck) {
    for (let i = 0; i < layer.length; i++) {
        let layerluck = debug ? cat : luck;
        if (player.powerupVariables.currentChosenOre.ore === layer[i])
            layerluck *= 1.5;
        if (currentActiveEvent !== undefined) if (layer[i] === events[currentActiveEvent.name].ore) layerluck *= events[currentActiveEvent.name].boost;
          let listEntry = oreList[layer[i]]

        let baseValue = listEntry["numRarity"];
        if (specialOreValues[layer[i]] !== undefined) {
            baseValue = specialOreValues[layer[i]].newBaseRarity;
        }
        let newRarity = (listEntry["noLuck"] || listEntry["oreTier"] === "Layer") ? listEntry["numRarity"] : (baseValue / layerluck);
        if (commons.indexOf(listEntry["oreTier"]) < 0){
			let cap = 1000
			if(johnRewarded("water_polo_ball")) cap = 333
            if (listEntry["oreTier"] === "Layer" || 1/newRarity <= 1/cap) listEntry["decimalRarity"] = (1/newRarity);
            else listEntry["decimalRarity"] = (1/cap);
		} else {
            if (player.powerupVariables.commonsAffected.state) listEntry["decimalRarity"] = 1/((listEntry["numRarity"] * oreInformation.commonMultiplier) / (layerluck >= 3.5 ? 3.5 : layerluck));
            else listEntry["decimalRarity"] = 1/(listEntry["numRarity"] * oreInformation.commonMultiplier)
        }
    }
    layer = sortLayerRarities(layer);
    return layer;
}

function changeLayerOres() {
    if (player.stats.currentPickaxe === "pickaxe13" && currentWorld === 2) {
        insertIntoLayers({"ore":"☯️", "layers":undefined, "useLuck":true})
    } else {
        removeFromLayers({"ore":"☯️", "layers":undefined});
    }
}
//insertIntoLayers({"ore":"🐢", "layers":undefined, "useLuck":true})
function insertIntoLayers(obj) {
    let ore = obj["ore"];
    let layers = obj["layers"];
    let useLuck = obj["useLuck"];
    if (layers === undefined) layers = allLayers;
    const luck = verifiedOres.getCurrentLuck();
    for (let i = 0; i < layers.length; i++) {
        if (!(layerDictionary[layers[i]].layer.includes(ore))) {
            if (useLuck) oreList[ore]["decimalRarity"] = 1/(oreList[ore]["numRarity"] / luck);
            let layer = layerDictionary[layers[i]].layer;
            for (let j = 0; j < layer.length; j++) {
                if (oreList[layer[j]]["numRarity"] < oreList[ore]["numRarity"]) {
                    layer.splice(j, 0, ore);
                    updateAllLayers();
                    break;
                }
            }
        }
    }
}
//removeFromLayers({"ore":"🐢", "layers":undefined})
function removeFromLayers(obj) {
    let ore = obj["ore"];
    let layers = obj["layers"];
    if (layers === undefined) layers = Object.keys(layerDictionary);
    for (let i = 0; i < layers.length; i++) {
        if (layerDictionary[layers[i]].layer.includes(ore)) {
            layerDictionary[layers[i]].layer.splice(layerDictionary[layers[i]].layer.indexOf(ore), 1);
            updateAllLayers();
        }
    }
}

function insertIntoCaves(obj) {
    let ore = obj["ore"];
    let caveTypes = obj["layers"];
    let useLuck = obj["useLuck"];
    const luck = verifiedOres.getCaveLuck();
    for (const caves of caveTypes){
        let cave = caveList[caves]
        if(!cave.includes(ore)){
            if (useLuck) oreList[ore]["decimalRarity"] = 1/(oreList[ore]["numRarity"] / luck);
            for (let j =0; j<cave.length; j++){
                if (oreList[cave[j]]["numRarity"] < oreList[ore]["numRarity"]) {
                    cave.splice(j, 0, ore);
                    updateAllCaves();
                    break;  
                }
            }
        }
    }
}
function removeFromCaves(obj) {
    let ore = obj["ore"];
    let caves = obj["layers"];
    for (let i = 0; i < caves.length; i++) {
        if (caveList[caves[i]].includes(ore)) {
            caveList[caves[i]].splice(caveList[caves[i]].indexOf(ore), 1);
            updateAllCaves();
        }
    }
}

const limitedOres = {
    "❤️‍🔥" : {
        "layers" : ["foggyLayer"],
        "timeType" : "month",
        "timeValues" : [1]
    },
    "💗" : {
        "layers" : ["cactusLayer"],
        "timeType" : "month",
        "timeValues" : [1]
    },
    "🐈‍⬛" : {
        "layers" : ["checkmarkLayer"],
        "timeType" : "hour",
        "timeValues" : [0,1,2]
    },
    "😻" : {
        "layers" : ["dirtLayer"],
        "timeType" : "minute",
        "timeValues" : [27]
    },
    "🏝️" : {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [11]
    } ,
    "✨" : {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [11]
    },
    "🪷": {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [11]
    },
    "🦋": {
        "layers" : ["dirtLayer"],
        "timeType" : "hour",
        "timeValues" : [Math.round(Math.random() * 23)]
    },
    "🏐": {
        "layers" : ["cactusLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🌴": {
        "layers" : ["dirtLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🐙": {
        "layers" : ["waterLayer", "waterLayer2"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🐬": {
        "layers" : ["waterLayer", "waterLayer2"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🍧": {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🏖️": {
        "layers" : ["cactusLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🏄‍♂️": {
        "layers" : ["waterLayer", "waterLayer2"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🎋": {
        "layers" : ["dirtLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "☀️": {
        "layers" : ["cactusLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "draedon": {
        "layers" : ["radioactiveLayer"],
        "timeType" : "day",
        "timeValues" : [4]
    },
    "aFleetingSoul": {
        "layers" : ["foggyLayer"],
        "timeType" : "month",
        "timeValues" : [9]
    },
}
function checkLimitedOres() {
    let time = new Date();
    for (let propertyName in limitedOres) {
        let type = limitedOres[propertyName]["timeType"];
        let timeValue;
        if (type === "month") {
            timeValue = time.getMonth();
        } else if (type === "day") {
            timeValue = time.getDay();
        } else if(type === "hour") {
            timeValue = time.getHours();
        } else if (type === "minute") {
            timeValue = time.getMinutes()
        }
        if (limitedOres[propertyName]["timeValues"].includes(timeValue))
            insertIntoLayers({"ore":propertyName,"layers":limitedOres[propertyName]["layers"], "useLuck":true});
        else
            removeFromLayers({"ore":propertyName,"layers":limitedOres[propertyName]["layers"]});
    }
    if (player.luna !== undefined) {
        if (new Date().getDate() !== player.luna.lastAddedOn) {
            player.luna.layer = Math.round(Math.random() * 100000);
            player.luna.lastAddedOn = new Date().getDate();
        }
    }
}

class ores {
    constructor () {

    }
    commonMultiplier = 1;
    oreTiers = {
        "Layer" : {
            colors : {"backgroundColor" : "#656565", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Common" : {
            colors : {"backgroundColor" : "#888888", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Uncommon" : {
            colors : {"backgroundColor" : "#90A2E1", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Rare" : {
            colors : {"backgroundColor" : "#D04373", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Legendary" : {
            colors : {"backgroundColor" : "#FFD55F", "textColor" : "#000000"},
            tierMessage : ``,
        },
        "Godly" : {
            colors : {"backgroundColor" : "#FF24A1", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Antique" : {
            colors : {"backgroundColor" : "#5A865A", "textColor" : "#ffffff"},
            tierMessage : `You unearth an old artifact...`,
        },
        "Mystical" : {
            colors : {"backgroundColor" : "#841F8C", "textColor" : "#ffffff"},
            tierMessage : `A magical substance catches your attention...`,
        },
        "Divine" : {
            colors : {"backgroundColor" : "#FFFEAB", "textColor" : "#000000"},
            tierMessage : `You receive a blessing from above...`,
        },
        "Flawless" : {
            colors : {"backgroundColor" : "#31E8FF", "textColor" : "#000000"},
            tierMessage : `The discovery of a perfect material brings you great excitement...`,
        },
        "Interstellar" : {
            colors : {"backgroundColor" : "#FF8041", "textColor" : "#ffffff"},
            tierMessage : `The stars align in your favor...`,
        },
        "Metaversal" : {
            colors : {"backgroundColor" : "#3BD216", "textColor" : "#ffffff"},
            tierMessage : `An interdimensional object manifests before your very eyes...`,
        },
        "Sacred" : {
            colors : {"backgroundColor" : "#FF3C3C", "textColor" : "#ffffff"},
            tierMessage : `A relic with a godly aura graces you with its presence...`,
        },
        "Celestial" : {
            colors : {"backgroundColor" : "#6C0000", "textColor" : "#ffffff"},
            tierMessage : `The fabric of the universe coalesces into a bizarre form of matter...`,
        },
        "Ethereal" : {
            colors : {"backgroundColor" : "#ac47ff", "textColor" : "#ffffff"},
            tierMessage : `An incomprehensible creation puts you in a trance...`,
        },
        "Imaginary" : {
            colors : {"backgroundColor" : "#41FF6D", "textColor" : "#000000"},
            tierMessage : `Reality itself bends and contorts as your mind fails to process what you are looking at...`,
        },
        "Hyperdimensional" : {
            colors : {"backgroundColor" : "#041407", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Infinitesimal" : {
            colors : {"backgroundColor" : "#021752", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Polychromatical" : {
            colors : {"backgroundColor" : "#ff0526", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Johnical" : {
            colors : {"backgroundColor" : "#9cc7ff", "textColor" : "#62006B"},
            tierMessage : ``,
        }
    }
    getTierMessage(tier) {
        return this.oreTiers[tier].tierMessage;
    }
    getColors(tier) {
        return this.oreTiers[tier].colors;
    } 
    getOresByTier(tier) {
        let collectedOres = [];
        for (let propertyName in oreList) {
            if (oreList[propertyName]["oreTier"] === tier) {
                collectedOres.push(propertyName);
            }
        }
        return collectedOres;
    }

    getPreviousTier(tier) {
        let tierNames = Object.keys(this.oreTiers);
        for (let i = 0; i < tierNames.length; i++) {
            if (tierNames[i] === tier) {
                i = i === 0 ? tierNames.length : i;
                return tierNames[i - 1];
            }
        }
    }
    getNextTier(tier) {
        let tierNames = Object.keys(this.oreTiers);
        for (let i = 0; i < tierNames.length; i++) {
            if (tierNames[i] === tier) {
                i = i === tierNames.length - 1 ? -1 : i;
                return tierNames[i + 1];
            }
        }
    }
    getTierAt(num) {
        let tierNames = Object.keys(this.oreTiers);
        if (num < 0) return tierNames[0];
        if (num > tierNames.length - 1) return tierNames[15];
        return tierNames[num];
    }
    isCommon(tier) {
        let tierNames = Object.keys(this.oreTiers);
        if (tierNames.indexOf(tier) > 5) return false;
        else return true;
    }
    tierGrOrEqTo(tiers) {
        if (tiers["tier1"] === tiers["tier2"]) return true;
        if (tiers["tier1"] === "") return false;
        if (tiers["tier2"] === "") return true;
        for (let propertyName in this.oreTiers) {
            if (propertyName === tiers["tier1"]) return false;
            if (propertyName === tiers["tier2"]) return true;
        }
    }
    getEffectByTier(tier) {
        if (tier === "Interstellar") return "blur 4s linear 1";
        if (tier === "Metaversal") return "sepia 4s linear 1";
        if (tier === "Sacred") return "saturate 4s linear 1";
        if (tier === "Celestial") return "invert 4s ease-in-out 1";
        if (tier === "Ethereal") return "darken 4s ease-in-out 1";
        if (tier === "Imaginary") return "rotate 4s linear 1";
        if (tier === "Hyperdimensional") return "blackout 10s linear 1";
        if (tier === "Infinitesimal") return "invisible 7s linear 1";
        if (tier === "Polychromatical") return "chaos 4s linear 1"
        return "";
    }
}
const variantInformation = {
    "Normal" : {
        color: ""
    },
    "Electrified" : {
        color: "#e365fc"
    },
    "Radioactive" : {
        color: "#c9fc3a"
    },
    "Explosive" : {
        color: "#ff4b33"
    },
    getVariantColor: function(name) {
        return variantInformation[name].color;
    }
}
const oreInformation = new ores();
/*
for (let propertyName in temp) {
    for (let j = 0; j < 4; j++) {
        oreList[propertyName][1][j] += temp[propertyName][j]
    }
}
*/
