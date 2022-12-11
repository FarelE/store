require('./Manik.js')
const { default: ManikConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, formatp, formatDate, clockString, jsonformat, format, parseMention, getRandom } = require('./FuncBot/myfunc')
const pino = require('pino')
const fs = require('fs')
const figlet = require("figlet");
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const clui = require('clui')
const jimp = require('jimp')
const { Spinner } = clui
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./FuncBot/exif')
const { color, mylog, infolog } = require("./FuncBot/color");
const welcomeJson = require('./FuncBot/group/welcome.json')
const moment = require('moment-timezone')
const status = new Spinner(chalk.cyan(` Booting WhatsApp Bot`))
const starting = new Spinner(chalk.cyan(` Preparing After Connect`))
const reconnect = new Spinner(chalk.redBright(` Reconnecting WhatsApp Bot`)) 
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const yargs = require('yargs/yargs')
const { toAudio, toPTT, toVideo } = require('./converter')
const fetch = require('node-fetch')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

//REST APIS
global.APIs = { 
    bx: 'https://bx-hunter.herokuapp.com',
    dhnjing: 'https://dhnjing.xyz',
    hardianto: 'https://hardianto-chan.herokuapp.com',
    jonaz: 'https://jonaz-api-v2.herokuapp.com',
    neoxr: 'https://neoxr-api.herokuapp.com',
    nrtm: 'https://nurutomo.herokuapp.com',
    pencarikode: 'https://pencarikode.xyz',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    zekais: 'http://zekais-api.herokuapp.com',
    zeks: 'https://api.zeks.xyz',
	oni: 'https://oni-chan.my.id',
	lol: 'https://api.lolhuman.xyz',
  }
  global.APIKeys = { 
    'https://bx-hunter.herokuapp.com': 'Ikyy69',
    'https://hardianto-chan.herokuapp.com': 'hardianto',
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://pencarikode.xyz': 'pais',
    'https://api.xteam.xyz': 'apikeymu',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
	'https://api.lolhuman.xyz': 'SadTeams',
  }
  
  global.lolkey = 'SadTeams'
 
const { uncache, nocache } = require('./FuncBot/loader')
require('./Manik.js')
nocache('../Manik.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
function title() {
console.clear()
console.log(chalk.bold.green(figlet.textSync('ManikBot-MD', {
font: 'Standard',
horizontalLayout: 'default',
vertilLayout: 'default',
width: 80,
whitespaceBreak: false
})))
console.log(chalk.yellow(`\n                        ${chalk.yellow('[ Created By Manik ]')}\n\n${chalk.red('ManikBot-Md')} : ${chalk.white('WhatsApp Bot Multi Device')}\n${chalk.red('Follow Insta Dev')} : ${chalk.white('@Aryamanik___')}\n${chalk.red('Message Me On WhatsApp')} : ${chalk.white('+62 857-3713-4572')}\n${chalk.red('Donate')} : ${chalk.white('085737134572 ( Ovo/Pulsa )')}\n`))
}
//global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
//global.authFile = `${opts._[0] || 'sessions'}`
//global.isInit = !fs.existsSync(authFile)

async function startManik() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const Manik = ManikConnect({
logger: pino({ level: 'fatal' }),
printQRInTerminal: true,
browser: ['Yudha BOT','Chrome','1.0.0'],
auth: state
})


title()
store.bind(Manik.ev)
process.on('uncaughtException', console.error) // safe log error
Manik.ws.on('CB:call', async (json) => {
if(called == true){
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
let latna = await Manik.sendContact(callerId, global.owner)
Manik.sendMessage(callerId, { text: `Automatic block system!\nDon't call bot!\nPlease contact the owner to open !`}, { quoted : latna })
Manik.sendMessage(`628315599777@s.whatsapp.net`, {text: '*Report Bot:*'+ callerId+ 'Called Bot'})
await sleep(8000)
await Manik.updateBlockStatus(callerId, "block")
}
}
})
const { exec } = require('child_process')
const fs = require('fs')
const Jimp = require('jimp')

