const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const brainly = require('brainly-scraper')
const { spawn, exec, execSync } = require("child_process")
const fs = require('fs')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')

const { color, bgcolor } = require('./lib/color')
const { forks, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')

const samih = JSON.parse(fs.readFileSync("./database/simi.json"));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

const setting = JSON.parse(fs.readFileSync('./setting.json'))
const thumb = fs.readFileSync("./gambar/thumb.jpg");
const emror = fs.readFileSync("./gambar/emror.jpg");


namabot = setting.namaBot
nomorowner = setting.nomorOwner
namaowner = setting.namaOwner

lolkey = 'b432b8670dac902953d74054' //dapatkan di https://api.lolhuman.xyz/
zekais = 'cchno5oN' //dapat di https://zekais-api.herokuapp.com/
zekskey = 'apivinz' //dapatkan di https://zeks.me/

function _0x1ed8(){const _0x17d3fe=['./database/scommand.json','1207362FeBSaj','writeFileSync','5KJngzm','270JkBWKW','chats','560cfrkav','46732VCKHCJ','10986849ZmDhdz','push','3128080CnaKYS','2045886wkQLsj','7564ZmOUeG','1562649DygllR','forEach','417vqSOOF','keys'];_0x1ed8=function(){return _0x17d3fe;};return _0x1ed8();}function _0x1f50(_0x4c08dd,_0x3708d3){const _0x1ed86b=_0x1ed8();return _0x1f50=function(_0x1f5061,_0x30ec73){_0x1f5061=_0x1f5061-0x1ba;let _0x2864ae=_0x1ed86b[_0x1f5061];return _0x2864ae;},_0x1f50(_0x4c08dd,_0x3708d3);}(function(_0x8e5a0e,_0x49b7a6){const _0x3f63f1=_0x1f50,_0x5570e8=_0x8e5a0e();while(!![]){try{const _0x1864ea=parseInt(_0x3f63f1(0x1bf))/0x1+-parseInt(_0x3f63f1(0x1ca))/0x2*(-parseInt(_0x3f63f1(0x1bc))/0x3)+parseInt(_0x3f63f1(0x1c8))/0x4+-parseInt(_0x3f63f1(0x1c1))/0x5*(-parseInt(_0x3f63f1(0x1c9))/0x6)+-parseInt(_0x3f63f1(0x1c5))/0x7*(-parseInt(_0x3f63f1(0x1c4))/0x8)+parseInt(_0x3f63f1(0x1c6))/0x9+-parseInt(_0x3f63f1(0x1c2))/0xa*(parseInt(_0x3f63f1(0x1ba))/0xb);if(_0x1864ea===_0x49b7a6)break;else _0x5570e8['push'](_0x5570e8['shift']());}catch(_0x40b3b0){_0x5570e8['push'](_0x5570e8['shift']());}}}(_0x1ed8,0xacfc5));const addCmd=(_0x28b56b,_0x814f8b)=>{const _0x504984=_0x1f50,_0x26165b={'id':_0x28b56b,'chats':_0x814f8b};scommand[_0x504984(0x1c7)](_0x26165b),fs[_0x504984(0x1c0)](_0x504984(0x1be),JSON['stringify'](scommand));},getCommandPosition=_0x50fc5b=>{const _0x5562db=_0x1f50;let _0x3afd9e=null;Object[_0x5562db(0x1bd)](scommand)[_0x5562db(0x1bb)](_0x37087a=>{scommand[_0x37087a]['id']===_0x50fc5b&&(_0x3afd9e=_0x37087a);});if(_0x3afd9e!==null)return _0x3afd9e;},getCmd=_0x1386ac=>{const _0x293a58=_0x1f50;let _0x16b77c=null;Object[_0x293a58(0x1bd)](scommand)[_0x293a58(0x1bb)](_0x7ca3ab=>{scommand[_0x7ca3ab]['id']===_0x1386ac&&(_0x16b77c=_0x7ca3ab);});if(_0x16b77c!==null)return scommand[_0x16b77c][_0x293a58(0x1c3)];};
module.exports = nine = async (nine, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''


			mess = {
				wait: 'BENTARR!!!',
				banned: 'Anda sudah terbanned, mohon hubungi owner untuk membuka banned',
				success: 'BETUL GAK NIHH??',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ Penggunaan dalam group! ❌',
					ownerG: '❌ LU BUKAN OWNER GROUP!!! ❌',
					ownerB: '❌ LU BUKAN OWNERKU!!! ❌',
					admin: '❌ LU BUKAN ADMIN GROUP!! ❌',
					Badmin: '❌ BOT BUKAN ADMIN!!! ❌'
				}
			}

			const botNumber = nine.user.jid
			const ownerNumber = [`${nomorowner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = nine.contacts[sender] != undefined ? nine.contacts[sender].vname || nine.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await nine.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				nine.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				nine.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nine.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nine.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				nine.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			    
			    
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
const _0x1bda4f=_0x322f;(function(_0x150698,_0x3a5664){const _0x20acec=_0x322f,_0x4183cf=_0x150698();while(!![]){try{const _0x30b1ab=parseInt(_0x20acec(0x183))/0x1+parseInt(_0x20acec(0x170))/0x2+parseInt(_0x20acec(0x197))/0x3+parseInt(_0x20acec(0x17c))/0x4+parseInt(_0x20acec(0x182))/0x5+parseInt(_0x20acec(0x185))/0x6*(-parseInt(_0x20acec(0x172))/0x7)+-parseInt(_0x20acec(0x177))/0x8*(parseInt(_0x20acec(0x193))/0x9);if(_0x30b1ab===_0x3a5664)break;else _0x4183cf['push'](_0x4183cf['shift']());}catch(_0x55390f){_0x4183cf['push'](_0x4183cf['shift']());}}}(_0x431e,0x80348));const fakedoc={'key':{'fromMe':![],'participant':nomorowner+'@s.whatsapp.net',...from?{'remoteJid':_0x1bda4f(0x17a)}:{}},'message':{'documentMessage':{'mimetype':_0x1bda4f(0x192),'title':''+ucapanFakereply,'pageCount':0x0,'fileName':_0x1bda4f(0x18d),'jpegThumbnail':fs[_0x1bda4f(0x184)]('./gambar/thumb.jpg')}}},ftoko={'key':{'fromMe':![],'participant':_0x1bda4f(0x171),...from?{'remoteJid':_0x1bda4f(0x17a)}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':_0x1bda4f(0x180),'jpegThumbnail':fs[_0x1bda4f(0x184)](_0x1bda4f(0x19c))},'title':namabot+'\x0aRp.\x2010.000','productImageCount':0x270f},'businessOwnerJid':_0x1bda4f(0x171)}}},ftrolSC={'key':{'fromMe':![],'participant':_0x1bda4f(0x181)},'message':{'orderMessage':{'itemCount':0x64,'status':0x1,'surface':0x1,'message':_0x1bda4f(0x17b),'orderTitle':_0x1bda4f(0x17d),'thumbnail':thumb,'sellerJid':'6285607078963@s.whatsapp.net','contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]}}},ftrol={'key':{'fromMe':![],'participant':'6285349947480@s.whatsapp.net'},'message':{'orderMessage':{'itemCount':0x64,'status':0x1,'surface':0x1,'message':namabot+_0x1bda4f(0x1a3),'orderTitle':''+namaowner,'thumbnail':thumb,'sellerJid':_0x1bda4f(0x181),'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]}}},fakeitem=_0x398ea4=>{const _0x3ae291=_0x1bda4f;nine[_0x3ae291(0x16e)](from,_0x398ea4,text,{'quoted':{'key':{'fromMe':![],'participant':_0x3ae291(0x171),...from?{'remoteJid':_0x3ae291(0x19e)}:{}},'message':{'orderMessage':{'orderId':'4302154426574187','thumbnail':fs[_0x3ae291(0x184)](_0x3ae291(0x19c)),'itemCount':0x64,'status':_0x3ae291(0x198),'surface':'CATALOG','message':_0x3ae291(0x179),'token':_0x3ae291(0x173)}}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]});};function _0x431e(){const _0x1e75db=['WM\x20dari\x20SC\x20by\x20GunturP','setStatus','\x20\x0aRp.\x2010.000','unlinkSync','South\x20Brisbane','sendMessage','log','1820844SofebU','0@s.whatsapp.net','5668999onPdOw','AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==','image','now','catch','9986952QGTatB','CB:action,,battery','by\x20GunturP','status@broadcast','Script\x20no\x20ENC\x20\x0aRp.\x2010.000','2792352OetMww','Script\x20no\x20ENC','imageMessage','value','image/jpeg','6285349947480@s.whatsapp.net','4961620JNHyiZ','582046XFSZdi','readFileSync','6JNfuaH','headers','batteryLevelStr','Baterai\x20:\x20','close','split','true','done','GunturP','false','live','message','Message','application/octet-stream','18pdUaKK','push','prepareMessage','pipe','1946529lKIArW','INQUIRY','batrei','content-type','buttonsMessage','./gambar/thumb.jpg','Cloudflare,\x20Inc','6285607078963-1604595598@g.us','image/gif','head'];_0x431e=function(){return _0x1e75db;};return _0x431e();}let settingstatus=0x0;new Date()*0x1-settingstatus>0x3e8&&(nine[_0x1bda4f(0x1a2)](_0x1bda4f(0x1a1))[_0x1bda4f(0x176)](_0x45ea60=>_0x45ea60),settingstatus=new Date()*0x1);function _0x322f(_0x2cb73a,_0x49ec80){const _0x431edc=_0x431e();return _0x322f=function(_0x322f83,_0x4657eb){_0x322f83=_0x322f83-0x16c;let _0x4813da=_0x431edc[_0x322f83];return _0x4813da;},_0x322f(_0x2cb73a,_0x49ec80);}nine['on'](_0x1bda4f(0x178),_0x1da96c=>{const _0xaa0239=_0x1bda4f;global[_0xaa0239(0x187)]=_0x1da96c[0x2][0x0][0x1][_0xaa0239(0x17f)],global['batterylevel']=parseInt(batteryLevelStr),baterai=batterylevel;if(_0x1da96c[0x2][0x0][0x1][_0xaa0239(0x18f)]==_0xaa0239(0x18b))charging=!![];if(_0x1da96c[0x2][0x0][0x1][_0xaa0239(0x18f)]==_0xaa0239(0x18e))charging=![];console[_0xaa0239(0x16f)](_0x1da96c[0x2][0x0][0x1]),console[_0xaa0239(0x16f)](_0xaa0239(0x188)+batterylevel+'%');}),global[_0x1bda4f(0x199)]=global[_0x1bda4f(0x199)]?global['batrei']:[],nine['on'](_0x1bda4f(0x178),_0x5c6930=>{const _0x3e12c3=_0x1bda4f,_0x260d63=_0x5c6930[0x2][0x0][0x1]['value'],_0x3939c3=parseInt(_0x260d63);global[_0x3e12c3(0x199)][_0x3e12c3(0x194)](_0x3939c3);});const sendButImage=async(_0x538db4,_0x2b1161,_0x420822,_0x2eb310,_0x39e171)=>{const _0x3fcd9b=_0x1bda4f;gam=_0x2eb310,jadinya=await nine['prepareMessage'](_0x538db4,gam,MessageType[_0x3fcd9b(0x174)]),buttonMessagesI={'imageMessage':jadinya[_0x3fcd9b(0x190)][_0x3fcd9b(0x17e)],'contentText':_0x2b1161,'footerText':_0x420822,'buttons':_0x39e171,'headerType':0x4},nine['sendMessage'](_0x538db4,buttonMessagesI,MessageType[_0x3fcd9b(0x19b)],{'quoted':mek});},sendMediaURL=async(_0x4e74ac,_0x34a9dc,_0x1f8407='',_0x359183=[])=>{const _0x53d371=_0x1bda4f;_0x359183['length']>0x0&&(_0x1f8407=normalizeMention(_0x4e74ac,_0x1f8407,_0x359183));const _0x286a74=Date[_0x53d371(0x175)]()/0x2710,_0x174ab9=_0x286a74['toString']();let _0x2955b7='';var _0x4e8df5=function(_0x3e721c,_0x41f833,_0x5b224d){const _0x1aedfc=_0x53d371;request[_0x1aedfc(0x1a0)](_0x3e721c,function(_0x3fe434,_0x50bcc9,_0x4008b4){const _0x3a0aa9=_0x1aedfc;_0x2955b7=_0x50bcc9[_0x3a0aa9(0x186)][_0x3a0aa9(0x19a)],request(_0x3e721c)[_0x3a0aa9(0x196)](fs['createWriteStream'](_0x41f833))['on'](_0x3a0aa9(0x189),_0x5b224d);});};_0x4e8df5(_0x34a9dc,_0x174ab9,async function(){const _0x247426=_0x53d371;console['log'](_0x247426(0x18c));let _0x18552d=fs['readFileSync'](_0x174ab9),_0x2a7ddd=_0x2955b7[_0x247426(0x18a)]('/')[0x0]+_0x247426(0x191);_0x2955b7===_0x247426(0x19f)&&(_0x2a7ddd=MessageType['video'],_0x2955b7=Mimetype['gif']),_0x2955b7[_0x247426(0x18a)]('/')[0x0]==='audio'&&(_0x2955b7=Mimetype['mp4Audio']),nine['sendMessage'](_0x4e74ac,_0x18552d,_0x2a7ddd,{'quoted':mek,'mimetype':_0x2955b7,'caption':_0x1f8407,'contextInfo':{'mentionedJid':_0x359183}}),fs[_0x247426(0x16c)](_0x174ab9);});},sendButVideo=async(_0x3e75d2,_0x59ef6a,_0x1fed7d,_0x4d0169,_0x1b4565=[],_0x49f399={})=>{const _0x2351bc=_0x1bda4f;kma=_0x4d0169,mhan=await nine[_0x2351bc(0x195)](from,kma,video);const _0x12e36d={'videoMessage':mhan[_0x2351bc(0x190)]['videoMessage'],'contentText':_0x59ef6a,'footerText':_0x1fed7d,'buttons':_0x1b4565,'headerType':0x4};nine[_0x2351bc(0x16e)](_0x3e75d2,_0x12e36d,MessageType[_0x2351bc(0x19b)],{'quoted':mek});},sendButloc=async(_0x3822d1,_0x43c87c,_0x1ddfc6,_0x3b1958,_0x13b2f9=[],_0x477ff6={})=>{const _0x535907=_0x1bda4f;let _0x309ef3=_0x3b1958;nine[_0x535907(0x16e)](_0x3822d1,{'contentText':_0x43c87c,'footerText':_0x1ddfc6,'buttons':_0x13b2f9,'headerType':'LOCATION','locationMessage':{'text':'ASU','name':_0x535907(0x16d),'address':_0x535907(0x19d),'jpegThumbnail':_0x309ef3}},MessageType[_0x535907(0x19b)],{'quoted':mek,'contextInfo':{'mentionedJid':parseMention(_0x43c87c,_0x1ddfc6)}},_0x477ff6);},sendButMessage=(_0x5d7d49,_0x5d826d,_0x4b9927,_0x41c48e=[],_0x2cab64={})=>{const _0x5c26d2=_0x1bda4f,_0x53bde1={'contentText':_0x5d826d,'footerText':_0x4b9927,'buttons':_0x41c48e,'headerType':0x1};nine[_0x5c26d2(0x16e)](_0x5d7d49,_0x53bde1,MessageType['buttonsMessage'],{'quoted':mek});};


      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}


			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = nine.contacts[from] != undefined ? nine.contacts[from].vname || nine.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
(function(_0x3bff60,_0xfa271b){const _0x5533d8=_0x72ff,_0x115b14=_0x3bff60();while(!![]){try{const _0x38551b=parseInt(_0x5533d8(0x1b2))/0x1+-parseInt(_0x5533d8(0x1a2))/0x2*(parseInt(_0x5533d8(0x1aa))/0x3)+-parseInt(_0x5533d8(0x1af))/0x4*(parseInt(_0x5533d8(0x1a1))/0x5)+parseInt(_0x5533d8(0x1ad))/0x6+-parseInt(_0x5533d8(0x1a6))/0x7+parseInt(_0x5533d8(0x1a5))/0x8+parseInt(_0x5533d8(0x1a3))/0x9*(parseInt(_0x5533d8(0x19e))/0xa);if(_0x38551b===_0xfa271b)break;else _0x115b14['push'](_0x115b14['shift']());}catch(_0x291309){_0x115b14['push'](_0x115b14['shift']());}}}(_0x315b,0x9d530));function _0x72ff(_0x1d8602,_0x13f445){const _0x315bcc=_0x315b();return _0x72ff=function(_0x72ffd1,_0x623e5a){_0x72ffd1=_0x72ffd1-0x19e;let _0x13d01a=_0x315bcc[_0x72ffd1];return _0x13d01a;},_0x72ff(_0x1d8602,_0x13f445);}function addMetadata(_0x42343e,_0x55c2e0){const _0x4a26fc=_0x72ff;if(!_0x42343e)_0x42343e=_0x4a26fc(0x1b1);if(!_0x55c2e0)_0x55c2e0=_0x4a26fc(0x1a4);_0x55c2e0=_0x55c2e0[_0x4a26fc(0x19f)](/[^a-zA-Z0-9]/g,'');let _0x1919e4=_0x55c2e0+'_'+_0x42343e;if(fs[_0x4a26fc(0x1ae)](_0x4a26fc(0x1a0)+_0x1919e4+'.exif'))return _0x4a26fc(0x1a0)+_0x1919e4+_0x4a26fc(0x1a7);const _0x5542ef={'sticker-pack-name':_0x42343e,'sticker-pack-publisher':_0x55c2e0},_0x4d8101=Buffer['from']([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0]),_0x321700=[0x0,0x0,0x16,0x0,0x0,0x0];let _0x5b014f=JSON[_0x4a26fc(0x1b0)](_0x5542ef)[_0x4a26fc(0x1b3)],_0x244460;_0x5b014f>0x100?(_0x5b014f=_0x5b014f-0x100,_0x321700[_0x4a26fc(0x1b4)](0x1)):_0x321700[_0x4a26fc(0x1b4)](0x0);_0x5b014f<0x10?(_0x244460=_0x5b014f[_0x4a26fc(0x1a9)](0x10),_0x244460='0'+_0x5b014f):_0x244460=_0x5b014f[_0x4a26fc(0x1a9)](0x10);const _0x4ec25b=Buffer[_0x4a26fc(0x1ac)](_0x244460,_0x4a26fc(0x1a8)),_0x1b6003=Buffer[_0x4a26fc(0x1ac)](_0x321700),_0x180bf9=Buffer['from'](JSON[_0x4a26fc(0x1b0)](_0x5542ef)),_0x1bc4c3=Buffer['concat']([_0x4d8101,_0x4ec25b,_0x1b6003,_0x180bf9]);fs[_0x4a26fc(0x1ab)]('./stickers/'+_0x1919e4+'.exif',_0x1bc4c3,_0x5e21be=>{const _0x2371b7=_0x4a26fc;return _0x2371b7(0x1a0)+_0x1919e4+_0x2371b7(0x1a7);});}function _0x315b(){const _0x1dcfaf=['260pbxDXH','stringify','Bot','696071BVMYUx','length','unshift','2930quFGiy','replace','./stickers/','39650LIsgSc','264876yxKXMf','24237gESsGw','By\x20GunturP','9513248wSBcOm','2332449pBkAif','.exif','hex','toString','27WQzhFL','writeFile','from','64338GxnDRl','existsSync'];_0x315b=function(){return _0x1dcfaf;};return _0x315b();}
	switch(command) {
            case 'help':
            case 'menu':
            var menu = `Hai kak👋🏻 ${ucapanFakereply}

╭─⬣ 「 *${namabot}* 」 ⬣
│
├──┐
│      ├─ 𝘋𝘢𝘵𝘦:
│      ├${Tanggal}
│      │
│      ├─ 𝘛𝘪𝘮𝘦  𝘐𝘯𝘥𝘰𝘯𝘦𝘴𝘪𝘢 :
│      ├𝘸𝘪𝘣: ${timeWib}
│      ├𝘸𝘪𝘵 : ${timeWit}
│      ├𝘸𝘪𝘵𝘢 : ${timeWita}
├──┘
├──┐
│      ├─ 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘵𝘪𝘰𝘯
│      ├𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘣𝘰𝘵 : 3
│      ├𝘗𝘳𝘦𝘧𝘪𝘹 : 𝘮𝘶𝘭𝘵𝘪-𝘱𝘳𝘦𝘧𝘪𝘹
│      ├𝘖𝘸𝘯𝘦𝘳 : ${namaowner}
├──┘
│
│
├─☬「 ᴀᴛᴛᴇɴᴛɪᴏɴ 」☬
│
├ sᴄʀɪᴘᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɢᴜɴᴛᴜʀ ᴘ
├Recode By Dhenxs Code
├ ᴛʜᴀɴᴋs ғᴏʀ ᴀʟʟ ᴍʏ ᴛᴇᴀᴍ ᴀɴᴅ ᴍʏ ғʀɪᴇɴᴅs
├ ɪғ ʏᴏᴜ ғᴏᴜɴᴅ sᴏᴍᴇ ʙᴜɢ ɪ'ᴍ sᴏʀʀʏ ʙᴇᴄᴀᴜsᴇ ɪs sᴛɪʟʟ ᴜɴᴅᴇʀ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ
├ ғᴏᴜᴍ ʙᴜɢ?? 
│ ʏᴏᴜ ᴄᴀɴ ᴄᴏɴᴛᴀᴄᴛ ᴘᴇʀsᴏɴ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ
├ ᴄᴏᴍɪɴɢ sᴏᴏɴ ғᴏʀ ᴍᴀɴʏ ғᴇᴀᴛᴜʀᴇs  ! 
│
└─⬣`
            sendButImage(from, menu, `${namabot}\n${Tanggal}`, thumb, [
            {buttonId: `${prefix}allmenu`, buttonText: {displayText: `ALLMENU`, }, type: 1, },
            {buttonId: `${prefix}owner`, buttonText: {displayText: `OWNER`, }, type: 1, }
            ]); 
            break
            case 'allmenu':
            var allmenu = `Hai kak👋🏻 ${ucapanFakereply},
            
╭───☬「 *${namabot}* 」 ☬
│
├─ • Status: aktive
├─ • Prefix: multi prefix
├─ • Version bot: 3
├─ • Owner: ${nomorowner} (${namaowner})
│
└─☬
┌──⬣ 
├ • ${prefix}menu/help
├ • ${prefix}allmenu
├ • ${prefix}owner
├ • ${prefix}request
├ • ${prefix}report
│
└─⬣
┌──⬣ 「 OWNER 」 ⬣ 
├ • ${prefix}join
├ • ${prefix}bc
├ • ${prefix}bc2
├ • ${prefix}restart
├ • ${prefix}shutdown
├ • ${prefix}ban
├ • ${prefix}unban
├ • ${prefix}buggc
├ • ${prefix}clearall
├ • ${prefix}clone
├ • ${prefix}addcmd
├ • ${prefix}delcmd
├ • ${prefix}listcmd
│
└─⬣
┌──⬣ 「 GROUP 」 ⬣ 
├ • ${prefix}setgrupname
├ • ${prefix}setdesc
├ • ${prefix}setppgrup
├ • ${prefix}listonline
├ • ${prefix}group
├ • ${prefix}closegc
├ • ${prefix}opengc
├ • ${prefix}hidetag
├ • ${prefix}tagall
├ • ${prefix}tagall2
├ • ${prefix}tagall3
├ • ${prefix}promote
├ • ${prefix}demote
├ • ${prefix}promoteall
├ • ${prefix}demoteall
├ • ${prefix}add
├ • ${prefix}kick
├ • ${prefix}listadmin
├ • ${prefix}linkgroup
├ • ${prefix}leave
├ • ${prefix}antilink
│
└─⬣
┌──⬣ 「 IMAGE MAKER 」 ⬣ 
├ • ${prefix}qrcode
├ • ${prefix}barcode
├ • ${prefix}flame
├ • ${prefix}silktext
├ • ${prefix}glow
├ • ${prefix}smoke
├ • ${prefix}crosslogo
├ • ${prefix}flower
├ • ${prefix}harta
├ • ${prefix}naruto
├ • ${prefix}dropwater
├ • ${prefix}breakwall
├ • ${prefix}matrix
├ • ${prefix}neon
├ • ${prefix}crismes
├ • ${prefix}pantai
├ • ${prefix}fire
├ • ${prefix}write
├ • ${prefix}cslogo
├ • ${prefix}lithgext
├ • ${prefix}skytext
├ • ${prefix}epep
├ • ${prefix}gplaybutton
├ • ${prefix}splaybutton
├ • ${prefix}text3d
├ • ${prefix}text3d2
├ • ${prefix}blackpink
├ • ${prefix}leavest
├ • ${prefix}thunder
├ • ${prefix}light
│
└─⬣
┌──⬣ 「 STICKER 」 ⬣ 
├ • ${prefix}ttp
├ • ${prefix}ttp2
├ • ${prefix}toimg
├ • ${prefix}sticker
├ • ${prefix}stickerwm
├ • ${prefix}stickernowm
│
└─⬣
┌──⬣ 「 PRIMBON 」 ⬣ 
├ • ${prefix}artinama
├ • ${prefix}artimimpi
└─⬣
┌──⬣ 「 TOLS 」 ⬣ 
├ • ${prefix}ocr
├ • ${prefix}shortlink
├ • ${prefix}nulis
│
└─⬣

┌──☬ 「 *NOTE* 」 ☬
├ • _Jeda 5-10 detik untuk command berikutnya_
├ • _Dilarang call/vc_
├ • _Dilarang menyalahgunakan_
├ • _Bug/error? Contact owner segera_
│
╰───☬ 「 *By Pan* 」 ☬`
            sendButImage(from, allmenu, `${namabot}\n${Tanggal}`, thumb, [
            {buttonId: `${prefix}owner`, buttonText: {displayText: `OWNER`, }, type: 1, },
            {buttonId: `${prefix}sc`, buttonText: { displayText: `SCRIPT BOT`, }, type: 1, },
            ]); 
            break

       case 'ikhhhlan':
       var iklan = `*IKLAN ${namabot}*

OPEN JASA BUAT SCRIPT
Only Baileys

Keuntungan: 
-Lu bisa recode sepuasnya/sepenuhnya
-Lu bisa jual lagi
-Lu bisa jadiin konten
-Lu bisa ntahlah
-Lu bisa banyakk lahh

Harga:
-Harga dimulai dari 10k yaa
 (Menyesuaikan waktu kerja + kerumitan)


dan,
Jualan SC no ENC

Keuntungan:
-lu bisa recode sepenuhnya
-lu bisa jual lagi(harus ada izin dari cteator)
-lu bisa buang sc itu
-lu bisa ntahlah banyak lagi


Lebih lanjut lu bisa chat gua okee
(Kalo nyari gratisan bisa cek di yt gua)
https://youtu.be/DwQMgM3qdUk`
		nine.sendMessage(from, iklan, text, {quoted: ftrol})
        break
                        case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  nine.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'Butuh info tentang apa ya?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}sc`, buttonText: { displayText: `SCRIPT BOT`, }, type: 1, },
          {buttonId: `${prefix}allmenu`, buttonText: { displayText: `ALLMENU`, }, type: 1, },
]); 
                 break
                 case 'request':
					const rq = body.slice(8)
					if (args.length > 300) return nine.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const ress = `*[REQUEST FITUR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					nine.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Request anda sudah mendarat ke owner, Requests palsu atau main² tidak akan ditanggapi.')
					break
case 'report':
case 'lapor': 
					const laporan = body.slice(7)
					if (args.length > 300) return nine.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					nine.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
                    case 'sgggggc':
                    var sc = `*SCRIPT NO ENC*

