const Discord = require('discord.js')

const bot = new Discord.Client();

bot.login("ODE0NTI0NzUyNTI5OTgxNTEw.YDfHSg.uuFC1Fc-53VkjeF60PHxeiXpSaA")

bot.on('ready', () => {
    console.clear()
    console.log("coucou je suis lancé")
    })

bot.on('debug', (debug) => {
        console.log(debug)
        })

bot.on('message', (message) => {var prefix = "!"

if(message.content.startsWith(prefix + "test")){
    message.delete().catch(e => {
    console.log(`[error] => une erreur est survenue`)
    })//sert a supprimer le msg
    message.channel.send("coucou")//permet de répondre
    }
    







    })
    bot.on('message', (message) => { 
    })
    if(message.content.startsWith(prefix + 'embed')){
        message.delete()//permet de supprimer le message
        const args = message.content.split(" ").slice(1).join(' ')//permet de prendre le message après la commande 
        const embed = new Discord.MessageEmbed()// creer un embed
        .setDescription(args)// met une description a l'embed
        .setColor("#000000")// la couleur de l'embed
        .setFooter("Created By Blaxssss")// met un pied d'embed
        message.channel.send(embed)//envoie l'embed
        }