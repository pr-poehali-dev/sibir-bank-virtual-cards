import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

interface VirtualCard {
  id: string;
  name: string;
  number: string;
  cvv: string;
  expiry: string;
  balance: number;
  limit: number;
  isActive: boolean;
}

const Cards = () => {
  const [cards, setCards] = useState<VirtualCard[]>([
    {
      id: '1',
      name: 'Основная карта',
      number: '5536 9138 4567 8901',
      cvv: '123',
      expiry: '12/26',
      balance: 125450.50,
      limit: 500000,
      isActive: true
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCardName, setNewCardName] = useState('');
  const [newCardLimit, setNewCardLimit] = useState('50000');

  const createVirtualCard = () => {
    if (!newCardName.trim()) return;

    const newCard: VirtualCard = {
      id: Date.now().toString(),
      name: newCardName,
      number: `5536 ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)}`,
      cvv: Math.floor(100 + Math.random() * 900).toString(),
      expiry: '12/26',
      balance: 0,
      limit: parseInt(newCardLimit),
      isActive: true
    };

    setCards([...cards, newCard]);
    setShowCreateModal(false);
    setNewCardName('');
    setNewCardLimit('50000');
  };

  const toggleCardStatus = (id: string) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, isActive: !card.isActive } : card
    ));
  };

  const deleteCard = (id: string) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-slate-900 to-navy"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Виртуальные карты
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Создавайте неограниченное количество карт для безопасных онлайн-покупок
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-8 py-4 gradient-gold text-navy rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Icon name="Plus" size={20} className="inline mr-2" />
              Создать виртуальную карту
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`relative bg-gradient-to-br from-navy to-slate-800 rounded-2xl p-8 text-white shadow-xl transition-all ${
                  !card.isActive ? 'opacity-50' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Название карты</p>
                      <p className="font-semibold text-lg">{card.name}</p>
                    </div>
                    <div className="w-12 h-8 gradient-gold rounded"></div>
                  </div>

                  <div className="mb-8">
                    <p className="text-2xl font-mono tracking-wider mb-4">{card.number}</p>
                    <div className="flex gap-8">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Действительна до</p>
                        <p className="font-semibold">{card.expiry}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">CVV</p>
                        <p className="font-semibold">{card.cvv}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Баланс</span>
                      <span className="text-xl font-bold">{card.balance.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Лимит</span>
                      <span className="text-sm">{card.limit.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleCardStatus(card.id)}
                      className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
                    >
                      {card.isActive ? 'Заблокировать' : 'Активировать'}
                    </button>
                    <button
                      onClick={() => deleteCard(card.id)}
                      className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-navy">Новая виртуальная карта</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Icon name="X" size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Название карты
                </label>
                <input
                  type="text"
                  value={newCardName}
                  onChange={(e) => setNewCardName(e.target.value)}
                  placeholder="Например: Покупки онлайн"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Месячный лимит
                </label>
                <input
                  type="number"
                  value={newCardLimit}
                  onChange={(e) => setNewCardLimit(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none text-gray-900"
                />
              </div>
            </div>

            <button
              onClick={createVirtualCard}
              disabled={!newCardName.trim()}
              className="w-full px-6 py-3 gradient-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Создать карту
            </button>
          </div>
        </div>
      )}

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy mb-8 text-center">
              Преимущества виртуальных карт
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Zap',
                  title: 'Мгновенный выпуск',
                  description: 'Карта создается за секунды и сразу готова к использованию'
                },
                {
                  icon: 'Shield',
                  title: 'Безопасность',
                  description: 'Установите лимиты и блокируйте карту в один клик'
                },
                {
                  icon: 'Wallet',
                  title: 'Контроль расходов',
                  description: 'Отдельная карта для каждой подписки или категории покупок'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
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

export default Cards;