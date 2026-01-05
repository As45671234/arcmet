'use client';

import { useState } from 'react';

// In a real application, these should be environment variables
// NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
// NEXT_PUBLIC_TELEGRAM_CHAT_ID
const BOT_TOKEN = 'YOUR_BOT_TOKEN'; 
const CHAT_ID = 'YOUR_CHAT_ID';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const text = `
New Order:
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Оформить заказ</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Имя</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Телефон</label>
        <input
          type="tel"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Список товаров / Сообщение</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 font-bold"
      >
        {status === 'loading' ? 'Отправка...' : 'Отправить заказ'}
      </button>
      {status === 'success' && <p className="text-green-600">Заказ успешно отправлен!</p>}
      {status === 'error' && <p className="text-red-600">Ошибка отправки. Попробуйте позже.</p>}
    </form>
  );
}
