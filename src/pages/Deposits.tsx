import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Deposits = () => {
  const [depositAmount, setDepositAmount] = useState(500000);
  const [depositTerm, setDepositTerm] = useState(12);
  const interestRate = 12.5;

  const totalReturn = depositAmount * Math.pow(1 + interestRate / 100, depositTerm / 12);
  const profit = totalReturn - depositAmount;

  const depositProducts = [
    {
      title: 'Накопительный',
      rate: '12.5%',
      minAmount: '10 000 ₽',
      term: 'До 3 лет',
      icon: 'PiggyBank',
      features: ['Пополнение', 'Частичное снятие', 'Капитализация']
    },
    {
      title: 'Максимальный доход',
      rate: '14.0%',
      minAmount: '100 000 ₽',
      term: 'От 1 года',
      icon: 'TrendingUp',
      features: ['Без пополнения', 'Максимальная ставка', 'Ежемесячная выплата']
    },
    {
      title: 'Пенсионный',
      rate: '13.5%',
      minAmount: '50 000 ₽',
      term: 'До 5 лет',
      icon: 'Award',
      features: ['Для пенсионеров', 'Повышенная ставка', 'Гибкие условия']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-12 bg-gradient-to-br from-navy to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Вклады
            </h1>
            <p className="text-xl text-gray-300">
              Высокие ставки до 14% годовых с гарантией сохранности
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {depositProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={product.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-4">
                    {product.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Ставка до</span>
                      <span className="font-bold text-gold text-xl">{product.rate}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Минимум</span>
                      <span className="font-semibold text-navy">{product.minAmount}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-600">Срок</span>
                      <span className="font-semibold text-navy">{product.term}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Icon name="Check" size={16} className="text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-6 py-3 gradient-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all">
                    Открыть вклад
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-display text-3xl font-bold text-navy mb-8 text-center">
                Калькулятор доходности
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Сумма вклада: {depositAmount.toLocaleString('ru-RU')} ₽
                    </label>
                    <input
                      type="range"
                      min="10000"
                      max="5000000"
                      step="10000"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>10 тыс ₽</span>
                      <span>5 млн ₽</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Срок вклада: {depositTerm} мес
                    </label>
                    <input
                      type="range"
                      min="3"
                      max="36"
                      step="3"
                      value={depositTerm}
                      onChange={(e) => setDepositTerm(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>3 мес</span>
                      <span>36 мес</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Процентная ставка</span>
                      <span className="font-semibold text-navy">{interestRate}% годовых</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Shield" size={20} className="text-gold mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-navy mb-1">Защита вкладов</p>
                        <p className="text-xs text-gray-600">Ваши средства застрахованы государством на сумму до 1 400 000 ₽</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-navy to-slate-800 rounded-2xl p-8 text-white">
                  <h3 className="font-display text-xl font-semibold mb-6">Ваш доход</h3>
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-white/20">
                      <p className="text-sm text-gray-300 mb-1">Начальная сумма</p>
                      <p className="text-2xl font-semibold">{depositAmount.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    <div className="pb-4 border-b border-white/20">
                      <p className="text-sm text-gray-300 mb-1">Доход за {depositTerm} мес</p>
                      <p className="text-4xl font-bold text-gold">+{profit.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Итого к получению</p>
                      <p className="text-3xl font-bold">{totalReturn.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                  </div>
                  <button className="w-full mt-8 px-6 py-4 gradient-gold text-navy rounded-lg font-bold hover:shadow-xl transition-all">
                    Открыть вклад онлайн
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy mb-12 text-center">
              Почему выбирают наши вклады
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: 'TrendingUp',
                  title: 'Высокие ставки',
                  description: 'Процентные ставки до 14% годовых — одни из самых высоких на рынке'
                },
                {
                  icon: 'Shield',
                  title: 'Гарантия безопасности',
                  description: 'Вклады застрахованы государством на сумму до 1,4 млн рублей'
                },
                {
                  icon: 'Settings',
                  title: 'Гибкие условия',
                  description: 'Возможность пополнения и частичного снятия без потери процентов'
                },
                {
                  icon: 'Smartphone',
                  title: 'Онлайн управление',
                  description: 'Открывайте вклады и следите за начислениями в мобильном приложении'
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Deposits;
