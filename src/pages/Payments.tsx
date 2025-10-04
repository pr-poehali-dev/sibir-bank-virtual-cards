import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Payments = () => {
  const [activeTab, setActiveTab] = useState<'transfer' | 'bills' | 'mobile'>('transfer');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [billNumber, setBillNumber] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setPhoneNumber('');
      setAmount('');
      setCardNumber('');
      setBillNumber('');
    }, 3000);
  };

  const quickPayments = [
    { icon: 'Smartphone', label: 'Мобильная связь', category: 'mobile' },
    { icon: 'Home', label: 'Коммунальные', category: 'bills' },
    { icon: 'Tv', label: 'Интернет и ТВ', category: 'bills' },
    { icon: 'Wallet', label: 'Налоги', category: 'bills' },
    { icon: 'Car', label: 'Транспорт', category: 'bills' },
    { icon: 'GraduationCap', label: 'Образование', category: 'bills' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-12 bg-gradient-to-br from-navy to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Платежи и переводы
            </h1>
            <p className="text-xl text-gray-300">
              Мгновенные переводы и оплата услуг без комиссии
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex gap-2 mb-8 border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab('transfer')}
                      className={`px-6 py-3 font-semibold transition-colors ${
                        activeTab === 'transfer'
                          ? 'text-navy border-b-2 border-gold'
                          : 'text-gray-500 hover:text-navy'
                      }`}
                    >
                      Перевод
                    </button>
                    <button
                      onClick={() => setActiveTab('bills')}
                      className={`px-6 py-3 font-semibold transition-colors ${
                        activeTab === 'bills'
                          ? 'text-navy border-b-2 border-gold'
                          : 'text-gray-500 hover:text-navy'
                      }`}
                    >
                      Оплата счетов
                    </button>
                    <button
                      onClick={() => setActiveTab('mobile')}
                      className={`px-6 py-3 font-semibold transition-colors ${
                        activeTab === 'mobile'
                          ? 'text-navy border-b-2 border-gold'
                          : 'text-gray-500 hover:text-navy'
                      }`}
                    >
                      Мобильная связь
                    </button>
                  </div>

                  {activeTab === 'transfer' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Номер телефона или карты получателя
                        </label>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="+7 (___) ___-__-__ или 5536 9138 **** ****"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Сумма перевода
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                            ₽
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          {[1000, 5000, 10000].map((preset) => (
                            <button
                              key={preset}
                              onClick={() => setAmount(preset.toString())}
                              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                            >
                              {preset.toLocaleString('ru-RU')} ₽
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Комментарий (необязательно)
                        </label>
                        <input
                          type="text"
                          placeholder="Например: За обед"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                        />
                      </div>

                      <button
                        onClick={handlePayment}
                        disabled={!phoneNumber || !amount}
                        className="w-full px-6 py-4 gradient-gold text-navy rounded-lg font-semibold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Перевести
                      </button>
                    </div>
                  )}

                  {activeTab === 'bills' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Номер счета
                        </label>
                        <input
                          type="text"
                          value={billNumber}
                          onChange={(e) => setBillNumber(e.target.value)}
                          placeholder="Введите номер счета"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Сумма оплаты
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                            ₽
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={handlePayment}
                        disabled={!billNumber || !amount}
                        className="w-full px-6 py-4 gradient-gold text-navy rounded-lg font-semibold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Оплатить счет
                      </button>
                    </div>
                  )}

                  {activeTab === 'mobile' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Номер телефона
                        </label>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="+7 (___) ___-__-__"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Сумма пополнения
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                            ₽
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          {[100, 300, 500, 1000].map((preset) => (
                            <button
                              key={preset}
                              onClick={() => setAmount(preset.toString())}
                              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                            >
                              {preset} ₽
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={handlePayment}
                        disabled={!phoneNumber || !amount}
                        className="w-full px-6 py-4 gradient-gold text-navy rounded-lg font-semibold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Пополнить телефон
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="font-display text-xl font-semibold text-navy mb-4">
                    Быстрые платежи
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {quickPayments.map((payment, index) => (
                      <button
                        key={index}
                        className="p-4 border border-gray-200 rounded-xl hover:border-gold hover:bg-gray-50 transition-all text-center"
                      >
                        <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Icon name={payment.icon} size={24} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{payment.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-navy to-slate-800 rounded-2xl p-6 text-white">
                  <Icon name="Gift" size={32} className="text-gold mb-3" />
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Переводы без комиссии
                  </h3>
                  <p className="text-sm text-gray-300">
                    Все переводы по номеру телефона в любой банк абсолютно бесплатны
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={32} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy mb-2">
              Платеж успешно выполнен!
            </h3>
            <p className="text-gray-600">
              Средства будут зачислены в течение нескольких секунд
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Payments;