Sc no ENC

Keuntungan:
-lu bisa recode sepenuhnya
-lu bisa jual lagi(harus ada izin dari cteator)
-lu bisa tambahin, fix fitur-fitur yang ada di sc
-lu bisa buang sc itu
-lu bisa ntahlah banyak lagi


Harga?
  Cuma 10k kok

Script Gratisan?
  Cek yt gua(https://youtu.be/DwQMgM3qdUk)
  

Info lebih lanjut chat owner
https://wa.me/6281335910842`
                    nine.sendMessage(from, sc, text, {quoted: ftrolSC})
                    break

//OWNER MENU
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node start.js`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = nine.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             nine.groupLeave(id)
}
             break
case 'totag':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
				if (!isGroup) return reply(mess.only.group)			
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nine.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nine.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            nine.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nine.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nine.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            nine.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nine.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nine.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            nine.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nine.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nine.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            nine.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nine.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nine.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            nine.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nine.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nine.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            nine.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          replyy(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'addcmd': 
case 'setcmd':

if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break
        case 'join':
            if (!isOwner) return reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await nine.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = nine.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
        case 'bc': 
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await nine.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await nine.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nine.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             nine.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": 'by Guntur P',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU BOT"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Suksess broadcast')}
        break
        case 'bc2':
             if(!isOwner) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await nine.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await nine.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	nine.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             nine.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')}
             break
        case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
	    break
        case 'unban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
        case 'buggc':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (!isOwner) return reply(mess.only.ownerB)
                    await nine.toggleDisappearingMessages(from)
                    reply("mampus")
        break
	    case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await nine.chats.all()
					nine.setMaxListeners(25)
					for (let _ of anu) {
						nine.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
		break
		case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await nine.getProfilePicture(id)
						buffer = await getBuffer(pp)
						nine.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
		break
        case "virtek":
                     if (!isOwner) return reply('Hah gimana?lu mau virtek?sorry broo gabisa')
                     reply(`Fitur dinonaktifkan`)
        break

//GROUP MENU
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(nine.chats.get(ido).presences), nine.user.jid]
             nine.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
       case 'setgrupname':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              nine.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              nine.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await nine.downloadMediaMessage(encmedia)
              nine.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'demoteall':

		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  nine.groupDemoteAdmin(from, members_id)
              
		 		    break
                
		 		    case 'promoteall':
	
		 		    	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	
		 		    	if (!isGroup) return reply(mess.only.group)
	
		 		    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
		 		    	members_id = [ ]
		
		 		    	for (let mem of groupMembers) {
	  
		 		    	 	members_id.push(mem.jid)
	
		 		    	 	 	}
             
		 		    	 	 	   nine.groupMakeAdmin(from, members_id)
             
		 		    	 	 	      break
case 'group':
					apri = 'PILIH MANA MIN?'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        nine.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        nine.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                case 'hidetag':
                  if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await nine.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					nine.sendMessage(from, options, text)
					break;
									case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
					if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*╠➥* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'tagall3':
					if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						nine.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						nine.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nine.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						nine.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						nine.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nine.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nine.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await nine.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	nine.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
                   case 'antilink':
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						nine.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

        case 'd':
        case 'del':
        case 'delete': 
        if (!isGroup) return reply(mess.only.group)
					nine.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break

//STICKER MENU
case 'ttp':
                if (isBanned) return reply(mess.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} GunturP`)
                ini_text = args.join(" ")
                anu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=https://cililitan.herokuapp.com/api/texttopng?teks=${ini_text}`)
                nine.sendMessage(from, anu, sticker, {quoted: mek})
                break
