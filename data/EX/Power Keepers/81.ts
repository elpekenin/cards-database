import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Scott",
		fr: "Scott",
		de: "Scott"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck une combinaison de jusqu'à 3 cartes Supporter et cartes Stade, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach bis zu 3 Karten in beliebiger Kombination aus Unterstützerkarten und Stadion-Karten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 277387,
		tcgplayer: 88976
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamps: ["set-logo"]
		},
		{
			type: "normal",
			stamps: ["tom-roos"]
		},
		{
			type: "normal",
			stamps: ["jeremy-scharff-kim"]
		},
		{
			type: "normal",
			stamps: ["paul-atanassov"]
		},
		{
			type: "normal",
			stamps: ["tristan-robinson"]
		}
	]
}

export default card
