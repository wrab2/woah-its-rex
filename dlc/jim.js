let jim = {
	startedTrying: -1,
	opened: false,
	spawnJimNOW: false,
	spawnTimeout: 1000,
}
function spawnJim(){
	if (jim.startedTrying === -1) return jim.spawnJimNOW = false
	if (Date.now() - jim.startedTrying > jim.spawnTimeout) jim.spawnJimNOW = true
	else jim.spawnJimNOW = false
	
	if(jim.spawnJimNOW){
		stopMining()
		jimOpen()
	}
	return jim.spawnJimNOW
}
function tryingJim(stop=false){
	if (stop) jim.startedTrying = -1
	else if (jim.startedTrying === -1) jim.startedTrying = Date.now()
}

jimSay = johnSay
function jimOpen(){
	//johnRefresh()
	get("jim-window-main").style.visibility="visible"
	get("jim-portrait").style.animationName="john-swim-up"
	get("jim-name").style.animationName="john-name-up"
	setTimeout(()=>playSound("Johnical"), 1000)
	jim.opened = true
	if(!player.jim.spokeWith) {
		jimSay("hi im JIM im sure you've heard about me im a brother of john, and i like TTO fish")
		player.jim.spokeWith = true
	}
}

function jimHelpMe() {
	jimSay("the fumodex is quite simple, theres 3 categories (each one levels up a different part of the skill tree, music is important early on), you can see the fumo levels with the circle above them, it increases each time you collect it")
}

//fumodex
let fumos = {
	gacha: [
		"Agir", "Akagi", "Atago", "Azuma", "Baltimore", "Belfast", "Bremerton", "Cheshire", "China_Kuramoto", "Dorothy", "Formidable", "Hiro_Shinosawa", "Kaga", "Kashino", "Kotone_Fujita", "Laffey", "Le_Malin", "Lilja_Katsuragi", "Mao_Arimura", "Misuzu_Hataya", "Modernia", "Musashi", "New_Jersey", "Noshiro", "Owari", "Prinz_Eugen", "Rapunzel", "Red_Hood", "Rinami_Himesaki", "Saki_Hanami", "Scarlet", "Sena_Juo", "Sheffield", "Shimakaze", "Shinano", "Snow_White", "Sumika_Shiun", "Taihou", "Takao", "Temari_Tsukimura", "Tsubame_Amaya", "Ume_Hanami",
	],
	music: [
		"Hatsune_Miku", "Hitori_Gotoh", "Ikuyo_Kita", "Kagamine_Rin", "Kaito", "Len_Kagamine", "Megurine_Luka", "Meiko", "Nijika_Ijichi", "Ryo_Yamada",
	],
	touhou: [
		"Alice_Margatroid", "Aya_Shameimaru", "Byakuren_Hijiri", "Chen", "Chimata_Tenkyuu", "Cirno", "Clownpiece", "Daiyousei", "Doremy_Sweet", "Eirin_Yagokoro", "Flandre_Scarlet", "Fujiwara_no_Mokou", "Hanyasushin_Keiki", "Hecatia_Lapislazuli", "Hina_Kagiyama", "Hong_Meiling", "Joon_Yorigami", "Junko", "Kaguya_Houraisan", "Kasen_Ibaraki", "Koakuma", "Kogasa_Tatara", "Koishi_Komeiji", "Kokoro_Hatano", "Komachi_Onozuka", "Maribel_Hearn", "Marisa_Kirisame", "Megumu_Iizunamaru", "Minamitsu_Murasa", "Momiji_Inubashiri", "Mononobe_no_Futo", "Nazrin", "Nitori_Kawashiro", "Nue_Houjuu", "Okina_Matara", "Parsee_Mizuhashi", "Patchouli_Knowledge", "Ran_Yakumo", "Reimu_Hakurei", "Reisen_Udongein", "Remilia_Scarlet", "Renko_Usami", "Rin_Kaenbyou", "Rinnosuke_Morichika", "Rumia", "Sagume_Kishin", "Sakuya_Izayoi", "Sanae_Kochiya", "Satori_Komeiji", "Seiga_Kaku", "Seija_Kijin", "Shikieiki_Yamaxanadu", "Shion_Yorigami", "Suika_Ibuki", "Suwako_Moriya", "Tenshi_Hinanawi", "Tewi_Inaba", "Toyosatomimi_no_Miko", "Tsukasa_Kudamaki", "Utsuho_Reiuzi", "Youmu_Konpaku", "Yuka_Kazami", "Yukari_Yakumo", "Yuma_Toutetsu", "Yuyuko_Saigyouji",
	]
}

function openFumodex(tab=null){
	if (!this.tab){
		this.tab = "music"
	}
	if (tab!==null){
		this.tab = tab
	}
	let fumolist = fumos[this.tab]

	const card = get("fumo-card-copy")
	get("fumo-card-container").textContent=""
	for (let i=0; i< fumolist.length; i++){
		let thisCard = card.cloneNode(true)
		thisCard.removeAttribute("id")
		thisCard.getElementsByClassName("fumo-name")[0].textContent = fumolist[i].replace(/_/g, " ")
		thisCard.getElementsByClassName("fumo-level")[0].textContent = 0
		thisCard.getElementsByClassName("fumo-image")[0].src = `media/fumo_fishing/${this.tab}/${fumolist[i]}.webp`
		thisCard.getElementsByClassName("fumo-location")[0].innerHTML = "found in 🟫"

		get("fumo-card-container").append(thisCard)
	}
	get("fumodex").style.display="block"

	jimSay(`by the way have you seen my hat and my polo ball they got stolen recently"`)
}

function closeFumodex(){
	get("fumodex").style.display="none"
}