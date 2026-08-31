let fumos = {
	byType: [],
	byName: [],
	all: [],
	nameList: new Set(),
}

function insertFumosIntoLayers() {
	for(const fumo of fumos.all){
		for (const x of fumo.layer) {
			let layer = layerDictionary[x]
			if (!layer.layer.includes(fumo.name)){
				for (let i=0; i<layer.layer.length; i++){
					if(fumo.getRarity() < layer.probabilities[i]){
						layer.layer.splice(i, 0, fumo.name);
						break;
					}
				}
			}
		}
		updateAllLayers();
	}
}


let playerFumoObject = {}

let fumoStats = {
	//this is for access like player.fumos[fumo.name][fumoStats.level]
	level: 0,
	xp: 1,
	found: 2,
	owned: 3,
}
class Fumo {
	constructor(FUMO){
		this.name = FUMO.name
		this.layer = FUMO.layer
		this.tier = FUMO.tier
		this.type = FUMO.type
		this.imageSrc = `media/fumo_fishing/${this.type}/${this.name}.webp` 
		playerFumoObject[this.name] = [0,0,0,0]
		
		fumos.byName[FUMO.name] = this
		fumos.all.push(this)
		fumos.nameList.add(this.name)
		fumos.byType[this.type]??=[]
		fumos.byType[this.type].push(this)
		fumos.byType[this.type] = fumos.byType[this.type].sort((a,b)=>a.tier - b.tier)
	}
	getRarity(){
		if(false /*check if it meets tier requirements*/) return 0
		let baseRarity = 10000
		let tierExponent = 0.2
		let rarity = baseRarity
		//something with fishing power needs to exist
		rarity = baseRarity ** (1+((this.tier-1)*tierExponent))
		rarity = 1/rarity
		return 0.1 //test
		return rarity
	}
	getVariant(){
		return 1
	}
	addFumo(variant){
		let playerFumo = player.fumos[this.name]
		playerFumo[fumoStats.owned] += 1
		playerFumo[fumoStats.found] += 1
		playerFumo[fumoStats.xp] += 10*variant
		//level formula, that is 5000*(3^level*1.05) (subject to be changed)
		if(playerFumo[fumoStats.level]<10 && playerFumo[fumoStats.xp] > 5000 * (3 ** (playerFumo[fumoStats.level]*1.05))){
			this.levelUp()
		}
	}
	levelUp(){
		let playerFumo = player.fumos[this.name]
		playerFumo[fumoStats.level] += 1
		playerFumo[fumoStats.xp] = 0
	}
	generateListEntry(){
		 this.fakeOreListEntry = {'numRarity': 1/this.getRarity(), 'decimalRarity':this.getRarity(), 'hasLog': true,  'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'hasImage' : true, "src" : `media/fumo_fishing/${this.type}/${this.name}.webp`}
		 return this.fakeOreListEntry
	}
	owned(){
		return player.fumos[this.name][fumoStats.owned]
	}
}

new Fumo({
	name: "Laffey",
	layer: ["tvLayer"],
	tier: 1,
	type: "gacha"
})
new Fumo({
	name: "Misuzu_Hataya",
	layer: ["tvLayer"],
	tier: 3,
	type: "gacha"
})

new Fumo({
	name: "Le_Malin",
	layer: ["brickLayer"],
	tier: 1,
	type: "gacha"
})
new Fumo({
	name: "Taihou",
	layer: ["brickLayer"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Sena_Juo",
	layer: ["brickLayer"],
	tier: 3,
	type: "gacha"
})
new Fumo({
	name: "Ume_Hanami",
	layer: ["brickLayer"],
	tier: 4,
	type: "gacha"
})

new Fumo({
	name: "Rinami_Himesaki",
	layer: ["waterLayer","waterLayer2"],
	tier: 1,
	type: "gacha"
})
new Fumo({
	name: "Sheffield",
	layer: ["waterLayer", "waterLayer2"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Formidable",
	layer: ["waterLayer", "waterLayer2"],
	tier: 3,
	type: "gacha"
})
 
new Fumo({
	name: "Kashino",
	layer: ["radioactiveLayer"],
	tier: 1,
	type: "gacha"
})
new Fumo({
	name: "Prinz_Eugen",
	layer: ["radioactiveLayer"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Tsubame_Amaya",
	layer: ["radioactiveLayer"],
	tier: 4,
	type: "gacha"
})
new Fumo({
	name: "Agir",
	layer: ["radioactiveLayer"],
	tier: 5,
	type: "gacha"
})

new Fumo({
	name: "Lilja_Katsuragi",
	layer: ["cloudLayer", "cloudLayer2"],
	tier: 2,
	type: "gacha"
})

new Fumo({
	name: "Rapunzel",
	layer: ["paperLayer"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Dorothy",
	layer: ["paperLayer"],
	tier: 4,
	type: "gacha"
})

new Fumo({
	name: "Hiro_Shinosawa",
	layer: ["doorLayer"],
	tier: 4,
	type: "gacha"
})

new Fumo({
	name: "Saki_Hanami",
	layer: ["chessLayer"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Kotone_Fujita",
	layer: ["chessLayer"],
	tier: 5,
	type: "gacha"
})

new Fumo({
	name: "Snow_White",
	layer: ["rockLayer"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Takao",
	layer: ["rockLayer"],
	tier: 3,
	type: "gacha"
})
new Fumo({
	name: "Musashi",
	layer: ["rockLayer"],
	tier: 5,
	type: "gacha"
})

new Fumo({
	name: "Belfast",
	layer: ["checkmarkLayer"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Azuma",
	layer: ["checkmarkLayer"],
	tier: 3,
	type: "gacha"
})
new Fumo({
	name: "Cheshire",
	layer: ["checkmarkLayer"],
	tier: 4,
	type: "gacha"
})

new Fumo({
	name: "Temari_Tsukimura",
	layer: ["foggyLayer"],
	tier: 1,
	type: "gacha"
})
new Fumo({
	name: "Akagi",
	layer: ["foggyLayer"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Atago",
	layer: ["foggyLayer"],
	tier: 3,
	type: "gacha"
})
new Fumo({
	name: "Kaga",
	layer: ["foggyLayer"],
	tier: 3,
	type: "gacha"
})
new Fumo({
	name: "Shimakaze",
	layer: ["foggyLayer"],
	tier: 5,
	type: "gacha"
})

new Fumo({
	name: "Baltimore",
	layer: ["globeLayer"],
	tier: 3,
	type: "gacha"
})
new Fumo({
	name: "Bremerton",
	layer: ["globeLayer"],
	tier: 3,
	type: "gacha"
})
new Fumo({
	name: "New_Jersey",
	layer: ["globeLayer"],
	tier: 5,
	type: "gacha"
})

new Fumo({
	name: "Noshiro",
	layer: ["cactusLayer"],
	tier: 3,
	type: "gacha"
})
new Fumo({
	name: "Scarlet",
	layer: ["cactusLayer"],
	tier: 4,
	type: "gacha"
})
new Fumo({
	name: "Modernia",
	layer: ["cactusLayer"],
	tier: 5,
	type: "gacha"
})

new Fumo({
	name: "China_Kuramoto",
	layer: ["dirtLayer","dirtLayer2","dirtLayer3"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Mao_Arimura",
	layer: ["dirtLayer","dirtLayer2","dirtLayer3"],
	tier: 3,
	type: "gacha"
})

new Fumo({
	name: "Sumika_Shiun",
	layer: ["giftLayer"],
	tier: 1,
	type: "gacha"
})
new Fumo({
	name: "Red_Hood",
	layer: ["giftLayer"],
	tier: 2,
	type: "gacha"
})
new Fumo({
	name: "Owari",
	layer: ["giftLayer"],
	tier: 4,
	type: "gacha"
})

new Fumo({
	name: "Shinano",
	layer: ["jimLayer"],
	tier: 5,
	type: "gacha"
})




new Fumo({
	name: "Hatsune_Miku",
	layer: ["deepWaterLayer"],
	tier: 5,
	type: "music"
})
new Fumo({
	name: "Ikuyo_Kita",
	layer: ["deepWaterLayer"],
	tier: 1,
	type: "music"
})
new Fumo({
	name: "Hitori_Gotoh",
	layer: ["deepWaterLayer"],
	tier: 3,
	type: "music"
})
new Fumo({
	name: "Kagamine_Rin",
	layer: ["deepWaterLayer"],
	tier: 4,
	type: "music"
})
new Fumo({
	name: "Kaito",
	layer: ["borderLayer"],
	tier: 1,
	type: "music"
})
new Fumo({
	name: "Len_Kagamine",
	layer: ["deepWaterLayer"],
	tier: 4,
	type: "music"
})
new Fumo({
	name: "Meiko",
	layer: ["radioactiveLayer"],
	tier: 1,
	type: "music"
})
new Fumo({
	name: "Megurine_Luka",
	layer: ["johnLayer"],
	tier: 2,
	type: "music"
})
new Fumo({
	name: "Nijika_Ijichi",
	layer: ["deepWaterLayer"],
	tier: 3,
	type: "music"
})
new Fumo({
	name: "Ryo_Yamada",
	layer: ["deepWaterLayer"],
	tier: 3,
	type: "music"
})



new Fumo({
	name: "Cirno",
	layer: ["waterLayer","waterLayer2"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Daiyousei",
	layer: ["waterLayer","waterLayer2"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Kogasa_Tatara",
	layer: ["waterLayer","waterLayer2"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Seiga_Kaku",
	layer: ["waterLayer","waterLayer2"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Kaguya_Houraisan",
	layer: ["waterLayer","waterLayer2"],
	tier: 5,
	type: "touhou"
})

new Fumo({
	name: "Chen",
	layer: ["dirtLayer","dirtLayer2","dirtLayer3"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Koakuma",
	layer: ["dirtLayer","dirtLayer2","dirtLayer3"],
	tier: 2,
	type: "touhou"
})

new Fumo({
	name: "Hong_Meiling",
	layer: ["dirtLayer","dirtLayer2","dirtLayer3"],
	tier: 3,
	type: "touhou"
})

new Fumo({
	name: "Kasen_Ibaraki",
	layer: ["dirtLayer","dirtLayer2","dirtLayer3"],
	tier: 4,
	type: "touhou"
})

new Fumo({
	name: "Clownpiece",
	layer: ["starLayer"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Doremy_Sweet",
	layer: ["starLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Sanae_Kochiya",
	layer: ["starLayer"],
	tier: 3,
	type: "touhou"
})

new Fumo({
	name: "Momiji_Inubashiri",
	layer: ["globeLayer"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Renko_Usami",
	layer: ["globeLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Aya_Shameimaru",
	layer: ["globeLayer"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Suika_Ibuki",
	layer: ["globeLayer"],
	tier: 4,
	type: "touhou"
})
new Fumo({
	name: "Shion_Yorigami",
	layer: ["globeLayer"],
	tier: 3,
	type: "touhou"
})

new Fumo({
	name: "Suwako_Moriya",
	layer: ["brickLayer"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Maribel_Hearn",
	layer: ["brickLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Yuka_Kazami",
	layer: ["brickLayer"],
	tier: 4,
	type: "touhou"
})
new Fumo({
	name: "Byakuren_Hijiri",
	layer: ["brickLayer"],
	tier: 5,
	type: "touhou"
})

new Fumo({
	name: "Tsukasa_Kudamaki",
	layer: ["foggyLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Patchouli",
	layer: ["foggyLayer"],
	tier: 4,
	type: "touhou"
})
new Fumo({
	name: "Flandre_Scarlet",
	layer: ["foggyLayer"],
	tier: 5,
	type: "touhou"
})
new Fumo({
	name: "Remilia_Scarlet",
	layer: ["foggyLayer"],
	tier: 5,
	type: "touhou"
})

new Fumo({
	name: "Rinnosuke",
	layer: ["cactusLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Eirin_Yagokoro",
	layer: ["cactusLayer"],
	tier: 4,
	type: "touhou"
})
new Fumo({
	name: "Chimata_Tenkyuu",
	layer: ["cactusLayer"],
	tier: 5,
	type: "touhou"
})

new Fumo({
	name: "Nitori_Kawashiro",
	layer: ["johnLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Koishi_Komeiji",
	layer: ["jimLayer"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Satori_Komeiji",
	layer: ["internationalLayer"],
	tier: 5,
	type: "touhou"
})

new Fumo({
	name: "Alice_Margatroid",
	layer: ["johnLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Hecatia_Lapislazuli",
	layer: ["johnLayer"],
	tier: 4,
	type: "touhou"
})

new Fumo({
	name: "Fujiwara_no_Mokou",
	layer: ["giftLayer"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Yuuma_Toutetsu",
	layer: ["giftLayer"],
	tier: 4,
	type: "touhou"
})

new Fumo({
	name: "Hanyasushin_Keiki",
	layer: ["doorLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Yukari_Yakumo",
	layer: ["doorLayer"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Komachi_Onozuka",
	layer: ["doorLayer"],
	tier: 4,
	type: "touhou"
})
new Fumo({
	name: "Okina_Matara",
	layer: ["doorLayer"],
	tier: 5,
	type: "touhou"
})

new Fumo({
	name: "Hong_Meiling",
	layer: ["chessLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Hina_Kagiyama",
	layer: ["chessLayer"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Patchouli",
	layer: ["chessLayer"],
	tier: 4,
	type: "touhou"
})

new Fumo({
	name: "Joon_Yorigami",
	layer: ["tvLayer"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Miko",
	layer: ["tvLayer"],
	tier: 4,
	type: "touhou"
})

new Fumo({
	name: "Reisen_Udongein",
	layer: ["nebulaLayer"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Sagume_Kishin",
	layer: ["nebulaLayer"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Nue_Houjuu",
	layer: ["nebulaLayer"],
	tier: 4,
	type: "touhou"
})
new Fumo({
	name: "Junko",
	layer: ["nebulaLayer"],
	tier: 5,
	type: "touhou"
})

new Fumo({
	name: "Sakuya_Izayoi",
	layer: ["borderLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Parsee_Mizuhashi",
	layer: ["borderLayer"],
	tier: 4,
	type: "touhou"
})

new Fumo({
	name: "Ran_Yakumo",
	layer: ["jimLayer"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Minamitsu_Murasa",
	layer: ["jimLayer"],
	tier: 3,
	type: "touhou"
})

new Fumo({
	name: "Shikieiki",
	layer: ["cloudLayer", "cloudLayer2"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Marisa_Kirisame",
	layer: ["cloudLayer","cloudLayer2"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Reimu_Hakurei",
	layer: ["cloudLayer", "cloudLayer2"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Youmu_Konpaku",
	layer: ["cloudLayer", "cloudLayer2"],
	tier: 4,
	type: "touhou"
})
new Fumo({
	name: "Yuyuko_Saigyouji",
	layer: ["cloudLayer", "cloudLayer2"],
	tier: 5,
	type: "touhou"
})

new Fumo({
	name: "Kokoro_Hatano",
	layer: ["rockLayer"],
	tier: 3,
	type: "touhou"
})

new Fumo({
	name: "Nazrin",
	layer: ["radioactiveLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Tenshi_Hinanawi",
	layer: ["radioactiveLayer"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Tewi_Inaba",
	layer: ["radioactiveLayer"],
	tier: 4,
	type: "touhou"
})
new Fumo({
	name: "Utsuho_Reiuzi",
	layer: ["radioactiveLayer"],
	tier: 5,
	type: "touhou"
})

new Fumo({
	name: "Rumia",
	layer: ["paperLayer"],
	tier: 1,
	type: "touhou"
})
new Fumo({
	name: "Mononobe_no_Futo",
	layer: ["paperLayer"],
	tier: 2,
	type: "touhou"
})
new Fumo({
	name: "Seija_Kijin",
	layer: ["paperLayer"],
	tier: 3,
	type: "touhou"
})
new Fumo({
	name: "Megumu",
	layer: ["paperLayer"],
	tier: 4,
	type: "touhou"
})

new Fumo({
	name: "Rin_Kaenbyou",
	layer: ["checkmarkLayer"],
	tier: 4,
	type: "touhou"
})




