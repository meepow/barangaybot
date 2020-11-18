const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'meep!';

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


        if(command === 'labakoniangel'){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#fcf876')
            .setTitle('The Barangay Announcement')
            //.setURL('https://discord.js.org/')
            .setAuthor('The Barangay', 'https://media.discordapp.net/attachments/759070684822765599/759310646176645130/logo2.gif')
            .setDescription('A report was received from an official of the Bisdak Ni server due to a raiding incident concerning The Barangay members. \n \n The incident was characterized by the intruders using their Discord name and tag. Malicious remarks, rude banters, and excessive disturbance to voice and text channels were observed.')
            .setThumbnail('https://media.discordapp.net/attachments/759070684822765599/759310806172565504/logo_3_2.jpg')
            
            /*.addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )*/
            
            .addField('Discord unique IDs of the fake accounts concerning our members:', '773909133090226197- nadz\n773914264234360862- peach\n773918345937551430- cheezy\n773924181553315860- yikes\n773924797641130015- starla\n773906691385196555- dudirty\n773917510877708308- red', true)
            .addField('We do not condone these acts of intrusion and deceit. This is also to remind everyone to still exercise utmost privacy especially with your personal information, selfies, etc.', '~~~')
            .setImage('https://media.discordapp.net/attachments/760143459717218315/774920034714910741/unknown.png')
            .setTimestamp()
            .setFooter('MEEPOW NUKE', 'https://media.discordapp.net/attachments/759070684822765599/759310806172565504/logo_3_2.jpg');
        
            message.channel.send(exampleEmbed);
        }


});


client.once('ready', () => {
    console.log('meepow bot online!!!')
});

client.login('Nzc0OTg0Mzg1NjY4NzEwNDMx.X6fudA.IxkCexpT-KFXM83LZgjxpHFMuW4');

