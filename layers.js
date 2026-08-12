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
    //slop hearts cause i LOVE slop 
    '💖': {  'numRarity': 6000000000000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'ai :sparkles: plus heart', 'oreTier': 'Hyperdimensional',  },
    '💝': {  'numRarity': 2000000000000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'oh man i wonder whats in my christmas present! the beating heart inside:', 'oreTier': 'Hyperdimensional',  },
    '♥️': {  'numRarity': 10000000000000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'NOT to be confused with ❤️', 'oreTier': 'Polychromatical',  }, //i swear this is different from :heart:
    '💓': {  'numRarity': 3000000000000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'vibrating heart', 'oreTier': 'Hyperdimensional',  },
    '🫀': {  'numRarity': 5000000000000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'tsc rtx on 🤣🤣🤣', 'oreTier': 'Hyperdimensional',  },
    '❣️': {  'numRarity': 4000000000000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'bleeding heart (tetrio quick play reference)', 'oreTier': 'Hyperdimensional',  },
    '💟': {  'numRarity': 1000000000000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'oversimplified heart', 'oreTier': 'Hyperdimensional',  },
    '💕': {  'numRarity': 9000000000000000, 'hasLog': false,  'caveExclusive': false, 'spawnMessage': 'heart mitosis...', 'oreTier': 'Hyperdimensional',  },
    'heartAmalgamation': {  'numRarity': Infinity, 'hasLog': true,  'caveExclusive': false, 'spawnMessage': 'evil and hidden spawn message...', 'oreTier': 'Infinitesimal','hasImage' : true, "src" : "media/ores/heart_amalgamation.png","oreName": "Heart Amalgamation" },

    
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
"fluteLayer" : ["sillyMiner", "💖","💝","♥️","💓","🫀","❣️","💟","💕","mushroomCats", "🫶", "🪈"],
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

const generatedOrePrefixes = ["Abyss", "Cinder", "Frost", "Glimmer", "Moss", "Ruin", "Ember", "Echo", "Vapor", "Shard", "Brine", "Quartz", "Ash", "Gale", "Velvet", "Dusk", "Thorn", "Nova", "Mire", "Hush"];
const generatedOreSuffixes = ["Glass", "Slate", "Lattice", "Fossil", "Powder", "Garnet", "Dross", "Mica", "Salt", "Rune", "Soot", "Amber", "Crystal", "Cliff", "Bloom", "Coral", "Tangle", "Mist", "Prism", "Dust"];
const generatedLayerPrefixes = ["Gloam", "Rift", "Tangle", "Mire", "Echo", "Dusk", "Brim", "Sable", "Frost", "Vanta", "Moss", "Cinder", "Hush", "Glint", "Shard", "Thorn", "Nova", "Lumen", "Gale", "Vapor"];
const generatedLayerSuffixes = ["Cavern", "Fen", "Tomb", "Grove", "Ridge", "Spire", "Mire", "Wastes", "Basin", "Depths", "Hollow", "Veil", "Ruin", "Maze", "Grotto", "Bloom", "Reef", "Storm", "Null", "Silt"];
const generatedOreTiers = ["Antique", "Mystical", "Divine", "Flawless", "Interstellar", "Metaversal", "Sacred", "Celestial", "Ethereal", "Imaginary", "Hyperdimensional"];

function pickGenerated(list, seed, index) {
    const offset = Math.abs(Math.sin(seed + index * 1.61803398875) * 100000);
    return list[offset % list.length];
}