let welcome = './media/image/welcome.jpg'
let leave = './media/image/leave.jpg'
let beam = './media/font/Boogaloo-Regular.ttf'
const reSize = async (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var bu = await Jimp.read(buffer);
        var ab = await bu.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
} 
const sleep = async (ms) => {
   return new Promise(resolve => setTimeout(resolve, ms))
}
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}






         
/*        
Manik.ev.on('messages.upsert', async chatUpdate => {
try {
Arya = chatUpdate.messages[0]
let fmanik = './media/Manik.jpg'
  var ftxt = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(Arya.key.remoteJid ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "imageMessage": {"jpegThumbnail": await reSize(fmanik, 300, 300),"caption": `Group Announce ~ ManikBot By AryaManik`  }}
  }
	switch (Arya.messageStubType) {
            case 21:
              Manik.sendMessage(Arya.key.remoteJid, { text: `@${Arya.key.participant.split('@')[0]} telah mengubah subjek menjadi ${Arya.messageStubParameters[0]}`, mentions: [Arya.key.participant] }, { quoted: 0 })
              console.log("p")
              break
            case 27:
              if (!Arya.key.participant && !Arya.participant) return Manik.sendMessage(Arya.key.remoteJid, { text: `@${Arya.messageStubParameters[0].split('@')[0]} telah bergabung menggunakan tautan undangan grup ini`, mentions: Arya.messageStubParameters }, { quoted: 0 })
              Manik.sendMessage(Arya.key.remoteJid, { text: `@${Arya.key.participant.split('@')[0]} telah menambahkan @${Arya.messageStubParameters[0].split('@')[0]}`, mentions: [Arya.key.participant, ...Arya.messageStubParameters] }, { quoted: 0 })
              break
            case 28:
              Manik.sendMessage(Arya.key.remoteJid, { text: `@${Arya.key.participant.split('@')[0]} telah mengeluarkan @${Arya.messageStubParameters[0].split('@')[0]}`, mentions: [Arya.key.participant, ...Arya.messageStubParameters] }, { quoted: 0 })
              break
            case 29:
              Manik.sendMessage(Arya.key.remoteJid, { text: `@${Arya.key.participant.split('@')[0]} telah menjadikan @${Arya.messageStubParameters[0].split('@')[0]} sebagai admin`, mentions: [Arya.key.participant, ...Arya.messageStubParameters] }, { quoted: 0 })
              break
            case 30:
              Manik.sendMessage(Arya.key.remoteJid, { text: `@${Arya.key.participant.split('@')[0]} telah memberhentikan @${Arya.messageStubParameters[0].split('@')[0]} sebagai admin`, mentions: [Arya.key.participant, ...Arya.messageStubParameters] }, { quoted: 0 })
              break
            case 32:
              if (Arya.key.fromMe) return
              Manik.sendMessage(Arya.key.remoteJid, { text: `@${Arya.key.participant.split('@')[0]} keluar dari group`, mentions: [Arya.key.participant] }, { quoted: 0 })
              break
            case 71:
              Manik.sendMessage(Arya.key.remoteJid, { text: `@${Arya.messageStubParameters[0].split('@')[0]} telah bergabung menggunakan undanganku`, mentions: [Arya.key.participant, ...Arya.messageStubParameters] }, { quoted: 0 })
              break
          }
if (!Arya.message) return
Arya.message = (Object.keys(Arya.message)[0] === 'ephemeralMessage') ? Arya.message.ephemeralMessage.message : Arya.message
if (Arya.key && Arya.key.remoteJid === 'status@broadcast') return
if (!Manik.public && !Arya.key.fromMe && chatUpdate.type === 'notify') return
if (Arya.key.id.startsWith('BAE5') && Arya.key.id.length === 16) return
m = smsg(Manik, Arya, store)
require("./Manik")(Manik, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
}) */

    Manik.ev.on('messages.upsert', async chatUpdate => {
       // console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!Manik.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(Manik, mek, store)
        require("./Manik")(Manik, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

Manik.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await Manik.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Manik.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
ppgroup = await Manik.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}              
try {
	nama = await Manik.getName(num)
} catch {
	nama = 'undefined'
}
let memb = metadata.participants.length

if (anu.action == 'add' && global.isWelcome) {
try {//mencoba
           ppuser = await Manik.profilePictureUrl(num, 'image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }

			let wel = api('lol', '/api/base/welcome', {
								apikey: `SadTeams`,
								img1: ppuser,
								img2: 'https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg',
								background: 'https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg',
								username: `@${nama}`,
								member: `${metadata.size}`,
								groupname: `${metadata.subject}`
								
                            })
let cv = `Selamat Datang Kak ${nama}\ndi Group ${metadata.subject}\n\nBoleh Perkenalan Kak..\n\n_Ketik_ *.menu* _untuk melihat item Group_`							
       await Manik.sendFile(anu.id, wel, null, cv, 0)
	
	} else if (anu.action == 'remove' && global.isWelcome) {
try {//mencoba
           ppuser = await Manik.profilePictureUrl(num, 'image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }
		let bye = api('lol', '/api/base/leave', {
								apikey: `SadTeams`,
								img1: ppuser,
								img2: 'https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg',
								background: 'https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg',
								username: `@${nama}`,
								member: `${metadata.size}`,
								groupname: `${metadata.subject}`
								
                            })
							
let cv2 = `Loh Kenapa Keluar?\nKalo Kembali Titip Seblak Sama Boba Ya!`
await Manik.sendFile(anu.id, bye, null, cv2, 0)      
}
}
} catch (err) {
console.log(err)
}
})	
Manik.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
} 
 Manik.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Manik.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})
