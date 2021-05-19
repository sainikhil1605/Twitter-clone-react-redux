import profile from "./profile.jpg";
import scarlet from "./scarlett.png";
import background from "../assets/background.jpeg";
import background2 from "../assets/background2.jpeg";
import tom from "./tom.jpg";
let users = {
	scarlett_johansson: {
		id: "scarlett_johansson",
		name: "Scarlett Johansson",
		avatarURL: scarlet,
		tweets: [
			"8xf0y6ziyjabvozdd253nd",
			"hbsc73kzqi75rg7v1e0i6a",
			"2mb6re13q842wu8n106bhk",
			"6h5ims9iks66d4m7kqizmv",
			"3sklxkf9yyfowrf0o1ftbb",
		],
		about: "Scarlett Here",
		background: background,
	},
	robert_downey_jr: {
		id: "robert_downey_jr",
		name: "Robert Downey Jr",
		// avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
		avatarURL: profile,
		tweets: [
			"5c9qojr2d1738zlx09afby",
			"f4xzgapq7mu783k9t02ghx",
			"nnvkjqoevs8t02lzcc0ky",
			"4pt0px8l0l9g6y69ylivti",
			"fap8sdxppna8oabnxljzcv",
			"leqp4lzfox7cqvsgdj0e7",
			"26p5pskqi88i58qmza2gid",
			"xi3ca2jcfvpa0i3t4m7ag",
		],
		about: "You Know Who I am",
		background: background,
	},
	tom_holland: {
		id: "tom_holland",
		name: "Tom Holland",
		avatarURL: tom,
		tweets: [
			"5w6k1n34dkp1x29cuzn2zn",
			"czpa59mg577x1oo45cup0d",
			"omdbjl68fxact38hk7ypy6",
			"3km0v4hf1ps92ajf4z2ytg",
			"njv20mq7jsxa6bgsqc97",
			"sfljgka8pfddbcer8nuxv",
			"r0xu2v1qrxa6ygtvf2rkjw",
		],
		about: "I am Spider Man",
		background: background2,
	},
};

