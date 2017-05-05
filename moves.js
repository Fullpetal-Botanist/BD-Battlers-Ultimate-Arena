"use strict";

exports.BattleMovedex = {
	// Subarno
	ofcourseitmissed: {
		accuracy: 120,
		basePower: 80,
		category: "Physical",
		id: "ofcourseitmissed",
		isNonstandard: true,
		isViable: true,
		name: "Of Course It Missed",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Draco Meteor", target);
			this.add('-anim', source, "Magnet Rise", source);
			this.add('-message', 'Row row fight the powah');
		},
		onHit: function (target, source) {
			if (!(source.volatiles['magnetrise'] || this.pseudoWeather['gravity'])) {
				source.addVolatile('magnetrise');
				this.boost({accuracy: +1}, source, source);
			}
		},
		secondary: false,
		target: "normal",
		type: "Steel",
	},
	// Mahi
	anatomicalposition: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		id: "anatomicalposition",
		isNonstandard: true,
		isViable: true,
		name: "Anatomical Position",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: ['partiallytrapped', 'gastroacid'],
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Body Slam", target);
		},
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
	},	
	// Uzair
	heelturn: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		id: "heelturn",
		isNonstandard: true,
		isViable: true,
		name: "Heel Turn",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Volt Switch", target);
			this.add('-message', 'Watch my new upload!');
		},

		secondary: {
			chance: 100,
			status: 'tox',
		},
		target: "normal",		
		type: "Dark",
	},
	// Seyan
	supersaiyan: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "supersaiyan",
		isNonstandard: true,
		isViable: true,
		name: "Super Saiyan",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
			atk: 1,
			spe: 1
		},
		secondary: false,
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bulk Up", target);
		},
		type: "Fighting",
	},
	// Nazib
	manaphy4eva: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "manaphy4eva",
		isNonstandard: true,
		isViable: true,
		name: "MANAPHY4EVA",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [3, 10],
		boosts: {spa:1, spd:1},
		secondary: false,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Calm Mind", source);
			this.add('-message', 'Mana chan <3');
		},
		target: "self",
		type: "Water",
	},
	// Nazmus
	shahoshishrimp: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		id: "shahoshishrimp",
		isNonstandard: true,
		isViable: true,
		name: "Shahoshi Shrimp",
		pp: 15,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Brave Bird", target);
		},
		recoil: [40, 100],
		secondary: false,
		target: "normal",
		type: "Flying",
	},	
	// Swagata
	tagteam: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		id: "tagteam",
		isNonstandard: true,
		name: "Triple Tag Team Beam",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		secondary: false,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Tri Attack", source);
		},
		target: "normal",
		type: "Fighting",
	},
	// Samiul
	niggachu: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		id: "niggachu",
		isNonstandard: true,
		isViable: true,
		name: "NIGGACHU",
		pp: 5,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, 'Seed Bomb', target);
			this.add('-message', 'Don\'t hate. Appreciate.');
		},
		self: {
			boosts: {
				atk: 1,
			},
		},		
		target: "normal",
		type: "Grass",
	},
	// Arifeen
	iamethanbradberry: {
		accuracy: true,
		basePower: 0,
		id: "iamethanbradberry",
		isViable: true,
		isNonstandard: true,
		name: "I AM ETHAN BRADBERRY",
		pp: 5,
		noPPBoosts: true,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit: function (pokemon) {
			this.attrLastMove('[still]');
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		boosts: {
			atk: 2,
		},
		secondary: false,
		target: "self",
		type: "Flying",
	},
	// Ikhwan
	mentaldiseasechampionship: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "mentaldiseasechampionship",
		isViable: true,
		isNonstandard: true,
		name: "Mental Disease Championship",
		pp: 10,
		priority: 0,
		flags: {mirror: 1, snatch: 1},
		onHit: function (target, source) {
			let dice = this.random(6);
			if (dice === 4) {
				this.add('-message', "No hax this time!");
				this.damage(source.maxhp / 2, source, source, 'mentaldiseasechampionship');
				return false;
			}
			this.useMove('mudslap', source);
			this.useMove('mudslap', source);
		},
		secondary: false,
		target: "self",
		type: "Psychic",
	},
	// Muhib
	reversepika: {
		accuracy: true,
		basePower: 90,
		category: "Physical",
		id: "reversepika",
		isNonstandard: true,
		name: "Reverse Pika",
		pp: 10,
		priority: 0,
		critRatio: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBeforeMove: function (source, target, move) {
			move.hits = 0;
		},
		onTryHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Thunderbolt", target);
			this.add('-message', 'Everyone\'s got a song inside , waitin\' to be free! The beans are here to show the way, come on and follow me');
		},
		onEffectiveness: function (typeMod) {
			return -typeMod;
		},
		target: "normal",
		type: "Electric",
	},
	// Irtiza
	kawaiiestapu: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "kawaiiestapu",
		isViable: true,
		isNonstandard: true,
		name: "Kawaiiest Apu",
		pp: 10,
		priority: 0,
		flags: {mirror: 1, snatch: 1},
		onHit: function (target, source) {
			let dice = this.random(9);
			if (dice === 1) {
				this.add('-message', "Not kawaii enough");
				this.damage(source.maxhp / 2, source, source, 'kawaiiestapu');
				return false;
			}
			this.useMove('charm', source);
			this.useMove('captivate', source);
			this.useMove('confuseray', source);

		},
		secondary: false,
		target: "self",
		type: "Fairy",
	},
	// Shaafique
	phanchucore: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "phanchucore",
		isViable: true,
		isNonstandard: true,
		name: "Phanchu Core",
		pp: 10,
		priority: 0,
		flags: {mirror: 1, snatch: 1},
		onHit: function (target, source) {
			let dice = this.random(9);
			if (dice === 1) {
				this.add('-message', "Cannot beat this combination");
				this.damage(source.maxhp / 2, source, source, 'phanchucore');
				return false;
			}
			this.useMove('endeavor', source);
			this.useMove('volttackle', source);
			this.useMove('nuzzle', source);
		},
		secondary: false,
		target: "self",
		type: "Electric",
	},
	// Salman
	arikwinslol: {
		accuracy: 95,
		basePower: 60,
		category: "Physical",
		id: "arikwinslol",
		isViable: true,
		isNonstandard: true,
		name: "arikwinslol",
		pp: 10,
		priority: 1,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dark Pulse", source);
			this.add('-message', 'you tryna throw hands nigga ? im literally the greatest player of all time after zamrock , foxgod, wish killer , ctc and ikhwan.');
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('embargo');
			pokemon.addVolatile('torment');
		},
		secondary: false,
		target: "normal",
		type: "Dark",
	},
	// Tonmoy
	ilikepie: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		id: "ilikepie",
		isViable: true,
		isNonstandard: true,
		name: "I Like Pie",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		sideCondition: 'spikes',
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Earthquake", target);
		},
		drain: [3, 4],
		secondary: false,
		target: "normal",
		type: "Ground",
	},
	// Mehrab
	servercontrol: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "servercontrol",
		isNonstandard: true,
		name: "Server Control",
		pp: 1,
		noPPBoosts: true,
		priority: 5,
		flags: {reflectable: 1, sound: 1, authentic: 1},
		volatileStatus: 'flinch',
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Judgment", target);
		},
		onHit: function (pokemon, source) {
			this.add('-message', 'Currently editing the server\'s scripts');
			let newMoves = ['boomburst', 'flamethrower', 'freezedry', 'thunderbolt', 'steameruption', 'gigadrain', 'bugbuzz',
				'darkpulse', 'psychic', 'shadowball', 'flashcannon', 'dragonpulse', 'moonblast', 'focusblast', 'aeroblast',
				'earthpower', 'sludgebomb', 'paleowave', 'bodyslam', 'flareblitz', 'iciclecrash', 'volttackle', 'waterfall',
				'leafblade', 'xscissor', 'knockoff', 'shadowforce', 'ironhead', 'outrage', 'playrough', 'closecombat',
				'bravebird', 'earthquake', 'stoneedge', 'extremespeed', 'stealthrock', 'spikes', 'toxicspikes', 'stickyweb',
				'quiverdance', 'shellsmash', 'dragondance', 'recover', 'toxic', 'willowisp', 'leechseed',
			];
			for (let i = 0; i < pokemon.moveset.length; i++) {
				let moveData = Tools.getMove(this.sampleNoReplace(newMoves));
				let moveBuffer = {
					move: moveData.name,
					id: moveData.id,
					pp: moveData.pp,
					maxpp: moveData.pp,
					target: moveData.target,
					disabled: false,
					used: false,
				};
				pokemon.moveset[i] = moveBuffer;
				pokemon.baseMoveset[i] = moveBuffer;
				pokemon.moves[i] = toId(moveData.name);
			}
		},
		secondary: false,
		target: "normal",
		type: "Normal",
	},
	// Raiyan
	givemea3ds: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		id: "givemea3ds",
		isViable: true,
		isNonstandard: true,
		name: "Give me a 3DS",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bite", target);
		},
		secondary: {
			chance: 50,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Water",
	},
	// Sadavi
	amaterasu: {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		id: "amaterasu",
		isViable: true,
		isNonstandard: true,
		name: "Amaterasu",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 5,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Pin Missile", target);
		},
		secondary: {
			chance: 60,
			volatileStatus: 'burn',
		},
		target: "normal",
		type: "Fire",
	},
	// Saquib
	youwannabuymymixtapebruh: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		id: "youwannabuymymixtapebruh",
		isViable: true,
		isNonstandard: true,
		name: "You Wanna Buy My Mixtape Bruh",
		pp: 5,
		priority: 0,
		flags: {sound: 1, mirror: 1, authentic: true},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Relic Song", target);
			this.add('-message', 'My mixtape is fire');
		},
		onHit: function (target, source) {
			target.addVolatile('confusion');
		},
		secondary: {
			chance: 80,
			status: 'brn',
		},
		self: {boosts: {spa: +1}},
		target: "normal",
		type: "Psychic",
	},
	// Nahin
	suicidecup: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "suicidecup",
		isNonstandard: true,
		isViable: true,
		name: "Suicide Cup",
		pp: 1,
		priority: 2,
		flags: {authentic: 1},
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			if (!this.canSwitch(source.side)) {
				delete move.selfdestruct;
				return false;
			}
			this.add('-anim', source, "Torment", source);
			this.add('-anim', source, "Grudge", source);
			this.add('-anim', source, "Explosion", source);
		},
		self: {sideCondition: 'suicidecup'},
		effect: {
			duration: 2,
			onStart: function (side, source) {
				side.addSideCondition('lunardance', source);
			},
			onSwitchIn: function (pokemon) {
				pokemon.side.removeSideCondition('ofcurse');
			},
			onEnd: function (side) {
				const foes = side.foe.active;
				if (side.active.length && side.active[0].hp && foes.length && foes[0].hp) {
					foes[0].addVolatile('trapped', side.active[0], 'meanlook', 'trapper');
				}
			},
		},
		boosts: {
			atk: -2,
			spa: -2,
		},
		selfdestruct: true,
		secondary: false,
		target: "normal",
		type: "Psychic",
	},
	// Raihan
	chingchong: {
		accuracy: 100,
		basePower: 30,
		category: "Status",
		id: "chingchong",		
		isViable: true,
		isNonstandard: true,
		name: "Ching Chong",
		pp: 5,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		onHit: function (target) {
			if (!target.setType('Ghost')) return false;
			this.add('-start', target, 'typechange', 'Ghost');
		},
		secondary: false,
		target: "normal",
		type: "Ghost",
	},
	// Fahim Abir
	thedriftwood: {
		accuracy: 70,
		basePower: 100,
		category: "Special",
		id: "thedriftwood",
		isViable: true,
		isNonstandard: true,
		name: "The Driftwood",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hurricane", target);
		},
		secondary: {
			chance: 100,
			onHit: function (target, source) {
				if (this.random(10) < 5) target.trySetStatus('tox', source);
				if (this.random(10) < 5) target.addVolatile('confusion', source);
			},
		},
		target: "normal",
		type: "Grass",
	},
	// Fahim Shahriar
	elitistweeaboo: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "elitistweeaboo",
		isNonstandard: true,
		isViable: true,
		name: "Elitist Weeaboo",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			accuracy: 2,
			atk: 1,
		},
		secondary: false,
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dragon Dance", target);
		},
		type: "Dragon",
	},
	// Asim
	trololol: {
		accuracy: 100,
		basePower: 80,
		basePowerCallback: function (pokemon, target, move) {
			if (target.status) return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
		id: "trololol",
		isViable: true,
		isNonstandard: true,
		name: "trololol",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", target);
		},
		secondary: false,
		target: "normal",
		type: "Ghost",
	},
	// Reaz
	poca: {
		accuracy: true,
		basePower: 250,
		category: "Special",
		id: "poca",
		isNonstandard: true,
		isViable: true,
		name: "poca",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Night Shade", source);
			this.add('-anim', source, "Wish", source);
			this.add('-anim', source, "Draco Meteor", target);
			this.add('-message', 'LORD GOOMY OUR SAVIOR');
		},
		onHit: function (target, source) {
			if (!source.volatiles['substitute'] && source.hp > source.maxhp / 4 && source.addVolatile('substitute', source)) {
				this.directDamage(source.maxhp / 4, source, source);
			}
		},
		self: {
			boosts: {
				spa: -6,
				def: -6,
				spd: -6,
			},
		},
		secondary: false,
		target: "normal",
		type: "Dragon",
	},
	// Mehsan
	snarkyfunnycomment: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		id: "snarkyfunnycomment",
		isNonstandard: true,
		isViable: true,
		name: "Snarky Funny Comment",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', target, "Taunt", target);
		},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Dark",
	},
	// Fahad
	rainsweep: {
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		id: 'rainsweep',
		isViable: true,
		isNonstandard: true,
		name: "Rain Sweep",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit: function (target, source) {
			let oldAbility = source.setAbility('swiftswim');
			if (oldAbility) {
				this.add('-ability', source, this.getAbility(source.ability).name, '[from] move: Rain Sweep', '[of] ' + target);
			}
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Aqua Tail", target);
		},
		secondary: false,
		target: "normal",
		type: "Water",
	},
	// Tahsin
	rodeladin: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "rodeladin",
		isViable: true,
		isNonstandard: true,
		name: "Rodela Din",
		pp: 10,
		noPPBoosts: true,
		priority: 4,
		flags: {sound: 1},
		self: {boosts: {spa:1}},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit: function (pokemon) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Sunny Day", pokemon);
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onTryHit: function () {
			this.setWeather("sunnyday");
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		secondary: false,
		target: "self",
		type: "Fire",
	},
	// Aunim
	amakediyekihobe: {
		accuracy: 90,
		basePower: 250,
		category: "Special",
		id: "amakediyekihobe",
		isNonstandard: true,
		isViable: true,
		name: "Amake diye ki hobe",
		pp: 1,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		ignoreImmunity: {'Psychic': true},
		onPrepareHit: function (target, source) {
			if (toId(source.name) === 'aunim') {
				this.add('c|Aunim| :( ');
			}
			this.attrLastMove('[still]');
			this.add('-anim', source, "Cosmic Power", source);
			this.add('-anim', source, "Explosion", source);
			this.add('-anim', source, "Light of Ruin", target);
		},
		onAfterMoveSecondarySelf: function (source, target) {
			let removeTarget = {reflect:1, lightscreen:1, safeguard:1, mist:1, spikes:1, toxicspikes:1, burnspikes:1, stealthrock:1, stickyweb:1};
			let removeAll = {spikes:1, toxicspikes:1, stealthrock:1, stickyweb:1};
			for (let targetCondition in removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll[targetCondition]) continue;
					this.add('-sideend', target.side, this.getEffect(targetCondition).name, '[from] move: Defog', '[of] ' + target);
				}
			}
			for (let sideCondition in removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.getEffect(sideCondition).name, '[from] move: Defog', '[of] ' + source);
				}
			}
		},
		selfdestruct: true,
		secondary: false,
		target: "allAdjacentFoes",
		type: "Psychic",
	},
	// Niaz
	lordrastaaz: {
		accuracy: 80,
		basePower: 110,
		category: "Special",
		id: "lordrastaaz",
		isViable: true,
		isNonstandard: true,
		name: "Lord Rastaaz",
		pp: 20,
		priority: -2,
		flags: {protect: 1, mirror: 1, authentic: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Eruption", source);
		},
		forceSwitch: true,
		sideCondition: 'lordrastaaz',
		self: {
			forceSwitch: true,
			sideCondition: 'lordrastaaz',
		},
		effect: {
			onSwitchIn: function (pokemon) {
				pokemon.side.removeSideCondition('lordrastaaz');
			},
			onResidual: function (side) {
				if (side.active.length && side.active[0].hp) side.removeSideCondition('lordrastaaz');
			},
			onEnd: function (side) {
				if (side.active.length && side.active[0].hp) {
					side.active[0].addVolatile('taunt', side.active[0]);
				}
			},
		},
		secondary: false,
		target: "normal",
		type: "Fire",
	},
	// Sadman
	obamacare: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "obamacare",
		isNonstandard: true,
		isViable: true,
		name: "Obamacare",
		pp: 5,
		priority: 1,
		flags: {snatch: 1},
		beforeTurnCallback: function (pokemon) {
			this.boost({spd: 1, spe: -1}, pokemon, pokemon, 'obamacare');
		},
		onHit: function (pokemon) {
			this.useMove("leechseed", pokemon);
			this.useMove("aromatherapy", pokemon);
		},
		secondary: false,
		target: "self",
		type: "Ice",
	},
	// Shadman
	fiveknuckleshuffle: {
		accuracy: 90,
		basePower: 50, 
		category: "Physical",
		id: "fiveknuckleshuffle",
		isViable: true,
		isNonstandard: true,
		name: "Five Knuckle Shuffle",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		boosts: {accuracy: -1},
		self: {boosts: {spe: 1}},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Minimize", target);
			this.add('-message', 'You can\'t see me');
		},
		secondary: false,
		target: "normal",
		type: "Fighting",
	},
	// Istiaq
	monoground: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "monoground",
		isNonstandard: true,
		isViable: true,
		name: "Mono Ground",
		pp: 20,
		priority: 0,
		flags: {mirror: 1, gravity: 1},
		onHit: function (target, source) {
			if (this.pseudoWeather['monoground']) {
				this.removePseudoWeather('monoground', source);
			} else {
				this.addPseudoWeather('monoground', source);
			}
			let removeTarget = {reflect:1, lightscreen:1, safeguard:1, mist:1, spikes:1, toxicspikes:1, burnspikes:1, stealthrock:1, stickyweb:1};
			let removeAll = {spikes:1, toxicspikes:1, burnspikes:1, stealthrock:1, stickyweb:1};
			for (let targetCondition in removeTarget) {
				let foe = source.side.foe;
				if (foe.removeSideCondition(targetCondition)) {
					if (!removeAll[targetCondition]) continue;
					this.add('-sideend', foe, this.getEffect(targetCondition).name, '[from] move: Defog', '[of] ' + foe.active[0]);
				}
			}
			for (let sideCondition in removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.getEffect(sideCondition).name, '[from] move: Defog', '[of] ' + source);
				}
			}
		},
		effect: {
			duration: 4,
			onStart: function () {
				this.add('message', 'All active Pokemon became pure Ground-type!');
				for (let s in this.sides) {
					const thisSide = this.sides[s];
					for (let p in thisSide.active) {
						const pokemon = thisSide.active[p];
						if ((pokemon.types[0] === 'Ground' && !pokemon.types[1]) || !pokemon.hp) continue;
						pokemon.setType('Ground', true);
						this.add('-start', pokemon, 'typechange', 'Ground');
					}
				}
			},
			onResidualOrder: 90,
			onUpdate: function (pokemon) {
				if ((pokemon.types[0] === 'Ground' && !pokemon.types[1]) || !pokemon.hp) return;
				pokemon.setType('Ground', true);
				this.add('-start', pokemon, 'typechange', 'Ground');
			},
			onSwitchIn: function (pokemon) {
				if ((pokemon.types[0] === 'Ground' && !pokemon.types[1]) || !pokemon.hp) return;
				pokemon.setType('Ground', true);
				this.add('-start', pokemon, 'typechange', 'Ground');
			},
			onEnd: function () {
				this.add('message', 'Active Pokemon are no longer forced to be pure Ground-type.');
				for (let s in this.sides) {
					const thisSide = this.sides[s];
					for (let p in thisSide.active) {
						const pokemon = thisSide.active[p];
						if ((pokemon.types[0] === 'Ground' && !pokemon.types[1]) || !pokemon.hp) continue;
						pokemon.setType(pokemon.template.types, true);
						this.add('-end', pokemon, 'typechange');
					}
				}
			},
		},
		secondary: false,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Fissure", source);
		},
		target: "self",
		type: "Ground",
	},
	// Tanzeem
	emporung: {
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		id: "emporung",
		isViable: true,
		isNonstandard: true,
		name: "Emporung",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, 'Outrage', target);
		},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove: function (pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		target: "randomNormal",
		type: "Flying",
	},
	// Shehrooz
	baapershokti: {
		accuracy: 100,
		basePower: 80, 
		category: "Physical",
		id: "baapershokti",
		isNonstandard: true,
		isViable: true,
		name: "Baap er shokti",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {boosts: {def: 2}},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Iron Defense", target);
		},
		secondary: false,
		target: "normal",
		type: "Rock",
	},
	// Dhiman
	dimbhaaji: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "dimbhaaji",
		isViable: true,
		isNonstandard: true,
		name: "Dim Bhaaji",
		pp: 10,
		priority: 0,
		flags: {heal: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Softboiled", target);
		},
		onHit: function (target) {
			let stats = [];
			for (let stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				let randomStat = stats[this.random(stats.length)];
				let boost = {};
				boost[randomStat] = 1;
				this.boost(boost);
			} else {
				return false;
			}
		},
		heal: [2, 10],
		secondary: false,
		target: "self",
		type: "Normal",
	},
	// Marie
	ijskoud: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "ijskoud",
		isNonstandard: true,
		isViable: true,
		name: "Ijskoud",
		pp: 5,
		priority: 2,
		flags: {snatch: 1},
		beforeTurnCallback: function (pokemon) {
			this.boost({def: 1, spd: 1}, pokemon, pokemon, 'ijskoud');
		},
		onHit: function (pokemon) {
			this.useMove("hail", pokemon);
			this.useMove("sub", pokemon);
		},
		secondary: false,
		target: "self",
		type: "Ice",
	},
	// Sadiur
	haxbanana: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "haxbanana",
		isNonstandard: true,
		isViable: true,
		name: "Hax Banana",
		pp: 5,
		noPPBoosts: true,
		priority: 1,
		self: {volatileStatus: 'magiccoat'},
		flags: {},
		onPrepareHit: function () {
			this.attrLastMove('[still]');
		},
		onHit: function (target, source) {
			source.side.addSideCondition('mist', source);
			source.side.addSideCondition('luckychant', source);
			source.side.addSideCondition('safeguard', source);
		},
		secondary: false,
		target: "self",
		type: "Water",
	},
	// Sayad
	rko: {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		id: "rko",
		isNonstandard: true,
		isViable: true,
		name: "RKO",
		pp: 10,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		hasCustomRecoil: true,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Poison Fang", target);
		},
		secondary: {
			chance: 65,
			status: 'par',
		},
		target: "normal",
		type: "Poison",
	},
	// Shaafi
	fairandroughly: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		id: "fairandroughly",
		isViable: true,
		isNonstandard: true,
		name: "Fair And Roughly",
		pp: 10,
		priority: 0,
		flags: {contact:1, protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', target, "Play Rough", target);
		},
		secondary: {
			chance: 50,
			boosts: {	
				atk: -1,
			},
		},
		target: "Normal",
		type: "Fairy",
	},
};