Manik.getName = (jid, withoutContact  = false) => {
id = Manik.decodeJid(jid)
withoutContact = Manik.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Manik.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Manik.decodeJid(Manik.user.id) ?
Manik.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
} 
   Manik.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await Manik.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Manik.getName(i + '@s.whatsapp.net')}\nFN:${await Manik.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:helloiamkiManikxd@gmail.com\nitem2.X-ABLabel:Stay A Burden\nitem3.URL:YouTube: Flob\nitem3.X-ABLabel:Youtube\nitem4.ADR:;;Indonesia, Mizoram;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
Manik.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}
    
Manik.setStatus = (status) => {
Manik.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}
	
Manik.public = true

Manik.serializeM = (m) => smsg(Manik, m, store)

Manik.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	    
if (connection == 'connecting') console.log(require('chalk').redBright('🕛 Mengaktifkan Bot, Harap tunggu sebentar...'))
if (connection == 'open') {
      console.log(require('chalk').greenBright('Connected✅'))
      await Manik.sendText("6283155997772@s.whatsapp.net", 'BOT Telah Berhasil Terhubung', 0)
  }
if (connection == 'close') console.log(require('chalk').redBright('⏹️Koneksi berhenti dan mencoba menghubungkan kembali...'))

/*if (connection === 'close') {
status.stop()
reconnect.stop()
starting.stop()
console.log(mylog('Server Ready ✓'))
lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut 
? startManik()
: console.log(mylog('Wa web terlogout...'))
}*/
})
   
Manik.ev.on('creds.update', saveState)
Manik.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ image: img }, { upload: Manik.waUploadToServer })
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
Manik.relayMessage(jid, template.message, { messageId: template.key.id })
}
Manik.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
Manik.sendMessage(jid, buttonMessage, { quoted, ...options })
}
Manik.sendText = (jid, text, quoted = '', options) => Manik.sendMessage(jid, { text: text, ...options }, { quoted })
Manik.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Manik.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}
Manik.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Manik.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}
Manik.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Manik.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}
Manik.sendTextWithMentions = async (jid, text, quoted, options = {}) => Manik.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
Manik.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await Manik.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
Manik.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Manik.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
Manik.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Manik.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}


 
Manik.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await Manik.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./FuncBot/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await Manik.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}

