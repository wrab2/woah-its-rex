const trophyList = {
    "worldOneCompletion" : {
        reward: {type: "luck", do: "multiply", amt: 1.1},
    },
    "worldTwoCompletion" : {
        reward: {type: "luck", do: "multiply", amt: 1.25},
    },
    "subrealmOneCompletion" : {
        reward: {type: "allow", do: "usage", amt: "pickaxe27"},
    },
}
function getRewardTypes(affects, type) {
    let num = type === "add" ? 0 : 1;
    for (let trophy in trophyList) {
        const reward = trophyList[trophy].reward;
        if (reward.type === affects && reward.do === type && player.trophyProgress[trophy].trophyOwned) {
            if (type === "add") {
                num += reward.amt;
            } else if (type === "multiply") {
                num *= reward.amt;
            }
        }
    }
    return num;
}
const milestoneList = {
    "mainPath" : {
        pathUnlocked: true,
        "m1" : {
            title: "I have LEGS??",
            description: "Move with Single and Auto mine once respectively.",
            check: function() {
                return milestoneVariables.withAuto && milestoneVariables.withSingle;
            },
            owned: false,
            distH: 0,
            distV: 0,
            unlocks: ["m2"],
            connector: [],
            element: undefined
        },
        "m2" : {
            title: "...are these edible?",
            description: "Mine 100 blocks.",
            check: function() {
                return player.stats.blocksMined >= 100;
            },
            owned: false,
            distH: 0,
            distV: 1,
            unlocks: ["m3", "bm2.1"],
            connector: [],
            element: undefined
        },
        "m3" : {
            title: "#MULCHGANGFORLIFE",
            description: "Craft Mulch Mallet!",
            check: function() {
                return player.pickaxes["pickaxe1"];
            },
            owned: false,
            distH: 0,
            distV: 2,
            unlocks: ["m4"],
            connector: [],
            element: undefined
        },
        "m4" : {
            title: "Did you roll in mud as a kid?",
            description: "Craft Mud Sickle!",
            check: function() {
                return player.pickaxes["pickaxe2"];
            },
            owned: false,
            distH: 0,
            distV: 3,
            unlocks: ["m5"],
            connector: [],
            element: undefined
        },
        "m5" : {
            title: "WHAT WAS THAT NOISE??",
            description: "Mine your first Antique Ore!",
            check: function() {
                return hasTier("Antique");
            },
            owned: false,
            distH: 0,
            distV: 4,
            unlocks: ["m6", "tp1.1"],
            connector: [],
            element: undefined
        },
        "m6" : {
            title: "aggressive dirt muncher",
            description: "Craft Dirt Ravager!",
            check: function() {
                return player.pickaxes["pickaxe3"];
            },
            owned: false,
            distH: 0,
            distV: 5,
            unlocks: ["m7"],
            connector: [],
            element: undefined
        },
        "m7" : {
            title: "OooOoo Shiny :3",
            description: "Craft Crystalline Excavator!",
            check: function() {
                return player.pickaxes["pickaxe28"];
            },
            owned: false,
            distH: 0,
            distV: 6,
            unlocks: ["m7.1", "gp1.1"],
            connector: [],
            element: undefined
        },
        "m7.1" : {
            title: "woah! this mines too!",
            description: "Craft Ballast Breaker!",
            check: function() {
                return player.pickaxes["pickaxe29"];
            },
            owned: false,
            distH: 0,
            distV: 7,
            unlocks: ["m8", "gp2.1"],
            connector: [],
            element: undefined
        },
        "m8" : {
            title: "<tropical_music.mp3>",
            description: "Craft Tropical Carver!",
            check: function() {
                return player.pickaxes["pickaxe30"];
            },
            owned: false,
            distH: 0,
            distV: 8,
            unlocks: ["m9", "gp3.1"],
            connector: [],
            element: undefined
        },
        "m9" : {
            title: "why crush on the void?",
            description: "Craft Void Crusher!",
            check: function() {
                return player.pickaxes["pickaxe4"];
            },
            owned: false,
            distH: 0,
            distV: 9,
            unlocks: ["m10"],
            connector: [],
            element: undefined
        },
        "m10" : {
            title: "GD mods?",
            description: "Craft Geode Staff!",
            check: function() {
                return player.pickaxes["pickaxe5"];
            },
            owned: false,
            distH: 0,
            distV: 10,
            unlocks: ["m11", "gp4.1"],
            connector: [],
            element: undefined
        },
        "m11" : {
            title: "nooo not the earth :sob:",
            description: "Craft Earth Soiler!",
            check: function() {
                return player.pickaxes["pickaxe6"];
            },
            owned: false,
            distH: 0,
            distV: 11,
            unlocks: ["m12"],
            connector: [],
            element: undefined
        },
        "m12" : {
            title: "smashing crypts = sus",
            description: "Craft Crypt Smasher!",
            check: function() {
                return player.pickaxes["pickaxe7"];
            },
            owned: false,
            distH: 0,
            distV: 12,
            unlocks: ["m13", "gp5.1"],
            connector: [],
            element: undefined
        },
        "m13" : {
            title: "Shaiwase - VIP?",
            description: "Craft Labyrinthian Tide",
            check: function() {
                return player.pickaxes["pickaxe8"];
            },
            owned: false,
            distH: 0,
            distV: 13,
            unlocks: ["m14", "gp6.1"],
            connector: [],
            element: undefined
        },
        "m14" : {
            title: "why stop at 57 leafs?",
            description: "Craft 77 Leaf Destroyer!",
            check: function() {
                return player.pickaxes["pickaxe9"];
            },
            owned: false,
            distH: 0,
            distV: 14,
            unlocks: ["m15", "gp7.1"],
            connector: [],
            element: undefined
        },
        "m15" : {
            title: "oooo a key to what??",
            description: "Craft The Key!",
            check: function() {
                return player.pickaxes["pickaxe13"];
            },
            owned: false,
            distH: 0,
            distV: 15,
            unlocks: ["m16", "wtp1.1", "ncc1.1"],
            connector: [],
            element: undefined
        },
        "m16" : {
            title: "planet taster :3",
            description: "Craft Planet Buster!",
            check: function() {
                return player.pickaxes["pickaxe10"];
            },
            owned: false,
            distH: 0,
            distV: 16,
            unlocks: ["m17", "gp8.1"],
            connector: [],
            element: undefined
        },
        "m17" : {
            title: "SPIN SPIN SPIN SPIN SPIN...",
            description: "Craft Whirlpool of Fate!",
            check: function() {
                return player.pickaxes["pickaxe11"];
            },
            owned: false,
            distH: 0,
            distV: 17,
            unlocks: ["m18", "gp9.1", "app1.1"],
            connector: [],
            element: undefined
        },
        "m18" : {
            title: "birb wing pickaxe!! :D",
            description: "Craft Wings of Glory!",
            check: function() {
                return player.pickaxes["pickaxe12"];
            },
            owned: false,
            distH: 0,
            distV: 18,
            unlocks: ["gp11.1", "m19"],
            connector: [],
            element: undefined
        },
        "m19" : {
            title: "its so meowver",
            description: "Mine 1,000,000,000 Blocks in World 1 with Wings of Glory\r\nRequired for Null Chroma!\r\nGives 1.1x Luck.",
            check: function() {
                const blocksMinedNow = player.stats.blocksMined;
                if (player.trophyProgress["worldOneCompletion"].lastPickaxeUsed === "pickaxe12" && player.stats.currentPickaxe === "pickaxe12") {
                    const totalMinedWithWOG = blocksMinedNow - player.trophyProgress["worldOneCompletion"].lastMinedAmt;
                    player.trophyProgress["worldOneCompletion"].blocksWithWOG += totalMinedWithWOG;
                }
                player.trophyProgress["worldOneCompletion"].lastPickaxeUsed = player.stats.currentPickaxe;
                player.trophyProgress["worldOneCompletion"].lastMinedAmt = player.stats.blocksMined;
                if (this.element) this.element.children[1].textContent = `${this.description}\r\n${formatNumber(player.trophyProgress["worldOneCompletion"].blocksWithWOG)}/1B`;
                if (player.trophyProgress["worldOneCompletion"].blocksWithWOG > 1000000000) {
                    player.trophyProgress["worldOneCompletion"].trophyOwned = true;
                    return true;
                }
            },
            owned: false,
            distH: 0,
            distV: 19,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "blockMainPath" : {
        pathUnlocked: false,
        "bm2.1" : {
            title: "this is so tasty..",
            description: "Mine 10K blocks.",
            check: function() {
                return player.stats.blocksMined >= 10000;
            },
            owned: false,
            distH: 1,
            distV: 1,
            unlocks: ["bm2.2"],
            connector: [],
            element: undefined
        },
        "bm2.2" : {
            title: "ok im a little full :<",
            description: "Mine 50K Blocks.",
            check: function() {
                return player.stats.blocksMined >= 50000;
            },
            owned: false,
            distH: 2,
            distV: 1,
            unlocks: ["bm2.3"],
            connector: [],
            element: undefined
        },
        "bm2.3" : {
            title: "ok im a lot full :<",
            description: "Mine 500K Blocks.",
            check: function() {
                return player.stats.blocksMined >= 500000;
            },
            owned: false,
            distH: 3,
            distV: 1,
            unlocks: ["bm2.4"],
            connector: [],
            element: undefined
        },
        "bm2.4" : {
            title: "how many blocks can i possibly need",
            description: "Mine 1M Blocks!",
            check: function() {
                return player.stats.blocksMined >= 1000000;
            },
            owned: false,
            distH: 4,
            distV: 1,
            unlocks: ["bm2.5"],
            connector: [],
            element: undefined
        },
        "bm2.5" : {
            title: "this is a Lot of blocks",
            description: "Mine 10M Blocks!",
            check: function() {
                return player.stats.blocksMined >= 10000000;
            },
            owned: false,
            distH: 5,
            distV: 1,
            unlocks: ["bm2.6"],
            connector: [],
            element: undefined
        },
        "bm2.6" : {
            title: "stop making me eat blocks",
            description: "Mine 100M Blocks!",
            check: function() {
                return player.stats.blocksMined >= 100000000;
            },
            owned: false,
            distH: 6,
            distV: 1,
            unlocks: ["bm2.7"],
            connector: [],
            element: undefined
        },
        "bm2.7" : {
            title: "what if i sold these...",
            description: "Mine 1B Blocks",
            check: function() {
                return player.stats.blocksMined >= 1000000000;
            },
            owned: false,
            distH: 7,
            distV: 1,
            unlocks: ["bm2.8"],
            connector: [],
            element: undefined
        },
        "bm2.8" : {
            title: "im totally selling these",
            description: "Mine 100B Blocks",
            check: function() {
                return player.stats.blocksMined >= 100000000000;
            },
            owned: false,
            distH: 8,
            distV: 1,
            unlocks: ["bm2.9"],
            connector: [],
            element: undefined
        },
        "bm2.9" : {
            title: "hopefully 1 of these was rare",
            description: "Mine 1T Blocks",
            check: function() {
                return player.stats.blocksMined >= 1000000000000;
            },
            owned: false,
            distH: 9,
            distV: 1,
            unlocks: ["bm2.10"],
            connector: [],
            element: undefined
        },
        "bm2.10" : {
            title: "you should consider: grass.",
            description: "Mine 5T Blocks",
            check: function() {
                return player.stats.blocksMined >= 5000000000000;
            },
            owned: false,
            distH: 10,
            distV: 1,
            unlocks: ["bm2.11"],
            connector: [],
            element: undefined
        },
        "bm2.11" : {
            title: "GO OUTSIDEEEEE",
            description: "Mine 25T Blocks",
            check: function() {
                return player.stats.blocksMined >= 25000000000000;
            },
            owned: false,
            distH: 11,
            distV: 1,
            unlocks: ["bm2.12"],
            connector: [],
            element: undefined
        },
        "bm2.12" : {
            title: "is this even possible :sob:",
            description: "Mine 100T Blocks",
            check: function() {
                return player.stats.blocksMined >= 100000000000000;
            },
            owned: false,
            distH: 12,
            distV: 1,
            unlocks: ["bm2.13"],
            connector: [],
            element: undefined
        },
        "bm2.13" : {
            title: "how long until you cant gain more",
            description: "Mine 1qd Blocks",
            check: function() {
                return player.stats.blocksMined >= 1000000000000000;
            },
            owned: false,
            distH: 13,
            distV: 1,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "tierPath1" : {
        pathUnlocked: false,
        "tp1.1" : {
            title: "sparkles..,,",
            description: "Mine your first Mystical Ore!",
            check: function() {
                return hasTier("Mystical");
            },
            owned: false,
            distH: 1,
            distV: 4,
            unlocks: ["tp1.2"],
            connector: [],
            element: undefined
        },
        "tp1.2" : {
            title: "truly divine!",
            description: "Mine your first Divine Ore!",
            check: function() {
                return hasTier("Divine");
            },
            owned: false,
            distH: 2,
            distV: 4,
            unlocks: ["tp1.3"],
            connector: [],
            element: undefined
        },
        "tp1.3" : {
            title: "tier name checks out",
            description: "Mine your first Flawless Ore!",
            check: function() {
                return hasTier("Flawless");
            },
            owned: false,
            distH: 3,
            distV: 4,
            unlocks: ["tp1.4"],
            connector: [],
            element: undefined
        },
        "tp1.4" : {
            title: "from the starssss",
            description: "Mine your first Interstellar Ore!",
            check: function() {
                return hasTier("Interstellar");
            },
            owned: false,
            distH: 4,
            distV: 4,
            unlocks: ["tp1.5"],
            connector: [],
            element: undefined
        },
        "tp1.5" : {
            title: "this is so meta",
            description: "Mine your first Metaversal Ore!",
            check: function() {
                return hasTier("Metaversal");
            },
            owned: false,
            distH: 5,
            distV: 4,
            unlocks: ["tp1.6", "tp2.1"],
            connector: [],
            element: undefined
        },
        "tp1.6" : {
            title: "this tier so meow",
            description: "Mine your first Sacred Ore!",
            check: function() {
                return hasTier("Sacred");
            },
            owned: false,
            distH: 6,
            distV: 4,
            unlocks: ["tp1.7"],
            connector: [],
            element: undefined
        },
        "tp1.7" : {
            title: "mysteryyy :3",
            description: "Mine your first Ethereal Ore!",
            check: function() {
                return hasTier("Ethereal");
            },
            owned: false,
            distH: 7,
            distV: 4,
            unlocks: ["tp1.8"],
            connector: [],
            element: undefined
        },
        "tp1.8" : {
            title: "fake tier.",
            description: "Mine your first Imaginary Ore!",
            check: function() {
                return hasTier("Imaginary");
            },
            owned: false,
            distH: 8,
            distV: 4,
            unlocks: ["tp1.9"],
            connector: [],
            element: undefined
        },
        "tp1.9" : {
            title: "hd.....",
            description: "Mine your first Hyperdimensional Ore!",
            check: function() {
                return hasTier("Hyperdimensional");
            },
            owned: false,
            distH: 9,
            distV: 4,
            unlocks: ["tp1.91"],
            connector: [],
            element: undefined
        },
        "tp1.91" : {
            title: "you dont know this exists...",
            description: "Mine your first Polychromatical Ore!",
            check: function() {
                return hasTier("Polychromatical");
            },
            owned: false,
            distH: 10,
            distV: 4,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "tierPath2" : {
        pathUnlocked: false,
        "tp2.1" : {
            title: "very secret tier trust",
            description: "Mine your first Celestial Ore!",
            check: function() {
                return hasTier("Celestial");
            },
            owned: false,
            distH: 5,
            distV: 3,
            unlocks: ["tp2.2"],
            connector: [],
            element: undefined
        },
        "tp2.2" : {
            title: "yeah.. no lol",
            description: "Mine your first Infinitesimal Ore!",
            check: function() {
                return hasTier("Infinitesimal");
            },
            owned: false,
            distH: 5,
            distV: 2,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath1" : {
        pathUnlocked: false,
        "gp1.1" : {
            title: "the fog is coming...",
            description: "Craft RNG Manipulator",
            check: function() {
                return player.gears["gear30"];
            },
            owned: false,
            distH: -1,
            distV: 6,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "gearPath2" : {
        pathUnlocked: false,
        "gp2.1" : {
            title: "i... am SPEED!",
            description: "Craft Makeshift Accelerator!",
            check: function() {
                return player.gears["gear31"];
            },
            owned: false,
            distH: -1,
            distV: 7,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "gearPath3" : {
        pathUnlocked: false,
        "gp3.1" : {
            title: "i can LEAVE???",
            description: "Craft Time Destabilizer!",
            check: function() {
                return player.gears["gear46"];
            },
            owned: false,
            distH: -1,
            distV: 8,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "gearPath4" : {
        pathUnlocked: false,
        "gp4.1" : {
            title: "remember, you have to press the button",
            description: "Craft the Ore Tracker!",
            check: function() {
                return player.gears["gear0"];
            },
            owned: false,
            distH: -1,
            distV: 10,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "gearPath5" : {
        pathUnlocked: false,
        "gp5.1" : {
            title: "rex reference?? mmmm luck..",
            description: "Craft Real Candilium!",
            check: function() {
                return player.gears["gear1"];
            },
            owned: false,
            distH: 1,
            distV: 12,
            unlocks: ["gp5.2"],
            connector: [],
            element: undefined
        },
        "gp5.2" : {
            title: "rex reference 2?? AND MORE SPEED?",
            description: "Craft Real Vitriol!",
            check: function() {
                return player.gears["gear2"];
            },
            owned: false,
            distH: 1,
            distV: 13,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "gearPath6" : {
        pathUnlocked: false,
        "gp6.1" : {
            title: "eaded the ore.. sorgy..",
            description: "Craft Energy Siphoner!",
            check: function() {
                return player.gears["gear7"];
            },
            owned: false,
            distH: -1,
            distV: 13,
            unlocks: ["gp6.2"],
            connector: [],
            element: undefined
        },
        "gp6.2" : {
            title: "my pickaxe is strong now!!",
            description: "Craft Sugar Rush!",
            check: function() {
                return player.gears["gear8"];
            },
            owned: false,
            distH: -1,
            distV: 14,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "gearPath7" : {
        pathUnlocked: false,
        "gp7.1" : {
            title: "no, you cant get the plane event",
            description: "Craft Event Manager!",
            check: function() {
                return player.gears["gear45"];
            },
            owned: false,
            distH: 1,
            distV: 14,
            unlocks: ["gp7.2"],
            connector: [],
            element: undefined
        },
        "gp7.2" : {
            title: "afk mode ACTIVATED!",
            description: "Craft Infinity Collector!",
            check: function() {
                return player.gears["gear3"];
            },
            owned: false,
            distH: 2,
            distV: 14,
            unlocks: ["sr1.1", "gp7.3"],
            connector: [],
            element: undefined
        },
        "gp7.3" : {
            title: "MORE LAYER!!!",
            description: "Craft Layer Materializer!",
            check: function() {
                return player.gears["gear4"];
            },
            owned: false,
            distH: 2,
            distV: 13,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "subrealmOnePath" : {
        pathUnlocked: false,
        "sr1.1" : {
            title: "this place SUCKS",
            description: "Enter Subrealm One! (found in the Worlds tab in the lounge)",
            check: function() {
                return player.sr1Entered;
            },
            owned: false,
            distH: 3,
            distV: 14,
            unlocks: ["sr1.2"],
            connector: [],
            element: undefined
        },
        "sr1.2" : {
            title: "make it stop",
            description: "Craft The Tree of Life Upgrade 1!",
            check: function() {
                return player.upgrades["pickaxe27"].level > 0;
            },
            owned: false,
            distH: 4,
            distV: 14,
            unlocks: ["sr1.3", "srgp1.1"],
            connector: [],
            element: undefined
        },
        "sr1.3" : {
            title: "make it stop",
            description: "Craft The Tree of Life Upgrade 2!",
            check: function() {
                return player.upgrades["pickaxe27"].level > 1;
            },
            owned: false,
            distH: 5,
            distV: 14,
            unlocks: ["sr1.4", "srgp2.1"],
            connector: [],
            element: undefined
        },
        "sr1.4" : {
            title: "make it stop",
            description: "Craft The Tree of Life Upgrade 3!",
            check: function() {
                return player.upgrades["pickaxe27"].level > 2;
            },
            owned: false,
            distH: 6,
            distV: 14,
            unlocks: ["sr1.5", "srgp3.1"],
            connector: [],
            element: undefined
        },
        "sr1.5" : {
            title: "make it stop",
            description: "Craft The Tree of Life Upgrade 4!",
            check: function() {
                return player.upgrades["pickaxe27"].level > 3;
            },
            owned: false,
            distH: 7,
            distV: 14,
            unlocks: ["sr1.6", "srgp4.1"],
            connector: [],
            element: undefined
        },
        "sr1.6" : {
            title: "make it stop",
            description: "Craft The Tree of Life Upgrade 5!",
            check: function() {
                return player.upgrades["pickaxe27"].level > 4;
            },
            owned: false,
            distH: 8,
            distV: 14,
            unlocks: ["srgp5.1", "srgp6.1", "sr1.7"],
            connector: [],
            element: undefined
        },
        "sr1.7" : {
            title: "Subrealm One Trophy",
            description: "Mine 🏁! Good Luck ;3\r\nRequired For: Null Chroma!\r\nAllows for usage of TOL in World 1.",
            check: function() {
                const has = indexHasOre("🏁") > 0;
                player.trophyProgress["subrealmOneCompletion"].trophyOwned = has;
                return has;
            },
            owned: false,
            distH: 9,
            distV: 14,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "sr1GearPath1" : {
        pathUnlocked: false,
        "srgp1.1" : {
            title: "free rare ores!",
            description: "Craft Replicator Prototype!",
            check: function() {
                return player.gears["gear22"];
            },
            owned: false,
            distH: 4,
            distV: 15,
            unlocks: ["srgp1.2"],
            connector: [],
            element: undefined
        },
        "srgp1.2" : {
            title: "even better pickaxe :awaa:",
            description: "Craft Hyperdrive Accelerator!",
            check: function() {
                return player.gears["gear23"];
            },
            owned: false,
            distH: 4,
            distV: 16,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "sr1GearPath2" : {
        pathUnlocked: false,
        "srgp2.1" : {
            title: "i forgot these existed",
            description: "Craft Superenergetic Automaton!",
            check: function() {
                return player.gears["gear24"];
            },
            owned: false,
            distH: 5,
            distV: 15,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "sr1GearPath3" : {
        pathUnlocked: false,
        "srgp3.1" : {
            title: "free rare ores v2!",
            description: "Craft Alteration Reiterator!",
            check: function() {
                return player.gears["gear25"];
            },
            owned: false,
            distH: 6,
            distV: 15,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "sr1GearPath4" : {
        pathUnlocked: false,
        "srgp4.1" : {
            title: "more layer yay!",
            description: "Craft Stratum Nonillonator!",
            check: function() {
                return player.gears["gear26"];
            },
            owned: false,
            distH: 7,
            distV: 15,
            unlocks: [],
            connector: [],
            element: undefined
        }
    },
    "sr1GearPath5" : {
        pathUnlocked: false,
        "srgp5.1" : {
            title: "this Might be good",
            description: "Craft Biome Enchanter!",
            check: function() {
                return player.gears["gear27"];
            },
            owned: false,
            distH: 8,
            distV: 15,
            unlocks: [],
            connector: [],
            element: undefined
        },

    },
    "sr1GearPath6" : {
        pathUnlocked: false,
        "srgp6.1" : {
            title: "you when simulated rng:",
            description: "Craft Celestian Reaper!",
            check: function() {
                return player.gears["gear28"];
            },
            owned: false,
            distH: 8,
            distV: 13,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath8" : {
        pathUnlocked: false,
        "gp8.1" : {
            title: "infinite luck!! (real)",
            description: "Craft Fortune III Book!",
            check: function() {
                return player.gears["gear5"];
            },
            owned: false,
            distH: -1,
            distV: 16,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath9" : {
        pathUnlocked: false,
        "gp9.1" : {
            title: "at this point im getting sued",
            description: "Craft Haste II Beacon!",
            check: function() {
                return player.gears["gear6"];
            },
            owned: false,
            distH: -1,
            distV: 17,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath10" : {
        pathUnlocked: false,
        "gp10.1" : {
            title: "silly silly!",
            description: "Craft SILLYYYY!",
            check: function() {
                return player.gears["gear9"];
            },
            owned: false,
            distH: 2,
            distV: 19,
            unlocks: ["gp10.2"],
            connector: [],
            element: undefined
        },
        "gp10.2" : {
            title: "hololive reference",
            description: "Use the SILLYYYY! gear to generate a special layer and find its secret...",
            check: function() {
                return indexHasOre("korosan") > 0;
            },
            owned: false,
            distH: 2,
            distV: 20,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath11" : {
        pathUnlocked: false,
        "gp11.1" : {
            title: "what a paradox!",
            description: "Obtain Paradoxical Progression!",
            check: function() {
                return player.powerupCooldowns["powerup5"].unlocked;
            },
            owned: false,
            distH: -1,
            distV: 18,
            unlocks: ["gp11.2"],
            connector: [],
            element: undefined
        },
        "gp11.2" : {
            title: "ULTIMATE SPEED!",
            description: "Craft Abyssal Leaper!",
            check: function() {
                return player.gears["gear29"];
            },
            owned: false,
            distH: -1,
            distV: 19,
            unlocks: ["gp11.3"],
            connector: [],
            element: undefined
        },
        "gp11.3" : {
            title: "leave. now",
            description: "Craft Disengaged Incrementer.",
            check: function() {
                return player.gears["gear47"];
            },
            owned: false,
            distH: -1,
            distV: 20,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "altProgPath1" : {
        pathUnlocked: false,
        "app1.1" : {
            title: "theres more???",
            description: "Dig Down in World 1 and Enter the Repeating Layers!",
            check: function() {
                return milestoneVariables.inRepeating;
            },
            owned: false,
            distH: 1,
            distV: 17,
            unlocks: ["app1.2", "app2.1"],
            connector: [],
            element: undefined
        },
        "app1.2" : {
            title: "musicccc :3",
            description: "Find Flute Layer in the Repeating Layers!",
            check: function() {
                return indexHasOre("🪈") > 0;
            },
            owned: false,
            distH: 1,
            distV: 18,
            unlocks: ["app1.3"],
            connector: [],
            element: undefined
        },
        "app1.3" : {
            title: "pregnant man isnt coming back",
            description: "Find Silly Layer in the Repeating Layers!",
            check: function() {
                return indexHasOre("🎂") > 0;
            },
            owned: false,
            distH: 1,
            distV: 19,
            unlocks: ["app1.4", "gp10.1"],
            connector: [],
            element: undefined
        },
        "app1.4" : {
            title: "ur not supposed to see this",
            description: "Find.. grass? in the Repeating Layers!",
            check: function() {
                return milestoneVariables.unknownFound;
            },
            owned: false,
            distH: 1,
            distV: 20,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "altProgPath2" : {
        pathUnlocked: false,
        "app2.1" : {
            title: "surely this isnt important",
            description: "Find a Celestial Layer Trigger in the Repeating Layers\r\n(There's a sound that plays when one spawns)",
            check: function() {
                return milestoneVariables.triggerFound;
            },
            owned: false,
            distH: 2,
            distV: 17,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "worldTwoPath" : {
        pathUnlocked : false,
        "wtp1.1" : {
            title: "bat moment fr",
            description: "Craft Extreme Echolocator!",
            check: function() {
                return player.pickaxes["pickaxe14"];
            },
            owned: false,
            distH: 1,
            distV: 15,
            unlocks: ["wtp1.2"],
            connector: [],
            element: undefined
        },
        "wtp1.2" : {
            title: "what does this name mean-",
            description: "Craft Corundum Caver!",
            check: function() {
                return player.pickaxes["pickaxe15"];
            },
            owned: false,
            distH: 1,
            distV: 16,
            unlocks: ["wtp1.3"],
            connector: [],
            element: undefined
        },
        "wtp1.3" : {
            title: "dont slash the stars </3",
            description: "Craft Starborne Slasher!",
            check: function() {
                return player.pickaxes["pickaxe16"];
            },
            owned: false,
            distH: 2,
            distV: 16,
            unlocks: ["wtp1.4", "gp1.1.1"],
            connector: [],
            element: undefined
        },
        "wtp1.4" : {
            title: "CAT!!!",
            description: "Craft Nyabomb!",
            check: function() {
                return player.pickaxes["pickaxe17"];
            },
            owned: false,
            distH: 3,
            distV: 16,
            unlocks: ["wtp1.5", "gp1.2.1"],
            connector: [],
            element: undefined
        },
        "wtp1.5" : {
            title: "is this how i spell lightsabre idk",
            description: "Craft Lunar Lightsabre!",
            check: function() {
                return player.pickaxes["pickaxe18"];
            },
            owned: false,
            distH: 3,
            distV: 17,
            unlocks: ["wtp1.6"],
            connector: [],
            element: undefined
        },
        "wtp1.6" : {
            title: "i could sell this thing",
            description: "Craft Gemstone Engraver!",
            check: function() {
                return player.pickaxes["pickaxe19"];
            },
            owned: false,
            distH: 3,
            distV: 18,
            unlocks: ["wtp1.7", "gp1.3.1"],
            connector: [],
            element: undefined
        },
        "wtp1.7" : {
            title: "LETS GO GAMBLING!",
            description: "Craft Gambler's Fallacy!",
            check: function() {
                return player.pickaxes["pickaxe20"];
            },
            owned: false,
            distH: 3,
            distV: 19,
            unlocks: ["wtp1.8", "gp1.4.1"],
            connector: [],
            element: undefined
        },
        "wtp1.8" : {
            title: "surely this is good",
            description: "Craft Exponential Centrifuge!",
            check: function() {
                return player.pickaxes["pickaxe21"];
            },
            owned: false,
            distH: 3,
            distV: 20,
            unlocks: ["wtp1.9", "pp2.1.1"],
            connector: [],
            element: undefined
        },
        "wtp1.9" : {
            title: "binding..,,,",
            description: "Craft Staff of Binding!",
            check: function() {
                return player.pickaxes["pickaxe23"];
            },
            owned: false,
            distH: 3,
            distV: 21,
            unlocks: ["wtp1.91", "gp1.5.1"],
            connector: [],
            element: undefined
        },
        "wtp1.91" : {
            title: "not typing the full name",
            description: "Craft SSS!",
            check: function() {
                return player.pickaxes["pickaxe24"];
            },
            owned: false,
            distH: 3,
            distV: 22,
            unlocks: ["wtp1.92", "gp1.6.1"],
            connector: [],
            element: undefined
        },
        "wtp1.92" : {
            title: "lag.",
            description: "Craft Coronary Catastrophe!",
            check: function() {
                return player.pickaxes["pickaxe25"];
            },
            owned: false,
            distH: 3,
            distV: 23,
            unlocks: ["gp1.7.1", "egp1.1"],
            connector: [],
            element: undefined
        },
    },
    "gearPath1.1" : {
        pathUnlocked : false,
        "gp1.1.1" : {
            title: "nerdy ahh name",
            description: "Craft Quantum Entangler!",
            check: function() {
                return player.gears["gear32"];
            },
            owned: false,
            distH: 2,
            distV: 15,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath1.2" : {
        pathUnlocked : false,
        "gp1.2.1" : {
            title: "british spelling :rolling_eyes:",
            description: "Craft Logical Randomiser!",
            check: function() {
                return player.gears["gear10"];
            },
            owned: false,
            distH: 3,
            distV: 15,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath1.3" : {
        pathUnlocked : false,
        "gp1.3.1" : {
            title: "speedy v2 :3",
            description: "Craft Storm Sneakers!",
            check: function() {
                return player.gears["gear11"];
            },
            owned: false,
            distH: 4,
            distV: 18,
            unlocks: ["gp1.3.2"],
            connector: [],
            element: undefined
        },
        "gp1.3.2" : {
            title: "what does this mean v2",
            description: "Craft Artifice Annihilator!",
            check: function() {
                return player.gears["gear12"];
            },
            owned: false,
            distH: 5,
            distV: 18,
            unlocks: ["gp1.3.3"],
            connector: [],
            element: undefined
        },
        "gp1.3.3" : {
            title: "free commons!!",
            description: "Craft Repurposed Replicator!",
            check: function() {
                return player.gears["gear13"];
            },
            owned: false,
            distH: 6,
            distV: 18,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath1.4" : {
        pathUnlocked : false,
        "gp1.4.1" : {
            title: "youll need caves i think",
            description: "Craft Cavern Capacitator!",
            check: function() {
                return player.gears["gear14"];
            },
            owned: false,
            distH: 4,
            distV: 19,
            unlocks: ["gp1.4.2"],
            connector: [],
            element: undefined
        },
        "gp1.4.2" : {
            title: "is it cheap atleast",
            description: "Craft High Powered Vacuum!",
            check: function() {
                return player.gears["gear15"];
            },
            owned: false,
            distH: 5,
            distV: 19,
            unlocks: ["gp1.4.3"],
            connector: [],
            element: undefined
        },
        "gp1.4.3" : {
            title: "smol.",
            description: "Craft Subatomic Superpositioner!",
            check: function() {
                return player.gears["gear33"];
            },
            owned: false,
            distH: 6,
            distV: 19,
            unlocks: ["gp1.4.4"],
            connector: [],
            element: undefined
        },
        "gp1.4.4" : {
            title: "SPEED V3!!",
            description: "Craft Unlocked Speedcap!",
            check: function() {
                return player.gears["gear16"];
            },
            owned: false,
            distH: 7,
            distV: 19,
            unlocks: ["gp1.4.5"],
            connector: [],
            element: undefined
        },
        "gp1.4.5" : {
            title: "read item description",
            description: "Craft Infinity Collector II!",
            check: function() {
                return player.gears["gear17"];
            },
            owned: false,
            distH: 8,
            distV: 19,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "pickaxePath2.1" : {
        pathUnlocked : false,
        "pp2.1.1" : {
            title: "community would be mad if main path",
            description: "Craft Singularity Slammer!",
            check: function() {
                return player.pickaxes["pickaxe22"];
            },
            owned: false,
            distH: 4,
            distV: 20,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath1.5" : {
        pathUnlocked : false,
        "gp1.5.1" : {
            title: "doesnt need a clover, bad",
            description: "Craft Clover's Undoing!",
            check: function() {
                return player.gears["gear18"];
            },
            owned: false,
            distH: 4,
            distV: 21,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "gearPath1.6" : {
        pathUnlocked : false,
        "gp1.6.1" : {
            title: "BEST ITEM IN THE GAME",
            description: "Craft Structural Service!",
            check: function() {
                return player.gears["gear19"];
            },
            owned: false,
            distH: 4,
            distV: 22,
            unlocks: ["ncc2.1"],
            connector: [],
            element: undefined
        },
    },
    "gearPath1.7" : {
        pathUnlocked : false,
        "gp1.7.1" : {
            title: "BETTER ITEM.",
            description: "Craft Statistical Amplifier!",
            check: function() {
                return player.gears["gear20"];
            },
            owned: false,
            distH: 4,
            distV: 23,
            unlocks: ["gp1.7.2"],
            connector: [],
            element: undefined
        },
        "gp1.7.2" : {
            title: "click the gear tab lots lol",
            description: "Craft Oblivion Fracturer!",
            check: function() {
                return player.gears["gear21"];
            },
            owned: false,
            distH: 5,
            distV: 23,
            unlocks: ["gp1.7.3", "gp1.7.1.1"],
            connector: [],
            element: undefined
        },
        "gp1.7.3" : {
            title: "World Two Trophy",
            description: "Mine 10,000,000,000 Blocks with Coronary Catastrophe!\r\nRequired for Null Chroma!\r\nGives 1.25x Luck.",
            check: function() {
                const blocksMinedNow = player.stats.blocksMined;
                if (player.trophyProgress["worldTwoCompletion"].lastPickaxeUsed === "pickaxe25" && player.stats.currentPickaxe === "pickaxe25" && currentWorld === 2) {
                    const totalMinedWithCoronary = blocksMinedNow - player.trophyProgress["worldTwoCompletion"].lastMinedAmt;
                    player.trophyProgress["worldTwoCompletion"].blocksWithCoronary += totalMinedWithCoronary;
                }
                player.trophyProgress["worldTwoCompletion"].lastPickaxeUsed = player.stats.currentPickaxe;
                player.trophyProgress["worldTwoCompletion"].lastMinedAmt = player.stats.blocksMined;
                if (this.element) this.element.children[1].textContent = `${this.description}\r\n${formatNumber(player.trophyProgress["worldTwoCompletion"].blocksWithCoronary)}/10B`;
                if (player.trophyProgress["worldTwoCompletion"].blocksWithCoronary > 10000000000) {
                    player.trophyProgress["worldTwoCompletion"].trophyOwned = true;
                    return true;
                }
            },
            owned: false,
            distH: 6,
            distV: 23,
            unlocks: [],
            connector: [],
            element: undefined
        },

    },
    "gearPath1.7.1" : {
        pathUnlocked : false,
        "gp1.7.1.1" : {
            title: "what...",
            description: "Find ✡️ in an Abysstone Cave",
            check: function() {
                return indexHasOre("✡️") > 0;
            },
            owned: false,
            distH: 5,
            distV: 24,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "endgamePath1" : {
        pathUnlocked : false,
        "egp1.1" : {
            title: "LAG V2 OMG",
            description: "Craft Null Chroma! Requires:\r\nW1 Trophy, W2 Trophy, SR1 Trophy!",
            check: function() {
                return player.pickaxes["pickaxe26"];
            },
            owned: false,
            distH: 3,
            distV: 24,
            unlocks: ["egp1.2"],
            connector: [],
            element: undefined
        },
        "egp1.2" : {
            title: "watr watr watr",
            description: "Visit Watr World!\r\n(Spam water layer teleport, 1/500 to tp)",
            check: function() {
                return player.watrEntered;
            },
            owned: false,
            distH: 3,
            distV: 25,
            unlocks: ["egp1.3", "wp1"],
            connector: [],
            element: undefined
        },
        "egp1.3" : {
            title: "religion is real!",
            description: "Mine 1 God of The Mine!\r\n(1/1qd in most W1 Layers)",
            check: function() {
                return indexHasOre("godOfTheMine") > 0;
            },
            owned: false,
            distH: 3,
            distV: 26,
            unlocks: ["egp1.4"],
            connector: [],
            element: undefined
        },
        "egp1.4" : {
            title: "religion is REALER!",
            description: "Mine 1 Omnipotent God of The Mine!\r\n(1/3 chance to get when mining God of The Mine)",
            check: function() {
                return indexHasOre("Omnipotent God of The Mine") > 0
            },
            owned: false,
            distH: 3,
            distV: 27,
            unlocks: ["egp1.5"],
            connector: [],
            element: undefined
        },
        "egp1.5" : {
            title: "jcjenson... IN SPAAAACE!",
            description: "Visit Galactica! Portal found in the Worlds tab!",
            check: function() {
                return player.galacticaEntered;
            },
            owned: false,
            distH: 3,
            distV: 28,
            unlocks: ["gap1.1"],
            connector: [],
            element: undefined
        },
    },
    "watrPath" : {
        pathUnlocked : false,
        "wp1" : {
            title: "the flash is here",
            description: "Craft Lightspeed Emulator!",
            check: function() {
                return player.gears["gear36"];
            },
            owned: false,
            distH: 4,
            distV: 25,
            unlocks: ["wp2"],
            connector: [],
            element: undefined
        },
        "wp2" : {
            title: "i stole the image the ability uses",
            description: "Craft Undersea Eviscerator!",
            check: function() {
                return player.pickaxes["pickaxe31"];
            },
            owned: false,
            distH: 5,
            distV: 25,
            unlocks: ["wp3"],
            connector: [],
            element: undefined
        },
        "wp3" : {
            title: "exponents = good, trust",
            description: "Craft Increased Exponentiality!",
            check: function() {
                return player.gears["gear37"];
            },
            owned: false,
            distH: 6,
            distV: 25,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "galacticaPath" : {
        pathUnlocked : false,
        "gap1.1" : {
            title: "do the names need to be complex",
            description: "Craft Potentiality Multiplier!",
            check: function() {
                return player.gears["gear34"];
            },
            owned: false,
            distH: 4,
            distV: 28,
            unlocks: ["gap1.2"],
            connector: [],
            element: undefined
        },
        "gap1.2" : {
            title: "..i guess they do",
            description: "Craft Electrifying Propagator!",
            check: function() {
                return player.gears["gear35"];
            },
            owned: false,
            distH: 5,
            distV: 28,
            unlocks: ["gap1.3"],
            connector: [],
            element: undefined
        },
        "gap1.3" : {
            title: "finally no lag",
            description: "Craft Dimensional Slicer!",
            check: function() {
                return player.pickaxes["pickaxe32"];
            },
            owned: false,
            distH: 6,
            distV: 28,
            unlocks: ["gap1.4", "gap3.1", "gap2.1"],
            connector: [],
            element: undefined
        },
        "gap1.4" : {
            title: "space theme best theme",
            description: "Craft Supercluster Capsizer!",
            check: function() {
                return player.pickaxes["pickaxe34"];
            },
            owned: false,
            distH: 7,
            distV: 28,
            unlocks: ["gap1.5"],
            connector: [],
            element: undefined
        },
        "gap1.5" : {
            title: "the name???",
            description: "Craft Forgotten Rose Quartz Shell!",
            check: function() {
                return player.gears["gear38"];
            },
            owned: false,
            distH: 8,
            distV: 28,
            unlocks: ["gap1.6"],
            connector: [],
            element: undefined
        },
        "gap1.6" : {
            title: "the name???????",
            description: "Craft Armband of Endless Dreams!",
            check: function() {
                return player.gears["gear39"];
            },
            owned: false,
            distH: 9,
            distV: 28,
            unlocks: ["gap1.7"],
            connector: [],
            element: undefined
        },
        "gap1.7" : {
            title: "nervous gulp...",
            description: "Craft Galactic Engulfer!",
            check: function() {
                return player.pickaxes["pickaxe35"];
            },
            owned: false,
            distH: 10,
            distV: 28,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "galacticaPath2" : {
        pathUnlocked : false,
        "gap2.1" : {
            title: "community mad if main path :/",
            description: "Craft Wormhole Exterminator!",
            check: function() {
                return player.pickaxes["pickaxe33"];
            },
            owned: false,
            distH: 6,
            distV: 27,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "galacticaPath3" : {
        pathUnlocked: false,
        "gap3.1" : {
            title: "WHYYYY :SOB:",
            description: "Craft Why! (In the Ore Forge)",
            check: function() {
                return indexHasOre("singularityEgg") > 0;
            },
            owned: false,
            distH: 6,
            distV: 29,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "nullChromaCelestial1" : {
        pathUnlocked : false,
        "ncc1.1" : {
            title: "Mine ☯️",
            description: "Mine in any normal W2 layer with The Key.",
            check: function() {
                return indexHasOre("☯️") > 0;
            },
            owned: false,
            distH: -1,
            distV: 15,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "nullChromaCelestial2" : {
        pathUnlocked : false,
        "ncc2.1" : {
            title: "Mine ⛏️",
            description: "Mine into the barrier below chess layer, you'll get it eventually.",
            check: function() {
                return indexHasOre("⛏️") > 0;
            },
            owned: false,
            distH: 5,
            distV: 22,
            unlocks: [],
            connector: [],
            element: undefined
        },
    },
    "allCelestialsPath" : {
        //
        //
        pathUnlocked: true,
        "acp1.1" : {
            title: "Mine Layer Trigger Celestials",
            description: "<span>The Repeating Layers can sometimes get a bit... corrupted... keep mining down!<br>Remaining:",
            check: function() {
                const cels = ["🐸","📜","🍖","🚨","🪦","🪸","🚬","🥈", "🐞"];
                let output = "";
                for (let i = 0; i < cels.length; i++) {
                    if (!(indexHasOre(cels[i]) > 0)) {
                        output += cels[i];
                    }
                }
                if (this.element) this.element.children[1].innerHTML = this.description + output + "</span>";
                if (output === "") return true;
            },
            owned: false,
            distH: 1,
            distV: 5,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.2" : {
            title: "Mine Normal Replacement Celestials",
            description: "<span>Some ores have even rarer variants, typically being 1/1000.<br>Remaining:",
            check: function() {
                const cels = ["⏳","🍂","👁‍🗨","📛","🏳️‍🌈","🎊","💧","🌋","🖋️","⛩️","🎥","🌶️","watermelonDiamond"];
                let output = "";
                for (let i = 0; i < cels.length; i++) {
                    if (!(indexHasOre(cels[i]) > 0)) {
                        if (oreList[cels[i]]["hasImage"]) output += `<span class="milestoneInfoImage"><img class="milestoneInfoImage" src=${oreList[cels[i]]["src"]}></span>`;
                        else output += cels[i];
                    }

                }
                if (this.element) this.element.children[1].innerHTML = this.description + output + "</span>";
                if (output === "") return true; 
            },
            owned: false,
            distH: 2,
            distV: 5,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.3" : {
            title: "Mine Replacement Celestials",
            description: "<span>These replacement celestials require you to not automine.<br>Remaining:",
            check: function() {
                const cels = ["🩵","🦿","🪫","🌼","🔓","❤️‍🩹"];
                let output = "";
                for (let i = 0; i < cels.length; i++) {
                    if (!(indexHasOre(cels[i]) > 0)) {
                        output += cels[i];
                    }
                }
                if (this.element) this.element.children[1].innerHTML = this.description + output + "</span>";
                if (output === "") return true;
            },
            owned: false,
            distH: 3,
            distV: 5,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.3.1" : {
            title: "Mine Replacement Celestials",
            description: "<span>These replacement celestials have differing chances, some require no automine.<br>Remaining:",
            check: function() {
                const cels = ["jellyfish", "Omnipotent God of The Mine", "pixel"];
                let output = " ";
                for (let i = 0; i < cels.length; i++) {
                    if (!(indexHasOre(cels[i]) > 0)) {
                        if (oreList[cels[i]]["hasImage"]) output += `<span class="milestoneInfoImage"><img class="milestoneInfoImage" src=${oreList[cels[i]]["src"]}></span>`;
                        else output += cels[i];
                    }
                }
                if (this.element) this.element.children[1].innerHTML = this.description + output + "</span>";
                if (output === "") return true;
            },
            owned: false,
            distH: 5,
            distV: 6,
            unlocks: [],
            connector: [],
            element: undefined
        },
        //
        "acp1.4" : {
            title: "the 27th minute calls your name...",
            description: "Dirt layer might hold something interesting when the time is right.\r\nMine 😻",
            check: function() {
                return indexHasOre("😻") > 0;
            },
            owned: false,
            distH: 4,
            distV: 5,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.5" : {
            title: "put stuff not in dirt please",
            description: "When the hour is right, go back to dirt again.\r\nMine 🦋",
            check: function() {
                return indexHasOre("🦋") > 0;
            },
            owned: false,
            distH: 5,
            distV: 5,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.6" : {
            title: "The surface has Got to have an ore!",
            description: "Mine 🌹",
            check: function() {
                return indexHasOre("🌹") > 0;
            },
            owned: false,
            distH: 4,
            distV: 7,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.7" : {
            title: "All those speed gears for nothing!",
            description: "Teleport to surface, a lot, and then mine in Paper layer with your slower speeds.\r\nMine 🐢",
            check: function() {
                return indexHasOre("🐢") > 0;
            },
            owned: false,
            distH: 5,
            distV: 7,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.8" : {
            title: "no automine!!!",
            description: "Mine without using Automine in Brick or TV Layer\r\nMine 🦾",
            check: function() {
                return indexHasOre("🦾") > 0;
            },
            owned: false,
            distH: 1,
            distV: 6,
            unlocks: [],
            connector: [],
            element: undefined
        },
        //✡️
        "acp1.9" : {
            title: "fuck this ore",
            description: "Convert 1337 Electrified Bricks and mine in Dirt layer.\r\nMine 🤫",
            check: function() {
                return indexHasOre("🤫") > 0;
            },
            owned: false,
            distH: 3,
            distV: 6,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.10" : {
            title: "I BELIEVE I CAN FLY!",
            description: "Mine at the top of Cloud layer\r\nMine 🖐",
            check: function() {
                return indexHasOre("🖐") > 0;
            },
            owned: false,
            distH: 2,
            distV: 6,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.11" : {
            title: "hehe teleporting",
            description: "Teleport to World Two with Coronary Equipped.\r\nMine 🩷",
            check: function() {
                return indexHasOre("🩷") > 0;
            },
            owned: false,
            distH: 5,
            distV: 6,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.11" : {
            title: "hehe teleporting 2",
            description: "Teleport to World One with Mulch Mallet equipped.\r\nMine 🩶",
            check: function() {
                return indexHasOre("🩶") > 0;
            },
            owned: false,
            distH: 4,
            distV: 6,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.12" : {
            title: "i hate mon- thursdays",
            description: "Mine Draedon, found in Radioactive layer.",
            check: function() {
                return indexHasOre("draedon") > 0;
            },
            owned: false,
            distH: 1,
            distV: 7,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.13" : {
            title: "idk get lucky",
            description: "Find Luna. Generates at a random depth from 0-100,000.",
            check: function() {
                return indexHasOre("luna") > 0;
            },
            owned: false,
            distH: 2,
            distV: 7,
            unlocks: [],
            connector: [],
            element: undefined
        },
        "acp1.14" : {
            title: "this isnt possible??",
            description: "Mine Silly Miner. Only found in layer caves.",
            check: function() {
                return indexHasOre("sillyMiner") > 0;
            },
            owned: false,
            distH: 3,
            distV: 7,
            unlocks: [],
            connector: [],
            element: undefined
        },
    }
}
const milestoneVariables = {
    withSingle : false,
    withAuto : false,
    sr1Entered : false,
    inRepeating : false,
    unknownFound : false,
    triggerFound : false,
    watrEntered : false,
    galacticaEntered : false,
}
function createMilestones() {
    if (get("milestonesHolder").children.length > 3) return;
    if (milestonesCreated) {
        for (const p in milestoneList) {
            const a = get("milestonesHolder");
            for (const m in milestoneList[p]) {
                const info = milestoneList[p][m];
                if (info === true || info === false) continue;
                a.append(info.element)
                for (let i = 0; i < info.connector.length; i++) a.appendChild(info.connector[i])
            }
        }
        return;
    }
    for (const path in milestoneList) {
        const pathInfo = milestoneList[path];
        let hide = true;
        if (pathInfo.pathUnlocked) hide = false;
        for (const milestone in pathInfo) {
            if (milestone !== "pathUnlocked") {
                const info = milestoneList[path][milestone];
                const elem = get("copyMilestone").cloneNode(true);
                elem.id = "";
                const children = elem.children;
                children[0].textContent = info.title;
                children[1].innerHTML = `${info.description.indexOf("<span>") > -1 ? info.description + "</span>" : info.description}`;
                children[2].textContent = `Completed: ${info.owned ? "True" : "False"}`;
                let l;
                l = (18*info.distV) + (6 * info.distV+1);
                elem.style.top = `min(${l}vh,${0.5*l}vw)`;
                if (info.distH !== 0) {
                    l = (55 + (45*info.distH)) + (6*info.distH);
                    elem.style.left = `min(${l}vh,${0.5*l}vw)`;
                } else {
                    elem.style.left = "min(55vh,27.5vw)";
                }
                info.element = elem;
                if (hide) elem.style.display = "none";
                get("milestonesHolder").appendChild(elem);
                if (info.unlocks.length > 0) {
                    for (let i = 0; i < info.unlocks.length; i++) {
                        const unlock = info.unlocks[i];
                        const unlockInfo = getMilestone(unlock);
                        const unlockedMilestone = milestoneList[unlockInfo.path][unlockInfo.name];
                        if (unlockedMilestone.distH !== info.distH) {
                            const connector = get("connectorCopy").cloneNode(true);
                            connector.id = "";
                            l = (18*info.distV) + (6 * info.distV) + 1;
                            connector.style.top = `min(${l}vh,${0.5*l}vw)`;
                            const val = elem.style.left.substring(4, elem.style.left.length - 3).replace(" ", "").split(",");
                            val[0] = val[0].substring(0, val[0].length - 2);
                            val[0] = Number(val[0]);
                            if (unlockedMilestone.distH < 0) {
                                l = val[0]-7;
                                connector.style.left = `min(${l}vh,${0.5*l}vw)`;
                            } else if (unlockedMilestone.distH > 0) {
                                l = val[0]+44;
                                connector.style.left = `min(${l}vh,${0.5*l}vw)`;
                            }
                            info.connector.push(connector);
                            if (info.owned) {
                                connector.children[0].classList.add("greenConnector");
                                connector.children[0].classList.remove("redConnector");
                            } else {
                                connector.children[0].classList.add("redConnector");
                                connector.children[0].classList.remove("greenConnector");
                            }
                            if (hide) connector.style.display = "none";
                            get("milestonesHolder").appendChild(connector);
                        } else {
                            const connector = get("connector2Copy").cloneNode(true);
                            connector.id = "";
                            if (unlockedMilestone.distV < info.distV) {
                                l = (18*(info.distV+1)-23) + (6 * info.distV+1) - 2;
                                connector.style.top = `min(${l}vh, ${0.5*l}vw)`;
                            } else {
                                l = (18*(info.distV+1)) + (6 * info.distV+1) - 1;
                                connector.style.top = `min(${l}vh, ${0.5*l}vw)`;
                            }
                            if (info.distH !== 0) {
                                l = (55 + (45*info.distH)) + (6*info.distH)
                                connector.style.left = `min(${l}vh, ${0.5*l}vw)`;
                            } else {
                                connector.style.left = "min(55vh,27.5vw)";
                            }
                            info.connector.push(connector);
                            if (info.owned) {
                                connector.children[0].classList.add("greenConnector");
                                connector.children[0].classList.remove("redConnector");
                            } else {
                                connector.children[0].classList.add("redConnector");
                                connector.children[0].classList.remove("greenConnector");
                            }
                            if (hide) connector.style.display = "none";
                            get("milestonesHolder").appendChild(connector);
                        }
                    }
                }
            }
        }
    }
    for (let i = 0; i < player.completedMilestones.length; i++) {
        const path = player.completedMilestones[i].path;
        const name = player.completedMilestones[i].name;
        unlockMilestone(path, name, true);
    }
    milestonesCreated = true;
}
let milestonesCreated = false;
function getMilestone(name) {
    for (const path in milestoneList) {
        for (const milestone in milestoneList[path]) {
            if (milestone === name) {
                return {path: path, name: milestone}
            }
        }
    }
}
function updateMilestoneConnectors(path, name, state) {
    const connectors = milestoneList[path][name].connector;
    for (let i = 0; i < connectors.length; i++) {
        if (milestoneList[path][name].owned) {
            connectors[i].children[0].classList.remove("redConnector");
            connectors[i].children[0].classList.add("greenConnector");
        } else {
            connectors[i].children[0].classList.remove("greenConnector");
            connectors[i].children[0].classList.add("redConnector");
        }

    }

}
function checkCurrentMilestones(data) {
    for (const path in checkCurrentMilestones.pathsAndNames) {
        const info = milestoneList[path][checkCurrentMilestones.pathsAndNames[path]];
        if (!info.owned && info.check()) {
            unlockMilestone(path, checkCurrentMilestones.pathsAndNames[path], data);
        }
    }
    
    for (const celestialReq in milestoneList["allCelestialsPath"]) {
        const thisCelestial = milestoneList["allCelestialsPath"][celestialReq]
        if (!data && celestialReq !== "pathUnlocked" && !thisCelestial.owned && thisCelestial.check()) {
            unlockMilestone("allCelestialsPath", celestialReq, false);
        }
    }
}
checkCurrentMilestones.pathsAndNames = {
    "mainPath" : "m1"
}
checkCurrentMilestones.shown = false;
function unlockMilestone(path, name, data, ) {
    const info = milestoneList[path][name];
    if (!data) player.completedMilestones.push({path: path, name: name});
    info.owned = true;
    info.element.children[2].textContent = "Completed: True";
    if (data) info.check();
    const unlocks = info.unlocks;
    if (unlocks.length === 0) {delete checkCurrentMilestones.pathsAndNames[path]; return;}
    if (checkCurrentMilestones.pathsAndNames[path] === undefined) return;
    if (info.owned) updateMilestoneConnectors(path, checkCurrentMilestones.pathsAndNames[path], true);
    for (let i = 0; i < unlocks.length; i++) {
        let location = getMilestone(unlocks[i]);
        if (milestoneList[path][unlocks[i]] === undefined) {
            milestoneList[location.path].pathUnlocked = true;
            const showElems = milestoneList[location.path];
            for (const m in showElems) {
                if (m !== "pathUnlocked") {
                    showElems[m].element.style.display = "";
                    for (let i = 0; i < showElems[m].connector.length; i++) {
                        showElems[m].connector[i].style.display = "flex";
                    }
                }
            }
        }
        checkCurrentMilestones.pathsAndNames[location.path] = unlocks[i];
        checkCurrentMilestones(data);
    }
}
function hasTier(tier) {
    const ores = oreInformation.getOresByTier(tier);
    for (let i = 0; i < ores.length; i++) {
        if (indexHasOre(ores[i]) > 0) return true;
    }
    return false;
}
let mouseDown = false;
let startX, scrollLeft, startY, scrollTop;
let slider; 

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  startY = e.pageY - slider.offsetTop;
  scrollTop = slider.scrollTop
}

const stopDragging = (e) => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - (scroll * 1.5);
  const y = e.pageY - slider.offsetTop;
  const scrollY = y - startY;
  slider.scrollTop = scrollTop - (scrollY * 1.5);
}
