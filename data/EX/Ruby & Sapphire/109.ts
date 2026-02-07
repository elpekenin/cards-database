import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Énergie Électrique",
		de: "Elektroenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 275757,
		tcgplayer: 86761
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
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamps: ["professor-program"]
		},
		{
			type: "normal",
			stamps: ["chris-fulop"]
		},
		{
			type: "normal",
			stamps: ["kevin-nguyen"]
		}
	]
}

export default card