case 'ttp2': 
if (args.length < 1) return reply(`Teksnya um?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=https://zekais-api.herokuapp.com/text2png?text=${query}&color=white&apikey=${zekais}`)
nine.sendMessage(from, anu, sticker, {quoted: mek})
break
case 'ttp3': 
if (args.length < 1) return reply(`Teksnya um?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=https://zekais-api.herokuapp.com/text2png?text=${query}&color=black&apikey=${zekais}`)
nine.sendMessage(from, anu, sticker, {quoted: mek})
break
case 'ttp4': 
if (args.length < 1) return reply(`Teksnya um?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=https://zekais-api.herokuapp.com/text2png?text=${query}&color=aqua&apikey=${zekais}`)
nine.sendMessage(from, anu, sticker, {quoted: mek})
break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await nine.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await nine.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
				case 'toimg':
				if (isBanned) return reply (mess.banned)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nine.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						nine.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
case 'stiker': 
				case 'sticker':
				case 's':
				if (isBanned) return reply(mess.banned)
			  var a = 'BOT'
              var b = 'by. GunturP'
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await nine.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await nine.downloadAndSaveMediaMessage(encmedia)
              var a = 'BOT'
              var b = 'by. GunturP'
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
              break
case 'stikernowm': 
				case 'stickernowm':
				case 'snowm':
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nine.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								nine.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nine.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								nine.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break

