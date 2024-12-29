require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {
    bot.sendMessage(chatId, `Yeni mesaj alındı: ${msg.text}`);
});