let tweets = {
	"8xf0y6ziyjabvozdd253nd": {
		id: "8xf0y6ziyjabvozdd253nd",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro temporibus aut quos distinctio necessitatibus vel suscipit iusto tempora, perspiciatis asperiores officiis pariatur reprehenderit laborum ipsum quidem illo quia sint!",
		author: "scarlett_johansson",
		timestamp: 1621236816042,
		likes: ["robert_downey_jr"],
		replies: ["fap8sdxppna8oabnxljzcv", "3km0v4hf1ps92ajf4z2ytg"],
		replyingTo: null,
	},
	"5c9qojr2d1738zlx09afby": {
		id: "5c9qojr2d1738zlx09afby",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim nobis eligendi asperiores error harum nam beatae odio tenetur sapiente.",
		author: "robert_downey_jr",
		timestamp: 1621236400000,
		likes: ["scarlett_johansson", "tom_holland"],
		replies: ["njv20mq7jsxa6bgsqc97"],
		replyingTo: null,
	},
	f4xzgapq7mu783k9t02ghx: {
		id: "f4xzgapq7mu783k9t02ghx",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim nobis eligendi asperiores error harum nam beatae odio tenetur sapiente.",
		author: "robert_downey_jr",
		timestamp: 1621236451017,
		likes: ["tom_holland"],
		replies: [],
		replyingTo: null,
	},
	hbsc73kzqi75rg7v1e0i6a: {
		id: "hbsc73kzqi75rg7v1e0i6a",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia.",
		author: "scarlett_johansson",
		timestamp: 1621236451017,
		likes: ["robert_downey_jr"],
		replies: ["leqp4lzfox7cqvsgdj0e7", "sfljgka8pfddbcer8nuxv"],
		replyingTo: null,
	},
	"5w6k1n34dkp1x29cuzn2zn": {
		id: "5w6k1n34dkp1x29cuzn2zn",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci quisquam non neque sapiente possimus odit reiciendis eos ut explicabo?",
		author: "tom_holland",
		timestamp: 1621236451017,
		likes: ["scarlett_johansson"],
		replies: [],
		replyingTo: null,
	},
	czpa59mg577x1oo45cup0d: {
		id: "czpa59mg577x1oo45cup0d",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci quisquam non neque sapiente possimus odit reiciendis eos ut explicabo?",
		author: "tom_holland",
		timestamp: 1621236451017,
		likes: ["robert_downeyjr", "scarlett_johansson"],
		replies: ["3sklxkf9yyfowrf0o1ftbb"],
		replyingTo: null,
	},
	"2mb6re13q842wu8n106bhk": {
		id: "2mb6re13q842wu8n106bhk",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci quisquam non neque sapiente",
		author: "scarlett_johansson",
		timestamp: 1621236451017,
		likes: ["tom_holland"],
		replies: ["26p5pskqi88i58qmza2gid"],
		replyingTo: null,
	},
	nnvkjqoevs8t02lzcc0ky: {
		id: "nnvkjqoevs8t02lzcc0ky",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci quisquam non neque sapiente possimus odit reiciendis eos ut explicabo?",
		author: "robert_downey_jr",
		timestamp: 1621236451017,
		likes: [],
		replies: [],
		replyingTo: null,
	},
	omdbjl68fxact38hk7ypy6: {
		id: "omdbjl68fxact38hk7ypy6",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci quisquam non neque sapiente possimus odit reiciendis eos ut explicabo?",
		author: "tom_holland",
		timestamp: 1621236451017,
		likes: [],
		replies: [],
		replyingTo: null,
	},
	"4pt0px8l0l9g6y69ylivti": {
		id: "4pt0px8l0l9g6y69ylivti",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quaerat.",
		author: "robert_downey_jr",
		timestamp: 1621236451017,
		likes: ["tom_holland"],
		replies: [],
		replyingTo: null,
	},
	"6h5ims9iks66d4m7kqizmv": {
		id: "6h5ims9iks66d4m7kqizmv",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci quisquam non neque sapiente possimus odit reiciendis eos ut explicabo?",
		author: "scarlett_johansson",
		timestamp: 1521236450029,
		likes: ["tom_holland", "robert_downey_jr"],
		replies: ["xi3ca2jcfvpa0i3t4m7ag", "r0xu2v1qrxa6ygtvf2rkjw"],
		replyingTo: null,
	},
	fap8sdxppna8oabnxljzcv: {
		id: "fap8sdxppna8oabnxljzcv",
		author: "robert_downey_jr",
		text: "Lorem ipsum dolor sit amet..",
		timestamp: 1621236816043,
		likes: ["scarlett_johansson"],
		replyingTo: "8xf0y6ziyjabvozdd253nd",
		replies: [],
	},
	"3km0v4hf1ps92ajf4z2ytg": {
		id: "3km0v4hf1ps92ajf4z2ytg",
		author: "tom_holland",
		text: "Lorem ipsum dolor sit amet.",
		timestamp: 1621236897404,
		likes: [],
		replyingTo: "8xf0y6ziyjabvozdd253nd",
		replies: [],
	},
	njv20mq7jsxa6bgsqc97: {
		id: "njv20mq7jsxa6bgsqc97",
		author: "tom_holland",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quaerat.",
		timestamp: 1621236451017,
		likes: ["robert_downey_jr"],
		replyingTo: "5c9qojr2d1738zlx09afby",
		replies: [],
	},
	leqp4lzfox7cqvsgdj0e7: {
		id: "leqp4lzfox7cqvsgdj0e7",
		author: "robert_downey_jr",
		text: "Lorem ipsum dolor sit amet.",
		timestamp: 1621236451017,
		likes: [],
		replyingTo: "hbsc73kzqi75rg7v1e0i6a",
		replies: [],
	},
	sfljgka8pfddbcer8nuxv: {
		id: "sfljgka8pfddbcer8nuxv",
		author: "tom_holland",
		text: "Lorem ipsum dolor sit amet.",
		timestamp: 1621236451017,
		likes: ["scarlett_johansson", "robert_downey_jr"],
		replyingTo: "hbsc73kzqi75rg7v1e0i6a",
		replies: [],
	},
	"3sklxkf9yyfowrf0o1ftbb": {
		id: "3sklxkf9yyfowrf0o1ftbb",
		author: "scarlett_johansson",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia.",
		timestamp: 1621236451017,
		likes: ["tom_holland"],
		replyingTo: "czpa59mg577x1oo45cup0d",
		replies: [],
	},
	"26p5pskqi88i58qmza2gid": {
		id: "26p5pskqi88i58qmza2gid",
		author: "robert_downey_jr",
		text: "Too relatable",
		timestamp: 1621236451017,
		likes: ["scarlett_johansson"],
		replyingTo: "2mb6re13q842wu8n106bhk",
		replies: [],
	},
	xi3ca2jcfvpa0i3t4m7ag: {
		id: "xi3ca2jcfvpa0i3t4m7ag",
		author: "robert_downey_jr",
		text: "Just DMd you!",
		timestamp: 1621236451017,
		likes: [],
		replyingTo: "6h5ims9iks66d4m7kqizmv",
		replies: [],
	},
	r0xu2v1qrxa6ygtvf2rkjw: {
		id: "r0xu2v1qrxa6ygtvf2rkjw",
		author: "tom_holland",
		text: "This is a great idea.",
		timestamp: 1621236451017,
		likes: ["robert_downey_jr"],
		replyingTo: "6h5ims9iks66d4m7kqizmv",
		replies: [],
	},
};
export function _getUsers() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...users }), 1000);
	});
}

export function _getTweets() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...tweets }), 1000);
	});
}
export function _saveLikeToggle({ id, hasLiked, authedUser }) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			tweets = {
				...tweets,
				[id]: {
					...tweets[id],
					likes:
						hasLiked === true
							? tweets[id].likes.filter(
									(uid) => uid !== authedUser
							  )
							: tweets[id].likes.concat([authedUser]),
				},
			};

			res();
		}, 500);
	});
}

function generateUID() {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
}

function formatTweet({ author, text, replyingTo = null }) {
	return {
		author,
		id: generateUID(),
		likes: [],
		replies: [],
		text,
		timestamp: Date.now(),
		replyingTo,
	};
}

export function _saveTweet({ text, author, replyingTo }) {
	return new Promise((res, rej) => {
		const formattedTweet = formatTweet({
			text,
			author,
			replyingTo,
		});

		setTimeout(() => {
			tweets = {
				...tweets,
				[formattedTweet.id]: formattedTweet,
			};
			console.log(author);
			users = {
				...users,
				[author]: {
					...users[author],
					tweets: users[author].tweets.concat([formattedTweet.id]),
				},
			};

			res(formattedTweet);
		}, 1000);
	});
}
