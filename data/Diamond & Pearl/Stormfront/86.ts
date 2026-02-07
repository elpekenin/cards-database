import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Luxury Ball",
		fr: "Luxe Ball",
		de: "Luxusball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez un Pokémon dans votre deck (Pokémon NIV.X exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Si Luxe Ball se trouve dans votre pile de défausse, vous ne pouvez pas jouer cette carte.",
		de: "Durchsuche dein Deck nach 1 Pokémon-Karte (außer Pokémon LV.X), zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Wenn sich mindestens 1 Luxusball in deinem Ablagestapel befindet, kannst du diese Karte nicht spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278384,
		tcgplayer: 86953
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamps: ["stephen-silvestro"]
		},
		{
			type: "normal",
			stamps: ["jason-martinez"]
		},
		{
			type: "normal",
			stamps: ["david-cohen"]
		},
		{
			type: "normal",
			stamps: ["michael-pramawat"]
		},
		{
			type: "normal",
			stamps: ["yuta-komatsuda"]
		},
		{
			type: "normal",
			stamps: ["yuka-furusawa"]
		},
	]
}

export default card
