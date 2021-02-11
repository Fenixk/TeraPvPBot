const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE, FRAYWIND_TYPE } = require('../constants/battleground-types.js');

module.exports = {
	name: 'detect',
	description: 'Trigger the BGs automatic detection and send result to the author.',
	guildOnly: true,
	roleOnly: true,
	adminOnly: false,
	aliases: ['detect', 'search'],
	execute(client, message) {
		let value = {
			[CORSAIR_TYPE]: false,
			[SHORE_TYPE]: false,
			[GRIDIRON_TYPE]: false,
			[SKYRING_TYPE]: false,
			[FRAYWIND_TYPE]: false
		};

		let userName = '';
		let userTag = '';
		let activity = '';
		let guildName = '';
		let assets = '';
		let isEUServer = false;

		// Search inside all presences of all the guilds with the bot.
		client.guilds.cache.forEach((guild) => {
			if (!guild || !guild.presences) return;
			guild.presences.cache.array().forEach(presence => {
				if (presence.activities.length > 0 && presence.activities[0].name === "TERA" && presence.activities[0].assets && presence.activities[0].assets.largeText){
					let activityMessage = presence.activities[0].assets.largeText;

					isEUServer = activityMessage.includes("EU") || activityMessage.includes("RU");
					if (!isEUServer) {
						return;
					}

					if (activityMessage.includes("Твердыня корсаров")) {
						value[CORSAIR_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Corsairs' Stronghold")) {
						value[CORSAIR_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Fort des Corsaires")) {
						value[CORSAIR_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}    
					else if (activityMessage.includes("Korsarenfestung")) {
						value[CORSAIR_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Shore Hold")) {
						value[SHORE_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Битва на побережье")) {
						value[SHORE_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Territoire côtier")) {
						value[SHORE_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Küstenterritorium")) {
						value[SHORE_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Champions' Skyring")) {
						value[SKYRING_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Cercle céleste des Champions")) {
						value[SKYRING_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Himmelsring der Helden")) {
						value[SKYRING_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Небесная Арена")) {
						value[SKYRING_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Подземная арена")) {
						value[GRIDIRON_TYPE] = false;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
						message.author.send(
							'Username: ' + userName + '\n' +
							'Discord tag: ' + userTag + '\n' +
							'Discord server: ' + guildName + '\n'
						);
					}
					else if (activityMessage.includes("Gridiron")) {
						value[GRIDIRON_TYPE] = false;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
						message.author.send(
							'Username: ' + userName + '\n' +
							'Discord tag: ' + userTag + '\n' +
							'Discord server: ' + guildName + '\n'
						);
						
					}
					else if (activityMessage.includes("Unterirdisches Schlachtfeld")) {
						value[GRIDIRON_TYPE] = false;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
						message.author.send(
							'Username: ' + userName + '\n' +
							'Discord tag: ' + userTag + '\n' +
							'Discord server: ' + guildName + '\n'
						);
					}
					else if (activityMessage.includes("Champ de bataille souterrain")) {
						value[GRIDIRON_TYPE] = false;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
						message.author.send(
							'Username: ' + userName + '\n' +
							'Discord tag: ' + userTag + '\n' +
							'Discord server: ' + guildName + '\n'
						);
					}
					else if (activityMessage.includes("Fraywind")) {
						value[FRAYWIND_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("фрейвинд")) {
						value[FRAYWIND_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Venteguerre")) {
						value[FRAYWIND_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Canon der Ehre")) {
						value[FRAYWIND_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
				}
			});
		});
		if (message) {
			message.author.send(
				'Corsair: ' + JSON.stringify(value[CORSAIR_TYPE]) + '\n' +
				'Shore: ' + JSON.stringify(value[SHORE_TYPE]) + '\n' +
				'Gridiron: ' + JSON.stringify(value[GRIDIRON_TYPE]) + '\n' +
				'Skyring: ' + JSON.stringify(value[SKYRING_TYPE]) + '\n' +
				'Fraywind: ' + JSON.stringify(value[FRAYWIND_TYPE]) + '\n'
			);

			if (userName) {
				message.author.send(
					'Username: ' + userName + '\n' +
					'Discord tag: ' + userTag + '\n' +
					'Discord server: ' + guildName + '\n'
				);
			}
	
			if (assets) {
				message.author.send(JSON.stringify(assets));
				message.author.send(JSON.stringify(activity));
			}
		}

		return [value, userName];
	}
};
