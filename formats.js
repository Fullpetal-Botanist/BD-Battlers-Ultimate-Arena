	{
		name: "BD Battlers Ultimate Arena",
		desc: ["BATTLE BEGIN!"],
		section: "BD Tiers",

		mod: 'bdarena',
		team: 'randomBDArena',
		ruleset: ['Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onBegin: function () {
			this.add("raw|You suddenly turned into a Pokémon…<b>FIGHTTT!!!</b>!!");
			this.add('message', "TRIUMPH OVER YOUR FELLOW BATTLER!");

			let globalRenamedMoves = {};
			let customRenamedMoves = {};

			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				let last = pokemon.moves.length - 1;
				if (pokemon.moves[last]) {
					pokemon.moves[last] = toId(pokemon.set.signatureMove);
					pokemon.moveset[last].move = pokemon.set.signatureMove;
					pokemon.baseMoveset[last].move = pokemon.set.signatureMove;
				}
				for (let j = 0; j < pokemon.moveset.length; j++) {
					let moveData = pokemon.moveset[j];
					if (globalRenamedMoves[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = globalRenamedMoves[moveData.id];
						pokemon.baseMoveset[j].move = globalRenamedMoves[moveData.id];
					}

					let customRenamedSet = customRenamedMoves[toId(pokemon.name)];
					if (customRenamedSet && customRenamedSet[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = customRenamedSet[moveData.id];
						pokemon.baseMoveset[j].move = customRenamedSet[moveData.id];
					}
				}
			}
		},
		// Here we treat many things, read comments inside for information.
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			let name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			// Edgy switch-in sentences go here.
			// Sentences vary in style and how they are presented, so each Pokémon has its own way of sending them.
			let sentences = [];
			let sentence = '';

			if (name === 'tonmoy') {
				this.add('c|Tonmoy|Please read the doc carefully before asking questions.');
			}
			if (name === 'salman') {
				this.add('c|Salman|Have you seen Chef ? it\'s by Jon Favreau');
			}
			if (name === 'shaafique') {
				this.add('c|Shaafique|Phanpy and Pikachu for Ubers');
			}
			if (name === 'irtiza') {
				this.add('c|Irtiza|I am not actually an apu');
			}
			if (name === 'muhib') {
				this.add('c|Muhib|New GXE!');
			}
			if (name === 'ikhwan') {
				this.add('c|Ikhwan|Gardewaifu is best waifu');
			}
			if (name === 'arifeen') {
				this.add('c|Arifeen|ITSJUSTAPRANKBRO');
			}
			if (name === 'samiul') {
				this.add('c|Samiul|NIGGACHU I CHOOSE YOU');
			}
			if (name === 'nazmus') {
				this.add('c|Nazmus|Keldeos = Victory');
			}
			if (name === 'nazib') {
				this.add('c|Nazib|Manaphy <3');
			}
			if (name === 'seyan') {
				this.add('c|Seyan|Reacting to a Scizorite');
			}
			if (name === 'uzair') {
				this.add('c|Uzair|The Uzigunner back again with another GPC match. Will the Bangla Wash take the trophy this time? Or will we face utter defeat? What will happen? FIND OUT NOW!');
			}
			if (name === 'mahi') {
				this.add('c|Mahi|Anatomy sucks');
			}
			if (name === 'subarno') {
				this.add('c|Subarno|Have fun, no hax please');
			}
			if (name === 'shehrooz') {
				this.add('c|Shehrooz|Tor baaap jitbe');
			}
			if (name === 'sadavi') {
				this.add('c|Sadavi|Hi I spread weebism');
			}
			if (name === 'reaz') {
				this.add('c|Reaz|rofl ur not even on my level ur actually i cud 1v6 u wiith 0 pokamons');
			}
			if (name === 'marie') {
				this.add('c|Marie|shark ^^');
			}
			if (name === 'raiyan') {
				this.add('c|Raiyan|Here to make Seyan lose');
			}
			if (name === 'saquib') {
				this.add('c|Saquib|I am a spiritual lyrical individual miracle');
			}
			if (name === 'nahin') {
				this.add('c|Nahin|Can Espeon get some boost please?');
			}
			if (name === 'raihan') {
				this.add('c|Raihan|Journey to Top 10 Ubers continues');
			}
			if (name === 'fahimabir') {
				this.add('c|FahimAbir|Dota 2 is the best game ever');
			}
			if (name === 'fahimshahriar') {
				this.add('c|FahimShahriar|M-8 Start Temen-Ni-Gru Dive - DMC 3 Soundtrack. Makes me wanna murder shit.');
			}
			if (name === 'asim') {
				this.add('c|Asim|appy nyc lagca');
			}
			if (name === 'mehsan') {
				this.add('c|Mehsan|I am the Professor Utonium of memes. Been memeing day and night, but then I added an extra ingredient to the concoction... Chemical Dank! And this came to be.');
			}
			if (name === 'shaafi') {
				this.add('c|Shaafi|100% engineer');
			}
			if (name === 'fahad') {
				this.add('c|Fahad|Lets just have a good clean game');
			}
			if (name === 'tahsin') {
				this.add('c|Tahsin|Describing myself? A person is not what he describes himself as, but what others see of him.');
			}
			if (name === 'aunim') {
				this.add('c|Aunim|Just because we cannot achieve absolute perfection does not we should not strive to reduce the amount of imperfection in our lives.');
			}
			if (name === 'niaz') {
				this.add('c|Niaz|Rumorz in the streetz do not lie');
			}
			if (name === 'sadman') {
				this.add('c|Sadman|Vote for me I am the Republican version of Obama');
			}
			if (name === 'shadman') {
				this.add('c|Shadman|AND HIS NAME IS JOHN CENAAAAAA *trumpets*');
			}
			if (name === 'istiaq') {
				this.add('c|Istiaq|Ground-types 4 lief');
			}
			if (name === 'tanzeem') {
				this.add('c|Tanzeem|Viel Gluck');
			}
			if (name === 'dhiman') {
				this.add('c|Dhiman|Ami to khela bhule gesi');
			}
			if (name === 'sadiur') {
				this.add('c|Sadiur|Amar Suicune er jol dekhte kalo, chaan korite lage bhalo');
			}
			if (name === 'sayad') {
				this.add('c|Sayad|Its a new day yes it is');
			}
		},
		onFaint: function (pokemon, source, effect) {
			let name = toId(pokemon.name);

			if (name === 'tonmoy') {
				pokemon.side.addSideCondition('healingwish', pokemon, this);
			}
			// Add here salty tears, that is, custom faint phrases.
			let sentences = [];
			// This message is different from others, as it triggers when
			// opponent faints
			if (source && source.name === 'galbia') {
				this.add('c|@galbia|literally 2HKOged');
			}
			// Actual faint phrases
			if (name === 'tonmoy') {
				this.add('c|Tonmoy|You just didn\'t get the pun');
			}
			if (name === 'salman') {
				this.add('c|Salman|Whats the point of having skill when inferior players use luck to win. Sigh');
			}
			if (name === 'shaafique') {
				this.add('c|Shaafique|Join my next tour!');
			}
			if (name === 'irtiza') {
				this.add('c|Irtiza|For the last time… I am a guy');
			}
			if (name === 'muhib') {
				this.add('c|Muhib|At least Arik didn\'t win');
			}
			if (name === 'ikhwan') {
				this.add('c|Ikhwan|Eviolite Staravia counters Scizor');
			}
			if (name === 'arifeen') {
				this.add('c|Arifeen|BRB killing myself');
			}
			if (name === 'samiul') {
				this.add('c|Samiul|NIGGACHU HOW COULD YOU');
			}
			if (name === 'swagata') {
				this.add('c|Swagata|Tossed on neck');
			}
			if (name === 'nazmus') {
				this.add('c|Nazmus|Papa Franku > You');
			}
			if (name === 'nazib') {
				this.add('c|Nazib|Why does this Manaphy set not have Tail Glow or Ice Beam?');
			}
			if (name === 'seyan') {
				this.add('c|Seyan|Mega Scizor fainted');
			}
			if (name === 'uzair') {
				this.add('c|Uzair|What else can I expect from a shitty opponent? Absolute garbage. P.S. This is nothing more than a character. Everyone in the GPC is a fren of mine');
			}
			if (name === 'mahi') {
				this.add('c|Mahi|Anatomy still sucks');
			}
			if (name === 'subarno') {
				this.add('c|Subarno|OF COURSE! HAX! I AM DONE! DONE!');
			}
			if (name === 'raiyan') {
				this.add('c|Raiyan|I would have won if I had a 3DS!');
			}
			if (name === 'sadavi') {
				this.add('c|Sadavi|Naruto and Hinata best couple. No competition.');
			}
			if (name === 'saquib') {
				this.add('c|Saquib|Mixtape too hot to handle');
			}
			if (name === 'nahin') {
				this.add('c|Nahin|I could not think of anything to make Espeon better!');
			}
			if (name === 'raihan') {
				this.add('c|Raihan|*Something in unreadable Chinese*');
			}
			if (name === 'fahimabir') {
				this.add('c|FahimAbir|Don\'t feed and waste my mmr');
			}
			if (name === 'fahimshahriar') {
				this.add('c|FahimShahriar|Haven\'t played in a long time. Was bound to lose.');
			}
			if (name === 'asim') {
				this.add('c|Asim|lulz???');
			}
			if (name === 'reaz') {
				this.add('c|goomy fail|ur team is bad and u should feel bad');
			}
			if (name === 'mehsan') {
				this.add('c|Mehsan|Gentlemen, let us put arikdoesnotrox where he belongs: the trash. This group is too precious for the likes of him.');
			}
			if (name === 'shaafi') {
				this.add('c|Shaafi|I tried my best. No regrets.');
			}
			if (name === 'fahad') {
				this.add('c|Fahad|This game is always about 50-50. It is okay. Enjoyed the match.');
			}
			if (name === 'tahsin') {
				this.add('c|Tahsin|Now to go back to problem solving with a freed mind.');
			}
			if (name === 'aunim') {
				this.add('c|Aunim|I suck');
			}
			if (name === 'niaz') {
				this.add('c|Niaz|shantu sux');
				this.add('c|Reaz|poca');
			}
			if (name === 'sadman') {
				this.add('c|Sadman|You may be eligible for new tax credits');
			}
			if (name === 'shadman') {
				this.add('c|Shadman|Oh the sweet refrain. Soothes the soul and calms the pain. Oh Albion remains, sleeping now to rise again.');
			}
			if (name === 'istiaq') {
				this.add('c|Istiaq|Now taking art and gen commissions');
			}
			if (name === 'tanzeem') {
				this.add('c|Tanzeem|gute Partie');
			}
			if (name === 'shehrooz') {
				this.add('c|Shehrooz|Tor baaap re marli?');
			}
			if (name === 'dhiman') {
				this.add('c|Dhiman|Eh eh ki hoilo pari na');
			}
			if (name === 'marie') {
				this.add('c|Marie|i crie ;-;');
			}
			if (name === 'sadiur') {
				this.add('c|Sadiur|Prem er mora jol e dube na');
			}
			if (name === 'sayad') {
				this.add('c|Sayad|Booty-O-flavored cereals at a store near you');
			}
		},
	},
