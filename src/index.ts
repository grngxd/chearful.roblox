#!/usr/bin/env node

import * as rbx from "noblox.js";

const args = process.argv.slice(2);

const generate = (length: number, amount: number) => {
	if ((length < 3) || (length > 20)) {
		return new Array(0);
	}
    
	const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";   
	const result: Array<string> = new Array<string>();

	for (let i = 0; i < amount; i++) {
		let text = "";
		for (let j = 0; j < length; j++) {
			const char = characters.charAt(Math.floor(Math.random() * characters.length));
			if (j === 0 && char === "_") {
				j--;
				continue;
			}
			text += char;
		}
		result.push(text);
	}

	return result;
};

setTimeout(async () => {
	const unfiltered = generate(parseInt(args[0]), parseInt(args[1]));
	//console.log(unfiltered);

	const ids = await rbx.getIdFromUsername(unfiltered);
	//console.log(ids);

	const filtered: Array<string> = new Array<string>();

	unfiltered.map(async (name) => {
		const id = ids[unfiltered.indexOf(name)];
		if (id) return;
		filtered.push(name);
	});

	console.log(filtered);
}, 5000);

export { };