const generatedOreDefinitions = {
    generatedOre1: { numRarity: 1000, hasLog: false, caveExclusive: true, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre2: { numRarity: 4000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre3: { numRarity: 9000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre4: { numRarity: 16000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre5: { numRarity: 25000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre6: { numRarity: 36000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre7: { numRarity: 49000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre8: { numRarity: 64000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre9: { numRarity: 81000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre10: { numRarity: 10000000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre11: { numRarity: 22000000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre12: { numRarity: 36000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre13: { numRarity: 52000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre14: { numRarity: 70000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre15: { numRarity: 90000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre16: { numRarity: 112000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre17: { numRarity: 136000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre18: { numRarity: 162000, hasLog: true, caveExclusive: true, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre19: { numRarity: 19000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre20: { numRarity: 40000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre21: { numRarity: 63000000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre22: { numRarity: 88000000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre23: { numRarity: 115000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre24: { numRarity: 144000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre25: { numRarity: 175000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre26: { numRarity: 208000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre27: { numRarity: 243000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre28: { numRarity: 28000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre29: { numRarity: 58000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre30: { numRarity: 90000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre31: { numRarity: 124000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre32: { numRarity: 160000000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre33: { numRarity: 198000000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre34: { numRarity: 238000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre35: { numRarity: 280000, hasLog: true, caveExclusive: true, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre36: { numRarity: 324000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre37: { numRarity: 37000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre38: { numRarity: 76000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre39: { numRarity: 117000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre40: { numRarity: 160000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre41: { numRarity: 205000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre42: { numRarity: 252000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre43: { numRarity: 301000000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre44: { numRarity: 352000000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre45: { numRarity: 405000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre46: { numRarity: 46000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre47: { numRarity: 94000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre48: { numRarity: 144000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre49: { numRarity: 196000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre50: { numRarity: 250000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre51: { numRarity: 306000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre52: { numRarity: 364000, hasLog: false, caveExclusive: true, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre53: { numRarity: 424000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre54: { numRarity: 486000000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre55: { numRarity: 55000000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre56: { numRarity: 112000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre57: { numRarity: 171000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre58: { numRarity: 232000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre59: { numRarity: 295000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre60: { numRarity: 360000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre61: { numRarity: 427000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre62: { numRarity: 496000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre63: { numRarity: 567000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre64: { numRarity: 64000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre65: { numRarity: 130000000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre66: { numRarity: 198000000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre67: { numRarity: 268000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre68: { numRarity: 340000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre69: { numRarity: 414000, hasLog: true, caveExclusive: true, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre70: { numRarity: 490000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre71: { numRarity: 568000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre72: { numRarity: 648000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre73: { numRarity: 73000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre74: { numRarity: 148000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre75: { numRarity: 225000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre76: { numRarity: 304000000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre77: { numRarity: 385000000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre78: { numRarity: 468000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre79: { numRarity: 553000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre80: { numRarity: 640000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre81: { numRarity: 729000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre82: { numRarity: 82000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre83: { numRarity: 166000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre84: { numRarity: 252000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre85: { numRarity: 340000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre86: { numRarity: 430000, hasLog: true, caveExclusive: true, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre87: { numRarity: 522000000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre88: { numRarity: 616000000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre89: { numRarity: 712000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre90: { numRarity: 810000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre91: { numRarity: 91000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre92: { numRarity: 184000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre93: { numRarity: 279000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre94: { numRarity: 376000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre95: { numRarity: 475000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre96: { numRarity: 576000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre97: { numRarity: 679000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre98: { numRarity: 784000000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre99: { numRarity: 891000000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre100: { numRarity: 100000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre101: { numRarity: 202000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre102: { numRarity: 306000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre103: { numRarity: 412000, hasLog: false, caveExclusive: true, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre104: { numRarity: 520000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre105: { numRarity: 630000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre106: { numRarity: 742000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre107: { numRarity: 856000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre108: { numRarity: 972000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre109: { numRarity: 109000000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre110: { numRarity: 220000000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre111: { numRarity: 333000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre112: { numRarity: 448000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre113: { numRarity: 565000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre114: { numRarity: 684000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre115: { numRarity: 805000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre116: { numRarity: 928000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre117: { numRarity: 1053000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre118: { numRarity: 118000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre119: { numRarity: 238000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre120: { numRarity: 360000000, hasLog: true, caveExclusive: true, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre121: { numRarity: 484000000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre122: { numRarity: 610000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre123: { numRarity: 738000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre124: { numRarity: 868000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre125: { numRarity: 1000000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre126: { numRarity: 1134000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre127: { numRarity: 127000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre128: { numRarity: 256000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre129: { numRarity: 387000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre130: { numRarity: 520000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre131: { numRarity: 655000000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre132: { numRarity: 792000000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre133: { numRarity: 931000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre134: { numRarity: 1072000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre135: { numRarity: 1215000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre136: { numRarity: 136000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre137: { numRarity: 274000, hasLog: true, caveExclusive: true, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre138: { numRarity: 414000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre139: { numRarity: 556000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre140: { numRarity: 700000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre141: { numRarity: 846000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre142: { numRarity: 994000000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre143: { numRarity: 1144000000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre144: { numRarity: 1296000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre145: { numRarity: 145000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre146: { numRarity: 292000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre147: { numRarity: 441000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre148: { numRarity: 592000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre149: { numRarity: 745000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre150: { numRarity: 900000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre151: { numRarity: 1057000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre152: { numRarity: 1216000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre153: { numRarity: 1377000000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre154: { numRarity: 154000000, hasLog: false, caveExclusive: true, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre155: { numRarity: 310000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre156: { numRarity: 468000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre157: { numRarity: 628000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre158: { numRarity: 790000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre159: { numRarity: 954000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre160: { numRarity: 1120000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre161: { numRarity: 1288000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre162: { numRarity: 1458000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre163: { numRarity: 163000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre164: { numRarity: 328000000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre165: { numRarity: 495000000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre166: { numRarity: 664000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre167: { numRarity: 835000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre168: { numRarity: 1008000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre169: { numRarity: 1183000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre170: { numRarity: 1360000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre171: { numRarity: 1539000, hasLog: true, caveExclusive: true, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre172: { numRarity: 172000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre173: { numRarity: 346000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre174: { numRarity: 522000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre175: { numRarity: 700000000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre176: { numRarity: 880000000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre177: { numRarity: 1062000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre178: { numRarity: 1246000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre179: { numRarity: 1432000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre180: { numRarity: 1620000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre181: { numRarity: 181000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre182: { numRarity: 364000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre183: { numRarity: 549000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre184: { numRarity: 736000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre185: { numRarity: 925000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre186: { numRarity: 1116000000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre187: { numRarity: 1309000000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre188: { numRarity: 1504000, hasLog: true, caveExclusive: true, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre189: { numRarity: 1701000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre190: { numRarity: 190000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre191: { numRarity: 382000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre192: { numRarity: 576000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre193: { numRarity: 772000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre194: { numRarity: 970000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre195: { numRarity: 1170000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre196: { numRarity: 1372000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre197: { numRarity: 1576000000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre198: { numRarity: 1782000000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre199: { numRarity: 199000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre200: { numRarity: 400000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre201: { numRarity: 603000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre202: { numRarity: 808000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre203: { numRarity: 1015000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre204: { numRarity: 1224000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre205: { numRarity: 1435000, hasLog: false, caveExclusive: true, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre206: { numRarity: 1648000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre207: { numRarity: 1863000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre208: { numRarity: 208000000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre209: { numRarity: 418000000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre210: { numRarity: 630000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre211: { numRarity: 844000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre212: { numRarity: 1060000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre213: { numRarity: 1278000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre214: { numRarity: 1498000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre215: { numRarity: 1720000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre216: { numRarity: 1944000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre217: { numRarity: 217000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre218: { numRarity: 436000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre219: { numRarity: 657000000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre220: { numRarity: 880000000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre221: { numRarity: 1105000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre222: { numRarity: 1332000, hasLog: true, caveExclusive: true, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre223: { numRarity: 1561000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre224: { numRarity: 1792000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre225: { numRarity: 2025000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre226: { numRarity: 226000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre227: { numRarity: 454000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre228: { numRarity: 684000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre229: { numRarity: 916000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre230: { numRarity: 1150000000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre231: { numRarity: 1386000000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre232: { numRarity: 1624000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre233: { numRarity: 1864000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre234: { numRarity: 2106000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre235: { numRarity: 235000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre236: { numRarity: 472000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre237: { numRarity: 711000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre238: { numRarity: 952000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre239: { numRarity: 1195000, hasLog: true, caveExclusive: true, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre240: { numRarity: 1440000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre241: { numRarity: 1687000000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre242: { numRarity: 1936000000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre243: { numRarity: 2187000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre244: { numRarity: 244000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre245: { numRarity: 490000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre246: { numRarity: 738000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre247: { numRarity: 988000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre248: { numRarity: 1240000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre249: { numRarity: 1494000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre250: { numRarity: 1750000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre251: { numRarity: 2008000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre252: { numRarity: 2268000000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre253: { numRarity: 253000000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre254: { numRarity: 508000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre255: { numRarity: 765000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre256: { numRarity: 1024000, hasLog: false, caveExclusive: true, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre257: { numRarity: 1285000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre258: { numRarity: 1548000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre259: { numRarity: 1813000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre260: { numRarity: 2080000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre261: { numRarity: 2349000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre262: { numRarity: 262000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre263: { numRarity: 526000000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre264: { numRarity: 792000000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre265: { numRarity: 1060000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre266: { numRarity: 1330000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre267: { numRarity: 1602000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre268: { numRarity: 1876000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre269: { numRarity: 2152000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre270: { numRarity: 2430000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre271: { numRarity: 271000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre272: { numRarity: 544000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre273: { numRarity: 819000, hasLog: true, caveExclusive: true, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre274: { numRarity: 1096000000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre275: { numRarity: 1375000000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre276: { numRarity: 1656000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre277: { numRarity: 1939000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre278: { numRarity: 2224000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre279: { numRarity: 2511000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre280: { numRarity: 280000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre281: { numRarity: 562000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre282: { numRarity: 846000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre283: { numRarity: 1132000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre284: { numRarity: 1420000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre285: { numRarity: 1710000000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre286: { numRarity: 2002000000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre287: { numRarity: 2296000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre288: { numRarity: 2592000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre289: { numRarity: 289000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre290: { numRarity: 580000, hasLog: true, caveExclusive: true, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre291: { numRarity: 873000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre292: { numRarity: 1168000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre293: { numRarity: 1465000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre294: { numRarity: 1764000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre295: { numRarity: 2065000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre296: { numRarity: 2368000000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre297: { numRarity: 2673000000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre298: { numRarity: 298000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre299: { numRarity: 598000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre300: { numRarity: 900000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre301: { numRarity: 1204000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre302: { numRarity: 1510000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre303: { numRarity: 1818000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre304: { numRarity: 2128000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre305: { numRarity: 2440000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre306: { numRarity: 2754000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre307: { numRarity: 307000000, hasLog: false, caveExclusive: true, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre308: { numRarity: 616000000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre309: { numRarity: 927000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre310: { numRarity: 1240000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre311: { numRarity: 1555000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre312: { numRarity: 1872000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre313: { numRarity: 2191000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre314: { numRarity: 2512000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre315: { numRarity: 2835000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre316: { numRarity: 316000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre317: { numRarity: 634000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre318: { numRarity: 954000000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre319: { numRarity: 1276000000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre320: { numRarity: 1600000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre321: { numRarity: 1926000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre322: { numRarity: 2254000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre323: { numRarity: 2584000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre324: { numRarity: 2916000, hasLog: true, caveExclusive: true, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre325: { numRarity: 325000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre326: { numRarity: 652000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre327: { numRarity: 981000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre328: { numRarity: 1312000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre329: { numRarity: 1645000000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre330: { numRarity: 1980000000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre331: { numRarity: 2317000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre332: { numRarity: 2656000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre333: { numRarity: 2997000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre334: { numRarity: 334000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre335: { numRarity: 670000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre336: { numRarity: 1008000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre337: { numRarity: 1348000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre338: { numRarity: 1690000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre339: { numRarity: 2034000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre340: { numRarity: 2380000000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre341: { numRarity: 2728000000, hasLog: true, caveExclusive: true, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre342: { numRarity: 3078000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre343: { numRarity: 343000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre344: { numRarity: 688000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre345: { numRarity: 1035000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre346: { numRarity: 1384000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre347: { numRarity: 1735000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre348: { numRarity: 2088000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre349: { numRarity: 2443000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre350: { numRarity: 2800000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre351: { numRarity: 3159000000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre352: { numRarity: 352000000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre353: { numRarity: 706000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre354: { numRarity: 1062000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre355: { numRarity: 1420000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre356: { numRarity: 1780000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre357: { numRarity: 2142000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre358: { numRarity: 2506000, hasLog: false, caveExclusive: true, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre359: { numRarity: 2872000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre360: { numRarity: 3240000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre361: { numRarity: 361000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre362: { numRarity: 724000000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre363: { numRarity: 1089000000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre364: { numRarity: 1456000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre365: { numRarity: 1825000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre366: { numRarity: 2196000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre367: { numRarity: 2569000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre368: { numRarity: 2944000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre369: { numRarity: 3321000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre370: { numRarity: 370000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre371: { numRarity: 742000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre372: { numRarity: 1116000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre373: { numRarity: 1492000000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre374: { numRarity: 1870000000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre375: { numRarity: 2250000, hasLog: true, caveExclusive: true, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre376: { numRarity: 2632000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre377: { numRarity: 3016000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre378: { numRarity: 3402000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre379: { numRarity: 379000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre380: { numRarity: 760000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre381: { numRarity: 1143000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre382: { numRarity: 1528000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre383: { numRarity: 1915000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre384: { numRarity: 2304000000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre385: { numRarity: 2695000000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre386: { numRarity: 3088000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre387: { numRarity: 3483000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre388: { numRarity: 388000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre389: { numRarity: 778000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre390: { numRarity: 1170000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre391: { numRarity: 1564000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre392: { numRarity: 1960000, hasLog: true, caveExclusive: true, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre393: { numRarity: 2358000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre394: { numRarity: 2758000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre395: { numRarity: 3160000000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre396: { numRarity: 3564000000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre397: { numRarity: 397000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre398: { numRarity: 796000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre399: { numRarity: 1197000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre400: { numRarity: 1600000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre401: { numRarity: 2005000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre402: { numRarity: 2412000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre403: { numRarity: 2821000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre404: { numRarity: 3232000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre405: { numRarity: 3645000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre406: { numRarity: 406000000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre407: { numRarity: 814000000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre408: { numRarity: 1224000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre409: { numRarity: 1636000, hasLog: false, caveExclusive: true, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre410: { numRarity: 2050000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre411: { numRarity: 2466000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre412: { numRarity: 2884000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre413: { numRarity: 3304000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre414: { numRarity: 3726000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre415: { numRarity: 415000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre416: { numRarity: 832000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre417: { numRarity: 1251000000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre418: { numRarity: 1672000000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre419: { numRarity: 2095000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre420: { numRarity: 2520000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre421: { numRarity: 2947000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre422: { numRarity: 3376000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre423: { numRarity: 3807000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre424: { numRarity: 424000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre425: { numRarity: 850000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre426: { numRarity: 1278000, hasLog: true, caveExclusive: true, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre427: { numRarity: 1708000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre428: { numRarity: 2140000000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre429: { numRarity: 2574000000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre430: { numRarity: 3010000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre431: { numRarity: 3448000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre432: { numRarity: 3888000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre433: { numRarity: 433000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre434: { numRarity: 868000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre435: { numRarity: 1305000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre436: { numRarity: 1744000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre437: { numRarity: 2185000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre438: { numRarity: 2628000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre439: { numRarity: 3073000000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre440: { numRarity: 3520000000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre441: { numRarity: 3969000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre442: { numRarity: 442000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre443: { numRarity: 886000, hasLog: true, caveExclusive: true, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre444: { numRarity: 1332000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre445: { numRarity: 1780000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre446: { numRarity: 2230000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre447: { numRarity: 2682000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre448: { numRarity: 3136000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre449: { numRarity: 3592000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre450: { numRarity: 4050000000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre451: { numRarity: 451000000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre452: { numRarity: 904000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre453: { numRarity: 1359000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre454: { numRarity: 1816000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre455: { numRarity: 2275000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre456: { numRarity: 2736000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre457: { numRarity: 3199000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre458: { numRarity: 3664000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre459: { numRarity: 4131000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre460: { numRarity: 460000, hasLog: false, caveExclusive: true, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre461: { numRarity: 922000000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre462: { numRarity: 1386000000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre463: { numRarity: 1852000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre464: { numRarity: 2320000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre465: { numRarity: 2790000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre466: { numRarity: 3262000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre467: { numRarity: 3736000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre468: { numRarity: 4212000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre469: { numRarity: 469000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre470: { numRarity: 940000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre471: { numRarity: 1413000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre472: { numRarity: 1888000000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre473: { numRarity: 2365000000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre474: { numRarity: 2844000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre475: { numRarity: 3325000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre476: { numRarity: 3808000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre477: { numRarity: 4293000, hasLog: true, caveExclusive: true, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre478: { numRarity: 478000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre479: { numRarity: 958000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre480: { numRarity: 1440000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre481: { numRarity: 1924000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre482: { numRarity: 2410000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre483: { numRarity: 2898000000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre484: { numRarity: 3388000000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre485: { numRarity: 3880000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre486: { numRarity: 4374000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre487: { numRarity: 487000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre488: { numRarity: 976000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre489: { numRarity: 1467000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre490: { numRarity: 1960000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre491: { numRarity: 2455000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre492: { numRarity: 2952000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre493: { numRarity: 3451000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre494: { numRarity: 3952000000, hasLog: true, caveExclusive: true, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre495: { numRarity: 4455000000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre496: { numRarity: 496000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre497: { numRarity: 994000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre498: { numRarity: 1494000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre499: { numRarity: 1996000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre500: { numRarity: 2500000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre501: { numRarity: 3006000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre502: { numRarity: 3514000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre503: { numRarity: 4024000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre504: { numRarity: 4536000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre505: { numRarity: 505000000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre506: { numRarity: 1012000000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre507: { numRarity: 1521000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre508: { numRarity: 2032000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre509: { numRarity: 2545000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre510: { numRarity: 3060000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre511: { numRarity: 3577000, hasLog: false, caveExclusive: true, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre512: { numRarity: 4096000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre513: { numRarity: 4617000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre514: { numRarity: 514000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre515: { numRarity: 1030000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre516: { numRarity: 1548000000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre517: { numRarity: 2068000000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre518: { numRarity: 2590000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre519: { numRarity: 3114000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre520: { numRarity: 3640000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre521: { numRarity: 4168000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre522: { numRarity: 4698000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre523: { numRarity: 523000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre524: { numRarity: 1048000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre525: { numRarity: 1575000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre526: { numRarity: 2104000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre527: { numRarity: 2635000000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre528: { numRarity: 3168000000, hasLog: true, caveExclusive: true, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre529: { numRarity: 3703000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre530: { numRarity: 4240000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre531: { numRarity: 4779000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre532: { numRarity: 532000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre533: { numRarity: 1066000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre534: { numRarity: 1602000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre535: { numRarity: 2140000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre536: { numRarity: 2680000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre537: { numRarity: 3222000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre538: { numRarity: 3766000000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre539: { numRarity: 4312000000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre540: { numRarity: 4860000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre541: { numRarity: 541000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre542: { numRarity: 1084000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre543: { numRarity: 1629000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre544: { numRarity: 2176000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre545: { numRarity: 2725000, hasLog: true, caveExclusive: true, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre546: { numRarity: 3276000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre547: { numRarity: 3829000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre548: { numRarity: 4384000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre549: { numRarity: 4941000000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre550: { numRarity: 550000000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre551: { numRarity: 1102000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre552: { numRarity: 1656000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre553: { numRarity: 2212000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre554: { numRarity: 2770000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre555: { numRarity: 3330000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre556: { numRarity: 3892000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre557: { numRarity: 4456000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre558: { numRarity: 5022000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre559: { numRarity: 559000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre560: { numRarity: 1120000000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre561: { numRarity: 1683000000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre562: { numRarity: 2248000, hasLog: false, caveExclusive: true, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre563: { numRarity: 2815000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre564: { numRarity: 3384000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre565: { numRarity: 3955000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre566: { numRarity: 4528000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre567: { numRarity: 5103000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre568: { numRarity: 568000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre569: { numRarity: 1138000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre570: { numRarity: 1710000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre571: { numRarity: 2284000000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre572: { numRarity: 2860000000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre573: { numRarity: 3438000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre574: { numRarity: 4018000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre575: { numRarity: 4600000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre576: { numRarity: 5184000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre577: { numRarity: 577000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre578: { numRarity: 1156000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre579: { numRarity: 1737000, hasLog: true, caveExclusive: true, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre580: { numRarity: 2320000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre581: { numRarity: 2905000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre582: { numRarity: 3492000000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre583: { numRarity: 4081000000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre584: { numRarity: 4672000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre585: { numRarity: 5265000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre586: { numRarity: 586000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre587: { numRarity: 1174000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre588: { numRarity: 1764000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre589: { numRarity: 2356000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre590: { numRarity: 2950000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre591: { numRarity: 3546000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre592: { numRarity: 4144000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre593: { numRarity: 4744000000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre594: { numRarity: 5346000000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre595: { numRarity: 595000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre596: { numRarity: 1192000, hasLog: true, caveExclusive: true, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre597: { numRarity: 1791000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre598: { numRarity: 2392000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre599: { numRarity: 2995000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre600: { numRarity: 3600000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre601: { numRarity: 4207000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre602: { numRarity: 4816000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre603: { numRarity: 5427000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre604: { numRarity: 604000000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre605: { numRarity: 1210000000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre606: { numRarity: 1818000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre607: { numRarity: 2428000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre608: { numRarity: 3040000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre609: { numRarity: 3654000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre610: { numRarity: 4270000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre611: { numRarity: 4888000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre612: { numRarity: 5508000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre613: { numRarity: 613000, hasLog: false, caveExclusive: true, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre614: { numRarity: 1228000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre615: { numRarity: 1845000000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre616: { numRarity: 2464000000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre617: { numRarity: 3085000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre618: { numRarity: 3708000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre619: { numRarity: 4333000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre620: { numRarity: 4960000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre621: { numRarity: 5589000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre622: { numRarity: 622000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre623: { numRarity: 1246000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre624: { numRarity: 1872000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre625: { numRarity: 2500000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre626: { numRarity: 3130000000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre627: { numRarity: 3762000000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre628: { numRarity: 4396000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre629: { numRarity: 5032000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre630: { numRarity: 5670000, hasLog: true, caveExclusive: true, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre631: { numRarity: 631000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre632: { numRarity: 1264000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre633: { numRarity: 1899000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre634: { numRarity: 2536000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre635: { numRarity: 3175000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre636: { numRarity: 3816000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre637: { numRarity: 4459000000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre638: { numRarity: 5104000000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre639: { numRarity: 5751000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre640: { numRarity: 640000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre641: { numRarity: 1282000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre642: { numRarity: 1926000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre643: { numRarity: 2572000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre644: { numRarity: 3220000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre645: { numRarity: 3870000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre646: { numRarity: 4522000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre647: { numRarity: 5176000, hasLog: true, caveExclusive: true, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre648: { numRarity: 5832000000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre649: { numRarity: 649000000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre650: { numRarity: 1300000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre651: { numRarity: 1953000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre652: { numRarity: 2608000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre653: { numRarity: 3265000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre654: { numRarity: 3924000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre655: { numRarity: 4585000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre656: { numRarity: 5248000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre657: { numRarity: 5913000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre658: { numRarity: 658000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre659: { numRarity: 1318000000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre660: { numRarity: 1980000000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre661: { numRarity: 2644000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre662: { numRarity: 3310000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre663: { numRarity: 3978000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre664: { numRarity: 4648000, hasLog: false, caveExclusive: true, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre665: { numRarity: 5320000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre666: { numRarity: 5994000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre667: { numRarity: 667000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre668: { numRarity: 1336000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre669: { numRarity: 2007000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre670: { numRarity: 2680000000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre671: { numRarity: 3355000000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre672: { numRarity: 4032000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre673: { numRarity: 4711000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre674: { numRarity: 5392000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre675: { numRarity: 6075000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre676: { numRarity: 676000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre677: { numRarity: 1354000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre678: { numRarity: 2034000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre679: { numRarity: 2716000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre680: { numRarity: 3400000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre681: { numRarity: 4086000000, hasLog: true, caveExclusive: true, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre682: { numRarity: 4774000000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre683: { numRarity: 5464000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre684: { numRarity: 6156000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre685: { numRarity: 685000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre686: { numRarity: 1372000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre687: { numRarity: 2061000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre688: { numRarity: 2752000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre689: { numRarity: 3445000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre690: { numRarity: 4140000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre691: { numRarity: 4837000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre692: { numRarity: 5536000000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre693: { numRarity: 6237000000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre694: { numRarity: 694000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre695: { numRarity: 1390000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre696: { numRarity: 2088000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre697: { numRarity: 2788000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre698: { numRarity: 3490000, hasLog: true, caveExclusive: true, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre699: { numRarity: 4194000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre700: { numRarity: 4900000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre701: { numRarity: 5608000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre702: { numRarity: 6318000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre703: { numRarity: 703000000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre704: { numRarity: 1408000000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre705: { numRarity: 2115000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre706: { numRarity: 2824000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre707: { numRarity: 3535000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre708: { numRarity: 4248000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre709: { numRarity: 4963000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre710: { numRarity: 5680000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre711: { numRarity: 6399000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre712: { numRarity: 712000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre713: { numRarity: 1426000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre714: { numRarity: 2142000000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre715: { numRarity: 2860000000, hasLog: false, caveExclusive: true, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre716: { numRarity: 3580000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre717: { numRarity: 4302000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre718: { numRarity: 5026000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre719: { numRarity: 5752000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre720: { numRarity: 6480000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre721: { numRarity: 721000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre722: { numRarity: 1444000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre723: { numRarity: 2169000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre724: { numRarity: 2896000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre725: { numRarity: 3625000000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre726: { numRarity: 4356000000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre727: { numRarity: 5089000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre728: { numRarity: 5824000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre729: { numRarity: 6561000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre730: { numRarity: 730000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre731: { numRarity: 1462000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre732: { numRarity: 2196000, hasLog: true, caveExclusive: true, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre733: { numRarity: 2932000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre734: { numRarity: 3670000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre735: { numRarity: 4410000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre736: { numRarity: 5152000000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre737: { numRarity: 5896000000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre738: { numRarity: 6642000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre739: { numRarity: 739000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre740: { numRarity: 1480000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre741: { numRarity: 2223000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre742: { numRarity: 2968000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre743: { numRarity: 3715000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre744: { numRarity: 4464000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre745: { numRarity: 5215000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre746: { numRarity: 5968000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre747: { numRarity: 6723000000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre748: { numRarity: 748000000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre749: { numRarity: 1498000, hasLog: true, caveExclusive: true, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre750: { numRarity: 2250000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre751: { numRarity: 3004000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre752: { numRarity: 3760000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre753: { numRarity: 4518000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre754: { numRarity: 5278000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre755: { numRarity: 6040000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre756: { numRarity: 6804000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre757: { numRarity: 757000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre758: { numRarity: 1516000000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre759: { numRarity: 2277000000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre760: { numRarity: 3040000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre761: { numRarity: 3805000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre762: { numRarity: 4572000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre763: { numRarity: 5341000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre764: { numRarity: 6112000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre765: { numRarity: 6885000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre766: { numRarity: 766000, hasLog: false, caveExclusive: true, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre767: { numRarity: 1534000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre768: { numRarity: 2304000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre769: { numRarity: 3076000000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre770: { numRarity: 3850000000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre771: { numRarity: 4626000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre772: { numRarity: 5404000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre773: { numRarity: 6184000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre774: { numRarity: 6966000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre775: { numRarity: 775000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre776: { numRarity: 1552000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre777: { numRarity: 2331000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre778: { numRarity: 3112000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre779: { numRarity: 3895000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre780: { numRarity: 4680000000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre781: { numRarity: 5467000000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre782: { numRarity: 6256000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre783: { numRarity: 7047000, hasLog: true, caveExclusive: true, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre784: { numRarity: 784000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre785: { numRarity: 1570000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre786: { numRarity: 2358000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre787: { numRarity: 3148000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre788: { numRarity: 3940000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre789: { numRarity: 4734000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre790: { numRarity: 5530000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre791: { numRarity: 6328000000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre792: { numRarity: 7128000000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre793: { numRarity: 793000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre794: { numRarity: 1588000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre795: { numRarity: 2385000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre796: { numRarity: 3184000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre797: { numRarity: 3985000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre798: { numRarity: 4788000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre799: { numRarity: 5593000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre800: { numRarity: 6400000, hasLog: true, caveExclusive: true, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre801: { numRarity: 7209000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre802: { numRarity: 802000000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre803: { numRarity: 1606000000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre804: { numRarity: 2412000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre805: { numRarity: 3220000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre806: { numRarity: 4030000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre807: { numRarity: 4842000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre808: { numRarity: 5656000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre809: { numRarity: 6472000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre810: { numRarity: 7290000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre811: { numRarity: 811000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre812: { numRarity: 1624000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre813: { numRarity: 2439000000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre814: { numRarity: 3256000000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre815: { numRarity: 4075000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre816: { numRarity: 4896000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre817: { numRarity: 5719000, hasLog: false, caveExclusive: true, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre818: { numRarity: 6544000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre819: { numRarity: 7371000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre820: { numRarity: 820000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre821: { numRarity: 1642000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre822: { numRarity: 2466000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre823: { numRarity: 3292000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre824: { numRarity: 4120000000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre825: { numRarity: 4950000000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre826: { numRarity: 5782000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre827: { numRarity: 6616000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre828: { numRarity: 7452000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre829: { numRarity: 829000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre830: { numRarity: 1660000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre831: { numRarity: 2493000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre832: { numRarity: 3328000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre833: { numRarity: 4165000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre834: { numRarity: 5004000, hasLog: true, caveExclusive: true, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre835: { numRarity: 5845000000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre836: { numRarity: 6688000000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre837: { numRarity: 7533000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre838: { numRarity: 838000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre839: { numRarity: 1678000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre840: { numRarity: 2520000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre841: { numRarity: 3364000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre842: { numRarity: 4210000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre843: { numRarity: 5058000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre844: { numRarity: 5908000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre845: { numRarity: 6760000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre846: { numRarity: 7614000000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre847: { numRarity: 847000000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre848: { numRarity: 1696000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre849: { numRarity: 2547000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre850: { numRarity: 3400000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre851: { numRarity: 4255000, hasLog: true, caveExclusive: true, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre852: { numRarity: 5112000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre853: { numRarity: 5971000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre854: { numRarity: 6832000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre855: { numRarity: 7695000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre856: { numRarity: 856000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre857: { numRarity: 1714000000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre858: { numRarity: 2574000000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre859: { numRarity: 3436000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre860: { numRarity: 4300000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre861: { numRarity: 5166000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre862: { numRarity: 6034000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre863: { numRarity: 6904000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre864: { numRarity: 7776000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre865: { numRarity: 865000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre866: { numRarity: 1732000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre867: { numRarity: 2601000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre868: { numRarity: 3472000000, hasLog: false, caveExclusive: true, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre869: { numRarity: 4345000000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre870: { numRarity: 5220000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre871: { numRarity: 6097000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre872: { numRarity: 6976000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre873: { numRarity: 7857000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre874: { numRarity: 874000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre875: { numRarity: 1750000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre876: { numRarity: 2628000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre877: { numRarity: 3508000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre878: { numRarity: 4390000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre879: { numRarity: 5274000000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre880: { numRarity: 6160000000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre881: { numRarity: 7048000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre882: { numRarity: 7938000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre883: { numRarity: 883000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre884: { numRarity: 1768000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre885: { numRarity: 2655000, hasLog: true, caveExclusive: true, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre886: { numRarity: 3544000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre887: { numRarity: 4435000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre888: { numRarity: 5328000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre889: { numRarity: 6223000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre890: { numRarity: 7120000000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre891: { numRarity: 8019000000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre892: { numRarity: 892000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre893: { numRarity: 1786000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre894: { numRarity: 2682000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre895: { numRarity: 3580000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre896: { numRarity: 4480000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre897: { numRarity: 5382000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre898: { numRarity: 6286000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre899: { numRarity: 7192000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre900: { numRarity: 8100000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre901: { numRarity: 901000000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre902: { numRarity: 1804000000, hasLog: true, caveExclusive: true, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre903: { numRarity: 2709000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre904: { numRarity: 3616000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre905: { numRarity: 4525000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre906: { numRarity: 5436000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre907: { numRarity: 6349000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre908: { numRarity: 7264000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre909: { numRarity: 8181000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre910: { numRarity: 910000, hasLog: false, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre911: { numRarity: 1822000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre912: { numRarity: 2736000000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre913: { numRarity: 3652000000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre914: { numRarity: 4570000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre915: { numRarity: 5490000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre916: { numRarity: 6412000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre917: { numRarity: 7336000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre918: { numRarity: 8262000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre919: { numRarity: 919000, hasLog: false, caveExclusive: true, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre920: { numRarity: 1840000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre921: { numRarity: 2763000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre922: { numRarity: 3688000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre923: { numRarity: 4615000000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre924: { numRarity: 5544000000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre925: { numRarity: 6475000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre926: { numRarity: 7408000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre927: { numRarity: 8343000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre928: { numRarity: 928000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre929: { numRarity: 1858000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre930: { numRarity: 2790000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre931: { numRarity: 3724000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre932: { numRarity: 4660000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre933: { numRarity: 5598000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre934: { numRarity: 6538000000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre935: { numRarity: 7480000000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre936: { numRarity: 8424000, hasLog: true, caveExclusive: true, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre937: { numRarity: 937000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre938: { numRarity: 1876000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre939: { numRarity: 2817000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre940: { numRarity: 3760000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre941: { numRarity: 4705000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre942: { numRarity: 5652000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre943: { numRarity: 6601000, hasLog: false, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre944: { numRarity: 7552000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre945: { numRarity: 8505000000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre946: { numRarity: 946000000, hasLog: false, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre947: { numRarity: 1894000, hasLog: true, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre948: { numRarity: 2844000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre949: { numRarity: 3796000, hasLog: false, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre950: { numRarity: 4750000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre951: { numRarity: 5706000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre952: { numRarity: 6664000, hasLog: false, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre953: { numRarity: 7624000, hasLog: true, caveExclusive: true, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre954: { numRarity: 8586000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre955: { numRarity: 955000, hasLog: false, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre956: { numRarity: 1912000000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre957: { numRarity: 2871000000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre958: { numRarity: 3832000, hasLog: false, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre959: { numRarity: 4795000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre960: { numRarity: 5760000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre961: { numRarity: 6727000, hasLog: false, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre962: { numRarity: 7696000, hasLog: true, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre963: { numRarity: 8667000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre964: { numRarity: 964000, hasLog: false, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre965: { numRarity: 1930000, hasLog: true, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre966: { numRarity: 2898000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre967: { numRarity: 3868000000, hasLog: false, caveExclusive: false, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre968: { numRarity: 4840000000, hasLog: true, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre969: { numRarity: 5814000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre970: { numRarity: 6790000, hasLog: false, caveExclusive: true, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre971: { numRarity: 7768000, hasLog: true, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre972: { numRarity: 8748000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre973: { numRarity: 973000, hasLog: false, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre974: { numRarity: 1948000, hasLog: true, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre975: { numRarity: 2925000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre976: { numRarity: 3904000, hasLog: false, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre977: { numRarity: 4885000, hasLog: true, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre978: { numRarity: 5868000000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre979: { numRarity: 6853000000, hasLog: false, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre980: { numRarity: 7840000, hasLog: true, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Moss Dross" },
    generatedOre981: { numRarity: 8829000, hasLog: true, caveExclusive: false, spawnMessage: "Echo Amber has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Echo Amber" },
    generatedOre982: { numRarity: 982000, hasLog: false, caveExclusive: false, spawnMessage: "Brine Tangle has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Brine Tangle" },
    generatedOre983: { numRarity: 1966000, hasLog: true, caveExclusive: false, spawnMessage: "Gale Slate has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Gale Slate" },
    generatedOre984: { numRarity: 2952000, hasLog: true, caveExclusive: false, spawnMessage: "Thorn Dross has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Thorn Dross" },
    generatedOre985: { numRarity: 3940000, hasLog: false, caveExclusive: false, spawnMessage: "Hush Amber has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Hush Amber" },
    generatedOre986: { numRarity: 4930000, hasLog: true, caveExclusive: false, spawnMessage: "Frost Tangle has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Frost Tangle" },
    generatedOre987: { numRarity: 5922000, hasLog: true, caveExclusive: true, spawnMessage: "Ruin Slate has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Ruin Slate" },
    generatedOre988: { numRarity: 6916000, hasLog: false, caveExclusive: false, spawnMessage: "Vapor Dross has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Vapor Dross" },
    generatedOre989: { numRarity: 7912000000, hasLog: true, caveExclusive: false, spawnMessage: "Quartz Amber has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Quartz Amber" },
    generatedOre990: { numRarity: 8910000000, hasLog: true, caveExclusive: false, spawnMessage: "Velvet Tangle has surfaced from the generated depths.", oreTier: "Hyperdimensional", hasImage: false, src: "", oreName: "Velvet Tangle" },
    generatedOre991: { numRarity: 991000, hasLog: false, caveExclusive: false, spawnMessage: "Nova Slate has surfaced from the generated depths.", oreTier: "Antique", hasImage: false, src: "", oreName: "Nova Slate" },
    generatedOre992: { numRarity: 1984000, hasLog: true, caveExclusive: false, spawnMessage: "Abyss Dross has surfaced from the generated depths.", oreTier: "Mystical", hasImage: false, src: "", oreName: "Abyss Dross" },
    generatedOre993: { numRarity: 2979000, hasLog: true, caveExclusive: false, spawnMessage: "Glimmer Amber has surfaced from the generated depths.", oreTier: "Divine", hasImage: false, src: "", oreName: "Glimmer Amber" },
    generatedOre994: { numRarity: 3976000, hasLog: false, caveExclusive: false, spawnMessage: "Ember Tangle has surfaced from the generated depths.", oreTier: "Flawless", hasImage: false, src: "", oreName: "Ember Tangle" },
    generatedOre995: { numRarity: 4975000, hasLog: true, caveExclusive: false, spawnMessage: "Shard Slate has surfaced from the generated depths.", oreTier: "Interstellar", hasImage: false, src: "", oreName: "Shard Slate" },
    generatedOre996: { numRarity: 5976000, hasLog: true, caveExclusive: false, spawnMessage: "Ash Dross has surfaced from the generated depths.", oreTier: "Metaversal", hasImage: false, src: "", oreName: "Ash Dross" },
    generatedOre997: { numRarity: 6979000, hasLog: false, caveExclusive: false, spawnMessage: "Dusk Amber has surfaced from the generated depths.", oreTier: "Sacred", hasImage: false, src: "", oreName: "Dusk Amber" },
    generatedOre998: { numRarity: 7984000, hasLog: true, caveExclusive: false, spawnMessage: "Mire Tangle has surfaced from the generated depths.", oreTier: "Celestial", hasImage: false, src: "", oreName: "Mire Tangle" },
    generatedOre999: { numRarity: 8991000, hasLog: true, caveExclusive: false, spawnMessage: "Cinder Slate has surfaced from the generated depths.", oreTier: "Ethereal", hasImage: false, src: "", oreName: "Cinder Slate" },
    generatedOre1000: { numRarity: 1000000000, hasLog: false, caveExclusive: false, spawnMessage: "Moss Dross has surfaced from the generated depths.", oreTier: "Imaginary", hasImage: false, src: "", oreName: "Moss Dross" },
};

for (const [id, data] of Object.entries(generatedOreDefinitions)) {
    oreList[id] = { ...data };
    oreList[id].decimalRarity = 1 / oreList[id].numRarity;
}

const generatedLayerIds = [];
for (let i = 0; i < 100; i++) {
    const prefix = pickGenerated(generatedLayerPrefixes, 420, i);
    const suffix = pickGenerated(generatedLayerSuffixes, 69, i);
    const id = `generatedLayer${i + 1}`;
    generatedLayerIds.push(id);

    const oreIds = [];
    for (let j = 0; j < 6; j++) {
        const oreIndex = (i * 6 + j) % 1000;
        oreIds.push(`generatedOre${oreIndex + 1}`);
    }

    layerList[id] = oreIds;
}

specialLayers.push(...generatedLayerIds);
allLayers.push(...generatedLayerIds);

for (const ore of Object.keys(oreList)) {
    oreList[ore].decimalRarity = 1 / oreList[ore].numRarity;
}
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
