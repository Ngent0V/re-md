function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6281232376207@s.whatsapp.net')}\nitem1.TEL;waid=6281232376207:6281232376207\nitem1.X-ABLabel:Busy.\nURL;My Web: https://hi.Pl€R¢0K.my.id\nEMAIL;Email Owner: me@Pl€R¢0K.my.id\nORG: NOT A BOT \nTEL;My number bot;waid=6281232376207:6281232376207\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
