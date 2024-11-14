//  讀取 env 檔案內容
import 'dotenv/config'

// 引用line機器人
import linebot from 'linebot'

// 設定並建立機器人
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  // console.log(event)
  try {
    const result = await event.reply(event.message.text)
    console.log(result)
  } catch (e) {
    console.log(e)
  }
})

// 設定機器人監聽路徑和 port
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('啟動')
})
