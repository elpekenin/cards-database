import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Roseanne's Research",
		fr: "La recherche de Rose",
		de: "Roxanas Nachforschungen"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez dans votre deck n'importe quelle combinaison de jusqu'à 2 Pokémon de base et cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach bis zu 2 Karten in beliebiger Kombination aus Basis-Pokémon- und Basis-Energiekarten. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277878,
		tcgplayer: 88815
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "reverse",
			foil: "league"
		},
		{
			type: "normal",
			stamps: ["paul-atanassov"]
		},
		{
			type: "normal",
			stamps: ["dylan-lefavour"]
		},
		{
			type: "normal",
			stamps: ["tristan-robinson"]
		},
		{
			type: "normal",
			stamps: ["jason-klaczynski"]
		},
		{
			type: "normal",
			stamps: ["tsubasa-nakamura"]
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
		}
	]
}

export default card