//RESIZE 
Manik.resize = async (buffer, uk1, uk2) => {
    	return new Promise(async(resolve, reject) => {
    		var baper = await jimp.read(buffer);
    		var ab = await baper.resize(uk1, uk2).getBufferAsync(jimp.MIME_JPEG)
    		resolve(ab)
    	})
    }


//SENDFILE
Manik.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await Manik.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try { throw { json: JSON.parse(file.toString()) } }
            catch (e) { if (e.json) throw e.json }
        }
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) if (options.asDocument) options.asDocument = true
        let mtype = '', mimetype = type.mime
        if (/webp/.test(type.mime)) mtype = 'sticker'
        else if (/image/.test(type.mime)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        return await Manik.sendMessage(jid, {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }, {
            ephemeralExpiration: 86400,
            ...opt,
            ...options
        })
    }

//SENDBUTTONIMG
Manik.sendButtonImg = async (jid, buffer, contentText, footerText, button1, id1, quoted, options) => {
        let type = await Manik.getFile(buffer)
        let { res, data: file } = type
        if (res && res.status !== 200 || file.length <= 65536) {
        try { throw { json: JSON.parse(file.toString()) } }
        catch (e) { if (e.json) throw e.json }
        }
        const buttons = [
        { buttonId: id1, buttonText: { displayText: button1 }, type: 1 }
        ]

        const buttonMessage = {
            image: file,
            fileLength: 88808964843634667969,
            caption: contentText,
            footer: footerText,
            mentions: await parseMention(contentText + footerText),
            ...options,
            buttons: buttons,
            headerType: 4
        }

        return await Manik.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: parseMention(contentText + footerText) }, ...options })
    }
	
//SENDCHAT
Manik.sendPesan = (jid, text, quoted = '', options) => Manik.sendMessage(jid, { text: text, ...options }, { quoted })	
//SEND2BUTTON
Manik.send2Button = async (jid, content, footerText, button1, id1, button2, id2, quoted, options) => {
        const buttons = [
        { buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: id2, buttonText: { displayText: button2 }, type: 1 }
        ]
        const buttonMessage = {
            text: content,
            footer: footerText,
            mentions: await parseMention(content + footerText),
            ephemeralExpiration: 86400,
            ...options,
            buttons: buttons,
            headerType: 1
        }
        Manik.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: parseMention(content + footerText), forwardingScore: 999999, isForwarded: true }, ...options })
    }
	
//SEND2BUTTONLOC
Manik.send2ButtonLoc = async (jid, buffer, content, footer, button1, row1, button2, row2, quoted, options = {}) => {
        let type = await Manik.getFile(buffer)
        let { res, data: file } = type
        if (res && res.status !== 200 || file.length <= 65536) {
        try { throw { json: JSON.parse(file.toString()) } }
        catch (e) { if (e.json) throw e.json }
        }
        let buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 }
        ]
        
        let buttonMessage = {
            location: { jpegThumbnail: file },
            caption: content,
            footer: footer,
            mentions: await parseMention(content + footer),
            ...options,
            buttons: buttons,
            headerType: 6
        }
        return await  Manik.sendMessage(jid, buttonMessage, {
            quoted,
            upload: Manik.waUploadToServer,
            ephemeralExpiration: 86400,
            mentions: await parseMention(content + footer),
            ...options
        })
    }


Manik.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}

let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await Manik.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

Manik.cMod = (jid, copy, text = '', sender = Manik.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === Manik.user.id

return proto.WebMessageInfo.fromObject(copy)
}

Manik.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data
}
}
return Manik
}

startManik()