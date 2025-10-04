import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Loans = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(12);
  const interestRate = 9.9;

  const monthlyPayment = (loanAmount * (interestRate / 100 / 12) * Math.pow(1 + interestRate / 100 / 12, loanTerm)) / (Math.pow(1 + interestRate / 100 / 12, loanTerm) - 1);

  const loanProducts = [
    {
      title: 'Потребительский кредит',
      rate: '9.9%',
      amount: 'До 5 млн ₽',
      term: 'До 5 лет',
      icon: 'Wallet',
      features: ['Без справок', 'Быстрое решение', 'Онлайн оформление']
    },
    {
      title: 'Автокредит',
      rate: '8.5%',
      amount: 'До 10 млн ₽',
      term: 'До 7 лет',
      icon: 'Car',
      features: ['Новые авто', 'Господдержка', 'Без первого взноса']
    },
    {
      title: 'Ипотека',
      rate: '7.2%',
      amount: 'До 30 млн ₽',
      term: 'До 30 лет',
      icon: 'Home',
      features: ['Готовое жилье', 'Семейная ипотека', 'Онлайн одобрение']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-12 bg-gradient-to-br from-navy to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Кредиты
            </h1>
            <p className="text-xl text-gray-300">
              Выгодные условия и минимальные ставки от 7.2% годовых
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {loanProducts.map((product, index) => (
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
                      <span className="text-gray-600">Ставка от</span>
                      <span className="font-bold text-gold text-xl">{product.rate}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Сумма</span>
                      <span className="font-semibold text-navy">{product.amount}</span>
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
                    Оформить кредит
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-display text-3xl font-bold text-navy mb-8 text-center">
                Кредитный калькулятор
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Сумма кредита: {loanAmount.toLocaleString('ru-RU')} ₽
                    </label>
                    <input
                      type="range"
                      min="50000"
                      max="5000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>50 тыс ₽</span>
                      <span>5 млн ₽</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Срок кредита: {loanTerm} мес
                    </label>
                    <input
                      type="range"
                      min="6"
                      max="60"
                      step="6"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>6 мес</span>
                      <span>60 мес</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Процентная ставка</span>
                      <span className="font-semibold text-navy">{interestRate}% годовых</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-navy to-slate-800 rounded-2xl p-8 text-white">
                  <h3 className="font-display text-xl font-semibold mb-6">Результаты расчета</h3>
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-white/20">
                      <p className="text-sm text-gray-300 mb-1">Ежемесячный платеж</p>
                      <p className="text-4xl font-bold">{monthlyPayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                    <div className="pb-4 border-b border-white/20">
                      <p className="text-sm text-gray-300 mb-1">Общая сумма выплат</p>
                      <p className="text-2xl font-semibold">{(monthlyPayment * loanTerm).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Переплата</p>
                      <p className="text-2xl font-semibold">{(monthlyPayment * loanTerm - loanAmount).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</p>
                    </div>
                  </div>
                  <button className="w-full mt-8 px-6 py-4 gradient-gold text-navy rounded-lg font-bold hover:shadow-xl transition-all">
                    Оформить заявку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Loans;
