import { NextResponse } from 'next/server';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function POST(request: Request) {
  try {
    const { name, email, task } = await request.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatIdEnv = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatIdEnv) {
      console.error('Telegram bot token or chat ID is missing in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const text = `<b>🆕 Новая заявка с сайта OSMI</b>\n\n` +
                 `<b>👤 Имя:</b> ${escapeHtml(name || 'Не указано')}\n` +
                 `<b>📧 Email:</b> ${escapeHtml(email || 'Не указано')}\n\n` +
                 `<b>📝 Задача:</b>\n${escapeHtml(task || 'Не указано')}`;

    const chatIds = chatIdEnv.split(/[\s,;]+/).filter(Boolean);
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const sendPromises = chatIds.map(async (chatId) => {
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.text();
        console.error(`Telegram API response error for chat_id ${chatId}:`, errorResponse);
        throw new Error(`Failed to send message to Telegram chat_id ${chatId}`);
      }
    });

    await Promise.all(sendPromises);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
