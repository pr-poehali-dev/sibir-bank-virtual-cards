import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-navy opacity-95"></div>
        <div className="absolute inset-0">
          <img
            src="/img/c919a05d-949b-4955-87fd-80753d8b298d.jpg"
            alt="Premium banking"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Премиальный банкинг нового поколения
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-slide-up">
              Виртуальные карты, мгновенные платежи и эксклюзивные условия для вашего финансового роста
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/cards"
                className="px-8 py-4 gradient-gold text-navy rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Открыть виртуальную карту
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Узнать больше
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Инновационные решения для вашего удобства и безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'CreditCard',
                title: 'Виртуальные карты',
                description: 'Создавайте неограниченное количество виртуальных карт за секунды'
              },
              {
                icon: 'Zap',
                title: 'Мгновенные платежи',
                description: 'Переводы и оплата счетов в режиме реального времени'
              },
              {
                icon: 'Shield',
                title: 'Максимальная защита',
                description: 'Многоуровневая система безопасности ваших средств'
              },
              {
                icon: 'Award',
                title: 'Премиум условия',
                description: 'Эксклюзивные предложения и персональный сервис'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mb-6">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/img/ec95d837-6042-4016-a2cf-365c29cbaa83.jpg"
                alt="Premium card"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
                Виртуальные карты для любых целей
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Создавайте виртуальные карты для онлайн-покупок, подписок и путешествий. 
                Контролируйте лимиты, блокируйте и удаляйте карты одним касанием.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Мгновенное создание виртуальных карт',
                  'Индивидуальные лимиты для каждой карты',
                  'Полный контроль через мобильное приложение',
                  'Кэшбэк до 10% по премиальным категориям'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/cards"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Заказать карту
                <Icon name="ArrowRight" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
                Платежи без границ
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Оплачивайте услуги, переводите средства и управляйте счетами в едином интерфейсе. 
                Быстро, безопасно и удобно.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: 'Smartphone', label: 'Переводы по номеру телефона' },
                  { icon: 'Globe', label: 'Международные платежи' },
                  { icon: 'Receipt', label: 'Оплата счетов и услуг' },
                  { icon: 'Repeat', label: 'Автоплатежи и шаблоны' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Icon name={item.icon} size={24} className="text-gold" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/payments"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Перейти к платежам
                <Icon name="ArrowRight" size={20} />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/img/d6793d7c-4154-4b15-ba09-a3ae7eb047b2.jpg"
                alt="Payments"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Откройте счет онлайн за 5 минут и получите премиальную карту бесплатно
            </p>
            <Link
              to="/cards"
              className="inline-flex items-center gap-2 px-10 py-5 gradient-gold text-navy rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Открыть счет
              <Icon name="Sparkles" size={24} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
