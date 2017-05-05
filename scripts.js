
"use strict";

exports.BattleScripts = {
	randomBDArenaTeam: function (side) {
		let team = [];
		let variant = (this.random(2) === 1);
		let sets = {
			'Tonmoy': {
				species: 'Machamp', ability: 'Dry Skin', item: 'Assault Vest', gender: 'M',
				moves: ['drainpunch', 'machpunch', ['knockoff', 'icepunch', 'stoneedge'][this.random(3)]],
				signatureMove: 'ilikepie',
				evs: {hp:248, atk:252, spd:8}, nature: 'Adamant',
			},
			'Salman': {
				species: 'Tyranitar', ability: 'Insomnia', item: 'Life Orb', gender: 'M',
				moves: ['diamondstorm', 'knockoff', ['rapidspin', 'worryseed', 'sleeptalk'][this.random(3)]],
				signatureMove: 'arikwinslol',
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly',
			},
			'Shaafique': {
				species: 'Phanpy', ability: 'Huge Power', item: 'Eviolite', gender: 'M',
				moves: ['thousandarrows', 'extremespeed', ['stealthrock', 'seedbomb', 'playrough'][this.random(3)]],
				signatureMove: 'phanchucore',
				evs: {hp:252, atk:252, def:4}, nature: 'Adamant',
			},
			'Irtiza': {
				species: 'Metagross', ability: 'Cute Charm', item: 'Metal Coat', gender: 'F',
				moves: ['meteormash', 'bulletpunch', 'zenheadbutt'],
				signatureMove: 'kawaiiestapu',
				evs: {hp: 252, atk:252, spe:4}, nature: 'Adamant',
			},
			'Muhib': {
				species: 'Honchkrow', ability: 'Speed Boost', item: 'Life Orb', gender: 'M',
				moves: ['protect', 'knockoff', ['mimic', 'nuzzle', 'superpower'][this.random(3)]],
				signatureMove: "reversepika",
				evs: {hp:128, atk:252, spe:128}, nature: 'Adamant',
			},
			'Ikhwan': {
				species: 'Haxorus', ability: 'Prankster', item: 'BrightPowder', gender: 'M',
				moves: ['thunderwave', 'bodyslam', 'ironhead'],
				signatureMove: 'mentaldiseasechampionship',
				evs: {hp:252, def:128, spd:128}, nature: 'Impish',
			},
			'Arifeen': {
				species: 'Landorus-Therian', ability: 'Defiant', item: 'Sharp Beak', gender: 'M',
				moves: ['precipiceblades', 'bravebird', 'stealthrock'],
				signatureMove: 'iamethanbradberry',
				evs: {atk:252, def:128, spe:128}, nature: 'Adamant',
			},
			'Samiul': {
				species: 'Breloom', ability: 'Poison Heal', item: 'Toxic Orb', gender: 'M',
				moves: ['spore', 'substitute', 'focuspunch'],
				signatureMove: 'NIGGACHU',
				evs: {atk:252, def:4, spd:252}, nature: 'Jolly',
			},
			'Swagata': {
				species: 'Alakazam', ability: 'Illusion', item: 'Focus Sash', gender: 'M',
				moves: ['protect', 'psystrike', 'dazzlinggleam'],
				signatureMove: 'tagteam',
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			'Nazmus': {
				species: 'Crawdaunt', ability: 'Protean', item: 'Focus Sash', gender: 'M',
				moves: ['dragondance', 'aquajet', 'suckerpunch'],
				signatureMove: 'shahoshishrimp',
				evs: {atk:252, def:4, spe:252}, nature: 'Adamant',
			},
			'Nazib': {
				species: 'Manaphy', ability: 'Torrent', item: 'Splash Plate', gender: 'M',
				moves: ['heartswap', 'steameruption', 'raindance'],
				signatureMove: 'MANAPHY4EVA',
				evs: {hp:252, spd:128, spe:128}, nature: 'Timid',
			},
			'Seyan': {
				species: 'Scizor', ability: 'Technician', item: 'Leftovers', gender: 'M',
				moves: ['bulletpunch', 'bugbite', ['iceshard', 'machpunch', 'uturn'][this.random(3)]],
				signatureMove: 'supersaiyan',
				evs: {atk:252, def:128, spe:128}, nature: 'Adamant',
			},
			'Uzair': {
				species: 'Raikou', ability: 'Download', item: 'Magnet', gender: 'M',
				moves: ['nastyplot', 'icebeam', 'paraboliccharge'],
				signatureMove: 'heelturn',
				evs: {spa:252, spd:128, spe:128}, nature: 'Modest',
			},
			'Mahi': {
				species: 'Munchlax', ability: 'Fur Coat', item: 'Eviolite', gender: 'M',
				moves: ['curse', 'slackoff', 'extremespeed'],
				signatureMove: 'anatomicalposition',
				evs: {hp:252, def:4, spd:252}, nature: 'Careful',
			},
			'Subarno': {
				species: 'Metagross', ability: 'Hustle', item: 'Air Balloon', gender: 'M',
				moves: ['stoneedge', 'zenheadbutt', 'hijumpkick'],
				signatureMove: 'ofcourseitmissed',
				evs: {atk:252, def:128, spe:128}, nature: 'Jolly',
			},
			'Mehrab': {
				species: 'Prinplup', ability: 'Regenerator', item: 'Eviolite', gender: 'M',
				moves: ['scald', 'wish', 'stealthrock'],
				signatureMove: 'servercontrol',
				evs: {hp:252, def:128, spd:128}, nature: 'Calm',
			},
			'Raiyan': {
				species: 'Gyarados', ability: 'Multiscale', item: 'Gyaradosite', gender: 'M',
				moves: ['substitute', 'icefang', 'crunch'],
				signatureMove: 'givemea3ds',
				evs: {hp:128, atk:128, spe:252}, nature: 'Jolly',
			},
			'Sadavi': {
				species: 'Heracross', ability: 'Guts', item: 'Heracronite', gender: 'M',
				moves: ['pinmissile', 'fakeout', 'watershuriken'],
				signatureMove: 'amaterasu',
				evs: {hp:252, def:128, spd:128}, nature: 'Impish',
			},
			'Saquib': {
				species: 'Exploud', ability: 'Soundproof', item: 'White Herb', gender: 'M',
				moves: ['boomburst', 'overheat', 'chatter'],
				signatureMove: 'youwannabuymymixtapebruh',
				evs: {hp:252, spa:252, spe:4}, nature: 'Modest',
			},
			'Nahin': {
				species: 'Espeon', ability: 'Magic Guard', item: 'Life Orb', gender: 'M',
				moves: ['psychic', 'skillswap', 'taunt'],
				signatureMove: 'suicidecup',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Raihan': {
				species: 'Sableye', ability: 'Magic Bounce', item: 'Rocky Helmet', gender: 'M',
				moves: ['foulplay', 'recover', 'taunt'],
				signatureMove: 'chingchong',
				evs: {hp:252, def:252, spd:4}, nature: 'Impish',
			},
			'FahimAbir': {
				species: 'Pidgeot', ability: 'Sap Sipper', item: 'Pidgeotite', gender: 'M',
				moves: ['airslash', 'uturn', 'defog'],
				signatureMove: 'thedriftwood',
				evs: {hp:248, spa:132, spe:128}, nature: 'Timid',
			},
			'FahimShahriar': {
				species: 'Latios', ability: 'Levitate', item: 'Latiosite', gender: 'M',
				moves: ['psychoshift', 'dragonrush', 'zenheadbutt'],
				signatureMove: 'elitistweeaboo',
				evs: {hp:252, atk:128, spe:128}, nature: 'Adamant',
			},
			'Asim': {
				species: 'Gengar', ability: 'Bad Dreams', item: 'Focus Sash', gender: 'M',
				moves: ['sleeppowder', 'gunkshot', 'toxicspikes'],
				signatureMove: 'trololol',
				evs: {atk:252, spd:4, spe:252}, nature: 'Adamant',
			},
			'Reaz': {
				species: 'Goomy', ability: 'Moody', item: 'Eviolite', gender: 'M',
				moves: ['recover', 'trickroom', 'stickyweb'],
				signatureMove: 'poca',
				evs: {hp:252, def:128, spd:128}, nature: 'Calm',
			},
			'Mehsan': {
				species: 'Lucario', ability: 'Early Bird', item: 'Black Glasses', gender: 'M',
				moves: ['darkpulse', 'vacuumwave', 'flashcannon'],
				signatureMove: 'snarkyfunnycomment',
				evs: {hp:128, spa:252, spe:128}, nature: 'Timid',
			},
			'Shaafi': {
				species: 'Azumarill', ability: 'Cheek Pouch', item: 'Sitrus Berry', gender: 'M',
				moves: ['aquajet', 'waterfall', 'bellydrum'],
				signatureMove: 'fairandroughly',
				evs: {hp:252, atk:252, spe:4}, nature: 'Adamant',
			},
			'Fahad': {
				species: 'Kabutops', ability: 'Drizzle', item: 'Damp Rock', gender: 'M',
				moves: ['swordsdance', 'aqua jet', 'diamondstorm'],
				signatureMove: 'rainsweep',
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'Tahsin': {
				species: 'Cyndaquil', ability: 'Chlorophyll', item: 'Eviolite', gender: 'M',
				moves: ['synthesis', 'weatherball', 'solarbeam'],
				signatureMove: 'rodeladin',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Aunim': {
				species: 'Mr. Mime', ability: 'Truant', item: 'Focus Band', gender: 'M',
				moves: ['quiverdance', 'batonpass', 'lightofruin'],
				signatureMove: 'amakediyekihobe',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Niaz': {
				species: 'Heatran', ability: 'Drought', item: 'Air Balloon', gender: 'M',
				moves: ['protect', 'flashcannon', 'solarbeam'],
				signatureMove: 'lordrastaaz',
				evs: {hp:252, spa:4, spd:252}, nature: 'Calm',
			},
			'Sadman': {
				species: 'Abomasnow', ability: 'Snow Warning', item: 'Abomasite', gender: 'M',
				moves: ['fierydance', 'blizzard', 'iceshard'],
				signatureMove: 'obamacare',
				evs: {hp:248, atk:132, spa:128}, nature: 'Quiet',
			},
			'Shadman': {
				species: 'Luxray', ability: 'Compound Eyes', item: 'Muscle Band', gender: 'M',
				moves: ['boltstrike', 'gunkshot', 'powerwhip'],
				signatureMove: 'fiveknuckleshuffle',
				evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			'Istiaq': {
				species: 'Nidoking', ability: 'Sheer Force', item: 'Soft Sand', gender: 'M',
				moves: ['icebeam', 'earthpower', 'sludgewave'],
				signatureMove: 'monoground',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Tanzeem': {
				species: 'Dragonite', ability: 'Competitive', item: 'Lum Berry', gender: 'M',
				moves: ['roost', 'extremespeed', 'dracometeor'],
				signatureMove: 'emporung',
				evs: {hp:128, atk:252, spa:132}, nature: 'Brave',
			},
			'Shehrooz': {
				species: 'Rhydon', ability: 'Sand Stream', item: 'Eviolite', gender: 'M',
				moves: ['spikes', 'drillrun', 'drillpeck'],
				signatureMove: 'baapershokti',
				evs: {hp:252, atk:128, spd:128}, nature: 'Adamant',
			},
			'Dhiman': {
				species: 'Kangaskhan', ability: 'Scrappy', item: 'Kangaskhanite', gender: 'M',
				moves: ['fakeout', 'flamethrower', ['moonblast', 'thunderbolt', 'earthpower', 'scald'][this.random(4)]],
				signatureMove: 'dimbhaaji',
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			'Marie': {
				species: 'Froslass', ability: 'Snow Cloak', item: 'Focus Sash', gender: 'F',
				moves: ['blizzard', 'destinybond', 'freezedry'],
				signatureMove: 'ijskoud',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Sadiur': {
				species: 'Suicune', ability: 'Natural Cure', item: 'Leftovers', gender: 'M',
				moves: ['surf', 'wish', 'voltswitch'],
				signatureMove: 'haxbanana',
				evs: {hp:252, def:252, spd:4}, nature: 'Bold',
			},
			'Sayad': {
				species: 'Tornadus Therian', ability: 'Cloud Nine', item: 'Leftovers', gender: 'M',
				moves: ['knockoff', 'hurricane', 'defog'],
				signatureMove: 'rko',
				evs: {hp:128, spa:252, spe:128}, nature: 'Mild',
			},
		};

		// Generate the team randomly.
		let pool = Object.keys(sets);
		for (let i = 0; i < 6; i++) {
			let name = this.sampleNoReplace(pool);
			let set = sets[name];
			set.level = 100;
			set.name = name;
			if (!set.ivs) {
				set.ivs = {hp:31, atk:31, def:31, spa:31, spd:31, spe:31};
			} else {
				for (let iv in {hp:31, atk:31, def:31, spa:31, spd:31, spe:31}) {
					set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) set.evs = {hp:84, atk:84, def:84, spa:84, spd:84, spe:84};
			set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			team.push(set);
		}

		return team;
	},
};