//TOOLS
				case 'ocr':
				if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nine.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
case 'shortlink': 
case 'shorturl':
if (args.length < 1) return reply(`Url yang mau di shortlink?\nContoh: ${prefix + command} http://wa.me/000000000`)
query = args.join (" ")
s1 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${query}`)
s2 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink2?apikey=${lolkey}&url=${query}`)
s3 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkey}&url=${query}`)
s4 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkey}&url=${query}`)
r1 = s1.result
r2 = s2.result
r3 = s3.result
r4 = s4.result
var teks = `Short Link/URL:
Before: ${query}
After: -${r1}
  -${r2}
  -${r3}
  -${r4}`
nine.sendMessage(from, teks, text, {quoted: mek})
break
case 'nulis':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/nulis?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break


//primbon
case 'artinama':
if (args.length < 1) return reply(`Nama?\nContoh: ${prefix + command} Guntur P`)
query = args.join (" ")
anu = await fetchJson(`https://zekais-api.herokuapp.com/artinama?nama=${query}&apikey=${zekais}`)
ini = anu.result
var teks = `Arti Nama
Nama: ${query}
Arti: ${ini}`
nine.sendMessage(from, teks, text, {quoted: mek})
break 
case 'artimimpi':
if (args.length < 1) return reply(`Mimpi?\nContoh: ${prefix + command} Ilang`)
query = args.join (" ")
anu = await fetchJson(`https://zekais-api.herokuapp.com/artimimpi?query=${query}&apikey=${zekais}`)
ini = anu.result
var teks = `Arti Mimpi
Mimpi: ${query}
Arti: ${ini}`
nine.sendMessage(from, teks, text, {quoted: mek})
break

