import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Night Maintenance",
		fr: "Maintenance nocturne",
		de: "Nächtliche Wartung"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez dans votre pile de défausse une combinaison de jusqu'à 3 Pokémon et cartes Énergie de base. Montrez-les à votre adversaire et mélangez-les à votre deck.",
		de: "Durchsuche deinen Ablagestapel nach bis zu 3 Karten in beliebiger Kombination aus Pokémon- und Basis-Energiekarten. Zeige sie deinem Gegner und mische sie in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277873,
		tcgplayer: 87751
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamps: ["dylan-lefavour"]
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
