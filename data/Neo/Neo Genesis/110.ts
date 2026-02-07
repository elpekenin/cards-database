import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
		de: "Psychoenergie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 274510,
		tcgplayer: 88414
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamps: ["1st-edition"]
		}
	]
}

export default card
