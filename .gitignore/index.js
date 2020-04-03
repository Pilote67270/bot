const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NjkwMjQzMDMyMjMwMTMzODc2.XocVzA.v_rTuNpD02GvvToMW03KaPAwKDM')
usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('gen bot is now online')
    client.user.setPresence({ game: { name: `BOT DE PILOTE PRODUCTION GAMES`, type: "WATCHING"}});
});

client.on('message', message =>{
if (message.content === '=NordVPN'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Dans 10 Minutes vous pouvez ré-utilisé cette commandes')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 600000)
    message.channel.send('> Check DM ! :)')
    message.channel.send('Serveur de Support : https://discord.gg/Pn5qqEF ')
    console.log('NordVPN Used')
    var string = `erin.fedak@gmail.com:Ab7367732
    dgoza16@gmail.com:Danthe1man
    johnxenos@gmail.com:Dorian12
    magneandreolsen@gmail.com:noob6666
    viloriaedwin@hotmail.com:edvi1975
    97booman@gmail.com:Meman850`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=Nitro'){
    message.channel.send('> Check DM ! :)')
    message.channel.send('Serveur de Support : https://discord.gg/Pn5qqEF ')
    console.log('Nitro Used')
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Désolé Vous devez attendre 5minutes pour ré-utilisé la commande =Nitro')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    var string = `No stock... :cry: `
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.on('message', message =>{
if (message.content === '=Minecraft'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Désolé Vous devez attendre 5minutes pour ré-utilisé la commande')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    message.channel.send('> Check DM ! :)')
    message.channel.send('Serveur de Support : https://discord.gg/Pn5qqEF ')
    console.log('Minecraft Used')
    var string = `No Stock :cry:`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.on('message', message =>{
if (message.content === '=Spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Dans 10 Minutes vous pouvez ré-utilisé cette commande :cry:')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 600000)
    message.channel.send('> Check DM ! :)')
    message.channel.send('Serveur de Support : https://discord.gg/Pn5qqEF ')
    console.log('Spotify Used')
    var string = `No stock :cry:`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.on('message', message =>{
if (message.content === '=Netflix'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Dans 10 Minutes vous pouvez ré-utilisé cette commande :cry:')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 600000)
    message.channel.send(` > Check DM ! :)
    > Il ne sont pas checké ! :cry:`)
    message.channel.send('Serveur de Support : https://discord.gg/Pn5qqEF ')
    console.log('Netflix Used')
    var string = `taytay16483@gmail.com:taylor12
    shenok666@gmail.com:satan666
    christophera94@gmail.com:dicksucker
    lautaroibrito@hotmail.com:unicornio1
    jakedaniels29@gmail.com:iamsocool1
    santiagosacotegui@gmail.com:riverkpo
    f.ra.n.s.trai.ns.fd.ghddmss@gmail.com:z1Hb4sn7wG
    videodude12@gmail.com:brooder12
    soulfairies102@gmail.com:rangothefox
    jaro.chladno@gmail.com:marek123
    aranser1702@gmail.com:20472047
    shawnmasha1@gmail.com:princess1
    dangerblow@hotmail.com:goregrind
    pickledpete6@gmail.com:rocky201
    89.onder@gmail.com:198930
    giovannello89@gmail.com:giovanni
    jaybooger0101@gmail.com:GreenBay
    19047@jcpstudents.org:winston22
    wildhungarian4@gmail.com:Brendan4
    netengi.phuc.nguyen@gmail.com:davigga
    brandonzurisadayvaldez@gmail.com:holawas
    alexander_jackson@gmail.com:100804
    mevev6745@gmail.com:lampshade1
    captaindragneel@hotmail.com:ep447012
    mykys99@gmail.com:lubieplacki123
    samtybeau@gmail.com:159874632
    seandespins24@gmail.com:wethepeople21
    gmauler51@gmail.com:bmwa0107
    skibumb19@hotmail.com:thatsmymofo
    erensarptumke@hotmail.com:emiremir
    afstclaire@gmail.com:bobobo
    michaelzengel265@gmail.com:Baseball123
    greenbobo123456@gmail.com:red123
    jayden1785@hotmail.com:dragonlord`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=help'){
    message.channel.send(`__**MENU HELP**__
    **__Commandes Générateur__**
    > =Help Afiche le menu d'aide
    > =NordVPN Vous donne un compte NordVPN
    > =Minecraft vous donne un compte Minecraft
    > =Netflix vous donne un compte Netflix !
    **__Autres__**
    > =add Permet de m'ajouté sur votre serveur `)
    message.channel.send('Serveur de Support : https://discord.gg/Pn5qqEF ')
    console.log('help')
};
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=add'){
    message.channel.send(`**Lien d'invitation : https://discordapp.com/oauth2/authorize?client_id=690243032230133876&scope=bot&permissions=8 **`)
    message.channel.send('Serveur de Support : https://discord.gg/Pn5qqEF ')
    console.log('add')
};
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=m'){
    message.channel.send(`** Au revoir prochain allumage du bot demain **`)
    console.log('=m')
};
});

client.login(token);