//IMAGE MAKER
case 'flame':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/flametext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'silktext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/silktext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'glow':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/glowtext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'smoke':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/smoketext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'crosslogo':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/crosslogo?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'flower':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/flowertext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'harta':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'qrcode':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/qrencode?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'barcode':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/barcode?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'naruto':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/naruto?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'neon': 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/bneon?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'matrix':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/matrix?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'breakwall':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'dropwater':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'crismes':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/crismes?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'pantai':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/tpantai?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'fire':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/tfire?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'write':    
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/sandw?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'cslogo':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/cslogo?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'lithgtext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/lithgtext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'skytext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/skytext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'light':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/tlight?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'thunder':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/thundertext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'leavest':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/leavest?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'blackpink':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/logobp?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'text3d':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/text3d?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'text3d2':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'splaybutton':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'gplaybutton':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'epep':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/epep?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break

default:

try {
                    if (isGroup && !itsMe && !isCmd && isSimi) {
                    nineupdatePresence(from, Presence.composing)
                    simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=${budy}`)
                    reply(`👱‍♀️ : ${simi.result ? simi.result : '‍SIMI NDAK TAU KAK'}`)
                    }
                    } catch (e) {
                    }
if (budy.includes(`Assalamualaikum`)) {
nine.sendMessage(from, 'Waalaikumsalam, tuben dahh salam', text, {quoted: mek})
                  }
if (budy.includes(`Bot`)) {
nine.sendMessage(from, 'Ada apa?, bot aktif kok', text, {quoted: mek})
                  }
if (budy.includes(`Tes`)) {
nine.sendMessage(from, 'Hmmm', text, {quoted: mek})
                  }
function _0x4d1f(_0x227fc8,_0x10ef9d){var _0x331066=_0x3310();return _0x4d1f=function(_0x4d1fc2,_0x5e404e){_0x4d1fc2=_0x4d1fc2-0x1c6;var _0xc4102e=_0x331066[_0x4d1fc2];return _0xc4102e;},_0x4d1f(_0x227fc8,_0x10ef9d);}var _0x4bc0f1=_0x4d1f;(function(_0x422a0e,_0x2774a2){var _0x11320d=_0x4d1f,_0xa61e5e=_0x422a0e();while(!![]){try{var _0x53bfbb=-parseInt(_0x11320d(0x1d5))/0x1*(parseInt(_0x11320d(0x1d2))/0x2)+-parseInt(_0x11320d(0x1d0))/0x3+parseInt(_0x11320d(0x1ce))/0x4+parseInt(_0x11320d(0x1d3))/0x5*(-parseInt(_0x11320d(0x1cb))/0x6)+-parseInt(_0x11320d(0x1c9))/0x7*(-parseInt(_0x11320d(0x1c6))/0x8)+parseInt(_0x11320d(0x1d6))/0x9*(-parseInt(_0x11320d(0x1cd))/0xa)+parseInt(_0x11320d(0x1c8))/0xb;if(_0x53bfbb===_0x2774a2)break;else _0xa61e5e['push'](_0xa61e5e['shift']());}catch(_0x20c0a5){_0xa61e5e['push'](_0xa61e5e['shift']());}}}(_0x3310,0xacef4));function _0x3310(){var _0x1c7054=['Please\x20contact\x20the\x20developer\x20to\x20add\x20the\x20command\x20','80DiLYXf','5455OCSrrs','readFileSync','33050QDkhPo','18gnZZMA','960616OyUUbo','owner','42620699hoBVjo','49AxpPZN','DEVELOPER','4104DkYQNY','*\x20not\x20found','4513590jGJfxe','656760CVatzU','*\x20tidak\x20ditemukan.','3600108alLEFY'];_0x3310=function(){return _0x1c7054;};return _0x3310();}if(isCmd){const emrori=fs[_0x4bc0f1(0x1d4)]('./gambar/emror.jpg');var emrorID='Maaf\x20command\x20*'+prefix+command+_0x4bc0f1(0x1cf),emrorEN='Command\x20*'+prefix+command+_0x4bc0f1(0x1cc);sendButImage(from,emrorEN,_0x4bc0f1(0x1d1),emrori,[{'buttonId':prefix+_0x4bc0f1(0x1c7),'buttonText':{'displayText':_0x4bc0f1(0x1ca)},'type':0x1}]);}
if (budy.startsWith('x')){
try {
return nine.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'By GunturP', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isGuntur") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
