import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Copycat",
		de: "Nachahmerin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		de: "Shuffle your hand into your deck. Then, count the number of cards in your opponent's hand an draw that many cards."
	},

	thirdParty: {
		cardmarket: 276375,
		tcgplayer: 84424
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			stamps: ["set-logo"]
		},
		{
			type: "normal",
			stamps: ["takashi-yoneda"]
		},
		{
			type: "normal",
			stamps: ["michael-gonzalez"]
		},
		{
			type: "normal",
			stamps: ["jeremy-maron"]
		},
		{
			type: "normal",
			stamps: ["hiroki-yano"]
		},
		{
			type: "normal",
			stamps: ["jimmy-ballard"]
		}
	]
}

export default card
